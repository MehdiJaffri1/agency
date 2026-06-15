import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "How long does a project take to deploy?",
      answer: "Project timelines depend directly on project scope and operational complexity. However, standard websites and basic custom AI features are fully delivered and live within 1 to 3 weeks, while deeper integrated SaaS platforms or enterprise automation suites might take up to 6 weeks."
    },
    {
      id: "faq-2",
      question: "Do you provide support after project deployment?",
      answer: "Absolutely. We do not just build and walk away. We provide dedicated support, database maintenance, periodic strategic reviews, and scaling services with a formal SLA to make sure your applications run smoothly and securely."
    },
    {
      id: "faq-3",
      question: "Can you design custom AI automations for proprietary data?",
      answer: "Yes. We design and fine-tune private, self-contained AI systems (Retrieval Augmented Generation models, smart document classifications, and customized visual models) that securely respect user privacy bounds, complete with strict corporate HIPAA and security compliance structures."
    },
    {
      id: "faq-4",
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients and companies worldwide. Our development team and strategists operate globally, scheduling syncs across US, European, and Asian business hours to keep communication perfectly in phase."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="bg-[#050505] w-full py-24 px-4 sm:px-6 md:px-8 relative border-b border-[#111111] overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-[#101010] border border-[#212121] px-3 py-1 rounded-full inline-flex items-center gap-1.5 justify-center">
            <HelpCircle className="w-3.5 h-3.5 text-primary" /> Common inquiries
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
            Frequently Asked <br />
            <span className="text-primary italic font-serif">Questions</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed pt-1">
            Read through common queries regarding our custom development contracts, project timing, and ongoing services.
          </p>
        </div>

        {/* FAQs list accordion container */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#101010] border border-[#E1E0CC]/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E1E0CC]/35"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#E1E0CC] hover:text-white transition-all outline-none cursor-pointer"
                >
                  <span className="tracking-tight">{item.question}</span>
                  <div className={`w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center shrink-0 ${isOpen ? "bg-primary text-black border-primary" : "text-gray-400"}`}>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-[#1C1C1C]/60 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
