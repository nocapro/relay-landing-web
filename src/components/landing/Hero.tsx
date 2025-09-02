import { hero } from "@/content/landing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { Demo } from "./Demo";

export function Hero() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("bun install -g relaycode");
  };

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
      </div>
      <div className="container relative mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 animate-fade-in">
              {hero.title}
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {hero.subtitle}
            </p>
            <div className="flex flex-col items-center lg:items-start gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="code-block flex w-full items-center justify-between gap-4">
                <span className="text-muted-foreground">$</span>
                <code className="flex-1 text-left">bun install -g relaycode</code>
                <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <Button size="lg" asChild>
                <a href="https://www.noca.pro" target="_blank" rel="noreferrer">
                  Try Web Version <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground animate-fade-in flex items-center justify-center lg:justify-start gap-2" style={{ animationDelay: '500ms' }}>
              <img src="https://pbs.twimg.com/profile_images/1961594429338472448/OOzuAD7h_400x400.jpg" alt="Arman" className="w-6 h-6 rounded-full" />
              <span>Built by <a href="https://go.noca.pro/x-arman" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Arman</a> for solo devs.</span>
            </p>
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Demo />
          </div>
        </div>
      </div>
    </section>
  );
}