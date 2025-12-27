"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Telkomsel", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067dbacc2bf.png" },
  { name: "Pertamina Tarakan", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067900bea30.png" },
  { name: "Telkom Indonesia", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067d82864ab.png" },
  { name: "UT Tarakan", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_670678745d839.png" },
  { name: "Mamimo Store", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067acc15756.png" },
  { name: "Kopisoe", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067a85289c2.png" },
  { name: "Gelatopia", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067cd33b79d.png" },
  { name: "Public Mart", logo: "https://files.cdn-files-a.com/uploads/9771213/400_filter_nobg_67067c32bce25.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="w-full p-4 md:p-10 bg-obsidian border-t border-mist/10 relative z-10">
      <div className="py-10 mb-10">
        <h2 className="text-[10vw] md:text-[8vw] font-serif leading-none opacity-20">TRUSTED BY</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="h-32 md:h-48 border border-mist/10 flex items-center justify-center p-8 group hover:bg-mist/5 transition-colors"
          >
            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image
                 src={client.logo}
                 alt={client.name}
                 fill
                 className="object-contain"
               />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
