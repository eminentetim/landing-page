"use client";

import { Section } from "@/components/ui/Section";
import { Wind, ShieldCheck, RefreshCw, Lock } from "lucide-react";

const benefits = [
  {
    title: "Fast onboarding",
    description: "Link your wallet with just a click",
    icon: Wind,
  },
  {
    title: "Platform that gives you Anonymity you need",
    description: "Usernames provide a layer of separation between the human and the wallet.",
    icon: ShieldCheck,
  },
  {
    title: "Just your Intent",
    description: "B2-Moves private execution protocol handle the rest",
    icon: RefreshCw,
  },
  {
    title: "Non-Custodial of fund",
    description: "B2-Moves gets permission to execute",
    icon: Lock,
  },
];

export function Benefits() {
  return (
    <Section className="bg-background">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Title */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
            <span className="text-brand-blue italic text-2xl block mb-2 font-medium not-italic">One product,</span>
            Many ways to win.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 text-balance">
             B2-moves is a privacy-first intent execution protocol that enables traders to operate on Solana without exposing wallet history, trading strategies, or execution patterns.
          </p>
        </div>

        {/* Right Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white/50 border border-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                 <benefit.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
