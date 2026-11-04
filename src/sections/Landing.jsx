
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  Code2,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// Multi-directional gliding background data items
const floatingDataItems = [
  { text: "01", left: "8%", top: "12%", size: "text-4xl", duration: "24s", delay: "0s", dx: "80px", dy: "-60px" },
  { text: "6%", left: "18%", top: "35%", size: "text-5xl", duration: "28s", delay: "0.2s", dx: "-90px", dy: "70px" },
  { text: "42", left: "32%", top: "17%", size: "text-3xl", duration: "22s", delay: "0.4s", dx: "70px", dy: "80px" },
  { text: "127", left: "85%", top: "15%", size: "text-5xl", duration: "30s", delay: "0.1s", dx: "-85px", dy: "-75px" },
  { text: "98.7%", left: "90%", top: "38%", size: "text-4xl", duration: "26s", delay: "0.3s", dx: "95px", dy: "65px" },
  { text: "2.4K", left: "5%", top: "58%", size: "text-4xl", duration: "29s", delay: "0.5s", dx: "100px", dy: "-60px" },
  { text: "15+", left: "25%", top: "85%", size: "text-3xl", duration: "25s", delay: "0.2s", dx: "-75px", dy: "-80px" },
  { text: "2026", left: "70%", top: "10%", size: "text-3xl", duration: "32s", delay: "0.6s", dx: "65px", dy: "90px" },
  { text: "SQL", left: "44%", top: "45%", size: "text-4xl", duration: "27s", delay: "0.3s", dx: "-80px", dy: "100px" },
  { text: "BI", left: "82%", top: "80%", size: "text-5xl", duration: "31s", delay: "0.4s", dx: "90px", dy: "-85px" },
  { text: "€", left: "12%", top: "72%", size: "text-5xl", duration: "23s", delay: "0.1s", dx: "-95px", dy: "75px" },
  { text: "4.8M", left: "62%", top: "88%", size: "text-4xl", duration: "33s", delay: "0.5s", dx: "80px", dy: "-90px" },
  { text: "CTR", left: "35%", top: "68%", size: "text-3xl", duration: "26s", delay: "0.2s", dx: "-70px", dy: "-70px" },
  { text: "+24%", left: "92%", top: "62%", size: "text-4xl", duration: "28s", delay: "0.3s", dx: "85px", dy: "85px" },
  { text: "GA4", left: "55%", top: "20%", size: "text-3xl", duration: "35s", delay: "0.4s", dx: "-90px", dy: "60px" },
  { text: "75%", left: "20%", top: "75%", size: "text-4xl", duration: "27s", delay: "0.2s", dx: "95px", dy: "-75px" },
  { text: "150+", left: "58%", top: "78%", size: "text-3xl", duration: "30s", delay: "0.6s", dx: "-75px", dy: "-85px" },
  { text: "12M", left: "78%", top: "70%", size: "text-4xl", duration: "24s", delay: "0.1s", dx: "85px", dy: "80px" },
  { text: "ROI", left: "75%", top: "52%", size: "text-3xl", duration: "34s", delay: "0.5s", dx: "-100px", dy: "70px" },
  { text: "3.6K", left: "40%", top: "8%", size: "text-4xl", duration: "29s", delay: "0.3s", dx: "70px", dy: "95px" },
  { text: "KPI", left: "48%", top: "65%", size: "text-3xl", duration: "25s", delay: "0.4s", dx: "-85px", dy: "-75px" },
  { text: "+18%", left: "75%", top: "32%", size: "text-4xl", duration: "31s", delay: "0.2s", dx: "90px", dy: "85px" },
];

export function Landing() {
  const [animKey] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const motionSpeed = "slow";
  const glidingEnabled = true;

  // One-time observer trigger to lock animations in place once viewed
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentSection);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const getSpeedMultiplier = () => {
    if (motionSpeed === "slow") return 1.8;
    return 1;
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-black font-sans text-white selection:bg-purple-500 selection:text-white">
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-purple-500/30 bg-neutral-900/95 px-4 py-2 text-xs font-medium text-purple-200 shadow-2xl backdrop-blur-md animate-bounce">
          <CheckCircle2 size={15} className="text-purple-400" />
          {toastMessage}
        </div>
      )}

      {/* LANDING HERO CONTAINER */}
      <section
        key={animKey}
        id="landing"
        ref={sectionRef}
        className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-black text-white"
      >
        {/* ATMOSPHERIC BACKGROUND GRADIENTS & SUBTLE CONTINUOUS GLOW */}
        <div className="bg-fade-in absolute inset-0 -z-30">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
        </div>

        <div className="bg-fade-in absolute inset-0 -z-20 bg-gradient-to-br from-black/90 via-[#0d0118]/85 to-black/90" />

        {/* Subtle top aura */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-purple-600/10 blur-[220px] pointer-events-none -z-10" />
        <div className="bg-fade-in absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(126,34,206,0.12),transparent_50%)]" />

        {/* Seamless bottom fade overlay to merge into Hero */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#09050D] pointer-events-none z-10" />

        {/* CONTINUOUS SLOW GLIDING BACKGROUND DATA NUMBERS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        >
          {floatingDataItems.map((item, index) => {
            const baseDur = parseFloat(item.duration);
            const calculatedDur = `${baseDur * getSpeedMultiplier()}s`;

            return (
              <span
                key={index}
                className={`animate-data-glide absolute font-mono font-bold tracking-widest text-purple-300/[0.08] transition-opacity duration-700 ${item.size}`}
                style={{
                  left: item.left,
                  top: item.top,
                  "--dx": item.dx,
                  "--dy": item.dy,
                  animationDuration: calculatedDur,
                  animationDelay: item.delay,
                  animationPlayState: glidingEnabled ? "running" : "paused",
                }}
              >
                {item.text}
              </span>
            );
          })}
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="mx-auto grid min-h-[100svh] w-full max-w-[1600px] items-center gap-8 px-6 pb-10 pt-28 sm:px-10 sm:pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-16 lg:pb-8 lg:pt-28 xl:px-24">
          {/* LEFT: TEXT CONTENT WITH SMOOTH UPWARD STAGGER */}
          <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-purple-200/90 backdrop-blur-md ${
                isInView ? "hero-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.15s" }}
            >
              <Sparkles size={13} className="shrink-0 text-purple-400" />
              DIGITAL PORTFOLIO <span className="text-purple-400/40">·</span> SLADJANA MANDARIC
            </div>

            <h1
              className={`text-2xl font-extrabold leading-[1.02] tracking-tight sm:text-3xl md:text-4xl xl:text-[4.5rem] ${
                isInView ? "hero-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              Turning
              <span className="block bg-gradient-to-r from-purple-200 via-violet-300 to-fuchsia-300 bg-clip-text pb-1 text-transparent">
                data &amp; ideas
              </span>
              into measurable impact.
            </h1>

            <p
              className={`mt-6 max-w-xl text-base leading-relaxed text-neutral-300/80 sm:text-lg ${
                isInView ? "hero-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.45s" }}
            >
              A multidisciplinary portfolio combining data analytics, digital marketing strategies, and modern web engineering to construct high-performing digital experiences.
            </p>

            <div
              className={`mt-8 flex flex-wrap items-center gap-4 ${
                isInView ? "hero-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => showToast("Navigating to Work...")}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-600/50 active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => showToast("Opening Services Modal...")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/40 hover:bg-white/10 active:scale-95 cursor-pointer"
              >
                <span>Explore Services</span>
                <ChevronRight size={20} className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* RIGHT: STAGGERED RIBBON CARDS ENTERING FROM RIGHT */}
          <div className="relative z-20 ml-auto flex w-full max-w-[720px] flex-col items-end justify-center gap-3 pt-4 sm:pt-6 sm:gap-4 lg:pt-8 lg:gap-4">

            {/* RIBBON CARD 01 */}
            <div
              className={`relative z-30 w-full max-w-[580px] sm:mr-[80px] lg:mr-[100px] ${
                isInView ? "landing-tab-enter" : "opacity-0"
              }`}
              style={{ animationDelay: "0.45s" }}
            >
              <div className="ribbon-wrapper group relative">
                <div className="ribbon-card service-card relative w-full p-5 text-left transition-all duration-500 sm:p-6 lg:p-7">
                  <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-transparent opacity-80" />

                  <div className="relative z-10 flex items-center gap-4 pl-6 pr-4 sm:gap-5 sm:pl-10 sm:pr-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 shadow-[0_0_28px_rgba(168,85,247,0.12)] sm:h-16 sm:w-16 text-purple-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                      <BarChart3 size={34} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-xl lg:text-2xl">
                        Data Analytics
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["Power BI", "SQL", "Excel", "Azure / Fabric"].map((skill) => (
                          <span key={skill} className="rounded-full border border-purple-300/25 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-purple-100 sm:text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div aria-hidden="true" className="hidden shrink-0 text-purple-300/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-100 sm:block" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIBBON CARD 02 */}
            <div
              className={`relative z-25 w-full max-w-[580px] sm:mr-[40px] lg:mr-[50px] ${
                isInView ? "landing-tab-enter" : "opacity-0"
              }`}
              style={{ animationDelay: "0.65s" }}
            >
              <div className="ribbon-wrapper group relative">
                <div className="ribbon-card service-card relative w-full p-5 text-left transition-all duration-500 sm:p-6 lg:p-7">
                  <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-pink-400 to-transparent opacity-80" />

                  <div className="relative z-10 flex items-center gap-4 pl-6 pr-4 sm:gap-5 sm:pl-10 sm:pr-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 shadow-[0_0_28px_rgba(217,70,239,0.12)] sm:h-16 sm:w-16 text-fuchsia-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-fuchsia-500/25 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(217,70,239,0.4)]">
                      <Megaphone size={34} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-fuchsia-200 sm:text-xl lg:text-2xl">
                        Ads Management
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["Google Ads", "Meta Ads", "GA4", "GTM"].map((skill) => (
                          <span key={skill} className="rounded-full border border-fuchsia-300/25 bg-fuchsia-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-fuchsia-100 sm:text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div aria-hidden="true" className="hidden shrink-0 text-fuchsia-300/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fuchsia-100 sm:block" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIBBON CARD 03 */}
            <div
              className={`relative z-30 mr-0 w-full max-w-[580px] ${
                isInView ? "landing-tab-enter" : "opacity-0"
              }`}
              style={{ animationDelay: "0.85s" }}
            >
              <div className="ribbon-wrapper group relative">
                <div className="ribbon-card service-card relative w-full p-5 text-left transition-all duration-500 sm:p-6 lg:p-7">
                  <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-400 to-transparent opacity-80" />

                  <div className="relative z-10 flex items-center gap-4 pl-6 pr-4 sm:gap-5 sm:pl-10 sm:pr-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_28px_rgba(139,92,246,0.12)] sm:h-16 sm:w-16 text-violet-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/25 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                      <Code2 size={34} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-xl lg:text-2xl">
                        Web Development
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["React", "JavaScript", "Tailwind", "SEO"].map((skill) => (
                          <span key={skill} className="rounded-full border border-violet-300/25 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-violet-100 sm:text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div aria-hidden="true" className="hidden shrink-0 text-violet-300/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-100 sm:block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOM CSS STYLES & LUXURY BEZIER ANIMATION DEFINITIONS */}
        <style>{`
          .ribbon-wrapper {
            perspective: 1000px;
            overflow: visible !important;
          }

          .ribbon-card {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 7% 100%);
            border-radius: 0rem 1.25rem 1.25rem 0rem;
            background: linear-gradient(
              135deg,
              rgba(22, 12, 38, 0.94) 0%,
              rgba(12, 6, 22, 0.97) 50%,
              rgba(28, 14, 48, 0.90) 100%
            );
            border-right: 1px solid rgba(255, 255, 255, 0.16);
            border-top: 1px solid rgba(255, 255, 255, 0.16);
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
            backdrop-filter: blur(16px);
            box-shadow:
              0 15px 35px -8px rgba(0, 0, 0, 0.7),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
          }

          /* CONTINUOUS MULTIDIRECTIONAL GLIDE KEYFRAMES */
          @keyframes dataGlideLoop {
            0% {
              transform: translate(0, 0);
              opacity: 0.08;
            }
            50% {
              transform: translate(var(--dx), var(--dy));
              opacity: 0.22;
            }
            100% {
              transform: translate(0, 0);
              opacity: 0.08;
            }
          }

          .animate-data-glide {
            animation: dataGlideLoop var(--glide-dur, 26s) ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* SMOOTH ENTRANCES WITH ULTRA-CUSTOM BEZIER CURVES */
          @keyframes smoothFadeInUp {
            0% {
              opacity: 0;
              transform: translateY(32px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes smoothFadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes smoothStaircaseEnter {
            0% {
              opacity: 0;
              transform: translateX(70px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes cardShine {
            0% { left: -120%; }
            100% { left: 150%; }
          }

          /* ANIMATION CLASSES */
          .hero-fade-in-up {
            opacity: 0;
            animation: smoothFadeInUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .bg-fade-in {
            opacity: 0;
            animation: smoothFadeIn 1.5s ease-out forwards;
          }

          .landing-tab-enter {
            opacity: 0;
            animation: smoothStaircaseEnter 1.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          /* CARD INTERACTION AND HOVER EFFECTS */
          .service-card {
            isolation: isolate;
            transform: translateZ(0);
            transition:
              transform 500ms cubic-bezier(.16, 1, .3, 1),
              border-color 400ms ease,
              box-shadow 400ms ease,
              background-color 400ms ease;
          }

          .service-card::after {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            width: 65%;
            height: 100%;
            pointer-events: none;
            background: linear-gradient(
              110deg,
              transparent,
              rgba(255, 255, 255, 0.12),
              transparent
            );
            transform: skewX(-18deg);
            z-index: 1;
          }

          .service-card:hover::after {
            animation: cardShine 950ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .service-card:hover {
            transform: translateY(-6px) scale(1.012);
            border-color: rgba(255, 255, 255, 0.35);
            box-shadow:
              0 25px 50px -10px rgba(0, 0, 0, 0.8),
              0 0 25px 0 rgba(168, 85, 247, 0.25);
          }

          @media (max-width: 1023px) {
            .landing-tab-enter {
              margin-right: 0 !important;
            }
          }

          @media (max-width: 640px) {
            .ribbon-card {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 5% 100%);
              padding: 14px;
            }

            .landing-tab-enter {
              width: 100%;
              margin-right: 0 !important;
            }
          }

          @media (max-height: 800px) and (min-width: 1024px) {
            .hero-fade-in-up {
              animation-duration: 0.9s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-data-glide {
              animation-duration: 60s !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
