import { User } from "lucide-react";

export function WhoFor() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
        <User className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for Solo Devs</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
        Relaycode is designed for the individual developer, consultant, or small team founder who moves fast and can't afford to get bogged down by tedious workflows.
      </p>
    </div>
  );
}