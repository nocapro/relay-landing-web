import { install, webVersion } from "@/content/landing";
import { Button } from "../ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { NocaLogo } from "../ui/NocaLogo";

export function CTA() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{install.title}</h2>
        <div className="mt-8 space-y-4">
          {install.steps.map((step, i) => (
            <div key={i} className="code-block flex items-center justify-between gap-4">
              <span className="text-muted-foreground">$</span>
              <code className="flex-1 text-left">{step}</code>
              <Button variant="ghost" size="icon" onClick={() => copyToClipboard(step)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Card className="bg-secondary/50 border-blue-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <NocaLogo className="h-6 w-6" />
            <span>{webVersion.title}</span>
          </CardTitle>
          <CardDescription>{webVersion.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <a href={webVersion.link} target="_blank" rel="noreferrer">
              Visit noca.pro <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}