"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface Option {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  activeBackgroundSize?: string;
  activeBackgroundPosition?: string;
}

interface InteractiveSelectorProps {
  options: Option[];
  heading?: string;
  subheading?: string;
}

const InteractiveSelector = ({ options, heading, subheading }: InteractiveSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-32 bg-ink font-sans text-white">
      {heading && (
        <div className="w-full max-w-7xl px-6 mb-16">
          <span className="font-mono text-[10px] text-accent mb-4 block">[ What we do ]</span>
          <h2 className="text-4xl md:text-5xl font-display italic text-paper">{heading}</h2>
          {subheading && <p className="text-ink/40 mt-4 text-sm max-w-md">{subheading}</p>}
        </div>
      )}

      <div className="flex w-full max-w-3xl px-6 h-[420px] md:h-[500px] items-stretch overflow-hidden">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize:
                activeIndex === index ? (option.activeBackgroundSize ?? "contain") : "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition:
                activeIndex === index ? (option.activeBackgroundPosition ?? "center") : "center",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? "translateX(0)" : "translateX(-60px)",
              minWidth: "60px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor:
                activeIndex === index ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.06)",
              backgroundColor: "#111",
              boxShadow:
                activeIndex === index
                  ? "0 20px 60px rgba(0,0,0,0.5)"
                  : "0 10px 30px rgba(0,0,0,0.3)",
              flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
              willChange: "flex, box-shadow",
            }}
          >
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-700"
              style={{
                height: "160px",
                background:
                  activeIndex === index
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
              }}
            />

            {/* Label */}
            <div className="absolute bottom-5 left-0 right-0 flex items-center px-4 gap-3 z-10 pointer-events-none">
              <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 shrink-0">
                {option.icon}
              </div>
              <div className="text-white">
                <div
                  className="font-display italic text-lg leading-tight transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60 transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? "translateX(0)" : "translateX(20px)",
                    transitionDelay: activeIndex === index ? "60ms" : "0ms",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
