import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    ArrowDown,
    ArrowUp,
    CalendarDays,
    BriefcaseBusiness,
    CheckCircle2,
    Truck,
    Package,
    ShoppingCart,
    BarChart3,
    Boxes,
    Users,
    TrendingUp,
    Database,
    ClipboardList,
    Warehouse,
    Lightbulb,
    Route,
    Factory,
} from "lucide-react";

export default function ExperienceLogistics() {
    const responsibilities = [
        {
            number: "01",
            title: "Supply Chain Management",
            text: "Managed day-to-day supply chain and logistics activities within an automotive maintenance business, connecting purchasing, inventory, suppliers and operational requirements. This gave me practical exposure to how decisions made in one part of the supply chain can directly affect availability, delivery timing, workload and customer service in another.",
        },
        {
            number: "02",
            title: "Purchasing & Procurement",
            text: "Worked with suppliers and accounting to organize deliveries, monitor product availability and plan upcoming supply requirements. I learned that purchasing is not simply about ordering products — it requires understanding current stock, expected demand, supplier timing, operational priorities and the consequences of late or incomplete deliveries.",
        },
        {
            number: "03",
            title: "Automotive Parts Inventory",
            text: "Worked with an inventory of more than 10,000 automotive parts, including new parts, older parts and retrieved clusters of vehicle components across four warehouses. Managing this scale of inventory required attention to product availability, stock status, physical organization and the accuracy of information used for daily decisions.",
        },
        {
            number: "04",
            title: "Inventory System Management",
            text: "Used an inventory management program connected to stock information to monitor available parts, stock movements and parts that were ready to be sold. This experience helped me understand the importance of reliable master data, consistent stock information and having operational information available when decisions need to be made quickly.",
        },
        {
            number: "05",
            title: "Logistics Coordination",
            text: "Planned and coordinated deliveries with suppliers, the inventory responsible person and teams of workers in an environment with strict deadlines and penalties for delays. The role required constant follow-up, prioritization and communication because a delay in one activity could create additional work or disruption further along the process.",
        },
        {
            number: "06",
            title: "Parts Sales & Stock Decisions",
            text: "Supported the sale of new, older and retrieved automotive parts that were available for commercial use and resale. This provided practical insight into the relationship between inventory condition, availability, commercial value and the decision of whether stock should be retained, moved, sold or replenished.",
        },
        {
            number: "07",
            title: "Operational Analytics",
            text: "Analyzed purchasing, inventory and logistics information to identify operational issues, support supply planning and improve stock-related decisions. Although the role was operational rather than purely analytical, it gave me an early understanding of how business data becomes useful when it is connected to a real process and a specific decision.",
        },
        {
            number: "08",
            title: "Cross-functional Coordination",
            text: "Worked closely with accounting, suppliers, workers and inventory colleagues to align information and keep automotive maintenance operations moving. I developed an appreciation for the importance of clear communication between departments, especially when different teams depend on the same information to complete their work.",
        },
    ];

    const skills = [
        "Supply Chain Management",
        "Logistics Management",
        "Automotive Parts Inventory",
        "Warehouse Management",
        "Purchasing",
        "Procurement",
        "Supplier Management",
        "Stock Planning",
        "Inventory Analysis",
        "Inventory Control",
        "KPI Monitoring",
        "Operational Reporting",
        "Process Optimization",
        "Data Analysis",
        "Cross-functional Coordination",
    ];

    const tools = [
        {
            name: "SAP",
            icon: Database,
        },
        {
            name: "Microsoft Excel",
            icon: ClipboardList,
        },
        {
            name: "Power BI",
            icon: BarChart3,
        },
        {
            name: "SQL",
            icon: Database,
        },
        {
            name: "Microsoft Office",
            icon: Boxes,
        },
    ];

    const projects = [
        {
            number: "01",
            icon: Warehouse,
            title: "Inventory Management",
            description:
                "Worked with more than 10,000 automotive parts across four warehouses, monitoring available stock, inventory movements and replenishment requirements. The experience required understanding not only how much stock existed, but also what type of stock it was, where it was located and whether it could be used or sold.",
            tags: ["Inventory", "Stock Planning", "Automotive Parts"],
        },
        {
            number: "02",
            icon: ShoppingCart,
            title: "Purchasing & Suppliers",
            description:
                "Worked with suppliers and accounting to organize deliveries, follow availability and plan upcoming supply requirements for automotive maintenance operations. The work strengthened my understanding of supplier communication, purchasing priorities and the connection between procurement decisions and operational continuity.",
            tags: ["Procurement", "Supplier Management", "Purchasing"],
        },
        {
            number: "03",
            icon: Truck,
            title: "Logistics Coordination",
            description:
                "Planned and coordinated deliveries with suppliers, workers and the inventory responsible person while working under strict deadlines and possible delivery penalties. This taught me how to prioritize tasks, follow dependencies and communicate when timing becomes a critical operational factor.",
            tags: ["Logistics", "Distribution", "Operations"],
        },
        {
            number: "04",
            icon: BarChart3,
            title: "Supply Chain Reporting",
            description:
                "Used inventory and operational information to support stock decisions, parts sales, purchasing activities and supply planning. This experience became an early foundation for the analytical approach I later developed through quality engineering, Power BI, SQL and data analytics projects.",
            tags: ["Inventory System", "Operational Data", "Planning"],
        },
    ];

    const achievements = [
        {
            number: "01",
            value: "10,000+ Parts",
            title: "Worked with large-scale inventory",
            text: "Supported clearer visibility into more than 10,000 new, older and retrieved automotive parts across four warehouses through inventory information and structured stock monitoring. Working at this scale taught me to think about inventory as a system rather than as individual products.",
        },
        {
            number: "02",
            value: "Supply Planning",
            title: "Connected purchasing with operations",
            text: "Worked with suppliers, accounting, workers and inventory colleagues to organize deliveries, anticipate supply requirements and support purchasing decisions. This helped me understand how procurement decisions affect warehouse availability, operational continuity and delivery planning.",
        },
        {
            number: "03",
            value: "Operations",
            title: "Worked in a deadline-driven environment",
            text: "Connected inventory, parts sales, logistics and delivery planning in an automotive maintenance environment where timing mattered and delays could create penalties. The experience strengthened my ability to follow multiple dependencies and keep attention on the operational outcome rather than on an isolated task.",
        },
    ];

    const learned = [
        "How automotive maintenance operations depend on reliable availability of parts, components and materials, and how missing or delayed stock can affect the wider operation.",
        "How to work with a large inventory containing more than 10,000 new, older and retrieved automotive parts across four warehouses while keeping track of availability and stock information.",
        "How procurement, inventory and logistics activities work together as an integrated supply chain rather than as separate departments.",
        "How supplier communication, accounting, warehouse activities and worker coordination connect within daily operations and why information must move between teams at the right time.",
        "How strict delivery deadlines and possible penalties influence purchasing and supply planning, creating a need for prioritization and continuous follow-up.",
        "How inventory systems can support stock monitoring, parts sales and operational decision-making when the underlying information is maintained consistently.",
        "How operational data and KPIs can reveal problems, support planning and turn day-to-day activity into information that can be used for better decisions.",
        "How working close to physical processes gave me a different perspective on data: behind every number in a report there is usually a real product, person, process, customer or operational decision.",
        "How logistics experience created a strong foundation for my later work in quality engineering, reporting and data analytics by teaching me to look at processes from an end-to-end perspective.",
        "How cross-functional work requires both analytical thinking and communication, because a technically correct analysis is only useful when the people responsible for the process can act on it.",
    ];

    return (
        <main
            className="min-h-screen bg-white text-black"
            style={{
                zoom: "0.85",
            }}
        >
            <div>
                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[35rem] h-[35rem] rounded-full bg-purple-700/20 blur-[130px]" />
                        <div className="absolute bottom-[-12rem] left-1/4 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 text-purple-300/60 text-xs uppercase tracking-[0.2em] mb-10">
                            <Route size={16} />
                            Professional Experience
                        </div>

                        <div className="grid lg:grid-cols-[1fr_19rem] gap-16 items-start">
                            <div>
                                <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-5">
                                    Novus M Plus Trade
                                </p>

                                <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-semibold tracking-[-0.065em] leading-[0.86] max-w-6xl">
                                    Supply Chain
                                    <span className="block text-purple-300">
                                        & Logistics
                                    </span>
                                </h1>

                                <p className="mt-9 max-w-2xl text-lg md:text-xl text-white/45 leading-relaxed">
                                    My first professional step after graduating
                                    in Quality Engineering and Logistics,
                                    working in automotive maintenance,
                                    purchasing, inventory management, supplier
                                    coordination and deadline-driven logistics
                                    operations.
                                </p>

                                <p className="mt-6 max-w-2xl text-base md:text-lg text-white/30 leading-relaxed">
                                    This experience gave me something that is
                                    difficult to learn from theory alone:
                                    direct exposure to how products, people,
                                    suppliers, information and deadlines
                                    interact inside a real business. It became
                                    the operational foundation for the way I
                                    approach quality, process improvement and
                                    data analytics today.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60">
                                        <CalendarDays size={15} />
                                        2023 — 2025
                                    </div>

                                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60">
                                        <BriefcaseBusiness size={15} />
                                        Novi Sad, Serbia
                                    </div>
                                </div>
                            </div>

                            {/* VERTICAL STATS */}

                            <div className="lg:border-l lg:border-white/10 lg:pl-10">
                                <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] mb-7">
                                    Role snapshot
                                </p>

                                <div className="space-y-7">
                                    <div className="pb-7 border-b border-white/10">
                                        <p className="text-purple-300 text-4xl md:text-5xl font-semibold tracking-tight">
                                            2+
                                        </p>

                                        <p className="mt-2 text-white/35 text-xs uppercase tracking-[0.2em]">
                                            Years Experience
                                        </p>
                                    </div>

                                    <div className="pb-7 border-b border-white/10">
                                        <p className="text-purple-300 text-4xl md:text-5xl font-semibold tracking-tight">
                                            10,000+
                                        </p>

                                        <p className="mt-2 text-white/35 text-xs uppercase tracking-[0.2em]">
                                            Automotive Parts
                                        </p>
                                    </div>

                                    <div className="pb-7 border-b border-white/10">
                                        <p className="text-purple-300 text-4xl md:text-5xl font-semibold tracking-tight">
                                            12
                                        </p>

                                        <p className="mt-2 text-white/35 text-xs uppercase tracking-[0.2em]">
                                            Core Areas
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-purple-300 text-4xl md:text-5xl font-semibold tracking-tight">
                                            4
                                        </p>

                                        <p className="mt-2 text-white/35 text-xs uppercase tracking-[0.2em]">
                                            Main Workstreams
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM FLOW */}

                        <div className="mt-20 pt-8 border-t border-white/10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: ShoppingCart,
                                        label: "Purchasing",
                                    },
                                    {
                                        icon: Boxes,
                                        label: "Inventory",
                                    },
                                    {
                                        icon: Truck,
                                        label: "Logistics",
                                    },
                                    {
                                        icon: BarChart3,
                                        label: "Analytics",
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="w-10 h-10 rounded-xl border border-purple-300/10 bg-purple-500/10 flex items-center justify-center text-purple-300">
                                                <Icon size={18} />
                                            </div>

                                            <div>
                                                <span className="block text-[9px] text-white/20 uppercase tracking-[0.2em] mb-1">
                                                    0{index + 1}
                                                </span>

                                                <span className="text-sm text-white/60">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    OVERVIEW / EDITORIAL INTRO
                ===================================================== */}

                <section className="bg-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    Overview
                                </p>

                                <div className="w-12 h-px bg-purple-600 mb-7" />

                                <p className="text-sm text-black/40 max-w-xs leading-relaxed">
                                    A role centered around keeping products,
                                    suppliers, inventory and operational
                                    information moving together.
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.04em] max-w-5xl">
                                    Managing supply chain operations means
                                    understanding the relationship between
                                    <span className="text-purple-700">
                                        {" "}
                                        purchasing, inventory, logistics
                                    </span>{" "}
                                    and the data connecting them.
                                </p>

                                <p className="mt-10 text-lg md:text-xl text-black/45 leading-relaxed max-w-3xl">
                                    After completing my studies in Quality
                                    Engineering and Logistics, I joined Novus
                                    M Plus Trade as my first professional step
                                    after graduation. It was a valuable
                                    opportunity to apply what I had studied in
                                    a real automotive environment focused on
                                    the maintenance of large vehicles and
                                    their trailers. The role connected
                                    purchasing, suppliers, accounting,
                                    inventory, workers and logistics
                                    operations while teaching me how strongly
                                    stock availability and delivery planning
                                    influence business performance.
                                </p>

                                <p className="mt-7 text-lg md:text-xl text-black/45 leading-relaxed max-w-3xl">
                                    What made the experience particularly
                                    valuable for my later career was the
                                    exposure to the complete operational
                                    picture. I was not looking at inventory,
                                    purchasing or logistics as isolated
                                    activities. I could see how they depended
                                    on one another. A purchasing decision
                                    affected inventory. Inventory affected
                                    what could be sold or used. Supplier
                                    timing affected logistics. Logistics
                                    affected whether the operation could meet
                                    its deadlines. This way of thinking later
                                    became an important part of my approach to
                                    quality engineering and data analytics.
                                </p>

                                <p className="mt-7 text-lg md:text-xl text-black/45 leading-relaxed max-w-3xl">
                                    It also changed the way I think about data.
                                    Operational data is not valuable simply
                                    because it exists in a system. It becomes
                                    valuable when it helps someone understand
                                    what is happening, why it is happening,
                                    what needs attention and what action should
                                    be taken next. That perspective continues
                                    to influence the way I build reports,
                                    dashboards and analytical projects today.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    WAREHOUSE / REAL-WORLD OPERATION
                ===================================================== */}

                <section className="relative bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -left-40 top-1/4 w-[30rem] h-[30rem] rounded-full bg-purple-700/10 blur-[120px]" />
                        <div className="absolute -right-40 bottom-[-10rem] w-[35rem] h-[35rem] rounded-full bg-violet-500/10 blur-[130px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24 items-start">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                    Inside the operation
                                </p>

                                <div className="w-12 h-px bg-purple-500 mb-7" />

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
                                    From the
                                    <span className="block text-purple-300">
                                        warehouse floor.
                                    </span>
                                </h2>

                                <p className="mt-7 text-white/40 leading-relaxed max-w-sm">
                                    These photos show the physical environment
                                    behind the inventory, purchasing and
                                    logistics work described on this page.
                                </p>

                                <p className="mt-5 text-white/30 leading-relaxed max-w-sm">
                                    Working with more than 10,000 automotive
                                    parts across four warehouses meant dealing
                                    with a real physical flow of products, not
                                    only numbers in an inventory system.
                                </p>

                                <div className="mt-9 inline-flex items-center gap-3 px-4 py-3 rounded-full border border-white/10 bg-white/[0.03]">
                                    <Warehouse
                                        size={17}
                                        className="text-purple-300"
                                    />

                                    <span className="text-xs uppercase tracking-[0.16em] text-white/45">
                                        4 warehouse locations
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="grid md:grid-cols-12 gap-4">
                                    {/* IMAGE 1 */}

                                    <div className="md:col-span-7 group">
                                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 h-[20rem] md:h-[27rem]">
                                            <img
                                                src="/ProfilePhotos/Inventory1.jpg"
                                                alt="Automotive parts inventory warehouse"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                                            <div className="absolute bottom-6 left-6 right-6">
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">
                                                    01 / Inventory
                                                </span>

                                                <p className="mt-2 text-sm text-white/75">
                                                    Physical inventory and
                                                    warehouse organization.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IMAGE 2 */}

                                    <div className="md:col-span-5 group md:mt-12">
                                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 h-[17rem] md:h-[23rem]">
                                            <img
                                                src="/ProfilePhotos/Inventory2.jpg"
                                                alt="Automotive inventory and warehouse operations"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                                            <div className="absolute bottom-5 left-5 right-5">
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">
                                                    02 / Operations
                                                </span>

                                                <p className="mt-2 text-sm text-white/70">
                                                    Working close to the
                                                    physical flow of parts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IMAGE 3 */}

                                    <div className="md:col-span-5 group md:-mt-4">
                                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 h-[18rem] md:h-[24rem]">
                                            <img
                                                src="/ProfilePhotos/Inventory3.jpg"
                                                alt="Automotive parts storage and inventory"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                                            <div className="absolute bottom-5 left-5 right-5">
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">
                                                    03 / Stock
                                                </span>

                                                <p className="mt-2 text-sm text-white/70">
                                                    Stock visibility begins
                                                    with physical organization.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IMAGE 4 */}

                                    <div className="md:col-span-7 group md:-mt-12">
                                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 h-[20rem] md:h-[27rem]">
                                            <img
                                                src="/ProfilePhotos/Inventory4.jpg"
                                                alt="Warehouse inventory operations"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                                            <div className="absolute bottom-6 left-6 right-6">
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">
                                                    04 / Supply Chain
                                                </span>

                                                <p className="mt-2 text-sm text-white/75">
                                                    The physical side of a
                                                    data-driven operation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-7 border-t border-white/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                                        <p className="text-sm md:text-base text-white/35 leading-relaxed max-w-2xl">
                                            The warehouse was where purchasing
                                            decisions, supplier deliveries,
                                            inventory information and customer
                                            requirements became tangible
                                            operational activity.
                                        </p>

                                        <div className="flex items-center gap-2 text-purple-300/70 text-xs uppercase tracking-[0.18em] whitespace-nowrap">
                                            <Package size={15} />
                                            10,000+ parts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SUPPLY CHAIN FLOW
                ===================================================== */}

                <section className="relative bg-[#f5f3f7] px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
                    <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-purple-300/20 blur-[120px] pointer-events-none" />

                    <div className="relative max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    The operating model
                                </p>

                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                    From supplier
                                    <span className="text-purple-700">
                                        {" "}
                                        to decision.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-black/45 leading-relaxed">
                                Working with more than 10,000 automotive parts
                                across four warehouses required constant
                                communication, accurate inventory information
                                and careful planning. Delivery deadlines were
                                strict, and delays could lead to customer
                                pressure and financial penalties.
                            </p>
                        </div>

                        <div className="mb-14 max-w-4xl">
                            <p className="text-lg md:text-xl text-black/55 leading-relaxed">
                                One of the biggest lessons from this role was
                                learning to see logistics as a connected
                                process. The objective was not simply to move
                                products from one location to another. The
                                objective was to make sure the right
                                information, material and people were aligned
                                at the right moment. That required constant
                                coordination between commercial, financial,
                                warehouse and operational activities.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-px bg-black/10 rounded-[2rem] overflow-hidden border border-black/10">
                            {[
                                {
                                    number: "01",
                                    icon: ShoppingCart,
                                    title: "Purchasing",
                                    text: "Worked with suppliers and accounting to organize deliveries, monitor availability and plan upcoming supply needs.",
                                },
                                {
                                    number: "02",
                                    icon: Boxes,
                                    title: "Inventory",
                                    text: "Managed information for more than 10,000 new, used and retrieved automotive parts across four warehouses.",
                                },
                                {
                                    number: "03",
                                    icon: Truck,
                                    title: "Logistics",
                                    text: "Coordinated deliveries with suppliers, workers and the inventory responsible person under strict deadlines.",
                                },
                                {
                                    number: "04",
                                    icon: BarChart3,
                                    title: "Reporting",
                                    text: "Used inventory and operational information to support purchasing, stock decisions, parts sales and supply planning.",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="bg-white p-7 md:p-8 min-h-[18rem] flex flex-col"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                                                <Icon size={20} />
                                            </div>

                                            <span className="text-xs opacity-25">
                                                {item.number}
                                            </span>
                                        </div>

                                        <div className="mt-auto">
                                            <h3 className="text-2xl font-medium tracking-tight">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm text-black/45 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    WHAT I DID
                ===================================================== */}

                <section className="relative bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-40 right-1/4 w-[30rem] h-[30rem] bg-purple-700/10 rounded-full blur-[130px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                    Responsibilities
                                </p>

                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
                                    What I
                                    <span className="block text-purple-300">
                                        worked on.
                                    </span>
                                </h2>

                                <p className="mt-7 text-white/35 leading-relaxed max-w-sm">
                                    A combination of operational coordination,
                                    supply chain management and analytical
                                    support.
                                </p>

                                <p className="mt-6 text-white/30 leading-relaxed max-w-sm">
                                    The role required more than completing
                                    individual tasks. It required following
                                    the flow of materials and information
                                    through the business and understanding how
                                    one operational decision could influence
                                    another.
                                </p>
                            </div>

                            <div>
                                {responsibilities.map((item) => (
                                    <div
                                        key={item.number}
                                        className="group border-t border-white/10 py-7 md:py-8 hover:bg-white/[0.02] transition px-3 -mx-3 rounded-xl"
                                    >
                                        <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-5">
                                            <span className="text-xs text-purple-300/40 pt-1">
                                                {item.number}
                                            </span>

                                            <div>
                                                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-purple-300 transition">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-sm md:text-base text-white/40 leading-relaxed max-w-2xl">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CAREER STORY
                ===================================================== */}

                <section className="bg-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    The bigger picture
                                </p>

                                <div className="w-12 h-px bg-purple-600 mb-7" />

                                <p className="text-sm text-black/40 max-w-xs leading-relaxed">
                                    The experience that connected my education
                                    with the professional world.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] max-w-5xl">
                                    My logistics experience became the
                                    <span className="text-purple-700">
                                        {" "}
                                        operational foundation
                                    </span>{" "}
                                    for my analytical career.
                                </h2>

                                <div className="mt-12 space-y-7 max-w-4xl">
                                    <p className="text-lg md:text-xl text-black/50 leading-relaxed">
                                        Starting my career in logistics gave
                                        me the opportunity to see business
                                        processes from the inside. Instead of
                                        working only with theoretical process
                                        diagrams, I was dealing with actual
                                        products, suppliers, warehouses,
                                        delivery schedules and operational
                                        priorities every day.
                                    </p>

                                    <p className="text-lg md:text-xl text-black/50 leading-relaxed">
                                        I learned that operational problems
                                        rarely belong to only one department.
                                        An inventory issue can become a
                                        purchasing issue. A supplier delay can
                                        become a logistics issue. Inaccurate
                                        information can become a planning
                                        problem. This taught me to look beyond
                                        the immediate task and understand the
                                        process as a whole.
                                    </p>

                                    <p className="text-lg md:text-xl text-black/50 leading-relaxed">
                                        That mindset became especially useful
                                        later in my career when I moved into
                                        quality engineering and data analytics.
                                        Quality work required understanding
                                        processes, identifying gaps and
                                        following corrective actions. Data
                                        analytics required understanding the
                                        business question behind the numbers.
                                        Logistics was where I first developed
                                        this combination of operational
                                        awareness, structured thinking and
                                        problem-solving.
                                    </p>

                                    <p className="text-lg md:text-xl text-black/50 leading-relaxed">
                                        Today, when I build a Power BI report,
                                        clean a SQL dataset, analyze a process
                                        or design a digital solution, I try to
                                        keep that same principle: understand
                                        the process first, understand the data
                                        second, and then connect the two to
                                        create information that can support a
                                        real decision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SKILLS / TOOLS
                ===================================================== */}

                <section className="bg-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    Capabilities
                                </p>

                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    Skills used in practice
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
                                    <div className="flex items-center justify-between mb-8">
                                        <p className="text-sm opacity-40 uppercase tracking-[0.2em]">
                                            Tools & Technologies
                                        </p>

                                        <span className="text-xs opacity-25">
                                            Operational stack
                                        </span>
                                    </div>

                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {tools.map((tool) => {
                                            const Icon = tool.icon;

                                            return (
                                                <div
                                                    key={tool.name}
                                                    className="group rounded-[1.5rem] border border-black/10 p-5 hover:bg-[#08060d] hover:text-white transition-all duration-300"
                                                >
                                                    <Icon
                                                        size={25}
                                                        className="text-purple-700 group-hover:text-purple-300 transition"
                                                    />

                                                    <p className="mt-8 text-sm font-medium">
                                                        {tool.name}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SELECTED WORK
                ===================================================== */}

                <section className="relative bg-[#08060d] text-white px-6 md:px-12 lg:px-20 py-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -left-40 top-1/3 w-[30rem] h-[30rem] bg-purple-700/10 rounded-full blur-[120px]" />
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="mb-16">
                            <p className="uppercase tracking-[0.2em] text-xs text-purple-300/50 mb-5">
                                Selected work
                            </p>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                    Projects &
                                    <span className="text-purple-300">
                                        {" "}
                                        operational work.
                                    </span>
                                </h2>

                                <p className="max-w-sm text-white/35 leading-relaxed">
                                    Examples of the operational and analytical
                                    areas where I contributed.
                                </p>
                            </div>

                            <p className="mt-8 max-w-3xl text-white/35 text-lg leading-relaxed">
                                Rather than treating these activities as
                                isolated responsibilities, I see them as
                                connected parts of one operating system:
                                purchasing brings materials into the business,
                                inventory provides visibility, logistics moves
                                resources where they are needed, and reporting
                                turns operational information into something
                                that can support decisions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            {projects.map((project, index) => {
                                const Icon = project.icon;

                                return (
                                    <article
                                        key={project.number}
                                        className={`group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-10 min-h-[25rem] ${
                                            index === 0
                                                ? "md:translate-y-8"
                                                : index === 3
                                                ? "md:-translate-y-8"
                                                : ""
                                        }`}
                                    >
                                        <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-purple-600/10 blur-[70px] group-hover:bg-purple-600/20 transition-all duration-700" />

                                        <div className="relative flex flex-col h-full">
                                            <div className="flex items-start justify-between">
                                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-300/10 text-purple-300 flex items-center justify-center">
                                                    <Icon size={25} />
                                                </div>

                                                <span className="text-xs text-white/25">
                                                    {project.number}
                                                </span>
                                            </div>

                                            <div className="mt-auto">
                                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                                    {project.title}
                                                </h3>

                                                <p className="mt-5 text-white/40 leading-relaxed max-w-xl">
                                                    {project.description}
                                                </p>

                                                <div className="mt-7 flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/40"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    IMPACT
                ===================================================== */}

                <section className="bg-[#f5f3f7] text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs opacity-40 mb-5">
                                    Impact
                                </p>

                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    What the role
                                    <span className="block text-purple-700">
                                        enabled.
                                    </span>
                                </h2>

                                <p className="mt-7 text-black/40 leading-relaxed max-w-sm">
                                    The value of this experience was not only
                                    in the individual tasks. It was in learning
                                    how operational decisions connect across a
                                    business.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {achievements.map((item) => (
                                    <div
                                        key={item.number}
                                        className="grid md:grid-cols-[5rem_1fr_auto] gap-6 items-start border-t border-black/10 py-9"
                                    >
                                        <span className="text-xs opacity-30">
                                            {item.number}
                                        </span>

                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 text-black/45 leading-relaxed max-w-2xl">
                                                {item.text}
                                            </p>
                                        </div>

                                        <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-purple-700/50">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    WHAT I LEARNED
                ===================================================== */}

                <section className="bg-white text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-14">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                                <Lightbulb size={20} />
                            </div>

                            <p className="uppercase tracking-[0.2em] text-xs opacity-40">
                                What I learned
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-16">
                            {learned.map((item, index) => (
                                <div
                                    key={index}
                                    className="group py-8 border-t border-black/10"
                                >
                                    <div className="flex gap-6">
                                        <span className="text-xs text-purple-700/50 pt-2">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <p className="text-xl md:text-2xl leading-snug group-hover:text-purple-700 transition">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FINAL CTA
                ===================================================== */}

                <section className="bg-white text-black px-6 md:px-12 lg:px-20 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08060d] text-white p-8 md:p-14 lg:p-16">
                            <div className="absolute -right-32 -top-40 w-[30rem] h-[30rem] bg-purple-600/20 blur-[110px] rounded-full" />

                            <div className="relative grid lg:grid-cols-[1fr_auto] gap-12 items-end">
                                <div>
                                    <p className="text-purple-300/60 text-xs uppercase tracking-[0.2em] mb-5">
                                        Where this experience led me
                                    </p>

                                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
                                        From operational management
                                        <span className="text-purple-300">
                                            {" "}
                                            to data-driven thinking.
                                        </span>
                                    </h2>

                                    <p className="text-white/40 text-lg max-w-2xl mt-7 leading-relaxed">
                                        This first role gave me a practical
                                        understanding of how purchasing,
                                        inventory, suppliers, accounting,
                                        logistics and operational data work
                                        together. More importantly, it taught
                                        me to look at a business process as a
                                        complete system rather than as a
                                        collection of separate tasks.
                                    </p>

                                    <p className="text-white/40 text-lg max-w-2xl mt-5 leading-relaxed">
                                        That perspective continues to shape my
                                        work today. Whether I am analyzing data,
                                        building a Power BI dashboard, working
                                        on quality processes, cleaning a SQL
                                        dataset or developing a digital
                                        solution, I start by trying to
                                        understand the process, the people
                                        involved and the decision that the
                                        information needs to support.
                                    </p>

                                    <p className="text-white/30 text-base max-w-2xl mt-5 leading-relaxed">
                                        Logistics was where I learned to see
                                        the operational side of a business.
                                        Quality engineering taught me to
                                        structure and improve processes. Data
                                        analytics is allowing me to turn those
                                        experiences into measurable insights
                                        and decision-support solutions.
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

                {/* =====================================================
                    CONTINUE EXPLORING
                ===================================================== */}

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

            {/* =====================================================
                SCROLL BUTTON
            ===================================================== */}

            <button
                type="button"
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                aria-label="Scroll to top"
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99999] w-12 h-12 rounded-full border border-purple-300/30 bg-black/80 text-purple-300 backdrop-blur-md flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:bg-purple-700 hover:text-white hover:border-purple-300/60 transition-all duration-300"
            >
                <ArrowUp size={20} strokeWidth={2.2} />
            </button>
        </main>
    );
}
