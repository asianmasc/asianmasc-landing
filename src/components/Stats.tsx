"use client";

import { useEffect, useRef, useState } from "react";
import { MEMBER_COUNT } from "@/lib/constants";

interface StatItemProps {
  value: number | string;
  suffix?: string;
  label: string;
  description: string;
  isNumeric: boolean;
}

function AnimatedStat({ value, suffix = "", label, description, isNumeric }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setIsVisible(true);
            
            if (isNumeric && typeof value === "number") {
              animateValue(0, value, 2000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, isNumeric]);

  const animateValue = (start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  const displayValue = isNumeric ? `${count}${suffix}` : value;

  return (
    <div 
      ref={ref} 
      className={`text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <div className="text-lg font-semibold text-white mb-1">
        {label}
      </div>
      <div className="text-sm text-gray-500">
        {description}
      </div>
    </div>
  );
}

const stats: StatItemProps[] = [
  {
    value: Math.floor(MEMBER_COUNT / 1000),
    suffix: "K+",
    label: "Members",
    description: "r/asianmasculinity subreddit",
    isNumeric: true,
  },
  {
    value: "24/7",
    suffix: "",
    label: "Active",
    description: "Global community always online",
    isNumeric: false,
  },
  {
    value: 100,
    suffix: "+",
    label: "Cities",
    description: "Local meetups worldwide",
    isNumeric: true,
  },
  {
    value: "Free",
    suffix: "",
    label: "To Join",
    description: "No paywall. Ever.",
    isNumeric: false,
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-transparent to-accent-gold/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
