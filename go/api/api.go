package api

import (
	"context"
	"encoding/json"
	"fmt"
	"hotel-ditalia-website/db"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/mux"
)

const PathPrefix = "/api/v1/"

type Api struct {
	lock       sync.Mutex
	listenAddr string
	srv        *http.Server
	ctx        context.Context

	data   *db.DB
	logger log.Logger
}

type ApiSetup struct {
	router *mux.Router
}

func New(addr string, ctx context.Context, db *db.DB) ServerApi {
	router := mux.NewRouter()

	setup := ApiSetup{}
	setup.Setup()

	srv := &http.Server{
		Handler: router,
		Addr:    "127.0.0.1:6969",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	api := &Api{
		lock:       sync.Mutex{},
		listenAddr: addr,
		data:       db,
		srv:        srv,
		ctx:        ctx,
	}

	// Register all the endpoints
	setup.registerRooms(api)
	setup.RegisterBookings(api)
	setup.RegisterGuests(api)

	return api
}

type ServerApi interface {
	Start()
	Stop()
}

func (a *Api) Start() {
	fmt.Println("Starting the api")
	log.Fatal(a.srv.ListenAndServe())
}

func (*Api) Stop() {
	fmt.Println("Stopping api")
}

func (s ApiSetup) Setup() {
	s.router.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]bool{"ok": true})
	})
}
