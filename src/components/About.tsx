"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="studio" className="min-h-screen w-full p-4 md:p-10 flex flex-col justify-center bg-obsidian text-mist relative z-10">
       <div className="border-t border-mist/20 py-10 mb-20">
         <span className="text-sm uppercase tracking-widest text-electric">The Studio</span>
       </div>

       <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left: Sticky Image Area */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative md:sticky top-20">
             <div className="w-full h-full relative overflow-hidden rounded-sm group">
                <Image 
                  src="/pagun_creative_team.jpg"
                  alt="Pagun Creative Team"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                {/* Overlay for blending */}
                <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-700 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-10 left-10">
                   <p className="font-mono text-xs uppercase tracking-widest text-electric">Est. 2020 — Tarakan</p>
                </div>
             </div>
          </div>

          {/* Right: Scrolling Story */}
          <div className="w-full md:w-1/2 flex flex-col gap-32 py-10 md:py-20">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ margin: "-20%" }}
               transition={{ duration: 0.8 }}
             >
               <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
                 From <span className="text-electric italic">Tarakan</span> to the Digital Frontier.
               </h3>
               <p className="text-lg md:text-xl leading-relaxed opacity-70">
                 We started with a simple belief: Geography should not limit creativity. Based in North Kalimantan, we bring a fresh, raw perspective to the digital landscape, merging local authenticity with global design standards.
               </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ margin: "-20%" }}
               transition={{ duration: 0.8 }}
             >
               <h4 className="text-xs uppercase tracking-widest mb-6 text-mist/50">Our Philosophy</h4>
               <p className="text-lg md:text-xl leading-relaxed opacity-70">
                 We don't just "manage" social media; we curate culture. In a world of noise, we help brands find their true voice—one that resonates, engages, and converts. We believe in quality over quantity, and impact over impressions.
               </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ margin: "-20%" }}
               transition={{ duration: 0.8 }}
             >
               <h4 className="text-xs uppercase tracking-widest mb-6 text-mist/50">The Team</h4>
               <p className="text-lg md:text-xl leading-relaxed opacity-70">
                 A collective of visual storytellers, strategists, and digital artisans. We are small enough to care, but bold enough to take on the giants.
               </p>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
