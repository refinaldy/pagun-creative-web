"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/6281349505575"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[80] bg-electric p-4 rounded-full shadow-[0_0_20px_rgba(40,216,208,0.4)] group flex items-center gap-3"
        >
          <div className="overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500 ease-in-out whitespace-nowrap">
            <span className="text-obsidian font-bold uppercase text-xs tracking-widest pl-2">
              Let's Talk
            </span>
          </div>
          <MessageCircle className="w-6 h-6 text-obsidian fill-obsidian" />
          
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-full border border-electric group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
