package db

import (
	"context"
	"database/sql"
	"fmt"
	"hotel-ditalia-website/models"
	"log"
	"sync"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	fmt.Println("Test")
}

type DB struct {
	lock   sync.Mutex
	dbConn *pgxpool.Pool
	ctx    context.Context
	logger *log.Logger
	cancel context.CancelFunc
}

func New_DB() *DB {
	// PostgreSQL connection string
	ctx, cancel := context.WithCancel(context.Background())
	db, err := pgxpool.New(ctx, "postgres://go:go@localhost:5432/hotel")
	if err != nil {
		panic(err)
	}

	tx, err := db.Begin(ctx)
	if err != nil {
		panic(err)
	}

	// Create rooms table
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS rooms ( 
        room_id SERIAL PRIMARY KEY,
        room_number INTEGER NOT NULL UNIQUE
    )`)
	if err != nil {
		panic(err)
	}

	// Create guests table
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS guests ( 
        guest_id SERIAL PRIMARY KEY,
        fname VARCHAR(50) NOT NULL,
        sname VARCHAR(50) NOT NULL,
        email VARCHAR(50) UNIQUE,
        phone VARCHAR(15),
        cpf VARCHAR(16),
        addy VARCHAR(40),
        city VARCHAR(50),
        state VARCHAR(2),
        cep VARCHAR(12),
        country VARCHAR(2),
        license_plate VARCHAR(20)
    )`)
	if err != nil {
		panic(err)
	}

	// Create bookings table with foreign keys
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS bookings ( 
        booking_id SERIAL PRIMARY KEY,
        room_id INTEGER NOT NULL REFERENCES rooms(room_id),
        guest_id INTEGER NOT NULL REFERENCES guests(guest_id),
        arrival_date TIMESTAMP NOT NULL,
        departure_date TIMESTAMP NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        special_requests TEXT,
        source VARCHAR(50) NOT NULL
    )`)
	if err != nil {
		panic(err)
	}

	err = tx.Commit(ctx)
	if err != nil {
		panic(err)
	}

	return &DB{
		dbConn: db,
		lock:   sync.Mutex{},
		ctx:    ctx,
		cancel: cancel,
		logger: log.Default(),
	}
}

func (data *DB) Close() {
	data.dbConn.Close()
	data.cancel()
}

// TODO: Pass in the type so maybe tx
func (data *DB) db_void_stmt(exec func(pgx.Tx) (pgconn.CommandTag, error)) error {
	tx, err := data.dbConn.Begin(data.ctx)
	if err != nil {
		return err
	}

	cmd, err := exec(tx)
	if err != nil {
		return err
	}
	if cmd.RowsAffected() < 1 {
		return sql.ErrNoRows
	}

	return tx.Commit(data.ctx)
}

func db_ret_stmt_single[T any](data *DB, exec func(pgx.Tx) (pgx.Rows, error)) (T, error) {
	// Don't know if we need to get stuff in a tx
	stmt, err := data.dbConn.Begin(data.ctx)
	if err != nil {
		return *new(T), err
	}

	rows, err := exec(stmt)
	if err != nil {
		return *new(T), err
	}
	ret, err := pgx.CollectOneRow(rows, pgx.RowToStructByName[T])
	if err != nil {
		return *new(T), err
	}
	err = stmt.Commit(data.ctx)
	if err != nil {
		// TODO: Log
		fmt.Print(err)
	}
	return ret, err
}

// For this we might have to return the rows?
func db_ret_stmt_enum[T any](data *DB, exec func(pgx.Tx) (pgx.Rows, error)) ([]T, error) {
	stmt, err := data.dbConn.Begin(data.ctx)

	rows, err := exec(stmt)
	if err != nil {
		return nil, nil
	}
	vals, err := pgx.CollectRows(rows, pgx.RowToStructByName[T])
	if err != nil {
		return nil, err
	}
	err = stmt.Commit(data.ctx)
	if err != nil {
		// TODO: Log
		fmt.Println(err)
	}

	return vals, err
}

// TODO: Make these all able to be done with a TX so we can make stuff atomic
// TODO: Add composable queryies for all of these
func (data *DB) Insert_room(room models.Room) error {
	str := `insert into "rooms"("room_id", "room_number") values($1, $2)`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, room.RoomID, room.RoomNumber)
	})
}

func (data *DB) Delete_room(id int64) error {
	str := `delete from "rooms" where room_id = $1`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, id)
	})
}

func (data *DB) Get_room(id int64) (models.Room, error) {
	str := `select * from "rooms" where room_id = $1`
	return db_ret_stmt_single[models.Room](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str, id)
	})
}

func (data *DB) Enum_room() ([]models.Room, error) {
	str := `select * from "rooms"`
	return db_ret_stmt_enum[models.Room](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str)
	})
}
