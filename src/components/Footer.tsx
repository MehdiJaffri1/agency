import React from "react";
import { Sparkles, ArrowUp, Facebook, Instagram, MessageCircle, Terminal } from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappUrl = "https://wa.me/905300000000";
  const instagramUrl = "https://instagram.com/mexantech";
  const facebookUrl = "https://facebook.com/mexantech";

  return (
    <footer className="bg-black w-full border-t border-[#151515] py-16 px-4 sm:px-6 md:px-8 relative z-10 overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Manifesto column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-primary text-xl sm:text-2xl font-bold">
                Mexan Tech
              </span>
              <span className="text-[9px] uppercase tracking-widest bg-primary/10 border border-primary/20 px-2.5 py-1 text-primary rounded font-mono font-bold leading-none">
                AI OPERATING 2026
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Architecting high-performance digital automation platforms, responsive SaaS ecosystems, and revenue-centric brand designs. Dominating online operations at scale.
            </p>
            <div className="flex gap-3 text-gray-500">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-105"><Facebook className="w-4.5 h-4.5" /></a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-105"><Instagram className="w-4.5 h-4.5" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-105"><MessageCircle className="w-4.5 h-4.5" /></a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[#E1E0CC] font-bold text-xs uppercase tracking-wider">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-gray-400 font-semibold">
              <li>
                <button onClick={() => handleScrollToSection("services-section")} className="hover:text-primary transition-colors text-left cursor-pointer">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("about-section")} className="hover:text-primary transition-colors text-left cursor-pointer">
                  About Our Crew
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("portfolio-section")} className="hover:text-primary transition-colors text-left cursor-pointer">
                  Selected Showcase
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("process-section")} className="hover:text-primary transition-colors text-left cursor-pointer">
                  Our Direct Process
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[#E1E0CC] font-bold text-xs uppercase tracking-wider">
              Client Inquiries
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              Initiate your custom request instantly. Let’s construct high-performance direct web automation pipelines or custom digital systems for your business.
            </p>
            <button
              onClick={() => handleScrollToSection("scheduler-section")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E1E0CC] hover:text-primary transition-all uppercase tracking-widest cursor-pointer"
            >
              <span>Submit Inquiries</span>
              <Terminal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © {new Date().getFullYear()} Mexan Tech. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-[10px] sm:text-xs">
            <span>TLS ENCRIPTED // 128-BIT</span>
            <span>•</span>
            <span>2026 UTC CLOCK</span>
            <span>•</span>
            <button
              onClick={scrollTop}
              className="hover:text-primary transition-all flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
