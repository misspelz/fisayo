"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg",
  "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg",
  "/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg",
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-cycle images on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="relative w-[90%] mx-auto h-[400px] p-4  rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className=" w-full  rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={images[current]}
              alt={`Gallery image ${current + 1}`}
              fill
              className="object-contain !rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Desktop grid
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: idx * 0.1,
            type: "spring",
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <Image
            src={src}
            alt={`Gallery image ${idx + 1}`}
            fill
            className="object-cover rounded-xl object-scale-down mt-4"
          />
          <motion.div
  className="absolute inset-0 pointer-events-none overflow-hidden"
  animate={{ x: ["-100%", "100%"] }}
  transition={{ repeat: Infinity, repeatType: "loop", duration: 4, ease: "linear" }}
>
  <div className="w-[200%] h-full bg-gradient-to-r from-white/20 via-white/50 to-white/20 blur-3xl" />
</motion.div>

        </motion.div>
      ))}
    </div>
  );
}
