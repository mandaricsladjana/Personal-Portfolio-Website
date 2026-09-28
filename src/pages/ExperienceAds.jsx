import React from "react";
import { Link } from "react-router-dom";
import {
ArrowLeft,
ArrowRight,
CalendarDays,
BriefcaseBusiness,
CheckCircle2,
Lightbulb,
} from "lucide-react";

export default function ExperienceAds() {
const responsibilities = [
"Created and managed Google Ads campaigns based on business objectives.",
"Managed Instagram advertising campaigns and promotional activities.",
"Set up and monitored campaign tracking and performance measurement.",
"Analyzed campaign performance and identified areas for improvement.",
"Monitored important advertising KPIs and performance indicators.",
"Optimized campaigns based on data, audience behavior and performance.",
"Used Google Analytics 4 to understand traffic and user behavior.",
"Supported data-driven decisions related to digital marketing activities.",
];

const skills = [
    "Google Ads",
    "Instagram Ads",
    "Campaign Management",
    "Campaign Optimization",
    "Performance Tracking",
    "Digital Analytics",
    "Audience Analysis",
    "Conversion Tracking",
    "KPI Monitoring",
    "Data Analysis",
];

const tools = [
    "Google Ads",
    "Google Analytics 4",
    "Instagram",
    "Meta Ads Manager",
];

const projects = [
    {
        title: "Campaign Creation",
        description:
            "Created advertising campaigns based on defined objectives, target audiences and campaign goals.",
        tags: ["Google Ads", "Instagram Ads", "Campaign Management"],
    },

    {
        title: "Performance Tracking",
        description:
            "Monitored campaign performance and advertising KPIs to understand what was working and where improvements were needed.",
        tags: ["GA4", "KPI Monitoring", "Performance Tracking"],
    },

    {
        title: "Campaign Optimization",
        description:
            "Analyzed campaign results and adjusted campaigns based on performance data, audience behavior and observed trends.",
        tags: ["Optimization", "Data Analysis", "Audience Analysis"],
    },

    {
        title: "Tracking & Measurement",
        description:
            "Worked with analytics and tracking tools to better understand campaign traffic, user behavior and conversion-related performance.",
        tags: ["Google Analytics 4", "Tracking", "Analytics"],
    },
];

const achievements = [
    "Improved visibility into digital advertising performance.",
    "Used campaign data to identify optimization opportunities.",
    "Connected advertising activities with measurable KPIs.",
];

const learned = [
    "How to structure and manage digital advertising campaigns.",
    "How campaign performance can be evaluated through data and KPIs.",
    "How audience behavior influences advertising performance.",
    "How analytics and advertising work together to support better decisions.",
];

return (
    <main className="min-h-screen bg-white text-black">

        <div className="origin-top-left scale-[0.8]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-6 md:px-12 lg:px-20 pt-35 pb-24">


            <div className="max-w-7xl">

                <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-7">
                    Professional Experience
                </p>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-semibold tracking-tight leading-[0.88] max-w-6xl">
                    Google & Instagram Ads
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
                    Managing digital advertising activities across Google
                    and Instagram, with a focus on campaign creation,
                    tracking, performance analysis and optimization.
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

