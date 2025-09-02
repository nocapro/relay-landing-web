import { problem } from "@/content/landing";
import { Card, CardContent } from "../ui/card";

export function Problem() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{problem.title}</h2>
      <div className="mt-8">
        <Card className="bg-background/50 border-border/50 text-left">
            <CardContent className="pt-6">
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "{problem.description}"
              </blockquote>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}