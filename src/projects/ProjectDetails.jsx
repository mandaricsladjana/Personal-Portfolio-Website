import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/projects/projectdetailslist";
import { projectDetails } from "@/projects";
import PersonalPortfolioProject from "@/projects/details/PersonalPortfolioDetails";
import CloudProjectDetails from "@/projects/details/CloudProjectDetails";
import NashvilleProjectDetails from "@/projects/details/NashvilleProjectDetails";

export const ProjectDetails = () => {
    const { projectId } = useParams();

    const project = projects.find(
        (project) => project.id === projectId
    );

    const details = projectDetails[projectId];

    if (!project || !details) {
        return (
            <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
                <div className="text-center">

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Project Not Found
                    </h1>

                    <Link
                        to="/projects"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-full
                            bg-primary
                            text-white
                            font-bold
                        "
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                </div>
            </section>
        );
    }

    if (projectId === "personal-portfolio-website") {
        return (
            <PersonalPortfolioProject
                project={project}
                details={details}
            />
        );
    }

    if (projectId === "power-bi-nashville") {
        return (
            <NashvilleProjectDetails
                project={project}
                details={details}
            />
        );
    }

    if (projectId === "azure-nashville") {
        return (
            <CloudProjectDetails
                project={project}
                details={details}
            />
        );
    }

    const projectIndex = projects.findIndex(
        (item) => item.id === projectId
    );

    const previousProject =
        projects[
            (projectIndex - 1 + projects.length) %
                projects.length
        ];

    const nextProject =
        projects[
            (projectIndex + 1) %
                projects.length
        ];

    return (
        <section className="relative overflow-hidden bg-gray-100 min-h-screen">

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute top-[40%] left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />


            {/* ================= CONTENT ================= */}

            <div className="origin-top-left scale-[0.9] w-[111.111%]">

            <div className="container mx-auto px-6 md:px-10 lg:px-24 relative z-10">




                {/* ================= HERO ================= */}

                <div className="max-w-5xl mx-auto text-center pb-14">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        {project.category?.join(" • ")}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 text-gray-900">
                        {project.title}
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
                        {project.description}
                    </p>


                    {/* TAGS */}

                    <div className="flex flex-wrap justify-center gap-2 mt-7">

                        {project.tags.map((tag, index) => (

                            <span
                                key={index}
                                className="
                                    px-4
                                    py-1.5
                                    rounded-full
                                    text-sm
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

                </div>


                {/* ================= MAIN IMAGE ================= */}

                <div className="max-w-6xl mx-auto">

                    <div
                        className="
                            rounded-3xl
                            overflow-hidden
                            border
                            border-gray-200
                            shadow-[0_25px_80px_rgba(88,28,135,0.20)]
                            bg-white
                        "
                    >

                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                                w-full
                                h-[350px]
                                md:h-[500px]
                                object-cover
                            "
                        />

                    </div>

                </div>


                {/* ================= OVERVIEW ================= */}

                <div className="max-w-4xl mx-auto py-20">

                    <div className="text-center mb-10">

                        <span className="text-primary text-sm font-medium tracking-wider uppercase">
                            {details.overview.eyebrow}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-2">
                            {details.overview.title}
                        </h2>

                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        {details.overview.text}
                    </p>

                </div>


                {/* ================= CUSTOM SECTIONS ================= */}

                <div className="space-y-20">

                    {details.sections.map((section, index) => (

                        <ProjectSection
                            key={index}
                            section={section}
                        />

                    ))}

                </div>


                {/* ================= TECHNOLOGIES ================= */}

                <div className="max-w-5xl mx-auto py-20 text-center">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Technologies
                    </span>

                    <h2 className="text-4xl font-bold mt-2 mb-8">
                        Tools & Technologies
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">

                        {project.tags.map((tag, index) => (

                            <span
                                key={index}
                                className="
                                    px-5
                                    py-2.5
                                    rounded-full
                                    bg-white
                                    border
                                    border-purple-200
                                    text-purple-700
                                    font-medium
                                "
                            >
                                {tag}
                            </span>

                        ))}

                    </div>

                </div>


                {/* ================= LINKS ================= */}

                <div className="flex flex-wrap justify-center gap-4 pb-20">

                    {project.link && (

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-7
                                py-3
                                rounded-full
                                bg-primary
                                text-white
                                font-bold
                                hover:bg-purple-700
                                hover:shadow-[0_0_20px_rgba(124,58,237,0.40)]
                                transition-all
                                duration-300
                            "
                        >
                            Read Full Article
                            <ArrowUpRight className="w-5 h-5" />
                        </a>

                    )}

                    {project.github && (

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-7
                                py-3
                                rounded-full
                                border-2
                                border-primary
                                text-primary
                                font-bold
                                hover:bg-primary
                                hover:text-white
                                transition-all
                                duration-300
                            "
                        >
                            <FaGithub className="w-5 h-5" />
                            GitHub
                        </a>

                    )}

                </div>


                {/* ================= PROJECT NAVIGATION ================= */}

                <div className="border-t border-gray-300 py-10 flex items-center justify-between gap-6">

                    <Link
                        to={`/projects/${previousProject.id}`}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-gray-600
                            hover:text-purple-600
                            transition-colors
                            duration-300
                        "
                    >

                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />

                        <div>

                            <span className="text-xs uppercase tracking-wider text-gray-400">
                                Previous
                            </span>

                            <p className="font-semibold">
                                {previousProject.title}
                            </p>

                        </div>

                    </Link>


                    <Link
                        to={`/projects/${nextProject.id}`}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-right
                            text-gray-600
                            hover:text-purple-600
                            transition-colors
                            duration-300
                        "
                    >

                        <div>

                            <span className="text-xs uppercase tracking-wider text-gray-400">
                                Next
                            </span>

                            <p className="font-semibold">
                                {nextProject.title}
                            </p>

                        </div>

                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                    </Link>

                </div>

            </div>

            </div>

        </section>
    );
};


/* ========================================================= */
/*                    PROJECT SECTION                         */
/* ========================================================= */

const ProjectSection = ({ section }) => {

    if (section.type === "text") {

        return (
            <div className="max-w-5xl mx-auto">

                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-[0_20px_60px_rgba(88,28,135,0.12)]">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        {section.eyebrow}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                        {section.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        {section.text}
                    </p>

                </div>

            </div>
        );
    }


    if (section.type === "process") {

        return (
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        {section.eyebrow}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        {section.title}
                    </h2>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

                    {section.steps.map((step) => (

                        <div
                            key={step.number}
                            className="
                                bg-white
                                rounded-2xl
                                border
                                border-gray-200
                                p-6
                                shadow-[0_15px_40px_rgba(88,28,135,0.10)]
                                hover:-translate-y-1
                                hover:border-purple-300
                                transition-all
                                duration-300
                            "
                        >

                            <span className="text-primary text-3xl font-bold">
                                {step.number}
                            </span>

                            <h3 className="text-lg font-bold mt-4 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        );
    }


    if (section.type === "code") {

        return (
            <div className="max-w-6xl mx-auto">

                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.20)]">

                    <div className="p-8 md:p-12">

                        <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                            {section.eyebrow}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                            {section.title}
                        </h2>

                        <p className="text-gray-300 leading-relaxed max-w-3xl">
                            {section.text}
                        </p>

                    </div>


                    <div className="mx-8 mb-8 md:mx-12 md:mb-12">

                        <pre className="rounded-2xl bg-gray-800 border border-gray-700 p-6 overflow-x-auto">

                            <code className="text-gray-300 text-sm leading-relaxed">
                                {section.code}
                            </code>

                        </pre>

                    </div>

                </div>

            </div>
        );
    }


    if (section.type === "results") {

        return (
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-10">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        {section.eyebrow}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        {section.title}
                    </h2>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {section.results.map((result, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-2xl
                                p-8
                                border
                                border-gray-200
                                text-center
                                shadow-[0_15px_40px_rgba(88,28,135,0.10)]
                            "
                        >

                            <div className="text-4xl font-bold text-primary mb-2">
                                {result.value}
                            </div>

                            <p className="text-gray-600">
                                {result.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        );
    }



    return null;
};