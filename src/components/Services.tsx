"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import Image from "next/image";

const services = [
  { 
    id: "01",
    title: "Monthly Package", 
    description: "Complete Social Media Management & Content Strategy", 
    span: "col-span-1 md:col-span-2 row-span-2",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "02",
    title: "Commercial Photoshoot", 
    description: "Product, Fashion, and Lifestyle Documentation", 
    span: "col-span-1 md:col-span-2 row-span-1",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "03",
    title: "Video Content", 
    description: "High-Engagement Short Reels & TikTok Production", 
    span: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1536240478700-b86d35fd733c?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "04",
    title: "Logo & Visual Branding", 
    description: "Identity Design & Brand Guidelines", 
    span: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "05",
    title: "Media Production", 
    description: "Full Scale Film, YouTube, and Digital Campaigns", 
    span: "col-span-1 md:col-span-4 row-span-1",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop"
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full p-4 md:p-10 flex flex-col justify-center bg-obsidian text-mist relative z-10">
      <div className="border-t border-mist/20 py-10 mb-10">
        <h2 className="text-[10vw] md:text-[8vw] font-serif leading-none">
          <TextReveal>OUR EXPERTISE</TextReveal>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
         {services.map((s, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: i * 0.1 }}
             className={`relative bg-mist/5 border border-mist/10 p-8 flex flex-col justify-between hover:bg-mist/10 transition-all duration-500 group min-h-[300px] overflow-hidden ${s.span}`}
           >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-in-out grayscale">
                 <Image 
                   src={s.image}
                   alt={s.title}
                   fill
                   className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                 />
              </div>

              {/* Decorative Large Number */}
              <div className="absolute -right-4 -bottom-10 text-[15vw] font-serif font-bold text-mist/[0.03] select-none pointer-events-none group-hover:text-electric/10 transition-colors duration-500">
                 {s.id}
              </div>

              <div className="w-full flex justify-between items-start relative z-10">
                 <span className="text-xs font-mono opacity-50">/{s.id}</span>
                 <div className="w-2 h-2 rounded-full bg-electric opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#28d8d0]" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-serif mb-4 italic group-hover:translate-x-2 transition-transform duration-500 group-hover:text-electric">{s.title}</h3>
                <p className="text-mist/60 text-xs md:text-sm uppercase tracking-widest">{s.description}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
}
