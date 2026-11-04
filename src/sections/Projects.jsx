import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/projects/projectdetailslist";

export const Projects = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(currentSection);
                }
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -150px 0px",
            }
        );

        observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection);
        };
    }, []);

    return (
        <div className="relative">
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-50 bg-[#09050D]">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09050D] to-transparent z-10" />
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09050D] to-transparent z-10" />
            </div>

            <section
                id="projects"
                ref={sectionRef}
                className="relative isolate overflow-hidden text-white py-24 md:py-28"
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div
                        className={`pb-16 text-center max-w-3xl mx-auto transition-all ${
                            isInView ? "hero-fade-in-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                            Featured Works
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-3 text-white tracking-tight">
                            Selected{" "}
                            <span className="text-primary italic font-serif">
                                Projects
                            </span>
                        </h2>
                        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
                            A showcase of engineered data pipelines, interactive dashboards, and modern web applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                        {projects.slice(0, 4).map((project, index) => (
                            <article
                                key={project.id || index}
                                className={`
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
                                    ${isInView ? "hero-fade-in-up" : "opacity-0"}
                                `}
                            >
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                                {/* MEDIA COVER LINK */}
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="relative z-10 block overflow-hidden"
                                >
                                    <div className="relative h-64 md:h-72 w-full overflow-hidden bg-[#09050D]">
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0717] via-[#0d0717]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>

                                {/* PROJECT DETAILS */}
                                <div className="p-7 md:p-8 flex flex-1 flex-col relative z-10">
                                    <Link to={`/projects/${project.id}`} className="block mb-3">
                                        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                                            {project.title}
                                        </h3>
                                    </Link>

                                    <p className="text-gray-300/90 leading-relaxed text-sm md:text-base mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2 mb-8">
                                        {project.tags?.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold transition-all duration-300 hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                                        >
                                            <span>View Case Study</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                                            >
                                                <FaGithub className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Projects;