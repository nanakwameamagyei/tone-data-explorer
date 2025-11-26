export default function DownloadCSV({ station }) {
    if (!station) return null;
  
    const download = () => {
      const csv = `id,name,lat,lon,elevation\n${station.id},${station.name},${station.lat},${station.lon},${station.elevation}`;
      const blob = new Blob([csv], { type: "text/csv" });
  
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${station.id}.csv`;
      link.click();
    };
  
    return (
      <button
        onClick={download}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Last ned CSV
      </button>
    );
  }
  