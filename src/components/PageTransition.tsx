"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* The Content */}
      {children}
      
      {/* The Curtain (Reveal Effect) */}
      <motion.div
        className="fixed inset-0 bg-obsidian z-[9999] pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }} 
      />
    </>
  );
}