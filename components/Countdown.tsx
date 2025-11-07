"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  weddingDate: string; // ISO format: "YYYY-MM-DDTHH:MM:SS"
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="flex gap-4 justify-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {timerItems.map((item, idx) => (
        <div
          key={idx}
          className="bg-(--primary) text-white rounded-xl w-20 h-20 flex flex-col items-center justify-center shadow-lg"
        >
          <span className="text-2xl font-bold">{item.value}</span>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
