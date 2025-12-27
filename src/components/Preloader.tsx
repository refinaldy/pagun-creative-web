"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const cleanupTimer = setTimeout(() => {
       setComplete(true);
       document.body.style.overflow = ""; // Enable scroll
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-obsidian flex items-center justify-center text-mist"
        >
           <div className="flex flex-col items-center">
             <motion.h1 
               className="text-[15vw] md:text-[10vw] font-serif tabular-nums leading-none"
             >
               {Math.round(count)}%
             </motion.h1>
             <p className="text-xs uppercase tracking-widest opacity-50 mt-4">Loading Experience</p>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
