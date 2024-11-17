package db

import (
	"hotel-ditalia-website/models"
	"testing"
)

func TestDb(t *testing.T) {
	db := New_DB()

	err := db.Insert_room(models.Room{RoomID: 2, RoomNumber: 2})
	if err != nil {
		t.Errorf(err.Error())
	}

	err = db.Delete_room(2)
	if err != nil {
		t.Errorf(err.Error())
	}
}
