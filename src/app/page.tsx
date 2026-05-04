import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Benefits } from "@/sections/Benefits";
import { UseCases } from "@/sections/UseCases";
import { Partners } from "@/sections/Partners";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <UseCases />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
