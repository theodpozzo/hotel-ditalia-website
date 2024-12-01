package api

import (
	"encoding/json"
	"fmt"
	"hotel-ditalia-website/models"
	"net/http"
)

func (s ApiSetup) registerRooms(a *Api) {
	s.router.HandleFunc(PathPrefix+"room/{id}", a.Handle_RoomsGet).Methods("GET")
	s.router.HandleFunc(PathPrefix+"room", a.Handle_RoomsPut).Methods("PUT")
	s.router.HandleFunc(PathPrefix+"room", a.Handle_RoomsPost).Methods("POST")
	s.router.HandleFunc(PathPrefix+"room/{id}", a.Handle_RoomsDelete).Methods("DELETE")
	s.router.HandleFunc(PathPrefix+"rooms", a.Handle_RoomsGet).Methods("GET")
}

func (api *Api) Handle_RoomsGet(w http.ResponseWriter, r *http.Request) {
	res := []models.Room{}

	res, err := api.data.Enum_room()
	if err != nil {
		fmt.Println(err)
		// todo: encode the error and return
		return
	}

	json.NewEncoder(w).Encode(res)
}

func (api *Api) Handle_RoomsPut(w http.ResponseWriter, r *http.Request) {
}

func (api *Api) Handle_RoomsPost(w http.ResponseWriter, r *http.Request) {
}

func (api *Api) Handle_RoomsDelete(w http.ResponseWriter, r *http.Request) {
}
