"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "B2-Moves Fits", href: "#fits" },
  { name: "Verify", href: "#verify" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Union.png" alt="B2-Moves Logo" width={24} height={24} />
          <span className="text-xl font-bold tracking-tight">B2-Moves</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:flex gap-2 pr-2 py-2">
            TRY IT OUT
            <div className="bg-white/20 p-1 rounded-sm">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </Button>
          
          {/* Mobile menu could go here */}
        </div>
      </div>
    </nav>
  );
}
