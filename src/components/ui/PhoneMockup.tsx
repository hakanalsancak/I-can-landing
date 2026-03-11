"use client";

import Image from "next/image";
import { type ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function PhoneMockup({
  children,
  imageSrc,
  imageAlt = "App screenshot",
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Phone frame */}
        <div className="relative overflow-hidden rounded-[3rem] border-[6px] border-[#1a2a44] bg-[#0d1b2e] shadow-2xl">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={1300}
              className="block w-full h-auto"
              priority
            />
          ) : (
            <>
              {/* Dynamic Island for CSS-based screens */}
              <div className="relative z-10 mx-auto mt-3 h-[28px] w-[100px] rounded-full bg-[#0d1b2e]" />

              {/* Screen content */}
              <div className="relative -mt-3 min-h-[540px] overflow-hidden bg-background px-4 pb-6 pt-6">
                {children}
              </div>

              {/* Home indicator */}
              <div className="mx-auto mb-3 mt-2 h-1 w-28 rounded-full bg-white/20" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function AICoachScreen() {
  return (
    <div className="space-y-4">
      {/* Status bar */}
      <div className="flex items-center justify-between text-[10px] text-text-secondary">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="h-2 w-4 rounded-sm border border-text-secondary/50">
            <div className="h-full w-3/4 rounded-sm bg-accent" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-accent-highlight flex items-center justify-center">
          <span className="text-sm">🧠</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI Coach</p>
          <p className="text-[10px] text-accent">Online</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="space-y-3">
        <div className="rounded-2xl rounded-tl-sm bg-background-secondary border border-border p-3 max-w-[85%]">
          <p className="text-xs text-text-secondary leading-relaxed">
            Great session today! Your focus rating improved by 12% compared to
            last week.
          </p>
        </div>

        <div className="rounded-2xl rounded-tl-sm bg-background-secondary border border-border p-3 max-w-[85%]">
          <p className="text-xs text-text-secondary leading-relaxed">
            I noticed you perform best in morning sessions. Consider scheduling
            key training before noon.
          </p>
        </div>

        <div className="ml-auto rounded-2xl rounded-tr-sm bg-accent/20 border border-accent/30 p-3 max-w-[75%]">
          <p className="text-xs text-white leading-relaxed">
            What should I focus on this week?
          </p>
        </div>

        <div className="rounded-2xl rounded-tl-sm bg-background-secondary border border-border p-3 max-w-[85%]">
          <p className="text-xs text-text-secondary leading-relaxed">
            Based on your logs, work on{" "}
            <span className="text-accent font-medium">
              consistency under pressure
            </span>
            . Your performance drops 15% in high-stakes situations.
          </p>
        </div>

        {/* Insight card */}
        <div className="rounded-2xl bg-accent/10 border border-accent/20 p-3">
          <p className="text-[10px] text-accent font-medium mb-1">
            💡 Weekly Insight
          </p>
          <p className="text-xs text-text-secondary leading-relaxed">
            Athletes who log daily improve 23% faster. You&apos;re on a 14-day
            streak — keep going!
          </p>
        </div>
      </div>
    </div>
  );
}
