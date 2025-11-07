"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "Attending in person",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your RSVP has been submitted.`);
    setFormData({
      name: "",
      email: "",
      attendance: "Attending in person",
      message: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
         className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
         className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      />
      <select
        name="attendance"
        value={formData.attendance}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      >
        <option>Attending in person</option>
        <option>Attending online</option>
        <option>Not attending</option>
      </select>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message (optional)"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      />
      <button
        type="submit"
        className="bg-(--primary) text-white font-semibold py-2 px-4 rounded-md hover:bg-(--accent) transition-colors"
      >
        Submit RSVP
      </button>
    </motion.form>
  );
}
