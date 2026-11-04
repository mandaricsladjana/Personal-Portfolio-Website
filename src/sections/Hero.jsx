
import { useState, useEffect, useRef } from "react";
import {
    Download,
    X,
    BarChart3,
    Medal,
    BriefcaseBusiness,
    TrendingUp,
    Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { DataParticles } from "../components/DataParticles";

export const Hero = () => {
    const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);
    const [isRibbonInView, setIsRibbonInView] = useState(false);
    const [isContentInView, setIsContentInView] = useState(false);
    const [isMindsetBubbleVisible, setIsMindsetBubbleVisible] = useState(true);
    const [isKpiPanelOpen, setIsKpiPanelOpen] = useState(false);

    const ribbonRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const currentRibbon = ribbonRef.current;
        if (!currentRibbon) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRibbonInView(true);
                    observer.unobserve(currentRibbon);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(currentRibbon);

        return () => {
            if (currentRibbon) observer.unobserve(currentRibbon);
        };
    }, []);

    useEffect(() => {
        const currentContent = contentRef.current;
        if (!currentContent) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsContentInView(true);
                    observer.unobserve(currentContent);
                }
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(currentContent);

        return () => {
            if (currentContent) observer.unobserve(currentContent);
        };
    }, []);

    const ribbonItems = [
        { icon: Medal, label: "Experience", value: "4+ Years" },
        { icon: BarChart3, label: "KPIs Managed", value: "40+" },
        { icon: BriefcaseBusiness, label: "Projects", value: "25+" },
        { icon: TrendingUp, label: "Core Disciplines", value: "4" },
    ];

    const kpiCategories = [
        {
            title: "Quality & QMS",
            items: [
                "Internal Defect Rate",
                "Customer Complaint Rate",
                "Customer PPM",
                "Supplier PPM",
                "Scrap Rate",
                "Rework Rate",
                "First Pass Yield (FPY)",
                "Non-Conformity Rate",
                "Corrective Action Closure",
                "Audit Compliance",
            ],
        },
        {
            title: "Production & Operations",
            items: [
                "Overall Equipment Effectiveness (OEE)",
                "Production Efficiency",
                "Production Plan Attainment",
                "Downtime Rate",
                "Machine Availability",
                "Cycle Time",
                "Output per Hour",
                "Capacity Utilization",
                "Production Losses",
                "Process Deviation Rate",
            ],
        },
        {
            title: "Logistics & Supply Chain",
            items: [
                "On-Time Delivery (OTD)",
                "On-Time In-Full (OTIF)",
                "Inventory Turnover",
                "Inventory Accuracy",
                "Stock Availability",
                "Warehouse Utilization",
                "Order Fulfillment Rate",
                "Lead Time",
                "Transportation Cost",
                "Picking Accuracy",
            ],
        },
        {
            title: "People & Business",
            items: [
                "Employee Absenteeism",
                "Employee Turnover",
                "Training Completion",
                "Competence Coverage",
                "Training Effectiveness",
                "Overtime Hours",
                "Budget Utilization",
                "Cost Variance",
                "Action Plan Completion",
                "Departmental Performance",
            ],
        },
        {
            title: "Digital Marketing",
            items: [
                "Return on Ad Spend (ROAS)",
                "Return on Investment (ROI)",
                "Cost per Click (CPC)",
                "Cost per Acquisition (CPA)",
                "Click-Through Rate (CTR)",
                "Conversion Rate",
                "Cost per Lead (CPL)",
                "Customer Acquisition Cost (CAC)",
                "Impressions & Reach",
                "Engagement Rate",
            ],
        },
    ];

    const mindsetText = [
        "I believe meaningful results begin with the way we approach a problem.",
        "My work across quality engineering, data analytics, digital advertising, and web development is connected by a common mindset: think critically, understand the underlying factors, recognize opportunities, and build solutions with purpose.",
        "I combine structured problem-solving with analytical thinking and creative execution to move beyond completing tasks toward understanding why things happen, what can be improved, and how to create measurable value.",
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            href: "https://github.com/mandaricsladjana",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/sladjanamandaric/",
        },
        {
            name: "Medium",
            icon: FaMedium,
            href: "https://medium.com/@mandaricsladjana",
        },
    ];

    const MindsetContent = ({ mobile = false }) => (
        <>
            <div
                className={`mb-${mobile ? "2" : "3"} flex items-center gap-2 pr-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-200/70`}
            >
                <Sparkles size={13} className="text-purple-300" />
            </div>

            <h3
                className={`mb-3 ${mobile ? "text-base" : "text-lg"} font-semibold leading-snug text-white`}
            >
                Different disciplines.{" "}
                <span className="text-purple-300">One mindset.</span>
            </h3>

            <div className="space-y-3 text-xs leading-relaxed text-white/75">
                {mindsetText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-purple-400/50 via-fuchsia-400/20 to-transparent" />

            <p className="mt-3 text-xs italic leading-relaxed text-purple-200/80">
                Different challenges require different tools. What remains
                consistent is my approach to solving them.
            </p>
        </>
    );

    return (
        <>
            {/* FIXED BACKGROUND & AURAS */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#09050D]">
                <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#09050D] via-[#09050D]/90 to-transparent z-10" />

                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />

                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />

                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#09050D] via-[#09050D]/90 to-transparent z-10" />
            </div>

            <section
                id="hero"
                className="relative min-h-screen flex flex-col justify-center text-white pt-14 pb-32 lg:pt-24 lg:pb-44"
            >
                {/* STATS RIBBON */}
                <div
                    ref={ribbonRef}
                    className={`relative z-40 w-full max-w-5xl mx-auto px-6 mt-6 sm:mt-10 mb-24 sm:mb-28 lg:mb-32 transition-all ${
                        isRibbonInView ? "hero-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: "0.1s" }}
                >
                    <div className="absolute inset-0 bg-purple-950/10 blur-3xl rounded-3xl pointer-events-none" />

                    <div className="group relative overflow-visible rounded-2xl border border-white/[0.06] bg-gradient-to-r from-black/50 via-[#10061e]/60 to-black/50 p-5 sm:p-6 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-purple-400/30 hover:shadow-[0_25px_70px_rgba(168,85,247,0.2)]">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-purple-500/5 to-transparent transition-opacity duration-700 pointer-events-none" />

                        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent transition-opacity duration-500 opacity-50 group-hover:opacity-100 group-hover:via-purple-200/70" />

                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 items-center gap-y-5">
                            {ribbonItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col items-center justify-center text-center px-4 ${
                                        idx !== ribbonItems.length - 1
                                            ? "md:border-r md:border-dashed md:border-white/[0.06] group-hover:md:border-purple-400/20"
                                            : ""
                                    } transition-colors duration-500 ${
                                        idx === 1 ? "group/kpi" : ""
                                    }`}
                                    onClick={
                                        idx === 1
                                            ? () => setIsKpiPanelOpen((open) => !open)
                                            : undefined
                                    }
                                    onKeyDown={
                                        idx === 1
                                            ? (event) => {
                                                  if (event.key === "Enter" || event.key === " ") {
                                                      event.preventDefault();
                                                      setIsKpiPanelOpen((open) => !open);
                                                  }
                                                  if (event.key === "Escape") {
                                                      setIsKpiPanelOpen(false);
                                                  }
                                              }
                                            : undefined
                                    }
                                    role={idx === 1 ? "button" : undefined}
                                    tabIndex={idx === 1 ? 0 : undefined}
                                    aria-haspopup={idx === 1 ? "true" : undefined}
                                    aria-expanded={idx === 1 ? isKpiPanelOpen : undefined}
                                    aria-label={
                                        idx === 1
                                            ? "Explore KPI categories and examples"
                                            : undefined
                                    }
                                >
                                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white/90 via-purple-100/70 to-purple-200/40 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(168,85,247,0.12)] group-hover:from-white group-hover:via-purple-100 group-hover:to-purple-200 group-hover:drop-shadow-[0_4px_15px_rgba(168,85,247,0.3)] transition-all duration-500">
                                        {item.value}
                                    </span>

                                    <span className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/50 group-hover:text-purple-200/80 transition-colors duration-500">
                                        {item.label}
                                    </span>

                                    {idx === 1 && (
                                        <>
                                            <span className="mt-1 text-[8px] uppercase tracking-[0.16em] text-purple-300/50 opacity-0 transition-opacity duration-300 group-hover/kpi:opacity-100 group-focus-within/kpi:opacity-100 sm:text-[9px]">
                                                Hover to explore
                                            </span>

                                            <div
                                                className={`invisible absolute left-1/2 top-full z-[100] mt-0 w-[min(1000px,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 rounded-2xl border border-purple-300/20 bg-[#0c0714]/95 p-5 text-left opacity-0 shadow-[0_25px_80px_rgba(0,0,0,0.75),0_0_35px_rgba(124,58,237,0.16)] backdrop-blur-2xl transition-all duration-300 group-hover/kpi:visible group-hover/kpi:translate-y-0 group-hover/kpi:opacity-100 group-focus-within/kpi:visible group-focus-within/kpi:translate-y-0 group-focus-within/kpi:opacity-100 ${
                                                    isKpiPanelOpen
                                                        ? "visible translate-y-0 opacity-100"
                                                        : ""
                                                }`}
                                                onClick={(event) => event.stopPropagation()}
                                            >
                                                <div className="mb-4 flex items-center justify-between gap-3">
                                                    <div>
                                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                                                            KPI Expertise
                                                        </p>
                                                        <p className="mt-1 text-[10px] text-white/45">
                                                            Examples of performance indicators across business functions
                                                        </p>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setIsKpiPanelOpen(false);
                                                        }}
                                                        aria-label="Close KPI categories"
                                                        className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/55 transition-colors hover:border-purple-300/40 hover:text-white"
                                                    >
                                                        Close
                                                    </button>
                                                </div>

                                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                                                    {kpiCategories.map((category) => (
                                                        <div key={category.title} className="min-w-0">
                                                            <h3 className="mb-3 border-b border-purple-300/20 pb-2 text-[10px] font-bold uppercase tracking-[0.13em] text-purple-200">
                                                                {category.title}
                                                            </h3>

                                                            <ul className="space-y-2">
                                                                {category.items.map((kpi) => (
                                                                    <li
                                                                        key={kpi}
                                                                        className="text-[10px] leading-snug text-white/60 transition-colors duration-200 hover:text-purple-200 sm:text-[11px]"
                                                                    >
                                                                        {kpi}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/15 to-transparent group-hover:via-fuchsia-400/40 transition-all duration-500" />
                    </div>
                </div>

                <DataParticles />

                {/* MAIN CONTENT */}
                <div
                    ref={contentRef}
                    className="container mx-auto px-6 relative z-20 w-full max-w-6xl"
                >
                    {/* Reduced gap brings the photo closer to the text */}
                    <div className="grid lg:grid-cols-12 gap-0 xl:gap-1 items-center justify-center">
                        {/* LEFT: TEXT */}
                        <div className="lg:col-span-7 space-y-6 lg:space-y-7 text-left">
                            <div
                                className={
                                    isContentInView
                                        ? "hero-fade-in-up"
                                        : "opacity-0"
                                }
                                style={{ animationDelay: "0.15s" }}
                            >
                                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs sm:text-sm text-purple-200 backdrop-blur-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                    Quality Engineer | Data Analyst | Ads Management
                                </span>
                            </div>

                            <div
                                className={`space-y-3 ${
                                    isContentInView
                                        ? "hero-fade-in-up"
                                        : "opacity-0"
                                }`}
                                style={{ animationDelay: "0.3s" }}
                            >
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                                    Hello I'm{" "}
                                    <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                                        Sladjana
                                    </span>
                                    !
                                </h1>

                                <p className="text-base sm:text-lg text-white/80 w-full max-w-md leading-relaxed font-normal">
                                    I'm a Quality Engineer and aspiring Data
                                    Analyst with experience on the QMS team and
                                    working in a multicultural environment. I
                                    enjoy{" "}
                                    <span className="text-purple-300 font-medium">
                                        working with data
                                    </span>
                                    ,{" "}
                                    <span className="text-purple-300 font-medium">
                                        creating meaningful KPIs
                                    </span>
                                    , and{" "}
                                    <span className="text-purple-300 font-medium">
                                        building dashboards
                                    </span>{" "}
                                    that help teams make better decisions and
                                    drive continuous improvement.
                                </p>
                            </div>

                            <div
                                className={`flex flex-wrap items-center gap-4 pt-1 ${
                                    isContentInView
                                        ? "hero-fade-in-up"
                                        : "opacity-0"
                                }`}
                                style={{ animationDelay: "0.45s" }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsCvPopupOpen(true)}
                                    className="group relative bg-purple-600/20 border border-purple-500/40 text-white hover:border-purple-400 hover:bg-purple-600/35 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] focus:outline-none focus:ring-2 focus:ring-purple-400 px-8 py-3.5 text-base font-medium rounded-full flex items-center gap-2.5 cursor-pointer backdrop-blur-md"
                                >
                                    <Download className="w-5 h-5 text-purple-300 group-hover:scale-110 transition-transform duration-300" />
                                    <span>Download CV</span>
                                </button>
                            </div>

                            <div
                                className={`flex items-center gap-3.5 pt-1 ${
                                    isContentInView
                                        ? "hero-fade-in-up"
                                        : "opacity-0"
                                }`}
                                style={{ animationDelay: "0.6s" }}
                            >
                                <span className="text-xs sm:text-sm text-white/60 font-medium">
                                    Let's connect:
                                </span>

                                {socialLinks.map((social, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group"
                                    >
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center p-3 rounded-full bg-white/[0.04] border border-white/10 hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-300 hover:-translate-y-1 hover:scale-110 transition-all duration-300 text-white/80 shadow-md"
                                        >
                                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </a>

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-purple-950/90 border border-purple-400/30 text-[11px] font-medium text-purple-200 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
                                            {social.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: PHOTO + MINDSET BUBBLE */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:justify-center lg:-translate-x-35">
                            <div
                                className={`relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[410px] ${
                                    isContentInView
                                        ? "hero-slide-right"
                                        : "opacity-0"
                                }`}
                                style={{ animationDelay: "0.35s" }}
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 via-violet-600/5 to-transparent blur-3xl animate-pulse pointer-events-none" />

                                <div className="relative">
                                    <img
                                        src="/ProfilePhotos/profile-picture-vector-edit.png"
                                        alt="Sladjana Mandaric"
                                        className="w-full aspect-4/5 object-cover"
                                        style={{
                                            maskImage:
                                                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                                            WebkitMaskImage:
                                                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                                        }}
                                    />
                                </div>

                                {/* HOW I THINK BUTTON */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsMindsetBubbleVisible(
                                            !isMindsetBubbleVisible
                                        )
                                    }
                                    className="absolute right-3 top-5 z-40 inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-[#10091b]/90 px-4 py-2 text-xs font-medium text-purple-100 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-purple-300/60 hover:bg-purple-950 hover:text-white"
                                >
                                    <MessageBubbleIcon />
                                    How I Think
                                </button>

                                {/* DESKTOP THOUGHT BUBBLE */}
                                {isMindsetBubbleVisible && (
                                    <div
                                        className={`hidden sm:block absolute z-30 -right-70 top-[5.5rem] w-[340px] max-w-[calc(100vw-3rem)] ${
                                            isContentInView
                                                ? "hero-fade-in-up"
                                                : "opacity-0"
                                        }`}
                                        style={{ animationDelay: "0.9s" }}
                                    >
                                        <div className="relative rounded-2xl border border-purple-300/25 bg-[#10091b]/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.5),0_0_35px_rgba(124,58,237,0.12)] backdrop-blur-2xl">
                                            <div className="absolute -left-1.5 top-8 h-3 w-3 rotate-45 border-b border-l border-purple-300/25 bg-[#10091b]" />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsMindsetBubbleVisible(
                                                        false
                                                    )
                                                }
                                                aria-label="Close mindset message"
                                                className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors duration-200 hover:bg-purple-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400/60"
                                            >
                                                <X size={15} />
                                            </button>

                                            <MindsetContent />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* MOBILE THOUGHT BUBBLE */}
                            {isMindsetBubbleVisible && (
                                <div
                                    className={`sm:hidden relative mt-5 w-full max-w-[360px] ${
                                        isContentInView
                                            ? "hero-fade-in-up"
                                            : "opacity-0"
                                    }`}
                                    style={{ animationDelay: "0.9s" }}
                                >
                                    <div className="relative rounded-2xl border border-purple-300/25 bg-[#10091b]/90 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setIsMindsetBubbleVisible(false)
                                            }
                                            aria-label="Close mindset message"
                                            className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors duration-200 hover:bg-purple-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400/60"
                                        >
                                            <X size={15} />
                                        </button>

                                        <MindsetContent mobile />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CV POPUP MODAL */}
                {isCvPopupOpen && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-6 animate-fade-in"
                        onClick={() => setIsCvPopupOpen(false)}
                    >
                        <div
                            className="relative w-full max-w-md rounded-3xl border border-purple-500/30 bg-[#0c0714] p-8 shadow-2xl transition-all duration-300"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setIsCvPopupOpen(false)}
                                aria-label="Close CV popup"
                                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:bg-purple-500/20 hover:text-white hover:scale-110 cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                                <Download size={28} />
                            </div>

                            <h2 className="mb-3 text-2xl font-bold text-white">
                                Download My CV
                            </h2>

                            <p className="mb-8 text-sm leading-relaxed text-white/60">
                                Would you like to view your CV directly in your
                                browser or download a copy to your device?
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/CV-QE_Sladjana_Mandaric.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-purple-500/40 px-5 py-3 font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white hover:scale-105"
                                >
                                    View CV
                                </a>

                                <a
                                    href="/CV/Sladjana-Mandaric-CV.pdf"
                                    download
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105 shadow-lg cursor-pointer"
                                >
                                    <Download size={18} />
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* KEYFRAME ANIMATIONS */}
                <style>{`
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

                    @keyframes smoothSlideRight {
                        0% {
                            opacity: 0;
                            transform: translateX(50px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes smoothFadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }

                    .hero-fade-in-up {
                        opacity: 0;
                        animation: smoothFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }

                    .hero-slide-right {
                        opacity: 0;
                        animation: smoothSlideRight 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }

                    .bg-fade-in {
                        opacity: 0;
                        animation: smoothFadeIn 1.5s ease-out forwards;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .hero-fade-in-up,
                        .hero-slide-right,
                        .bg-fade-in {
                            animation: none !important;
                            opacity: 1 !important;
                            transform: none !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};

const MessageBubbleIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
    </svg>
);

export default Hero;





