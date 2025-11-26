package api

import (
	"net/http"
	"os"
)

func GetStations(w http.ResponseWriter, r *http.Request) {
	EnableCORS(w)

	data, err := os.ReadFile("data/stations.json")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}
