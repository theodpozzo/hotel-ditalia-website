package main

import (
	"context"
	"database/sql"
	"github.com/go-sql-driver/mysql"
	"time"
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

	// Create rooms table
	_, err = tx.Exec(`
    CREATE TABLE Rooms ( 
        room_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
        room_number INTEGER NOT NULL UNIQUE
    )`,
	)
	if err != nil {
		panic(err)
	}

	// Create guests table
	_, err = tx.Exec(`
    CREATE TABLE Guests ( 
        guest_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
        fName TEXT NOT NULL,
        sName TEXT NOT NULL,
        email TEXT UNIQUE,
        phone TEXT
        cpf TEXT,
        addy TEXT,
        city TEXT,
        state TEXT,
        cep TEXT,
        country TEXT,
        license_plate TEXT
    )`,
	)
	if err != nil {
		panic(err)
	}

	// Create bookings table with foreign keys
	_, err = tx.Exec(`
    CREATE TABLE Bookings ( 
        booking_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
        FOREIGN KEY (room_id) REFERENCES Rooms(room_id),
        FOREIGN KEY (guest_id) REFERENCES Guests(guest_id),
		arrival_date DATE NOT NULL,
		departure_date DATE NOT NULL,
		price DECIMAL(10, 2) NOT NULL,
		special_requests TEXT,
		source VARCHAR(50) NOT NULL
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
