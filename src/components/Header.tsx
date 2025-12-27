"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[100] mix-blend-difference text-mist">
        <div className="text-xl md:text-2xl font-bold tracking-tighter font-serif z-[101]">
          PAGUNCREATIVE
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="uppercase text-xs md:text-sm tracking-[0.2em] hover:opacity-50 transition-opacity z-[101]"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && <Navigation onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
