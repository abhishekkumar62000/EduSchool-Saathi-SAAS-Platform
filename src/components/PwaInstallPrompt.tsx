import { useState, useEffect } from "react";
import { Download, Sparkles, Smartphone, Monitor, CheckCircle, X, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // Capture beforeinstallprompt event (Chrome, Edge, Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Wait 3 seconds after page load before showing bottom install banner
      setTimeout(() => {
        const dismissed = sessionStorage.getItem("pwa-install-dismissed");
        if (!dismissed) {
          setShowBanner(true);
        }
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Detect when successfully installed
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowBanner(false);
      setShowModal(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
        setShowBanner(false);
        setShowModal(false);
      }
      setDeferredPrompt(null);
    } else {
      // If no native deferred prompt available, open interactive guidance modal
      setShowModal(true);
    }
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("pwa-install-dismissed", "true");
  };

  return (
    <>
      {/* Floating Bottom Action Banner (Mobile & Desktop) */}
      {showBanner && !isInstalled && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
            {/* Ambient colorful tricolor glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-[#1E40AF]/40 blur-2xl" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 size-28 rounded-full bg-[#FF671F]/30 blur-2xl" />

            <div className="relative z-10 flex items-start gap-3.5">
              {/* Official App Logo Icon */}
              <div className="relative size-14 shrink-0 rounded-2xl bg-white p-1 shadow-lg border border-primary/20 overflow-hidden group">
                <img
                  src="/logo-optimized.png"
                  alt="EduSchool-Saathi"
                  className="size-full object-contain"
                />
              </div>

              {/* Text & Tagline */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-sm tracking-tight inline-flex items-center">
                    <span className="text-[#38BDF8]">Edu</span>
                    <span className="text-[#FB923C]">School</span>
                    <span className="text-white/50">-</span>
                    <span className="text-[#4ADE80]">Saathi</span>
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 text-[9px] font-extrabold uppercase text-emerald-300">
                    App
                  </span>
                </div>

                {/* Exact Tagline requested */}
                <p className="mt-0.5 text-[11px] font-black uppercase tracking-wider text-[#FF671F]">
                  -:HAR SCHOOL KA SAATHI:-
                </p>

                <p className="mt-1 text-[11px] text-slate-300 leading-tight">
                  Add to Mobile & Desktop Homescreen for 1-click instant access & offline records.
                </p>

                {/* Buttons */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleInstallClick}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Download className="size-3.5" />
                    Install App
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="rounded-lg border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10"
                  >
                    How it works
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleDismissBanner}
                aria-label="Close"
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Install Guide Modal for Chrome & iOS */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl">
            {/* Background Glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#1E40AF]/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 size-48 rounded-full bg-[#FF671F]/30 blur-3xl" />

            <div className="relative z-10">
              {/* Header Icon + Brand */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-14 rounded-2xl bg-white p-1.5 shadow-xl border border-white/30 overflow-hidden">
                    <img src="/logo-optimized.png" alt="EduSchool-Saathi Logo" className="size-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black tracking-tight flex items-center gap-0.5">
                      <span className="text-[#38BDF8]">Edu</span>
                      <span className="text-[#FB923C]">School</span>
                      <span className="text-white/50">-</span>
                      <span className="text-[#4ADE80]">Saathi</span>
                    </h3>
                    <p className="text-xs font-black uppercase tracking-widest text-[#FF671F]">
                      -:HAR SCHOOL KA SAATHI:-
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-full bg-white/10 p-2 text-slate-400 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Tagline & Description */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <Sparkles className="size-3.5" /> High-Speed Cloud SaaS
                </span>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  Instant 1-Click Launch Directly from Your Mobile / Desktop Homescreen
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Zero download from app store needed • Uses 0 MB storage • Opens like a native app with full screen view.
                </p>
              </div>

              {/* Instructions based on platform */}
              <div className="mt-5 space-y-3 text-xs">
                <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-3.5 flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-blue-600/30 grid place-items-center shrink-0 text-blue-300">
                    <Smartphone className="size-4" />
                  </div>
                  <div>
                    <b className="text-white font-bold block text-sm">Chrome on Mobile / Android:</b>
                    <p className="text-slate-300 mt-0.5">
                      Tap the Chrome menu <b className="text-white">⋮ (3 dots at top-right)</b> and select <b className="text-emerald-400">"Install app"</b> or <b className="text-emerald-400">"Add to Home screen"</b>.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-3.5 flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-purple-600/30 grid place-items-center shrink-0 text-purple-300">
                    <Monitor className="size-4" />
                  </div>
                  <div>
                    <b className="text-white font-bold block text-sm">Chrome / Edge on Desktop (PC / Laptop):</b>
                    <p className="text-slate-300 mt-0.5">
                      Click the <b className="text-white">Install icon ⊕</b> in the browser address bar (URL bar on top right) to install on Windows / Mac desktop.
                    </p>
                  </div>
                </div>

                {isIOS && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-3.5 flex items-start gap-3">
                    <div className="size-8 rounded-lg bg-amber-600/30 grid place-items-center shrink-0 text-amber-300">
                      <Share2 className="size-4" />
                    </div>
                    <div>
                      <b className="text-white font-bold block text-sm">iPhone / iPad (Safari):</b>
                      <p className="text-slate-300 mt-0.5">
                        Tap the <b className="text-white">Share button (square with arrow up)</b>, scroll down and tap <b className="text-amber-400">"Add to Home Screen"</b>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                {deferredPrompt ? (
                  <button
                    type="button"
                    onClick={handleInstallClick}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 py-3 text-sm font-bold text-white shadow-xl hover:opacity-95"
                  >
                    <Download className="size-4" />
                    Install Now with Official Logo
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90"
                  >
                    Got It! <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Global button to trigger install prompt anywhere (e.g., Navbar or Hero)
export function InstallAppButton({ className = "" }: { className?: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition-all shadow-xs ${className}`}
      >
        <Download className="size-3.5" />
        <span>Install App</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-slate-950 p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src="/logo-optimized.png" alt="Logo" className="size-10 rounded-xl bg-white p-1" />
                <div>
                  <b className="block text-sm">EduSchool-Saathi</b>
                  <span className="text-[10px] font-extrabold text-[#FF671F] uppercase">-:HAR SCHOOL KA SAATHI:-</span>
                </div>
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-300 leading-relaxed">
              To install on your Mobile or Desktop: click Chrome menu <b>⋮</b> &gt; <b>"Install app"</b> or the <b>⊕ install icon</b> in the Chrome address bar.
            </p>
            <Button onClick={() => setShowModal(false)} className="mt-4 w-full text-xs font-bold">
              Got it
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// Floating Desktop Widget docked directly above the WhatsApp Chatbot
export function DesktopPwaInstallWidget() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (isInstalled) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Floating Install App Widget (Docked above Chatbot on tablet/desktop only — prevents mobile clutter) */}
      <div className="hidden sm:flex items-center gap-2 rounded-full border border-primary/30 bg-slate-950/95 py-1 pl-1.5 pr-2.5 sm:py-1.5 sm:pl-2 sm:pr-3 text-white shadow-xl backdrop-blur-xl ring-1 ring-white/10 transition-all hover:scale-105 hover:border-primary/60 group">
        <div className="size-6 sm:size-7 rounded-full bg-white p-0.5 shadow-sm overflow-hidden shrink-0 flex items-center justify-center">
          <img src="/logo-optimized.png" alt="EduSchool Logo" className="size-full object-contain" />
        </div>
        <div className="text-left">
          <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#FF671F]">
            Install App
          </div>
          <div className="text-[8px] sm:text-[9px] text-slate-300 -mt-0.5 hidden xs:block">
            1-Click Shortcut
          </div>
        </div>
        <button
          type="button"
          onClick={handleInstallClick}
          className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-extrabold text-white shadow-brand hover:brightness-110 active:scale-95 transition-all"
        >
          <Download className="size-2.5" />
          <span>Install</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-slate-950 p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src="/logo-optimized.png" alt="Logo" className="size-10 rounded-xl bg-white p-1" />
                <div>
                  <b className="block text-sm">EduSchool-Saathi Desktop App</b>
                  <span className="text-[10px] font-extrabold text-[#FF671F] uppercase">-:HAR SCHOOL KA SAATHI:-</span>
                </div>
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-300 leading-relaxed">
              To install on your Desktop PC or Laptop: Look at your Chrome/Edge browser address bar (top right) and click the <b>⊕ Install icon</b>, or open Chrome menu <b>⋮ &gt; Save and share &gt; Install EduSchool-Saathi</b>.
            </p>
            <Button onClick={() => setShowModal(false)} className="mt-4 w-full text-xs font-bold">
              Got it!
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
