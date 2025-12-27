"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[100] mix-blend-difference text-mist">
        <div className="flex items-center gap-3 z-[101]">
          {/* Logo Icon */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
             <Image 
               src="/pagun_creative_400.webp" 
               alt="Pagun Logo" 
               fill
               className="object-contain"
               priority
             />
          </div>
          
          {/* Text Brand - Stacked */}
          <div className="flex flex-col justify-center">
            <span className="text-base md:text-lg font-bold tracking-tighter font-serif leading-[0.8]">PAGUN</span>
            <span className="text-base md:text-lg font-bold tracking-tighter font-serif leading-[0.8]">CREATIVE</span>
          </div>
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
