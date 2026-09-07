import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const experience = [
    {
        period: "2026 - Present",
        role: "Data Analytics",
        icon: "",
        company: "Freelance",
        description:
            "KPI Management, Dashboard building",
        technologies: ["Power BI", "SQL", "Git", "Github"],
        current: true,
        path: "/experience/data-analytics",
        image: "/ExperiencePhotos/data-analytics.jpg",
    },

    {
        period: "2026 - Present",
        role: "Google & Instagram Ads Management",
        icon: "",
        company: "Freelance",
        description:
            "Ads Management, tracking, campaign creation and optimization",
        technologies: ["Google Analytics 4", "Google Ads"],
        current: true,
        path: "/experience/ads",
        image: "/ExperiencePhotos/ads.jpg",
    },

    {
        period: "2025 - 2026",
        role: "Quality Engineer / Data Analyst",
        icon: "",
        company: "Continental Automotive | Novi Sad, Serbia",
        description:
            "Quality KPI defining, monitoring, reports, process optimization",
        technologies: ["Power BI", "Excel", "SQL", "Azure"],
        current: false,
        path: "/experience/quality-engineer",
        image: "/ExperiencePhotos/continental.jpg",
    },

    {
        period: "2023 - 2025",
        role: "Logistics & Supply Chain Manager",
        icon: "",
        company: "Novus M Plus Trade | Novi Sad, Serbia",
        description:
            "Quality KPI defining, monitoring, reports, process optimization",
        technologies: ["Power BI", "Excel", "SQL", "SAP"],
        current: false,
        path: "/experience/logistics",
        image: "/ExperiencePhotos/logistics.jpg",
    },
];

export const Experience = () => {
    return (
        <section
            id="experience"
            className="
                relative
                overflow-hidden
                py-32
                bg-[#080516]
            "
        >
            {/* BACKGROUND */}

            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/ProfilePhotos/background7a.jpg"
                    alt=""
                    className="
                        w-full
                        h-full
                        object-cover
                        opacity-30
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28)_0%,rgba(17,10,35,0.8)_45%,rgba(5,3,15,0.98)_100%)]
                    "
                />

                {/* Purple glow behind timeline */}

                <div
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[700px]
                        h-[900px]
                        rounded-full
                        bg-purple-600/10
                        blur-[140px]
                    "
                />

                {/* Small atmospheric glow */}

                <div
                    className="
                        absolute
                        top-20
                        left-10
                        w-72
                        h-72
                        rounded-full
                        bg-violet-500/10
                        blur-[100px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-96
                        h-96
                        rounded-full
                        bg-purple-500/10
                        blur-[120px]
                    "
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* HEADER */}

                <div className="max-w-3xl mx-auto text-center mb-24">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-3
                            px-5
                            py-2
                            rounded-full
                            border
                            border-purple-400/30
                            bg-purple-500/10
                            backdrop-blur-md
                            text-purple-300
                            text-sm
                            font-medium
                            tracking-[0.2em]
                            uppercase
                            shadow-[0_0_30px_rgba(139,92,246,0.12)]
                        "
                    >
                        <span
                            className="
                                w-2
                                h-2
                                rounded-full
                                bg-purple-400
                                shadow-[0_0_12px_rgba(168,85,247,0.9)]
                            "
                        />

                        Career Journey
                    </div>

                    <h2
                        className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            mt-7
                            text-white
                            tracking-tight
                        "
                    >
                        From experience
                        <br />
                        <span
                            className="
                                font-serif
                                italic
                                font-normal
                                text-purple-300
                            "
                        >
                            to what comes next
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6
                            text-white/50
                            text-base
                            md:text-lg
                            max-w-2xl
                            mx-auto
                            leading-relaxed
                        "
                    >
                        A journey through data, quality, logistics and
                        digital projects — each experience building the next.
                    </p>
                </div>


                {/* TIMELINE */}

                <div className="relative max-w-6xl mx-auto">

                    {/* CENTRAL TIMELINE */}

                    <div
                        className="
                            absolute
                            left-1/2
                            -translate-x-1/2
                            top-0
                            bottom-0
                            w-[2px]
                            bg-linear-to-b
                            from-purple-400/20
                            via-purple-400
                            to-purple-400/20
                            shadow-[0_0_18px_rgba(168,85,247,0.8)]
                            hidden
                            md:block
                        "
                    />

                    {/* MOBILE TIMELINE */}

                    <div
                        className="
                            absolute
                            left-4
                            top-0
                            bottom-0
                            w-[2px]
                            bg-linear-to-b
                            from-purple-400/20
                            via-purple-400
                            to-purple-400/20
                            shadow-[0_0_18px_rgba(168,85,247,0.8)]
                            md:hidden
                        "
                    />


                    {/* JOURNEY CONTINUES */}

                    <div className="relative flex justify-center mb-16">

                        <div
                            className="
                                absolute
                                left-1/2
                                -translate-x-1/2
                                top-full
                                w-[2px]
                                h-16
                                bg-linear-to-b
                                from-purple-400/60
                                to-purple-400/20
                            "
                        />

                        <div
                            className="
                                relative
                                px-8
                                py-5
                                rounded-2xl
                                border
                                border-purple-400/30
                                bg-white/[0.04]
                                backdrop-blur-xl
                                shadow-[0_0_40px_rgba(139,92,246,0.12)]
                                text-center
                            "
                        >
                            <span
                                className="
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-purple-300/60
                                    mb-2
                                "
                            >
                                And the journey continues
                            </span>

                            <span
                                className="
                                    text-lg
                                    md:text-xl
                                    font-semibold
                                    text-white
                                "
                            >
                                More to come
                            </span>
                        </div>

                    </div>


                    {/* EXPERIENCE ITEMS */}

                    <div className="space-y-12 md:space-y-20">

                        {experience.map((exp, idx) => {

                            const isLeft = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className="
                                        relative
                                        grid
                                        md:grid-cols-2
                                        md:gap-20
                                    "
                                    style={{
                                        animationDelay: `${(idx + 1) * 150}ms`,
                                    }}
                                >

                                    {/* TIMELINE NODE */}

                                    <div
                                        className={`
                                            absolute
                                            z-20
                                            left-4
                                            md:left-1/2
                                            top-1/2
                                            -translate-y-1/2
                                            md:-translate-x-1/2
                                            w-6
                                            h-6
                                            rounded-full
                                            border-2
                                            border-purple-300
                                            bg-[#120a26]
                                            shadow-[0_0_20px_rgba(168,85,247,0.8)]
                                            ${
                                                exp.current
                                                    ? "current-dot"
                                                    : ""
                                            }
                                        `}
                                    >
                                        <span
                                            className="
                                                absolute
                                                inset-1
                                                rounded-full
                                                bg-purple-400
                                                shadow-[0_0_12px_rgba(168,85,247,1)]
                                            "
                                        />

                                        {exp.current && (
                                            <span
                                                className="
                                                    absolute
                                                    -inset-2
                                                    rounded-full
                                                    border
                                                    border-purple-400/50
                                                    animate-ping
                                                "
                                            />
                                        )}
                                    </div>


                                    {/* LEFT CARD */}

                                    {isLeft && (
                                        <div
                                            className="
                                                md:col-start-1
                                                md:pr-0
                                                pl-12
                                                md:pl-0
                                            "
                                        >
                                            <ExperienceCard
                                                exp={exp}
                                                index={idx}
                                            />
                                        </div>
                                    )}


                                    {/* RIGHT CARD */}

                                    {!isLeft && (
                                        <div
                                            className="
                                                md:col-start-2
                                                pl-12
                                            "
                                        >
                                            <ExperienceCard
                                                exp={exp}
                                                index={idx}
                                            />
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>




        </section>
    );
};


/* =========================================================
   EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({ exp, index }) => {

    return (
        <Link
            to={exp.path}
            className="
                block
                group
                relative
            "
        >

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-purple-400/20
                    bg-[#100a20]/85
                    backdrop-blur-xl
                    shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-purple-400/60
                    hover:shadow-[0_20px_60px_rgba(139,92,246,0.28)]
                "
            >

                {/* IMAGE */}

                <div
                    className="
                        relative
                        h-44
                        md:h-48
                        overflow-hidden
                    "
                >

                    <img
                        src={exp.image}
                        alt=""
                        className="
                            w-full
                            h-full
                            object-cover
                            opacity-70
                            grayscale-[20%]
                            transition-all
                            duration-700
                            group-hover:scale-105
                            group-hover:opacity-90
                        "
                    />

                    {/* Image darkening */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-linear-to-b
                            from-black/10
                            via-black/20
                            to-[#100a20]
                        "
                    />

                    {/* Purple image glow */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-purple-700/10
                            mix-blend-screen
                        "
                    />

                    {/* Current label */}

                    {exp.current && (
                        <div
                            className="
                                absolute
                                top-4
                                right-4
                                px-3
                                py-1.5
                                rounded-full
                                bg-purple-500/20
                                border
                                border-purple-300/30
                                backdrop-blur-md
                                text-[10px]
                                uppercase
                                tracking-[0.18em]
                                text-purple-200
                                shadow-[0_0_20px_rgba(168,85,247,0.2)]
                            "
                        >
                            Current
                        </div>
                    )}

                    {/* Experience number */}

                    <div
                        className="
                            absolute
                            top-4
                            left-4
                            text-xs
                            font-semibold
                            tracking-[0.2em]
                            text-white/40
                        "
                    >
                        0{index + 1}
                    </div>

                </div>


                {/* CONTENT */}

                <div
                    className="
                        relative
                        px-7
                        md:px-9
                        pt-3
                        pb-8
                        text-center
                    "
                >

                    {/* Period */}

                    <div
                        className="
                            text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.18em]
                            text-purple-300/70
                        "
                    >
                        {exp.period}
                    </div>


                    {/* Title */}

                    <h3
                        className="
                            mt-3
                            text-xl
                            md:text-2xl
                            font-semibold
                            text-white
                            leading-tight
                            transition-colors
                            duration-300
                            group-hover:text-purple-200
                        "
                    >
                        {exp.role}
                    </h3>


                    {/* Company */}

                    <p
                        className="
                            mt-2
                            text-sm
                            text-purple-300/70
                        "
                    >
                        {exp.company}
                    </p>


                    {/* Description */}

                    <p
                        className="
                            mt-5
                            text-sm
                            md:text-base
                            leading-relaxed
                            text-white/50
                            max-w-xl
                            mx-auto
                        "
                    >
                        {exp.description}
                    </p>


                    {/* Technologies */}

                    <div
                        className="
                            flex
                            flex-wrap
                            justify-center
                            gap-2
                            mt-6
                        "
                    >
                        {exp.technologies.map((tech, techIdx) => (
                            <span
                                key={techIdx}
                                className="
                                    px-3
                                    py-1
                                    rounded-full
                                    text-[11px]
                                    font-medium
                                    bg-purple-500/10
                                    border
                                    border-purple-400/15
                                    text-purple-200/70
                                    transition-all
                                    duration-300
                                    group-hover:border-purple-400/30
                                    group-hover:bg-purple-500/15
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>


                    {/* BUTTON */}

                    <div className="flex justify-center mt-7">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-2.5
                                rounded-xl
                                bg-purple-500/20
                                border
                                border-purple-400/30
                                text-sm
                                font-medium
                                text-purple-100
                                shadow-[0_0_20px_rgba(139,92,246,0.15)]
                                transition-all
                                duration-300
                                group-hover:bg-purple-500/40
                                group-hover:border-purple-300/50
                                group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]
                            "
                        >
                            Explore experience

                            <ArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </span>

                    </div>

                </div>


                {/* CARD GLOW */}

                <div
                    className="
                        absolute
                        -bottom-20
                        left-1/2
                        -translate-x-1/2
                        w-64
                        h-32
                        rounded-full
                        bg-purple-500/10
                        blur-3xl
                        pointer-events-none
                        transition-opacity
                        duration-500
                        opacity-0
                        group-hover:opacity-100
                    "
                />

            </div>

        </Link>
    );
};