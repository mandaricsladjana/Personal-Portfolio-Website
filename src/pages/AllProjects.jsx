import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight} from "lucide-react";
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
        <section className="relative overflow-hidden bg-gray-100 border-t border-gray-300 min-h-screen">

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />


            {/* ================= CONTENT ================= */}

            <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">


                {/* ================= PAGE TITLE ================= */}

                <div className="pt-32 pb-10 text-center">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        My Work
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-1">

                        All{" "}

                        <span className="text-primary italic font-serif">
                            Projects
                        </span>

                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
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
                                        : "bg-white text-purple-600 border-purple-200 hover:bg-purple-50 hover:border-purple-400"
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
                                        : "bg-white text-purple-600 border-purple-200 hover:bg-purple-50 hover:border-purple-400"
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
                                bg-white
                                rounded-2xl
                                overflow-hidden
                                border border-gray-200
                                shadow-[0_20px_60px_rgba(88,28,135,0.18)]
                                transition-all
                                duration-500
                                ease-in-out
                                hover:-translate-y-1
                                hover:border-purple-400
                                hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]
                            "
                        >

                            {/* ================= PROJECT IMAGE ================= */}

                            <Link to={`/projects/${project.id}`}>
                                <div className="relative overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                            w-full
                                            h-52
                                            object-cover
                                            transition-transform
                                            duration-700
                                            ease-in-out
                                            group-hover:scale-105
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-linear-to-t
                                            from-black/40
                                            via-transparent
                                            to-transparent
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            duration-500
                                            ease-in-out
                                        "
                                    />

                                </div>
                            </Link>


                            {/* ================= PROJECT CONTENT ================= */}

                            <div className="p-6">


                                {/* ================= YEAR ================= */}

                                <div className="mb-3">

                                    <span
                                        className="
                                            inline-flex
                                            items-center
                                            px-3
                                            py-1
                                            rounded-full
                                            text-xs
                                            font-semibold
                                            tracking-wider
                                            uppercase
                                            bg-purple-50
                                            text-purple-700
                                            border
                                            border-purple-100
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
                                            text-gray-900
                                            mb-3
                                            transition-colors
                                            duration-500
                                            ease-in-out
                                            group-hover:text-purple-600
                                        "
                                    >
                                        {project.title}
                                    </h2>

                                </Link>


                                {/* ================= DESCRIPTION ================= */}

                                <p className="text-gray-600 leading-relaxed text-sm mb-5">
                                    {project.description}
                                </p>


                                {/* ================= TAGS ================= */}

                                <div className="flex flex-wrap gap-2 mb-6">

                                    {project.tags.map((tag, tagIndex) => (

                                        <span
                                            key={tagIndex}
                                            className="
                                                px-2.5
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-purple-50
                                                text-purple-700
                                                border
                                                border-purple-100
                                            "
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>


                                {/* ================= PROJECT BUTTONS ================= */}

                                <div className="flex flex-wrap gap-2.5">

                                    {/* VIEW PROJECT */}

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-primary
                                            text-white
                                            text-xs
                                            font-bold
                                            transition-all
                                            duration-300
                                            ease-in-out
                                            hover:bg-purple-700
                                            hover:shadow-[0_0_15px_rgba(124,58,237,0.45)]
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
                                                rounded-full
                                                border-2
                                                border-primary
                                                text-primary
                                                text-xs
                                                font-bold
                                                transition-all
                                                duration-300
                                                ease-in-out
                                                hover:bg-primary
                                                hover:text-white
                                                hover:shadow-[0_0_15px_rgba(124,58,58,0.45)]
                                            "
                                        >
                                            GitHub
                                        </a>

                                    )}

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* ================= NO PROJECTS MESSAGE ================= */}

                {filteredProjects.length === 0 && (

                    <div className="text-center pb-20">

                        <p className="text-gray-500 text-lg">
                            No projects found in this category yet.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
};