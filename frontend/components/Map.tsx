"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false, // this ensures Leaflet only loads on the client
});

export default function Map(props: { stations: any[]; onSelect: (s: any) => void }) {
  return ( <div className="h-[400px] w-full"> <MapLeaflet {...props} /></div>);
}
