export default function StationDetails({ station }) {
    if (!station)
      return (
        <div className="p-4 text-gray-500 italic">
          Velg en stasjon fra kartet eller listen.
        </div>
      );
  
    return (
      <div className="border rounded-lg p-4 shadow bg-white">
        <h2 className="text-xl font-semibold mb-2">{station.name}</h2>
  
        <p><strong>ID:</strong> {station.id}</p>
        <p><strong>Høyde:</strong> {station.elevation} m</p>
        <p><strong>Posisjon:</strong> {station.lat}, {station.lon}</p>
      </div>
    );
  }
  