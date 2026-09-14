import { useState, useEffect } from "react";
import { MessageSquare, Phone, Send, X, Sparkles, Check, ArrowRight, UserCheck, HelpCircle, ShieldCheck } from "lucide-react";
import { DesktopPwaInstallWidget } from "./PwaInstallPrompt";

export function WhatsappChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<number>(0);
  const [customMsg, setCustomMsg] = useState("");
  const [selectedQuickQuery, setSelectedQuickQuery] = useState("");
  const [hasUnread, setHasUnread] = useState(true);

  // 3 Official WhatsApp Helpline numbers
  const contacts = [
    {
      name: "Founder & Product Lead",
      role: "Immediate Strategy & High-Level Inquiries",
      number: "916200087830",
      display: "+91 62000 87830",
      location: "Bara Bazar, Madhubani HQ",
      avatar: "👔",
      status: "Online Now",
      verified: true,
    },
    {
      name: "Technical Support & Onboarding",
      role: "ERP Setup, School Data & Demo",
      number: "919934276622",
      display: "+91 99342 76622",
      location: "Regional Support Desk",
      avatar: "💻",
      status: "Active (Instant Reply)",
      verified: true,
    },
    {
      name: "School Sales & Subscriptions",
      role: "Pricing, Quotations & Multi-Branch",
      number: "919470074183",
      display: "+91 94700 74183",
      location: "Advisory Team",
      avatar: "📋",
      status: "Available",
      verified: true,
    },
  ];

  const quickQueries = [
    "I want a Free Live Demo of EduSchool-Saathi for my school",
    "Please send pricing details for 0-300 students (Starter Plan)",
    "Please send pricing details for 0-700 students (Standard Pro Plan)",
    "How does the 10-second attendance and WhatsApp fee receipt work?",
    "Need custom setup for multiple branches in Bihar",
  ];

  useEffect(() => {
    // Show bounce hint on page load
    const timer = setTimeout(() => {
      setHasUnread(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    const activeContact = contacts[selectedContact];
    const messageToSend = customMsg.trim() || selectedQuickQuery || "Hello EduSchool-Saathi Team! I would like to inquire about the school SaaS platform.";
    const fullText = `*EduSchool-Saathi Enquiry*\n\n${messageToSend}\n\n_Sent via eduschool-saathi.vercel.app_`;
    const url = `https://wa.me/${activeContact.number}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank");
    setCustomMsg("");
    setSelectedQuickQuery("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Desktop Mode: Install App Pill widget docked directly ABOVE the WhatsApp Chatbot */}
      <DesktopPwaInstallWidget />

      {/* Floating WhatsApp Chatbot Window */}
      {isOpen && (
        <div className="mb-2 w-[92vw] sm:w-[380px] overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-950 text-white shadow-[0_10px_50px_rgba(4,120,87,0.35)] backdrop-blur-2xl ring-1 ring-white/15 animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 p-4 text-white">
            {/* Ambient shimmer */}
            <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-white/10 blur-xl" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative size-11 rounded-2xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center">
                  <img src="/logo-optimized.png" alt="EduSchool-Saathi" className="size-full object-contain" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-black text-sm tracking-tight text-white flex items-center">
                      <span>EduSchool-Saathi Helpdesk</span>
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-100 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-300 inline-block" /> Official WhatsApp Support
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-black/20 p-1.5 text-white/80 hover:text-white hover:bg-black/30 transition-colors"
                aria-label="Close Chat"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Sub-tagline */}
            <div className="mt-2.5 rounded-lg bg-black/20 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#FFB86C] text-center border border-white/10">
              -: HAR SCHOOL KA SAATHI :-
            </div>
          </div>

          {/* Body */}
          <div className="max-h-[380px] overflow-y-auto p-4 space-y-4 text-xs">
            {/* Intro Message */}
            <div className="rounded-2xl rounded-tl-sm border border-emerald-500/20 bg-emerald-950/40 p-3.5 text-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">👋</span>
                <b className="text-white text-xs font-bold">Namaste! Welcome to EduSchool-Saathi.</b>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                Connect directly with our <b>Madhubani Founder & Executive Desk</b> on WhatsApp. Select your preferred contact number below:
              </p>
            </div>

            {/* 3 WhatsApp Options */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Choose WhatsApp Support Line:
              </span>
              {contacts.map((c, idx) => (
                <div
                  key={c.number}
                  onClick={() => setSelectedContact(idx)}
                  className={`cursor-pointer rounded-2xl border p-3 transition-all duration-200 ${
                    selectedContact === idx
                      ? "border-emerald-400 bg-emerald-950/60 ring-2 ring-emerald-500/30 shadow-md"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="size-8 rounded-xl bg-white/10 text-base grid place-items-center">
                        {c.avatar}
                      </span>
                      <div>
                        <b className={`text-xs font-bold block ${selectedContact === idx ? "text-emerald-300" : "text-white"}`}>
                          {c.name}
                        </b>
                        <span className="text-[10px] text-slate-400 block">{c.role}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 shrink-0">
                      {c.display}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Queries */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1 mb-1.5">
                Quick Enquiry Options:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQueries.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setSelectedQuickQuery(q);
                      setCustomMsg(q);
                    }}
                    className={`rounded-full px-2.5 py-1 text-[10px] text-left transition-all ${
                      selectedQuickQuery === q
                        ? "bg-emerald-500 text-white font-bold"
                        : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="space-y-1.5 pt-1">
              <label className="text-[10px] font-bold text-slate-400 px-1">
                Or Type Your Question:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type message for WhatsApp..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="h-10 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="border-t border-white/10 bg-slate-900/90 p-3.5">
            <button
              type="button"
              onClick={handleSendMessage}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all hover:brightness-110 active:scale-98"
            >
              <Send className="size-3.5" />
              Chat on WhatsApp with {contacts[selectedContact].name.split(" ")[0]} ({contacts[selectedContact].display})
            </button>
            <div className="mt-2 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="size-3 text-emerald-400" />
              Direct Founder & Technical Helpdesk • Bara Bazar Madhubani
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button - Round ChatBot Icon */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasUnread(false);
          }}
          aria-label="Open WhatsApp Chat Support"
          className="relative grid size-14 place-items-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-[0_10px_35px_rgba(4,120,87,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-400/30 group-hover:ring-emerald-400/50"
        >
          {/* Ambient Outer Pulse */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 blur-md group-hover:opacity-75 transition-opacity animate-pulse" />

          {/* Inner WhatsApp Chat Icon */}
          <MessageSquare className="relative size-7 fill-white text-white drop-shadow-md transition-transform duration-300 group-hover:rotate-6" />

          {/* Online Live Indicator dot */}
          <span className="absolute bottom-1 right-1 size-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 shadow-sm">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          </span>

          {/* Unread Message Badge */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex size-4">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex size-4 items-center justify-center rounded-full bg-amber-400 border-2 border-slate-950 text-[9px] font-black text-slate-950">
                1
              </span>
            </span>
          )}
        </button>

        {/* Hover Tooltip for Desktop */}
        <div className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden lg:group-hover:flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-slate-950/95 px-3 py-1.5 text-[11px] font-extrabold text-white shadow-xl border border-emerald-500/30 backdrop-blur-md">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          WhatsApp Support (3 Lines)
        </div>
      </div>
    </div>
  );
}
