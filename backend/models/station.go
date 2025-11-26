package models

import (
	"encoding/json"
	"os"
)

type Station struct {
	ID        string  `json:"id"`
	Name      string  `json:"name"`
	Latitude  float64 `json:"lat"`
	Longitude float64 `json:"lon"`
	Elevation int     `json:"elevation"`
}

func LoadStations() ([]Station, error) {
	data, err := os.ReadFile("data/stations.json")
	if err != nil {
		return nil, err
	}
	var stations []Station
	err = json.Unmarshal(data, &stations)
	return stations, err
}
