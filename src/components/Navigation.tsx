"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { title: "Work", href: "#work" }, // Using anchors for now as we are single page initially
  { title: "Services", href: "#services" },
  { title: "Studio", href: "#studio" },
  { title: "Contact", href: "#contact" },
];

export default function Navigation({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-obsidian z-[90] flex flex-col justify-center items-center"
    >
      <nav className="flex flex-col gap-2 text-center">
        {links.map((link, i) => (
          <div key={i} className="overflow-hidden">
             <motion.div
               initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), ease: [0.76, 0, 0.24, 1] }}
             >
               <Link
                 href={link.href}
                 onClick={onClose}
                 className="text-[12vw] md:text-[8vw] font-serif leading-none text-mist hover:text-white hover:italic transition-all duration-300 block"
               >
                 {link.title}
               </Link>
             </motion.div>
          </div>
        ))}
      </nav>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 flex gap-8 text-sm uppercase tracking-widest text-mist/50"
      >
        <span>Instagram</span>
        <span>LinkedIn</span>
        <span>Twitter</span>
      </motion.div>
    </motion.div>
  );
}
