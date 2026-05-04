"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

const footerLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "B2-Moves Fits", href: "#fits" },
  { name: "Security", href: "#security" },
  { name: "FAQs", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/full-logo.png" 
                alt="B2-Moves Logo" 
                width={180} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Reach thousands of buyers and Sellers, manage sales effortlessly, and grow your profits—all in one platform
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Massive Text */}
        <div className="w-full overflow-hidden select-none pointer-events-none mb-12">
          <h2 className="text-[15vw] font-black tracking-tighter text-brand-blue/5 leading-none text-center">
             B2-Moves
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4 text-sm text-foreground/40">
           <div className="flex items-center gap-2">
              <Image src="/Union.png" alt="B2-Moves" width={16} height={16} className="opacity-40 grayscale" />
              <span>B2-Moves © 2026. All rights reserved.</span>
           </div>
           <div className="flex gap-8">
              <Link href="#" className="hover:text-brand-blue">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-blue">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
