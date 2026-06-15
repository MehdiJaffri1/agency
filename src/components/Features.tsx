import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Trigger animations once when 100px into view
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const headingLine1 = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-[#E1E0CC]" }
  ];

  const headingLine2 = [
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 font-medium" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const checklistCard2 = [
    "Real-time sequence mapping",
    "Frame annotation suite",
    "Automated beat-sync drafts",
    "Instant story sharing",
  ];

  const checklistCard3 = [
    "AI diagnostics & analysis",
    "Automated creative feedback",
    "Slack & Figma integrations",
  ];

  const checklistCard4 = [
    "Custom notification blocker",
    "Generative soundscape tool",
    "Secure calendar sync",
  ];

  return (
    <section id="features-section" className="relative min-h-screen bg-black w-full py-24 px-4 sm:px-6 md:px-8 space-y-12 overflow-hidden">
      {/* Background noise grid utility */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      {/* Header section */}
      <div className="max-w-6xl mx-auto space-y-3 text-center relative z-10">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-[#212121]/50 border border-[#212121] rounded-full py-1 px-3">
            Core Workflow
          </span>
        </div>
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-center flex flex-col items-center select-none">
          <WordsPullUpMultiStyle segments={headingLine1} />
          <WordsPullUpMultiStyle segments={headingLine2} className="opacity-80" />
        </h4>
      </div>

      {/* 4-column card grid */}
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:h-[500px] relative z-10"
      >
        {/* Card 1 - Video Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.0 }}
          className="relative h-[250px] md:h-auto rounded-xl md:rounded-2xl overflow-hidden border border-[#212121] flex flex-col justify-end p-5 select-none"
        >
          {/* HD Background Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          />
          {/* Dark card overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 noise-overlay opacity-[0.35] pointer-events-none z-10" />

          {/* Card footer title */}
          <h5 className="relative z-20 text-[#E1E0CC] text-lg font-bold tracking-tight">
            Your creative canvas.
          </h5>
        </motion.div>

        {/* Card 2 - Project Storyboard */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.15 }}
          className="bg-[#212121]/80 backdrop-blur-sm border border-gray-800/55 rounded-xl md:rounded-2xl p-6 flex flex-col justify-between group select-none hover:border-primary/45 transition-colors"
        >
          <div className="space-y-4">
            {/* Top icon and label header */}
            <div className="flex items-center justify-between">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                alt="Storyboard Design Icon"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/40 object-cover border border-[#212121]"
              />
              <span className="font-mono text-xs text-primary font-bold">
                01
              </span>
            </div>

            <div className="space-y-1">
              <h5 className="text-[#E1E0CC] text-base md:text-lg font-extrabold tracking-tight">
                Project Storyboard.
              </h5>
              <p className="text-[11px] text-gray-500 font-medium">
                Visual script drafting pipeline
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-2 pt-2">
              {checklistCard2.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                  <Check className="text-primary w-3.5 h-3.5 stroke-[3] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More link with rotated ArrowRight (rotated -45deg on hover) */}
          <div className="pt-5 border-t border-[#212121]/70 mt-4 flex items-center justify-start">
            <button
              onClick={() => {
                const el = document.getElementById("scheduler-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1 text-xs text-primary hover:text-[#E1E0CC] font-semibold transition-colors group cursor-pointer"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
            </button>
          </div>
        </motion.div>

        {/* Card 3 - Smart Critiques */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="bg-[#212121]/80 backdrop-blur-sm border border-gray-800/55 rounded-xl md:rounded-2xl p-6 flex flex-col justify-between group select-none hover:border-primary/45 transition-colors"
        >
          <div className="space-y-4">
            {/* Top icon and label header */}
            <div className="flex items-center justify-between">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                alt="Smart Critiques Icon"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/40 object-cover border border-[#212121]"
              />
              <span className="font-mono text-xs text-primary font-bold">
                02
              </span>
            </div>

            <div className="space-y-1">
              <h5 className="text-[#E1E0CC] text-base md:text-lg font-extrabold tracking-tight">
                Smart Critiques.
              </h5>
              <p className="text-[11px] text-gray-500 font-medium">
                Intelligent content review
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-2 pt-2">
              {checklistCard3.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                  <Check className="text-primary w-3.5 h-3.5 stroke-[3] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[#212121]/70 mt-4 flex items-center justify-start">
            <button
              onClick={() => {
                const el = document.getElementById("scheduler-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1 text-xs text-primary hover:text-[#E1E0CC] font-semibold transition-colors group cursor-pointer"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
            </button>
          </div>
        </motion.div>

        {/* Card 4 - Immersion Capsule */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.45 }}
          className="bg-[#212121]/80 backdrop-blur-sm border border-gray-800/55 rounded-xl md:rounded-2xl p-6 flex flex-col justify-between group select-none hover:border-primary/45 transition-colors"
        >
          <div className="space-y-4">
            {/* Top icon and label header */}
            <div className="flex items-center justify-between">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                alt="Immersion Capsule Icon"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/40 object-cover border border-[#212121]"
              />
              <span className="font-mono text-xs text-primary font-bold">
                03
              </span>
            </div>

            <div className="space-y-1">
              <h5 className="text-[#E1E0CC] text-base md:text-lg font-extrabold tracking-tight">
                Immersion Capsule.
              </h5>
              <p className="text-[11px] text-gray-500 font-medium">
                Distraction-free focus environments
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-2 pt-2">
              {checklistCard4.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                  <Check className="text-primary w-3.5 h-3.5 stroke-[3] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[#212121]/70 mt-4 flex items-center justify-start">
            <button
              onClick={() => {
                const el = document.getElementById("scheduler-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1 text-xs text-primary hover:text-[#E1E0CC] font-semibold transition-colors group cursor-pointer"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
