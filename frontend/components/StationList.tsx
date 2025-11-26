import { Station } from '../types';

export default function StationList({ stations }: { stations: Station[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {stations.map(station => (
        <div
          key={station.id}
          className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900">{station.name}</h2>
          <p className="text-sm text-gray-600 mt-1">ID: {station.id}</p>
          <div className="mt-2 text-sm space-y-1">
            <div><span className="font-medium">Latitude:</span> {station.lat.toFixed(4)}°</div>
            <div><span className="font-medium">Longitude:</span> {station.lon.toFixed(4)}°</div>
            <div><span className="font-medium">Elevation:</span> {station.elevation} m</div>
          </div>
        </div>
      ))}
    </div>
  );
}
