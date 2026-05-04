"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureBlockProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  imageSide: "left" | "right";
  mockupContent?: React.ReactNode;
}

function FeatureBlock({ title, description, buttonText, imageSide, mockupContent }: FeatureBlockProps) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 last:mb-0",
      imageSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          {title}
        </h3>
        <p className="text-lg text-foreground/70 text-balance leading-relaxed">
          {description}
        </p>
        <Button variant="primary" className="flex gap-2 pr-2">
          {buttonText}
          <div className="bg-white/20 p-1 rounded-sm">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </Button>
      </div>

      {/* Mockup Placeholder */}
      <div className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-[400px] aspect-[4/5] bg-gray-50 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-8 overflow-hidden">
           {mockupContent || (
             <div className="w-full h-full bg-white rounded-xl shadow-inner border border-gray-50 flex items-center justify-center">
                <div className="w-[180px] h-[360px] bg-gray-900 rounded-[2rem] border-4 border-black" />
             </div>
           )}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-brand-blue italic">B2-Moves</span> Features
        </h2>
      </div>

      <FeatureBlock 
        title="Private Swap"
        description="Private Swap tokens with B2-moves without linking wallet history"
        buttonText="TRY IT OUT"
        imageSide="right"
      />

      <FeatureBlock 
        title={<>Private <span className="text-brand-blue italic">Rebalancing</span></>}
        description="Adjust portfolio allocations without exposing strategy"
        buttonText="TRY IT OUT"
        imageSide="left"
      />

      <FeatureBlock 
        title={<><span className="text-brand-blue italic">Trade</span> Crypto Like You Chat</>}
        description="Trading private market execution / strategy execution"
        buttonText="TRY IT OUT"
        imageSide="right"
      />
    </Section>
  );
}
