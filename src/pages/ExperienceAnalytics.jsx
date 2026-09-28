import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CalendarDays,
    BriefcaseBusiness,
    CheckCircle2,
    Lightbulb,
} from "lucide-react";

export default function ExperienceAnalytics() {
    const responsibilities = [
        "Defined and monitored KPIs to support data-driven business decisions.",
        "Built interactive dashboards and reports using Power BI.",
        "Collected, cleaned and transformed data from different sources.",
        "Used SQL to query, analyze and prepare data for reporting.",
        "Developed data models and structured datasets for analytical reporting.",
        "Analyzed business data to identify trends, patterns and areas for improvement.",
        "Created visual reports that made complex data easier to understand.",
        "Used Git and GitHub to manage and organize analytics-related work.",
    ];

    const skills = [
        "Data Analytics",
        "KPI Management",
        "Dashboard Development",
        "Data Visualization",
        "SQL",
        "Data Cleaning",
        "Data Transformation",
        "Data Modeling",
        "Business Intelligence",
        "Data Analysis",
        "Reporting",
        "Performance Monitoring",
    ];

    const tools = [
        "Power BI",
        "SQL",
        "Microsoft SQL Server",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Excel",
        "Python",
    ];

    const projects = [
        {
            title: "KPI Dashboard Development",
            description:
                "Designed interactive Power BI dashboards for monitoring key performance indicators and presenting business data in a clear and actionable way.",
            tags: ["Power BI", "KPI Management", "Data Visualization"],
        },

        {
            title: "SQL Data Analysis",
            description:
                "Used SQL to query, transform and analyze datasets, preparing structured data for reporting, analysis and dashboard development.",
            tags: ["SQL", "Data Analysis", "Data Transformation"],
        },

        {
            title: "Data Preparation",
            description:
                "Worked with raw datasets by identifying data quality issues, cleaning information and preparing reliable datasets for analytical use.",
            tags: ["Data Cleaning", "Data Quality", "Data Preparation"],
        },

        {
            title: "Business Reporting",
            description:
                "Translated analytical results into clear reports and visualizations, helping turn raw data into information that can support business decisions.",
            tags: ["Reporting", "Power BI", "Business Intelligence"],
        },
    ];

    const achievements = [
        "Created dashboards that provide a clear overview of important business KPIs.",
        "Transformed raw and structured data into useful analytical insights.",
        "Improved the visibility and accessibility of business performance information.",
    ];

    const learned = [
        "How to define and structure KPIs according to business objectives.",
        "How to transform raw data into reliable datasets for analysis and reporting.",
        "How to design Power BI dashboards that communicate information clearly.",
        "How SQL can be used to explore, prepare and analyze business data.",
        "How data quality affects the reliability of analytical results.",
        "How to combine technical data skills with business understanding.",
    ];

    return (
        <main className="min-h-screen bg-white text-black">

            <div className="origin-top-left scale-[0.9] w-[111.111%]">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 pt-35 pb-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-7">
                        Professional Experience
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-semibold tracking-tight leading-[0.88] max-w-6xl">
                        Data Analytics
                    </h1>

                    <p className="text-xl md:text-3xl mt-8 opacity-60">
                        Freelance
                    </p>

                    {/* TIMESTAMP */}

                    <div className="flex flex-wrap gap-4 md:gap-8 mt-10">

                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm">
                            <CalendarDays size={16} />
                            2026 — Present
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm">
                            <BriefcaseBusiness size={16} />
                            Freelance
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OVERVIEW
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/10">

                <div className="max-w-7xl grid lg:grid-cols-[0.25fr_1fr] gap-10 lg:gap-20">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50">
                        Overview
                    </p>

                    <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.05] max-w-5xl">
                        Working with business data to define and monitor
                        KPIs, build interactive dashboards, analyze datasets
                        and transform raw information into clear,
                        actionable insights.
                    </p>

                </div>

            </section>


            {/* =====================================================
                WHAT I DID
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-black text-white">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-14">
                        What I did
                    </p>

                    <div className="grid md:grid-cols-2 gap-x-16">

                        {responsibilities.map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-6 py-7 border-t border-white/20"
                            >

                                <span className="text-xs opacity-40 pt-1">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-lg md:text-xl leading-relaxed">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                SKILLS
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Skills & Expertise
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {skills.map((skill) => (

                            <span
                                key={skill}
                                className="px-5 py-3 rounded-full border border-black/15 text-sm hover:bg-black hover:text-white transition"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>


                    {/* TOOLS */}

                    <div className="mt-20">

                        <p className="text-sm opacity-50 mb-6">
                            Tools & Technologies
                        </p>

                        <div className="flex flex-wrap gap-3">

                            {tools.map((tool) => (

                                <span
                                    key={tool}
                                    className="px-4 py-2 rounded-full bg-black text-white text-sm"
                                >
                                    {tool}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROJECTS
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-neutral-100">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Selected Work
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        {projects.map((project, index) => (

                            <article
                                key={index}
                                className="bg-white rounded-4xl p-8 md:p-10 min-h-87.5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
                            >

                                <div>

                                    <span className="text-xs tracking-[0.15em] opacity-40">
                                        PROJECT {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-medium mt-6">
                                        {project.title}
                                    </h3>

                                    <p className="mt-6 text-base md:text-lg leading-relaxed opacity-60 max-w-xl">
                                        {project.description}
                                    </p>

                                </div>

                                <div className="flex flex-wrap gap-2 mt-10">

                                    {project.tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-2 rounded-full border border-black/10"
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                IMPACT
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Impact
                    </p>

                    <div className="grid md:grid-cols-3 gap-5">

                        {achievements.map((achievement, index) => (

                            <div
                                key={index}
                                className="rounded-4xl border border-black/10 p-8 md:p-10 min-h-62.5"
                            >

                                <CheckCircle2 size={22} />

                                <p className="mt-10 text-lg md:text-xl leading-relaxed">
                                    {achievement}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I LEARNED
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-neutral-100">

                <div className="max-w-7xl">

                    <div className="flex items-center gap-3 mb-14">

                        <Lightbulb size={22} />

                        <p className="uppercase tracking-[0.2em] text-xs opacity-50">
                            What I learned
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16">

                        {learned.map((item, index) => (

                            <div
                                key={index}
                                className="py-8 border-t border-black/10"
                            >

                                <div className="flex gap-5">

                                    <span className="text-xs opacity-30 pt-2">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-xl md:text-2xl leading-snug">
                                        {item}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BACK TO PORTFOLIO
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/10">

                <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12">

                    <div>

                        <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-5">
                            Continue exploring
                        </p>

                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                            My Experience
                        </h2>

                    </div>

                    <Link
                        to="/"
                        className="self-start md:self-end inline-flex items-center gap-3 px-7 py-4 rounded-full bg-black text-white hover:opacity-80 transition"
                    >
                        Back to portfolio
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

            </div>

        </main>
    );
}
