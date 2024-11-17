package main

import (
	"fmt"

	"hotel-ditalia-website/api"
	"hotel-ditalia-website/db"
	"hotel-ditalia-website/models"
)

func main() {
	api.New()
	db := db.New_DB()

	fmt.Println(db.Delete_room(1))

	fmt.Println(db.Insert_room(models.Room{RoomID: 1, RoomNumber: 1}))

	fmt.Println(db.Get_room(1))

	fmt.Println(db.Delete_room(1))
}
