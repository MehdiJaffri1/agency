import React from "react";
import { motion } from "motion/react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";
import { ScrollRevealParagraph } from "./AnimatedLetter";
import { Shield, Sparkles, Zap, Award } from "lucide-react";

export default function About() {
  const marcusHeaderSegments = [
    { text: "We are Mexan Tech,", className: "font-normal text-[#E1E0CC] mr-1" },
    { text: "your growth partner", className: "italic font-serif text-primary mr-1" },
    { text: "for the new AI era. We create high-converting systems.", className: "font-normal text-gray-400" },
  ];

  return (
    <section id="about-section" className="relative bg-black w-full py-20 px-4 md:px-8 space-y-16">
      {/* Visual Arts Card (Prisma Specs) */}
      <div className="bg-[#101010] border border-[#212121] rounded-2xl md:rounded-[2.5rem] p-8 md:p-16 max-w-6xl mx-auto text-center space-y-8 relative overflow-hidden">
        {/* Glowing backdrop spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-bold bg-primary/15 px-3 py-1 rounded-full border border-primary/20">
            Visual arts director
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-6xl max-w-4xl mx-auto leading-[1.05] sm:leading-[0.98] tracking-tight">
            <WordsPullUpMultiStyle segments={marcusHeaderSegments} />
          </h3>
        </div>

        {/* Scroll Linked reveal text */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-[#212121]/80 relative z-10">
          <ScrollRevealParagraph
            text="Over the last seven years, we have worked with global production houses that craft cinema-grade experiences. We help brands automate, scale, and dominate online with next-generation high-converting systems."
            className="text-[#DEDBC8] text-sm sm:text-base md:text-lg tracking-wide text-center"
          />
          <div className="text-[10px] text-gray-500 font-mono mt-4 uppercase tracking-widest animate-pulse">
            Scroll vertically to reveal directory narrative •
          </div>
        </div>
      </div>

      {/* Mexan Tech Core Concept: "Your Growth Partner For The AI Era" */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-10">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs text-primary uppercase font-bold tracking-widest py-1 px-3 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            Empowering scale
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-black tracking-tight leading-none">
            Your Growth Partner <br />
            <span className="text-primary italic font-serif">For The AI Era</span>
          </h3>

          <div className="h-1 w-20 bg-primary/40 rounded" />
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We are a modern digital agency helping businesses dominate online with next-generation automated workflows, high-converting interfaces, and elite growth frameworks.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#101010] border border-[#212121] rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <h4 className="text-[#E1E0CC] font-bold text-lg md:text-xl">
              More traffic. More leads. More sales. More automation.
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Whether you are a fast-moving startup, creator studio, high-volume ecommerce brand, trading enterprise, SaaS platform, or a scaling local service provider — we architect software ecosystems that multiply revenue and eliminate repetitive administrative waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#212121]/70">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-[#212121] shrink-0">
                <Zap className="text-primary w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#E1E0CC]">Maximized Velocity</h5>
                <p className="text-[11px] text-gray-500 mt-1">Replacing delayed manual steps with microsecond direct AI automations.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-[#212121] shrink-0">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#E1E0CC]">Premium Polish</h5>
                <p className="text-[11px] text-gray-500 mt-1">Our designs reflect high value, attracting high-paying target clients safely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
