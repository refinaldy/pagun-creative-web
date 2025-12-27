"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-obsidian flex flex-col items-center justify-center relative overflow-hidden selection:bg-electric selection:text-obsidian">
      <Header />
      
      {/* Background Static Noise Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUqhC9Fe/giphy.gif')] bg-cover" />

      <div className="z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-electric font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            Error 404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15vw] font-serif leading-none tracking-tighter mb-8"
        >
          LOST <br /> <span className="italic opacity-50">SIGNAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-md text-mist/60 text-lg mb-12 leading-relaxed"
        >
          The coordinate you are looking for does not exist in our digital landscape. It may have been archived or moved to another dimension.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link 
            href="/"
            className="group relative px-12 py-4 border border-mist/20 rounded-full overflow-hidden inline-block"
          >
            <span className="relative z-10 uppercase text-xs tracking-widest group-hover:text-obsidian transition-colors duration-500">
              Return to Base
            </span>
            <motion.div 
              className="absolute inset-0 bg-mist translate-y-[101%]"
              whileHover={{ translateY: "0%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-mist/20 to-transparent" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:block">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-mist/20 to-transparent" />
      </div>
    </main>
  );
}
