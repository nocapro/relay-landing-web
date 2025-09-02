import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { VideoDemo } from "@/components/landing/VideoDemo";
import { Roadmap } from "@/components/landing/Roadmap";
import { WhoFor } from "@/components/landing/WhoFor";
import { CTA } from "@/components/landing/CTA";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

// A wrapper for consistent spacing and centering
const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
    {children}
  </section>
);

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Features & Demo */}
        <Section><Solution /></Section>
        <Section><VideoDemo /></Section>

        {/* The Why */}
        <div className="bg-secondary/30"><Section><Problem /></Section></div>

        {/* Companion Tool & Audience */}
        <Section><Roadmap /></Section>
        <div className="bg-secondary/30"><Section><WhoFor /></Section></div>

        {/* FAQ & Final CTA */}
        <Section><FAQ /></Section>
        <div className="bg-gradient-to-t from-blue-900/20 to-transparent">
          <Section><CTA /></Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
