package main

type Rooms struct {
	RoomId int64 `json:"room_id" sql:"not null, unique"`
}

type Guests struct {
}

type Bookings struct {
}
