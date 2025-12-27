"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 px-4 pt-24 md:pt-32">
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
          className="mt-12 flex flex-col items-center gap-8"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-mist/60 text-center max-w-md">
            Full Service Creative Agency based in Tarakan. We turn scrollers into loyal customers.
          </p>
          
          <motion.a 
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-electric text-obsidian rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_30px_#28d8d0] transition-shadow duration-500"
          >
            See Our Work
          </motion.a>

          <div className="h-12 w-[1px] bg-mist/20 mt-8 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
