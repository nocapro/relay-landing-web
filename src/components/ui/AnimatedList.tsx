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