import React from "react";
import { motion } from "motion/react";
import { Compass, Cpu, Rocket, LineChart, Shield, Sparkles } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Strategy",
      icon: Compass,
      description: "We understand your corporate metrics, target inbounds, and legacy bottlenecks to build a custom automation & architecture growth blueprint.",
      bullets: ["AI opportunity auditing", "Strategic ROI forecasting", "SaaS wireframe mapping"]
    },
    {
      num: "02",
      title: "Development",
      icon: Cpu,
      description: "Our developers craft high-performance code pipelines, integrating custom LLMs, rapid database systems, and elite user-centric designs.",
      bullets: ["Vite + TypeScript core setup", "Intelligent agent training", "Security protocol binding"]
    },
    {
      num: "03",
      title: "Launch",
      icon: Rocket,
      description: "We deploy everything securely to sandbox or live Cloud Run containers, testing for edge performance leaks and SEO readiness.",
      bullets: ["Complete load-strength check", "Lighthouse scoring > 95", "Real analytics dashboards"]
    },
    {
      num: "04",
      title: "Scale",
      icon: LineChart,
      description: "We maintain ongoing support systems, analyzing data queries to update models and scale digital advertising lead capture autonomously.",
      bullets: ["Model retraining algorithms", "A/B copywriting experiments", "24/7 backend health monitors"]
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Global Clients" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="process-section" className="bg-[#050505] w-full py-24 px-4 sm:px-6 md:px-8 relative border-b border-[#111111]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-[#101010] border border-[#212121] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Launch Framework
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
            How We Partner <br />
            <span className="text-primary italic font-serif">To Build Fast, Scalable Value</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed pt-1">
            We operate in synchronized sprints, maximizing quality while achieving launch velocity in record times.
          </p>
        </div>

        {/* Workflow step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-[#101010]/80 border border-[#E1E0CC]/15 rounded-2xl p-6 flex flex-col justify-between group h-full hover:border-[#E1E0CC]/35 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 bg-primary/10 border border-primary/25 rounded-md flex items-center justify-center">
                      <Icon className="text-primary w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-primary font-bold">
                      STEP {step.num}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-[#E1E0CC] font-extrabold text-base sm:text-lg group-hover:text-white transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bullets array list */}
                <div className="pt-4 border-t border-[#1C1C1C] space-y-1.5 mt-5">
                  {step.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-505 text-gray-500">
                      <span className="text-primary">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Agency Statistics */}
        <div className="bg-[#101010] border border-[#212121] rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#DEDBC8]/5 rounded-full blur-2xl pointer-events-none" />
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-primary">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
