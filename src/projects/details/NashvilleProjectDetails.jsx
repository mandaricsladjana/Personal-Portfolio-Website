import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ArrowDown,
    ArrowUp,
    Database,
    LayoutDashboard,
    BarChart3,
    Code2,
    Cloud,
    GitBranch,
    Table2,
    Filter,
    Layers3,
    Workflow,
    Search,
    CheckCircle2,
    Sparkles,
    Server,
    FileSpreadsheet,
    Gauge,
    Map,
    LineChart,
    Braces,
} from "lucide-react";
import { projects } from "../projectdetailslist";

/*
|--------------------------------------------------------------------------
| NASHVILLE PROJECT DETAIL PAGE
|--------------------------------------------------------------------------
|
| SPECIAL ANALYTICS / DATA ENGINEERING RENDERER
|
| Designed for projects such as:
|
|    Raw Data
|       ↓
|    SQL Cleaning
|       ↓
|    Data Quality
|       ↓
|    Azure / Database Layer
|       ↓
|    Power BI
|       ↓
|    Dashboard & Insights
|
| Content comes from:
|
|    NashvilleProject.js
|
| The JSX controls:
|    - visual design
|    - typography
|    - section layouts
|    - cards
|    - animations
|    - dashboard storytelling
|
| The project content stays inside the project data file.
|--------------------------------------------------------------------------
*/

const NashvilleProjectDetails = ({ project, details }) => {
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
            const scrollPosition =
                window.innerHeight + window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight;

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
    */

    const [watermarkTheme, setWatermarkTheme] =
        useState("dark");

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
                section?.getAttribute("data-watermark-bg") ||
                "dark";

            setWatermarkTheme(theme);

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(
                    updateWatermarkTheme
                );

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

    const isDarkWatermark =
        watermarkTheme === "dark";

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-[#05030a] text-white"
            style={{ zoom: 0.95 }}
        >

            {/* =========================================================
                FIXED DASHBOARD WATERMARK
            ========================================================= */}

            <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">

                <div className="relative flex h-[700px] w-[700px] items-center justify-center">

                    {/* =================================================
                        DARK SECTION WATERMARK
                    ================================================= */}

                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                            isDarkWatermark
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    >

                        <div className="relative flex h-[700px] w-[700px] items-center justify-center rounded-full border-[6px] border-gray-300/[0.08]">

                            <div className="absolute inset-10 rounded-full border-[3px] border-gray-300/[0.055]" />

                            <div className="absolute inset-0 rounded-full bg-gray-300/[0.006] blur-3xl" />

                            <LayoutDashboard
                                className="relative h-[350px] w-[350px] text-gray-300/[0.10]"
                                strokeWidth={2.5}
                            />

                        </div>
                    </div>


                    {/* =================================================
                        LIGHT / PURPLE SECTION WATERMARK
                    ================================================= */}

                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                            isDarkWatermark
                                ? "opacity-0"
                                : "opacity-100"
                        }`}
                    >

                        <div className="relative flex h-[700px] w-[700px] items-center justify-center rounded-full border-[6px] border-purple-600/[0.10]">

                            <div className="absolute inset-10 rounded-full border-[3px] border-purple-600/[0.065]" />

                            <div className="absolute inset-0 rounded-full bg-purple-600/[0.006] blur-3xl" />

                            <LayoutDashboard
                                className="relative h-[350px] w-[350px] text-purple-600/[0.12]"
                                strokeWidth={2.5}
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

                <div className="absolute -left-[20%] top-[-25%] h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[150px]" />

                <div className="absolute -right-[15%] top-[5%] h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[160px]" />

                <div className="absolute bottom-[-20%] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[140px]" />

                {/* Technical grid */}

                <div
                    className="absolute inset-0 opacity-[0.09]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Decorative data circles */}

                <div className="absolute right-[12%] top-[20%] hidden h-52 w-52 rounded-full border border-purple-400/10 lg:block" />

                <div className="absolute right-[16%] top-[24%] hidden h-36 w-36 rounded-full border border-purple-400/10 lg:block" />

                <div className="absolute right-[20%] top-[28%] hidden h-20 w-20 rounded-full bg-purple-500/10 blur-xl lg:block" />

                <div className="relative z-40 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 py-10 sm:px-10 lg:px-16">

                    {/* =================================================
                        TOP BAR
                    ================================================= */}


                    {/* =================================================
                        HERO CONTENT
                    ================================================= */}

                    <div className="flex flex-1 items-center py-25">

                        <div className="w-full">

                            <div className="mb-8 flex items-center gap-3">

                                <span className="h-px w-12 bg-purple-500" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple-300">
                                    {overview.eyebrow ||
                                        "Data Analytics Project"}
                                </span>

                            </div>


                            <div className="relative max-w-6xl">

                                <h1 className="text-[17vw] font-black leading-[0.72] tracking-[-0.08em] sm:text-[12vw] lg:text-[8rem]">

                                    <span className="block text-white">
                                        NASHVILLE
                                    </span>

                                    <span className="relative block">

                                        <span className="relative z-10 text-white">
                                            HOUSING
                                        </span>

                                        <span className="absolute left-[15%] top-[30%] h-[45%] w-[45%] rounded-full bg-purple-600/30 blur-[70px]" />

                                    </span>

                                    <span className="block bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
                                        ANALYTICS
                                    </span>

                                </h1>


                                {/* =================================================
                                    FLOATING PROJECT CARD
                                ================================================= */}

                                <div className="absolute right-[2%] top-[20%] hidden w-64 rotate-3 border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl xl:block">

                                    <div className="flex items-center justify-between">

                                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                                            Data Project
                                        </span>

                                        <Database
                                            size={16}
                                            className="text-purple-400"
                                        />

                                    </div>

                                    <div className="mt-8 text-3xl font-black">
                                        01
                                    </div>

                                    <div className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
                                        SQL → Azure → Power BI
                                    </div>

                                    <div className="mt-8 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />

                                    <div className="mt-5 text-xs leading-6 text-white/45">
                                        Transforming raw housing
                                        data into a structured
                                        analytical model and
                                        interactive dashboard.
                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                OVERVIEW
                            ================================================= */}

                            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                                <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                                    {overview.text}
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    <TechPill text="SQL" />
                                    <TechPill text="Azure" />
                                    <TechPill text="Power BI" />
                                    <TechPill text="Data Quality" />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM INDICATOR
                    ================================================= */}

                    <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.3em] text-white/25">

                        <span>
                            Real Estate Investment & Market Analytics
                        </span>

                        <span>
                            Explore Project ↓
                        </span>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PROJECT SECTIONS
            ========================================================= */}

            {sections.map((section, index) => {

                const sectionNumber =
                    String(index + 1).padStart(2, "0");

                switch (section.type) {

                    case "story":
                        return (
                            <StorySection
                                key={index}
                                section={section}
                                number={sectionNumber}
                                index={index}
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

                    case "sql":
                        return (
                            <SQLCleaningSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "quality":
                        return (
                            <DataQualitySection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "dashboard":
                        return (
                            <DashboardSection
                                key={index}
                                section={section}
                                number={sectionNumber}
                            />
                        );

                    case "pipeline":
                        return (
                            <PipelineSection
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

                    case "quote":
                        return (
                            <QuoteSection
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

                <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[150px]" />

                <div className="relative z-40 mx-auto max-w-5xl text-center">

                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                        From Raw Data to Insight
                    </span>

                    <h2 className="mt-8 text-6xl font-black leading-[0.85] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]">

                        DATA
                        <br />

                        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                            CONNECTED.
                        </span>

                    </h2>

                    <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40">
                        The project combines SQL data preparation,
                        data quality analysis, cloud infrastructure
                        and Power BI visualization into one
                        analytical workflow.
                    </p>


                    {/* =================================================
                        PREVIOUS / NEXT
                    ================================================= */}

                    <div className="mt-12 grid w-full gap-4 md:grid-cols-2">

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


                    {/* =================================================
                        FOOTER BUTTONS
                    ================================================= */}

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <Link
                            to="/projects"
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


            {/* =========================================================
                COMBINED SCROLL BUTTON
            ========================================================= */}

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
   STORY SECTION
============================================================================= */

const StorySection = ({ section, number, index }) => {

    const dark = index % 2 === 0;

    return (
        <section
            data-watermark-bg={
                dark ? "dark" : "light"
            }
            className={`relative z-20 overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-40 ${
                dark
                    ? "bg-[#08060d] text-white"
                    : "bg-[#f4f1f8] text-black"
            }`}
        >

            {dark && (
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
                        backgroundSize: "100px 100px",
                    }}
                />
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
                                {section.text}
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

    const architectureItems = [
        {
            icon: FileSpreadsheet,
            title: "Raw Source",
            text: "Original housing data prepared for transformation.",
        },
        {
            icon: Database,
            title: "SQL Layer",
            text: "Cleaning, transformation and reusable analytical views.",
        },
        {
            icon: Cloud,
            title: "Azure",
            text: "Cloud database and storage infrastructure.",
        },
        {
            icon: BarChart3,
            title: "Power BI",
            text: "Interactive dashboard and analytical reporting.",
        },
    ];

    return (
        <section
            data-watermark-bg="dark"
            className="relative z-20 overflow-hidden bg-[#05030a] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-[140px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

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
                                {section.text}
                            </p>
                        )}

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2">

                        {architectureItems.map(
                            (item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
                                    >

                                        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-purple-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                                        <div className="relative">

                                            <div className="flex items-center justify-between">

                                                <span className="text-[9px] tracking-[0.25em] text-purple-400">
                                                    0{index + 1}
                                                </span>

                                                <Icon
                                                    size={19}
                                                    className="text-white/25 transition group-hover:text-purple-400"
                                                />

                                            </div>

                                            <h3 className="mt-14 text-xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-white/35">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>
                                );
                            }
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   SQL CLEANING
============================================================================= */

const SQLCleaningSection = ({ section, number }) => {

    const cleaningSteps = [
        {
            icon: Search,
            title: "Inspect",
            text: "Identify missing values, duplicates, inconsistent formats and unusable fields.",
        },
        {
            icon: Filter,
            title: "Clean",
            text: "Standardize values, correct formats and remove unnecessary inconsistencies.",
        },
        {
            icon: Table2,
            title: "Transform",
            text: "Create structured fields and analytical columns inside SQL.",
        },
        {
            icon: GitBranch,
            title: "Prepare",
            text: "Build reusable SQL views for downstream Power BI analysis.",
        },
    ];

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

                            <span>
                                {section.eyebrow ||
                                    "SQL Data Cleaning"}
                            </span>

                        </div>

                        <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title ||
                                "Clean Data Before You Build the Dashboard."}
                        </h2>

                        {section.text && (
                            <p className="mt-8 max-w-md text-sm leading-7 text-black/45">
                                {section.text}
                            </p>
                        )}

                    </div>


                    <div className="space-y-0">

                        {cleaningSteps.map(
                            (step, index) => {

                                const Icon = step.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group flex gap-6 border-t border-black/10 py-7 transition hover:bg-purple-100/40"
                                    >

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600/10 text-purple-600">
                                            <Icon size={19} />
                                        </div>

                                        <div className="flex-1">

                                            <div className="flex items-center justify-between gap-5">

                                                <h3 className="text-xl font-black">
                                                    {step.title}
                                                </h3>

                                                <span className="text-[9px] font-bold tracking-[0.2em] text-purple-600/50">
                                                    0{index + 1}
                                                </span>

                                            </div>

                                            <p className="mt-3 max-w-xl text-sm leading-7 text-black/45">
                                                {step.text}
                                            </p>

                                        </div>

                                    </div>
                                );
                            }
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   DATA QUALITY
============================================================================= */

const DataQualitySection = ({ section, number }) => {

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

                            <span>
                                {section.eyebrow ||
                                    "Data Quality"}
                            </span>

                        </div>

                        <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title ||
                                "Make Data Quality Visible."}
                        </h2>

                        {section.text && (
                            <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
                                {section.text}
                            </p>
                        )}

                    </div>


                    <div className="relative">

                        <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-white/20 sm:block" />

                        <div className="space-y-4">

                            <QualityItem
                                number="01"
                                icon={Gauge}
                                title="Completeness"
                                text="Identify missing critical fields before analysis."
                            />

                            <QualityItem
                                number="02"
                                icon={Table2}
                                title="Consistency"
                                text="Standardize values and formats across the dataset."
                            />

                            <QualityItem
                                number="03"
                                icon={Search}
                                title="Validation"
                                text="Check whether transformed values remain analytically usable."
                            />

                            <QualityItem
                                number="04"
                                icon={CheckCircle2}
                                title="Quality KPIs"
                                text="Turn data quality checks into measurable indicators."
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   DASHBOARD
============================================================================= */

const DashboardSection = ({ section, number }) => {

    const dashboardItems = [
        {
            icon: BarChart3,
            title: "Market Overview",
            text: "High-level view of the housing market.",
        },
        {
            icon: LineChart,
            title: "Price Analysis",
            text: "Explore pricing patterns and market movement.",
        },
        {
            icon: Map,
            title: "Geographic Analysis",
            text: "Compare housing activity across locations.",
        },
        {
            icon: Gauge,
            title: "Investment View",
            text: "Transform prepared data into decision-support metrics.",
        },
    ];

    return (
        <section
            data-watermark-bg="dark"
            className="relative z-20 overflow-hidden bg-[#08060d] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="absolute left-[-15%] top-[15%] h-[550px] w-[550px] rounded-full bg-purple-700/10 blur-[140px]" />

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="mb-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                    <div>

                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-400">

                            <span>{number}</span>

                            <span className="h-px w-10 bg-purple-500/50" />

                            <span>
                                {section.eyebrow ||
                                    "Power BI Dashboard"}
                            </span>

                        </div>

                        <h2 className="mt-8 max-w-lg text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                            {section.title ||
                                "From Clean Tables to Interactive Insight."}
                        </h2>

                        {section.text && (
                            <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
                                {section.text}
                            </p>
                        )}

                    </div>


                    {/* Dashboard mockup */}

                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111018] p-4 shadow-2xl">

                        <div className="flex items-center justify-between border-b border-white/10 pb-4">

                            <div className="flex items-center gap-2">

                                <span className="h-2 w-2 rounded-full bg-purple-400" />

                                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                                    Housing Analytics
                                </span>

                            </div>

                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                                Power BI
                            </span>

                        </div>


                        <div className="grid gap-3 py-5 sm:grid-cols-3">

                            <DashboardMetric
                                label="Properties"
                                value="10K+"
                            />

                            <DashboardMetric
                                label="Data Layer"
                                value="SQL"
                            />

                            <DashboardMetric
                                label="BI Layer"
                                value="PBI"
                            />

                        </div>


                        <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">

                            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">

                                <div className="mb-6 flex items-center justify-between">

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                        Market Trend
                                    </span>

                                    <LineChart
                                        size={15}
                                        className="text-purple-400"
                                    />

                                </div>

                                <div className="flex h-32 items-end gap-2">

                                    {[42, 58, 49, 70, 62, 78, 88, 72, 94, 82, 100, 91].map(
                                        (height, index) => (
                                            <div
                                                key={index}
                                                className="flex-1 rounded-t bg-purple-500/30 transition hover:bg-purple-400/60"
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                            />
                                        )
                                    )}

                                </div>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">

                                <div className="mb-5 flex items-center justify-between">

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                        Segments
                                    </span>

                                    <Map
                                        size={15}
                                        className="text-purple-400"
                                    />

                                </div>

                                <div className="space-y-4">

                                    <DashboardBar
                                        label="Urban"
                                        value="78%"
                                    />

                                    <DashboardBar
                                        label="Suburban"
                                        value="64%"
                                    />

                                    <DashboardBar
                                        label="Other"
                                        value="42%"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Dashboard capability cards */}

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {dashboardItems.map(
                        (item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="text-[9px] tracking-[0.25em] text-purple-400">
                                            0{index + 1}
                                        </span>

                                        <Icon
                                            size={17}
                                            className="text-white/25 transition group-hover:text-purple-400"
                                        />

                                    </div>

                                    <h3 className="mt-12 text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-6 text-white/35">
                                        {item.text}
                                    </p>

                                </div>
                            );
                        }
                    )}

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   PIPELINE
============================================================================= */

const PipelineSection = ({ section, number }) => {

    const pipeline = [
        {
            icon: FileSpreadsheet,
            title: "Excel / Raw Data",
            text: "Source dataset",
        },
        {
            icon: Code2,
            title: "SQL",
            text: "Cleaning & transformation",
        },
        {
            icon: Database,
            title: "Database",
            text: "Structured analytical layer",
        },
        {
            icon: Cloud,
            title: "Azure",
            text: "Cloud infrastructure",
        },
        {
            icon: BarChart3,
            title: "Power BI",
            text: "Dashboard & insights",
        },
    ];

    return (
        <section
            data-watermark-bg="light"
            className="relative z-20 overflow-hidden bg-[#f4f1f8] px-6 py-28 text-black sm:px-10 lg:px-16 lg:py-40"
        >

            <div className="relative z-40 mx-auto max-w-7xl">

                <div className="mb-16">

                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-purple-600">

                        <span>{number}</span>

                        <span className="h-px w-10 bg-purple-600/40" />

                        <span>
                            {section.eyebrow ||
                                "End-to-End Pipeline"}
                        </span>

                    </div>

                    <h2 className="mt-8 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                        {section.title ||
                            "One Analytical Pipeline. Multiple Layers."}
                    </h2>

                    {section.text && (
                        <p className="mt-8 max-w-2xl text-sm leading-7 text-black/45">
                            {section.text}
                        </p>
                    )}

                </div>


                <div className="relative">

                    {/* Connecting line */}

                    <div className="absolute left-0 right-0 top-16 hidden h-px bg-black/10 lg:block" />

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

                        {pipeline.map(
                            (item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >

                                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-600/20 bg-[#f4f1f8] text-purple-600">

                                            <Icon size={21} />

                                        </div>

                                        <div className="mt-7">

                                            <span className="text-[9px] font-bold tracking-[0.2em] text-purple-600/50">
                                                0{index + 1}
                                            </span>

                                            <h3 className="mt-2 text-lg font-black">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-xs leading-6 text-black/40">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>
                                );
                            }
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   RESULTS
============================================================================= */

const ResultsSection = ({ section, number }) => {

    const results = section.results || [
        {
            value: "SQL",
            text: "Reusable cleaning and preparation layer.",
        },
        {
            value: "Azure",
            text: "Cloud-based analytical infrastructure.",
        },
        {
            value: "Power BI",
            text: "Interactive dashboard and visual analysis.",
        },
        {
            value: "90%",
            text: "Reduction in repetitive manual preparation work.",
        },
    ];

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

                        <span>
                            {section.eyebrow ||
                                "Project Outcomes"}
                        </span>

                    </div>

                    <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                        {section.title ||
                            "From Manual Data to a Reusable Analytics System."}
                    </h2>

                </div>


                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {results.map(
                        (result, index) => (

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

                        )
                    )}

                </div>

            </div>

        </section>
    );
};


/* =========================================================================
   QUALITY ITEM
============================================================================= */

const QualityItem = ({
    number,
    icon: Icon,
    title,
    text,
}) => (

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
   DASHBOARD METRIC
============================================================================= */

const DashboardMetric = ({
    label,
    value,
}) => (

    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

        <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            {label}
        </div>

        <div className="mt-3 text-xl font-black text-white">
            {value}
        </div>

    </div>
);


/* =========================================================================
   DASHBOARD BAR
============================================================================= */

const DashboardBar = ({
    label,
    value,
}) => (

    <div>

        <div className="mb-2 flex items-center justify-between">

            <span className="text-[9px] text-white/40">
                {label}
            </span>

            <span className="text-[9px] font-bold text-white/50">
                {value}
            </span>

        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

            <div
                className="h-full rounded-full bg-purple-500/60"
                style={{
                    width: value,
                }}
            />

        </div>

    </div>
);


/* =========================================================================
   QUOTE
============================================================================= */

const QuoteSection = ({
    section,
    number,
}) => (

    <section
        data-watermark-bg="dark"
        className="relative z-20 overflow-hidden bg-[#05030a] px-6 py-32 sm:px-10 lg:px-16 lg:py-48"
    >

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[130px]" />

        <div className="relative z-40 mx-auto max-w-5xl text-center">

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


/* =========================================================================
   TECH PILL
============================================================================= */

const TechPill = ({ text }) => (

    <span className="rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-purple-200">
        {text}
    </span>
);

export default NashvilleProjectDetails;
