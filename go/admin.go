package main

import (
	"context"
	"database/sql"
	"time"
	// "github.com/go-sql-driver/mysql"
)

func initialise(name string) {
	db, err := sql.Open("mysql", "user:password@/dbname")
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	ctx := context.Background()
	tx, err := db.BeginTx(ctx, nil)
	if err != nil {
		panic(err)
	}

	_, err = tx.Exec("CREATE DATABASE " + name)
	if err != nil {
		panic(err)
	}

	_, err = tx.Exec("USE " + name)
	if err != nil {
		panic(err)
	}

	// Create rooms tabel
	_, err = tx.Exec(`
    CREATE TABLE "Rooms" ( 
      "id" integer not null primary key autoincrement, 
      "room_number" integer
    )`,
	)
	if err != nil {
		panic(err)
	}

	// Create rooms table
	_, err = tx.Exec(`
    CREATE TABLE "Guests" ( 
      "guest_id" integer not null primary key autoincrement, 
      "fName" VARCHAR(50),
      "sName" VARCHAR(50),
      "email" VARCHAR(50),
      "phone" VARCHAR(15),
      "cpf" VARCHAR(16),
      "addy" VARCHAR(40),
      "city" VARCHAR(50),
      "state" VARCHAR(2),
      "cep" VARCHAR(12),
      "country" VARCHAR(2),
      "license_plate" VARCHAR(20)
    )`,
	)
	if err != nil {
		panic(err)
	}

	_, err = tx.Exec(`
    CREATE TABLE Bookings ( 
      booking_id integer not null primary key autoincrement,
    )`,
	)
	if err != nil {
		panic(err)
	}

	err = tx.Commit()
	if err != nil {
		panic(err)
	}
}
