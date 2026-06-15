import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, Laptop, BarChart3, Palette, ShoppingBag, Cpu, 
  PhoneCall, Check, MessageSquare, Shield, HelpCircle, Sparkles, Network, ArrowUpRight 
} from "lucide-react";

// Types
interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  subFeatures?: string[];
  metrics: string;
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"agency" | "specialized">("specialized");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Six Main Agency Pillars
  const agencyServices: ServiceDetail[] = [
    {
      slug: "ai-automation",
      title: "AI Automation Solutions",
      badge: "Workflow Efficiency",
      description: "Automate manual tasks and increase productivity with tailor-made automated pipelines, CRM synchronization, and smart agents.",
      features: [
        "AI Lead Chatbots",
        "CRM & Customer Automations",
        "AI Email Pipeline Systems",
        "WhatsApp Automation Systems",
        "Calendar Appointment Bookers"
      ],
      metrics: "-75% Manual Steps"
    },
    {
      slug: "web-dev",
      title: "Website Development",
      badge: "High-Converting UI",
      description: "Responsive, modern, lightning-fast web solutions designed strictly for business performance, lead capture, and user traction.",
      features: [
        "Interactive SaaS Gateways",
        "High-Speed Landing Pages",
        "Custom Commerce Frontends",
        "SEO Structural Indexing",
        "Premium Visual Micro-effects"
      ],
      metrics: "99+ Lighthouse Audit"
    },
    {
      slug: "ai-marketing",
      title: "AI-Powered Marketing",
      badge: "Hyper-Targeted Ads",
      description: "Scale your revenue and inbound leads using advanced analytical optimization pipelines and intelligent creative strategy.",
      features: [
        "Social Ad Spend Funnels",
        "SEO Organic Lead Capture",
        "Content Marketing Engines",
        "Predictive Creative Optimization",
        "Real-time Lead Profiling"
      ],
      metrics: "3.8x Average ROI"
    },
    {
      slug: "branding",
      title: "Branding & Creative Design",
      badge: "Premium Identity",
      description: "Establish absolute authority with high-fidelity branding, layouts, ad creatives, and refined visual language designs.",
      features: [
        "Vector Logo Systems",
        "Typography Design Manuals",
        "Motion Design Ads & Animatics",
        "High-Fidelity UI/UX Layouts",
        "Dynamic Video Directing"
      ],
      metrics: "100% Custom Visuals"
    },
    {
      slug: "ecommerce",
      title: "Ecommerce Growth Systems",
      badge: "Sales Scaler",
      description: "Deploy highly optimized online store solutions containing conversion elements, cross-sell algorithms, and fast checkout routes.",
      features: [
        "Shopify & Headless Development",
        "Average Order Value Systems",
        "AI Product Analysis Systems",
        "Automated Cart Restoring",
        "Product Identity Packaging"
      ],
      metrics: "+40% Average Cart Size"
    },
    {
      slug: "saas-dev",
      title: "SaaS Development",
      badge: "Scalable Platforms",
      description: "Transform business ideas into operational SaaS platforms with secure user systems, payment rails, and robust cloud configurations.",
      features: [
        "SaaS MVP Delivery",
        "Polished Developer Dashboards",
        "Secure Stripe Billing Rails",
        "Flexible Third-party APIs",
        "AWS & Cloud Run Automations"
      ],
      metrics: "4-Week Delivery Matrix"
    }
  ];

  // Six Specialized Deep AI Modules
  const specializedAIServices: ServiceDetail[] = [
    {
      slug: "ai-ops",
      title: "AI Automation",
      badge: "24/7 Operations Host",
      description: "Transform your business operations with intelligent automation that works round the clock. Our operation systems coordinate complex data processing, inventory scheduling, and communication cycles autonomously.",
      features: [
        "Automated data entry & indexing",
        "Smart document classifier (OCR)",
        "Intelligent task scheduler priority",
        "Custom database workflow optimizer"
      ],
      metrics: "24/7 Zero Latency"
    },
    {
      slug: "ai-builder",
      title: "AI Website Builder",
      badge: "Adaptive Layout Engine",
      description: "Launch your digital presence with AI-powered website systems that adapt, optimize, and generate personalized copies dynamically for inbounds.",
      features: [
        "AI-generated high-converting copy",
        "Responsive grid automation",
        "SEO structural indexing built-in",
        "Dynamic client-side personalization"
      ],
      metrics: "Instant Personalization"
    },
    {
      slug: "ai-consult",
      title: "AI Consulting",
      badge: "Strategic Roadmap",
      description: "Navigate global AI integration with elite strategy consultants. We analyze structural business processes and design clear ROI projections.",
      features: [
        "AI maturity / readiness evaluation",
        "Client roadmap implementation plan",
        "Rigorous ROI cost-benefit projections",
        "Corporate adoption guidance support"
      ],
      metrics: "Verified Strategic ROI"
    },
    {
      slug: "ai-agents",
      title: "AI Call Agents",
      badge: "Intelligent Conversationalists",
      description: "Deploy advanced voice assistants that provide natural, human-like customer service. Book appointments, handle support, and process requests smoothly on the fly.",
      features: [
        "24/7 comprehensive customer coverage",
        "High-fidelity Natural Language Processing",
        "Calendar scheduling integration hooks",
        "Multi-language dialect selectors"
      ],
      metrics: "94% Human Equivalence"
    },
    {
      slug: "ai-analytics",
      title: "AI-Powered Analytics",
      badge: "Predictive Intelligence",
      description: "Extract hidden insights from raw corporate datasets. We design models that forecast trends, cluster profiles, and feed automatic action pipelines.",
      features: [
        "Predictive modeling & trend forecast",
        "High-definition chart visualizations",
        "Behavioral segment analysis systems",
        "Automatic operational pdf reporting"
      ],
      metrics: "99.8% Prediction Rate"
    },
    {
      slug: "enterprise-ai",
      title: "Enterprise AI",
      badge: "Scale Architecture",
      description: "Architect secure, cloud-native machine learning infrastructure designed to process millions of complex analytical inquiries in real-time.",
      features: [
        "Scalable Cloud ML Infrastructure",
        "Advanced Analytics Platforms",
        "Rigorous Security & Compliance Core",
        "No-downtime Legacy Integration Hooks"
      ],
      metrics: "99.99% Node Uptime SLA"
    }
  ];

  const displayedServices = activeTab === "specialized" ? specializedAIServices : agencyServices;

  return (
    <section id="services-section" className="bg-[#050505] w-full py-24 px-4 sm:px-6 md:px-8 relative border-y border-[#151515] overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1A1A1A]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Capabilities Directory
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              High-Perfomance Solutions <br />
              <span className="text-primary italic font-serif">For Digital Domination</span>
            </h3>
          </div>

          {/* Toggle Switches */}
          <div className="bg-[#101010] p-1 border border-[#212121] rounded-full inline-flex gap-1 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("specialized")}
              className={`py-2 px-5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "specialized"
                  ? "bg-primary text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Specialized AI Systems
            </button>
            <button
              onClick={() => setActiveTab("agency")}
              className={`py-2 px-5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "agency"
                  ? "bg-primary text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              Core Product Suite
            </button>
          </div>
        </div>

        {/* Dynamic Service Grid Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-[#101010]/80 border border-[#E1E0CC]/15 rounded-2xl p-6 flex flex-col justify-between group h-full relative overflow-hidden transition-all duration-300 hover:border-[#E1E0CC]/35 hover:-translate-y-1 shadow-lg"
              >
                {/* Visual accent hover glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300" />

                <div className="space-y-4">
                  {/* Category Indicator AND Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/10 border border-primary/25 rounded-md px-2.5 py-1">
                      {service.badge}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 font-semibold group-hover:text-primary transition-colors">
                      {service.metrics}
                    </span>
                  </div>

                  {/* Title and Short abstract */}
                  <div className="space-y-1.5">
                    <h4 className="text-[#E1E0CC] text-lg font-bold tracking-tight flex items-center gap-1.5 group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Lists checklist ticks */}
                  <div className="pt-4 border-t border-[#1C1C1C] space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-400">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 border border-primary/20">
                          <Check className="text-primary w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>


              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
