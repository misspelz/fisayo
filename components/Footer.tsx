"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-[#f9f6ef] via-[#faf4e6] to-[#e8f2ea] py-10 sm:py-12 border-t border-[#d4af37]/30"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-6 space-y-4">
        {/* Names */}
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] text-[#1b3d2f] drop-shadow-sm">
          Fisayo <span className="text-[#d4af37]">&</span> Bolaji
        </h2>

        {/* Tagline */}
        <p className="text-[#1b3d2f]/70 italic text-sm sm:text-base">
          “Forever starts here.”
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-[#1b3d2f]/80 font-medium text-sm sm:text-base">
          {["Our Story", "Gallery", "Details", "RSVP"].map((name) => (
            <Link
              key={name}
              href={`/${name.toLowerCase().replace(" ", "")}`}
              className="hover:text-[#d4af37] transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-1 mt-4">
          <p className="text-[#1b3d2f]/70 text-xs sm:text-sm">
            © {new Date().getFullYear()} Fisayo & Bolaji. All rights reserved.
          </p>
          <p className="text-[#1b3d2f]/60 text-xs">
            Designed with <span className="text-[#d4af37]">♥</span> by  <a
              href="https://wa.link/j5eic7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] font-medium hover:underline"
            >
              Pelz
            </a>
          </p>
        </div>
      </div>

      {/* Soft gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#d4af37]/10 to-transparent" />
    </motion.footer>
  );
}
