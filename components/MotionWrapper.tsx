"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  delay = 0,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
