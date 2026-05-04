"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-12 md:pt-20">
      <div className="flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl"
        >
          <span className="text-brand-blue italic">Trade Privately on Solana.</span> As Simple as Sending a Message.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-foreground/70 max-w-2xl text-balance"
        >
          B2-moves is a privacy-first intent execution protocol that enables traders to operate on Solana without exposing wallet history, trading strategies, or execution patterns.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button className="flex gap-3 py-4 pr-3 pl-8">
            TRY IT TELEGRAM
            <div className="bg-white/20 p-2 rounded-sm">
              <Send className="w-5 h-5 text-white" />
            </div>
          </Button>
        </motion.div>

        {/* Visual Mockup Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 w-full max-w-5xl relative aspect-square md:aspect-video flex items-center justify-center"
        >
          {/* We'll use a simplified mockup representation or the actual image if possible */}
          <div className="relative w-full h-full flex items-center justify-center">
             {/* Central Mobile Mockup */}
             <div className="relative z-10 w-[280px] md:w-[320px] aspect-[1/2] bg-[#111] rounded-[3rem] border-8 border-black shadow-2xl overflow-hidden">
                <div className="absolute top-0 w-full h-6 bg-black flex justify-center items-end pb-1">
                   <div className="w-20 h-4 bg-black rounded-full" />
                </div>
                <div className="w-full h-full bg-[#FDFBF7] flex flex-col p-4 pt-8">
                   <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-full bg-brand-blue" />
                      <div className="w-24 h-4 rounded bg-gray-200" />
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                   </div>
                   <div className="flex-1 space-y-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg w-[80%] ml-auto">
                        <div className="h-4 bg-brand-blue/20 rounded w-full mb-2" />
                        <div className="h-4 bg-brand-blue/20 rounded w-2/3" />
                      </div>
                      <div className="bg-white p-3 rounded-lg w-[80%] border border-gray-100">
                        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                      </div>
                      {/* Cat icon or similar */}
                      <div className="flex justify-center py-4">
                        <div className="w-32 h-32 rounded-full bg-orange-100 flex items-center justify-center">
                           <span className="text-4xl">🐱</span>
                        </div>
                      </div>
                   </div>
                   <div className="h-12 bg-white border-t border-gray-100 flex items-center px-3 gap-2">
                      <div className="flex-1 h-8 bg-gray-100 rounded-full" />
                      <div className="w-8 h-8 rounded-full bg-brand-blue" />
                   </div>
                </div>
             </div>

             {/* Floating Info Cards (Simplified) */}
             <div className="absolute top-1/4 left-0 md:left-[15%] z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                   <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="font-semibold text-sm">Private Swap</span>
             </div>

             <div className="absolute top-1/3 right-0 md:right-[15%] z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                   <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="font-semibold text-sm">Private Rebalancing</span>
             </div>

             <div className="absolute bottom-1/4 right-[10%] md:right-[25%] z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                   <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="font-semibold text-sm">Trading private market</span>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
