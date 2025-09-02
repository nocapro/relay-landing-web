import { finalCta } from "@/content/landing";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { DiscordIcon } from "../ui/DiscordIcon";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/20">
      <div className="container py-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight glow-text mb-6">
          {finalCta.title}
        </h2>
        <div className="flex justify-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://go.noca.pro/relaycode-discord" target="_blank" rel="noreferrer" aria-label="Discord Community">
              <DiscordIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://go.noca.pro/relaycoder-cli-github" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Relaycode.</span>
          <span>•</span>
          <img src="https://pbs.twimg.com/profile_images/1961594429338472448/OOzuAD7h_400x400.jpg" alt="Arman" className="w-5 h-5 rounded-full" />
          <span>Built by <a href="https://go.noca.pro/x-arman" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Arman</a>.</span>
        </div>
      </div>
    </footer>
  );
}