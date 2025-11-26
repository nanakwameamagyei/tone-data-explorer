"use client";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export default function MapLeaflet({
  stations,
  onSelect,
}: {
  stations: Station[];
  onSelect: (s: Station) => void;
}) {
  useEffect(() => {
    // Fix marker icon paths for Next.js
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/marker-icon-green.png",
      iconUrl: "/marker-icon-green.png",
      shadowUrl: "/marker-shadow.png",
    });
  }, []);
  console.log("Stations:", stations)
  return (
    <MapContainer
      //center={[0, 0]} // default center
      //zoom={2}
      center={stations.length ? [stations[0].lat, stations[0].lon] : [0, 0]}
zoom={stations.length ? 6 : 2}

      scrollWheelZoom={true}
      className="map-container h-[400px] w-full rounded-lg shadow"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stations.map((s) => (
        <Marker
          key={s.id}
          position={[s.lat, s.lon]}
          eventHandlers={{ click: () => onSelect(s) }}
        >
          <Popup>
            <strong>{s.name}</strong>
            <br />
            ID: {s.id}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
