package db

import (
	"fmt"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"hotel-ditalia-website/models"
)

func encodeBooking(first string, b models.Booking) (string, pgx.NamedArgs) {
	str := first + `(booking_id, room_id, guest_id, arrival_date, departure_date, price, special_requests, source) 
  values(@booking_id, @room_id, @guest_id, @arrival_date, @departure_date, @price, @special_requests, @source)`
	fmt.Println(str)
	args := pgx.NamedArgs{
		"booking_id":       b.BookingID,
		"room_id":          b.RoomID,
		"guest_id":         b.GuestID,
		"arrival_date":     b.ArrivalDate,
		"departure_date":   b.DepartureDate,
		"price":            b.Price,
		"special_requests": b.SpecialRequests,
		"source":           b.Source,
	}
	return str, args
}

func (data *DB) Insert_booking(b models.Booking) error {
	str, args := encodeBooking(`insert into "bookings" `, b)
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, args)
	})
}

func (data *DB) Update_booking(g models.Guest) error {
	// oldGuest, err := data.Get_guest(g.GuestID)
	// if err != nil {
	// 	return err
	// }
	// data.db_void_stmt(func(stmt *pgx.Tx) (pgconn.CommandTag, error) {
	// 	return stmt.Exec(data.ctx, str, g)
	// })
	return nil
}

func (data *DB) Delete_booking(id models.Id) error {
	str := `delete from "bookings" where booking_id = $1`
	return data.db_void_stmt(func(stmt pgx.Tx) (pgconn.CommandTag, error) {
		return stmt.Exec(data.ctx, str, id)
	})
}

func (data *DB) Get_booking(id models.Id) (models.Booking, error) {
	str := `select * from "bookings" where booking_id = $1`
	return db_ret_stmt_single[models.Booking](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str, id)
	})
}

func (data *DB) Enum_booking(id models.Id) ([]models.Booking, error) {
	str := `select * from "bookings"`
	return db_ret_stmt_enum[models.Booking](data, func(stmt pgx.Tx) (pgx.Rows, error) {
		return stmt.Query(data.ctx, str, id)
	})
}
