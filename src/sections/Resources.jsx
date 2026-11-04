import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
    FaThLarge,
    FaBullhorn,
    FaDownload,
    FaTimes,
    FaArrowRight,
    FaCode,
} from "react-icons/fa";

const resources = [
    {
        id: "visual-planning",
        title: "Notion Template for Easy KPI Visuals Planning",
        popupDescription:
            "Download my KPI Planning Visuals pattern — a Notion-based visual system designed to help organize KPIs, dashboard ideas, goals and reporting workflows in one clear place.",
        link: "https://sheer-toy-588.notion.site/Data-Analytics-Planner-375108b3e7c580dca8d3fc2046c9de68?source=copy_link",
        icon: FaThLarge,
        tags: ["Power BI", "DAX", "Charts"],
    },
    {
        id: "ads-tracking",
        title: "Notion Ads & Campaign Tracking Template",
        description:
            "A practical Notion system for organizing campaigns, advertising activities and performance tracking.",
        popupDescription:
            "Download my Ads Tracking pattern — a practical Notion system for organizing advertising activities, campaigns, performance and results.",
        link: "https://sheer-toy-588.notion.site/Ads-Planner-306108b3e7c581579e79ec83fb223660?source=copy_link",
        icon: FaBullhorn,
        tags: ["LinkedIn", "Meta", "Google Ads"],
    },
    {
        id: "web-development-todo",
        title: "Web Development To-Do List",
        popupDescription:
            "A practical Notion checklist for planning and organizing website development projects — from structure and UI/UX to SEO, analytics, deployment and final testing.",
        link: "https://app.notion.com/p/My-Website-Design-Development-To-Do-Checklist-dfb108b3e7c583e6b7b5011d04a16ffd?source=copy_link",
        icon: FaCode,
        tags: ["Web Development", "React", "SEO", "GA4", "GTM"],
    },
];

export function Resources() {
    const [isOpen, setIsOpen] = useState(false);
    const [showRibbon, setShowRibbon] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const hasTriggeredRibbon = useRef(false);
    const location = useLocation();

    useEffect(() => {
        // Check if user has already closed it in this session
        const hasClosedBefore = sessionStorage.getItem("hasClosedResourcesRibbon");
        if (hasClosedBefore) {
            hasTriggeredRibbon.current = true;
            return;
        }

        const handleScroll = () => {
            if (hasTriggeredRibbon.current) return;

            // Trigger if scrolled past 15% OR if the page is short and already scrolled/loaded
            if (
                window.scrollY > window.innerHeight * 0.1 ||
                document.documentElement.scrollHeight <= window.innerHeight * 1.2
            ) {
                hasTriggeredRibbon.current = true;
                setShowRibbon(true);
                setIsOpen(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Run immediately on mount to catch cases where user is already scrolled
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Handle manual close by user clicking the X button
    const handleCloseRibbon = () => {
        setIsOpen(false);
        setShowRibbon(false);
        sessionStorage.setItem("hasClosedResourcesRibbon", "true");
    };

    const handleDownload = () => {
        if (!selectedResource) return;

        if (selectedResource.link !== "#") {
            window.open(
                selectedResource.link,
                "_blank",
                "noopener,noreferrer"
            );
        }

        setSelectedResource(null);
    };

    return createPortal(
        <div>
            <>
                {/* =========================
                    LEFT RESOURCE RIBBON
                ========================== */}
                {showRibbon && (
                    <>
                        {/* =========================
                            CLOSED RESOURCE TAB
                        ========================== */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`
                                fixed
                                left-0
                                top-1/2
                                -translate-y-1/2
                                z-50
                                h-32
                                w-9
                                items-center
                                justify-center
                                rounded-r-2xl
                                border
                                border-l-0
                                border-white/[0.06]
                                bg-[#030105]
                                text-white/50
                                shadow-[4px_0_20px_rgba(0,0,0,0.6)]
                                backdrop-blur-md
                                transition-all
                                duration-700
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                hover:w-11
                                hover:text-white/80
                                md:flex
                                ${
                                    isOpen
                                        ? "pointer-events-none -translate-x-full opacity-0"
                                        : "pointer-events-auto translate-x-0 opacity-100"
                                }
                            `}
                            aria-label="Open resources ribbon"
                        >
                            <span
                                className="
                                    rotate-180
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    [writing-mode:vertical-rl]
                                "
                            >
                                Resources
                            </span>
                        </button>

                        {/* =========================
                            RESOURCE RIBBON
                        ========================== */}
                        <aside
                            className={`
                                fixed
                                left-0
                                top-0
                                ${isOpen ? "z-[99999]" : "z-40"}
                                hidden
                                h-[111.111vh]
                                min-h-[111.111vh]
                                w-[280px]
                                overflow-hidden
                                border-r
                                border-white/[0.05]
                                bg-[#030105]
                                shadow-[8px_0_40px_rgba(0,0,0,0.85)]
                                backdrop-blur-2xl
                                transition-all
                                duration-700
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                md:block
                            `}
                            style={{
                                transform: isOpen
                                    ? "translateX(0)"
                                    : "translateX(-100%)",
                                opacity: isOpen ? 1 : 0,
                                pointerEvents: isOpen ? "auto" : "none",
                            }}
                        >
                            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-[#020104]
                                        via-[#040207]
                                        to-[#06030a]
                                    "
                                />
                                <div
                                    className="
                                        absolute
                                        -left-[45%]
                                        -top-[18%]
                                        h-[520px]
                                        w-[520px]
                                        rounded-full
                                        bg-purple-900/10
                                        blur-[150px]
                                    "
                                />
                                <div
                                    className="
                                        absolute
                                        -right-[35%]
                                        top-[8%]
                                        h-[480px]
                                        w-[480px]
                                        rounded-full
                                        bg-fuchsia-950/10
                                        blur-[160px]
                                    "
                                />
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        opacity-[0.04]
                                    "
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
                                        backgroundSize: "55px 55px",
                                    }}
                                />
                            </div>

                            <div className="relative flex h-full flex-col px-5 pb-4 pt-5">
                                {/* CLOSE BUTTON */}
                                <button
                                    onClick={handleCloseRibbon}
                                    className="
                                        absolute
                                        right-4
                                        top-5
                                        z-10
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.04]
                                        text-white/50
                                        transition-all
                                        duration-300
                                        hover:scale-105
                                        hover:bg-white/[0.08]
                                        hover:text-white
                                    "
                                    aria-label="Close resources ribbon"
                                >
                                    <FaTimes size={11} />
                                </button>

                                {/* CURRENTLY WORKING ON */}
                                <section>
                                    <div className="mb-3 flex items-center gap-2">
                                        <span
                                            className="
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-white/70
                                                shadow-[0_0_8px_rgba(255,255,255,0.5)]
                                                animate-[pulseWhite_2s_ease-in-out_infinite]
                                            "
                                        />
                                        <p
                                            className="
                                                text-[8px]
                                                font-medium
                                                uppercase
                                                tracking-[0.28em]
                                                text-white/40
                                            "
                                        >
                                            Currently
                                        </p>
                                    </div>

                                    <h3
                                        className="
                                            max-w-[220px]
                                            text-[20px]
                                            font-medium
                                            leading-[1.1]
                                            tracking-[-0.02em]
                                            text-white/90
                                        "
                                    >
                                        What am I working on?
                                    </h3>

                                    <Link
                                        to="/projects/glowbyanadu_webshop"
                                        className="
                                            group
                                            mt-3
                                            flex
                                            items-center
                                            gap-3
                                            rounded-2xl
                                            border
                                            border-transparent
                                            p-2
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:border-white/[0.08]
                                            hover:bg-white/[0.03]
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-white/[0.08]
                                                bg-white/[0.04]
                                                text-white/80
                                            "
                                        >
                                            <FaArrowRight size={12} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[11px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.12em]
                                                    text-white/85
                                                "
                                            >
                                                Building a Fully Functional E-Commerce Boutique Website
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-1">
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        bg-white/[0.04]
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-normal
                                                        uppercase
                                                        tracking-wider
                                                        text-white/50
                                                    "
                                                >
                                                    UI/UX Design
                                                </span>
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        bg-white/[0.04]
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-normal
                                                        uppercase
                                                        tracking-wider
                                                        text-white/50
                                                    "
                                                >
                                                    SEO
                                                </span>
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        bg-white/[0.04]
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-normal
                                                        uppercase
                                                        tracking-wider
                                                        text-white/50
                                                    "
                                                >
                                                    GA4
                                                </span>
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        bg-white/[0.04]
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-normal
                                                        uppercase
                                                        tracking-wider
                                                        text-white/50
                                                    "
                                                >
                                                    Web Development
                                                </span>
                                            </div>

                                            <div
                                                className="
                                                    mt-2.5
                                                    inline-flex
                                                    items-center
                                                    rounded-full
                                                    border
                                                    border-white/20
                                                    bg-white/10
                                                    px-3
                                                    py-1
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.12em]
                                                    text-white/90
                                                    backdrop-blur-sm
                                                "
                                            >
                                                Coming Soon
                                            </div>
                                        </div>
                                    </Link>
                                </section>

                                <div className="my-5 flex items-center gap-3">
                                    <div
                                        className="
                                            h-px
                                            flex-1
                                            bg-gradient-to-r
                                            from-transparent
                                            via-white/[0.08]
                                            to-transparent
                                        "
                                    />
                                </div>

                                <section className="flex min-h-0 flex-1 flex-col">
                                    <div className="mb-3">
                                        <p
                                            className="
                                                text-[8px]
                                                font-medium
                                                uppercase
                                                tracking-[0.28em]
                                                text-white/40
                                            "
                                        >
                                            Resources
                                        </p>
                                        <h3
                                            className="
                                                text-[18px]
                                                font-medium
                                                text-white/90
                                            "
                                        >
                                            Free Downloads
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2.5 overflow-y-auto pr-1">
                                        {resources.map((res) => {
                                            const Icon = res.icon;
                                            return (
                                                <button
                                                    key={res.id}
                                                    onClick={() => setSelectedResource(res)}
                                                    className="
                                                        group
                                                        text-left
                                                        rounded-xl
                                                        border
                                                        border-white/[0.05]
                                                        bg-white/[0.02]
                                                        p-3
                                                        transition-all
                                                        duration-300
                                                        hover:border-white/[0.12]
                                                        hover:bg-white/[0.05]
                                                    "
                                                >
                                                    <div className="flex items-start gap-2.5">
                                                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/70">
                                                            <Icon size={12} />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[12px] font-medium leading-snug text-white/90 group-hover:text-white">
                                                                {res.title}
                                                            </h4>
                                                            <div className="mt-2 flex items-center gap-1 text-[10px] text-purple-300/70">
                                                                <FaDownload size={9} />
                                                                <span>Get template</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </section>
                            </div>
                        </aside>
                    </>
                )}

                {/* =========================
                    DOWNLOAD MODAL POPUP
                ========================== */}
                {selectedResource && (
                    <div
                        className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                        onClick={() => setSelectedResource(null)}
                    >
                        <div
                            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#06040a] p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedResource(null)}
                                className="absolute right-4 top-4 text-white/50 hover:text-white"
                                aria-label="Close modal"
                            >
                                <FaTimes size={16} />
                            </button>

                            <h3 className="text-lg font-semibold text-white mb-2">
                                {selectedResource.title}
                            </h3>
                            <p className="text-xs text-white/70 leading-relaxed mb-6">
                                {selectedResource.popupDescription}
                            </p>

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setSelectedResource(null)}
                                    className="rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-white/70 hover:bg-white/5 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-purple-500"
                                >
                                    Continue to Resource
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        </div>,
        document.body
    );
}