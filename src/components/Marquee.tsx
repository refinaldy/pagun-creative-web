"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export default function Marquee({ text, speed = 20 }: MarqueeProps) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-mist/10 bg-obsidian py-4 md:py-8 z-10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap"
      >
        {/* Repeat the text multiple times to ensure seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[6vw] md:text-[4vw] font-serif uppercase tracking-tighter mx-4 md:mx-10 text-mist">
            {text} <span className="text-mist/20 italic ml-4 md:ml-10">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
