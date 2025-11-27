"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyW3p1mu6-jXC43zutrGK5p6a-AIICrURD9K4paCZfKQkvCDt8C0T-K-m9bmz40oz82XA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert(`Thank you, ${formData.name}! You are added.`);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.log("error", error);
      console.error("Something went wrong.");
    }
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
        placeholder="Your name"
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email address"
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
      />

      <button
        type="submit"
        className="bg-(--primary) text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
      >
        Submit
      </button>
    </motion.form>
  );
}
