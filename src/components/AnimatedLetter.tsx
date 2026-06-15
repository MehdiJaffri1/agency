import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

export function ScrollRevealParagraph({ text, className = "" }: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Link useScroll to the paragraph component with requested offset bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center leading-relaxed select-none ${className}`}>
      {chars.map((char, index) => {
        const charProgress = index / totalChars;
        const startVal = Math.max(0, charProgress - 0.1);
        const endVal = Math.min(1, charProgress + 0.05);

        // Map scroll percentage to individual character opacity
        const opacity = useTransform(scrollYProgress, [startVal, endVal], [0.2, 1]);

        return (
          <motion.span
            key={index}
            style={{ opacity }}
            className={char === " " ? "inline-block w-[0.22em]" : "inline-block"}
          >
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}
