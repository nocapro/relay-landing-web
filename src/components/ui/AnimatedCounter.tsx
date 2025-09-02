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