"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[100] mix-blend-difference text-mist">
        <Link href="/" className="flex items-center gap-2 z-[101]">
          {/* Logo */}
          <div className="relative w-32 h-12 md:w-40 md:h-16">
             <Image 
               src="/pagun_logo_transparent.png" 
               alt="Pagun Creative Logo" 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
        </Link>
        
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
