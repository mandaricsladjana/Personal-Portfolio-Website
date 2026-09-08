import { useEffect, useRef, useState } from "react";
import {
    FaThLarge,
    FaBullhorn,
    FaDownload,
    FaTimes,
    FaArrowRight,
} from "react-icons/fa";

const resources = [
    {
        id: "visual-planning",
        title: "Notion Template for Easy KPI Visuals Planning",
        popupDescription:
            "Download my KPI Planning Visuals pattern — a Notion-based visual system designed to help organize KPIs, dashboard ideas, goals and reporting workflows in one clear place.",
        link: "https://sheer-toy-588.notion.site/Data-Analytics-Planner-375108b3e7c580dca8d3fc2046c9de68?source=copy_link",
        icon: FaThLarge,
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
    },
];

export function Resources() {
    const [isOpen, setIsOpen] = useState(false);
    const [showRibbon, setShowRibbon] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const hasTriggeredRibbon = useRef(false);

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

    const handleDownload = () => {
        if (!selectedResource) return;

        window.open(
            selectedResource.link,
            "_blank",
            "noopener,noreferrer"
        );

        setSelectedResource(null);
    };

    return (
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
                            bg-primary-dark
                            text-white/70
                            shadow-[8px_0_30px_rgba(60,20,100,0.25)]
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
                        className="
                            fixed
                            left-0
                            top-0
                            z-40
                            hidden
                            h-screen
                            w-[280px]
                            overflow-hidden
                            border-r
                            border-white/15
                            bg-primary-dark
                            shadow-[12px_0_50px_rgba(60,20,100,0.28)]
                            backdrop-blur-2xl
                            transition-all
                            duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            md:block
                        "
                        style={{
                            transform: isOpen
                                ? "translateX(0)"
                                : "translateX(-100%)",
                            opacity: isOpen ? 1 : 0,
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        {/* LUXURY BACKGROUND DETAILS */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-primary-dark
                                    via-primary-dark
                                    to-primary
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -left-24
                                    -top-28
                                    h-80
                                    w-80
                                    rounded-full
                                    bg-violet-300/10
                                    blur-[90px]
                                "
                            />

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-[28%]
                                    h-72
                                    w-72
                                    -translate-x-1/2
                                    rounded-full
                                    bg-purple-300/5
                                    blur-[100px]
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -bottom-28
                                    -right-28
                                    h-96
                                    w-96
                                    rounded-full
                                    bg-primary/35
                                    blur-[100px]
                                "
                            />

                            <div
                                className="
                                    absolute
                                    right-[-45px]
                                    top-[42%]
                                    h-36
                                    w-36
                                    rounded-full
                                    bg-white/[0.035]
                                    blur-[55px]
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-[0.035]
                                "
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                }}
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-[0.025]
                                "
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(135deg, transparent 0px, transparent 18px, rgba(255,255,255,0.8) 19px, transparent 20px)",
                                }}
                            />

                            <div
                                className="
                                    absolute
                                    left-0
                                    right-0
                                    top-0
                                    h-px
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/25
                                    to-transparent
                                "
                            />

                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-px
                                    bg-gradient-to-b
                                    from-transparent
                                    via-white/30
                                    to-transparent
                                "
                            />

                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    h-full
                                    w-16
                                    bg-gradient-to-l
                                    from-black/15
                                    to-transparent
                                "
                            />

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    right-0
                                    h-40
                                    bg-gradient-to-t
                                    from-primary-dark/60
                                    to-transparent
                                "
                            />
                        </div>

                        <div className="relative flex h-full flex-col px-5 pb-4 pt-26">

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="
                                    absolute
                                    right-4
                                    top-25
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

                                <div className="mt-3 flex items-center gap-3">
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
                                            shadow-[0_8px_25px_rgba(40,20,70,0.20)]
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
                                            Building a Fully Functional Webshop
                                        </p>

                                        <div
                                            className="
                                                mt-1.5
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
                                                text-primary-dark
                                                shadow-[0_6px_20px_rgba(255,255,255,0.18)]
                                            "
                                        >
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* DIVIDER */}
                            <div className="my-5 flex items-center gap-3">
                                <div
                                    className="
                                        h-px
                                        flex-1
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/30
                                        to-white/10
                                    "
                                />

                                <div
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-white/40
                                        shadow-[0_0_8px_rgba(255,255,255,0.4)]
                                    "
                                />

                                <div
                                    className="
                                        h-px
                                        flex-1
                                        bg-gradient-to-l
                                        from-transparent
                                        via-white/30
                                        to-white/10
                                    "
                                />
                            </div>

                            {/* =========================
                                FREE DOWNLOADS HEADER
                            ========================== */}
                            <section>
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
                                    >
                                    </p>
                                </div>

                                {/* =========================
                                    KPI PLANNING VISUALS
                                ========================== */}
                                <button
                                    onClick={() =>
                                        setSelectedResource(resources[0])
                                    }
                                    className="
                                        group
                                        mb-2
                                        block
                                        w-full
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/15
                                        bg-white/[0.08]
                                        text-left
                                        shadow-[0_12px_30px_rgba(30,10,60,0.18)]
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-white/25
                                        hover:bg-white/[0.13]
                                        hover:shadow-[0_18px_38px_rgba(30,10,60,0.28)]
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
                                                Notion Template for Easy KPI Visuals Planning
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
                                                    group-hover:text-white
                                                "
                                            />
                                        </div>

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
                                                Power BI
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
                                                DAX
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
                                                Charts
                                            </span>
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
                                            bg-white/[0.05]
                                            px-3
                                            py-2
                                            transition-all
                                            duration-300
                                            group-hover:bg-white/[0.10]
                                        "
                                    >
                                        <span
                                            className="
                                                text-[9px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.14em]
                                                text-white/80
                                            "
                                        >
                                            Download My Free Pattern
                                        </span>

                                        <FaDownload
                                            size={13}
                                            className="
                                                text-white/70
                                                transition-transform
                                                duration-300
                                                group-hover:translate-y-0.5
                                            "
                                        />
                                    </div>

                                </button>

                                {/* =========================
                                    ADS TRACKING PATTERN
                                ========================== */}
                                <button
                                    onClick={() =>
                                        setSelectedResource(resources[1])
                                    }
                                    className="
                                        group
                                        block
                                        w-full
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/15
                                        bg-white/[0.08]
                                        text-left
                                        shadow-[0_12px_30px_rgba(30,10,60,0.18)]
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-white/25
                                        hover:bg-white/[0.13]
                                        hover:shadow-[0_18px_38px_rgba(30,10,60,0.28)]
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
                                               Notion Ads & Campaign Tracking Template
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
                                                    group-hover:text-white
                                                "
                                            />
                                        </div>

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
                                                LinkedIn
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
                                                Meta
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
                                                Google Ads
                                            </span>
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
                                            bg-white/[0.05]
                                            px-3
                                            py-2
                                            transition-all
                                            duration-300
                                            group-hover:bg-white/[0.10]
                                        "
                                    >
                                        <span
                                            className="
                                                text-[9px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.14em]
                                                text-white/80
                                            "
                                        >
                                            Download Free Pattern
                                        </span>

                                        <FaDownload
                                            size={13}
                                            className="
                                                text-white/70
                                                transition-transform
                                                duration-300
                                                group-hover:translate-y-0.5
                                            "
                                        />
                                    </div>

                                </button>

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
                            "resourcePopup 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    }}
                >

                    {/* POPUP HEADER */}
                    <div
                        className="
                            relative
                            bg-gradient-to-br
                            from-primary-dark
                            via-primary
                            to-primary/80
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
                                <selectedResource.icon size={17} />
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
                                    bg-primary-dark
                                    px-4
                                    py-3
                                    text-[11px]
                                    font-semibold
                                    text-white
                                    shadow-[0_8px_20px_rgba(90,50,130,0.20)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_12px_25px_rgba(90,50,130,0.25)]
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
                                translateX(40px)
                                translateY(20px)
                                scale(0.96);
                            filter: blur(5px);
                        }

                        60% {
                            opacity: 0.9;
                            filter: blur(1px);
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
    );
}