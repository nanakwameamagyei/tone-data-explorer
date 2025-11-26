"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import StationDetails from "@/components/StationDetails";
import TimeSeriesChart from "@/components/TimeSeriesChart";
import DownloadCSV from "@/components/DownloadCSV";
import RequestDataForm from "@/components/RequestDataForm";
import { motion } from "framer-motion";

export default function Home() {
  const [stations, setStations] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/stations")
      .then((r) => r.json())
      .then((data) => setStations(data))
      .catch((err) => console.error("Failed to fetch stations:", err));
  }, []);

  const dummyData = [
    { date: "2024-01", count: 4 },
    { date: "2024-02", count: 2 },
    { date: "2024-03", count: 7 },
    { date: "2024-04", count: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 px-4 max-w-7xl mx-auto">

        
        {/* Hero */}
        <section className="relative h-52 w-full rounded-xl overflow-hidden shadow">
          <img src="/hero-polar.jpg" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-3xl font-bold">TONe-datautforskeren</h1>
            <p className="opacity-90">Visualisering av dyreobservasjoner i Antarktis</p>
          </div>
        </section>

        {/* Map + Sidebar */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2 h-[600px] rounded-xl overflow-hidden shadow bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Map stations={stations} onSelect={setSelected} />
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-xl shadow h-fit md:sticky md:top-32 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StationDetails station={selected} />
            {selected && <TimeSeriesChart data={dummyData} />}
            <DownloadCSV station={selected} />
            <RequestDataForm />
          </motion.div>
        </section>
      </main>
      <footer className="text-center text-gray-500 py-10 text-sm">
  TONe Project Demo By <strong>Nana Kwame Amagyei</strong>. © {new Date().getFullYear()} · Norsk Polarinstitutt
</footer>

    </div>
  );
}
