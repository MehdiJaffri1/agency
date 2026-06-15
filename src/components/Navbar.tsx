import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (elementId: string) => {
    setIsOpen(false);
    if (elementId === "root") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Services", target: "services-section" },
    { label: "About Us", target: "about-section" },
    { label: "Solutions", target: "portfolio-section" },
    { label: "Our Process", target: "process-section" },
    { label: "Inquiries", target: "scheduler-section" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 pointer-events-none px-4 md:px-8">
      {/* Outer Floating Pill Container */}
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div className="bg-black/90 border border-[#E1E0CC]/20 rounded-full px-5 py-2.5 md:px-8 md:py-3 shadow-[0_12px_45px_rgba(0,0,0,0.9)] backdrop-blur-md flex items-center justify-between transition-all duration-300">
          
          {/* Brand Logo / Identity */}
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleScroll("root")}>
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#E1E0CC] uppercase">
              Mexan Tech
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleScroll(item.target)}
                className="text-[10px] uppercase tracking-[0.2em] font-medium transition-all text-[#E1E0CC]/75 hover:text-white hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>



          {/* Mobile Hamburg Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E1E0CC] hover:text-white transition-colors p-1 cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-20 left-4 right-4 z-40 pointer-events-auto"
          >
            <div className="bg-black/95 border border-[#E1E0CC]/20 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-xl flex flex-col gap-8">
              
              {/* Menu label */}
              <div className="flex justify-between items-center border-b border-[#E1E0CC]/15 pb-4">
                <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-gray-500">
                  NAVIGATION
                </span>
              </div>

              {/* Navigation list */}
              <div className="flex flex-col gap-5 my-2">
                {navItems.map((item, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx}
                    onClick={() => handleScroll(item.target)}
                    className="flex justify-between items-center text-left text-lg uppercase tracking-[0.18em] font-medium text-[#E1E0CC]/80 hover:text-white transition-colors py-1 cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.button>
                ))}
              </div>

              {/* Mobile Quick Contacts Footer */}
              <div className="border-t border-[#E1E0CC]/15 pt-5 flex justify-between items-center gap-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                <span>EST: 2026</span>
                <button
                  onClick={() => handleScroll("scheduler-section")}
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 rounded-full px-4 py-1.5 transition-all text-[9px] tracking-wider font-semibold hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
