package main

import (
	"log"
	"net/http"
	"os"

	"tone-data-explorer/backend/api"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()

	// API routes
	r.HandleFunc("/api/stations", api.GetStations).Methods("GET")
	r.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"ok"}`))
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Wrap the router with CORS middleware
	handler := cors.Default().Handler(r) // allows all origins by default

	log.Printf("Server starting on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))

}
