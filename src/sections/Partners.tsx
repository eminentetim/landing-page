"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Solscan", logo: "/partners/solscan.png" },
  { name: "SolanaFM", logo: "/partners/solanafm.png" },
  { name: "Dex Screener", logo: "/partners/dexscreener.png" },
  { name: "Step", logo: "/partners/step.png" },
  { name: "Solana Explorer", logo: "/partners/solanaexplorer.png" },
  { name: "Nansen", logo: "/partners/nansen.png" },
];

export function Partners() {
  return (
    <Section id="verify" className="bg-background pt-0 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="text-brand-blue">Verify</span> <span className="italic font-medium">B2-Moves</span> here
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate partners for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 transition-all flex items-center">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={200} 
                height={50} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
