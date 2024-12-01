package db

import (
  "fmt"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"hotel-ditalia-website/models"
)

func encodeGuest(first string, g models.Guest) (string, pgx.NamedArgs) {
	str := first + `(guest_id, fname, sname, email, phone, cpf, addy, city, state, cep, country, license_plate) 
  values(@guest_id, @fname, @sname, @email, @phone, @cpf, @addy, @city, @state, @cep, @country, @license_plate)`
	fmt.Println(str)
	args := pgx.NamedArgs{
		"guest_id":      g.GuestID,
		"fname":         g.FirstName,
		"sname":         g.LastName,
		"email":         g.Email,
		"phone":         g.Phone,
		"cpf":           g.CPF,
		"addy":          g.Address,
		"city":          g.City,
		"state":         g.State,
		"cep":           g.CEP,
		"country":       g.Country,
		"license_plate": g.LicensePlate,
	}
	return str, args
}

func (data *DB) Insert_guest(g models.Guest) error {
	str, args := encodeGuest(`insert into "guests" `, g)
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, args)
	})
}

func (data *DB) Update_guest(g models.Guest) error {
	// oldGuest, err := data.Get_guest(g.GuestID)
	// if err != nil {
	// 	return err
	// }
	// data.db_void_stmt(func(stmt *pgx.Tx) (pgconn.CommandTag, error) {
	// 	return stmt.Exec(data.ctx, str, g)
	// })
	return nil
}

func (data *DB) Delete_guest(id models.Id) error {
	str := `delete from "guests" where guest_id = $1`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, id)
	})
}

func (data *DB) Get_guest(id models.Id) (models.Guest, error) {
	str := `select * from "guests" where guest_id = $1`
	return db_ret_stmt_single[models.Guest](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str, id)
	})
}

func (data *DB) Enum_guest(id models.Id) ([]models.Guest, error) {
	str := `select * from "guests"`
	return db_ret_stmt_enum[models.Guest](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str, id)
	})
}

func (data *DB) BlankQuery_guest() ([]models.Guest, error) {
	return nil, nil
}
