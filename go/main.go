package main

import (
	"context"
	"hotel-ditalia-website/api"
	"hotel-ditalia-website/db"
)

func main() {
	ctx := context.Background()
	db, err := db.New_DB()
	if err != nil {
		panic(err)
	}
	server := api.New("6969", ctx, db)
	server.Start()

	for {
		select {
		case <-ctx.Done():
		}
	}
}
