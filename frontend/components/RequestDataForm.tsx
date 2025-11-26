"use client";

import { useState } from "react";

export default function RequestDataForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="border p-4 rounded-lg shadow bg-white mt-4">
      <h3 className="font-semibold mb-2">Be om datasett</h3>

      <input
        className="border p-2 rounded w-full mb-3"
        placeholder="E-postadresse"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => alert("Forespørsel sendt! (mock)")}
      >
        Send forespørsel
      </button>
    </div>
  );
}
