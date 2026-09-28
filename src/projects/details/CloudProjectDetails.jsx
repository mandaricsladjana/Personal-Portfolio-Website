import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ArrowDown,
    ArrowUp,
    Database,
    BarChart3,
    Layers3,
    GitBranch,
    Globe2,
    Zap,
    CheckCircle2,
    Sparkles,
    Server,
    Cloud,
    Workflow,
    FileSpreadsheet,
} from "lucide-react";
import { projects } from "../projectdetailslist";
/*
|--------------------------------------------------------------------------
| CLOUD / AZURE PROJECT DETAIL PAGE
|--------------------------------------------------------------------------
*/

const CloudProjectDetails = ({ project, details }) => {
    const [watermarkTheme, setWatermarkTheme] = useState("light");

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

    useEffect(() => {
        const detectBackground = () => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const element = document.elementFromPoint(
                centerX,
                centerY
            );

            if (!element) return;

            const section =
                element.closest("section") ||
                element.closest("main") ||
                element;

            const background =
                window.getComputedStyle(section).backgroundColor;

            const rgb = background.match(/\d+/g);

            if (rgb && rgb.length >= 3) {
                const red = Number(rgb[0]);
                const green = Number(rgb[1]);
                const blue = Number(rgb[2]);

                const brightness =
                    (red * 299 + green * 587 + blue * 114) / 1000;

                if (brightness > 200) {
                    setWatermarkTheme("dark");
                } else {
                    setWatermarkTheme("light");
                }
            }
        };

        detectBackground();

        window.addEventListener("scroll", detectBackground, {
            passive: true,
        });

        window.addEventListener("resize", detectBackground);

        return () => {
            window.removeEventListener("scroll", detectBackground);
            window.removeEventListener("resize", detectBackground);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | PROJECT NAVIGATION
    |--------------------------------------------------------------------------
    */

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

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-[#02070b] text-white"
            style={{ zoom: 0.95 }}
        >

            {/* ================= AZURE DATA CLOUD WATERMARK ================= */}

            <div
                className={`pointer-events-none fixed inset-0 z-[90] flex items-center justify-center transition-opacity duration-500 ${
                    watermarkTheme === "dark"
                        ? "opacity-[0.055]"
                        : "opacity-[0.13]"
                }`}
            >
                <div className="relative flex items-center justify-center">

                    {/* LARGE CIRCULAR GLOW */}

                    <div
                        className={`absolute h-[620px] w-[620px] rounded-full blur-3xl ${
                            watermarkTheme === "dark"
                                ? "bg-purple-500/10"
                                : "bg-purple-500/10"
                        }`}
                    />

                    {/* FIRST THICK OUTER CIRCLE */}

                    <div
                        className={`absolute h-[620px] w-[620px] rounded-full border-6 ${
                            watermarkTheme === "dark"
                                ? "border-purple-700/30"
                                : "border-purple-600/35"
                        }`}
                    />

                    {/* SECOND THICK OUTER CIRCLE */}

                    <div
                        className={`absolute h-[580px] w-[580px] rounded-full border-6 ${
                            watermarkTheme === "dark"
                                ? "border-purple-700/25"
                                : "border-purple-600/30"
                        }`}
                    />

                    {/* AZURE-STYLE CLOUD LOGO — CLOUD ONLY */}

                    <svg
                        width="620"
                        height="620"
                        viewBox="0 0 620 620"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative text-purple-600"
                    >
                        <path
                            d="M174 382 
                               C139 382 111 354 111 319 
                               C111 285 137 257 170 254 
                               C181 196 231 153 291 153 
                               C349 153 398 190 413 243 
                               C420 241 428 240 436 240 
                               C479 240 514 275 514 318 
                               C514 354 489 382 455 389 
                               C448 390 441 391 433 391 
                               H174 
                               Z"
                            stroke="currentColor"
                            strokeWidth="11"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </div>
            </div>

            {/* ================= HERO ================= */}

            <section className="relative z-40 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#02070b] via-[#07131d] to-[#02070b] px-6 pb-20 pt-30 sm:px-10 lg:px-16">

                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

   

                    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

                        <div>

                            <div className="mb-6 flex flex-wrap items-center gap-3">

                                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                    <Cloud size={14} />
                                    Azure Data Engineering
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60">
                                    <Database size={14} />
                                    Data Pipeline
                                </span>

                            </div>

                            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                                {project?.title ||
                                    "Nashville Housing Data Pipeline"}
                            </h1>

                            <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                                {project?.subtitle ||
                                    "From raw housing data to a structured Azure-powered analytics pipeline built for reliable reporting and Power BI analysis."}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                {[
                                    "Azure Blob Storage",
                                    "Azure Data Factory",
                                    "Azure SQL",
                                    "SQL",
                                    "Power BI",
                                    "GitHub",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>

                        <div className="relative">

                            <div className="rounded-[2rem] border border-cyan-400/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                                <div className="mb-6 flex items-center justify-between">

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                                            Architecture
                                        </p>

                                        <h2 className="mt-2 text-xl font-bold">
                                            End-to-End Data Flow
                                        </h2>
                                    </div>

                                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-3 text-cyan-300">
                                        <Workflow size={24} />
                                    </div>

                                </div>

                                <div className="space-y-3">

                                    {[
                                        {
                                            icon: FileSpreadsheet,
                                            label: "Raw Excel / CSV Data",
                                        },
                                        {
                                            icon: Cloud,
                                            label: "Azure Blob Storage",
                                        },
                                        {
                                            icon: Workflow,
                                            label: "Azure Data Factory",
                                        },
                                        {
                                            icon: Database,
                                            label: "Azure SQL Database",
                                        },
                                        {
                                            icon: BarChart3,
                                            label: "Power BI Analytics",
                                        },
                                    ].map((item, index) => {

                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.label}
                                                className="flex items-center gap-4"
                                            >

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
                                                    <Icon size={19} />
                                                </div>

                                                <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.035] px-4 py-3">
                                                    <span className="text-sm font-medium text-white/75">
                                                        {item.label}
                                                    </span>
                                                </div>

                                                {index < 4 && (
                                                    <ArrowRight
                                                        size={15}
                                                        className="hidden text-white/20 sm:block"
                                                    />
                                                )}

                                            </div>
                                        );
                                    })}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= PROJECT OVERVIEW ================= */}

            <section className="relative z-40 border-b border-white/10 bg-white px-6 py-20 text-gray-950 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                        <div>

                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-purple-600">
                                Project Overview
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                Turning raw data into a reusable analytics layer.
                            </h2>

                        </div>

                        <div className="space-y-6 text-base leading-8 text-gray-600">

                            <p>
                                This project was designed as an end-to-end
                                housing data pipeline, starting with raw source
                                data and transforming it into a structured,
                                analysis-ready environment.
                            </p>

                            <p>
                                The workflow combines Azure cloud services,
                                SQL data preparation and Power BI reporting
                                into one connected analytical process.
                            </p>

                            <p>
                                Instead of repeatedly preparing the same raw
                                dataset manually, the architecture creates a
                                cleaner and more maintainable path from source
                                data to business reporting.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= DATA PIPELINE ================= */}

            <section className="relative z-40 border-b border-white/10 bg-[#050b11] px-6 py-20 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-3xl">

                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                            Data Pipeline
                        </span>

                        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                            A structured flow from source to dashboard.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-white/55">
                            Each stage of the architecture has a specific role:
                            storage, orchestration, transformation,
                            validation and visualization.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

                        <AnalyticsItem
                            number="01"
                            icon={FileSpreadsheet}
                            title="Source"
                            text="Raw Excel and source housing data are prepared as the initial input."
                        />

                        <AnalyticsItem
                            number="02"
                            icon={Cloud}
                            title="Storage"
                            text="Azure Blob Storage provides a centralized cloud location for source files."
                        />

                        <AnalyticsItem
                            number="03"
                            icon={Workflow}
                            title="Orchestration"
                            text="Azure Data Factory coordinates the movement of data through the pipeline."
                        />

                        <AnalyticsItem
                            number="04"
                            icon={Database}
                            title="SQL Layer"
                            text="Azure SQL provides structured tables, cleaning logic and analytical views."
                        />

                        <AnalyticsItem
                            number="05"
                            icon={BarChart3}
                            title="Analytics"
                            text="Power BI connects to the prepared data layer for reporting and analysis."
                        />

                    </div>

                </div>
            </section>

            {/* ================= TECHNOLOGY STACK ================= */}

            <section className="relative z-40 border-b border-white/10 bg-gray-100 px-6 py-20 text-gray-950 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-purple-600">
                                Technology Stack
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                Cloud, SQL and BI working together.
                            </h2>

                        </div>

                        <div className="flex flex-wrap content-start gap-4">

                            <CloudPill
                                icon={Cloud}
                                title="Azure Blob Storage"
                            />

                            <CloudPill
                                icon={Workflow}
                                title="Azure Data Factory"
                            />

                            <CloudPill
                                icon={Database}
                                title="Azure SQL"
                            />

                            <CloudPill
                                icon={Database}
                                title="SQL"
                            />

                            <CloudPill
                                icon={BarChart3}
                                title="Power BI"
                            />

                            <CloudPill
                                icon={GitBranch}
                                title="GitHub"
                            />

                            <CloudPill
                                icon={Globe2}
                                title="Cloud Architecture"
                            />

                            <CloudPill
                                icon={Zap}
                                title="Automation"
                            />

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= SQL / DATA QUALITY ================= */}

            <section className="relative z-40 border-b border-white/10 bg-[#02070b] px-6 py-20 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>

                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                                SQL Data Preparation
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                The SQL layer becomes the foundation for analysis.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                                Cleaning and preparation logic is separated from
                                the visualization layer so Power BI receives
                                structured, reusable analytical data.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {[
                                "Data cleaning",
                                "Missing-value analysis",
                                "Standardization",
                                "SQL views",
                                "Data-quality KPIs",
                                "Prepared reporting layer",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                                >
                                    <CheckCircle2
                                        size={19}
                                        className="shrink-0 text-cyan-300"
                                    />

                                    <span className="text-sm font-medium text-white/70">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= IMPACT ================= */}

            <section className="relative z-40 border-b border-white/10 bg-white px-6 py-20 text-gray-950 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-10 md:grid-cols-3">

                        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">

                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                                <Zap size={22} />
                            </div>

                            <div className="text-4xl font-black">
                                ~90%
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Less repetitive manual update work through a
                                structured analytical workflow.
                            </p>

                        </div>

                        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">

                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                                <Database size={22} />
                            </div>

                            <div className="text-4xl font-black">
                                SQL
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                A reusable SQL preparation layer separates data
                                transformation from visualization.
                            </p>

                        </div>

                        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">

                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                                <BarChart3 size={22} />
                            </div>

                            <div className="text-4xl font-black">
                                Power BI
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                The prepared data layer can feed dashboards and
                                analytical reporting.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= KEY TAKEAWAYS ================= */}

            <section className="relative z-40 border-b border-white/10 bg-gradient-to-br from-[#07131d] to-[#02070b] px-6 py-20 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">

                        <div>

                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                                Key Takeaways
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                Built as an analytics system, not just a dashboard.
                            </h2>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Cloud storage creates a centralized source layer.",
                                    "Azure Data Factory provides orchestration between services.",
                                    "SQL views create reusable data preparation logic.",
                                    "Power BI consumes a structured analytical layer.",
                                    "GitHub provides version control for the project.",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                                            <CheckCircle2 size={16} />
                                        </div>

                                        <p className="text-sm leading-7 text-white/65">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="relative flex items-center justify-center">

                            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-10 text-center backdrop-blur-xl">

                                <Sparkles
                                    size={34}
                                    className="mx-auto text-cyan-300"
                                />

                                <h3 className="mt-6 text-2xl font-black">
                                    Data → Cloud → SQL → BI
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    A complete workflow connecting data
                                    engineering principles with business
                                    analytics.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="relative z-40 bg-[#02070b] px-6 py-20 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                            Explore More
                        </span>

                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        {/* ================= PREVIOUS PROJECT ================= */}

                        {previousProject ? (
                            <Link
                                to={`/projects/${previousProject.id}`}
                                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.055]"
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

const AnalyticsItem = ({
    number,
    icon: Icon,
    title,
    text,
}) => {
    return (
        <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">

            <div className="flex items-center justify-between">

                <span className="text-xs font-bold tracking-[0.18em] text-white/25">
                    {number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={19} />
                </div>

            </div>

            <h3 className="mt-8 text-lg font-bold">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/45">
                {text}
            </p>

        </div>
    );
};

const CloudPill = ({ icon: Icon, title }) => {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Icon size={18} />
            </div>

            <span className="text-sm font-semibold text-gray-800">
                {title}
            </span>

        </div>
    );
};

export default CloudProjectDetails;