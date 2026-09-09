import { useState } from "react";
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
            "KPI frameworks & performance tracking",
            "Data quality & validation",
            "Automated reporting & insights",
            "Business performance analysis",
            "Data-driven decision support",
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
            "Modern UI development aligned with your brand",
            "Contact & lead forms",
            "Hosting, SSL & weekly backup",
            "Analytics, GA4 & Search Console",
            "On-page SEO & Google Search optimization",
            "Google Ads & conversion tracking",
            "Tailored web catalogs",
            "Shopping cart & checkout",
            "Customized notifications",
            "Coupons & subscriptions services",
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
            "Performance monitoring & analysis",
            "Campaign optimization",
            "A/B testing",
            "Reporting & KPI tracking",
        ],
    },
];

export const Services = () => {
    const [activeService, setActiveService] = useState("analytics");

    const service = services.find(
        (item) => item.id === activeService
    );

    const Icon = service.icon;

    return (
        <section
            id="services"
            className="
                relative
                overflow-hidden
                my-12
                min-h-screen
                bg-[linear-gradient(to_bottom,transparent_0%,#f3f4f6_12%,#f3f4f6_88%,transparent_100%)]
            "
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute top-[45%] left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />


            {/* ================= CONTENT ================= */}

            <div className="container mx-auto px-6 md:px-10 lg:px-24 relative z-10">


                {/* ================= HERO ================= */}

                <div className="pt-20 pb-16 max-w-4xl">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Services
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 text-gray-900">
                        What I can
                        <span className="text-primary"> build </span>
                        for you.
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
                        From turning complex data into clear insights to
                        creating digital experiences, I combine analytical
                        thinking with creative problem solving.
                    </p>

                </div>


                {/* ================= SERVICE PANEL ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 pb-24">


                    {/* ================= SERVICE NAVIGATION ================= */}

                    <div className="space-y-2">

                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5 px-4">
                            Explore services
                        </p>

                        {services.map((item) => {

                            const ItemIcon = item.icon;

                            const isActive =
                                activeService === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() =>
                                        setActiveService(item.id)
                                    }
                                    className={`
                                        w-full
                                        text-left
                                        rounded-2xl
                                        px-5
                                        py-4
                                        flex
                                        items-center
                                        gap-4
                                        transition-all
                                        duration-300
                                        group
                                        ${
                                            isActive
                                                ? "bg-white shadow-[0_15px_40px_rgba(88,28,135,0.10)] border border-purple-100"
                                                : "hover:bg-white/70"
                                        }
                                    `}
                                >

                                    <span
                                        className={`
                                            text-xs
                                            font-bold
                                            ${
                                                isActive
                                                    ? "text-primary"
                                                    : "text-gray-400"
                                            }
                                        `}
                                    >
                                        {item.number}
                                    </span>

                                    <ItemIcon
                                        className={`
                                            w-5
                                            h-5
                                            ${
                                                isActive
                                                    ? "text-primary"
                                                    : "text-gray-400"
                                            }
                                        `}
                                    />

                                    <span
                                        className={`
                                            text-xs
                                            font-semibold
                                            flex-1
                                            ${
                                                isActive
                                                    ? "text-gray-900"
                                                    : "text-gray-500"
                                            }
                                        `}
                                    >
                                        {item.shortTitle}
                                    </span>

                                    <ArrowUpRight
                                        className={`
                                            w-4
                                            h-4
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-primary opacity-100"
                                                    : "text-gray-400 opacity-0 group-hover:opacity-100"
                                            }
                                        `}
                                    />

                                </button>
                            );
                        })}

                    </div>


                    {/* ================= MAIN SERVICE CARD ================= */}

                    <div
                        className="
                            relative
                            min-h-[620px]
                            rounded-[2rem]
                            overflow-hidden
                            bg-white
                            border
                            border-gray-200
                            shadow-[0_25px_80px_rgba(88,28,135,0.12)]
                        "
                    >


                        {/* Large background number */}

                        <div
                            className="
                                absolute
                                -right-8
                                -top-16
                                text-[280px]
                                md:text-[360px]
                                font-black
                                leading-none
                                text-purple-50
                                select-none
                                pointer-events-none
                            "
                        >
                            {service.number}
                        </div>


                        {/* Glow */}

                        <div
                            className="
                                absolute
                                top-1/2
                                right-1/4
                                w-72
                                h-72
                                bg-primary/10
                                rounded-full
                                blur-3xl
                                pointer-events-none
                            "
                        />


                        {/* Content */}

                        <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col">


                            {/* TOP */}

                            <div className="flex items-start justify-between gap-6">

                                <div>

                                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                                        Service {service.number}
                                    </span>

                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
                                        {service.title}
                                    </h2>

                                </div>

                                <div
                                    className="
                                        shrink-0
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-purple-50
                                        border
                                        border-purple-100
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                            </div>


                            {/* DESCRIPTION */}

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mt-8">
                                {service.description}
                            </p>


                            {/* ADS PLATFORMS */}

                            {service.id === "ads" && (

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {[
                                        { name: "Meta", icon: FaMeta },
                                        { name: "Instagram", icon: FaInstagram },
                                        { name: "Google", icon: FaGoogle },
                                        { name: "Pinterest", icon: FaPinterest },
                                        { name: "LinkedIn", icon: FaLinkedinIn },
                                    ].map(({ name, icon: PlatformIcon }) => (
                                        <span
                                            key={name}
                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-purple-50
                                                border
                                                border-purple-100
                                                text-purple-700
                                                text-xs
                                                font-semibold
                                                inline-flex
                                                items-center
                                                gap-2
                                            "
                                        >
                                            <PlatformIcon className="w-3.5 h-3.5" />
                                            {name}
                                        </span>
                                    ))}

                                </div>

                            )}


                            {/* ================= VISUAL AREA ================= */}

                            <div className="relative my-12 min-h-[190px] flex items-center">


                                {/* ANALYTICS VISUAL */}

                                {service.id === "analytics" && (

                                    <div className="w-full max-w-3xl">

                                        <div className="grid grid-cols-3 gap-4 mb-5">

                                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">
                                                    Revenue
                                                </p>

                                                <p className="text-2xl font-bold mt-2 text-gray-900">
                                                    €124.5K
                                                </p>

                                                <span className="text-xs text-primary font-semibold">
                                                    +18.4%
                                                </span>

                                            </div>

                                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">
                                                    Growth
                                                </p>

                                                <p className="text-2xl font-bold mt-2 text-gray-900">
                                                    24.8%
                                                </p>

                                                <span className="text-xs text-primary font-semibold">
                                                    ↑ Trending
                                                </span>

                                            </div>

                                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">
                                                    Quality
                                                </p>

                                                <p className="text-2xl font-bold mt-2 text-gray-900">
                                                    96.2%
                                                </p>

                                                <span className="text-xs text-primary font-semibold">
                                                    Valid Data
                                                </span>

                                            </div>

                                        </div>

                                        <div className="h-24 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden relative">

                                            <div className="absolute inset-x-0 bottom-0 flex items-end gap-2 px-6 h-full">

                                                {[35, 52, 44, 68, 58, 78, 64, 88, 76, 96, 82, 100].map(
                                                    (height, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex-1 bg-primary/20 rounded-t-lg"
                                                            style={{
                                                                height: `${height}%`,
                                                            }}
                                                        />
                                                    )
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                )}


                                {/* ADS VISUAL */}

                                {service.id === "ads" && (

                                    <div className="w-full max-w-3xl">

                                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">

                                            <div className="flex justify-between items-center mb-6">

                                                <div>
                                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                                        Campaign Performance
                                                    </p>

                                                    <p className="text-2xl font-bold text-gray-900 mt-1">
                                                        Growing
                                                    </p>
                                                </div>

                                                <span className="text-primary font-bold text-sm">
                                                    +32.6%
                                                </span>

                                            </div>

                                            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        CTR
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        3.8%
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        CPC
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        €0.42
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        CPM
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        €6.80
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        CPA / CPL
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        €12.40
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        Conv. Rate
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        5.7%
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        ROAS
                                                    </p>

                                                    <p className="text-xl font-bold mt-1">
                                                        4.6x
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )}


                                {/* WEB VISUAL */}

                                {service.id === "web" && (

                                    <div className="w-full max-w-3xl">

                                        <div className="rounded-2xl bg-gray-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

                                            <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800">

                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />

                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />

                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />

                                            </div>

                                            <div className="p-8 md:p-10">

                                                <p className="text-purple-300 text-xs uppercase tracking-widest">
                                                    Digital Experience
                                                </p>

                                                <p className="text-white text-2xl md:text-3xl font-bold mt-3">
                                                    Build something
                                                    <br />
                                                    memorable.
                                                </p>

                                                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">
                                                    Explore
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>


                            {/* ================= BOTTOM ================= */}

                            <div className="mt-auto">


                                {/* FEATURES */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">

                                    {service.features.map((feature, index) => (

                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >

                                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">

                                                <Check className="w-3.5 h-3.5 text-primary" />

                                            </div>

                                            <span className="text-sm text-gray-600">
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>


                                {/* TECHNOLOGIES */}

                                <div className="flex flex-wrap gap-2 pt-7 border-t border-gray-200">

                                    {service.technologies.map(
                                        (technology, index) => (

                                            <span
                                                key={index}
                                                className="
                                                    px-4
                                                    py-1.5
                                                    rounded-full
                                                    text-xs
                                                    font-medium
                                                    bg-purple-50
                                                    text-purple-700
                                                    border
                                                    border-purple-100
                                                "
                                            >
                                                {technology}
                                            </span>

                                        )
                                    )}

                                </div>


                                {/* ================= RELATED PROJECTS ================= */}

                                <Link
                                    to={
                                        service.id === "analytics"
                                            ? "/pages?category=Data%20Analytics&category=Cloud%20%26%20Data%20Engineering"
                                            : `/pages?category=${encodeURIComponent(
                                                service.id === "ads"
                                                    ? "Marketing & Ads"
                                                    : service.title
                                            )}`
                                    }
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        mt-8
                                        px-5
                                        py-2.5
                                        rounded-xl
                                        bg-purple-500/10
                                        border
                                        border-purple-200
                                        text-sm
                                        font-semibold
                                        text-purple-700
                                        hover:bg-purple-500
                                        hover:text-white
                                        hover:border-purple-500
                                        hover:-translate-y-0.5
                                        transition-all
                                        duration-300
                                    "
                                >
                                    View related projects

                                    <ArrowUpRight
                                        className="
                                            w-4
                                            h-4
                                            transition-transform
                                        "
                                    />

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};