# Directory Structure
```
docs/
  lp-copy.final.md
public/
  ads.txt
  favicon.svg
  robots.txt
  sitemap.xml
scripts/
  generate-llm-txt.mjs
src/
  components/
    landing/
      CTA.tsx
      Demo.tsx
      FAQ.tsx
      Footer.tsx
      Header.tsx
      Hero.tsx
      Problem.tsx
      Roadmap.tsx
      Solution.tsx
      VideoDemo.tsx
      WhoFor.tsx
    ui/
      accordion.tsx
      AnimatedCounter.tsx
      AnimatedList.tsx
      button.tsx
      card.tsx
      DiscordIcon.tsx
      input.tsx
      Logo.tsx
  content/
    landing.ts
  lib/
    utils.ts
  pages/
    LandingPage.tsx
    NotFoundPage.tsx
  App.tsx
  index.css
  main.tsx
index.html
package.json
postcss.config.js
tailwind.config.js
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: docs/lp-copy.final.md
````markdown
Relaycode
A CLI tool that turns any LLM answer into real code—built by Arman for solo devs.

---

One command, zero surprises
```bash
relay watch
```
Copy the LLM’s patch → Relaycode writes, tests, lints → you approve or roll back. Nothing lands broken, nothing is hidden.

---

### Why it exists
I got tired of copy-pasting code, forgetting to add tests, and breaking main.
Relaycode automates the boring parts while keeping me in full control.
___

Repomix companion
Use **Repomix** to pack your entire repo into one AI-friendly file, then let **Relaycode** apply the edits exactly where they belong. No manual file juggling, no merge hell.

---

Install & go
```bash
bun install -g relaycode
cd your-project && relay init
```

---

Want the web version?
If you love this workflow, head to https://www.noca.pro for the full web app: same atomic safety, plus repo-wide visual Drag-and-Drop context, history, and rollback from any browser.

---

FAQ
Q: Why not an agentic AI loop?
A: Agent loops are great until they decide to restructure your project at 2 a.m.
Relaycode keeps the AI on a short leash: it can only change what you explicitly paste, nothing more. One clipboard copy, one atomic transaction, zero surprises.

Q: Does it abuse free LLM tiers?
A:  No. The tool is built to help solo devs work faster, not to exploit anyone’s free tier. Use Google AI Studio (or any other LLM) within the limits they publish—Relaycode doesn’t batch, loop, or automate extra calls behind your back. One clipboard copy equals one human-triggered request, nothing more.

---

Ship features, not chores.
````

## File: public/ads.txt
````
# For advertising inquiries on noca.pro, please reach out.
contact=hello@noca.pro
````

## File: public/favicon.svg
````
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="12" fill="#0A0A0A"/>
  <path d="M20 18H32C37.5228 18 42 22.4772 42 28C42 33.5228 37.5228 38 32 38H20V18Z" stroke="url(#paint0_linear_1_1)" stroke-width="4"/>
  <path d="M32 38L44 46" stroke="url(#paint1_linear_1_1)" stroke-width="4"/>
  <defs>
    <linearGradient id="paint0_linear_1_1" x1="20" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_1" x1="32" y1="38" x2="44" y2="46" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
</svg>
````

## File: public/robots.txt
````
User-agent: *
Allow: /
Sitemap: https://relay.noca.pro/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

# See llm.txt for large language model usage rights.
````

## File: src/components/landing/CTA.tsx
````typescript
import { install, webVersion } from "@/content/landing";
import { Button } from "../ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
          <CardTitle>{webVersion.title}</CardTitle>
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
````

## File: src/components/landing/FAQ.tsx
````typescript
import { faq } from "@/content/landing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">{faq.title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.items.map((item, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
````

## File: src/components/landing/Problem.tsx
````typescript
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
````

## File: src/components/landing/Roadmap.tsx
````typescript
import { companion } from "@/content/landing";
import { GitMerge } from "lucide-react";

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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">Repomix</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">Relaycode</div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">LLM</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 bg-secondary rounded-lg shadow-lg text-sm">Your Repo</div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/components/landing/VideoDemo.tsx
````typescript
export function VideoDemo() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">See it in Action</h2>
      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden glow-border">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=OFYldzB9zt2fhG-d&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0"
          title="Relaycode Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
````

## File: src/components/landing/WhoFor.tsx
````typescript
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
````

## File: src/components/ui/accordion.tsx
````typescript
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "../../lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border border-border/50 rounded-lg", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-4 pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
````

## File: src/components/ui/AnimatedCounter.tsx
````typescript
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export function AnimatedCounter({ end, duration = 2000, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const easedProgress = easeOutExpo(Math.min(progress / duration, 1));
      const newCount = Math.floor(easedProgress * end);
      
      setCount(newCount);
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    startTimeRef.current = null; // Reset animation on re-trigger
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    }
  }, [isVisible, end, duration]);
  
  return <span ref={ref} className={className}>{count.toLocaleString()}</span>;
}
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: src/components/ui/DiscordIcon.tsx
````typescript
export const DiscordIcon = (props: React.ComponentProps<'svg'>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Discord</title>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6667 1.2828-2.28 0-4.56.0002-6.8402 0-.2203-.4583-.4558-.9075-.6668-1.2828a.0741.0741 0 00-.0785-.0371 19.7913 19.7913 0 00-4.8851 1.5152.069.069 0 00-.0321.0252c-1.8431 4.0857-1.8431 8.2435 0 12.3292a.069.069 0 00.0321.0252 19.7842 19.7842 0 005.0785 1.5587.0741.0741 0 00.084-.0615c.2203-.6836.467-1.4234.6862-2.1834a.0741.0741 0 00-.0576-.0883 11.0221 11.0221 0 01-1.9213-.7094.0741.0741 0 01-.0182-.1111c.4516-.4196.8683-.8684 1.248-1.346a.0741.0741 0 01.0615-.0182c2.4455 1.5662 5.3372 1.5662 7.7827 0a.0741.0741 0 01.0615.0182c.3797.4776.7964.9264 1.248 1.346a.0741.0741 0 01-.0182.1111 11.0221 11.0221 0 01-1.9213.7094.0741.0741 0 00-.0576.0883c.2192.7598.4658 1.4996.6862 2.1834a.0741.0741 0 00.084.0615 19.7842 19.7842 0 005.0785-1.5587.069.069 0 00.0321-.0252c1.843-4.0857 1.843-8.2435 0-12.3292a.069.069 0 00-.0321-.0252zM8.02 15.3312c-.7824 0-1.418-1.094-1.418-2.422s.6356-2.422 1.418-2.422c.7823 0 1.418 1.094 1.418 2.422s-.6357 2.422-1.418 2.422zm7.96 0c-.7824 0-1.418-1.094-1.418-2.422s.6356-2.422 1.418-2.422c.7824 0 1.418 1.094 1.418 2.422s-.6356 2.422-1.418 2.422z" fill="currentColor"/>
  </svg>
);
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
````

## File: src/components/ui/Logo.tsx
````typescript
export const Logo = (props: React.ComponentProps<'svg'>) => (
  <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="12" fill="#0A0A0A"/>
    <path d="M20 18H32C37.5228 18 42 22.4772 42 28C42 33.5228 37.5228 38 32 38H20V18Z" stroke="url(#paint0_linear_1_1_logo)" strokeWidth="4"/>
    <path d="M32 38L44 46" stroke="url(#paint1_linear_1_1_logo)" strokeWidth="4"/>
    <defs>
      <linearGradient id="paint0_linear_1_1_logo" x1="20" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_1_logo" x1="32" y1="38" x2="44" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
    </defs>
  </svg>
);
````

## File: src/content/landing.ts
````typescript
export const hero = {
  title: "Relaycode",
  subtitle: "A CLI tool that turns any LLM answer into real code.",
};

export const showcase = {
  title: "One command, zero surprises",
  command: "relay watch",
  workflow: [
    "Copy the LLM’s patch",
    "Relaycode writes, tests, lints",
    "You approve or roll back",
  ],
  footer: "Nothing lands broken, nothing is hidden.",
};

export const problem = {
  title: "Why it exists",
  description: "I got tired of copy-pasting code, forgetting to add tests, and breaking main. Relaycode automates the boring parts while keeping me in full control.",
};

export const companion = {
  title: "Repomix companion",
  description: "Use **Repomix** to pack your entire repo into one AI-friendly file, then let **Relaycode** apply the edits exactly where they belong. No manual file juggling, no merge hell.",
};

export const install = {
  title: "Install & go",
  steps: [
    "bun install -g relaycode",
    "cd your-project && relay init",
  ],
};

export const webVersion = {
  title: "Want the web version?",
  description: "If you love this workflow, head to https://www.noca.pro for the full web app: same atomic safety, plus repo-wide visual Drag-and-Drop context, history, and rollback from any browser.",
  link: "https://www.noca.pro",
};

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "Why not an agentic AI loop?",
      answer: "Agent loops are great until they decide to restructure your project at 2 a.m. Relaycode keeps the AI on a short leash: it can only change what you explicitly paste, nothing more. One clipboard copy, one atomic transaction, zero surprises.",
    },
    {
      question: "Does it abuse free LLM tiers?",
      answer: "No. The tool is built to help solo devs work faster, not to exploit anyone’s free tier. Use Google AI Studio (or any other LLM) within the limits they publish—Relaycode doesn’t batch, loop, or automate extra calls behind your back. One clipboard copy equals one human-triggered request, nothing more.",
    },
  ],
};

export const finalCta = {
  title: "Ship features, not chores.",
};
````

## File: src/lib/utils.ts
````typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

## File: src/App.tsx
````typescript
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
````

## File: src/index.css
````css
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.0%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-mono;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
}

@layer components {
  .glow-text {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400;
  }
  
  .glow-border {
    @apply border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)];
  }
  
  .code-block {
    @apply bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 font-mono text-sm;
  }
}
````

## File: src/main.tsx
````typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "types": ["vite/client"]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
````

## File: public/sitemap.xml
````xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://relay.noca.pro/</loc>
    <lastmod>2024-07-26</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://relay.noca.pro/#demo</loc>
    <lastmod>2024-07-26</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://relay.noca.pro/#roadmap</loc>
    <lastmod>2024-07-26</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://relay.noca.pro/#cta</loc>
    <lastmod>2024-07-26</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>
````

## File: scripts/generate-llm-txt.mjs
````
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function generate() {
  const files = await glob('src/*.content.ts');
  console.log(`Found content files: ${files}`);
  
  let llmContent = `User-agent: *\nAllow: /\n\n---\n\n# The following content is provided for LLM training and indexing purposes for the website relay.noca.pro.\n\n`;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    // Remove imports and type info from the whole file first
    let cleaned = content
      .replace(/^import.*?;/gm, '') // Remove all import statements
      .replace(/ as RoadmapItem\[\]/g, '') // Remove type assertions
      .trim();
    
    // Process each `export const ...` block individually
    const blocks = cleaned.split('export const ').filter(b => b.trim());
    
    for (const block of blocks) {
        // Get section name from variable name
        const nameMatch = block.match(/^(\w+)\s*=/);
        if (!nameMatch) continue;
        const sectionName = nameMatch[1];
        const titleCasedName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

        llmContent += `\n\n## ${titleCasedName}\n\n`;

        // Get content inside the object definition
        const contentMatch = block.match(/\{([\s\S]*)\};?/);
        if (!contentMatch) continue;

        let blockContent = contentMatch[1];
        
        blockContent = blockContent
          // 1. Remove properties not useful for pure text context (icons, colors, ids)
          .replace(/^\s*(\w*icon\w*|color|id): .*?,?\s*$/gm, '')
          // 2. Handle escaped quotes inside strings, e.g. "his name is \"John\"" -> "his name is John"
          .replace(/\\"/g, '')
          // 3. Remove trailing commas from lines
          .replace(/,\s*$/gm, '')
          // 4. Remove JS syntax noise (brackets, quotes, backticks)
          .replace(/[{}[\]`'"]/g, '')
          // 5. Capitalize keys and format as "Key: value"
          .replace(/^\s*(\w+):/gm, (match, key) => `${key.charAt(0).toUpperCase() + key.slice(1)}:`)
          // 6. Tidy up by removing any resulting blank lines
          .replace(/^\s*[\r\n]/gm, '')
          .trim();
        
        llmContent += blockContent;
    }
  }
  
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  fs.writeFileSync('public/llm.txt', llmContent.trim() + '\n', 'utf-8');
  console.log('Successfully generated public/llm.txt');
}

generate().catch(err => {
  console.error('Failed to generate llm.txt', err);
  process.exit(1);
});
````

## File: src/components/landing/Demo.tsx
````typescript
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
````

## File: src/components/landing/Footer.tsx
````typescript
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
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Relaycode. Built by Arman.
        </p>
      </div>
    </footer>
  );
}
````

## File: src/components/landing/Hero.tsx
````typescript
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
````

## File: src/components/landing/Solution.tsx
````typescript
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
````

## File: src/components/ui/AnimatedList.tsx
````typescript
import { cn } from "@/lib/utils";

interface Line {
  text: string;
  muted?: boolean;
  className?: string;
}

interface AnimatedListProps {
  lines: Line[];
  initialDelay?: number;
}

export function AnimatedList({ lines, initialDelay = 0 }: AnimatedListProps) {
  return (
    <>
      {lines.map((line, i) => (
        <div 
          key={i} 
          className={cn(line.muted ? "text-muted-foreground" : "text-foreground", "animate-slide-up", line.className)}
          style={{ 
            animationDelay: `${initialDelay + i * 150}ms` 
          }}
        >
          {line.text}
        </div>
      ))}
    </>
  );
}
````

## File: src/components/ui/button.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
````

## File: src/pages/NotFoundPage.tsx
````typescript
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold glow-text">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page Not Found.</p>
      <p className="mt-2 text-muted-foreground">Looks like you've ventured into the void.</p>
      <Button asChild className="mt-8">
        <Link to="/">Return to Safety</Link>
      </Button>
    </div>
  );
}
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Relaycode | Turn LLM answers into code</title>
    <meta name="description" content="A CLI tool that turns any LLM answer into real code—built for solo devs.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "relay-landing-web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "node scripts/generate-llm-txt.mjs && tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "clsx": "^2.0.0",
    "firebase": "^10.1.0",
    "lucide-react": "^0.303.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^1.14.0",
    "react-router-dom": "^6.24.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "glob": "^10.4.1",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "terser": "^5.43.1",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        dev: ['Fira Code', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Courier', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out backwards',
        'slide-up': 'slideUp 0.5s ease-out backwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
          '100%': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-firebase': [
            'firebase/app',
            'firebase/auth', 
            'firebase/firestore',
            'firebase/analytics'
          ],
          'vendor-ui': [
            '@radix-ui/react-accordion',
            'lucide-react',
            'clsx',
            'tailwind-merge'
          ],
          // Landing page components (lazy loaded)
          'landing-components': [
            './src/components/landing/Header.tsx',
            './src/components/landing/Hero.tsx',
            './src/components/landing/Problem.tsx',
            './src/components/landing/Solution.tsx',
            './src/components/landing/Demo.tsx',
            './src/components/landing/Roadmap.tsx',
            './src/components/landing/WhoFor.tsx',
            './src/components/landing/FAQ.tsx',
            './src/components/landing/CTA.tsx',
            './src/components/landing/Footer.tsx'
          ]
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk'
          return `assets/[name]-[hash].js`
        },
        // Optimize asset naming
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable tree shaking
    target: 'esnext'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore'
    ],
    exclude: ['firebase/analytics'] // Analytics can be loaded on demand
  }
})
````

## File: src/components/landing/Header.tsx
````typescript
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
````

## File: src/pages/LandingPage.tsx
````typescript
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
````
