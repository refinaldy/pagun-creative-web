"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 px-4">
      <div className="flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[8vw] font-serif text-center tracking-tighter"
        >
          <span className="block">OPTIMIZE YOUR</span>
          <span className="block italic text-electric">SOCIAL BRAND</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-mist/60 text-center max-w-md">
            Creative Agency Looking for Creative Client
          </p>
          
          <div className="h-12 w-[1px] bg-mist/20 mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
