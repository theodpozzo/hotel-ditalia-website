package main

import "time"

type Room struct {
	RoomID     int64 `json:"room_id" db:"room_id"`
	RoomNumber int64 `json:"room_number" db:"room_number"`
}

type Guest struct {
	GuestID      int64  `json:"guest_id" db:"guest_id"`
	FirstName    string `json:"fname" db:"fname"`
	LastName     string `json:"sname" db:"sname"`
	Email        string `json:"email" db:"email"`
	Phone        string `json:"phone" db:"phone"`
	CPF          string `json:"cpf" db:"cpf"`
	Address      string `json:"addy" db:"addy"`
	City         string `json:"city" db:"city"`
	State        string `json:"state" db:"state"`
	CEP          string `json:"cep" db:"cep"`
	Country      string `json:"country" db:"country"`
	LicensePlate string `json:"license_plate" db:"license_plate"`
}

type Booking struct {
	BookingID       int64     `json:"booking_id" db:"booking_id"`
	RoomID          int64     `json:"room_id" db:"room_id"`
	GuestID         int64     `json:"guest_id" db:"guest_id"`
	ArrivalDate     time.Time `json:"arrival_date" db:"arrival_date"`
	DepartureDate   time.Time `json:"departure_date" db:"departure_date"`
	Price           float64   `json:"price" db:"price"`
	SpecialRequests string    `json:"special_requests" db:"special_requests"`
	Source          string    `json:"source" db:"source"`
}
