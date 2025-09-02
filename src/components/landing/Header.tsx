import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { Link } from "react-router-dom";
import { DiscordIcon } from "../ui/DiscordIcon";
import { Logo } from "../ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="font-bold">Relaycode</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
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
          </nav>
        </div>
      </div>
    </header>
  );
}