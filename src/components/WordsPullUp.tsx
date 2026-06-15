import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = "", showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, idx) => {
        const isLastWord = idx === words.length - 1;
        const needsAsterisk = showAsterisk && isLastWord && word.toLowerCase().endsWith("a");
        // If it needs an asterisk, we extract the "a" so we can position the superscript precisely
        const displayWord = needsAsterisk ? word.substring(0, word.length - 1) + "a" : word;

        return (
          <span key={idx} className="relative inline-block mr-[0.25em] overflow-visible pb-[0.05em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {displayWord}
              {needsAsterisk && (
                <span 
                  id="asterisk-char"
                  className="absolute top-[0.45em] -right-[0.3em] text-[0.31em] select-none text-primary leading-none"
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

interface StyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyleSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Flatten all segments into their individual words, storing className references
  const allWords: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    const parts = seg.text.split(/\s+/).filter(Boolean);
    parts.forEach((w) => {
      allWords.push({ word: w, className: seg.className || "" });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, idx) => {
        return (
          <span key={idx} className="relative inline-block mr-[0.3em] overflow-visible py-0.5">
            <motion.span
              className={`inline-block ${item.className}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
