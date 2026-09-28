import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ArrowDown,
    ArrowUp,
    Code2,
    Database,
    BarChart3,
    Layers3,
    GitBranch,
    Globe2,
    Zap,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

import { projects } from "../projectdetailslist";

/*
|--------------------------------------------------------------------------
| PERSONAL PORTFOLIO PROJECT DETAIL PAGE
|--------------------------------------------------------------------------
|
| This is a SPECIAL renderer only for the Personal Portfolio project.
|
| Content comes from:
|     personalPortfolio.js
|
| This file controls:
|     - layout
|     - typography
|     - colors
|     - cards
|     - backgrounds
|     - section styling
|     - animations / hover effects
|
| It does NOT contain the project content itself.
|--------------------------------------------------------------------------
*/

const renderFormattedText = (text, dark = true) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={index}
                    className={
                        dark
                            ? "font-semibold text-white"
                            : "font-semibold text-purple-600"
                    }
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return part;
    });
};

const PersonalPortfolioDetails = ({ project, details }) => {
    const overview = details?.overview || {};
    const sections = details?.sections || [];

    const currentProjectIndex = projects.findIndex(
        (item) =>
            item.id === project?.id ||
            item.slug === project?.slug ||
            item.title === project?.title
    );

    const previousProject =
        currentProjectIndex >= 0 && projects.length > 1
            ? projects[
                  (currentProjectIndex - 1 + projects.length) %
                      projects.length
              ]
            : null;

    const nextProject =
        currentProjectIndex >= 0 && projects.length > 1
            ? projects[
                  (currentProjectIndex + 1) % projects.length
              ]
            : null;

    /*
    |--------------------------------------------------------------------------
    | SCROLL BUTTON
    |--------------------------------------------------------------------------
    */

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            setShowScrollTop(
                scrollPosition >= documentHeight - 20
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollButton = () => {
        if (showScrollTop) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollBy({
                top: window.innerHeight * 0.85,
                behavior: "smooth",
            });
        }
    };

    /*
    |--------------------------------------------------------------------------
    | WATERMARK BACKGROUND DETECTION
    |--------------------------------------------------------------------------
    |
    | The watermark stays fixed in the center of the viewport.
    | While scrolling, we detect what section is underneath its center point.
    |
    | dark   = transparent gray
    | light  = transparent purple
    | purple = transparent purple
    |--------------------------------------------------------------------------
    */

    const [watermarkTheme, setWatermarkTheme] = useState("dark");

    useEffect(() => {
        let ticking = false;

        const updateWatermarkTheme = () => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const element = document.elementFromPoint(
                centerX,
                centerY
            );

            const section = element?.closest(
                "[data-watermark-bg]"
            );

            const theme =
                section?.getAttribute("data-watermark-bg") || "dark";

            setWatermarkTheme(theme);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateWatermarkTheme);
                ticking = true;
            }
        };

        const handleResize = () => {
            updateWatermarkTheme();
        };

        updateWatermarkTheme();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isDarkWatermark = watermarkTheme === "dark";

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-[#05030a] text-white"
            style={{ zoom: 0.95 }}
        >
            {/* =========================================================
                FIXED WEB DEVELOPMENT WATERMARK
                Stays fixed while scrolling.
                Layer order:
                z-20 = section backgrounds
                z-30 = watermark
                z-40 = content
            ========================================================= */}

            <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
                <div className="relative flex h-[700px] w-[700px] items-center justify-center">

                    {/* =====================================================
                        GRAY WATERMARK
                        Visible on dark / black sections
                    ===================================================== */}

                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                            isDarkWatermark
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <div className="relative flex h-[700px] w-[700px] items-center justify-center rounded-full border-4 border-gray-300/[0.09]">
                            <div className="absolute inset-10 rounded-full border-2 border-gray-300/[0.07]" />
                            <div className="absolute inset-0 rounded-full bg-gray-300/[0.007] blur-3xl" />

                            <LaptopWatermark
                                className="relative h-[360px] w-[360px] text-gray-300/[0.10]"
                            />
                        </div>
                    </div>

                    {/* =====================================================
                        PURPLE WATERMARK
                        Visible on light / purple / other sections
                    ===================================================== */}

                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                            isDarkWatermark
                                ? "opacity-0"
                                : "opacity-100"
                        }`}
                    >
                        <div className="relative flex h-[700px] w-[700px] items-center justify-center rounded-full border-4 border-purple-600/[0.11]">
                            <div className="absolute inset-10 rounded-full border-2 border-purple-600/[0.07]" />
                            <div className="absolute inset-0 rounded-full bg-purple-600/[0.007] blur-3xl" />

                            <LaptopWatermark
                                className="relative h-[360px] w-[360px] text-purple-600/[0.13]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
                HERO
            ========================================================= */}

            <section
                data-watermark-bg="dark"
                className="relative z-20 min-h-[92vh] overflow-hidden border-b border-purple-500/10"
            >
                {/* Abstract glow */}

                <div className="absolute -left-[20%] top-[-25%] h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[150px]" />

                <div className="absolute -right-[15%] top-[5%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[160px]" />

                <div className="absolute bottom-[-20%] left-[35%] h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-[140px]" />

                {/* Technical grid */}

                <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Decorative circles */}

                <div className="absolute right-[12%] top-[22%] hidden h-48 w-48 rounded-full border border-purple-400/10 lg:block" />

                <div className="absolute right-[15%] top-[26%] hidden h-32 w-32 rounded-full border border-purple-400/10 lg:block" />

                <div className="absolute right-[18%] top-[30%] hidden h-16 w-16 rounded-full bg-purple-500/10 blur-xl lg:block" />

                <div className="relative z-40 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 py-15 sm:px-10 lg:px-16">

                    {/* Top bar */}

                    <div className="flex items-center justify-between"></div>

                    {/* Hero content */}

                    <div className="flex flex-1 items-center py-20">

                        <div className="w-full">

                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-12 bg-purple-500" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple-300">
                                    {overview.eyebrow || "Project Overview"}
                                </span>
                            </div>

                            <div className="relative max-w-6xl">

                                {/* Huge typography */}

                                <h1 className="text-[18vw] font-black leading-[0.72] tracking-[-0.08em] sm:text-[13vw] lg:text-[9rem]">

                                    <span className="block text-white">
                                        MY
                                    </span>

                                    <span className="relative block">

                                        <span className="relative z-10 text-white">
                                            FIRST
                                        </span>

                                        <span className="absolute left-[15%] top-[30%] h-[45%] w-[45%] rounded-full bg-purple-600/30 blur-[70px]" />

                                    </span>

                                    <span className="block bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
                                        PORTFOLIO
                                    </span>

                                </h1>

                                {/* Floating information card */}

                                <div className="absolute right-[2%] top-[20%] hidden w-60 rotate-3 border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl xl:block">

                                    <div className="flex items-center justify-between">

                                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                                            Project
                                        </span>

                                        <Sparkles
                                            size={15}
                                            className="text-purple-400"
                                        />

                                    </div>

                                    <div className="mt-8 text-3xl font-black">
                                        01
                                    </div>

                                    <div className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
                                        Personal Digital Platform
                                    </div>

                                    <div className="mt-8 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />

                                    <div className="mt-5 text-xs leading-6 text-white/45">
                                        Built as both a portfolio and an
                                        ongoing development experiment.
                                    </div>

                                </div>
                            </div>

                            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                                <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                                    {renderFormattedText(overview.text, true)}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <TechPill text="React" />
                                    <TechPill text="Vite" />
                                    <TechPill text="Tailwind" />
                                    <TechPill text="GitHub" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Bottom indicator */}

                    <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                        <span>Personal Portfolio Website</span>
                        <span>Explore Project ↓</span>
                    </div>

                </div>
            </section>

            {/* =========================================================
                CONTENT SECTIONS
            ========================================================= */}

            {sections.map((section, index) => {

                const sectionNumber = String(index + 1).padStart(2, "0");

                switch (section.type) {

                    case "text":
                        return (
                            <TextSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                                index={index}
                            />
                        );

                    case "code":
                        return (
                            <CodeSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "architecture":
                        return (
                            <ArchitectureSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "architecture1":
                        return (
                            <ArchitectureSection1
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "process":
                        return (
                            <ProcessSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "analytics":
                        return (
                            <AnalyticsSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "quote":
                        return (
                            <QuoteSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "results":
                        return (
                            <ResultsSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    default:
                        return null;
                }
            })}

            {/* =========================================================
                FINAL PROJECT FOOTER
            ========================================================= */}

            <section
                data-watermark-bg="dark"
                className="relative z-20 overflow-hidden border-t border-purple-500/10 bg-[#040208] px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
            >

                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[150px]" />

                <div className="relative z-40 mx-auto max-w-5xl text-center">

                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                        Continuous Development
                    </span>

                    <h2 className="mt-8 text-6xl font-black leading-[0.85] tracking-[-0.055em] sm:text-7xl lg:text-[8.5rem] xl:text-[9rem]">
                        STILL IN
                        <br />

                        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                            THE MAKING.
                        </span>
                    </h2>

                    <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40">
                        This project continues to evolve as new projects,
                        technologies, experiments and ideas become part of
                        the portfolio.
                    </p>

                    <div className="mt-12 grid w-full gap-4 md:grid-cols-2">

                        {/* ================= PREVIOUS PROJECT ================= */}

                        {previousProject ? (

                            <Link
                                to={`/projects/${previousProject.id}`}
                                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.055]"
                            >

                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-purple-300">

                                    <ArrowLeft size={13} />

                                    Previous Project

                                </div>

                                <h3 className="mt-3 text-lg font-black text-white transition-colors duration-300 group-hover:text-purple-300">
                                    {previousProject.title}
                                </h3>

                                {previousProject.subtitle && (
                                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-white/45">
                                        {previousProject.subtitle}
                                    </p>
                                )}

                            </Link>

                        ) : (

                            <div />

                        )}

                        {/* ================= NEXT PROJECT ================= */}

                        {nextProject ? (

                            <Link
                                to={`/projects/${nextProject.id}`}
                                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 text-right transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.055]"
                            >

                                <div className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-purple-300">

                                    Next Project

                                    <ArrowRight size={13} />

                                </div>

                                <h3 className="mt-3 text-lg font-black text-white transition-colors duration-300 group-hover:text-purple-300">
                                    {nextProject.title}
                                </h3>

                                {nextProject.subtitle && (
                                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-white/45">
                                        {nextProject.subtitle}
                                    </p>
                                )}

                            </Link>

                        ) : (

                            <div />

                        )}

                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <Link
                            to="/pages"
                            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-purple-200"
                        >
                            View All Projects

                            <ArrowUpRight
                                size={14}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition hover:border-purple-400 hover:text-white"
                        >
                            Back Home

                            <ArrowRight size={14} />
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= COMBINED SCROLL BUTTON ================= */}

            <button
                type="button"
                onClick={handleScrollButton}
                aria-label={
                    showScrollTop
                        ? "Scroll to top"
                        : "Scroll down"
                }
                className="fixed bottom-8 left-1/2 z-[100] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-purple-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-purple-400 hover:bg-purple-600 hover:text-white"
            >

                {showScrollTop ? (
                    <ArrowUp size={20} />
                ) : (
                    <ArrowDown size={20} />
                )}

            </button>

        </main>
    );
};

/* =========================================================================
   LAPTOP WATERMARK
============================================================================= */

const LaptopWatermark = ({ className = "" }) => (

    <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >

        {/* Laptop screen */}

        <rect
            x="106"
            y="78"
            width="300"
            height="218"
            rx="12"
            stroke="currentColor"
            strokeWidth="8"
        />

        {/* Screen inner frame */}

        <rect
            x="123"
            y="95"
            width="266"
            height="184"
            rx="5"
            stroke="currentColor"
            strokeWidth="4"
        />

        {/* Screen glow / content line */}

        <path
            d="M160 145H352"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />

        <path
            d="M160 173H310"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />

        <path
            d="M160 201H335"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />

        {/* Camera */}

        <circle
            cx="256"
            cy="88"
            r="2.5"
            fill="currentColor"
        />

        {/* Laptop base */}

        <path
            d="M82 322
               C87 309 98 301 112 301
               H400
               C414 301 425 309 430 322
               L449 365
               C453 374 446 383 436 383
               H76
               C66 383 59 374 63 365
               L82 322Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinejoin="round"
        />

        {/* Keyboard surface */}

        <path
            d="M112 320H400"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />

        {/* Keyboard details */}

        <path
            d="M137 335H375"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
        />

        <path
            d="M130 348H382"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
        />

        {/* Trackpad */}

        <rect
            x="214"
            y="331"
            width="84"
            height="31"
            rx="5"
            stroke="currentColor"
            strokeWidth="4"
        />

        {/* Front edge */}

        <path
            d="M65 383H447"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
        />

        {/* Small center hinge */}

        <path
            d="M235 301H277"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />

    </svg>
);

/* =========================================================================
   TEXT SECTION
============================================================================= */

const TextSection = ({ section, number, index }) => {

    const dark =
        section.theme
            ? section.theme === "dark"
            : index % 2 === 0;

    return (

        <section
            data-watermark-bg={dark ? "dark" : "light"}
            className={`relative z-20 overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-40 ${
                dark
                    ? "bg-[#08060d] text-white"
                    : "bg-[#f4f1f8] text-black"
            }`}
        >

            {dark && (
                <>

                    <div className="absolute -right-32 top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[130px]" />

                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
                            backgroundSize: "100px 100px",
                        }}
                    />

                </>
            )}

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

                    <div>

                        <div className="flex items-center gap-3">

                            <span
                                className={`text-[10px] font-bold tracking-[0.3em] ${
                                    dark
                                        ? "text-purple-400"
                                        : "text-purple-600"
                                }`}
                            >
                                {number}
                            </span>

                            <span
                                className={`h-px w-10 ${
                                    dark
                                        ? "bg-purple-500/50"
                                        : "bg-purple-600/40"
                                }`}
                            />

                        </div>

                        <div
                            className={`mt-4 text-[10px] uppercase tracking-[0.3em] ${
                                dark
                                    ? "text-white/30"
                                    : "text-black/35"
                            }`}
                        >
                            {section.eyebrow}
                        </div>

                    </div>

                    <div>

                        {section.title && (
                            <h2
                                className={`max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl ${
                                    dark
                                        ? "text-white"
                                        : "text-black"
                                }`}
                            >
                                {section.title}
                            </h2>
                        )}

                        {section.text && (
                            <p
                                className={`mt-10 max-w-3xl text-base leading-8 sm:text-lg ${
                                    dark
                                        ? "text-white/45"
                                        : "text-black/50"
                                }`}
                            >
                                {renderFormattedText(section.text, dark)}
                            </p>
                        )}

                        {section.text2 && (
                            <p
                                className={`mt-6 max-w-3xl text-base leading-8 sm:text-lg ${
                                    dark
                                        ? "text-white/45"
                                        : "text-black/50"
                                }`}
                            >
                                {renderFormattedText(section.text2, dark)}
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   ARCHITECTURE
============================================================================= */

const ArchitectureSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="dark"
            className="relative z-20 overflow-hidden bg-[#05030a] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            {/* Background glow */}

            <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-[140px]" />

            <div className="absolute left-[-15%] bottom-[-20%] h-[450px] w-[450px] rounded-full bg-violet-700/10 blur-[140px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                {/* HEADER */}

                <div className="grid gap-16">

                    {/* TEXT + LARGE IMAGE */}

                    <div className="grid gap-12 lg:grid-cols-[0.5fr_1.2fr]">

                        {/* TEXT */}

                        <div>

                            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-400">
                                <span>{number}</span>
                                <span className="h-px w-10 bg-purple-500/50" />
                                <span>{section.eyebrow}</span>
                            </div>

                            <h2 className="mt-8 max-w-lg text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                                {section.title}
                            </h2>
{section.text && (
    <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
        {renderFormattedText(section.text, true)}
    </p>
)}
                

                        </div>

                        {/* LARGE IMAGE */}

                        {section.image && (
                            <div className="relative min-h-[420px] w-full lg:min-h-[560px]">

                                <div className="absolute inset-0 overflow-hidden rounded-3xl border border-none bg-[#08060d] shadow-[0_0_60px_rgba(124,58,237,0.08)]">

                                    <img
                                        src={section.image}
                                        alt={section.imageAlt || section.title}
                                        className="h-full w-full scale-[1.0] object-contain"
                                    />

                                </div>

                            </div>
                        )}

                    </div>

                    {/* ARCHITECTURE CARDS */}

                    <div className="relative">

                        {/* Connecting vertical line */}

                        <div className="absolute left-[27px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent sm:block" />

                        <div className="space-y-4">

                            {section.items?.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/[0.025]
                                        p-6
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-purple-500/40
                                        hover:bg-purple-500/[0.045]
                                    "
                                >

                                    {/* Hover glow */}

                                    <div
                                        className="
                                            absolute
                                            -right-16
                                            -top-16
                                            h-40
                                            w-40
                                            rounded-full
                                            bg-purple-600/10
                                            blur-3xl
                                            opacity-0
                                            transition-all
                                            duration-500
                                            group-hover:opacity-100
                                        "
                                    />

                                    <div className="relative flex gap-5">

                                        {/* Number */}

                                        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-[#0b0712] shadow-[0_0_25px_rgba(124,58,237,0.12)]">

                                            <span className="text-xs font-bold tracking-[0.15em] text-purple-400">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                        </div>

                                        {/* Content */}

                                        <div className="min-w-0 flex-1">

                                            <div className="flex items-start justify-between gap-4">

                                                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-xl">
                                                    {item.title}
                                                </h3>

                                                <ArrowUpRight
                                                    size={17}
                                                    className="
                                                        shrink-0
                                                        text-white/20
                                                        transition-all
                                                        duration-300
                                                        group-hover:-translate-y-1
                                                        group-hover:translate-x-1
                                                        group-hover:text-purple-400
                                                    "
                                                />

                                            </div>

                                            <p className="mt-3 max-w-xl text-sm leading-7 text-white/40">
                                                {item.text}
                                            </p>

                                            {/* Interaction indicator */}

                                            <div className="mt-5 flex items-center gap-2">

                                                <span
                                                    className="
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
                                                        bg-purple-500
                                                        transition-all
                                                        duration-300
                                                        group-hover:scale-150
                                                        group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]
                                                    "
                                                />

                                                <span className="text-[9px] uppercase tracking-[0.25em] text-white/25 transition-colors duration-300 group-hover:text-purple-300/60">
                                                    Interaction Logic
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* BOTTOM VISUAL STATEMENT */}

                <div className="mt-16 border-t border-white/10 pt-8">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                            Design System / Interaction Layer
                        </span>

                        <div className="flex items-center gap-3">

                            <span className="h-px w-8 bg-purple-500/40" />

                            <span className="text-[9px] uppercase tracking-[0.25em] text-purple-400/60">
                                Every effect has a purpose
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   PROCESS
============================================================================= */

const ProcessSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="light"
            className="relative z-20 overflow-hidden bg-[#f1edf5] px-6 py-28 text-black sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>

                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-600">

                            <span>{number}</span>

                            <span className="h-px w-10 bg-purple-600/40" />

                            <span>{section.eyebrow}</span>

                        </div>

                        <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title}
                        </h2>

                    </div>

                    <div className="space-y-0">

                        {section.steps?.map((step, index) => (

                            <div
                                key={index}
                                className="group flex gap-6 border-t border-black/10 py-7 transition hover:bg-purple-100/40"
                            >

                                <div className="w-12 shrink-0 text-xs font-bold tracking-[0.2em] text-purple-600">
                                    {step.number}
                                </div>

                                <div className="flex-1">

                                    <div className="flex items-center justify-between gap-5">

                                        <h3 className="text-xl font-black">
                                            {step.title}
                                        </h3>

                                        <ArrowUpRight
                                            size={17}
                                            className="text-black/20 transition group-hover:text-purple-600"
                                        />

                                    </div>

                                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/45">
                                        {step.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   ANALYTICS
============================================================================= */

const AnalyticsSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="purple"
            className="relative z-20 overflow-hidden bg-purple-700 px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-fuchsia-400/20 blur-[130px]" />

            <div className="absolute bottom-[-20%] left-[10%] h-[400px] w-[400px] rounded-full bg-black/20 blur-[120px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>

                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60">

                            <span>{number}</span>

                            <span className="h-px w-10 bg-white/30" />

                            <span>{section.eyebrow}</span>

                        </div>

                        <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title}
                        </h2>

{section.text && (
    <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
        {renderFormattedText(section.text, true)}
    </p>
)}
                        

                    </div>

                    <div className="relative">

                        {/* Connecting line */}

                        <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-white/20 sm:block" />

                        <div className="space-y-4">

                            <AnalyticsItem
                                number="01"
                                icon={Globe2}
                                title="Website"
                                text="Visitor interactions"
                            />

                            <AnalyticsItem
                                number="02"
                                icon={BarChart3}
                                title="Google Analytics 4"
                                text="Behaviour and engagement data"
                            />

                            <AnalyticsItem
                                number="03"
                                icon={Layers3}
                                title="Google Tag Manager"
                                text="Flexible event and tag management"
                            />

                            <AnalyticsItem
                                number="04"
                                icon={Zap}
                                title="Insights"
                                text="Using data to improve the website"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   CODE
============================================================================= */

const CodeSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="dark"
            className="relative z-20 overflow-hidden bg-[#08060d] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            {/* Background glow */}

            <div className="absolute -right-40 top-[-10%] h-[550px] w-[550px] rounded-full bg-purple-700/10 blur-[140px]" />

            <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

                    {/* HEADER */}

                    <div>

                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-400">

                            <span>{number}</span>

                            <span className="h-px w-10 bg-purple-500/50" />

                            <span>{section.eyebrow}</span>

                        </div>

                        <h2 className="mt-8 max-w-lg text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title}
                        </h2>
{section.text && (
    <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
        {renderFormattedText(section.text, true)}
    </p>
)}
                        

                    </div>

                    {/* CODE WINDOW */}

                    <div className="relative">

                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0910] shadow-2xl shadow-purple-950/20">

                            {/* Editor header */}

                            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">

                                <div className="flex items-center gap-2">

                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                                </div>

                                <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                                    Application Source
                                </span>

                            </div>

                            {/* Code */}

                            <div className="overflow-x-auto p-6 sm:p-8">

                                <pre className="whitespace-pre-wrap font-mono text-xs leading-7 text-purple-200/80 sm:text-sm">

                                    <code>
                                        {renderFormattedText(section.code, true)}
                                    </code>

                                </pre>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   QUOTE
============================================================================= */

const QuoteSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="dark"
            className="relative z-15 overflow-hidden bg-[#05030a] px-6 py-25 sm:px-5 lg:px-6 lg:py-14"
        >

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[130px]" />

            <div className="relative z-35 mx-auto max-w-5xl text-center">

                <div className="mb-10 text-[10px] uppercase tracking-[0.3em] text-purple-400">
                    {number} / {section.eyebrow}
                </div>

                <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-3xl text-purple-400">
                    “
                </div>

                <blockquote className="text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    {section.text}
                </blockquote>

            </div>

        </section>
    );
};

/* =========================================================================
   RESULTS
============================================================================= */

const ResultsSection = ({ section, number }) => {

    return (

        <section
            data-watermark-bg="dark"
            className="relative z-20 overflow-hidden bg-[#09060f] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[130px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="mb-16">

                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-400">

                        <span>{number}</span>

                        <span className="h-px w-10 bg-purple-500/50" />

                        <span>{section.eyebrow}</span>

                    </div>

                    <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                        {section.title}
                    </h2>

                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {section.results?.map((result, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
                        >

                            <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-purple-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                            <div className="relative">

                                <div className="text-2xl font-black text-purple-400">
                                    {result.value}
                                </div>

                                <div className="mt-6 h-px bg-white/10" />

                                <p className="mt-5 text-sm leading-7 text-white/40">
                                    {result.text}
                                </p>

                                <CheckCircle2
                                    size={16}
                                    className="mt-8 text-white/15 transition group-hover:text-purple-400"
                                />

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

/* =========================================================================
   ANALYTICS ITEM
============================================================================= */

const AnalyticsItem = ({ number, icon: Icon, title, text }) => (

    <div className="group relative flex items-center gap-5 rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md transition hover:bg-white/[0.12]">

        <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/20">

            <Icon
                size={18}
                className="text-white"
            />

        </div>

        <div className="flex-1">

            <div className="flex items-center gap-3">

                <span className="text-[9px] tracking-[0.25em] text-white/40">
                    {number}
                </span>

                <h3 className="font-bold">
                    {title}
                </h3>

            </div>

            <p className="mt-1 text-xs text-white/50">
                {text}
            </p>

        </div>

        <ArrowUpRight
            size={15}
            className="text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        />

    </div>
);

/* =========================================================================
   TECH PILL
============================================================================= */

const TechPill = ({ text }) => (

    <span className="rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-purple-200">
        {text}
    </span>
);

export default PersonalPortfolioDetails;