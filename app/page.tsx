"use client";

import { useEffect, useState } from "react";
import MotionWrapper from "@/components/MotionWrapper";
import Countdown from "@/components/Countdown";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const fullText = "Fisayo & Bolaji";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const updatedText = isDeleting
        ? fullText.slice(0, typedText.length - 1)
        : fullText.slice(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bgg.jpg"
          alt="Wedding Background"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Floating Flowers */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 sm:left-20 top-24 text-[#d4af37]/80 text-4xl sm:text-6xl"
      >
        ❀
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 sm:right-16 bottom-20 text-[#d4af37]/60 text-5xl sm:text-7xl"
      >
        ✿
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 py-10 px-6 max-w-2xl"
      >
        <h1
          className="text-5xl sm:text-7xl font-[Playfair_Display] mb-4 tracking-wide 
          text-transparent bg-clip-text bg-linear-to-r from-[#fff8c5] via-[#FFD700] to-[#d4af37]
          drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] flex justify-center items-center"
          style={{
            textShadow:
              "0 0 20px rgba(255, 215, 0, 0.9), 0 0 35px rgba(255, 255, 255, 0.8)",
          }}
        >
          <span className="whitespace-nowrap">{typedText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-white"
          >
            |
          </motion.span>
        </h1>

        <p className="text-base sm:text-lg italic max-w-md mx-auto text-white/90">
          “Bound by love, blessed by faith, and joined for eternity.”
        </p>
      </motion.div>

      {/* Couple Image */}
      <MotionWrapper delay={0.3}>
        <div className="relative z-20 w-56 h-56 sm:w-80 sm:h-80  rounded-4xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-[6px] sm:border-8 border-[#d4af37]/60 bg-white/10 backdrop-blur-md mb-10">
          <Image
            src="/couple.jpg"
            alt="Couple"
            fill
            className="object-contain object-center"
          />
        </div>
      </MotionWrapper>


      {/* Countdown */}
      <MotionWrapper delay={0.5}>
        <div className="relative z-20 mb-8 text-white">
          <Countdown weddingDate="2025-12-13T15:00:00" />
        </div>
      </MotionWrapper>

      {/* CTA Button */}
      <MotionWrapper delay={0.8}>
        <div className="relative z-30 mb-10">
          <a
            href="/rsvp"
            className="inline-block bg-linear-to-r from-[#d4af37] to-[#b8962e] 
            text-black font-semibold px-10 sm:px-14 py-3 sm:py-4 rounded-full shadow-lg 
            hover:shadow-xl hover:scale-105 hover:bg-linear-to-r hover:from-[#fff8c5] hover:to-[#f5d76e] 
            hover:text-black focus:text-black active:text-black transition-all duration-300"
          >
            RSVP Now
          </a>
        </div>
      </MotionWrapper>
    </main>
  );
}
