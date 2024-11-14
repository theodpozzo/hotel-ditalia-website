package main

import (
	"context"
	"database/sql"
	_ "github.com/lib/pq"
	"time"
)

func initialise(name string) {
	// PostgreSQL connection string
	db, err := sql.Open("postgres", "host=localhost port=5432 user=postgres password=your_password sslmode=disable")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	ctx := context.Background()
	tx, err := db.BeginTx(ctx, nil)
	if err != nil {
		panic(err)
	}

	// Create database
	_, err = tx.Exec("CREATE DATABASE " + name)
	if err != nil {
		panic(err)
	}

	// Reconnect to the new database
	db, err = sql.Open("postgres", "host=localhost port=5432 user=postgres password=your_password dbname="+name+" sslmode=disable")
	if err != nil {
		panic(err)
	}

	// Create rooms table
	_, err = tx.Exec(`
    CREATE TABLE rooms ( 
        room_id SERIAL PRIMARY KEY,
        room_number INTEGER NOT NULL UNIQUE
    )`)
	if err != nil {
		panic(err)
	}

	// Create guests table
	_, err = tx.Exec(`
    CREATE TABLE guests ( 
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
	_, err = tx.Exec(`
    CREATE TABLE bookings ( 
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

	err = tx.Commit()
	if err != nil {
		panic(err)
	}
}
