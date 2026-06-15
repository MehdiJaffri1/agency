import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle, ArrowRight, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function ConsultationScheduler() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // To update this in the future:
  // 1. You can update the VITE_CONTACT_EMAIL environment variable in your project configuration.
  // 2. Or, you can edit the fallback email string below.
  const destinationEmail = (import.meta as any).env?.VITE_CONTACT_EMAIL || "mexan0101@gmail.com";

  // WhatsApp and Instagram links
  const whatsappUrl = "https://wa.me/923359365271"; // Standard format link
  const instagramUrl = "https://instagram.com/mexantech";
  const facebookUrl = "https://facebook.com/mexantech";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setLoading(true);

    // Simulate direct dispatch or construct the mailto link action fallback
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      // Construct a professional mailto link to open in user's client if they choose to double confirm
      const mailtoSubject = encodeURIComponent(subject || "Mexan Tech Project Proposal");
      const mailtoBody = encodeURIComponent(
        `Hi Mexan Tech,\n\nI would like to schedule a strategy consultation. Below are my requirements:\n\nName: ${name}\nEmail: ${email}\n\nProject Brief:\n${message}\n\nBest regards,\n${name}`
      );
      
      // Delay mailto action slightly for a smooth transition inside the UI
      window.location.href = `mailto:${destinationEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div id="scheduler-panel" className="max-w-4xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Clean Minimalist Contacts & Social Redirection */}
        <div className="md:col-span-5 bg-[#101010] border border-[#E1E0CC]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block">
              Immediate Access
            </span>
            <h4 className="text-2xl font-extrabold text-[#E1E0CC] tracking-tight leading-tight">
              Connect <br className="hidden sm:inline" />
              With Us Directly
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Skip the forms entirely if you prefer. Access our official channels instantenously. We respond to message queries in real-time.
            </p>
          </div>

          {/* Social and WhatsApp / Instagram redirection cards */}
          <div className="space-y-3">
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full p-4 rounded-2xl bg-[#090909] border border-green-500/20 hover:border-green-500/40 transition-all flex items-center justify-between pointer-events-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#DEDBC8]/50 block font-mono font-bold">
                    CHAT ON WHATSAPP
                  </span>
                  <span className="text-xs font-bold text-[#E1E0CC] group-hover:text-primary transition-colors">
                    Start Direct Chat
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            {/* Instagram CTA */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full p-4 rounded-2xl bg-[#090909] border border-amber-500/20 hover:border-amber-500/40 transition-all flex items-center justify-between pointer-events-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#DEDBC8]/50 block font-mono font-bold">
                    FOLLOW ON INSTAGRAM
                  </span>
                  <span className="text-xs font-bold text-[#E1E0CC] group-hover:text-primary transition-colors">
                    Instagram Profile
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            {/* Facebook CTA */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full p-4 rounded-2xl bg-[#090909] border border-blue-500/20 hover:border-blue-500/40 transition-all flex items-center justify-between pointer-events-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#DEDBC8]/50 block font-mono font-bold">
                    FIND US ON FACEBOOK
                  </span>
                  <span className="text-xs font-bold text-[#E1E0CC] group-hover:text-primary transition-colors">
                    Facebook Community
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Email address info text */}
          <div className="pt-4 border-t border-[#1C1C1C] flex items-center gap-3 text-xs text-gray-500 font-mono">
            <Mail className="w-4 h-4 text-primary" />
            <span>{destinationEmail}</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Pristine Minimalist Email Message Form */}
        <div className="md:col-span-7 bg-[#101010] border border-[#E1E0CC]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center space-y-6 h-full my-auto"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle className="text-primary w-8 h-8 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary block">
                    TRANSMISSION INITIALIZED
                  </span>
                  <h4 className="text-2xl font-extrabold text-[#E1E0CC]">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                    We have loaded your message into your mail client to send directly to <strong>{destinationEmail}</strong>. If your email application did not launch, please click the confirmation button below.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4">
                  <a
                    href={`mailto:${destinationEmail}?subject=${encodeURIComponent(subject || "Mexan Tech Project Proposal")}&body=${encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\nProject Brief:\n${message}`
                    )}`}
                    className="flex-1 py-3 px-4 bg-primary text-black rounded-xl text-xs font-bold hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Open Email Client Again
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-3 bg-[#1C1C1C] text-[#E1E0CC] hover:bg-[#252525] border border-gray-800 rounded-xl text-xs font-bold transition-all"
                  >
                    Write New Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form-edit"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">
                    Submit Proposal Specifications
                  </span>
                  <h3 className="text-lg font-bold text-[#E1E0CC]">
                    Request a Consultation Appointment
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary focus:outline-none rounded-xl p-3 text-xs text-[#E1E0CC] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g., sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary focus:outline-none rounded-xl p-3 text-xs text-[#E1E0CC] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                    Inquiry Topic / Service of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Custom AI Automation integration (or leave empty)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary focus:outline-none rounded-xl p-3 text-xs text-[#E1E0CC] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                    Project Brief & Preferred Appointment Time *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your workflows, goals, and specify your preferred date/time slots to schedule your free strategy call..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary focus:outline-none rounded-xl p-3 text-xs text-[#E1E0CC] resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 bg-primary text-black hover:bg-opacity-95 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer mt-4"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      <span>Structuring message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Appointment Request Directly</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5 justify-center text-[10px] text-gray-500 pt-1">
                  <span>⚡ Responds within 12 hours</span>
                  <span className="text-gray-700">•</span>
                  <span>🔒 Direct user authentication</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
