import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    BarChart3,
    Megaphone,
    Code2,
    ArrowUpRight,
    Check,
} from "lucide-react";
import {
    FaMeta,
    FaInstagram,
    FaGoogle,
    FaPinterest,
    FaLinkedinIn,
} from "react-icons/fa6";

const services = [
    {
        id: "analytics",
        number: "01",
        title: "Data Analytics",
        shortTitle: "Analytics",
        description:
            "Turning complex data into clear insights, reliable reporting and decision-ready business intelligence.",
        technologies: [
            "SQL",
            "Power BI",
            "DAX",
            "Power Query",
            "Python",
            "Azure",
            "ETL",
        ],
        icon: BarChart3,
        features: [
            "Data cleaning & transformation",
            "Advanced data analysis",
            "Interactive BI dashboards",
            "KPI frameworks & tracking",
            "Data quality & validation",
            "Automated reporting",
        ],
    },
    {
        id: "web",
        number: "02",
        title: "Web Development",
        shortTitle: "Web Development",
        description:
            "Creating modern, responsive websites with clean interfaces, thoughtful interactions and a strong visual identity.",
        technologies: [
            "React",
            "Tailwind CSS",
            "Vite",
            "Frontend Development",
            "UI/UX Design",
            "SEO",
            "GA4",
            "Search Console",
            "Google Ads",
        ],
        icon: Code2,
        features: [
            "Modern UI development",
            "Contact & lead forms",
            "Hosting, SSL & backup",
            "Analytics & GA4 integration",
            "On-page SEO optimization",
            "E-commerce & shopping carts",
        ],
    },
    {
        id: "ads",
        number: "03",
        title: "Ads Management",
        shortTitle: "Ads Management",
        description:
            "Managing and analyzing digital advertising campaigns with a focus on performance, measurable results and continuous improvement.",
        technologies: [
            "GA4",
            "Google Tag Manager",
            "Looker Studio",
            "Meta Business Suite",
            "Excel",
            "Power BI",
        ],
        icon: Megaphone,
        features: [
            "Campaign strategy & setup",
            "Audience targeting & segmentation",
            "Budget & bidding management",
            "Conversion tracking",
            "Performance monitoring",
            "A/B testing & optimization",
        ],
    },
];

export const Services = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    // Reveal the section once earlier, preventing scroll-pop bugs.
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
        <>
            {/* FIXED CONTINUOUS BACKGROUND - INDEPENDENT OF CONTENT ANIMATIONS */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#09050D]">
                {/* EXTENDED TOP BACKGROUND BLEND */}
                <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#09050D] via-[#09050D]/90 to-transparent z-10" />

                {/* BACKGROUND GRID */}
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* PURPLE AMBIENT GLOWS */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />

                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />

                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />

                {/* EXTENDED BOTTOM BACKGROUND BLEND */}
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#09050D] via-[#09050D]/90 to-transparent z-10" />
            </div>

            <section
                id="services"
                ref={sectionRef}
                className="relative isolate overflow-hidden text-white pt-16 pb-24 md:pt-20 md:pb-28"
            >
                {/* TOP SEAMLESS TRANSITION */}
                <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-80 pointer-events-none z-0 bg-gradient-to-b from-[#09050D] via-[#09050D]/80 to-transparent"
                />

                {/* BOTTOM SEAMLESS TRANSITION */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-0 bg-gradient-to-t from-[#09050D] via-[#09050D]/80 to-transparent"
                />

                <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-12 relative z-10">

                    {/* ================= HERO ================= */}
                    <div
                        className={`pb-16 max-w-3xl transition-all ${
                            isInView ? "hero-fade-in-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-primary text-sm font-medium tracking-wider uppercase">
                            Services
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-white">
                            What I can
                            <span className="text-primary"> build </span>
                            for you.
                        </h1>

                        <p className="text-gray-300 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
                            From turning complex data into clear insights to
                            creating digital experiences, I combine analytical
                            thinking with creative problem solving.
                        </p>
                    </div>

                    {/* ================= SERVICES GRID ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                        {services.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`
                                        relative
                                        rounded-[2rem]
                                        overflow-hidden
                                        bg-white
                                        border
                                        border-gray-200
                                        shadow-[0_20px_60px_rgba(88,28,135,0.08)]
                                        flex
                                        flex-col
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1.5
                                        hover:shadow-[0_30px_90px_rgba(88,28,135,0.16)]
                                        p-8
                                        group
                                        ${isInView ? "hero-fade-in-up" : "opacity-0"}
                                    `}
                                    style={{
                                        animationDelay: `${0.2 + index * 0.15}s`,
                                    }}
                                >
                                    {/* LARGE BACKGROUND NUMBER */}
                                    <div
                                        className="
                                            absolute
                                            -right-4
                                            -top-10
                                            text-[180px]
                                            font-black
                                            leading-none
                                            text-purple-50
                                            select-none
                                            pointer-events-none
                                            transition-colors
                                            duration-300
                                            group-hover:text-purple-100/60
                                        "
                                    >
                                        {item.number}
                                    </div>

                                    {/* TOP HEADER */}
                                    <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                                        <div>
                                            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                                                Service {item.number}
                                            </span>
                                            <h3 className="text-2xl font-bold text-gray-900 mt-2">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-primary group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* DESCRIPTION */}
                                    <p className="relative z-10 text-gray-600 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    {/* ADS PLATFORMS */}
                                    {item.id === "ads" && (
                                        <div className="relative z-10 flex flex-wrap gap-1.5 mb-6">
                                            {[
                                                { name: "Meta", icon: FaMeta },
                                                { name: "Instagram", icon: FaInstagram },
                                                { name: "Google", icon: FaGoogle },
                                                { name: "Pinterest", icon: FaPinterest },
                                                { name: "LinkedIn", icon: FaLinkedinIn },
                                            ].map(({ name, icon: PlatformIcon }) => (
                                                <span
                                                    key={name}
                                                    className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-semibold inline-flex items-center gap-1.5"
                                                >
                                                    <PlatformIcon className="w-3 h-3" />
                                                    {name}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* FEATURES LIST */}
                                    <div className="relative z-10 space-y-2.5 mb-6 pt-4 border-t border-gray-100">
                                        {item.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2.5"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                <span className="text-xs text-gray-600 font-medium">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* TECHNOLOGIES */}
                                    <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 mb-6">
                                        {item.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-[11px] font-medium bg-purple-50/70 text-purple-700 border border-purple-100/60"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* RELATED PROJECTS LINK */}
                                    <Link
                                        to={
                                            item.id === "analytics"
                                                ? "/pages?category=Data%20Analytics&category=Cloud%20%26%20Data%20Engineering"
                                                : `/pages?category=${encodeURIComponent(
                                                      item.id === "ads"
                                                          ? "Marketing & Ads"
                                                          : item.title
                                                  )}`
                                        }
                                        className="
                                            relative
                                            z-10
                                            w-full
                                            mt-2
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-2
                                            py-2.5
                                            px-4
                                            rounded-xl
                                            bg-purple-500/10
                                            border
                                            border-purple-200
                                            text-xs
                                            font-semibold
                                            text-purple-700
                                            hover:bg-purple-500
                                            hover:text-white
                                            hover:border-purple-500
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        View related projects
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* KEYFRAME ANIMATIONS */}
                <style>{`
                    @keyframes smoothFadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(32px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .hero-fade-in-up {
                        opacity: 0;
                        animation: smoothFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .hero-fade-in-up {
                            animation: none !important;
                            opacity: 1 !important;
                            transform: none !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};