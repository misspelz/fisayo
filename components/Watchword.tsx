"use client";

import { motion } from "framer-motion";

export default function Watchword() {
  return (
    <motion.div
      className="max-w-xl mx-auto bg-(--secondary) p-8 rounded-xl shadow-lg mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-(--primary) mb-2 text-center">
        &quot;Love. Trust. Forever.&quot;
      </h3>
      <p className="text-gray-700 text-center">
        This is our guiding principle and the essence of our journey together.
      </p>
    </motion.div>
  );
}
