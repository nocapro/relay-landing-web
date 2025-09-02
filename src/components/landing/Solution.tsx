import { showcase } from "@/content/landing";
import { CheckCircle2 } from "lucide-react";

export function Solution() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{showcase.title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{showcase.footer}</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {showcase.workflow.map((item, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-secondary/50 rounded-lg animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
            <CheckCircle2 className="h-8 w-8 mb-4 text-primary" />
            <p className="font-medium text-center">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}