"use client";

import { Section } from "@/components/ui/Section";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";

const useCases = [
  {
    title: "Solana Active Traders",
    description: "Fast private entries/exits, Limit/TP/SL, and Rotate between narratives privately",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Crypto Whales",
    description: "Large private execution, Move treasury without signaling and TWAP / stealth orders later",
    image: "https://images.unsplash.com/photo-1622630998477-00aa6734203a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Memecoin Traders",
    description: "Fast private token rotation, Limit entries/exits and Take gains automatically",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Signal Groups",
    description: "Execute calls privately, Stealth entries and Rotate out silently",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
  },
];

export function UseCases() {
  return (
    <Section id="fits" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Where <span className="text-brand-blue italic">B2-Moves</span> Fits Into <br /> Everyday Lifes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, i) => (
          <div key={i} className="group flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl">
             <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
             </div>
             <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-3 leading-tight">{useCase.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-1">
                  {useCase.description}
                </p>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:border-brand-blue transition-colors self-start">
                   <ArrowDownLeft className="w-4 h-4" />
                </div>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
