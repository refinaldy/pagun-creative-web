"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "./TextReveal";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link href={`/work/${project.slug}`} className="block w-full">
      <motion.div 
        ref={container}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="group relative w-full h-[60vh] md:h-[80vh] mb-20 md:mb-32 cursor-pointer overflow-hidden"
      >
        {/* Image Container */}
        <div className="w-full h-full relative overflow-hidden">
           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
           
           <motion.div 
              style={{ y, height: "120%", top: "-10%" }}
              className="w-full relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
           >
              <Image 
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
           </motion.div>
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 mix-blend-difference">
          <h3 className="text-4xl md:text-7xl font-serif text-mist">{project.title}</h3>
          <p className="text-sm tracking-widest uppercase mt-2 text-mist">{project.category}</p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-mist text-obsidian flex items-center justify-center text-xs uppercase tracking-widest font-bold backdrop-blur-sm bg-opacity-90">
            View
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Work() {
  return (
    <section id="work" className="w-full p-4 md:p-10 relative z-10 bg-obsidian">
      <div className="border-t border-mist/20 py-10 mb-10 flex justify-between items-end">
        <h2 className="text-[10vw] md:text-[8vw] font-serif leading-none">
          <TextReveal>SELECTED WORKS</TextReveal>
        </h2>
        <span className="text-sm font-mono">(2023-2025)</span>
      </div>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
