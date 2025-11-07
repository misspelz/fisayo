"use client";

import { motion } from "framer-motion";

const events = [
  { year: "2018", text: "Met at college – the beginning of our journey ❤️" },
  { year: "2019", text: "First trip together – unforgettable memories 🌴" },
  { year: "2021", text: "Moved in together – building our home 🏡" },
  { year: "2023", text: "Engaged – said YES forever 💍" },
];

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="mb-8 border-l-2 border-(--primary) pl-6"
        >
          <h3 className="text-lg font-bold text-(--primary)">{event.year}</h3>
          <p className="text-gray-600">{event.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
