import { companion } from "@/content/landing";
import { GitMerge } from "lucide-react";
import { RepomixLogo } from "../ui/RepomixLogo";

export function Roadmap() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <div className="inline-block bg-secondary text-secondary-foreground py-1 px-3 rounded-lg mb-4 text-sm font-medium">
          Companion Tool
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{companion.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: companion.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
      </div>
      <div className="flex justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute w-full h-full border-2 border-dashed border-border/50 rounded-full animate-spin [animation-duration:20s]"></div>
          <GitMerge className="h-24 w-24 text-primary opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-secondary rounded-lg shadow-lg text-sm flex items-center gap-2">
            <RepomixLogo className="w-5 h-5" />
            <span>Repomix</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">Relaycode</div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">LLM</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">Your Repo</div>
        </div>
      </div>
    </div>
  );
}