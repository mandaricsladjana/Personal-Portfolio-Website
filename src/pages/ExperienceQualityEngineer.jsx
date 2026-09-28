import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    ArrowDown,
    ArrowUp,
    CalendarDays,
    BriefcaseBusiness,
    CheckCircle2,
    Database,
    BarChart3,
    Factory,
    ClipboardCheck,
    Search,
    Workflow,
    Target,
    Layers3,
    ChevronDown,
    Lightbulb,
    FileSpreadsheet,
    Users,
    TrendingUp,
    ShieldCheck,
    Server,
    FileText,
    GraduationCap,
    MoreVertical,
    Download,
} from "lucide-react";
import { FaMicrosoft } from "react-icons/fa";

export default function ExperienceQualityEngineer() {
    const [openTask, setOpenTask] = useState(null);
    const [hoveredTool, setHoveredTool] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        const header = document.querySelector("header");

        if (!header) return;

        const originalTransform = header.style.transform;
        const originalOpacity = header.style.opacity;
        const originalPointerEvents = header.style.pointerEvents;
        const originalTransition = header.style.transition;

        const getFirstSection = () =>
            document.querySelector("main > div > section");

        const isPastFirstSection = () => {
            const firstSection = getFirstSection();

            if (!firstSection) return false;

            const firstSectionBottom =
                firstSection.getBoundingClientRect().bottom + window.scrollY;

            return window.scrollY > firstSectionBottom - 20;
        };

        const handleMouseMove = (event) => {
            const firstSection = getFirstSection();

            if (!firstSection) return;

            const passedFirstSection = isPastFirstSection();

            if (!passedFirstSection) {
                setNavbarVisible(true);
                return;
            }

            const mouseY = event.clientY;
            const navbarRect = header.getBoundingClientRect();

            const isOverNavbar =
                header.style.opacity !== "0" &&
                mouseY >= navbarRect.top &&
                mouseY <= navbarRect.bottom &&
                event.clientX >= navbarRect.left &&
                event.clientX <= navbarRect.right;

            const isNearTop = mouseY <= 80;

            if (isNearTop || isOverNavbar) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
        };

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setShowScrollTop(scrollPosition >= documentHeight - 20);

            const passedFirstSection = isPastFirstSection();

            if (!passedFirstSection) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
        };

        const handleResize = () => {
            const passedFirstSection = isPastFirstSection();

            if (!passedFirstSection) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);

            header.style.transform = originalTransform;
            header.style.opacity = originalOpacity;
            header.style.pointerEvents = originalPointerEvents;
            header.style.transition = originalTransition;
        };
    }, []);

    useEffect(() => {
        const header = document.querySelector("header");

        if (!header) return;

        const firstSection = document.querySelector(
            "main > div > section"
        );

        if (!firstSection) return;

        const firstSectionBottom =
            firstSection.getBoundingClientRect().bottom + window.scrollY;

        const passedFirstSection =
            window.scrollY > firstSectionBottom - 20;

        if (!passedFirstSection) {
            header.style.transform = "translateY(0)";
            header.style.opacity = "1";
            header.style.pointerEvents = "auto";
            return;
        }

        if (navbarVisible) {
            header.style.transform = "translateY(0)";
            header.style.opacity = "1";
            header.style.pointerEvents = "auto";
        } else {
            header.style.transform = "translateY(-100%)";
            header.style.opacity = "0";
            header.style.pointerEvents = "none";
        }

        header.style.transition =
            "transform 500ms ease, opacity 500ms ease";
    }, [navbarVisible]);

    const handleScrollArrow = () => {
        if (showScrollTop) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollBy({
                top: window.innerHeight * 0.85,
                behavior: "smooth",
            });
        }
    };

    const responsibilities = [
        {
            number: "01",
            title: "Quality KPI Management",
            text: "Defined, monitored, analyzed and reported quality KPIs to support process performance monitoring and management decision-making.",
        },
        {
            number: "02",
            title: "Data Analytics & Reporting",
            text: "Collected, cleaned, structured and analyzed operational and quality data using Excel, SQL and Power BI.",
        },
        {
            number: "03",
            title: "Management Decision Support",
            text: "Transformed raw operational data into structured reports, trends, KPIs and summaries used for planning and higher-level decision support.",
        },
        {
            number: "04",
            title: "Scrap Analysis",
            text: "Analyzed scrap data, identified concentrations of defects, investigated process conditions and supported corrective actions with the responsible teams.",
        },
        {
            number: "05",
            title: "Process Improvement",
            text: "Combined quality engineering methods with data analysis to identify deviations, procedural gaps and opportunities for process optimization.",
        },
        {
            number: "06",
            title: "Cross-functional Coordination",
            text: "Worked with quality teams, shopfloor employees and different operational functions to collect information, align data and support improvement activities.",
        },
    ];

    const taskCategories = [
        {
            id: "analytics",
            icon: BarChart3,
            number: "01",
            title: "Quality Data Analytics",
            subtitle:
                "Turning operational data into information people can act on.",
            color: "from-violet-500/20 to-purple-500/5",
            tasks: [
                "Collected, sorted and cleaned quality and operational datasets.",
                "Validated data and identified missing, inconsistent or duplicated information.",
                "Analyzed trends, deviations and performance indicators.",
                "Prepared structured datasets for reporting and management analysis.",
                "Supported planning and decision-making through data-driven insights.",
                "Created summaries and analytical views for different management levels.",
            ],
        },
        {
            id: "scrap",
            icon: TrendingUp,
            number: "02",
            title: "Scrap Management",
            subtitle:
                "From defect data to process investigation and corrective action.",
            color: "from-fuchsia-500/20 to-purple-500/5",
            tasks: [
                "Participated in weekly scrap management activities.",
                "Gathered, aligned and analyzed scrap data.",
                "Prepared management reports and presentation material.",
                "Investigated concentrated defect patterns and unusual scrap behavior.",
                "Analyzed a concentration of defects at a semi-automated station.",
                "Investigated handling and procedural gaps contributing to scratches and breakage.",
                "Worked with the Scrap Coordinator to support procedure updates and corrective actions.",
            ],
        },
        {
            id: "inventory",
            icon: Factory,
            number: "03",
            title: "Inventory & Operational Reporting",
            subtitle:
                "Connecting operational data with people working on the process.",
            color: "from-blue-500/20 to-violet-500/5",
            tasks: [
                "Analyzed inventory-related reports and operational data.",
                "Prepared reports for different levels of management.",
                "Sorted and structured information from multiple operational sources.",
                "Coordinated with shopfloor workers to clarify data and process information.",
                "Followed up on discrepancies and reporting gaps.",
                "Supported operational planning through reliable data and reporting.",
            ],
        },
        {
            id: "budget",
            icon: FileSpreadsheet,
            number: "04",
            title: "Quality Budget Analysis",
            subtitle:
                "Using historical and planned data to support financial planning.",
            color: "from-emerald-500/20 to-violet-500/5",
            tasks: [
                "Developed a Power BI report comparing historical budgets, actual costs and planned 2026 spending.",
                "Analyzed spending across different Quality groups.",
                "Structured financial information for easier comparison and monitoring.",
                "Created visual reporting to improve visibility of budget performance.",
                "Supported Quality management with analytical information for planning.",
            ],
        },
        {
            id: "qms",
            icon: ShieldCheck,
            number: "05",
            title: "Quality Systems & Compliance",
            subtitle:
                "Applying quality engineering methods in an automotive environment.",
            color: "from-amber-500/20 to-violet-500/5",
            tasks: [
                "Worked with automotive quality standards and structured quality processes.",
                "Supported quality KPI monitoring and reporting.",
                "Worked with structured problem-solving methodologies.",
                "Supported audit-related and quality-system activities.",
                "Applied analytical thinking to identify process deviations and improvement opportunities.",
                "Worked with methodologies including FMEA, Fishbone and Fault Tree Analysis.",
            ],
        },
        {
            id: "coordination",
            icon: Users,
            number: "06",
            title: "Cross-functional Support",
            subtitle:
                "Working between data, quality teams, management and the shopfloor.",
            color: "from-pink-500/20 to-violet-500/5",
            tasks: [
                "Provided analytical support for the wider Quality department and different teams.",
                "Worked with laboratory and operational functions on data and reporting topics.",
                "Coordinated information with shopfloor employees.",
                "Supported management reports and presentations.",
                "Helped align information between operational teams and reporting needs.",
                "Combined technical analysis with communication and coordination.",
            ],
        },
        {
            id: "workload",
            icon: Workflow,
            number: "07",
            title: "Workload & Resource Analysis",
            subtitle:
                "Using structured data to understand workload and resource needs.",
            color: "from-cyan-500/20 to-violet-500/5",
            tasks: [
                "Supported workload and headcount analysis within Quality.",
                "Structured information across approximately 150 Quality employees.",
                "Worked with templates and SharePoint-based information.",
                "Supported Power BI reporting for workload visibility.",
                "Prepared information that helped management understand resource distribution and planning needs.",
            ],
        },
        {
            id: "training",
            icon: ClipboardCheck,
            number: "08",
            title: "Training & Process Gaps",
            subtitle:
                "Identifying gaps and turning them into actionable information.",
            color: "from-rose-500/20 to-violet-500/5",
            tasks: [
                "Supported analysis of training gaps within Quality teams.",
                "Worked with Skill Station-related information together with HR.",
                "Structured and analyzed training information.",
                "Helped identify areas where additional training or follow-up was needed.",
                "Supported communication of findings to relevant stakeholders.",
            ],
        },
    ];

    const skills = [
        "Quality Engineering",
        "Data Analytics",
        "Quality KPI Management",
        "Power BI",
        "SQL",
        "Microsoft Excel",
        "Data Visualization",
        "Root Cause Analysis",
        "Process Optimization",
        "Continuous Improvement",
        "FMEA",
        "Fishbone Analysis",
        "Fault Tree Analysis",
        "IATF 16949",
        "VDA 6.3",
    ];

    const tools = [
        "Power BI",
        "Microsoft Excel",
        "SQL",
        "Microsoft SQL Server",
        "Azure",
        "Python",
        "SharePoint",
    ];

    const toolIcons = [
        { name: "Power BI", icon: BarChart3 },
        { name: "Microsoft Excel", icon: FileSpreadsheet },
        { name: "Microsoft PowerPoint", icon: FaMicrosoft },
        { name: "SQL", icon: Database },
        {
            name: "QMS & Quality Tools",
            icon: ShieldCheck,
            qmsTools: [
                {
                    name: "Layered Process Audit tool (LPA)",
                    icon: Search,
                },
                {
                    name: "Document Control System tool",
                    icon: FileText,
                },
                {
                    name: "Skill Station Competence tracking tool",
                    icon: GraduationCap,
                },
                {
                    name: "Audit & Nonconformance Tracking tool",
                    icon: ClipboardCheck,
                },
            ],
        },
        { name: "Microsoft SQL Server", icon: Server },
        { name: "SharePoint", icon: Layers3 },
    ];

    const projects = [
        {
            icon: BarChart3,
            number: "01",
            title: "Quality KPI Reporting",
            description:
                "Defined, monitored and analyzed quality KPIs and transformed quality data into structured reports and visual dashboards used for performance monitoring.",
            tags: ["Power BI", "KPI Reporting", "Quality Analytics"],
        },
        {
            icon: TrendingUp,
            number: "02",
            title: "Scrap Data Investigation",
            description:
                "Used scrap data to identify concentrated defect patterns, investigate process conditions and support corrective actions with the responsible teams.",
            tags: ["Scrap Analysis", "Root Cause Analysis", "Process Improvement"],
        },
        {
            icon: Factory,
            number: "03",
            title: "Inventory Reporting",
            description:
                "Analyzed inventory-related data, prepared reports for different management levels and coordinated with shopfloor employees to clarify operational information.",
            tags: ["Inventory", "Operational Reporting", "Excel"],
        },
        {
            icon: FileSpreadsheet,
            number: "04",
            title: "Quality Budget Analysis",
            description:
                "Developed a Power BI report comparing historical budgets, actual costs and planned 2026 spending across different Quality groups.",
            tags: ["Power BI", "Budget Analysis", "Financial Reporting"],
        },
    ];

    const impact = [
        {
            value: "01",
            title: "Data quality",
            text: "Learned to question, validate and structure information before using it for reporting or decision-making.",
        },
        {
            value: "02",
            title: "Process understanding",
            text: "Built a practical understanding of how operational processes, quality issues and data are connected.",
        },
        {
            value: "03",
            title: "Communication",
            text: "Developed experience working with management, quality teams, HR, laboratory functions and shopfloor employees.",
        },
    ];

    const learned = [
        "Data is only useful when it is structured, validated and connected to the process behind it.",
        "Quality problems often become clearer when operational data is analyzed from multiple perspectives.",
        "Effective reporting requires both technical accuracy and an understanding of the audience.",
        "Cross-functional communication is essential for collecting reliable information and supporting improvement.",
        "Power BI and Excel can turn complex operational information into clear management insights.",
        "Quality engineering methods and data analytics complement each other in process improvement.",
    ];

    return (
        <main
            className="bg-white text-black"
            style={{
                zoom: "0.85",
            }}
        >
            <div>
                <section className="relative overflow-hidden bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[35rem] h-[35rem] rounded-full bg-purple-700/20 blur-[130px]" />
                        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 text-purple-300/60 text-xs uppercase tracking-[0.2em] mb-8">
                            <BriefcaseBusiness size={16} />
                            Professional Experience
                        </div>

                        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
                            <div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.95] max-w-5xl">
                                    Quality Engineer
                                    <span className="block text-purple-300">
                                        & Data Analyst
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed">
                                    A practical combination of quality engineering,
                                    operational data analytics, reporting and
                                    cross-functional process improvement.
                                </p>
                            </div>

                            <div className="lg:text-right">
                                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-3">
                                    Experience
                                </p>

                                <p className="text-2xl md:text-3xl font-medium">
                                    2025–2026
                                </p>

                                <p className="text-white/40 mt-2">
                                    Continental · Novi Sad
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <div className="grid pl-4 sm:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">
                                        Role
                                    </p>
                                    <p className="text-lg">Quality Engineer</p>
                                </div>

                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">
                                        Main focus
                                    </p>
                                    <p className="text-lg">
                                        Quality & Data Analytics
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">
                                        Environment
                                    </p>
                                    <p className="text-lg">
                                        Automotive Industry
                                    </p>
                                </div>
                            </div>

                            <div className="relative mt-3 overflow-hidden rounded-[1.3rem] border border-purple-300/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.025] to-transparent">
                                <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-purple-600/10 blur-[70px] pointer-events-none" />

                                <div className="relative grid grid-cols-3">
                                    <div className="relative px-3 py-5 sm:px-6 md:px-7 md:py-7">
                                        <p className="text-[8px] uppercase tracking-[0.28em] text-white/25 mb-3">
                                            Experience
                                        </p>

                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.07em] leading-none text-purple-300">
                                                1+
                                            </span>
                                        </div>

                                        <p className="mt-3 text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Year Experience
                                        </p>

                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-14 bg-white/10" />
                                    </div>

                                    <div className="relative px-3 py-5 sm:px-6 md:px-7 md:py-7">
                                        <p className="text-[8px] uppercase tracking-[0.28em] text-white/25 mb-3">
                                            Portfolio
                                        </p>

                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.07em] leading-none text-purple-300">
                                                20+
                                            </span>
                                        </div>

                                        <p className="mt-3 text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Projects
                                        </p>

                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-14 bg-white/10" />
                                    </div>

                                    <div className="px-3 py-5 sm:px-6 md:px-7 md:py-7">
                                        <p className="text-[8px] uppercase tracking-[0.28em] text-white/25 mb-3">
                                            Expertise
                                        </p>

                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.07em] leading-none text-purple-300">
                                                6
                                            </span>
                                        </div>

                                        <p className="mt-3 text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Core Areas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    Overview
                                </p>

                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    Where engineering meets data.
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-2xl md:text-3xl leading-snug tracking-tight">
                                    After my experience in logistics, moving
                                    into Quality Engineering was a great
                                    opportunity to build on my understanding of
                                    operations while moving closer to
                                    production, quality and data.
                                </p>

                                <p className="mt-8 text-lg text-black/50 leading-relaxed">
                                    The role gave me the opportunity to work
                                    across different levels of the organization,
                                    from shopfloor workers and operational teams
                                    to Quality leadership and management. Working
                                    closely with the Quality Manager and within
                                    the Quality Management System gave me
                                    exposure to important plant topics,
                                    meetings, quality discussions and
                                    decision-making activities, while allowing me
                                    to understand how operational information
                                    moves through the organization.
                                </p>

                                <p className="mt-6 text-lg text-black/50 leading-relaxed">
                                    It was also a valuable opportunity to work in
                                    a multicultural environment with colleagues
                                    from different nationalities, functions and
                                    professional backgrounds. This strengthened
                                    my communication and coordination skills and
                                    taught me how important it is to understand
                                    both the people and the process behind the
                                    data.
                                </p>

                                <p className="mt-6 text-lg text-black/50 leading-relaxed">
                                    Alongside quality engineering activities, I
                                    worked with quality and operational datasets,
                                    transformed raw information into structured
                                    reports, analyzed KPIs and scrap patterns,
                                    and supported different teams with reliable
                                    data and practical insights. This combination
                                    of engineering, QMS, cross-functional
                                    collaboration and analytics became an
                                    important step toward the data-driven
                                    direction I want to continue developing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-40 left-1/3 w-[35rem] h-[35rem] rounded-full bg-purple-700/10 blur-[130px]" />
                        <div className="absolute -bottom-40 right-0 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24 items-end">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                    The environment
                                </p>

                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
                                    Where the data
                                    <span className="block text-purple-300">
                                        came from.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-2xl">
                                <p className="text-xl md:text-2xl leading-relaxed text-white/75">
                                    Quality analytics does not exist separately
                                    from the process. My work was connected to
                                    the manufacturing environment, the shopfloor,
                                    operational teams and the quality systems
                                    supporting production.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 relative group">
                            <div className="absolute -inset-1 rounded-[2rem] bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                                <img
                                    src="/ProfilePhotos/ContiPlant.jpg"
                                    alt="Continental plant in Novi Sad"
                                    className="w-full h-[22rem] md:h-[34rem] lg:h-[40rem] object-cover object-center transition-transform duration-1000 group-hover:scale-[1.025]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                        <div>
                                            <p className="text-purple-300 text-[10px] uppercase tracking-[0.3em] mb-3">
                                                Continental · Novi Sad
                                            </p>

                                            <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
                                                Automotive manufacturing
                                                environment
                                            </h3>
                                        </div>

                                        <div className="text-left md:text-right">
                                            <p className="text-white/35 text-[10px] uppercase tracking-[0.25em]">
                                                Professional experience
                                            </p>

                                            <p className="text-white/70 text-sm mt-2">
                                                Quality Engineering · Data Analytics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0a14] group min-h-[24rem]">
                                <img
                                    src="/ProfilePhotos/ContiShopfloor.jpg"
                                    alt="Continental shopfloor"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 pointer-events-none" />

                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-purple-200">
                                        Shopfloor · Process · Quality
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                                    <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-3">
                                        Inside the process
                                    </p>

                                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                        From operational reality to
                                        analytical insight.
                                    </h3>
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] to-white/[0.02] p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <p className="text-purple-300/60 text-[10px] uppercase tracking-[0.25em] mb-8">
                                        How the pieces connected
                                    </p>

                                    <div className="space-y-7">
                                        <div className="flex gap-5">
                                            <span className="text-purple-300/50 text-xs pt-1">
                                                01
                                            </span>

                                            <div>
                                                <h4 className="text-lg font-medium">
                                                    Process
                                                </h4>

                                                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                                                    Understanding what was
                                                    happening in the production
                                                    and operational environment.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10" />

                                        <div className="flex gap-5">
                                            <span className="text-purple-300/50 text-xs pt-1">
                                                02
                                            </span>

                                            <div>
                                                <h4 className="text-lg font-medium">
                                                    Quality data
                                                </h4>

                                                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                                                    Collecting, validating,
                                                    cleaning and analyzing
                                                    information from different
                                                    sources.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10" />

                                        <div className="flex gap-5">
                                            <span className="text-purple-300/50 text-xs pt-1">
                                                03
                                            </span>

                                            <div>
                                                <h4 className="text-lg font-medium">
                                                    Decision support
                                                </h4>

                                                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                                                    Turning the information into
                                                    reports, KPIs, trends and
                                                    insights for management and
                                                    operational teams.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-7 border-t border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Power BI",
                                            "Excel",
                                            "SQL",
                                            "Quality KPIs",
                                            "Scrap",
                                            "Inventory",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 rounded-full border border-purple-300/10 bg-purple-500/5 text-xs text-white/50"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f5f3f7] text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                Responsibilities
                            </p>

                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                What I worked on
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {responsibilities.map((item) => (
                                <div
                                    key={item.number}
                                    className="border-t border-black/10 pt-6"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-xs opacity-30">
                                            {item.number}
                                        </span>

                                        <CheckCircle2
                                            size={20}
                                            className="text-purple-700"
                                        />
                                    </div>

                                    <h3 className="mt-8 text-2xl font-medium tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-black/50 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative bg-white text-black px-6 md:px-12 lg:px-20 py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08060d] text-white p-8 md:p-12 lg:p-14 border border-purple-300/10">
                            <div className="absolute -top-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-purple-600/20 blur-[100px]" />
                            <div className="absolute -bottom-40 -left-32 w-[20rem] h-[20rem] rounded-full bg-violet-500/10 blur-[100px]" />

                            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-3 mb-5">
                                        <CalendarDays
                                            size={20}
                                            className="text-purple-300"
                                        />

                                        <p className="text-purple-300/60 text-xs uppercase tracking-[0.25em]">
                                            A system I built for myself
                                        </p>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                        I started tracking my own work
                                        <span className="text-purple-300">
                                            {" "}
                                            before turning it into a template.
                                        </span>
                                    </h2>

                                    <p className="mt-6 text-white/45 text-lg leading-relaxed">
                                        While working on different tasks,
                                        projects and improvement activities, I
                                        started organizing my own work in a
                                        structured task and project tracking
                                        system. It helped me keep track of
                                        responsibilities, priorities,
                                        progress and completed work. I later
                                        turned that personal workflow into a
                                        reusable Notion template.
                                    </p>
                                </div>

                                <a
                                    href="/Task-Tracking-Notion-Template.pdf"
                                    download
                                    className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-purple-300 text-purple-950 font-medium hover:bg-white transition-all duration-300 whitespace-nowrap shadow-[0_10px_35px_rgba(124,58,237,0.25)]"
                                >
                                    Download Template
                                    <Download
                                        size={18}
                                        className="group-hover:translate-y-0.5 transition-transform"
                                    />
                                </a>
                            </div>

                            <div className="relative mt-10 pt-7 border-t border-white/10 flex flex-wrap gap-3">
                                {[
                                    "Task Tracking",
                                    "Project Tracking",
                                    "Priorities",
                                    "Progress",
                                    "Personal Workflow",
                                    "Notion",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-full border border-purple-300/10 bg-purple-500/5 text-xs text-white/45"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-40 bg-[#08060d] border-y border-purple-300/10 py-16 overflow-visible">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-purple-700/10 blur-[110px] rounded-full" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="h-px w-16 bg-purple-300/20" />

                            <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/50">
                                Tools & Technologies
                            </p>

                            <div className="h-px w-16 bg-purple-300/20" />
                        </div>

                        <div
                            className="relative mt-14 flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16"
                            style={{ perspective: "1400px" }}
                        >
                            {toolIcons.map((tool, index) => {
                                const Icon = tool.icon;
                                const isHovered = hoveredTool === index;

                                return (
                                    <div
                                        key={tool.name}
                                        className={`relative group ${
                                            tool.qmsTools && isHovered
                                                ? "z-[100]"
                                                : "z-10"
                                        }`}
                                        onMouseEnter={() =>
                                            setHoveredTool(index)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredTool(null)
                                        }
                                        style={{ perspective: "1000px" }}
                                    >
                                        <div
                                            className={`relative w-24 h-24 md:w-28 md:h-28 rounded-[1.7rem] bg-gradient-to-br from-purple-100 via-purple-500 to-purple-950 border border-purple-200/80 flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${
                                                isHovered
                                                    ? "scale-125 -translate-y-6"
                                                    : "scale-100"
                                            }`}
                                            style={{
                                                transformStyle: "preserve-3d",
                                                transform: isHovered
                                                    ? `rotateX(-12deg) rotateY(${
                                                          index % 2 === 0
                                                              ? -18
                                                              : 18
                                                      }deg) translateZ(35px)`
                                                    : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
                                                boxShadow: isHovered
                                                    ? "inset 6px 6px 12px rgba(255,255,255,0.8), inset -9px -10px 18px rgba(35,5,75,0.8), 0 8px 0 #321466, 0 15px 0 #241047, 0 28px 45px rgba(124,58,237,0.7), 0 0 45px rgba(196,181,253,0.45)"
                                                    : "inset 5px 5px 11px rgba(255,255,255,0.7), inset -8px -9px 17px rgba(35,5,75,0.7), 0 7px 0 #321466, 0 13px 0 #241047, 0 20px 30px rgba(0,0,0,0.6)",
                                            }}
                                        >
                                            <div
                                                className="absolute inset-1 rounded-[1.4rem] border border-white/35 pointer-events-none"
                                                style={{
                                                    transform: "translateZ(8px)",
                                                }}
                                            />

                                            <div
                                                className="absolute top-2 left-3 w-12 h-6 rounded-full bg-white/30 blur-md pointer-events-none"
                                                style={{
                                                    transform: "translateZ(12px)",
                                                }}
                                            />

                                            <div
                                                className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-200/40 blur-2xl transition-all duration-700 ${
                                                    isHovered
                                                        ? "opacity-100 scale-125"
                                                        : "opacity-60 scale-100"
                                                }`}
                                            />

                                            <div
                                                className="relative z-10 text-purple-950 transition-all duration-700"
                                                style={{
                                                    transform: isHovered
                                                        ? "translateZ(35px) scale(1.08)"
                                                        : "translateZ(22px)",
                                                    filter: isHovered
                                                        ? "drop-shadow(0 5px 5px rgba(255,255,255,0.35))"
                                                        : "drop-shadow(0 4px 4px rgba(0,0,0,0.45))",
                                                }}
                                            >
                                                <Icon
                                                    className="w-12 h-12 md:w-14 md:h-14"
                                                    strokeWidth={2.5}
                                                />
                                            </div>

                                            <div
                                                className="absolute left-2 right-2 -bottom-3 h-4 rounded-b-2xl bg-purple-950 opacity-90 pointer-events-none"
                                                style={{
                                                    transform:
                                                        "translateZ(-4px)",
                                                }}
                                            />

                                            {tool.qmsTools && (
                                                <div
                                                    className="absolute -top-3 -right-3 z-30 w-8 h-8 rounded-full bg-purple-200 text-purple-950 flex items-center justify-center shadow-lg border border-purple-100/80 transition-all duration-300 group-hover:scale-110"
                                                    style={{
                                                        transform: isHovered
                                                            ? "translateZ(45px) scale(1.1)"
                                                            : "translateZ(15px)",
                                                    }}
                                                >
                                                    <MoreVertical
                                                        size={17}
                                                        strokeWidth={2.8}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <p
                                            className={`absolute left-1/2 -translate-x-1/2 mt-7 text-center text-[9px] uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                                                isHovered
                                                    ? "text-purple-200 opacity-100"
                                                    : "text-white/30 opacity-80"
                                            }`}
                                        >
                                            {tool.name}
                                        </p>

                                        {tool.qmsTools && (
                                            <div
                                                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-16 z-[9999] flex flex-nowrap justify-center items-start gap-5 w-[34rem] min-w-[34rem] max-w-[34rem] origin-bottom transition-all duration-700 ease-out ${
                                                    isHovered
                                                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                                        : "opacity-0 translate-y-5 scale-95 pointer-events-none"
                                                }`}
                                                style={{
                                                    perspective: "1400px",
                                                    transformStyle:
                                                        "preserve-3d",
                                                }}
                                                onMouseEnter={() =>
                                                    setHoveredTool(index)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredTool(null)
                                                }
                                            >
                                                <div
                                                    className="absolute inset-x-[-1.5rem] -inset-y-5 rounded-[2.5rem] bg-gradient-to-br from-[#020104]/98 via-[#090511]/98 to-[#030206]/98 border border-purple-300/15 shadow-[inset_6px_6px_20px_rgba(255,255,255,0.08),inset_-12px_-14px_25px_rgba(0,0,0,0.85),0_20px_45px_rgba(0,0,0,0.8),0_0_55px_rgba(124,58,237,0.28)] pointer-events-none"
                                                    style={{
                                                        transform:
                                                            "translateZ(-20px)",
                                                    }}
                                                />

                                                <div
                                                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"
                                                    style={{
                                                        transform:
                                                            "translateZ(-5px)",
                                                    }}
                                                />

                                                {tool.qmsTools.map(
                                                    (qmsTool) => {
                                                        const QmsIcon =
                                                            qmsTool.icon;

                                                        return (
                                                            <div
                                                                key={
                                                                    qmsTool.name
                                                                }
                                                                className="relative w-24 md:w-28 shrink-0"
                                                                style={{
                                                                    perspective:
                                                                        "1000px",
                                                                    transformStyle:
                                                                        "preserve-3d",
                                                                }}
                                                            >
                                                                <div
                                                                    className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-[1.7rem] bg-gradient-to-br from-purple-100 via-purple-500 to-purple-950 border border-purple-200/80 flex items-center justify-center cursor-pointer"
                                                                    style={{
                                                                        transformStyle:
                                                                            "preserve-3d",
                                                                        transform:
                                                                            "rotateX(0deg) rotateY(0deg) translateZ(25px)",
                                                                        boxShadow:
                                                                            "inset 6px 6px 12px rgba(255,255,255,0.8), inset -8px -9px 17px rgba(35,5,75,0.75), 0 7px 0 #321466, 0 13px 0 #241047, 0 20px 30px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.45)",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="absolute inset-1 rounded-[1.4rem] border border-white/35 pointer-events-none"
                                                                        style={{
                                                                            transform:
                                                                                "translateZ(8px)",
                                                                        }}
                                                                    />

                                                                    <div
                                                                        className="absolute top-2 left-3 w-10 h-5 rounded-full bg-white/30 blur-md pointer-events-none"
                                                                        style={{
                                                                            transform:
                                                                                "translateZ(12px)",
                                                                        }}
                                                                    />

                                                                    <div
                                                                        className="absolute w-12 h-12 rounded-full bg-purple-200/40 blur-2xl opacity-70"
                                                                        style={{
                                                                            transform:
                                                                                "translateZ(4px)",
                                                                        }}
                                                                    />

                                                                    <div
                                                                        className="relative z-10 text-purple-950"
                                                                        style={{
                                                                            transform:
                                                                                "translateZ(30px)",
                                                                            filter:
                                                                                "drop-shadow(0 5px 5px rgba(0,0,0,0.45))",
                                                                        }}
                                                                    >
                                                                        <QmsIcon
                                                                            className="w-10 h-10 md:w-12 md:h-12"
                                                                            strokeWidth={
                                                                                2.5
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <p className="mt-6 text-center text-[8px] md:text-[9px] leading-relaxed text-purple-200/80 uppercase tracking-[0.08em]">
                                                                    {
                                                                        qmsTool.name
                                                                    }
                                                                </p>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                    Detailed work
                                </p>

                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    Areas of responsibility
                                </h2>

                                <p className="mt-6 text-white/40 leading-relaxed">
                                    Select an area to explore the specific tasks,
                                    analytical activities and process-related work
                                    involved.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {taskCategories.map((category) => {
                                    const Icon = category.icon;
                                    const isOpen = openTask === category.id;

                                    return (
                                        <div
                                            key={category.id}
                                            className={`rounded-[1.5rem] border border-white/10 overflow-hidden bg-gradient-to-br ${category.color}`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenTask(
                                                        isOpen
                                                            ? null
                                                            : category.id
                                                    )
                                                }
                                                className="w-full flex items-center justify-between gap-5 text-left px-6 py-6 hover:bg-white/[0.03] transition"
                                            >
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-300/10 flex items-center justify-center text-purple-300">
                                                        <Icon size={22} />
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xs text-purple-300/50">
                                                                {category.number}
                                                            </span>

                                                            <h3 className="text-xl md:text-2xl font-medium">
                                                                {category.title}
                                                            </h3>
                                                        </div>

                                                        <p className="mt-2 text-sm text-white/40">
                                                            {category.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <ChevronDown
                                                    size={20}
                                                    className={`shrink-0 text-white/40 transition-transform duration-300 ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-7">
                                                    <div className="border-t border-white/10 pt-5">
                                                        <ul className="space-y-3">
                                                            {category.tasks.map(
                                                                (task, index) => (
                                                                    <li
                                                                        key={index}
                                                                        className="flex gap-3 text-white/60 leading-relaxed"
                                                                    >
                                                                        <span className="text-purple-300/60">
                                                                            —
                                                                        </span>

                                                                        <span>
                                                                            {task}
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                Selected work
                            </p>

                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                Projects and analytical work
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.map((project) => {
                                const Icon = project.icon;

                                return (
                                    <div
                                        key={project.number}
                                        className="group rounded-[2rem] border border-black/10 p-8 md:p-10 hover:bg-[#f5f3f7] transition"
                                    >
                                        <div className="flex items-start justify-between gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                                                <Icon size={25} />
                                            </div>

                                            <span className="text-xs opacity-30">
                                                {project.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-12 text-2xl md:text-3xl font-medium tracking-tight">
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 text-black/50 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-full border border-black/10 text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                Impact
                            </p>

                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                What this experience gave me
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            {impact.map((item) => (
                                <div
                                    key={item.value}
                                    className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-10 min-h-80"
                                >
                                    <span className="text-[4rem] md:text-[5rem] font-black tracking-[-0.07em] text-purple-300/10">
                                        {item.value}
                                    </span>

                                    <div className="relative mt-10">
                                        <h3 className="text-2xl md:text-3xl font-medium">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 text-white/45 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40">
                                    Capabilities
                                </p>

                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-5">
                                    Skills I used in practice
                                </h2>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2.5">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2.5 rounded-full border border-black/10 text-sm hover:bg-black hover:text-white transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-20 pt-10 border-t border-black/10">
                                    <p className="text-sm opacity-40 mb-6">
                                        Tools & Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2.5">
                                        {tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-4 py-2.5 rounded-full bg-black text-white text-sm"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f5f3f7] text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-14">
                            <Lightbulb size={22} className="text-purple-700" />

                            <p className="uppercase tracking-[0.2em] text-xs opacity-40">
                                What I learned
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-16">
                            {learned.map((item, index) => (
                                <div
                                    key={index}
                                    className="py-7 border-t border-black/10"
                                >
                                    <div className="flex gap-5">
                                        <span className="text-xs opacity-30 pt-1">
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

                <section className="bg-white text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-black text-white p-8 md:p-14 lg:p-16">
                            <div className="absolute w-[25rem] h-[25rem] bg-purple-600/20 blur-[100px] rounded-full -right-30 -top-40" />

                            <div className="relative grid lg:grid-cols-[1fr_auto] gap-12 items-end">
                                <div>
                                    <p className="text-purple-300/60 text-xs uppercase tracking-[0.2em] mb-5">
                                        Where this led me
                                    </p>

                                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
                                        From quality engineering
                                        <span className="text-purple-300">
                                            {" "}
                                            to data-driven work.
                                        </span>
                                    </h2>

                                    <p className="text-white/45 text-lg max-w-2xl mt-7 leading-relaxed">
                                        This experience gave me the combination
                                        I now bring to data analytics:
                                        understanding the process behind the
                                        numbers, questioning the data,
                                        communicating with people and turning
                                        analysis into something useful.
                                    </p>
                                </div>

                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white text-black hover:bg-purple-200 transition whitespace-nowrap"
                                >
                                    Back to portfolio
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#05030a] text-white px-6 md:px-12 lg:px-20 py-24">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-start md:items-end">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-xs text-white/30 mb-4">
                                Continue exploring
                            </p>

                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                More of my work
                            </h2>
                        </div>

                        <Link
                            to="/"
                            className="group inline-flex items-center gap-3 text-purple-300 hover:text-white transition"
                        >
                            Explore portfolio

                            <ArrowUpRight
                                size={18}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                            />
                        </Link>
                    </div>
                </section>
            </div>

            <button
                type="button"
                onClick={handleScrollArrow}
                aria-label={
                    showScrollTop ? "Scroll to top" : "Scroll down"
                }
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99999] w-12 h-12 rounded-full border border-purple-300/30 bg-black/80 text-purple-300 backdrop-blur-md flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:bg-purple-700 hover:text-white hover:border-purple-300/60 transition-all duration-300"
            >
                {showScrollTop ? (
                    <ArrowUp size={20} strokeWidth={2.2} />
                ) : (
                    <ArrowDown size={20} strokeWidth={2.2} />
                )}
            </button>
        </main>
    );
}