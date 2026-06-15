import React from "react";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ConsultationScheduler from "./components/ConsultationScheduler";
import Footer from "./components/Footer";
import { Sparkles, Terminal, Calendar, ArrowRight, Video } from "lucide-react";

export default function App() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-black text-[#E1E0CC] selection:bg-primary selection:text-black">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 3. PERFORMANCE SERVICES SOLUTION DIRECTORY */}
      <ServicesSection />

      {/* 4. ABOUT US PROFILE CARD */}
      <About />

      {/* 5. PORTFOLIO SHOWCASE */}
      <Portfolio />

      {/* 6. STRATEGIC PROCESS PIPELINE */}
      <Process />

      {/* 7. TESTIMONIAL CITATIONS */}
      <Testimonials />

      {/* 8. FREQUENTLY ASKED ACCORDIONS */}
      <FAQ />

      {/* INTERACTIVE BOOKING CONTAINER PORTAL (Inquiries anchor anchor) */}
      <section id="scheduler-section" className="bg-black w-full py-24 px-4 sm:px-6 md:px-8 relative border-b border-[#111111]">
        {/* Absolute design guides */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#1C1C1C]/40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#1C1C1C]/40 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary bg-[#101010] border border-[#212121] px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 justify-center">
              <Calendar className="w-4 h-4 text-primary" /> FREE CONSULTATION
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
              Direct Inquiries Portal <br />
              <span className="text-primary italic font-serif">Prepare Strategy Proposal</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed pt-1">
              Complete the quick brief below to send an appointment request directly, or redirect to our social messenger channels.
            </p>
          </div>

          <ConsultationScheduler />
        </div>
      </section>

      {/* 10. FINAL STRATEGIC CTA BANNER */}
      <section className="relative w-full py-28 px-4 sm:px-6 md:px-8 bg-[#080808] border-b border-[#151515] overflow-hidden text-center">
        {/* Subtle decorative glowing background spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 bg-noise opacity-[0.1] pointer-events-none w-full h-full" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-1 bg-[#101010] border border-primary/20 rounded-full py-1 px-3 text-[10px] sm:text-xs text-primary uppercase font-bold tracking-widest leading-none">
            <Sparkles className="w-3.5 h-3.5" /> Direct scale activation
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl md:text-5.5xl font-black text-white leading-tight tracking-tight">
              Ready To Grow Your Business <br />
              <span className="text-primary italic font-serif">With AI & Digital Systems?</span>
            </h3>
            <p className="text-[#E1E0CC]/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Let’s build something powerful together. Whether you need deep backend workflow automation, custom Vite frontend web interfaces, marketing pipelines, or complete enterprise systems — we’re ready to help you scale.
            </p>
          </div>

          {/* Combined CTA triggers */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleScrollToSection("scheduler-section")}
              className="px-6 py-3.5 bg-[#DEDBC8] text-black font-extrabold text-xs sm:text-sm rounded-full shadow-[0_10px_25px_-10px_rgba(222,219,200,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScrollToSection("scheduler-section")}
              className="px-6 py-3.5 bg-black hover:bg-black/90 text-primary border border-primary/20 font-bold text-xs sm:text-sm rounded-full hover:border-[#DEDBC8]/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Video className="w-4 h-4 text-primary" />
              <span>Book Free Strategy Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. FOOTER SECTION */}
      <Footer />
    </main>
  );
}
