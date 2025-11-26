"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/TONe_logo_NO.webp"
            width={40}
            height={40}
            alt="TONe logo"
            className="rounded-md"
          />
          <span className="font-bold text-lg">TONe Explorer</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Kart</Link>
          <Link href="/">Stasjoner</Link>
          <Link href="/">Data</Link>
          <Link href="/">Om prosjektet</Link>
        </div>

        {/* GitHub / Login */}
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </motion.nav>
  );
}
