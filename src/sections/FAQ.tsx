"use client";

import { useState } from "react";
import { Plus, Minus, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What is B2-Moves?",
    answer: "B2-Moves is a privacy-first execution platform on Solana that allows users to swap, rebalance, and trade crypto without exposing wallet history or strategy.",
  },
  {
    question: "How is B2-Moves different from regular trading tools?",
    answer: "Most tools execute trades publicly. B2-Moves focuses on private execution, meaning your trades, portfolio moves, and strategies are not easily trackable or exposed.",
  },
  {
    question: "Who is B2-Moves for?",
    answer: (
      <div>
        <p className="mb-2">B2-Moves is built for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Active traders</li>
          <li>Long-term investors</li>
          <li>Crypto whales</li>
          <li>Treasury managers</li>
          <li>Privacy-conscious users</li>
        </ul>
        <p className="mt-2 font-medium">Anyone who wants better execution without being watched.</p>
      </div>
    ),
  },
  {
    question: "Does B2-Moves have access to my funds?",
    answer: "No. B2-Moves is designed to be non-custodial. You keep control of your funds and only authorize specific actions.",
  },
  {
    question: "How does B2-Moves protect my privacy?",
    answer: "B2-Moves breaks the visible link between your wallet and execution by using private routing and execution layers, so observers cannot easily track your activity.",
  },
  {
    question: "Can people still track my trades on-chain?",
    answer: "They may see transactions, but they cannot easily link them to your wallet, strategy, or intent.",
  },
  {
    question: "Is B2-Moves safe to use?",
    answer: "Yes. It uses secure, permission-based execution, strict validation rules, and follows best practices from cybersecurity and high-stakes system design.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Frequently <br /> asked <span className="text-brand-blue italic">questions</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Accordion */}
        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg font-bold group-hover:text-brand-blue transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-brand-blue" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="lg:w-1/3">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8">
                <MessageSquare className="w-8 h-8 text-white fill-white" />
             </div>
             <h3 className="text-xl font-bold mb-4">Do you have more questions?</h3>
             <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                B2-moves is a privacy-first intent execution protocol that enables traders to operate on Solana without exposing wallet history, trading strategies, or execution patterns.
             </p>
             <Button className="w-full flex gap-2 pr-2 py-4">
                SEND US A MESSAGE
                <div className="bg-white/20 p-1 rounded-sm">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
             </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
