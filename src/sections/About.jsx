
import { useEffect, useRef } from "react";
import {
    GraduationCap,
    BookOpen,
    BriefcaseBusiness,
    Sparkles,
    Lightbulb,
    ExternalLink,
} from "lucide-react";

export const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return;

        const revealElements = currentSection.querySelectorAll(
            "[data-about-reveal]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("about-reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        revealElements.forEach((element, index) => {
            element.classList.add("about-reveal");
            element.style.transitionDelay = `${(index % 5) * 100}ms`;
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative">

            {/* BACKGROUND */}

            <div
                aria-hidden="true"
                style={{ position: "fixed", inset: 0 }}
                className="pointer-events-none overflow-hidden -z-50 bg-[#09050D]"
            >
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09050D] to-transparent z-10" />

                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />

                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />

                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />

                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09050D] to-transparent z-10" />
            </div>


            {/* ABOUT SECTION */}

            <section
                id="about"
                ref={sectionRef}
                className="min-h-[100svh] pt-20 pb-6 relative text-white flex flex-col justify-center"
            >
                <div className="container mx-auto px-5 lg:px-8 relative z-10 max-w-[1250px]">


                    {/* INTRODUCTION */}

                    <div
                        data-about-reveal
                        className="flex flex-col items-center mb-9"
                    >
                        <div className="w-full max-w-3xl mx-auto text-center">

                            <span
                                data-about-reveal
                                className="text-purple-400 text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase"
                            >
                                MY JOURNEY
                            </span>

                            <h2
                                data-about-reveal
                                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-3"
                            >
                                Curiously
                                <br />
                                <span className="text-purple-300 italic font-serif">
                                    Driven by Improvement.
                                </span>
                            </h2>

                            <div
                                data-about-reveal
                                className="w-14 h-px bg-purple-400/50 mx-auto mt-8 mb-8"
                            />

                            <div className="max-w-xl mx-auto text-justify">

                                <p
                                    data-about-reveal
                                    className="text-gray-300 text-sm md:text-base leading-[1.85] text-justify"
                                >
                                    Detail-oriented and naturally curious, I am motivated by
                                    finding better ways to approach challenges and make things
                                    work. I enjoy learning new skills, exploring tools, taking
                                    on unfamiliar topics, and developing new KPIs. For me,
                                    growth means staying open to new perspectives, continuously
                                    learning, and finding meaningful ways to add value.
                                </p>

                                <p
                                    data-about-reveal
                                    className="text-gray-300 text-sm md:text-base leading-[1.85] text-justify mt-4"
                                >
                                    I bring initiative, adaptability, and a genuine commitment
                                    to improvement to everything I do. I enjoy turning complex
                                    data, operational challenges, and business processes into
                                    clear insights and practical solutions that support better
                                    decisions, improve performance, and create measurable value.
                                </p>

                            </div>

                        </div>
                    </div>


                    {/* MAIN TITLE */}

                    <div className="mb-5 md:mb-6">

                    </div>


                    {/* IRREGULAR PUZZLE MOSAIC */}

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-[190px] gap-4 lg:gap-4 max-w-[1120px] mx-auto"
                    >


                        {/* CAREER STORY */}

                        <div
                            data-about-reveal
                            className="lg:col-start-1 lg:col-span-4 lg:row-span-2 lg:min-h-[392px] relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b1745] via-[#1c102c] to-[#110a1c] border border-purple-300/20 p-5 md:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-purple-300/50 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(88,28,135,0.25)]"
                        >

                            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all" />

                            <div className="relative z-10 max-w-[95%]">

                                <div
                                    data-about-reveal
                                    className="flex items-center gap-3 mb-5"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-purple-400/15 flex items-center justify-center">
                                        <BriefcaseBusiness className="w-5 h-5 text-purple-300" />
                                    </div>

                                    <span className="text-[11px] md:text-xs text-left uppercase tracking-[0.2em] text-purple-300 font-bold">
                                        My Career Story
                                    </span>
                                </div>


                                <div className="space-y-5">

                                    <div
                                        data-about-reveal
                                        className="border-l-2 border-purple-400/60 pl-4"
                                    >
                                        <h4 className="text-white text-sm md:text-base font-bold">
                                            Logistics & Supply Chain
                                        </h4>

                                        <p className="text-purple-200/80 text-xs md:text-sm leading-relaxed mt-2 text-justify max-w-[95%]">
                                            As a Inventory & Supply Manager, I learned to
                                            understand operations from the
                                            inside: inventory, suppliers,
                                            coordination and the impact
                                            of everyday decisions on business
                                            performance.
                                        </p>
                                    </div>


                                    <div
                                        data-about-reveal
                                        className="border-l-2 border-purple-400/60 pl-4"
                                    >
                                        <h4 className="text-white text-sm md:text-base font-bold">
                                            Quality Engineering & Analytics
                                        </h4>

                                        <p className="text-purple-200/80 text-xs md:text-sm leading-relaxed mt-2 text-justify max-w-[95%]">
                                            At Continental, I developed a
                                            stronger analytical perspective
                                            through KPIs, reporting, quality
                                            monitoring, process improvement,
                                            and cross-functional collaboration.
                                        </p>
                                    </div>


                                    <div
                                        data-about-reveal
                                        className="border-l-2 border-purple-400/60 pl-4"
                                    >
                                        <h4 className="text-white text-sm md:text-base font-bold">
                                            Analytics & Digital Projects
                                        </h4>

                                        <p className="text-purple-200/80 text-xs md:text-sm leading-relaxed mt-2 text-justify max-w-[95%]">
                                            Today, I bring these experiences
                                            together through data analytics,
                                            BI reporting, digital marketing,
                                            and web development, continuously
                                            exploring new ways to turn ideas
                                            into practical solutions.
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div
                                data-about-reveal
                                className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center gap-3"
                            >

                                <span className="text-xs md:text-sm text-purple-200 font-semibold tracking-wide">
                                    Every experience added another piece.
                                </span>
                            </div>

                        </div>



                        {/* BACHELOR'S DEGREE */}

                        <div
                            data-about-reveal
                            className="lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:min-h-[190px] relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E9DFFF] to-[#D5C2F5] border border-purple-100 p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(88,28,135,0.2)] group"
                        >

                            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-purple-100 blur-2xl" />

                            <div className="relative z-10">

                                <div
                                    data-about-reveal
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-purple-700" />
                                    </div>

                                    <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-purple-500 font-bold">
                                        Bachelor's Degree
                                    </span>
                                </div>

                                <h3
                                    data-about-reveal
                                    className="text-lg md:text-xl font-bold text-gray-900 leading-snug"
                                >
                                    Engineer of Management
                                </h3>

                                <p
                                    data-about-reveal
                                    className="text-purple-700 text-xs md:text-sm font-semibold mt-3"
                                >
                                    Faculty of Technical Sciences
                                </p>

                                <p
                                    data-about-reveal
                                    className="text-gray-500 text-xs md:text-sm mt-1"
                                >
                                    University of Novi Sad
                                </p>

                            </div>


                            <div className="relative z-10 pt-3 mt-4 border-t border-purple-100 flex items-center justify-end">

                            </div>

                        </div>



                        {/* MASTER'S DEGREE */}

                        <div
                            data-about-reveal
                            className="lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:min-h-[190px] relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E9DFFF] to-[#D5C2F5] border border-purple-200 p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(88,28,135,0.2)] group"
                        >

                            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/30 blur-2xl" />

                            <div className="relative z-10">

                                <div
                                    data-about-reveal
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-white/70 flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-purple-700" />
                                    </div>

                                    <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-purple-700 font-bold">
                                        Master's Degree
                                    </span>
                                </div>

                                <h3
                                    data-about-reveal
                                    className="text-lg md:text-xl font-bold text-purple-950 leading-snug"
                                >
                                    Master Engineer of Management
                                </h3>

                                <p
                                    data-about-reveal
                                    className="text-purple-800 text-xs md:text-sm font-semibold mt-3"
                                >
                                    Faculty of Technical Sciences
                                </p>

                                <p
                                    data-about-reveal
                                    className="text-purple-800/70 text-xs md:text-sm mt-1"
                                >
                                    University of Novi Sad
                                </p>

                            </div>


                            <div className="relative z-10 pt-3 mt-4 border-t border-purple-400/30 flex items-center justify-end">

                                <a
                                    data-about-reveal
                                    href="/Masters-Thesis.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-purple-900 hover:text-purple-950 transition-colors"
                                >
                                    View Thesis <ExternalLink className="w-4 h-4" />
                                </a>

                            </div>

                        </div>



                        {/* PINTEREST & CREATIVITY */}

                        <div
                            data-about-reveal
                            className="lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-2 min-h-[280px] lg:min-h-[392px] relative overflow-hidden rounded-2xl bg-[#5014A6] border border-purple-300/30 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(88,28,135,0.3)]"
                        >

                            <img
                                src="/ProfilePhotos/pinterest.jpg"
                                alt="Creative Pinterest projects"
                                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-br from-[#32105F]/95 via-[#5014A6]/90 to-[#170925]/95" />


                            <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-between">

                                <div className="max-w-[95%]">

                                    <div
                                        data-about-reveal
                                        className="flex items-center gap-2 mb-8"
                                    >

                                        <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-purple-200 font-bold">
                                            Beyond My Professional Life
                                        </span>
                                    </div>


                                    <h3
                                        data-about-reveal
                                        className="text-xl md:text-2xl font-bold leading-tight mb-3"
                                    >
                                        Creativity Has Its Own
                                        <span className="block text-purple-200 italic font-serif">
                                            Data Story.
                                        </span>
                                    </h3>


                                    <p
                                        data-about-reveal
                                        className="text-purple-100/85 text-sm leading-relaxed text-justify max-w-[95%]"
                                    >
                                        I have always enjoyed combining
                                        creativity with curiosity and data.
                                        That led me to growing a hobby Pinterest
                                        profile into an audience of more than
                                        20,000 followers and over 12 million
                                        monthly views.
                                    </p>


                                    <div
                                        data-about-reveal
                                        className="grid grid-cols-2 gap-3 mt-5"
                                    >

                                        <div className="rounded-xl bg-white/10 border border-white/10 p-3 md:p-4">
                                            <p className="text-2xl md:text-3xl font-bold text-white">
                                                20K+
                                            </p>

                                            <p className="text-[10px] md:text-xs text-purple-200 uppercase tracking-wider mt-2">
                                                Followers
                                            </p>
                                        </div>


                                        <div className="rounded-xl bg-white/10 border border-white/10 p-3 md:p-4">
                                            <p className="text-2xl md:text-3xl font-bold text-white">
                                                12M+
                                            </p>

                                            <p className="text-[10px] md:text-xs text-purple-200 uppercase tracking-wider mt-2">
                                                Monthly Views
                                            </p>
                                        </div>

                                    </div>

                                </div>


                                <div
                                    data-about-reveal
                                    className="mt-4 pt-4 border-t border-white/15 max-w-[95%]"
                                >

                                    <div className="flex items-center gap-3 mb-2">
                                        <Lightbulb className="w-5 h-5 text-purple-200" />

                                        <span className="text-sm font-bold text-white">
                                            And when I am not working...
                                        </span>
                                    </div>

                                    <p className="text-purple-100/85 text-xs md:text-sm leading-relaxed text-justify max-w-[95%]">
                                        You will probably find me crocheting,
                                        creating something by hand, or
                                        exploring a new diy project. I enjoy the
                                        balance between analytical thinking
                                        and creative expression.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* CLOSING CARD */}

                    <div
                        data-about-reveal
                        className="mt-5 rounded-2xl border border-purple-300/20 bg-gradient-to-br from-purple-950/60 via-[#160d24]/90 to-purple-950/50 p-6 md:p-9 flex flex-col items-center text-center shadow-[0_12px_40px_rgba(88,28,135,0.12)]"
                    >

                        <div
                            data-about-reveal
                            className="flex items-center justify-center gap-3 mb-4"
                        >

                            <Sparkles className="w-5 h-5 text-purple-300" />

                            <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-300">
                                My Approach
                            </span>

                        </div>

                        <h3
                            data-about-reveal
                            className="text-xl md:text-2xl font-semibold text-white leading-snug max-w-3xl mb-5"
                        >
                            Good Analytics Should Do More Than Present Just Numbers.
                        </h3>

                        <div className="w-16 h-px bg-purple-400/50 mb-5" />

                        <p
                            data-about-reveal
                            className="w-full max-w-xl mx-auto text-sm md:text-base leading-[1.9] text-white/75 text-justify"
                        >
                            It should help people understand what is happening, why it matters,
                            and what can be done better. My goal is to make complex data
                            easier to understand, support confident decision-making,
                            and help teams & businesses improve the way they work.

                            Whether I am reviewing a KPI, understanding
                            an operational process, or measuring a
                            campaign, my goal remains the same: to keep
                            learning, identify opportunities, and turn
                            ideas into improvements that make a difference.
                        </p>

                    </div>

                </div>


                {/* ANIMATIONS */}

                <style>{`
                    .about-reveal {
                        opacity: 0;
                        transform: translateY(28px);
                        transition:
                            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
                            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
                        will-change: opacity, transform;
                    }

                    .about-reveal.about-reveal-visible {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .about-reveal {
                            opacity: 1 !important;
                            transform: none !important;
                            transition: none !important;
                            will-change: auto;
                        }
                    }

                    @media (min-width: 1024px) and (max-height: 850px) {
                        #about {
                            padding-top: 5rem;
                            padding-bottom: 1rem;
                        }

                        #about .container {
                            max-width: 1150px;
                        }
                    }
                `}</style>

            </section>
        </div>
    );
};

export default About;
