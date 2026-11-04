import { useState } from "react";

export const Learning = () => {
    const [activeCreator, setActiveCreator] = useState(0);

    const certifications = [
        {
            title: "Data Analytics Professional Certificate",
            provider: "Google",
            category: "Data Analytics · Business Intelligence · SQL · Data Visualization",
            year: "2026",
            reference: "A10NUKA4RN5M",
            diplomaImage: "/ProfilePhotos/GoogleProf.png",
            link: "https://www.coursera.org/account/accomplishments/specialization/A10NUKA4RN5M",
            linkText: "View Diploma",
        },
        {
            title: "Excel 2019 Expert",
            provider: "Microsoft IT Academy - MSITA",
            category: "Data Analytics · Microsooft Office",
            year: "2019",
            reference: "MSITA2019784392",
            diplomaImage: "/ProfilePhotos/ExcelDiploma.jpg",
            link: "",
            linkText: "View Diploma",
        },
        {
            title: "Ads Search Certification",
            provider: "Google",
            category: "Digital Marketing",
            year: "2026",
            reference: "173775934",
            diplomaImage: "/ProfilePhotos/AdsDiploma.PNG",
            link: "https://skillshop.credential.net/e976a9af-b7a0-465b-b478-2c507e99d48d#acc.eWr3mj0u",
            linkText: "View Diploma",
        },
        {
            title: "Cambridge English: Advanced",
            provider: "Cambridge English Language Assessment",
            category: "English Language · C1 Advanced",
            reference: "Certificate Number: 15AEA0010027",
            year: "2015",
            diplomaImage: "/ProfilePhotos/EngFCEproba.jpeg",
            link: "",
            linkText: "View Diploma",
        },
    ];

    const currentCourses = [
        {
            title: "Power BI Data Analyst Professional Certificate",
            provider: "Microsoft",
            category: "Power BI · Data Analytics · BI",
            status: "In Progress",
            direction: "Building deeper analytical and BI capabilities - Preparation for the PL-300 Exam",
            link: "https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst",
        },
        {
            title: "Azure Data Fundamentals DP-900 Exam Prep Specialization",
            provider: "Microsoft",
            category: "Azure · Cloud · ETL · Data Engineering",
            status: "To be started",
            direction: "Expanding deeper into cloud-based data solutions",
            link: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-900/",
        },
        {
            title: "Data Analysis with Python",
            provider: "IBM",
            category: "Python · Data Analysis · Automation",
            status: "To be started",
            direction: "Adding practical Python to my analytics toolkit",
            link: "https://www.coursera.org/learn/data-analysis-with-python",
        },
        {
            title: "AI Coding Tools for Professional Developers Specialization",
            provider: "SkillsBooster Accademy",
            category: "Data Engineering · AI · Web Development",
            status: "Pending",
            link: "https://www.coursera.org/specializations/ai-coding-tools-for-professional-developers",
            direction: "Using AI tools to enhance development and analytics workflows",
        },
    ];

    const creators = [
        {
            name: "Alex The Analyst",
            focus: "Data Analytics · SQL · Power BI",
            description:
                "I find his practical approach to data analytics, career development and portfolio building especially inspiring.",
            image: "https://unavatar.io/youtube/AlexTheAnalyst",
            website: "https://www.alextheanalyst.com/",
            youtube: "https://www.youtube.com/@AlexTheAnalyst",
        },
        {
            name: "Luke Barousse",
            focus: "Data Analytics · Careers · Projects",
            description:
                "His content inspires me to keep developing practical data skills and continuously improve as a data professional.",
            image: "https://unavatar.io/youtube/LukeBarousse",
            website: "https://www.lukebarousse.com/",
            youtube: "https://www.youtube.com/@LukeBarousse",
        },
        {
            name: "Kevin Powell",
            focus: "CSS · Frontend · Responsive Design",
            description:
                "I enjoy his approach to modern frontend development, especially the attention to clean layouts, CSS and responsive design.",
            image: "https://unavatar.io/youtube/kevinpowell",
            website: "https://www.kevinpowell.co/",
            youtube: "https://www.youtube.com/@KevinPowell",
        },
        {
            name: "Fireship",
            focus: "Web Development · Technology · AI",
            description:
                "His fast-paced approach to modern technology keeps me curious about new tools, frameworks and the future of development.",
            image: "https://unavatar.io/youtube/Fireship",
            website: "https://fireship.dev/",
            youtube: "https://www.youtube.com/@Fireship",
        },
    ];

    const goals = [
        {
            number: "01",
            title: "Go deeper into Data & BI",
            text: "Continue developing advanced analytics skills concentrating on Python and its vast possibilities in data analytics, BI, data engineering and cloud technologies .",
        },
        {
            number: "02",
            title: "Build more ambitious digital products",
            text: "Turn my knowledge into more complex dashboards and end-to-end digital products, while developing my skills in building full-package websites with features such as shopping carts, subscriptions and analytics integrations.",
        },
        {
            number: "03",
            title: "Build a personal brand with a strong digital presence",
            text: "Combine my BI, data analytics, digital marketing and web development skills with creativity while documenting the process, sharing what I learn and building a strong, authentic digital presence.",
        },
        {
            number: "04",
            title: "Keep experimenting with AI",
            text: "Explore AI, automation and emerging technologies and find practical ways to make them work for me and make work more efficient and productive.",
        },
    ];

    const creator = creators[activeCreator];

    const nextCreator = () => {
        setActiveCreator((prev) => (prev + 1) % creators.length);
    };

    const previousCreator = () => {
        setActiveCreator((prev) => (prev - 1 + creators.length) % creators.length);
    };

    return (
        <div className="relative">
            {/* 🔒 BULLETPROOF FIXED & STATIC BACKGROUND */}
            <div
                aria-hidden="true"
                style={{ position: "fixed", inset: 0, transform: "none" }}
                className="pointer-events-none overflow-hidden -z-50 bg-[#09050D]"
            >
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
            </div>

            <section
                id="learning"
                className="
                    relative
                    py-12
                    overflow-hidden
                    text-white
                "
            >
                <div className="container mx-auto px-6 relative z-10">

                    {/* ================= SECTION HEADER ================= */}
                    <div className="max-w-4xl mb-20">
                        <span
                            className="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                rounded-full
                                bg-purple-500/10
                                border
                                border-purple-500/20
                                text-sm
                                text-purple-400
                                mb-5
                            "
                        >
                            Learning & Growth
                        </span>

                        <h2
                            className="
                                text-4xl
                                md:text-6xl
                                font-bold
                                text-white
                                leading-tight
                                mb-6
                            "
                        >
                            Future In Focus 
                        </h2>

                        <p
                            className="
                                text-lg
                                md:text-xl
                                text-white/60
                                leading-8
                                max-w-3xl
                            "
                        >
                            I believe growth comes from continuously learning,
                            experimenting and turning knowledge into something
                            practical. These are the skills, people and ideas
                            shaping where I want to go next.
                        </p>
                    </div>

                    {/* ================= CERTIFICATIONS + CURRENT LEARNING ================= */}
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12">

                            {/* ================= CERTIFICATIONS ================= */}
                            <div>
                                <div className="flex items-end justify-between mb-8">
                                    <div>
                                        <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
                                            Credentials
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                                            Certifications
                                        </h3>
                                    </div>
                                    <span className="hidden md:block text-white/30 text-sm">
                                        Completed
                                    </span>
                                </div>

                                <div className="grid gap-4">
                                    {certifications.map((certificate, index) => (
                                        <div
                                            key={index}
                                            className="
                                                group
                                                rounded-3xl
                                                p-6
                                                md:p-7
                                                border
                                                border-white/10
                                                bg-[#100a20]/80
                                                backdrop-blur-xl
                                                hover:border-purple-500/40
                                                hover:bg-purple-500/[0.03]
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            <div className="flex items-start justify-between gap-5">
                                                <div
                                                    className="
                                                        relative
                                                        w-12
                                                        h-12
                                                        shrink-0
                                                        rounded-2xl
                                                        bg-purple-500/10
                                                        border
                                                        border-purple-500/20
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-xl
                                                        cursor-pointer
                                                    "
                                                >
                                                    🎓
                                                </div>

                                                <span
                                                    className="
                                                        text-xs
                                                        text-white/30
                                                        font-medium
                                                    "
                                                >
                                                    {certificate.year}
                                                </span>
                                            </div>

                                            {certificate.diplomaImage && (
                                                <div
                                                    className="
                                                        max-h-0
                                                        opacity-0
                                                        overflow-hidden
                                                        pointer-events-none
                                                        group-hover:max-h-[600px]
                                                        group-hover:opacity-100
                                                        group-hover:pointer-events-auto
                                                        transition-all
                                                        duration-500
                                                        ease-in-out
                                                    "
                                                >
                                                    <div
                                                        className="
                                                            mt-5
                                                            w-full
                                                            p-2
                                                            rounded-2xl
                                                            bg-black/95
                                                            border
                                                            border-purple-500/30
                                                            shadow-2xl
                                                            shadow-purple-900/30
                                                        "
                                                    >
                                                        <div className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold px-2 py-1.5">
                                                            Diploma Preview
                                                        </div>

                                                        <a
                                                            href={certificate.diplomaImage}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block cursor-zoom-in"
                                                        >
                                                            <img
                                                                src={certificate.diplomaImage}
                                                                alt={`${certificate.title} diploma`}
                                                                className="
                                                                    w-full
                                                                    max-h-[520px]
                                                                    rounded-xl
                                                                    border
                                                                    border-white/10
                                                                    object-contain
                                                                    hover:border-purple-500/50
                                                                    transition-all
                                                                "
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mt-6">
                                                <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
                                                    {certificate.category}
                                                </span>

                                                <h4 className="text-lg md:text-xl font-bold text-white mt-2 leading-snug">
                                                    {certificate.title}
                                                </h4>

                                                <p className="text-sm text-white/40 mt-2">
                                                    {certificate.provider}
                                                </p>

                                                {certificate.reference && (
                                                    <p className="text-xs text-white/30 mt-3">
                                                        {certificate.reference}
                                                    </p>
                                                )}

                                                {certificate.link && (
                                                    <a
                                                        href={certificate.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            inline-flex
                                                            items-center
                                                            gap-2
                                                            mt-4
                                                            text-sm
                                                            font-semibold
                                                            text-purple-400
                                                            hover:text-purple-300
                                                            transition-colors
                                                        "
                                                    >
                                                        {certificate.linkText}
                                                        <span>↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* ================= INTERNAL PROFESSIONAL TRAINING ================= */}
                                <div className="mt-8">
                                    <div className="flex items-end justify-between mb-5">
                                        <div>
                                            <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
                                                Professional Training
                                            </p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                Continental Automotive
                                            </h3>
                                        </div>
                                        <span className="hidden md:block text-white/30 text-sm">
                                            Internal Training
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            rounded-[2rem]
                                            border
                                            border-purple-500/20
                                            bg-[#100a20]/80
                                            backdrop-blur-xl
                                            p-6
                                            md:p-7
                                            relative
                                            overflow-hidden
                                            hover:border-purple-500/40
                                            hover:bg-purple-500/[0.06]
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <div
                                            className="
                                                absolute
                                                -top-16
                                                -right-16
                                                w-40
                                                h-40
                                                rounded-full
                                                bg-purple-500/10
                                                blur-3xl
                                                pointer-events-none
                                            "
                                        />

                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="
                                                        w-12
                                                        h-12
                                                        shrink-0
                                                        rounded-2xl
                                                        bg-purple-500/10
                                                        border
                                                        border-purple-500/20
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-xl
                                                    "
                                                >
                                                    🏢
                                                </div>

                                                <div>
                                                    <p className="text-sm text-purple-300 font-semibold">
                                                        Internal Professional Training
                                                    </p>
                                                    <p className="text-sm text-white/45 mt-2 leading-6">
                                                        During my time at Continental Automotive, I completed professional training in quality management, quality tools, SQL and Power BI, strengthening my practical knowledge across quality engineering, data analysis and business intelligence.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-6">
                                                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                                                    QMS Tools
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                                                    Quality Tools
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                                                    SQL
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                                                    Power BI
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================= CURRENTLY LEARNING ================= */}
                            <div>
                                <div className="flex items-end justify-between mb-8">
                                    <div>
                                        <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
                                            In Progress
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                                            Currently Learning
                                        </h3>
                                    </div>
                                    <span className="hidden md:block text-white/30 text-sm">
                                        What's next
                                    </span>
                                </div>

                                <div
                                    className="
                                        rounded-[2rem]
                                        border
                                        border-white/10
                                        bg-[#100a20]/80
                                        backdrop-blur-xl
                                        overflow-hidden
                                    "
                                >
                                    <div className="p-6 md:p-7 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="
                                                    w-3
                                                    h-3
                                                    rounded-full
                                                    bg-purple-500
                                                    shadow-lg
                                                    shadow-purple-500/50
                                                    animate-pulse
                                                "
                                            />
                                            <span className="text-sm text-purple-300 font-semibold">
                                                Building my next skill set
                                            </span>
                                        </div>

                                        <p className="text-sm text-white/40 mt-3 leading-6">
                                            I am actively expanding my knowledge in
                                            analytics, business intelligence and
                                            cloud technologies, with a focus on
                                            building practical, connected skills.
                                        </p>
                                    </div>

                                    <div className="divide-y divide-white/10">
                                        {currentCourses.map((course, index) => (
                                            <div
                                                key={index}
                                                className="
                                                    group
                                                    relative
                                                    p-6
                                                    md:p-7
                                                    hover:bg-purple-500/[0.025]
                                                    transition-all
                                                    duration-300
                                                "
                                            >
                                                <div className="flex items-start justify-between gap-5">
                                                    <div className="min-w-0">
                                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                                            <span
                                                                className="
                                                                    text-[11px]
                                                                    uppercase
                                                                    tracking-wider
                                                                    font-semibold
                                                                    text-purple-400
                                                                "
                                                            >
                                                                {course.category}
                                                            </span>
                                                        </div>

                                                        <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                                                            {course.title}
                                                        </h4>

                                                        <p className="text-sm text-white/40 mt-1.5">
                                                            {course.provider}
                                                        </p>

                                                        <p className="text-sm text-white/60 mt-3">
                                                            {course.direction}
                                                        </p>

                                                        {course.link && (
                                                            <a
                                                                href={course.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="
                                                                    inline-flex
                                                                    items-center
                                                                    gap-2
                                                                    mt-4
                                                                    text-sm
                                                                    font-semibold
                                                                    text-purple-400
                                                                    hover:text-purple-300
                                                                    transition-colors
                                                                "
                                                            >
                                                                Course Details
                                                                <span>↗</span>
                                                            </a>
                                                        )}
                                                    </div>

                                                    <span
                                                        className="
                                                            shrink-0
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-[11px]
                                                            font-semibold
                                                            bg-purple-500/10
                                                            border
                                                            border-purple-500/20
                                                            text-purple-300
                                                        "
                                                    >
                                                        {course.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= INSPIRING CREATORS SECTION ================= */}
                    <div className="mb-24">
                        <div className="max-w-4xl mb-12">
                            <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
                                Inspiration
                            </p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                Creators Who Inspire My Growth
                            </h3>
                            <p className="text-white/60 text-base mt-2">
                                Exceptional educators and professionals whose content keeps me pushing forward.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* CREATOR CARD CAROUSEL/VIEW */}
                            <div
                                className="
                                    rounded-[2.5rem]
                                    border
                                    border-purple-500/20
                                    bg-[#100a20]/90
                                    backdrop-blur-xl
                                    p-8
                                    md:p-10
                                    relative
                                    overflow-hidden
                                    shadow-2xl
                                    shadow-purple-950/40
                                "
                            >
                                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

                                <div className="flex items-center gap-5 mb-8 relative z-10">
                                    <img
                                        src={creator.image}
                                        alt={creator.name}
                                        className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-500/30 shadow-lg"
                                    />
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">
                                            {creator.name}
                                        </h4>
                                        <p className="text-sm text-purple-400 font-medium mt-1">
                                            {creator.focus}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                                    "{creator.description}"
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
                                    <div className="flex items-center gap-3">
                                        {creator.website && (
                                            <a
                                                href={creator.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 hover:bg-purple-500/20 transition-all"
                                            >
                                                Website ↗
                                            </a>
                                        )}
                                        {creator.youtube && (
                                            <a
                                                href={creator.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-300 hover:bg-red-500/20 transition-all"
                                            >
                                                YouTube Channel ↗
                                            </a>
                                        )}
                                    </div>

                                    {/* CONTROLS */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={previousCreator}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                                            aria-label="Previous creator"
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={nextCreator}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                                            aria-label="Next creator"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* CREATOR SELECTION LIST */}
                            <div className="grid gap-3">
                                {creators.map((c, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveCreator(idx)}
                                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                            activeCreator === idx
                                                ? "bg-purple-500/15 border-purple-500/50 shadow-lg shadow-purple-900/20"
                                                : "bg-[#100a20]/60 border-white/10 hover:border-white/20 hover:bg-purple-500/[0.04]"
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={c.image}
                                                alt={c.name}
                                                className="w-12 h-12 rounded-xl object-cover border border-white/10"
                                            />
                                            <div>
                                                <h5 className="font-bold text-white text-base">
                                                    {c.name}
                                                </h5>
                                                <p className="text-xs text-white/50 mt-0.5">
                                                    {c.focus}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-purple-400">
                                            {activeCreator === idx ? "Viewing" : "Select"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ================= LONG-TERM GOALS ================= */}
                    <div>
                        <div className="max-w-4xl mb-12">
                            <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-2">
                                Vision
                            </p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                Goals & Direction
                            </h3>
                            <p className="text-white/60 text-base mt-2">
                                Where I am steering my professional and personal development.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {goals.map((goal, index) => (
                                <div
                                    key={index}
                                    className="
                                        rounded-[2rem]
                                        border
                                        border-white/10
                                        bg-[#100a20]/80
                                        backdrop-blur-xl
                                        p-6
                                        md:p-7
                                        flex
                                        flex-col
                                        justify-between
                                        hover:border-purple-500/40
                                        hover:bg-purple-500/[0.04]
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <div>
                                        <span className="text-3xl font-black text-purple-400/40 font-mono">
                                            {goal.number}
                                        </span>
                                        <h4 className="text-lg font-bold text-white mt-4 mb-3">
                                            {goal.title}
                                        </h4>
                                        <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                                            {goal.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};