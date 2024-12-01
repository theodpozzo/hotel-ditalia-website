package db

import (
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"hotel-ditalia-website/models"
)

// TODO: Make these all able to be done with a TX so we can make stuff atomic
// TODO: Add composable queryies for all of these

func (data *DB) Insert_room(room models.Room) error {
	str := `insert into "rooms"("room_id", "room_number") values($1, $2)`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, room.RoomID, room.RoomNumber)
	})
}

func (data *DB) Delete_room(id models.Id) error {
	str := `delete from "rooms" where room_id = $1`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, id)
	})
}

func (data *DB) Get_room(id models.Id) (models.Room, error) {
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

func (data *DB) BlankQuery_Room() ([]models.Room, error) {
	return nil, nil
}
