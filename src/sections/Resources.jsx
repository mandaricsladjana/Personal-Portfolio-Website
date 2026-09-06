import { useEffect, useState } from "react";
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
        title: "KPI Planning Visuals",
        subtitle: "Notion Pattern",
        description:
            "A visual planning system for organizing KPIs, dashboards, goals and reporting workflows in Notion.",
        popupDescription:
            "Download my KPI Planning Visuals pattern — a Notion-based visual system designed to help organize KPIs, dashboard ideas, goals and reporting workflows in one clear place.",
        icon: FaThLarge,
        link: "PASTE_YOUR_VISUAL_PLANNING_NOTION_LINK_HERE",
    },
    {
        id: "ads-tracking",
        title: "Ads Tracking Pattern",
        subtitle: "Notion Pattern",
        description:
            "A practical Notion system for organizing campaigns, advertising activities and performance tracking.",
        popupDescription:
            "Download my Ads Tracking pattern — a practical Notion system for organizing advertising activities, campaigns, performance and results.",
        icon: FaBullhorn,
        link: "PASTE_YOUR_ADS_TRACKING_NOTION_LINK_HERE",
    },
];

export function Resources() {
    const [isOpen, setIsOpen] = useState(true);
    const [showRibbon, setShowRibbon] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

    useEffect(() => {
        const aboutSection = document.getElementById("about");

        if (!aboutSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowRibbon(true);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(aboutSection);

        return () => observer.disconnect();
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
            {showRibbon && isOpen && (
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
                        bg-primary-dark/90
                        shadow-[12px_0_50px_rgba(60,20,100,0.28)]
                        backdrop-blur-2xl
                        md:block
                    "
                    style={{
                        animation:
                            "ribbonReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    }}
                >
                    {/* LUXURY BACKGROUND DETAILS */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">

                        <div
                            className="
                                absolute
                                -left-20
                                -top-20
                                h-64
                                w-64
                                rounded-full
                                bg-white/10
                                blur-3xl
                            "
                        />

                        <div
                            className="
                                absolute
                                -bottom-24
                                -right-24
                                h-72
                                w-72
                                rounded-full
                                bg-primary/30
                                blur-3xl
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

                    </div>


                    <div className="relative flex h-full flex-col px-5 pb-6 pt-28">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                                absolute
                                right-4
                                top-24
                                z-10
                                flex
                                h-9
                                w-9
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
                            <FaTimes size={12} />
                        </button>


                        {/* =========================
                            CURRENTLY WORKING ON
                        ========================== */}
                        <section>

                            <div className="mb-5 flex items-center gap-2">

                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-white
                                        shadow-[0_0_12px_rgba(255,255,255,0.9)]
                                    "
                                />

                                <p
                                    className="
                                        text-[9px]
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
                                    text-[25px]
                                    font-semibold
                                    leading-[1.08]
                                    tracking-[-0.02em]
                                    text-white
                                "
                            >
                                What am I currently working on?
                            </h3>


                            <div className="mt-5 flex items-center gap-3">

                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
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
                                    <FaArrowRight size={13} />
                                </div>


                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.16em]
                                            text-white
                                        "
                                    >
                                        Creating a Fully Functioning Web Workshop
                                    </p>

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
                        <div
                            className="
                                my-7
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-white/20
                                to-transparent
                            "
                        />


                        {/* =========================
                            FREE DOWNLOADS HEADER
                        ========================== */}
                        <section>

                            <div className="mb-4">

                                <p
                                    className="
                                        text-[9px]
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
                                            text-[22px]
                                            font-semibold
                                            leading-none
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        Free Downloads
                                    </h3>

                                </div>


                                <p
                                    className="
                                        mt-2
                                        max-w-[225px]
                                        text-[10px]
                                        leading-relaxed
                                        text-white/50
                                    "
                                >
                                    Free Notion systems designed to make
                                    planning, tracking and reporting easier.
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
                                    mb-3
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
                                <div className="p-4">

                                    <div className="flex items-start justify-between">

                                        <div
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-white/15
                                                bg-white/10
                                                text-white
                                                transition-all
                                                duration-300
                                                group-hover:bg-white/15
                                            "
                                        >
                                            <FaThLarge size={13} />
                                        </div>


                                        <FaArrowRight
                                            size={10}
                                            className="
                                                mt-1
                                                text-white/30
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:text-white
                                            "
                                        />

                                    </div>


                                    <h4
                                        className="
                                            mt-3
                                            text-[13px]
                                            font-semibold
                                            leading-snug
                                            text-white
                                        "
                                    >
                                        KPI Planning Visuals
                                    </h4>


                                    <p
                                        className="
                                            mt-1
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-wider
                                            text-white/40
                                        "
                                    >
                                        Notion Pattern
                                    </p>


                                    <p
                                        className="
                                            mt-3
                                            text-[10px]
                                            leading-relaxed
                                            text-white/65
                                        "
                                    >
                                        Visual planning for KPIs,
                                        dashboards and reporting workflows.
                                    </p>

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
                                        px-4
                                        py-2.5
                                        transition-all
                                        duration-300
                                        group-hover:bg-white/[0.10]
                                    "
                                >
                                    <span
                                        className="
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.16em]
                                            text-white/80
                                        "
                                    >
                                        Download Free Pattern
                                    </span>

                                    <FaDownload
                                        size={9}
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
                                <div className="p-4">

                                    <div className="flex items-start justify-between">

                                        <div
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-white/15
                                                bg-white/10
                                                text-white
                                                transition-all
                                                duration-300
                                                group-hover:bg-white/15
                                            "
                                        >
                                            <FaBullhorn size={13} />
                                        </div>


                                        <FaArrowRight
                                            size={10}
                                            className="
                                                mt-1
                                                text-white/30
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:text-white
                                            "
                                        />

                                    </div>


                                    <h4
                                        className="
                                            mt-3
                                            text-[13px]
                                            font-semibold
                                            leading-snug
                                            text-white
                                        "
                                    >
                                        Ads Tracking Pattern
                                    </h4>


                                    <p
                                        className="
                                            mt-1
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-wider
                                            text-white/40
                                        "
                                    >
                                        Notion Pattern
                                    </p>


                                    <p
                                        className="
                                            mt-3
                                            text-[10px]
                                            leading-relaxed
                                            text-white/65
                                        "
                                    >
                                        Organize campaigns, advertising
                                        activities and performance.
                                    </p>

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
                                        px-4
                                        py-2.5
                                        transition-all
                                        duration-300
                                        group-hover:bg-white/[0.10]
                                    "
                                >
                                    <span
                                        className="
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.16em]
                                            text-white/80
                                        "
                                    >
                                        Download Free Pattern
                                    </span>

                                    <FaDownload
                                        size={9}
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


                        {/* =========================
                            LOOK AT MY PROJECTS
                        ========================== */}
                        <div className="mt-auto pt-6">

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/15
                                    bg-white/[0.07]
                                    p-4
                                    shadow-[0_15px_35px_rgba(30,10,60,0.20)]
                                "
                            >

                                <div
                                    className="
                                        absolute
                                        -right-8
                                        -top-8
                                        h-24
                                        w-24
                                        rounded-full
                                        bg-white/10
                                        blur-2xl
                                    "
                                />

                                <p
                                    className="
                                        relative
                                        text-[8px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.24em]
                                        text-white/45
                                    "
                                >
                                    Portfolio
                                </p>


                                <h4
                                    className="
                                        relative
                                        mt-1.5
                                        text-[16px]
                                        font-semibold
                                        tracking-tight
                                        text-white
                                    "
                                >
                                    Look at my projects
                                </h4>


                                <button
                                    className="
                                        relative
                                        mt-3
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-white/15
                                        bg-white/10
                                        px-3
                                        py-2.5
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.12em]
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-white/15
                                    "
                                >
                                    View Projects

                                    <FaArrowRight
                                        size={9}
                                        className="text-white/70"
                                    />
                                </button>

                            </div>

                        </div>

                    </div>
                </aside>
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
                    @keyframes ribbonReveal {
                        0% {
                            opacity: 0;
                            transform: translateX(-70px);
                            filter: blur(10px);
                        }

                        35% {
                            opacity: 0.35;
                            filter: blur(6px);
                        }

                        65% {
                            opacity: 0.8;
                            filter: blur(2px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateX(0);
                            filter: blur(0);
                        }
                    }

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
                `}
            </style>
        </>
    );
}