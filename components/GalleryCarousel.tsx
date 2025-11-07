"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg",
  "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg",
  "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg",
];

export default function GalleryCarousel() {
  return (
    <div className="flex overflow-x-scroll gap-6 p-4 scrollbar-hide">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="shrink-0 w-64 h-64 relative rounded-xl overflow-hidden shadow-lg"
        >
          <Image src={src} alt="Gallery image" fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
