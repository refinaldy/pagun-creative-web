"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="min-h-[80vh] w-full flex flex-col justify-between bg-mist text-obsidian p-4 md:p-10 relative z-20 overflow-hidden rounded-t-3xl">
       <div className="flex flex-col md:flex-row justify-between pt-20">
         <div className="flex flex-col gap-6">
            <span className="uppercase tracking-widest text-sm opacity-60">Start a Project</span>
            <a href="mailto:paguncreativeagency@outlook.com" className="text-2xl md:text-4xl font-serif hover:italic transition-all duration-300 underline decoration-1 underline-offset-8 decoration-obsidian/30 hover:decoration-obsidian">
              paguncreativeagency@outlook.com
            </a>
         </div>
         
         <div className="mt-10 md:mt-0 flex gap-20 relative z-30">
            <div>
              <span className="uppercase tracking-widest text-sm opacity-60 block mb-4">Socials</span>
              <ul className="flex flex-col gap-2 text-lg">
                 <li><a href="https://www.instagram.com/paguncreative/" target="_blank" className="hover:opacity-50 transition-opacity duration-300 block cursor-pointer">Instagram</a></li>
                 <li><a href="https://wa.me/6281349505575" target="_blank" className="hover:opacity-50 transition-opacity duration-300 block cursor-pointer">WhatsApp</a></li>
                 <li><a href="https://www.youtube.com/@paguncreative" target="_blank" className="hover:opacity-50 transition-opacity duration-300 block cursor-pointer">YouTube</a></li>
              </ul>
            </div>
            <div>
              <span className="uppercase tracking-widest text-sm opacity-60 block mb-4">Location</span>
              <a 
                href="https://maps.google.com/?q=Tarakan,+Tarakan+City,+North+Kalimantan,+Indonesia" 
                target="_blank"
                className="text-lg hover:opacity-50 transition-opacity block"
              >
                Tarakan City,<br />
                North Kalimantan,<br />
                Indonesia
              </a>
            </div>
         </div>
       </div>

       <div className="mt-20 md:mt-0 relative">
         <motion.h2 
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1 }}
           className="text-[12vw] md:text-[15.5vw] leading-none font-serif tracking-tighter text-center select-none whitespace-nowrap"
         >
           PAGUNCREATIVE
         </motion.h2>
       </div>
    </footer>
  );
}
