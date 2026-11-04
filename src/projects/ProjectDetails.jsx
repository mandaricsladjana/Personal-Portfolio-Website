import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/projects/projectdetailslist";
import { projectDetails } from "@/projects";

import PersonalPortfolioProject from "@/projects/details/PersonalPortfolioDetails";
import CloudProjectDetails from "@/projects/details/CloudProjectDetails";
import NashvilleProjectDetails from "@/projects/details/NashvilleProjectDetails";
import GlowByAnaduProject from "@/projects/details/glowbyanaduDetails";

export const ProjectDetails = () => {
    const { projectId } = useParams();

    const project = projects.find(
        (project) => project.id === projectId
    );

    const details = projectDetails[projectId];

    // Projects that use their own dedicated detail components.
    const customProjectIds = [
        "personal-portfolio-website",
        "power-bi-nashville",
        "azure-nashville",
        "glowbyanadu_webshop",
    ];

    // Check that the project itself exists.
    // Custom projects do not have to have an entry in projectDetails.
    if (!project) {
        return (
            <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Project Not Found
                    </h1>

                    <Link
                        to="/pages"
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

    // Render dedicated project pages before checking generic details.
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

    if (projectId === "glowbyanadu_webshop") {
        return (
            <GlowByAnaduProject
                project={project}
            />
        );
    }

    // Only generic project pages require projectDetails data.
    if (!details) {
        return (
            <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Project Details Not Found
                    </h1>

                    <p className="text-gray-600 mb-6">
                        The project exists, but its detail information
                        has not been configured yet.
                    </p>

                    <Link
                        to="/pages"
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
    }}

    // KEEP THE REST OF YOUR EXISTING COMPONENT BELOW THIS POINT.
    // Start with your existing:
    //
    // const projectIndex = projects.findIndex(
    //     (item) => item.id === projectId
    // );
    //
    // Keep the existing generic project layout and ProjectSection
    // component unchanged.