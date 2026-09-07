import {
    Lightbulb,
    Palette,
    GraduationCap,
    BarChart3,
    Sparkles,
    ArrowUpRight,
    Heart,
    Code2,
    School,
} from "lucide-react";


/* =========================================================
   ABOUT ME STORY
========================================================= */

const storyCards = [

    {
        type: "career",
        title: "It started with engineering.",
        subtitle: "And then things got interesting.",
        text:
            "I started my journey in Engineering Management, where I learned to look at problems from more than one angle — processes, people, quality, resources and, eventually, data.",
        image: "/ProfilePhotos/engineering.jpg",
        icon: GraduationCap,
        tag: "THE BEGINNING",
    },

    {
        type: "data",
        title: "Then I discovered the fun part.",
        subtitle: "What was hiding behind the numbers.",
        text:
            "Working with operations and logistics introduced me to a world full of spreadsheets, KPIs and business decisions. I quickly realized that I didn't just want to work with the numbers — I wanted to understand them.",
        image: "/ProfilePhotos/data-analytics.jpg",
        icon: BarChart3,
        tag: "THE PLOT TWIST",
    },

    {
        type: "creative",
        title: "But I'm not only a data person.",
        subtitle: "My creative side refuses to stay quiet.",
        text:
            "Outside analytics, I love visual design, content, branding and creative projects. I actually think this makes me better at analytics — because good data communication is not only about being correct. It's also about making people understand.",
        image: "/ProfilePhotos/creative.jpg",
        icon: Palette,
        tag: "THE OTHER SIDE",
    },

    {
        type: "pinterest",
        title: "I accidentally became a content creator.",
        subtitle: "13K+ followers • 12M+ monthly views",
        text:
            "One of my creative experiments grew into a Pinterest audience of more than 13,000 followers and 12 million monthly views. It taught me a completely different side of analytics: understanding people, trends, attention and what makes content work.",
        image: "/ProfilePhotos/pinterest.jpg",
        icon: Sparkles,
        tag: "SIDE QUEST",
    },

    {
        type: "learning",
        title: "Apparently, I like learning.",
        subtitle: "A little too much sometimes.",
        text:
            "Python, Azure, BI, AI, SQL, Power BI... I tend to get curious about how things work and then fall down a technical rabbit hole. Luckily, that habit has turned into a pretty useful skill.",
        image: "/ProfilePhotos/learning.jpg",
        icon: Lightbulb,
        tag: "CURRENTLY CURIOUS",
    },

    {
        type: "builder",
        title: "I like building things from scratch.",
        subtitle: "Not just talking about ideas.",
        text:
            "That's why I enjoy creating real projects — from analytics workflows and dashboards to this portfolio itself. I like taking something messy, figuring it out and eventually seeing something useful at the other end.",
        image: "/ProfilePhotos/projects.jpg",
        icon: Code2,
        tag: "MAKER MODE",
    },

];


/* =========================================================
   EDUCATION
========================================================= */

const education = [

    {
        title: "Bachelor's Degree",
        faculty: "Faculty of Technical Sciences, Novi Sad",
        degree: "Engineer of Management",

        thesis:
            "Risk Analysis of Using Cryptocurrency and Blockchain in Optimizing Logistics Processes",

        thesisFile: "/Theses/Bachelors-Thesis.pdf",

        logo: "/ProfilePhotos/FTNlogo.png",
        photo: "/ProfilePhotos/bachelor-graduation.jpg",

        icon: Lightbulb,
    },

    {
        title: "Master's Degree",
        faculty: "Faculty of Technical Sciences, Novi Sad",
        degree: "Master Engineer of Management",

        thesis:
            "Risk Analysis of Using Cryptocurrency and Blockchain in Optimizing Logistics Processes",

        thesisFile: "/Theses/Masters-Thesis.pdf",

        logo: "/ProfilePhotos/FTNlogo.png",
        photo: "/ProfilePhotos/master-graduation.jpg",

        icon: School,
    },

];


/* =========================================================
   ABOUT COMPONENT
========================================================= */

export const About = () => {

    return (

        <section
            id="about"
            className="
                py-32
                relative
                overflow-hidden
                bg-gray-100
            "
        >

            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div
                className="
                    absolute
                    top-0
                    right-[-150px]
                    w-[500px]
                    h-[500px]
                    bg-primary/10
                    rounded-full
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    bottom-[15%]
                    left-[-180px]
                    w-[500px]
                    h-[500px]
                    bg-purple-200/40
                    rounded-full
                    blur-3xl
                "
            />


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div className="container mx-auto px-6 relative z-10">


                {/* =================================================
                    INTRO
                ================================================= */}

                <div
                    className="
                        max-w-4xl
                        mx-auto
                        text-center
                        mb-24
                        animate-fade-in
                    "
                >

                    <span
                        className="
                            text-primary
                            text-sm
                            font-medium
                            tracking-[0.25em]
                            uppercase
                        "
                    >
                        A little more about me
                    </span>


                    <h2
                        className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            leading-tight
                            mt-4
                        "
                    >

                        More than just

                        <span
                            className="
                                text-primary
                                italic
                                font-serif
                            "
                        >
                            {" "}data & dashboards
                        </span>

                    </h2>


                    <p
                        className="
                            text-gray-600
                            text-lg
                            md:text-xl
                            leading-relaxed
                            mt-7
                            max-w-3xl
                            mx-auto
                        "
                    >
                        I'm an engineer who somehow ended up combining
                        logistics, quality, analytics, marketing, creativity
                        and a slightly obsessive curiosity about how things
                        work.
                    </p>

                </div>



                {/* =================================================
                    "SHORT VERSION" INTRO CARD
                ================================================= */}

                <div className="max-w-5xl mx-auto mb-28">

                    <div
                        className="
                            glass
                            rounded-[2rem]
                            p-8
                            md:p-12
                            shadow-[0_20px_60px_rgba(88,28,135,0.18)]
                            border
                            border-white/70
                            animate-fade-in
                        "
                    >

                        <div
                            className="
                                grid
                                md:grid-cols-[180px_1fr]
                                gap-10
                                items-center
                            "
                        >

                            {/* PHOTO */}

                            <div
                                className="
                                    relative
                                    w-40
                                    h-40
                                    mx-auto
                                    md:mx-0
                                    rounded-[2rem]
                                    overflow-hidden
                                    shadow-xl
                                    rotate-[-4deg]
                                "
                            >

                                <img
                                    src="/ProfilePhotos/about-me.jpg"
                                    alt="About me"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                            </div>


                            {/* TEXT */}

                            <div>

                                <p
                                    className="
                                        text-primary
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        font-semibold
                                        mb-3
                                    "
                                >
                                    The short version
                                </p>


                                <p
                                    className="
                                        text-xl
                                        md:text-2xl
                                        text-gray-700
                                        leading-relaxed
                                    "
                                >
                                    I like solving problems, learning new
                                    things and building things from scratch.
                                    Sometimes that's a Power BI dashboard.
                                    Sometimes it's a website. Sometimes it's
                                    something completely unrelated to work.
                                </p>


                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                        mt-6
                                    "
                                >

                                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                                        Curious
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                                        Analytical
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                                        Creative
                                    </span>

                                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                                        Always learning
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                {/* =================================================
                    MY STORY
                ================================================= */}

                <div className="max-w-6xl mx-auto">

                    <div className="flex items-center gap-4 mb-12">

                        <div className="w-12 h-px bg-primary/40" />

                        <span
                            className="
                                text-primary
                                text-sm
                                uppercase
                                tracking-[0.2em]
                                font-medium
                            "
                        >
                            My story
                        </span>

                        <div className="flex-1 h-px bg-gray-300" />

                    </div>


                    {/* =================================================
                        STORY CARD 1
                    ================================================= */}

                    <div
                        className="
                            grid
                            lg:grid-cols-[1.1fr_0.9fr]
                            gap-8
                            items-center
                            mb-16
                            animate-fade-in
                        "
                    >

                        <div
                            className="
                                bg-white
                                rounded-[2rem]
                                p-8
                                md:p-10
                                shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                border
                                border-gray-200
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-primary/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>

                                <span className="text-xs uppercase tracking-widest text-gray-400">
                                    The beginning
                                </span>

                            </div>


                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                It started with engineering.
                            </h3>

                            <p className="text-primary font-medium mb-5">
                                And then things got interesting.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                I started my journey in Engineering Management,
                                where I learned to look at problems from more
                                than one angle — processes, people, quality,
                                resources and, eventually, data.
                            </p>

                        </div>


                        <div
                            className="
                                relative
                                h-[320px]
                                rounded-[2rem]
                                overflow-hidden
                                shadow-xl
                                group
                            "
                        >

                            <img
                                src="/ProfilePhotos/engineering.jpg"
                                alt="Engineering journey"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/50
                                    to-transparent
                                "
                            />

                            <span
                                className="
                                    absolute
                                    bottom-6
                                    left-6
                                    text-white
                                    text-sm
                                    font-medium
                                "
                            >
                                Where it all began
                            </span>

                        </div>

                    </div>



                    {/* =================================================
                        STORY CARD 2 — REVERSED
                    ================================================= */}

                    <div
                        className="
                            grid
                            lg:grid-cols-[0.9fr_1.1fr]
                            gap-8
                            items-center
                            mb-16
                            animate-fade-in
                        "
                    >

                        <div
                            className="
                                relative
                                h-[320px]
                                rounded-[2rem]
                                overflow-hidden
                                shadow-xl
                                group
                                lg:order-1
                            "
                        >

                            <img
                                src="/ProfilePhotos/data-analytics.jpg"
                                alt="Data analytics"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/50
                                    to-transparent
                                "
                            />

                            <div
                                className="
                                    absolute
                                    bottom-6
                                    left-6
                                    right-6
                                    text-white
                                "
                            >

                                <p className="text-xs uppercase tracking-widest opacity-80">
                                    The plot twist
                                </p>

                                <p className="font-semibold mt-1">
                                    Numbers started telling a story.
                                </p>

                            </div>

                        </div>


                        <div
                            className="
                                bg-white
                                rounded-[2rem]
                                p-8
                                md:p-10
                                shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                border
                                border-gray-200
                                lg:order-2
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-primary/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <BarChart3 className="w-5 h-5 text-primary" />
                                </div>

                                <span className="text-xs uppercase tracking-widest text-gray-400">
                                    The plot twist
                                </span>

                            </div>


                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Then I discovered the fun part.
                            </h3>

                            <p className="text-primary font-medium mb-5">
                                What was hiding behind the numbers.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                Working with operations and logistics
                                introduced me to a world full of spreadsheets,
                                KPIs and business decisions. I quickly realized
                                that I didn't just want to work with the
                                numbers — I wanted to understand them.
                            </p>

                        </div>

                    </div>



                    {/* =================================================
                        CREATIVE + PINTEREST FEATURE
                    ================================================= */}

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-8
                            mb-16
                            animate-fade-in
                        "
                    >

                        {/* CREATIVE */}

                        <div
                            className="
                                bg-white
                                rounded-[2rem]
                                overflow-hidden
                                shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                border
                                border-gray-200
                                group
                            "
                        >

                            <div className="relative h-64 overflow-hidden">

                                <img
                                    src="/ProfilePhotos/creative.jpg"
                                    alt="Creative side"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        top-5
                                        left-5
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-white/90
                                        text-xs
                                        text-gray-700
                                        font-medium
                                    "
                                >
                                    THE OTHER SIDE
                                </div>

                            </div>


                            <div className="p-8">

                                <div className="flex items-center gap-3 mb-4">

                                    <Palette className="w-5 h-5 text-primary" />

                                    <span className="text-primary text-sm font-medium">
                                        Not everything is about SQL
                                    </span>

                                </div>


                                <h3 className="text-2xl font-bold mb-4">
                                    But I'm not only a data person.
                                </h3>


                                <p className="text-gray-600 leading-relaxed">
                                    Outside analytics, I love visual design,
                                    content, branding and creative projects.
                                    My analytical and creative sides actually
                                    work pretty well together.
                                </p>

                            </div>

                        </div>



                        {/* PINTEREST */}

                        <div
                            className="
                                bg-primary
                                text-white
                                rounded-[2rem]
                                overflow-hidden
                                shadow-[0_25px_70px_rgba(88,28,135,0.28)]
                                relative
                                group
                            "
                        >

                            <div className="relative h-64 overflow-hidden">

                                <img
                                    src="/ProfilePhotos/pinterest.jpg"
                                    alt="Pinterest creator project"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        opacity-80
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-primary/50
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        top-5
                                        left-5
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-white/20
                                        backdrop-blur-sm
                                        text-xs
                                        font-medium
                                    "
                                >
                                    SIDE QUEST
                                </div>

                            </div>


                            <div className="p-8">

                                <div className="flex items-center gap-3 mb-4">

                                    <Sparkles className="w-5 h-5" />

                                    <span className="text-white/80 text-sm">
                                        13K+ followers • 12M+ monthly views
                                    </span>

                                </div>


                                <h3 className="text-2xl font-bold mb-4">
                                    I accidentally became a content creator.
                                </h3>


                                <p className="text-white/80 leading-relaxed">
                                    One of my creative experiments grew into a
                                    Pinterest audience. It taught me a completely
                                    different side of analytics — understanding
                                    people, trends, attention and what makes
                                    content work.
                                </p>

                            </div>

                        </div>

                    </div>



                    {/* =================================================
                        LEARNING + BUILDING
                    ================================================= */}

                    <div
                        className="
                            grid
                            lg:grid-cols-[0.8fr_1.2fr]
                            gap-8
                            mb-28
                            animate-fade-in
                        "
                    >

                        {/* LEARNING */}

                        <div
                            className="
                                bg-white
                                rounded-[2rem]
                                p-8
                                shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                border
                                border-gray-200
                            "
                        >

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-primary/10
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                "
                            >
                                <Lightbulb className="w-6 h-6 text-primary" />
                            </div>


                            <span className="text-xs uppercase tracking-widest text-gray-400">
                                Currently curious
                            </span>


                            <h3 className="text-2xl font-bold mt-3 mb-4">
                                Apparently, I like learning.
                            </h3>


                            <p className="text-primary font-medium mb-4">
                                A little too much sometimes.
                            </p>


                            <p className="text-gray-600 leading-relaxed">
                                Python, Azure, BI, AI, SQL, Power BI... I tend
                                to get curious about how things work and then
                                fall down a technical rabbit hole. Luckily,
                                that habit has turned into a pretty useful
                                skill.
                            </p>


                            <div className="flex flex-wrap gap-2 mt-7">

                                {[
                                    "Python",
                                    "SQL",
                                    "Power BI",
                                    "Azure",
                                    "AI",
                                ].map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            px-3
                                            py-1.5
                                            rounded-full
                                            bg-gray-100
                                            text-gray-600
                                            text-xs
                                        "
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>



                        {/* BUILDING */}

                        <div
                            className="
                                relative
                                rounded-[2rem]
                                overflow-hidden
                                min-h-[420px]
                                shadow-[0_25px_70px_rgba(88,28,135,0.25)]
                                group
                            "
                        >

                            <img
                                src="/ProfilePhotos/projects.jpg"
                                alt="Projects"
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                "
                            />


                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/80
                                    via-black/30
                                    to-transparent
                                "
                            />


                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    right-0
                                    p-8
                                    md:p-10
                                    text-white
                                "
                            >

                                <div className="flex items-center gap-3 mb-4">

                                    <Code2 className="w-6 h-6" />

                                    <span className="text-xs uppercase tracking-widest text-white/70">
                                        Maker mode
                                    </span>

                                </div>


                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    I like building things from scratch.
                                </h3>


                                <p className="text-white/80 leading-relaxed max-w-xl">
                                    That's why I enjoy creating real projects —
                                    from analytics workflows and dashboards to
                                    this portfolio itself. I like taking
                                    something messy, figuring it out and seeing
                                    something useful at the other end.
                                </p>

                            </div>

                        </div>

                    </div>



                    {/* =================================================
                        EDUCATION
                    ================================================= */}

                    <div className="mb-28">

                        <div className="flex items-center gap-4 mb-12">

                            <div className="w-12 h-px bg-primary/40" />

                            <span
                                className="
                                    text-primary
                                    text-sm
                                    uppercase
                                    tracking-[0.2em]
                                    font-medium
                                "
                            >
                                The academic chapter
                            </span>

                            <div className="flex-1 h-px bg-gray-300" />

                        </div>


                        <div className="grid md:grid-cols-2 gap-7">

                            {/* BACHELOR */}

                            <div
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-[2rem]
                                    p-7
                                    shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                    animate-fade-in
                                "
                            >

                                <div className="flex items-center justify-between mb-6">

                                    <div
                                        className="
                                            w-24
                                            h-24
                                            rounded-2xl
                                            bg-gray-50
                                            border
                                            border-gray-200
                                            flex
                                            items-center
                                            justify-center
                                            p-3
                                        "
                                    >

                                        <img
                                            src="/ProfilePhotos/FTNlogo.png"
                                            alt="Faculty of Technical Sciences logo"
                                            className="w-full h-full object-contain"
                                        />

                                    </div>


                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-primary/10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <GraduationCap className="w-6 h-6 text-primary" />

                                    </div>

                                </div>


                                <h3 className="text-xl font-bold text-gray-900">
                                    Bachelor's Degree
                                </h3>


                                <p className="text-gray-500 text-sm mt-2">
                                    Faculty of Technical Sciences, Novi Sad
                                </p>


                                <p className="text-sm font-semibold text-primary mt-3">
                                    Engineer of Management
                                </p>


                                <div className="relative overflow-hidden rounded-xl mt-6 mb-6">

                                    <img
                                        src="/ProfilePhotos/bachelor-graduation.jpg"
                                        alt="Bachelor's graduation"
                                        className="
                                            w-full
                                            h-44
                                            object-cover
                                            transition-transform
                                            duration-500
                                            hover:scale-105
                                        "
                                    />

                                </div>


                                <div className="border-t border-gray-200 pt-5">

                                    <span className="text-xs uppercase tracking-wider text-gray-400">
                                        Thesis
                                    </span>


                                    <p className="text-sm font-medium italic text-gray-600 mt-2 leading-relaxed">
                                        Risk Analysis of Using Cryptocurrency
                                        and Blockchain in Optimizing Logistics
                                        Processes
                                    </p>


                                    <a
                                        href="/Theses/Bachelors-Thesis.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            mt-5
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-primary
                                            text-white
                                            text-sm
                                            font-medium
                                            hover:bg-primary-dark
                                            transition-all
                                        "
                                    >

                                        <ArrowUpRight className="w-4 h-4" />

                                        View Full Thesis

                                    </a>

                                </div>

                            </div>



                            {/* MASTER */}

                            <div
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-[2rem]
                                    p-7
                                    shadow-[0_20px_60px_rgba(88,28,135,0.15)]
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                    animate-fade-in
                                "
                            >

                                <div className="flex items-center justify-between mb-6">

                                    <div
                                        className="
                                            w-24
                                            h-24
                                            rounded-2xl
                                            bg-gray-50
                                            border
                                            border-gray-200
                                            flex
                                            items-center
                                            justify-center
                                            p-3
                                        "
                                    >

                                        <img
                                            src="/ProfilePhotos/FTNlogo.png"
                                            alt="Faculty of Technical Sciences logo"
                                            className="w-full h-full object-contain"
                                        />

                                    </div>


                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-primary/10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <GraduationCap className="w-6 h-6 text-primary" />

                                    </div>

                                </div>


                                <h3 className="text-xl font-bold text-gray-900">
                                    Master's Degree
                                </h3>


                                <p className="text-gray-500 text-sm mt-2">
                                    Faculty of Technical Sciences, Novi Sad
                                </p>


                                <p className="text-sm font-semibold text-primary mt-3">
                                    Master Engineer of Management
                                </p>


                                <div className="relative overflow-hidden rounded-xl mt-6 mb-6">

                                    <img
                                        src="/ProfilePhotos/master-graduation.jpg"
                                        alt="Master's graduation"
                                        className="
                                            w-full
                                            h-44
                                            object-cover
                                            transition-transform
                                            duration-500
                                            hover:scale-105
                                        "
                                    />

                                </div>


                                <div className="border-t border-gray-200 pt-5">

                                    <span className="text-xs uppercase tracking-wider text-gray-400">
                                        Thesis
                                    </span>


                                    <p className="text-sm font-medium italic text-gray-600 mt-2 leading-relaxed">
                                        Risk Analysis of Using Cryptocurrency
                                        and Blockchain in Optimizing Logistics
                                        Processes
                                    </p>


                                    <a
                                        href="/Theses/Masters-Thesis.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            mt-5
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-primary
                                            text-white
                                            text-sm
                                            font-medium
                                            hover:bg-primary-dark
                                            transition-all
                                        "
                                    >

                                        <ArrowUpRight className="w-4 h-4" />

                                        View Full Thesis

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* =================================================
                        FINAL PERSONAL MESSAGE
                    ================================================= */}

                    <div className="max-w-5xl mx-auto">

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[2.5rem]
                                bg-primary
                                text-white
                                shadow-[0_30px_80px_rgba(88,28,135,0.30)]
                            "
                        >

                            {/* Decorative circles */}

                            <div
                                className="
                                    absolute
                                    -top-28
                                    -right-20
                                    w-72
                                    h-72
                                    rounded-full
                                    bg-white/10
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -bottom-32
                                    -left-24
                                    w-80
                                    h-80
                                    rounded-full
                                    bg-white/10
                                "
                            />


                            <div
                                className="
                                    relative
                                    z-10
                                    p-9
                                    md:p-14
                                    text-center
                                "
                            >

                                <Heart
                                    className="
                                        w-8
                                        h-8
                                        mx-auto
                                        mb-6
                                        text-white/80
                                    "
                                />


                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.25em]
                                        text-white/70
                                        mb-4
                                    "
                                >
                                    And the important part
                                </p>


                                <h3
                                    className="
                                        text-3xl
                                        md:text-4xl
                                        font-bold
                                        mb-6
                                    "
                                >
                                    I'm curious, I care, and I like making
                                    things better.
                                </h3>


                                <p
                                    className="
                                        text-white/80
                                        text-lg
                                        leading-relaxed
                                        max-w-2xl
                                        mx-auto
                                    "
                                >
                                    I enjoy working with people, asking
                                    questions, learning from others and
                                    turning ideas into something real. If you
                                    have an interesting problem, project or
                                    idea, I'm always happy to talk.
                                </p>


                                <div
                                    className="
                                        mt-8
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-sm
                                        font-medium
                                    "
                                >

                                    <span>
                                        Let's connect
                                    </span>

                                    <ArrowUpRight className="w-4 h-4" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};
