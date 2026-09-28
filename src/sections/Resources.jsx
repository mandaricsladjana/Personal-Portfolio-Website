import { useEffect, useRef, useState } from "react";
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
        link: "#",
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
        const handleScroll = () => {
            if (
                window.scrollY > window.innerHeight * 0.15 &&
                !hasTriggeredRibbon.current
            ) {
                hasTriggeredRibbon.current = true;
                setShowRibbon(true);
                setIsOpen(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Reset the entire Resources UI whenever the user changes route.
    // This prevents the ribbon from overlapping the fixed navbar on Home.
    useEffect(() => {
        setIsOpen(false);
        setSelectedResource(null);
        setShowRibbon(false);
        hasTriggeredRibbon.current = false;
    }, [location.pathname]);

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

    return (
        <div style={{ zoom: "1" }}>
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
                                w-10
                                items-center
                                justify-center
                                rounded-r-2xl
                                border
                                border-l-0
                                border-white/15
                                bg-[#08060d]
                                text-white/70
                                shadow-[8px_0_30px_rgba(20,10,30,0.45)]
                                backdrop-blur-xl
                                transition-all
                                duration-700
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                hover:w-12
                                hover:text-white
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
                                    font-semibold
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
                                border-white/10
                                bg-[#05030a]
                                shadow-[12px_0_50px_rgba(20,10,30,0.45)]
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
                            {/* =====================================================
                                DARK TECHNICAL BACKGROUND
                            ====================================================== */}

                            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                {/* Base background */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-[#05030a]
                                        via-[#08060d]
                                        to-[#0b0712]
                                    "
                                />

                                {/* Purple glow — top left */}
                                <div
                                    className="
                                        absolute
                                        -left-[45%]
                                        -top-[18%]
                                        h-[520px]
                                        w-[520px]
                                        rounded-full
                                        bg-purple-700/20
                                        blur-[140px]
                                    "
                                />

                                {/* Purple glow — right */}
                                <div
                                    className="
                                        absolute
                                        -right-[35%]
                                        top-[8%]
                                        h-[480px]
                                        w-[480px]
                                        rounded-full
                                        bg-fuchsia-600/10
                                        blur-[150px]
                                    "
                                />

                                {/* Violet glow — bottom */}
                                <div
                                    className="
                                        absolute
                                        -bottom-[25%]
                                        left-[25%]
                                        h-[450px]
                                        w-[450px]
                                        rounded-full
                                        bg-violet-700/10
                                        blur-[140px]
                                    "
                                />

                                {/* Subtle purple center glow */}
                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-[38%]
                                        h-[280px]
                                        w-[280px]
                                        -translate-x-1/2
                                        rounded-full
                                        bg-purple-600/[0.035]
                                        blur-[100px]
                                    "
                                />

                                {/* Technical grid */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        opacity-[0.08]
                                    "
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(168,85,247,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.45) 1px, transparent 1px)",
                                        backgroundSize: "55px 55px",
                                    }}
                                />

                                {/* Secondary diagonal technical texture */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        opacity-[0.025]
                                    "
                                    style={{
                                        backgroundImage:
                                            "repeating-linear-gradient(135deg, transparent 0px, transparent 18px, rgba(168,85,247,0.8) 19px, transparent 20px)",
                                    }}
                                />

                                {/* Decorative circles */}
                                <div
                                    className="
                                        absolute
                                        -right-24
                                        top-[20%]
                                        h-48
                                        w-48
                                        rounded-full
                                        border
                                        border-purple-400/10
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        -right-12
                                        top-[25%]
                                        h-32
                                        w-32
                                        rounded-full
                                        border
                                        border-purple-400/10
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        right-[20%]
                                        top-[30%]
                                        h-16
                                        w-16
                                        rounded-full
                                        bg-purple-500/[0.08]
                                        blur-xl
                                    "
                                />

                                {/* Top edge glow */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        top-0
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-purple-400/30
                                        to-transparent
                                    "
                                />

                                {/* Left edge glow */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-px
                                        bg-gradient-to-b
                                        from-transparent
                                        via-purple-400/20
                                        to-transparent
                                    "
                                />

                                {/* Right shadow */}
                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-0
                                        h-full
                                        w-16
                                        bg-gradient-to-l
                                        from-black/30
                                        to-transparent
                                    "
                                />

                                {/* Bottom fade */}
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        h-40
                                        bg-gradient-to-t
                                        from-[#05030a]/90
                                        to-transparent
                                    "
                                />
                            </div>

                            <div className="relative flex h-full flex-col px-5 pb-4 pt-5">
                                {/* CLOSE BUTTON */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        absolute
                                        right-4
                                        top-5
                                        z-10
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/15
                                        bg-white/10
                                        text-white/60
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:scale-105
                                        hover:bg-white/20
                                        hover:text-white
                                    "
                                    aria-label="Close resources ribbon"
                                >
                                    <FaTimes size={11} />
                                </button>

                                {/* =========================
                                    CURRENTLY WORKING ON
                                ========================== */}
                                <section>
                                    <div className="mb-3 flex items-center gap-2">
                                        <span
                                            className="
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-white
                                                shadow-[0_0_12px_rgba(255,255,255,0.9)]
                                                animate-[pulseWhite_2s_ease-in-out_infinite]
                                            "
                                        />

                                        <p
                                            className="
                                                text-[8px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.28em]
                                                text-white/55
                                            "
                                        >
                                            Currently
                                        </p>
                                    </div>

                                    <h3
                                        className="
                                            max-w-[220px]
                                            text-[22px]
                                            font-semibold
                                            leading-[1.08]
                                            tracking-[-0.02em]
                                            text-white
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
                                            hover:-translate-y-1
                                            hover:border-white/15
                                            hover:bg-white/[0.06]
                                            hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)]
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
                                                border-white/15
                                                bg-white/10
                                                text-white
                                                shadow-[0_8px_25px_rgba(20,10,30,0.30)]
                                            "
                                        >
                                            <FaArrowRight size={12} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[11px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.12em]
                                                    text-white
                                                    animate-[projectPulse_3s_ease-in-out_infinite]
                                                "
                                            >
                                                Building a Fully Functional Boutique Webshop
                                            </p>

                                            {/* PROJECT TAGS */}
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/15
                                                        bg-white/10
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-medium
                                                        uppercase
                                                        tracking-wider
                                                        text-white/65
                                                    "
                                                >
                                                    UI/UX Design
                                                </span>

                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/15
                                                        bg-white/10
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-medium
                                                        uppercase
                                                        tracking-wider
                                                        text-white/65
                                                    "
                                                >
                                                    SEO
                                                </span>

                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/15
                                                        bg-white/10
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-medium
                                                        uppercase
                                                        tracking-wider
                                                        text-white/65
                                                    "
                                                >
                                                    GA4
                                                </span>

                                                <span
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/15
                                                        bg-white/10
                                                        px-2
                                                        py-0.5
                                                        text-[7px]
                                                        font-medium
                                                        uppercase
                                                        tracking-wider
                                                        text-white/65
                                                    "
                                                >
                                                    Web Development
                                                </span>
                                            </div>

                                            {/* COMING SOON */}
                                            <div
                                                className="
                                                    mt-2
                                                    inline-flex
                                                    items-center
                                                    rounded-full
                                                    border
                                                    border-white
                                                    bg-white
                                                    px-4
                                                    py-1.5
                                                    text-[10px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.12em]
                                                    text-[#08060d]
                                                    shadow-[0_6px_20px_rgba(255,255,255,0.18)]
                                                "
                                            >
                                                Coming Soon
                                            </div>
                                        </div>
                                    </Link>
                                </section>

                                {/* DIVIDER */}
                                <div className="my-5 flex items-center gap-3">
                                    <div
                                        className="
                                            h-px
                                            flex-1
                                            bg-gradient-to-r
                                            from-transparent
                                            via-purple-400/25
                                            to-white/10
                                        "
                                    />

                                    <div
                                        className="
                                            h-1
                                            w-1
                                            rounded-full
                                            bg-purple-300/60
                                            shadow-[0_0_8px_rgba(168,85,247,0.5)]
                                        "
                                    />

                                    <div
                                        className="
                                            h-px
                                            flex-1
                                            bg-gradient-to-l
                                            from-transparent
                                            via-purple-400/25
                                            to-white/10
                                        "
                                    />
                                </div>

                                {/* =========================
                                    FREE DOWNLOADS HEADER
                                ========================== */}
                                <section className="flex min-h-0 flex-1 flex-col">
                                    <div className="mb-3">
                                        <p
                                            className="
                                                text-[8px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.28em]
                                                text-white/45
                                            "
                                        >
                                            Resources
                                        </p>

                                        <div className="mt-1 flex items-end justify-between">
                                            <h3
                                                className="
                                                    text-[20px]
                                                    font-semibold
                                                    leading-none
                                                    tracking-tight
                                                    text-white
                                                "
                                            >
                                                Use My Templates
                                            </h3>
                                        </div>

                                        <p
                                            className="
                                                mt-1.5
                                                max-w-[225px]
                                                text-[9px]
                                                leading-relaxed
                                                text-white/50
                                            "
                                        ></p>
                                    </div>

                                    {/* =========================
                                        VERTICAL TEMPLATE LIST
                                    ========================== */}
                                    <div
                                        className="
                                            min-h-0
                                            flex-1
                                            overflow-y-auto
                                            overflow-x-hidden
                                            pr-2
                                            scrollbar-thin
                                            scrollbar-track-white/5
                                            scrollbar-thumb-white/25
                                            hover:scrollbar-thumb-purple-300/40
                                        "
                                    >
                                        <div className="flex flex-col gap-2">
                                            {resources.map((resource) => (
                                                <button
                                                    key={resource.id}
                                                    onClick={() =>
                                                        setSelectedResource(resource)
                                                    }
                                                    className="
                                                        group
                                                        block
                                                        w-full
                                                        shrink-0
                                                        overflow-hidden
                                                        rounded-2xl
                                                        border
                                                        border-white/15
                                                        bg-white/[0.06]
                                                        text-left
                                                        shadow-[0_12px_30px_rgba(10,5,20,0.25)]
                                                        backdrop-blur-md
                                                        transition-all
                                                        duration-300
                                                        hover:-translate-y-1
                                                        hover:border-purple-400/25
                                                        hover:bg-purple-500/[0.06]
                                                        hover:shadow-[0_18px_38px_rgba(50,20,80,0.25)]
                                                    "
                                                >
                                                    <div className="p-3">
                                                        <div className="flex items-start justify-between">
                                                            <h4
                                                                className="
                                                                    text-[12px]
                                                                    font-semibold
                                                                    leading-snug
                                                                    text-white
                                                                "
                                                            >
                                                                {resource.title}
                                                            </h4>

                                                            <FaArrowRight
                                                                size={9}
                                                                className="
                                                                    ml-2
                                                                    mt-1
                                                                    shrink-0
                                                                    text-white/30
                                                                    transition-all
                                                                    duration-300
                                                                    group-hover:translate-x-1
                                                                    group-hover:text-purple-300
                                                                "
                                                            />
                                                        </div>

                                                        <div className="mt-2 flex flex-wrap gap-1">
                                                            {resource.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="
                                                                        rounded-full
                                                                        border
                                                                        border-white/15
                                                                        bg-white/10
                                                                        px-2
                                                                        py-0.5
                                                                        text-[7px]
                                                                        font-medium
                                                                        uppercase
                                                                        tracking-wider
                                                                        text-white/65
                                                                    "
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* DOWNLOAD AREA */}
                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            border-t
                                                            border-white/10
                                                            bg-white
                                                            px-3
                                                            py-2
                                                            transition-all
                                                            duration-300
                                                            group-hover:bg-[#e9e5ef]
                                                        "
                                                    >
                                                        <span
                                                            className="
                                                                flex-1
                                                                text-center
                                                                text-[9px]
                                                                font-semibold
                                                                uppercase
                                                                tracking-[0.14em]
                                                                text-[#111111]
                                                            "
                                                        >
                                                            Free Download
                                                        </span>

                                                        <FaDownload
                                                            size={13}
                                                            className="
                                                                text-[#111111]
                                                                transition-transform
                                                                duration-300
                                                                group-hover:translate-y-0.5
                                                            "
                                                        />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </aside>
                    </>
                )}

                {/* =========================
                    RESOURCE POPUP
                ========================== */}
                {selectedResource && (
                    <div
                        className="
                            fixed
                            bottom-6
                            right-6
                            z-[60]
                            w-[360px]
                            max-w-[calc(100vw-2rem)]
                            overflow-hidden
                            rounded-3xl
                            border
                            border-primary/10
                            bg-white
                            shadow-[0_25px_70px_rgba(60,30,100,0.20)]
                        "
                        style={{
                            animation:
                                "resourcePopup 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                        }}
                    >
                        {/* POPUP HEADER */}
                        <div
                            className="
                                relative
                                bg-gradient-to-br
                                from-[#05030a]
                                via-[#0b0712]
                                to-purple-950
                                px-5
                                py-5
                                text-white
                            "
                        >
                            <button
                                onClick={() => setSelectedResource(null)}
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/10
                                    text-white/70
                                    transition-all
                                    duration-300
                                    hover:bg-white/20
                                    hover:text-white
                                "
                                aria-label="Close"
                            >
                                <FaTimes size={11} />
                            </button>

                            <div className="flex items-center gap-3">
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-white/15
                                    "
                                >
                                    {(() => {
                                        const SelectedIcon = selectedResource.icon;
                                        return <SelectedIcon size={17} />;
                                    })()}
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-[0.18em]
                                            text-white/60
                                        "
                                    >
                                        Free Resource
                                    </p>

                                    <h3
                                        className="
                                            mt-1
                                            pr-8
                                            text-base
                                            font-semibold
                                        "
                                    >
                                        {selectedResource.title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* POPUP BODY */}
                        <div className="px-5 py-5">
                            <h4
                                className="
                                    text-base
                                    font-semibold
                                    leading-snug
                                    text-gray-900
                                "
                            >
                                Download my {selectedResource.title} pattern
                            </h4>

                            <div
                                className="
                                    mt-2
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-primary/10
                                    bg-primary/5
                                    px-3
                                    py-1
                                    text-[10px]
                                    font-medium
                                    text-primary-dark
                                "
                            >
                                Notion
                            </div>

                            <p
                                className="
                                    mt-4
                                    text-[12px]
                                    leading-relaxed
                                    text-gray-600
                                "
                            >
                                {selectedResource.popupDescription}
                            </p>

                            {/* NOTION INDICATOR */}
                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-gray-100
                                    bg-gray-50
                                    px-4
                                    py-3
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-white
                                        text-primary-dark
                                        shadow-sm
                                    "
                                >
                                    <FaDownload size={12} />
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-[11px]
                                            font-semibold
                                            text-gray-800
                                        "
                                    >
                                        Notion Pattern
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-[9px]
                                            text-gray-500
                                        "
                                    >
                                        Free to access
                                    </p>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() => setSelectedResource(null)}
                                    className="
                                        flex-1
                                        rounded-xl
                                        border
                                        border-gray-200
                                        px-4
                                        py-3
                                        text-[11px]
                                        font-semibold
                                        text-gray-600
                                        transition-all
                                        duration-300
                                        hover:border-gray-300
                                        hover:bg-gray-50
                                    "
                                >
                                    Maybe Later
                                </button>

                                <button
                                    onClick={handleDownload}
                                    className="
                                        flex
                                        flex-1
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white
                                        bg-white
                                        px-4
                                        py-3
                                        text-[11px]
                                        font-semibold
                                        text-primary-dark
                                        shadow-[0_6px_20px_rgba(255,255,255,0.18)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-[#C4B5FD]
                                        hover:shadow-[0_12px_25px_rgba(124,58,237,0.20)]
                                    "
                                >
                                    <FaDownload size={10} />
                                    Get Pattern
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* =========================
                    ANIMATIONS
                ========================== */}
                <style>
                    {`
                        @keyframes resourcePopup {
                            0% {
                                opacity: 0;
                                transform:
                                    translateX(28px)
                                    translateY(12px)
                                    scale(0.985);
                                filter: blur(2px);
                            }

                            45% {
                                opacity: 0.45;
                                transform:
                                    translateX(16px)
                                    translateY(7px)
                                    scale(0.99);
                                filter: blur(1px);
                            }

                            75% {
                                opacity: 0.8;
                                transform:
                                    translateX(6px)
                                    translateY(2px)
                                    scale(0.997);
                                filter: blur(0.4px);
                            }

                            100% {
                                opacity: 1;
                                transform:
                                    translateX(0)
                                    translateY(0)
                                    scale(1);
                                filter: blur(0);
                            }
                        }

                        @keyframes pulseWhite {
                            0%,
                            100% {
                                opacity: 0.45;
                                transform: scale(0.9);
                                box-shadow: 0 0 5px rgba(255,255,255,0.35);
                            }

                            50% {
                                opacity: 1;
                                transform: scale(1.35);
                                box-shadow:
                                    0 0 8px rgba(255,255,255,0.8),
                                    0 0 16px rgba(255,255,255,0.45);
                            }
                        }

                        @keyframes projectPulse {
                            0%,
                            100% {
                                opacity: 0.65;
                                text-shadow: 0 0 0 rgba(255,255,255,0);
                            }

                            50% {
                                opacity: 1;
                                text-shadow:
                                    0 0 8px rgba(255,255,255,0.45),
                                    0 0 16px rgba(255,255,255,0.2);
                            }
                        }
                    `}
                </style>
            </>
        </div>
    );
}