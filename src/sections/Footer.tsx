"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "B2-Moves Fits", href: "#fits" },
  { name: "Security", href: "#security" },
  { name: "FAQs", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-[#F8F9FB] pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 md:mb-32">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/Union.png" 
                alt="B2-Moves Logo" 
                width={24} 
                height={24} 
              />
              <span className="text-xl font-bold tracking-tight text-[#00153D]">B2-Moves</span>
            </Link>
            <p className="text-[#111827]/60 text-sm md:text-[15px] leading-relaxed">
              Reach thousands of buyers and Sellers, manage sales effortlessly, and grow your profits—all in one platform
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-4 items-center md:pt-14">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm md:text-[15px] font-medium text-[#111827]/60 hover:text-brand-blue transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Massive Branding */}
        <div className="flex items-end gap-[1%] select-none w-full">
          <div className="w-[12%] min-w-[30px] flex-shrink-0 mb-[1.2vw]">
             <Image 
               src="/Union.png" 
               alt="" 
               width={500} 
               height={500} 
               className="w-full h-auto"
             />
          </div>
          <h2 className="text-[13vw] font-bold tracking-[-0.07em] leading-[0.8] flex whitespace-nowrap">
            <span className="text-[#2652FF]">B2</span>
            <span className="bg-gradient-to-r from-[#2652FF] via-[#00153D] to-black bg-clip-text text-transparent">
              -Moves
            </span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
