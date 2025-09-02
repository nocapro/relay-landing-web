import { AnimatedList } from "../ui/AnimatedList";

export function Demo() {
  const lines = [
    { text: "$ relay watch" },
    { text: "Watching for clipboard changes...", muted: true },
    { text: "New clipboard content detected...", muted: true },
    { text: "✓ Valid patch detected. Processing..." },
    { text: "🚀 Starting transaction..." },
    { text: "✔ Created: src/components/ui/Button.tsx (+88, -0)", className: "text-green-400" },
    { text: "✔ Edited: src/pages/LandingPage.tsx (+5, -2)", className: "text-yellow-400" },
    { text: "✔ Deleted: src/utils/old-helper.ts", className: "text-red-400" },
    { text: "✔ Moved: src/assets/logo.svg -> src/components/ui/Logo.tsx", className: "text-blue-400" },
    { text: "...", muted: true },
    { text: "✨ Checks complete. Ready for review.", className: "glow-text" },
  ];
  return (
    <div className="relative code-block max-w-2xl mx-auto p-6 glow-border">
      <div className="absolute -top-3 -left-3 w-3 h-3 bg-primary rounded-full animate-ping"></div>
      <div className="absolute -top-3 -left-3 w-3 h-3 bg-primary rounded-full"></div>
      <div className="font-mono text-left">
        <AnimatedList lines={lines} initialDelay={200} />
      </div>
      <div className="absolute top-4 right-4 text-xs text-muted-foreground">LIVE</div>
    </div>
  );
}