import React, { useState } from "react";
import {
  Eye,
  MousePointer,
  ShoppingCart,
  Package,
  Heart,
  CheckCircle2,
  Search,
  Sparkles,
  BarChart3,
  Settings,
  ChevronRight,
  ArrowUpRight,
  ShoppingBag,
  Users,
  Check,
  Target,
  Lightbulb,
  TrendingUp,
  Layout,
  Smartphone,
  Laptop,
  Globe,
  Layers,
  Database,
  SlidersHorizontal,
  LineChart,
  FileText,
  Zap,
  Shirt,
} from "lucide-react";

export default function GlowByAnaduWebshop() {
  const [activeTab, setActiveTab] = useState("products");
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#08060B] text-[#2A1238] font-sans antialiased selection:bg-purple-200 selection:text-purple-900 pb-16">

      {/* =====================================================
          SIDE PROJECT BANNER
      ===================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <div className="w-fit bg-[#1B0326] text-white text-xs py-2.5 px-4 rounded-r-xl shadow-md">

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-purple-100 font-semibold">
              Business & Portfolio Project
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-purple-200 text-xs mt-1.5 ml-4">
            <span>Client: GlowByAnadu Boutique</span>
            <span>•</span>
            <span>Role: Web Development & Analytics</span>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* =====================================================
            1. HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#08060B] p-6 sm:p-10 md:p-12 rounded-3xl border border-purple-900/40 shadow-2xl">

          {/* ABSTRACT BACKGROUND */}
          <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-purple-900/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-48 -right-40 w-[36rem] h-[36rem] rounded-full bg-violet-700/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-fuchsia-900/10 blur-3xl pointer-events-none" />

          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-40 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

          {/* LARGE BOUTIQUE CLOTHING SYMBOL */}
          <div className="absolute -right-16 -bottom-20 pointer-events-none opacity-[0.07]">
            <Shirt
              className="w-[28rem] h-[28rem] sm:w-[34rem] sm:h-[34rem] text-purple-300"
              strokeWidth={0.7}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* LEFT */}
            <div className="lg:col-span-6 space-y-5">

              <div className="inline-block">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-purple-200 uppercase bg-purple-900/40 px-3.5 py-1.5 rounded-full border border-purple-500/30">
                  BOUTIQUE E-COMMERCE • WEB DEVELOPMENT • CMS • ANALYTICS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                GlowByAnadu
                <br />
                <span className="text-purple-300">
                  Webshop
                </span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/80 leading-relaxed max-w-xl">
                A complete digital boutique platform combining e-commerce,
                inventory management, checkout, content management, SEO and
                analytics into one cohesive customer journey.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "React",
                  "JavaScript",
                  "E-Commerce",
                  "Custom CMS",
                  "Inventory",
                  "Checkout",
                  "SEO",
                  "GA4",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-white/10 text-purple-100 font-semibold text-xs sm:text-sm rounded-full border border-purple-400/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-4">

              <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">

                <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/40 via-fuchsia-800/30 to-violet-900/40 rounded-full blur-2xl opacity-80 pointer-events-none" />

                {/* LAPTOP */}
                <div className="relative z-10 w-4/5 bg-[#1B0326] rounded-t-xl p-2.5 shadow-2xl border border-purple-900/40">

                  <div className="flex items-center gap-1.5 px-2 py-1 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="bg-[#FAF6F2] rounded aspect-[16/10] overflow-hidden relative p-3.5 flex flex-col justify-between border border-amber-900/10 shadow-inner">

                    <div className="flex justify-between items-center text-[10px] font-medium text-purple-900 border-b border-purple-100 pb-1.5">

                      <div className="flex items-center gap-1.5">
                        <Shirt className="w-3 h-3 text-purple-800" />

                        <span className="font-serif font-bold text-xs tracking-wide">
                          GlowByAnadu
                        </span>
                      </div>

                      <div className="flex gap-2.5 text-[9px]">
                        <span className="font-semibold text-purple-950">
                          Shop
                        </span>
                        <span className="text-purple-700">
                          About
                        </span>
                        <span className="text-purple-700">
                          Contact
                        </span>
                      </div>

                    </div>

                    <div className="my-auto text-center space-y-2 py-2">

                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1B0326] leading-tight">
                        Boutique
                        <br />
                        Collection
                      </h3>

                      <p className="text-[10px] text-purple-700 italic">
                        Curated pieces for your personal style
                      </p>

                      <button className="bg-[#1B0326] text-white text-[10px] px-3.5 py-1 rounded-full font-medium">
                        Shop Collection
                      </button>

                    </div>

                    <div className="flex justify-center items-end gap-2.5 pt-1.5 border-t border-purple-100/60">

                      <div className="w-4 h-8 bg-pink-200/90 rounded-t-lg border border-pink-300" />

                      <div className="w-5 h-10 bg-purple-200/90 rounded-t-md border border-purple-300" />

                      <div className="w-4 h-6 bg-amber-100/90 rounded-t-lg border border-amber-200" />

                    </div>
                  </div>

                  <div className="h-2.5 bg-gray-300 rounded-b-md -mx-2.5 -mb-2.5 border-t border-gray-400 flex justify-center">
                    <div className="w-14 h-1 bg-gray-400 rounded-b-sm" />
                  </div>
                </div>

                {/* MOBILE */}
                <div className="absolute right-0 bottom-1 z-20 w-1/3 min-w-[130px] max-w-[165px] bg-[#11021A] p-1.5 rounded-[22px] shadow-2xl border-2 border-purple-300/60">

                  <div className="bg-[#FAF6F2] rounded-[18px] p-2 aspect-[9/18] overflow-hidden flex flex-col justify-between text-[8px]">

                    <div className="flex justify-between items-center text-purple-900 border-b border-purple-100 pb-1">

                      <div className="flex items-center gap-1">
                        <Shirt className="w-2.5 h-2.5 text-purple-800" />

                        <span className="font-serif font-bold text-[9px]">
                          GlowByAnadu
                        </span>
                      </div>

                      <Search className="w-2.5 h-2.5 text-purple-800" />

                    </div>

                    <div className="text-center my-1">

                      <div className="font-serif font-semibold text-purple-950 text-[10px] leading-tight">
                        Boutique Collection
                      </div>

                      <div className="w-full h-12 bg-purple-100/80 rounded-md my-1.5 flex items-center justify-center border border-purple-200/50">

                        <Shirt className="w-7 h-7 text-purple-500" strokeWidth={1} />

                      </div>

                      <button className="bg-[#1B0326] text-white text-[7px] px-2.5 py-0.5 rounded-full">
                        Shop Now
                      </button>

                    </div>

                    <div className="bg-white rounded-lg p-1.5 shadow-2xs border border-purple-100 flex items-center gap-1.5">

                      <div className="w-3.5 h-3.5 rounded-full bg-pink-200 shrink-0" />

                      <div className="text-[7px] text-purple-950 font-medium truncate">
                        Featured Piece
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            2. MAIN PROBLEM
        ===================================================== */}
        <section className="space-y-6">

          <div className="space-y-2">

            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
              THE CHALLENGE
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B0326]">
              Main Problem
            </h2>

          </div>

          <div className="bg-[#1B0326] text-white p-7 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">

            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />

            <Target className="w-10 h-10 text-purple-300 mb-5" />

            <p className="relative text-lg sm:text-xl lg:text-2xl leading-relaxed font-serif text-purple-50">
              <strong>
                How can a boutique business create a professional,
                scalable online shopping experience while maintaining
                full control over products, inventory, checkout,
                content and day-to-day website management — and still
                understand how visitors interact with the store and
                where sales opportunities are being lost?
              </strong>
            </p>

            <p className="relative mt-6 text-sm sm:text-base text-purple-200 leading-relaxed max-w-4xl">
              The project addresses the challenge of bringing together{" "}
              <strong className="text-white">
                e-commerce functionality, inventory management, cart and
                checkout, content management, SEO and analytics
              </strong>{" "}
              into one cohesive platform rather than relying on a static
              website or disconnected tools.
            </p>

          </div>
        </section>

{/* =====================================================
    4. CUSTOMER JOURNEY 
===================================================== */}
<section className="space-y-6">

  <div className="space-y-1">

    <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
      PROJECT GOAL
    </span>

    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white/70">
      A Complete Boutique E-Commerce Platform
    </h2>

    <p className="text-sm text-primary max-w-2xl">
      A complete customer journey connecting product discovery, shopping,
      inventory, checkout and post-purchase analytics.
    </p>

  </div>


  {/* JOURNEY CARDS */}
  <div className="relative bg-gradient-to-br from-[#F8F3FC] to-[#EEE5F6] rounded-3xl border border-purple-200/80 shadow-sm p-4 sm:p-6 lg:p-7 overflow-hidden">

    {/* Decorative background */}
    <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-purple-300/20 blur-3xl pointer-events-none" />
    <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-fuchsia-300/10 blur-3xl pointer-events-none" />

    <div className="relative">

      {/* Horizontal journey */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-0">

        {[
          {
            id: 1,
            step: "Product Discovery",
            short: "Discovery",
            desc: "Discover the boutique through search, social media or ads.",
            icon: Eye,
          },
          {
            id: 2,
            step: "Browse",
            short: "Browse",
            desc: "Explore products and their information through categories, filtering and product pages.",
            icon: MousePointer,
          },
          {
            id: 3,
            step: "Availability",
            short: "Availability",
            desc: "Check product and variant inventory before adding items to the cart.",
            icon: Package,
          },
          {
            id: 4,
            step: "Cart",
            short: "Cart",
            desc: "Review selected products, quantities and availability.",
            icon: ShoppingCart,
          },
          {
            id: 5,
            step: "Checkout",
            short: "Checkout",
            desc: "Complete customer details and review the order.",
            icon: Check,
          },
          {
            id: 6,
            step: "Purchase",
            short: "Purchase",
            desc: "Confirm the order and complete the purchase.",
            icon: CheckCircle2,
          },
          {
            id: 7,
            step: "Measure",
            short: "Measure",
            desc: "Use analytics to understand behavior and identify opportunities.",
            icon: BarChart3,
          },
        ].map((item, index, items) => {

          const Icon = item.icon;
          const isActive = activeStep === item.id;

          return (
            <React.Fragment key={item.id}>

              {/* CARD */}
              <div
                onClick={() => setActiveStep(item.id)}
                className={`relative flex-1 min-w-0 cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 ${
                  isActive
                    ? "bg-[#1B0326] text-white shadow-xl"
                    : "bg-white/90 text-[#1B0326] border border-purple-100 hover:bg-white hover:shadow-md"
                }`}
              >

                {/* Number */}
                <div
                  className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-purple-300 text-[#1B0326]"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {item.id}
                </div>


                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    isActive
                      ? "bg-purple-300 text-[#1B0326]"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>


                {/* Step label */}
                <div
                  className={`text-[10px] uppercase tracking-widest font-bold mb-1.5 ${
                    isActive
                      ? "text-purple-300"
                      : "text-purple-600"
                  }`}
                >
                  STEP {item.id}
                </div>


                {/* Title */}
                <h4
                  className={`font-serif font-bold text-sm sm:text-base leading-tight ${
                    isActive
                      ? "text-white"
                      : "text-[#1B0326]"
                  }`}
                >
                  {item.step}
                </h4>


                {/* Description - visible when clicked */}
                {isActive && (
                  <p
                    className={`mt-3 text-[11px] leading-relaxed ${
                      isActive
                        ? "text-purple-100/75"
                        : "text-purple-950/65"
                    }`}
                  >
                    {item.desc}
                  </p>
                )}

              </div>


              {/* CONNECTOR */}
              {index < items.length - 1 && (
                <div className="hidden lg:flex w-7 shrink-0 items-center justify-center">

                  <ChevronRight
                    className={`w-4 h-4 ${
                      activeStep === item.id
                        ? "text-purple-700"
                        : "text-purple-300"
                    }`}
                  />

                </div>
              )}

            </React.Fragment>
          );
        })}

      </div>


      {/* ACTIVE STEP DETAILS */}
      <div className="mt-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-[#1B0326] text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-purple-600">
              Current Journey Step
            </p>

            <p className="text-sm font-semibold text-[#1B0326]">
              {[
                "Product Discovery",
                "Browse",
                "Availability",
                "Cart",
                "Checkout",
                "Purchase",
                "Measure",
              ][activeStep - 1]}
            </p>
          </div>

        </div>

        <div className="hidden sm:block h-8 w-px bg-purple-100 ml-2" />

        <p className="text-xs text-purple-950/60 sm:ml-auto">
          Step {activeStep} of 7
        </p>

      </div>

    </div>
  </div>

</section>

        {/* =====================================================
            5. STAKEHOLDERS
        ===================================================== */}
        <section className="space-y-6">

          <div className="space-y-1">

            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
              PROJECT IMPACT
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white/70">
              Stakeholders
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="text-lg font-bold text-[#1B0326]">
                  Business Owner
                </h3>

              </div>

              <ul className="space-y-3">

                {[
                  "Gains a professional digital sales channel.",
                  "Can manage products, inventory and content independently through the CMS.",
                  "Can understand customer behavior through analytics.",
                  "Reduces dependence on manual website updates.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-purple-950/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>


            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="text-lg font-bold text-[#1B0326]">
                  Customers
                </h3>

              </div>

              <ul className="space-y-3">

                {[
                  "Get a clear, responsive and easy-to-navigate boutique shopping experience.",
                  "Can discover products through categories and filtering.",
                  "Can check product availability before purchase.",
                  "Have access to structured product information and a streamlined checkout journey.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-purple-950/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>


            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="text-lg font-bold text-[#1B0326]">
                  Marketing / Ads Team
                </h3>

              </div>

              <ul className="space-y-3">

                {[
                  "Gains structured analytics data through GA4.",
                  "Can analyze traffic sources, user journeys and conversion behavior.",
                  "Can use website and conversion data to support future advertising decisions.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-purple-950/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>


            <div className="bg-[#1B0326] text-white p-6 sm:p-7 rounded-2xl shadow-md">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-xl bg-purple-800 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-200" />
                </div>

                <h3 className="text-lg font-bold">
                  Business Growth
                </h3>

              </div>

              <ul className="space-y-3">

                {[
                  "SEO provides a foundation for organic discoverability.",
                  "Analytics creates measurable insight for future optimization.",
                  "Inventory management helps maintain accurate product availability.",
                  "The CMS makes the platform easier to maintain and expand as the product catalog grows.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-purple-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </section>


        {/* =====================================================
            6. CMS & SHOP ARCHITECTURE
        ===================================================== */}
        <section className="space-y-6">

          <div className="space-y-1">

            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
              CMS & SHOP ARCHITECTURE
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B0326]">
              Built for Flexibility & Growth
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-xs">

            <div className="lg:col-span-6 bg-[#FAF8FC] border border-purple-100 rounded-xl p-4 shadow-inner">

              <div className="flex items-center justify-between pb-3 border-b border-purple-100">

                <div className="flex items-center gap-2">

                  <div className="w-6 h-6 rounded bg-purple-800 flex items-center justify-center text-white text-xs font-bold">
                    CMS
                  </div>

                  <span className="text-xs font-bold text-purple-950">
                    Content Management
                  </span>

                </div>

                <div className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-semibold">
                  Active Store
                </div>

              </div>


              <div className="grid grid-cols-12 gap-3 text-[11px] mt-4">

                <div className="col-span-4 space-y-1 text-purple-900/80 font-medium">

                  <button
                    onClick={() => setActiveTab("products")}
                    className={`w-full text-left p-1.5 rounded flex items-center gap-1.5 ${
                      activeTab === "products"
                        ? "bg-purple-200/70 text-purple-950 font-bold"
                        : "hover:bg-purple-100/50"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Products
                  </button>

                  <button
                    onClick={() => setActiveTab("categories")}
                    className={`w-full text-left p-1.5 rounded flex items-center gap-1.5 ${
                      activeTab === "categories"
                        ? "bg-purple-200/70 text-purple-950 font-bold"
                        : "hover:bg-purple-100/50"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Categories
                  </button>

                  <button
                    onClick={() => setActiveTab("inventory")}
                    className={`w-full text-left p-1.5 rounded flex items-center gap-1.5 ${
                      activeTab === "inventory"
                        ? "bg-purple-200/70 text-purple-950 font-bold"
                        : "hover:bg-purple-100/50"
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    Inventory
                  </button>

                  <button
                    onClick={() => setActiveTab("content")}
                    className={`w-full text-left p-1.5 rounded flex items-center gap-1.5 ${
                      activeTab === "content"
                        ? "bg-purple-200/70 text-purple-950 font-bold"
                        : "hover:bg-purple-100/50"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Content
                  </button>

                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`w-full text-left p-1.5 rounded flex items-center gap-1.5 ${
                      activeTab === "analytics"
                        ? "bg-purple-200/70 text-purple-950 font-bold"
                        : "hover:bg-purple-100/50"
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    Analytics
                  </button>

                </div>


                <div className="col-span-8 bg-white rounded-lg p-3 border border-purple-100 space-y-2 shadow-2xs min-h-[150px]">

                  {activeTab === "products" && (
                    <>
                      <div className="text-[10px] font-bold text-purple-950 pb-1 border-b border-purple-50">
                        Product Management
                      </div>

                      {[
                        "Product information",
                        "Product images",
                        "Pricing",
                        "Product variants",
                        "Availability",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="text-purple-950 font-medium">
                            {item}
                          </span>

                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ))}
                    </>
                  )}

                  {activeTab === "categories" && (
                    <>
                      <div className="text-[10px] font-bold text-purple-950 pb-1 border-b border-purple-50">
                        Product Categories
                      </div>

                      {[
                        "Category structure",
                        "Filtering",
                        "Product discovery",
                        "Navigation",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="text-purple-950 font-medium">
                            {item}
                          </span>

                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ))}
                    </>
                  )}

                  {activeTab === "inventory" && (
                    <>
                      <div className="text-[10px] font-bold text-purple-950 pb-1 border-b border-purple-50">
                        Inventory & Availability
                      </div>

                      {[
                        "Stock quantities",
                        "Variant availability",
                        "Low-stock status",
                        "Out-of-stock status",
                        "Availability checking",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="text-purple-950 font-medium">
                            {item}
                          </span>

                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ))}
                    </>
                  )}

                  {activeTab === "content" && (
                    <>
                      <div className="text-[10px] font-bold text-purple-950 pb-1 border-b border-purple-50">
                        Website Content
                      </div>

                      {[
                        "Pages",
                        "Product descriptions",
                        "SEO content",
                        "Website updates",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="text-purple-950 font-medium">
                            {item}
                          </span>

                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ))}
                    </>
                  )}

                  {activeTab === "analytics" && (
                    <>
                      <div className="text-[10px] font-bold text-purple-950 pb-1 border-b border-purple-50">
                        Analytics
                      </div>

                      {[
                        "User behavior",
                        "Engagement",
                        "Conversion events",
                        "Traffic sources",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="text-purple-950 font-medium">
                            {item}
                          </span>

                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ))}
                    </>
                  )}

                </div>
              </div>
            </div>


            <div className="lg:col-span-6 space-y-5">

              <p className="text-purple-950/80 text-sm sm:text-base leading-relaxed">
                Built a <strong>custom CMS</strong> so products,
                categories, inventory and website content can be managed
                without modifying the code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {[
                  {
                    icon: Settings,
                    title: "Content Management",
                    text: "Manage products, categories and website content.",
                  },
                  {
                    icon: Package,
                    title: "Inventory Control",
                    text: "Track stock, availability and product variants.",
                  },
                  {
                    icon: Layers,
                    title: "Structured Catalog",
                    text: "Organized product discovery and filtering.",
                  },
                  {
                    icon: ShoppingCart,
                    title: "Checkout Flow",
                    text: "Move customers from cart to purchase confirmation.",
                  },
                  {
                    icon: Zap,
                    title: "Scalable Platform",
                    text: "Designed to expand as the product catalog grows.",
                  },
                  {
                    icon: Layout,
                    title: "Business Control",
                    text: "Reduce dependence on manual website updates.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="p-4 bg-purple-50/70 rounded-xl border border-purple-100"
                    >

                      <Icon className="w-5 h-5 text-purple-700 mb-2" />

                      <h4 className="text-sm font-bold text-[#1B0326]">
                        {item.title}
                      </h4>

                      <p className="text-xs text-purple-950/70 mt-1 leading-relaxed">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            7. SEO + GA4
        ===================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-xs space-y-6">

            <div>

              <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
                SEARCH VISIBILITY
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B0326] mt-2">
                SEO-Ready Structure
              </h3>

              <p className="text-purple-950/80 text-sm leading-relaxed mt-3">
                Structured the website with <strong>SEO in mind</strong>,
                including page structure, metadata and search-friendly
                content.
              </p>

            </div>

            <div className="space-y-3">

              {[
                "Technical SEO",
                "On-Page SEO",
                "Search-friendly content",
                "Structured page architecture",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-purple-950"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <div className="bg-[#FAF8FC] border border-purple-100 p-4 rounded-xl">

              <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                <Search className="w-3.5 h-3.5 text-purple-700" />
                <span className="font-semibold">
                  Search-friendly website structure
                </span>
              </div>

              <div className="space-y-1">

                <div className="h-2 bg-purple-200 rounded-full w-4/5" />
                <div className="h-2 bg-purple-100 rounded-full w-full" />
                <div className="h-2 bg-purple-100 rounded-full w-3/5" />

              </div>
            </div>
          </div>


          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-xs space-y-6">

            <div>

              <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
                ANALYTICS & TRACKING
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B0326] mt-2">
                Measure the Customer Journey
              </h3>

              <p className="text-purple-950/80 text-sm leading-relaxed mt-3">
                Integrated <strong>GA4</strong> to measure user behavior,
                engagement and conversion-related events.
              </p>

            </div>

            <div className="space-y-3">

              {[
                "Google Analytics 4",
                "Event Tracking",
                "Conversion Tracking",
                "User Behavior Analysis",
                "Funnel Analysis",
                "Data-Driven Optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-purple-950"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <div className="bg-gradient-to-br from-purple-50/70 via-white to-purple-50/40 border border-purple-100 p-4 rounded-xl">

              <div className="flex justify-between items-center border-b border-purple-100 pb-2">

                <div className="flex items-center gap-2">

                  <BarChart3 className="w-4 h-4 text-purple-700" />

                  <span className="text-xs font-bold text-purple-950">
                    GA4 Tracking Layer
                  </span>

                </div>

                <span className="text-[10px] text-purple-700 font-semibold bg-purple-100 px-2 py-0.5 rounded">
                  ACTIVE
                </span>

              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">

                {[
                  "User behavior",
                  "Engagement",
                  "Conversions",
                  "Traffic",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-2.5 rounded border border-purple-100"
                  >

                    <div className="text-[10px] text-purple-800">
                      {item}
                    </div>

                    <div className="h-1.5 bg-purple-100 rounded-full mt-2">
                      <div className="h-1.5 bg-purple-500 rounded-full w-3/4" />
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            8. SKILLS PRESENTED
        ===================================================== */}
        <section className="space-y-6">

          <div className="space-y-1">

            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase">
              CAPABILITIES
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B0326]">
              Skills Presented
            </h2>

            <p className="text-purple-950/75 text-sm sm:text-base max-w-3xl leading-relaxed">
              The project demonstrates several areas of my profile at once,
              connecting technical implementation with analytics, digital
              marketing and business requirements.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="font-bold text-[#1B0326]">
                  Web Development
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "React",
                  "JavaScript",
                  "Responsive Web Design",
                  "Component-Based Architecture",
                  "E-Commerce Development",
                  "Custom CMS Development",
                  "Inventory Management",
                  "Checkout Development",
                  "UI/UX Implementation",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-medium text-purple-900"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>


            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="font-bold text-[#1B0326]">
                  Analytics & Tracking
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "Google Analytics 4",
                  "Event Tracking",
                  "Conversion Tracking",
                  "User Behavior Analysis",
                  "Funnel Analysis",
                  "Data-Driven Optimization",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-medium text-purple-900"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>


            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Search className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="font-bold text-[#1B0326]">
                  Digital Marketing
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "Technical SEO",
                  "On-Page SEO",
                  "Conversion Optimization",
                  "Search Visibility",
                  "Analytics for Marketing",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-medium text-purple-900"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>


            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-xs">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-800" />
                </div>

                <h3 className="font-bold text-[#1B0326]">
                  Project & Business Skills
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "Requirements Analysis",
                  "Business-to-Technical Translation",
                  "Customer Journey Mapping",
                  "Content Management",
                  "E-Commerce Process Design",
                  "Inventory & Availability Logic",
                  "Checkout Flow Design",
                  "Performance & Usability Optimization",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-medium text-purple-900"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </div>
        </section>


        {/* =====================================================
            9. WHAT MAKES THE PROJECT VALUABLE
        ===================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B0326] via-[#3B0764] to-[#1B0326] text-white p-7 sm:p-10 rounded-3xl shadow-lg">

          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative max-w-4xl">
              <Shirt className="w-7 h-7 text-purple-700" />

            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">
              BUSINESS VALUE
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold justify-center mt-2 mb-6">
            From Boutique Storefront to Digital Platform

            </h2>

            <blockquote className="border-l-2 border-purple-400 pl-5 sm:pl-7 space-y-5">

              <p className="text-lg sm:text-xl leading-relaxed text-purple-50 font-serif">
                The value of this project lies in connecting the entire
                digital customer journey — from discovering a product to
                checking availability, completing a purchase and measuring
                what happened afterwards.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-purple-200">
                Instead of creating only a storefront, the project combines{" "}
                <strong className="text-white">
                  e-commerce, inventory management, checkout, content
                  management, SEO and analytics
                </strong>{" "}
                into one digital platform. This gives the business both a
                customer-facing sales channel and the systems needed to
                manage and understand that channel.
              </p>

            </blockquote>
          </div>
        </section>


    

     

        


          {/* FINAL BANNER */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1B0326] via-[#3B0764] to-[#1B0326] text-white p-7 sm:p-9 rounded-2xl shadow-md">

            {/* BOUTIQUE CLOTHING WATERMARK */}
            <div className="absolute -right-8 -bottom-20 opacity-[0.08] pointer-events-none">
              <Shirt
                className="w-72 h-72 sm:w-80 sm:h-80 text-purple-200"
                strokeWidth={0.8}
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="space-y-1 text-center md:text-left">

                <div className="flex items-center justify-center md:justify-start gap-2 font-serif font-bold text-xl sm:text-2xl tracking-wide text-purple-100">
                  <Shirt className="w-6 h-6 text-purple-300" />
                  GlowByAnadu
                </div>

                <div className="text-[10px] tracking-widest text-purple-300 uppercase">
                  BOUTIQUE E-COMMERCE • CMS • INVENTORY • CHECKOUT • SEO • ANALYTICS
                </div>

              </div>

              <div className="text-center md:text-right font-serif italic text-purple-100 text-sm sm:text-base max-w-lg">
                From discovering a boutique piece to checking availability,
                completing the purchase and understanding the customer journey.
              </div>

            </div>

          </div>

      </div>
    </div>
  );
}