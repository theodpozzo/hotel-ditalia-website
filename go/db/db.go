package db

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"sync"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

type DB struct {
	lock   sync.Mutex
	dbConn *pgxpool.Pool
	ctx    context.Context
	logger *log.Logger
}

func New_DB() (*DB, error) {
	// PostgreSQL connection string
	ctx := context.Background()
	db, err := pgxpool.New(ctx, "postgres://go:go@localhost:5432/hotel")
	if err != nil {
		return nil, err
	}

	tx, err := db.Begin(ctx)
	if err != nil {
		return nil, err
	}

	// Create rooms table
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS rooms ( 
        room_id BIGINT PRIMARY KEY,
        room_number INTEGER NOT NULL UNIQUE
    )`)
	if err != nil {
		return nil, err
	}

	// Create guests table
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS guests ( 
        guest_id BIGINT PRIMARY KEY,
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
		return nil, err
	}

	// Create bookings table with foreign keys
	_, err = tx.Exec(ctx, `
    CREATE TABLE IF NOT EXISTS bookings ( 
        booking_id BIGINT PRIMARY KEY,
        room_id INTEGER NOT NULL REFERENCES rooms(room_id),
        guest_id INTEGER NOT NULL REFERENCES guests(guest_id),
        arrival_date TIMESTAMP NOT NULL,
        departure_date TIMESTAMP NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        special_requests TEXT,
        source VARCHAR(50) NOT NULL
    )`)
	if err != nil {
		return nil, err
	}

	err = tx.Commit(ctx)
	if err != nil {
		return nil, err
	}

	return &DB{
		dbConn: db,
		lock:   sync.Mutex{},
		ctx:    ctx,
		logger: log.Default(),
	}, nil
}

// TODO:
// func (data *DB) Reconnect() err {
// 	db, err := pgxpool.New(ctx, "postgres://go:go@localhost:5432/hotel")
// 	if err != nil {
// 		return err
// 	}
// }

func (data *DB) Close() {
	data.dbConn.Close()
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
