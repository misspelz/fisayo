"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Fisayo & Bolaji";

  // Typewriter animation logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/story" },
    { name: "Gallery", href: "/gallery" },
    { name: "Details", href: "/details" },
    { name: "RSVP", href: "/rsvp" },
  ];

  // Variants for smooth staggered animation
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
   <header className="sticky top-0 z-50 bg-white/100 border-b border-[#e0d4b3]/60 shadow-sm">

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-[Playfair_Display] text-[#1b3d2f] tracking-wide flex items-center"
        >
          <span className="text-[#d4af37]">&lt;</span>&nbsp;
          <span className="whitespace-nowrap">{typedText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-[#1b3d2f]"
          >
            |
          </motion.span>
          &nbsp;<span className="text-[#d4af37]">&gt;</span>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[#1b3d2f]/80 font-medium">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial="hidden"
              animate="visible"
              custom={i}
              variants={linkVariants}
            >
              <Link
                href={link.href}
                className={`transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#1b3d2f] font-semibold"
                    : "hover:text-[#d4af37]"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1b3d2f]"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-50 flex flex-col justify-start gap-6 py-10 px-6 rounded-l-3xl overflow-y-auto"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-[#1b3d2f] cursor-pointer"
              >
                <X size={26} />
              </button>

              <motion.div
                className="mt-10 flex flex-col gap-5 text-center"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {links.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? "text-[#1b3d2f] font-semibold"
                          : "text-[#1b3d2f]/80 hover:text-[#d4af37]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
