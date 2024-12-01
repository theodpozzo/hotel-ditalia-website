package db

import (
	"hotel-ditalia-website/models"
	"testing"
	"time"
)

func TestDb(t *testing.T) {
	db, err := New_DB()
	if err != nil {
		t.Error(err.Error())
	}

	t.Run("Rooms", func(t *testing.T) {
		err = db.Insert_room(models.Room{RoomID: 2, RoomNumber: 2})
		if err != nil {
			t.Errorf(err.Error())
		}

		err = db.Delete_room(2)
		if err != nil {
			t.Errorf(err.Error())
		}
	})

	t.Run("Guests", func(t *testing.T) {
		guest := models.Guest{
			GuestID: 1,
		}
		err = db.Insert_guest(guest)
		if err != nil {
			t.Errorf(err.Error())
		}

		guest1, err := db.Get_guest(guest.GuestID)
		if err != nil {
			t.Errorf(err.Error())
		}
		if guest1 != guest {
			t.Error("Guest does not equal")
		}

		err = db.Delete_guest(guest.GuestID)
		if err != nil {
			t.Errorf(err.Error())
		}
	})

	t.Run("Booking", func(t *testing.T) {
		guest := models.Guest{
			GuestID: 1,
		}
		err = db.Insert_guest(guest)
		if err != nil {
			t.Errorf(err.Error())
		}
		room := models.Room{
			RoomID: 1,
		}
		err = db.Insert_room(room)

		booking := models.Booking{
			BookingID:     1,
			GuestID:       guest.GuestID,
			RoomID:        room.RoomID,
			ArrivalDate:   time.Now(),
			DepartureDate: time.Now().Add(time.Hour * 24),
			Price:         100,
			Source:        "Online",
		}
		err = db.Insert_booking(booking)
		if err != nil {
			t.Errorf(err.Error())
		}

		booking1, err := db.Get_booking(room.RoomID)
		if err != nil {
			t.Errorf(err.Error())
		}
		if !compare_bookings(booking, booking1) {
			t.Errorf("Bookings not equal")
		}

		err = db.Delete_booking(booking.BookingID)
		if err != nil {
			t.Errorf(err.Error())
		}

		err = db.Delete_guest(guest.GuestID)
		if err != nil {
			t.Errorf(err.Error())
		}
		err = db.Delete_room(room.RoomID)
		if err != nil {
			t.Errorf(err.Error())
		}
	})
}

func compare_bookings(b1, b2 models.Booking) bool {
	easy := b1.BookingID == b2.BookingID && b1.GuestID == b2.GuestID && b1.RoomID == b2.RoomID && b1.Price == b2.Price && b1.Source == b2.Source
	t1 := b1.ArrivalDate.Sub(b2.ArrivalDate).Abs().Seconds()
	easy = easy && (t1 < 30)
	t2 := b1.DepartureDate.Sub(b2.DepartureDate).Abs().Seconds()
	easy = easy && (t2 < 30)

	return easy
}
