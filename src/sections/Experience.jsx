import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  BarChart2,
  X,
  Image as ImageIcon,
  ExternalLink,
  Calendar,
  Building2,
  Award,
  Layers,
  ChevronLeft,
  Database,
  ShieldCheck,
  Workflow,
  Factory,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const CONTINENTAL_ASSETS = {
  logo: "/ProfilePhotos/Continental_transparent.png",
  shopfloor: "/ProfilePhotos/ContiShopfloor.jpg",
  plant: "/ProfilePhotos/ContiPlant.jpg",
};

const experience = [
  {
    id: "data-analytics",
    period: "2026 - Present",
    role: "Data Analytics",
    company: "Freelance",
    description:
      "KPI Management, Dashboard building & strategic business reporting.",
    technologies: ["Power BI", "SQL", "Git", "Github"],
    current: true,
    path: "/experience/data-analytics",
    metrics: "+40% Reporting Speed",
    highlights: [
      "Built interactive executive dashboards for key KPI monitoring",
      "Optimized complex SQL queries reducing data load times by 40%",
      "Implemented automated ETL data pipelines and version control",
    ],
    modalContent: {
      tagline:
        "Transforming raw data into actionable executive insights and automated KPI workflows.",
      overview:
        "As a freelance Data Analytics specialist, I collaborate with businesses to establish robust data infrastructure, design executive dashboards, and automate reporting pipelines.",
      achievements: [
        "Architected custom Power BI dashboards integrated with multi-source SQL databases.",
        "Created scalable data models using DAX and optimized complex SQL view performance.",
        "Automated weekly executive reporting workflows, saving 15+ manual hours per month.",
      ],
      gallery: [
        {
          label: "Executive Dashboard View",
          placeholder: "Interactive Power BI Canvas",
        },
        {
          label: "SQL Pipeline Architecture",
          placeholder: "Data Warehouse Schema",
        },
      ],
    },
  },
  {
    id: "ads-management",
    period: "2026 - Present",
    role: "Google & Instagram Ads Management",
    company: "Freelance",
    description:
      "Ads Management, tracking, campaign creation and optimization.",
    technologies: ["Google Analytics 4", "Google Ads", "Meta Ads"],
    current: true,
    path: "/experience/ads",
    metrics: "3.2x Average ROAS",
    highlights: [
      "Designed data-driven marketing funnels across Meta and Google",
      "Configured advanced GA4 conversion event tracking & attribution",
      "A/B tested campaign creatives achieving consistent positive ROI",
    ],
    modalContent: {
      tagline:
        "Maximizing ROI with precise GA4 event tracking and multi-platform campaign tuning.",
      overview:
        "Specialized in performance marketing, crafting tailored ad strategies for Meta and Google, combined with deep GA4 conversion attribution setup.",
      achievements: [
        "Managed performance marketing budgets delivering consistent >3x return on ad spend.",
        "Implemented custom Google Tag Manager tags and server-side tracking.",
        "Executed multi-variant creative testing strategies across demographic segments.",
      ],
      gallery: [
        {
          label: "GA4 Funnel Breakdown",
          placeholder: "Analytics Conversion Path",
        },
        {
          label: "Campaign Performance Overview",
          placeholder: "Ad Spend & ROAS Metrics",
        },
      ],
    },
  },
  {
    id: "web-dev",
    period: "2026",
    role: "Web Development",
    company: "Independent Learning & Projects",
    description:
      "Learned web development through hands-on projects, building responsive websites and working with modern web technologies.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    current: false,
    learning: true,
    logos: ["web"],
    metrics: "10+ Modern Web Apps",
    highlights: [
      "Mastered component architecture, state management and custom hooks",
      "Crafted responsive glassmorphism and animated web applications",
      "Integrated REST APIs with asynchronous JavaScript workflows",
    ],
    modalContent: {
      tagline:
        "Building modern, fluid, and visually captivating interactive web experiences.",
      overview:
        "Deep-dived into front-end modern web stack development, focusing on React component modularity, custom hooks, and high-performance UI/UX design.",
      achievements: [
        "Engineered multiple glassmorphism single-page web applications.",
        "Implemented smooth micro-interactions, responsive grids, and dark theme UI systems.",
        "Integrated client-side state management and interactive visualizations.",
      ],
      gallery: [
        {
          label: "Portfolio Interactive Components",
          placeholder: "React UI Showcase",
        },
        {
          label: "Responsive Layout Preview",
          placeholder: "Tailwind CSS Design System",
        },
      ],
    },
  },
  {
    id: "quality-engineer",
    period: "2025 - 2026",
    role: "Quality Engineer / Data Analyst",
    company: "Continental Automotive | Novi Sad, Serbia",
    description:
      "Quality KPI monitoring, Power BI reporting, data validation, QMS support, audit coordination, and continuous process improvement.",
    technologies: [
      "Power BI",
      "Excel",
      "SQL",
      "Azure SQL",
      "ETL Pipelines",
      "QMS",
    ],
    current: false,
    path: "/experience/quality-engineer",
    metrics: "Quality KPIs & Reporting",
    highlights: [
      "Developed and monitored KPIs across quality and production processes",
      "Maintained reporting solutions integrating Power BI and Azure SQL data",
      "Supported audits, QMS documentation, and continuous improvement",
    ],
    modalContent: {
      tagline:
        "Connecting quality engineering, production performance, and data analytics to improve visibility, reliability, and operational decision-making.",
      overview:
        "At Continental in Novi Sad, I worked across quality engineering, data analytics, reporting, and operational support. My responsibilities included KPI monitoring, Power BI reporting, data validation, QMS documentation, audit coordination, competency reporting, and process improvement. I collaborated with quality management, team leaders, and cross-functional stakeholders to support consistent processes and data-informed decisions.",
      achievements: [
        "Developed and monitored key performance indicators (KPIs) to support quality performance monitoring, operational reporting, and data-driven decision-making across quality and production processes.",
        "Designed and maintained reporting solutions, including interactive Power BI dashboards integrating Azure SQL data and automated ETL pipelines, improving reporting efficiency and business visibility.",
        "Monitored data quality across accuracy, completeness, consistency, and duplication, supporting data validation, reconciliation, and alignment across multiple data sources.",
        "Supported Quality Management System (QMS) implementation, maintenance, and continuous improvement in alignment with internal procedures, applicable standards, and operational requirements.",
        "Coordinated audit preparation, tracking, and documentation, including follow-up on audit findings, corrective actions, and implementation of QMS requirements on the production shop floor.",
        "Supported internal and external audits, including smaller production audits, lead auditor activities, and preparation of documentation and materials for customer and supplier audit visits.",
        "Assisted with IATF documentation review, standards alignment, procedure updates, and preparation of quality documentation for audits.",
        "Collaborated with quality management, team leaders, and cross-functional stakeholders on process optimization, performance alignment, workforce planning, and operational priorities.",
        "Supported competency management and training activities, including training planning, skills tracking, competency reporting, and the development and improvement of training applications.",
        "Monitored quality-related budgets, purchase orders, and inventory to support resource allocation, cost visibility, and operational planning.",
        "Analyzed production inventory, quality inventory, and waste management processes to identify inefficiencies, improve material tracking, and support waste reduction initiatives.",
        "Prepared and optimized laboratory reports featuring product quality KPIs to improve visibility into product performance and facilitate quality monitoring.",
        "Supported the implementation of new QMS tools, process standardization, troubleshooting, and continuous improvement initiatives across quality and production operations.",
      ],
      skillGroups: [
        {
          title: "Quality Management & Compliance",
          icon: "quality",
          skills: [
            "Quality Management Systems (QMS)",
            "ISO 9001",
            "IATF 16949 Documentation",
            "Internal Audit Support",
            "Audit Preparation & Findings Tracking",
            "Corrective & Preventive Actions",
            "SOPs & Documentation",
            "Supplier & Customer Audit Support",
            "Data Quality Management",
          ],
        },
        {
          title: "Problem-Solving & Continuous Improvement",
          icon: "improvement",
          skills: [
            "Root Cause Analysis (RCA)",
            "8D Problem Solving",
            "FMEA",
            "5 Whys Analysis",
            "Ishikawa / Fishbone Diagrams",
            "PDCA Cycle",
            "DMAIC",
            "Kaizen",
            "Process Standardization",
            "Waste Reduction",
          ],
        },
        {
          title: "Data Analytics & Business Intelligence",
          icon: "analytics",
          skills: [
            "KPI Development & Monitoring",
            "Power BI Dashboards",
            "SQL Data Analysis",
            "Advanced Excel Analysis",
            "Data Validation & Reconciliation",
            "Automated Reporting",
            "ETL Pipelines",
            "Azure SQL",
            "Statistical Process Control (SPC)",
            "Quality & Competency Reporting",
          ],
        },
        {
          title: "Operations & Supply Chain",
          icon: "operations",
          skills: [
            "Inventory Management",
            "Waste Management",
            "Workforce & Resource Planning",
            "Budget & Purchase Order Tracking",
            "Lean Manufacturing",
            "Just-in-Time (JIT)",
            "Kanban",
            "Value Stream Mapping",
            "Supplier Quality Support",
            "Logistics Process Optimization",
          ],
        },
      ],
      gallery: [
        {
          label: "Business Intelligence & KPI Reporting",
          placeholder: "Power BI dashboards and performance monitoring",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        },
        {
          label: "Automotive Quality Engineering",
          placeholder: "Industrial quality control and manufacturing",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
        },
        {
          label: "Data Analysis & Reporting",
          placeholder: "Analytical workflows and business insights",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
        },
        {
          label: "Production & Process Improvement",
          placeholder: "Manufacturing operations and process optimization",
          image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85",
        },
      ],
    },
  },
  {
    id: "pbi-sql",
    period: "2025 - 2026",
    role: "Power BI & SQL",
    company: "Learned & Applied at Continental",
    description:
      "Developed practical Power BI and SQL skills through quality engineering, data analysis, KPI reporting and process improvement work.",
    technologies: ["Power BI", "SQL", "DAX", "Data Modeling"],
    current: false,
    learning: true,
    logos: ["powerbi", "sql"],
    metrics: "15+ Production Dashboards",
    highlights: [
      "Wrote advanced DAX measures and custom dynamic data models",
      "Integrated SQL views with Power BI data flows for live refresh",
      "Engineered automated daily email reports for plant operations",
    ],
    modalContent: {
      tagline:
        "Mastering database querying, DAX calculations, and automated data visualizations.",
      overview:
        "Hands-on mastery of relational databases and Power BI report building, developed through real-world manufacturing environments at Continental.",
      achievements: [
        "Wrote complex multi-table SQL joins and optimized view execution speeds.",
        "Built sophisticated DAX measures for year-over-year KPI comparisons.",
        "Configured automatic enterprise gateway refreshes and user security roles.",
      ],
      gallery: [
        {
          label: "Data Model Relational Schema",
          placeholder: "Power BI Star Schema",
        },
        {
          label: "DAX Measures Workbench",
          placeholder: "SQL Query Optimization Workbench",
        },
      ],
    },
  },
 
{
  id: "logistics",
  period: "2023 - 2025",
  role: "Logistics & Supply Chain Manager",
  company: "Novus M Plus Trade | Novi Sad, Serbia",
  description:
    "Managed supply chain operations, inventory performance, logistics KPIs, and process optimization across international distribution networks.",
  technologies: ["SAP", "Excel", "Power BI", "SQL"],
  current: false,
  path: "/experience/logistics",
  metrics: "18% Freight Cost Reduction",
  highlights: [
    "Managed end-to-end logistics operations and inventory coordination.",
    "Monitored operational KPIs to identify bottlenecks and improve process efficiency.",
    "Optimized distribution routes and supported cost-reduction initiatives.",
  ],
  modalContent: {
    tagline:
      "Connecting supply chain performance, operational data, and continuous process improvement.",
    overview:
      "Managed logistics and supply chain activities with a focus on inventory optimization, shipment coordination, supplier communication, and operational performance. Used SAP and structured reporting to support process visibility, identify inefficiencies, and improve logistics workflows across regional distribution networks.",
    achievements: [
      "Contributed to an 18% reduction in freight costs through distribution and logistics process optimization.",
      "Coordinated inventory tracking and shipment workflows using SAP to improve operational visibility.",
      "Monitored logistics performance indicators to identify delays, bottlenecks, and improvement opportunities.",
      "Supported supplier coordination, customs documentation, and international shipment planning.",
      "Improved workflow consistency through structured tracking, reporting, and cross-functional communication.",
    ],
    gallery: [
      {
        label: "Supply Chain Performance",
        placeholder: "Logistics KPI Dashboard",
      },
      {
        label: "Inventory & Distribution",
        placeholder: "Inventory Optimization View",
      },
    ],
  },
}

];

const skillGroupIcons = {
  quality: ShieldCheck,
  improvement: Workflow,
  analytics: Database,
  operations: Factory,
};

export const Experience = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const sectionRef = useRef(null);

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
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(currentSection);

    return () => observer.unobserve(currentSection);
  }, []);

useEffect(() => {
  if (!selectedExperience) return;

  const previousBodyOverflow = document.body.style.overflow;
  const previousHtmlOverflow = document.documentElement.style.overflow;

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;
  };
}, [selectedExperience]);

  const timelineRows = [
    { left: experience[1], right: experience[2] },
    { left: null, right: experience[0] },
    { left: experience[3], right: experience[4] },
    { left: null, right: experience[5] },
  ];

  return (
    <div className="relative font-sans selection:bg-purple-500 selection:text-white">
      {/* STATIC BACKGROUND LAYER */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden -z-50 bg-[#09050D]"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09050D] to-transparent z-10" />

        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />

        <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />

        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09050D] to-transparent z-10" />
      </div>

      <section
        id="experience"
        ref={sectionRef}
        className="relative overflow-hidden py-16 text-white"
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* HEADER */}
          <div
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-xs font-medium tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] animate-pulse" />
              Career Journey
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-5 text-white tracking-tight">
              From experience{" "}
              <span className="font-serif italic font-normal text-purple-300">
                to what comes next
              </span>
            </h2>

            <p className="mt-4 text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Hover over any bubble to expand in-place, or click to open a full
              screen detail window directly over your viewing screen.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative origin-top md:scale-[0.95]">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-80px] w-[2px] bg-gradient-to-b from-purple-400/20 via-purple-400/80 to-transparent shadow-[0_0_18px_rgba(168,85,247,0.8)] hidden md:block" />

              <div className="absolute left-4 top-0 bottom-[-80px] w-[2px] bg-gradient-to-b from-purple-400/20 via-purple-400/80 to-transparent shadow-[0_0_18px_rgba(168,85,247,0.8)] md:hidden" />

              <div
                className={`relative flex justify-center mb-16 transition-all duration-1000 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-12 bg-gradient-to-b from-purple-400/60 to-purple-400/20" />

                <div className="relative z-20 px-6 py-3.5 rounded-xl border border-purple-400/40 bg-[#0e071b] shadow-[0_0_30px_rgba(139,92,246,0.2)] text-center">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-purple-300/70 mb-0.5">
                    And the journey continues
                  </span>

                  <span className="text-base md:text-lg font-semibold text-white">
                    More to come
                  </span>
                </div>
              </div>

              {/* TIMELINE ROWS */}
              <div className="space-y-12 md:space-y-16">
                {timelineRows.map((row, idx) => {
                  const nodeExperience = row.left || row.right;
                  const isHovered = hoveredIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`relative grid md:grid-cols-2 md:gap-16 transition-all duration-700 ${
                        isInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      <div
                        className={`absolute z-30 left-4 md:left-1/2 top-8 -translate-y-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-purple-300 bg-[#120a26] transition-transform duration-500 ${
                          isHovered
                            ? "scale-150 shadow-[0_0_25px_rgba(168,85,247,1)]"
                            : "shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                        }`}
                      >
                        <span className="absolute inset-1 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)]" />

                        {nodeExperience?.current && (
                          <span className="absolute -inset-2 rounded-full border border-purple-400/50 animate-ping" />
                        )}
                      </div>

                      <div className="md:col-start-1 pl-12 md:pl-0">
                        {row.left && (
                          <ExpandableBubbleCard
                            exp={row.left}
                            onHoverChange={(hovering) =>
                              setHoveredIndex(hovering ? idx : null)
                            }
                            onClick={() => setSelectedExperience(row.left)}
                          />
                        )}
                      </div>

                      <div className="md:col-start-2 pl-12 md:pl-0">
                        {row.right && (
                          <ExpandableBubbleCard
                            exp={row.right}
                            onHoverChange={(hovering) =>
                              setHoveredIndex(hovering ? idx : null)
                            }
                            onClick={() => setSelectedExperience(row.right)}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedExperience &&
        createPortal(
          <ScreenViewportWindow
            exp={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />,
          document.body
        )}
    </div>
  );
};


/* =========================================================
   HOVER EXPANDABLE BUBBLE CARD
========================================================= */

const ExpandableBubbleCard = ({ exp, onHoverChange, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLogistics = exp.id === "logistics";

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverChange?.(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverChange?.(false);
      }}
      className={`
        group relative rounded-2xl border cursor-pointer overflow-hidden p-6 backdrop-blur-2xl
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu
        ${
          exp.learning && exp.logos?.includes("powerbi")
            ? "border-purple-400/35 bg-[#140b2a]/90 shadow-[0_8px_30px_rgba(124,58,237,0.2)]"
            : exp.learning
              ? "border-purple-400/25 bg-[#120a26]/85 shadow-[0_8px_30px_rgba(124,58,237,0.15)]"
              : "border-purple-400/20 bg-[#100a20]/90 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        }
        ${
          isHovered
            ? "-translate-y-2 border-purple-400/80 shadow-[0_20px_60px_rgba(147,51,234,0.35)] z-40 bg-[#170c32]"
            : "hover:border-purple-400/40"
        }
      `}
    >
      {/* HOVER BACKGROUND */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-600/15 via-purple-500/5 to-transparent pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute -right-20 -top-20 w-44 h-44 rounded-full bg-purple-500/20 blur-3xl transition-all duration-700 pointer-events-none ${
          isHovered ? "scale-150 opacity-100" : "opacity-0"
        }`}
      />

      {/* PERIOD AND BADGES */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase flex items-center gap-1.5">
          <Sparkles
            className={`w-3.5 h-3.5 transition-transform duration-500 ${
              isHovered ? "rotate-45 text-purple-200" : "text-purple-400"
            }`}
          />
          {exp.period}
        </span>

        <div className="flex items-center gap-2">
          {exp.current && (
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-[10px] font-semibold tracking-wide text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Current
            </span>
          )}

          {exp.learning && (
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-300/30 text-[10px] font-semibold uppercase tracking-widest text-purple-100/80">
              Learning
            </span>
          )}

          <div
            className={`w-7 h-7 rounded-full border border-purple-400/30 flex items-center justify-center transition-all duration-500 ${
              isHovered
                ? "bg-purple-500 text-white border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.8)] rotate-45 scale-110"
                : "bg-purple-950/40 text-purple-300"
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* EXPERIENCE DETAILS */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-100">
          {exp.role}
        </h3>

        <p className="text-xs font-medium text-purple-300/80 mb-3">
          {exp.company}
        </p>

        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border backdrop-blur-sm transition-all duration-300 ${
                isHovered
                  ? "bg-purple-500/25 text-purple-100 border-purple-400/40 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
                  : "bg-purple-500/10 text-purple-300 border-purple-500/20"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* EXPANDED CONTENT — SAME STRUCTURE FOR ALL EXPERIENCE BUBBLES */}
      <div
        className={`relative z-10 grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered
            ? "grid-rows-[1fr] opacity-100 pt-4 mt-4 border-t border-purple-400/20"
            : "grid-rows-[0fr] opacity-0 pt-0 mt-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden space-y-3">
          {exp.metrics && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-semibold">
              <BarChart2 className="w-3.5 h-3.5 text-purple-300" />
              <span>
                Key Impact:{" "}
                <strong className="text-white">{exp.metrics}</strong>
              </span>
            </div>
          )}

          {exp.highlights?.length > 0 && (
            <div className="space-y-1.5">
              {exp.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-gray-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* LOGISTICS-SPECIFIC DETAIL */}
          {isLogistics && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Supply Chain", "Inventory Optimization", "SAP", "International Logistics"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-purple-400/20 bg-purple-500/[0.08] px-2.5 py-1 text-[10px] font-medium text-purple-200"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          )}

          <div className="pt-2 flex justify-between items-center text-[11px] text-purple-300/70 italic">
            <span>Click card for full case study</span>
            <span className="font-semibold text-purple-300 underline flex items-center gap-1">
              Read More <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================
   FULL-SCREEN EXPERIENCE MODAL
========================================================= */


const ScreenViewportWindow = ({ exp, onClose }) => {
  const contentBodyRef = useRef(null);

  useEffect(() => {
    if (contentBodyRef.current) {
      contentBodyRef.current.scrollTop = 0;
    }

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      event.stopPropagation();
      onClose();
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [exp.id, onClose]);

  const achievements =
    exp.modalContent?.achievements || exp.highlights || [];

  const isContinental = exp.id === "quality-engineer";
  const isLogistics = exp.id === "logistics";

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start justify-center overflow-hidden bg-[#09050D]/95 backdrop-blur-xl p-1 sm:p-2"
      style={{ height: "100dvh", width: "100vw" }}
    >
      <button
        type="button"
        aria-label="Close experience details"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        className="relative z-10 flex w-full max-w-none flex-col overflow-hidden rounded-2xl border border-purple-400/40 bg-[#09050D] text-white shadow-[0_0_80px_rgba(139,92,246,0.35)]"
        style={{
          height: "calc(100dvh - 1rem)",
          maxHeight: "calc(100dvh - 1rem)",
          minHeight: 0,
        }}
      >
        <div className="h-1 shrink-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500" />

        <header className="flex shrink-0 items-center justify-between gap-2 px-3 py-2.5 sm:px-5 sm:py-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-purple-200 transition-colors hover:bg-purple-500 hover:text-white sm:px-3 sm:text-xs"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Back to Timeline</span>
            <span className="sm:hidden">Back</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close experience details"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-200 transition-colors hover:bg-purple-500 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <main
          ref={contentBodyRef}
          className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-4 sm:px-6 sm:py-5 lg:px-8"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarGutter: "stable",
          }}
        >
          {isContinental ? (
            <ContinentalMagazine
              exp={exp}
              achievements={achievements}
            />
          ) : isLogistics ? (
            <LogisticsMagazine
              exp={exp}
              achievements={achievements}
            />
          ) : (
            <StandardExperienceContent
              exp={exp}
              achievements={achievements}
            />
          )}
        </main>

        <footer className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-purple-500/20 bg-[#120a26] px-3 py-2.5 sm:px-5 sm:py-3">
          <p className="text-[9px] text-purple-300/70 sm:text-[10px]">
            Press{" "}
            <kbd className="rounded border border-purple-500/30 bg-purple-900/50 px-1 py-0.5 text-purple-200">
              ESC
            </kbd>{" "}
            or click outside to close
          </p>

          {exp.path && (
            <Link
              to="/pages?category=Data%20Analytics&category=Cloud%20%26%20Data%20Engineering"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-300/30 bg-purple-500/[0.08] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-100 transition-all duration-300 hover:border-purple-300/60 hover:bg-purple-500/20 hover:text-white sm:text-[11px]"
            >
              <span>View Related Case Studies</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};



/* =========================================================
    CONTINENTAL EDITORIAL / MAGAZINE LAYOUT
========================================================= */

const ContinentalMagazine = ({ exp, achievements }) => {
  const skillGroups = exp.modalContent?.skillGroups || [];

  const keywordPattern =
    /\b(Power BI|Azure SQL|ETL pipelines|key performance indicators \(KPIs\)|KPIs|data-driven decision-making|data quality|data validation|data reconciliation|Quality Management System \(QMS\)|QMS|continuous improvement|audit preparation|audit findings|corrective actions|internal and external audits|IATF documentation|cross-functional stakeholders|process optimization|competency management|training activities|quality-related budgets|purchase orders|inventory|waste reduction|laboratory reports|product quality KPIs|automated reporting|executive dashboards|DAX|SQL|data models|reporting efficiency|production processes|quality performance|operational planning|resource allocation|process standardization|quality documentation|workforce planning|operational priorities|training applications|manufacturing operations|freight expenses|SAP|Google Tag Manager|GA4|return on ad spend|React|JavaScript|Tailwind CSS)\b/gi;

  const renderHighlightedText = (text) => {
    const parts = text.split(keywordPattern);

    return parts.map((part, index) =>
      part.match(keywordPattern) ? (
        <strong
          key={index}
          className="font-semibold text-purple-200"
        >
          {part}
        </strong>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 pb-6 sm:space-y-14">

      {/* OPENING EDITORIAL HERO */}
      <section className="relative isolate overflow-hidden border-b border-purple-300/20 pb-8 sm:pb-12">

        {/* CONTINENTAL LOGO WATERMARK */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden"
        >
          <img
            src="/ProfilePhotos/continental_transparent.png"
            alt=""
            className="absolute -right-8 top-0 w-[75%] max-w-[850px] object-contain opacity-[0.09] sm:-right-4 sm:top-[-3rem] sm:w-[68%] lg:right-0 lg:top-[-5rem] lg:w-[62%]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#09050D] via-[#09050D]/70 to-[#09050D]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09050D]/20 to-[#09050D]" />
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />
        </div>

        {/* MAIN TITLE AND ROLE INFORMATION */}
        <div className="relative z-10">

          {/* ROLE TITLE WITH BRAND WATERMARK BADGE */}
          <div className="max-w-4xl pt-2 sm:pt-5">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-purple-300/25 bg-purple-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <img
                src="/ProfilePhotos/Continental_transparent.png"
                alt="Continental"
                className="h-4 w-4 object-contain opacity-80"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
                Continental Experience Highlights
              </span>
            </div>

            <h1
              id="experience-modal-title"
              className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Quality Engineer
              <span className="mt-1 block font-serif font-normal italic text-purple-300 sm:mt-2">
                / Data Analyst
              </span>
            </h1>

            {/* TIMELINE AND LOCATION */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:mt-7">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
                <Calendar className="h-4 w-4 shrink-0 text-purple-300" />
                {exp.period}
              </span>

              <span className="hidden h-4 w-px bg-purple-300/25 sm:block" />

              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
                <Building2 className="h-4 w-4 shrink-0 text-purple-300" />
                Continental Automotive
              </span>

              <span className="hidden h-4 w-px bg-purple-300/25 sm:block" />

              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                Novi Sad, Serbia
              </span>
            </div>
          </div>

          {/* INTRODUCTORY EDITORIAL LAYOUT */}
          <div className="mt-9 grid items-start gap-7 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

            {/* INTRODUCTION */}
            <div className="relative z-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-300 sm:text-[11px]">
                Behind the process
              </p>

              <p className="max-w-xl font-serif text-lg italic leading-relaxed text-purple-100/90 sm:text-xl lg:text-2xl">
                {exp.modalContent?.tagline || exp.description}
              </p>

              <div className="my-5 h-px w-20 bg-gradient-to-r from-purple-300/80 to-transparent sm:my-6" />

              <p className="max-w-2xl text-xs leading-[1.9] text-gray-300 sm:text-sm sm:leading-[2]">
                {exp.modalContent?.overview || exp.description}
              </p>

              {/* ROLE FOCUS + VIEW TRACKED TASKS */}
              <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8">

                {/* ROLE FOCUS */}
                <div className="inline-flex max-w-full items-center gap-3 border-l-2 border-purple-400/70 bg-purple-500/[0.06] py-3 pl-4 pr-4 sm:pr-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/[0.08]">
                    <BarChart2 className="h-5 w-5 text-purple-200" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-purple-300/70">
                      Role focus
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-relaxed text-white sm:text-sm">
                      Quality · Analytics · Process Improvement
                    </p>
                  </div>
                </div>

                {/* VIEW TRACKED TASKS LIST */}
                <a
                  href="YOUR_NOTION_PAGE_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-300/30 bg-purple-500/[0.08] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-100 transition-all duration-300 hover:border-purple-300/60 hover:bg-purple-500/20 hover:text-white sm:text-[11px]"
                >
                  View Tracked Tasks List

                  <ExternalLink className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </div>
            </div>

            {/* SHOP-FLOOR PHOTOGRAPH */}
            <div className="relative min-w-0 pb-4 pl-2 sm:pb-6 sm:pl-4">
              <div className="absolute right-0 top-[-0.5rem] h-[65%] w-[72%] border-r border-t border-purple-300/25" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-600/15 blur-[65px]" />

              <div className="relative aspect-[5/4] overflow-hidden border border-purple-300/20 bg-[#151020] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
                <img
                  src={CONTINENTAL_ASSETS.shopfloor}
                  alt="Continental production shop floor"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09050D]/90 via-[#09050D]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-200">
                    Inside the operation
                  </p>

                  <h2 className="mt-1 font-serif text-xl italic text-white sm:text-2xl">
                    From shop floor to insights.
                  </h2>

                  <p className="mt-2 max-w-md text-[11px] leading-relaxed text-white/70 sm:text-xs">
                    Connecting operational processes, performance indicators,
                    and quality requirements through structured reporting.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES + FULL-WIDTH CINEMATIC PLANT PHOTO HERO */}
      <section className="relative space-y-8">

        {/* FULL-WIDTH SCREEN-EDGE PLANT VISUAL */}
        <div className="relative -mx-4 overflow-hidden border-y border-purple-300/25 bg-[#151020] shadow-[0_30px_90px_rgba(0,0,0,0.6)] sm:-mx-6 lg:-mx-12">
          <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[480px]">
            <img
              src={CONTINENTAL_ASSETS.plant}
              alt="Continental plant and manufacturing environment"
              className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            {/* CINEMATIC MULTI-STOP GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09050D] via-[#09050D]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09050D]/60 via-transparent to-[#09050D]/60" />

            {/* FLOATING BANNER INSIDE THE WIDE PHOTO */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 sm:bottom-10 sm:left-12 sm:right-12 sm:flex-row sm:items-end">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-300/30 bg-black/45 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-100 backdrop-blur-md">
                  <Factory className="h-3 w-3" />
                  Manufacturing environment
                </span>

                <h3 className="mt-3 font-serif text-2xl italic leading-tight text-white sm:text-4xl">
                  Every process tells a story.
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                  Quality systems, process discipline, and reliable data work
                  together to support consistent operational performance across
                  the enterprise.
                </p>
             
              </div>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL OVERLAPPING RESPONSIBILITIES CONTAINER */}
        <div className="relative z-20 mt-6 px-2 sm:mt-8 sm:px-6">
          <div className="mb-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              The work behind the results
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Key responsibilities
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
              A combination of analytical reporting, quality systems, audit
              support, and operational improvement.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-purple-300/30 bg-gradient-to-br from-[#1b122f]/98 via-[#130b22]/98 to-[#0c0716]/98 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/15 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 top-8 w-[2px] bg-gradient-to-b from-purple-300/80 via-violet-500/30 to-transparent" />

            <div className="relative grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
              {achievements.map((item, index) => (
                <article
                  key={index}
                  className={`group flex items-start gap-3.5 border-purple-300/[0.12] py-4.5 ${
                    index > 0 ? "border-t" : ""
                  } ${
                    index >= 2
                      ? "md:border-t md:border-purple-300/[0.12]"
                      : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-300/25 bg-purple-400/[0.12] transition-colors duration-300 group-hover:border-purple-300/50 group-hover:bg-purple-400/20">
                    <CheckCircle2 className="h-4 w-4 text-purple-300" />
                  </span>

                  <p className="text-xs leading-[1.85] text-gray-200 sm:text-[13px]">
                    {renderHighlightedText(item)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* PROFESSIONAL SKILLS */}
      {skillGroups.length > 0 && (
        <section>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
                Professional toolkit
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Skills & competencies
              </h2>
            </div>

          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {skillGroups.map((group) => {
              const GroupIcon =
                skillGroupIcons[group.icon] || ClipboardCheck;

              return (
                <article
                  key={group.title}
                  className="group relative overflow-hidden rounded-xl border border-purple-400/20 bg-gradient-to-br from-[#17102a] to-[#0e0918] p-4 transition-colors duration-300 hover:border-purple-300/40 sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold leading-relaxed text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/15">
                        <GroupIcon className="h-4 w-4 text-purple-300" />
                      </span>

                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-purple-400/20 bg-purple-500/[0.08] px-2.5 py-1.5 text-[10px] leading-snug text-purple-100/90 sm:text-[11px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* ANALYTICS VISUAL GALLERY */}
      <section>
        <div className="mb-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
            Visual perspective
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Analytics & operations
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
            Illustrative visual references connected to reporting, data
            analysis, and production operations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(exp.modalContent?.gallery || []).map((media, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl border border-purple-400/20 bg-[#120a26]/80 transition-colors hover:border-purple-400/50"
            >
              {media.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151020]">
                  <img
                    src={media.image}
                    alt={media.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09050D]/70 to-transparent" />
                </div>
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-purple-950/50 to-[#0d0915] p-5 text-center">
                  <ImageIcon className="mb-3 h-6 w-6 text-purple-300/70" />

                  <p className="text-xs font-semibold text-white">
                    {media.label}
                  </p>

                  <p className="mt-2 text-[10px] text-purple-200/60">
                    {media.placeholder}
                  </p>
                </div>
              )}

              <div className="p-3.5">
                <h3 className="text-xs font-semibold leading-relaxed text-white">
                  {media.label}
                </h3>

                <p className="mt-1.5 text-[10px] leading-relaxed text-purple-200/60">
                  {media.placeholder}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TOOLS AND TECHNOLOGIES */}
      <section className="border-t border-purple-400/20 pt-6">
        <div className="grid gap-5 sm:grid-cols-[0.65fr_1.35fr] sm:items-start">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              Working toolkit
            </p>

            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Tools & technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-[11px] font-medium text-purple-100 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL CLOSING */}
      <section className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-gradient-to-r from-[#1a102b] via-[#100a1b] to-[#171027] p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-purple-500/15 blur-[70px]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              The bigger picture
            </p>

            <h2 className="mt-2 font-serif text-xl italic text-white sm:text-2xl">
              Reliable processes. Meaningful data. Continuous improvement.
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
              This experience strengthened the connection between analytical
              thinking, operational understanding, and structured quality
              management.
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-purple-300/25 bg-purple-400/10 sm:self-center">
            <Sparkles className="h-5 w-5 text-purple-200" />
          </div>
        </div>
      </section>

    </div>
  );
};

/* =========================================================
   STANDARD EXPERIENCE CONTENT
========================================================= */

const StandardExperienceContent = ({ exp, achievements }) => {
  const gallery = exp.modalContent?.gallery || [];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 pb-6 sm:space-y-12">
      <section className="relative overflow-hidden border-b border-purple-300/20 pb-8 sm:pb-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]" />

        <div className="relative">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
            Experience highlights
          </p>

          <h1
            id="experience-modal-title"
            className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl"
          >
            {exp.role}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/70 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-300" />
              {exp.period}
            </span>

            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-purple-300" />
              {exp.company}
            </span>
          </div>

          <p className="mt-7 max-w-3xl font-serif text-lg italic leading-relaxed text-purple-100/90 sm:text-2xl">
            {exp.modalContent?.tagline || exp.description}
          </p>

          <p className="mt-5 max-w-4xl text-xs leading-[1.9] text-gray-300 sm:text-sm">
            {exp.modalContent?.overview || exp.description}
          </p>
        </div>
      </section>

      {exp.metrics && (
        <section className="rounded-2xl border border-purple-300/25 bg-gradient-to-br from-[#211438] to-[#0c0716] p-5 sm:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
            Key impact
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {exp.metrics}
          </h2>
        </section>
      )}

      <section>
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
          The work behind the results
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Key achievements
        </h2>

        <div className="mt-5 grid gap-x-8 md:grid-cols-2">
          {achievements.map((item, index) => (
            <article
              key={index}
              className="flex items-start gap-3 border-t border-purple-300/15 py-4"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />

              <p className="text-xs leading-[1.85] text-gray-200 sm:text-[13px]">
                {item}
              </p>
            </article>
          ))}
        </div>
      </section>

      {gallery.length > 0 && (
        <section>
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
            Visual perspective
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Project gallery
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {gallery.map((media, index) => (
              <article
                key={media.label || index}
                className="overflow-hidden rounded-xl border border-purple-400/20 bg-[#120a26]/80"
              >
                {media.image ? (
                  <img
                    src={media.image}
                    alt={media.label}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[16/9] flex-col items-center justify-center bg-gradient-to-br from-purple-950/50 to-[#0d0915] p-5 text-center">
                    <ImageIcon className="mb-3 h-6 w-6 text-purple-300/70" />

                    <p className="text-sm font-semibold text-white">
                      {media.label}
                    </p>

                    <p className="mt-2 text-xs text-purple-200/60">
                      {media.placeholder}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-purple-400/20 pt-6">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Tools & technologies
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-[11px] font-medium text-purple-100 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};


/* =========================================================
   LOGISTICS & SUPPLY CHAIN EDITORIAL / MAGAZINE LAYOUT
========================================================= */

const LogisticsMagazine = ({ exp, achievements }) => {
  const gallery = exp.modalContent?.gallery || [];

  const logisticsKeywords =
    /\b(supply chain|inventory|SAP|logistics|freight costs|freight|distribution|operational performance|operational visibility|KPI|KPIs|process optimization|shipment coordination|supplier coordination|customs documentation|reporting|cost reduction|Power BI|SQL|Excel|international distribution|bottlenecks|workflow consistency)\b/gi;

  const renderHighlightedText = (text) => {
    const parts = text.split(logisticsKeywords);

    return parts.map((part, index) =>
      part.match(logisticsKeywords) ? (
        <strong
          key={index}
          className="font-semibold text-purple-200"
        >
          {part}
        </strong>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 pb-6 sm:space-y-14">

      {/* EDITORIAL HERO */}
      <section className="relative isolate overflow-hidden border-b border-purple-300/20 pb-8 sm:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-12 top-0 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09050D] via-transparent to-purple-950/20" />
        </div>

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-purple-300/25 bg-purple-950/40 px-3.5 py-1.5 backdrop-blur-md">
            <Factory className="h-4 w-4 text-purple-200" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
              Supply Chain Experience Highlights
            </span>
          </div>

          <h1
            id="experience-modal-title"
            className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Logistics & Supply Chain
            <span className="mt-1 block font-serif font-normal italic text-purple-300 sm:mt-2">
              Manager
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:mt-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <Calendar className="h-4 w-4 text-purple-300" />
              {exp.period}
            </span>

            <span className="hidden h-4 w-px bg-purple-300/25 sm:block" />

            <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <Building2 className="h-4 w-4 text-purple-300" />
              Novus M Plus Trade
            </span>

            <span className="hidden h-4 w-px bg-purple-300/25 sm:block" />

            <span className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
              Novi Sad, Serbia
            </span>
          </div>

          {/* INTRODUCTION + IMPACT */}
          <div className="mt-9 grid items-start gap-7 lg:mt-12 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-300 sm:text-[11px]">
                Behind the operation
              </p>

              <p className="max-w-xl font-serif text-lg italic leading-relaxed text-purple-100/90 sm:text-xl lg:text-2xl">
                {exp.modalContent?.tagline || exp.description}
              </p>

              <div className="my-5 h-px w-20 bg-gradient-to-r from-purple-300/80 to-transparent sm:my-6" />

              <p className="max-w-2xl text-xs leading-[1.9] text-gray-300 sm:text-sm sm:leading-[2]">
                {exp.modalContent?.overview || exp.description}
              </p>
            </div>

            {/* KEY BUSINESS IMPACT */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-300/25 bg-gradient-to-br from-[#211438] via-[#150c25] to-[#0c0716] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.4)] sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-[65px]" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/25 bg-purple-400/10">
                  <TrendingUp className="h-5 w-5 text-purple-200" />
                </div>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Key business impact
                </p>

                <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {exp.metrics || "Supply Chain Performance"}
                </h2>

                <p className="mt-4 text-xs leading-relaxed text-gray-300 sm:text-sm">
                  Supporting cost-conscious distribution, inventory visibility,
                  operational reporting, and continuous workflow improvement.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Supply Chain", "Inventory", "Distribution"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-purple-300/20 bg-purple-400/[0.08] px-3 py-1.5 text-[10px] text-purple-100"
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

      {/* CINEMATIC OPERATIONS VISUAL */}
      <section className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-gradient-to-br from-[#1b122f] via-[#100a1b] to-[#0c0716]">
        <div className="relative grid lg:grid-cols-[1fr_0.8fr]">
          <div className="relative flex min-h-[260px] flex-col justify-end overflow-hidden p-6 sm:min-h-[340px] sm:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(139,92,246,0.25),transparent_55%),linear-gradient(135deg,rgba(76,29,149,0.15),transparent_70%)]" />

            <div className="absolute right-8 top-8 opacity-20">
              <Workflow className="h-24 w-24 text-purple-300 sm:h-32 sm:w-32" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-100">
                <Factory className="h-3.5 w-3.5" />
                Operations & Distribution
              </span>

              <h2 className="mt-4 max-w-lg font-serif text-2xl italic leading-tight text-white sm:text-4xl">
                From inventory movement to operational insight.
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/70 sm:text-sm">
                Coordinating logistics activities, tracking performance, and
                using structured information to identify opportunities for
                more efficient supply chain workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-purple-300/15 bg-purple-300/10 lg:border-l lg:border-t-0">
            {[
              {
                icon: Database,
                title: "Inventory visibility",
                text: "Structured tracking of inventory and shipment activity.",
              },
              {
                icon: BarChart2,
                title: "KPI monitoring",
                text: "Performance indicators for operational decision-making.",
              },
              {
                icon: Workflow,
                title: "Process improvement",
                text: "Identifying bottlenecks and improving workflows.",
              },
              {
                icon: Building2,
                title: "Coordination",
                text: "Supplier, shipment, and distribution coordination.",
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-[#100a1b]/80 p-4 transition-colors hover:bg-purple-500/[0.08] sm:p-6"
                >
                  <ItemIcon className="h-5 w-5 text-purple-300" />

                  <h3 className="mt-4 text-xs font-semibold text-white sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-relaxed text-gray-400 sm:text-xs">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section>
        <div className="mb-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
            The work behind the results
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Key responsibilities & achievements
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
            Supply chain coordination, cost optimization, inventory management,
            and performance monitoring.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-purple-300/30 bg-gradient-to-br from-[#1b122f]/98 via-[#130b22]/98 to-[#0c0716]/98 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/15 blur-[80px]" />

          <div className="relative grid gap-x-8 md:grid-cols-2">
            {achievements.map((item, index) => (
              <article
                key={index}
                className={`group flex items-start gap-3.5 border-purple-300/[0.12] py-4 ${
                  index > 0 ? "border-t" : ""
                } ${
                  index >= 2
                    ? "md:border-t md:border-purple-300/[0.12]"
                    : ""
                }`}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-300/25 bg-purple-400/[0.12] transition-colors group-hover:bg-purple-400/20">
                  <CheckCircle2 className="h-4 w-4 text-purple-300" />
                </span>

                <p className="text-xs leading-[1.85] text-gray-200 sm:text-[13px]">
                  {renderHighlightedText(item)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS VISUAL GALLERY */}
      <section>
        <div className="mb-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
            Visual perspective
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Supply chain & performance
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
            Visual spaces for logistics reporting, inventory tracking, and
            distribution performance.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((media, index) => (
            <article
              key={media.label || index}
              className="group overflow-hidden rounded-xl border border-purple-400/20 bg-[#120a26]/80 transition-colors hover:border-purple-400/50"
            >
              <div className="relative flex aspect-[16/7] flex-col justify-end overflow-hidden bg-gradient-to-br from-[#291747] via-[#151020] to-[#0b0712] p-5 sm:p-7">
                <div className="pointer-events-none absolute -right-4 -top-10 opacity-20">
                  {index === 0 ? (
                    <BarChart2 className="h-32 w-32 text-purple-300" />
                  ) : (
                    <Layers className="h-32 w-32 text-purple-300" />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#09050D]/80 via-transparent to-transparent" />

                <div className="relative">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                    {index === 0 ? "Performance analytics" : "Operations"}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold text-white sm:text-base">
                    {media.label}
                  </h3>

                  <p className="mt-1.5 text-[10px] text-purple-100/65 sm:text-xs">
                    {media.placeholder}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="border-t border-purple-400/20 pt-6">
        <div className="grid gap-5 sm:grid-cols-[0.65fr_1.35fr] sm:items-start">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              Working toolkit
            </p>

            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Tools & technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-[11px] font-medium text-purple-100 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL CLOSING */}
      <section className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-gradient-to-r from-[#1a102b] via-[#100a1b] to-[#171027] p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-purple-500/15 blur-[70px]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              The bigger picture
            </p>

            <h2 className="mt-2 font-serif text-xl italic text-white sm:text-2xl">
              Efficient operations. Clear performance. Better decisions.
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
              This experience combined supply chain coordination with structured
              reporting, inventory visibility, and a continuous improvement
              mindset.
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-purple-300/25 bg-purple-400/10 sm:self-center">
            <Sparkles className="h-5 w-5 text-purple-200" />
          </div>
        </div>
      </section>
    </div>
  );
};
