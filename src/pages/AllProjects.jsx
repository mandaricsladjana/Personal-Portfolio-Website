import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/projects/projectdetailslist";
import { projectDetails } from "@/projects";

const filters = [
    "All",
    "Data Analytics",
    "Business Intelligence",
    "SQL",
    "Cloud & Data Engineering",
    "Web Development",
    "Marketing & Ads",
];

const yearFilters = [
    "All",
    "2026",
    "2025",
];

export const AllProjects = () => {
    const [searchParams] = useSearchParams();

    const categoriesFromUrl = searchParams.getAll("category");

    const [activeFilter, setActiveFilter] = useState(
        categoriesFromUrl.length > 0
            ? categoriesFromUrl
            : ["All"]
    );

    const [activeYear, setActiveYear] = useState("All");

    const handleFilterClick = (filter, event) => {
        if (event.ctrlKey) {
            if (filter === "All") {
                setActiveFilter(["All"]);
                return;
            }

            setActiveFilter((current) => {
                let updatedFilters = current.filter(
                    (item) => item !== "All"
                );

                if (updatedFilters.includes(filter)) {
                    updatedFilters = updatedFilters.filter(
                        (item) => item !== filter
                    );
                } else {
                    updatedFilters = [...updatedFilters, filter];
                }

                if (updatedFilters.length === 0) {
                    return ["All"];
                }

                return updatedFilters;
            });
        } else {
            setActiveFilter([filter]);
        }
    };

    const filteredProjects =
        activeFilter.includes("All")
            ? (
                activeYear === "All"
                    ? projects
                    : projects.filter(
                        (project) => project.year === activeYear
                    )
            )
            : projects.filter((project) => {
                const matchesCategory = activeFilter.some((filter) => {
                    if (filter === "Data Analytics") {
                        return (
                            project.category?.includes("Data Analytics") ||
                            project.category?.includes("Azure")
                        );
                    }

                    return project.category?.includes(filter);
                });

                const matchesYear =
                    activeYear === "All" ||
                    project.year === activeYear;

                return matchesCategory && matchesYear;
            });

    return (
        <div className="relative min-h-screen">
            {/* ================= FIXED CONTINUOUS BACKGROUND ================= */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-50 bg-[#09050D]">
                {/* Seamless Top Blend */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09050D] to-transparent z-10" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Purple Background Auras */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />

                {/* Seamless Bottom Blend */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09050D] to-transparent z-10" />
            </div>

            <section className="relative overflow-hidden text-white min-h-screen">

                {/* ================= CONTENT ================= */}
                <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">

                    {/* ================= PAGE TITLE ================= */}
                    <div className="pt-32 pb-10 text-center">
                        <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
                            My Work
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-3 text-white">
                            All{" "}
                            <span className="text-primary italic font-serif">
                                Projects
                            </span>
                        </h1>

                        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
                            Explore my projects, from data analytics and business
                            intelligence to cloud solutions and web development.
                        </p>
                    </div>

                    {/* ================= YEAR FILTERS ================= */}
                    <div className="flex flex-wrap justify-center gap-3 mb-5">
                        {yearFilters.map((year) => (
                            <button
                                key={year}
                                type="button"
                                onClick={() => setActiveYear(year)}
                                className={`
                                    px-5
                                    py-2.5
                                    rounded-full
                                    text-sm
                                    font-semibold
                                    border-2
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    ${
                                        activeYear === year
                                            ? "bg-primary text-white border-primary shadow-[0_0_18px_rgba(124,58,237,0.35)]"
                                            : "bg-white/10 text-gray-300 border-white/20 backdrop-blur-md hover:bg-white/20 hover:text-white hover:border-purple-400"
                                    }
                                `}
                            >
                                {year === "All" ? "All Years" : year}
                            </button>
                        ))}
                    </div>

                    {/* ================= FILTERS ================= */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={(event) =>
                                    handleFilterClick(filter, event)
                                }
                                className={`
                                    px-5
                                    py-2.5
                                    rounded-full
                                    text-sm
                                    font-semibold
                                    border-2
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    ${
                                        activeFilter.includes(filter)
                                            ? "bg-primary text-white border-primary shadow-[0_0_18px_rgba(124,58,237,0.35)]"
                                            : "bg-white/10 text-gray-300 border-white/20 backdrop-blur-md hover:bg-white/20 hover:text-white hover:border-purple-400"
                                    }
                                `}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* ================= PROJECT GRID ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-20">
                        {filteredProjects.map((project, index) => (
                            <article
                                key={index}
                                className="
                                    group
                                    relative
                                    flex
                                    flex-col
                                    bg-[#120a21]/60
                                    backdrop-blur-xl
                                    rounded-3xl
                                    overflow-hidden
                                    border border-white/10
                                    transition-all
                                    duration-500
                                    hover:border-purple-500/50
                                    hover:shadow-[0_20px_50px_rgba(124,58,237,0.25)]
                                    hover:-translate-y-1.5
                                "
                            >
                                {/* Ambient Hover Glow */}
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                                {/* ================= PROJECT COVER ================= */}
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="relative z-10 block overflow-hidden"
                                >
                                    <div className="relative w-full h-52 overflow-hidden bg-[#09050D]">
                                        {project.id === "power-bi-nashville" ? (
                                            <video
                                                src="/ProfilePhotos/ZAVRSEN.mp4"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                className="
                                                    absolute
                                                    inset-0
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-105
                                                "
                                            />
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="
                                                    absolute
                                                    inset-0
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-105
                                                "
                                            />
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0717] via-[#0d0717]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                    </div>
                                </Link>

                                {/* ================= PROJECT CONTENT ================= */}
                                <div className="p-7 flex flex-col flex-1 relative z-10">
                                    {/* ================= YEAR ================= */}
                                    <div className="mb-3">
                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                px-3
                                                py-1
                                                rounded-lg
                                                text-xs
                                                font-medium
                                                bg-purple-500/10
                                                text-purple-300
                                                border
                                                border-purple-500/20
                                                backdrop-blur-sm
                                            "
                                        >
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* ================= TITLE ================= */}
                                    <Link to={`/projects/${project.id}`}>
                                        <h2
                                            className="
                                                text-xl
                                                font-bold
                                                text-white
                                                mb-3
                                                transition-colors
                                                duration-300
                                                group-hover:text-purple-300
                                            "
                                        >
                                            {project.title}
                                        </h2>
                                    </Link>

                                    {/* ================= DESCRIPTION ================= */}
                                    <p className="text-gray-300/90 leading-relaxed text-sm mb-5 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* ================= BOTTOM PROJECT AREA ================= */}
                                    <div className="mt-auto flex flex-col">
                                        {/* ================= TAGS ================= */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="
                                                        px-3
                                                        py-1
                                                        rounded-lg
                                                        text-xs
                                                        font-medium
                                                        bg-purple-500/10
                                                        text-purple-300
                                                        border
                                                        border-purple-500/20
                                                        backdrop-blur-sm
                                                    "
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* ================= PROJECT PROGRESS ================= */}
                                        {project.progress !== undefined && (
                                            <div className="mb-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                        Progress
                                                    </span>
                                                    <span className="text-xs font-bold text-purple-300">
                                                        {project.progress}%
                                                    </span>
                                                </div>
                                                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                                    <div
                                                        className="
                                                            h-full
                                                            rounded-full
                                                            bg-primary
                                                            transition-all
                                                            duration-700
                                                            ease-out
                                                        "
                                                        style={{
                                                            width: `${project.progress}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* ================= PROJECT BUTTONS ================= */}
                                        <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                                            {/* VIEW PROJECT */}
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="
                                                    inline-flex
                                                    items-center
                                                    justify-center
                                                    px-4
                                                    py-2
                                                    rounded-xl
                                                    bg-primary
                                                    text-white
                                                    text-xs
                                                    font-semibold
                                                    transition-all
                                                    duration-300
                                                    hover:bg-purple-600
                                                    hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]
                                                "
                                            >
                                                View Project
                                            </Link>

                                            {/* GITHUB */}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        px-4
                                                        py-2
                                                        rounded-xl
                                                        bg-white/5
                                                        border
                                                        border-white/10
                                                        text-gray-300
                                                        text-xs
                                                        font-semibold
                                                        hover:text-white
                                                        hover:bg-white/10
                                                        hover:border-white/20
                                                        transition-all
                                                        duration-300
                                                    "
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* ================= NO PROJECTS MESSAGE ================= */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center pb-20">
                            <p className="text-gray-400 text-lg">
                                No projects found in this category yet.
                            </p>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};