import { useState } from "react"; 
 
import { 
    FaArrowLeft, 
    FaArrowRight, 
    FaDatabase, 
    FaChartLine, 
    FaCogs, 
    FaBullhorn, 
    FaMicrosoft, 
    FaFilm, 
    FaCode, 
    FaServer, 
    FaChartBar, 
    FaCloud, 
    FaPaintBrush, 
    FaPython, 
    FaGithub, 
    FaGitAlt, 
    FaGlobe, 
    FaMobileAlt, 
    FaTable, 
} from "react-icons/fa"; 
 
import { SiClaude } from "react-icons/si"; 
 
const slides = [ 
    { 
        title: "Data Analytics", 
        description: 
            "Turning raw data into meaningful insights, visualizations and actionable business decisions.", 
        icon: FaChartLine, 
        tools: [ 
            { name: "SQL", icon: FaDatabase }, 
            { name: "Power BI", icon: FaChartBar }, 
            { name: "Microsoft Office Advanced", icon: FaMicrosoft }, 
            { name: "Python", icon: FaPython }, 
            { name: "Pandas", icon: FaTable }, 
            { name: "Jupyter", icon: FaCode }, 
            { name: "Tableau", icon: FaChartBar }, 
        ], 
        skills: [ 
            "Data Cleaning",
            "Data Analysis", 
            "Data Visualization", 
            "KPI Development & Tracking", 
            "Dax",
            "Power Query", 
        ], 
    }, 

    { 
        title: "Web Development", 
        description: 
            "Building digital experiences while combining development, design and creative tools.", 
        icon: FaCode, 
        tools: [ 
            { name: "React", icon: FaCode }, 
            { name: "JavaScript", icon: FaCode }, 
            { name: "HTML", icon: FaGlobe }, 
            { name: "Tailwind CSS", icon: FaPaintBrush }, 
            { name: "Vite", icon: FaCode }, 
            { name: "Git", icon: FaGitAlt }, 
            { name: "GitHub", icon: FaGithub }, 
            { name: "Claude Code", icon: SiClaude }, 
        ], 
        skills: [ 
            "Frontend Development", 
            "Responsive Design", 
        ], 
    }, 
     
    { 
        title: "Databases & Cloud", 
        description: 
            "Building reliable data foundations and connecting databases, cloud services and ETL pipelines.", 
        icon: FaDatabase, 
        tools: [ 
            { name: "SSMS", icon: FaServer }, 
            { name: "PostgreSQL", icon: FaDatabase }, 
            { name: "BigQuery", icon: FaDatabase }, 
            { name: "Microsoft Azure", icon: FaCloud, tooltip: "Azure SQL Database · Azure Storage · Azure Data Factory" }, 
        ], 
        skills: [ 
            "Database Management", 
            "ETL",
            "Data Integration", 
            "Data Pipelines", 
        ], 
    }, 
     
    { 
        title: "Quality Engineering", 
        description: 
            "Combining engineering knowledge, quality methodology and data analysis to improve processes.", 
        icon: FaCogs, 
        tools: [ 
            { name: "FMEA", icon: FaCogs }, 
            { name: "Fault Tree Analysis", icon: FaDatabase }, 
            { name: "Fishbone", icon: FaCogs },
            { name: "QMS", icon: FaCogs, tooltip: "Quality Management System - Quality Planning / Quality Control / Quality Assurance through def procedures / Continual Improvement" },
            { name: "APQP", icon: FaCogs },
            { name: "PPAP", icon: FaCogs }
        ], 
        skills: [ 
            "IATF 16949", 
            "VDA 6.3", 
            "Quality KPIs", 
            "Process Optimization", 
            "Statistical Process Control", 
            "Procedures & Instructions Development",
            "Risk Management" ,
            "Scrap & Rework Analysis",
        ], 
    }, 
     
    { 
        title: "Digital Marketing", 
        description: 
            "Using data-driven marketing strategies to understand performance and optimize campaigns.", 
        icon: FaBullhorn, 
        tools: [ 
            { name: "Google Analytics", icon: FaChartBar }, 
            { name: "Google Ads", icon: FaBullhorn }, 
            { name: "Instagram Ads", icon: FaMobileAlt }, 
            { name: "Premiere Pro", icon: FaFilm }, 
            { name: "Canva Pro", icon: FaPaintBrush }, 
            { name: "Pinterest Ads", icon: FaBullhorn }, 
            { name: "Meta Ads", icon: FaBullhorn }, 
        ], 
        skills: [ 
            "Campaign Management", 
            "Campaign Optimization", 
            "Conversion Tracking", 
            "Performance Analysis", 
            "KPI Tracking", 
            "UX Design", 
            "Content Creation", 
        ], 
    }, 
]; 
 
export const Skills = () => { 
    const [activeSlide, setActiveSlide] = useState(0); 
    const [direction, setDirection] = useState("next"); 
 
    const currentSlide = slides[activeSlide]; 
 
    const changeSlide = (newIndex) => { 
        if (newIndex === activeSlide) return; 
 
        setDirection(newIndex > activeSlide ? "next" : "previous"); 
        setActiveSlide(newIndex); 
    }; 
 
    const goToPrevious = () => { 
        setDirection("previous"); 
 
        setActiveSlide((prev) => 
            prev === 0 ? slides.length - 1 : prev - 1 
        ); 
    }; 
 
    const goToNext = () => { 
        setDirection("next"); 
 
        setActiveSlide((prev) => 
            prev === slides.length - 1 ? 0 : prev + 1 
        ); 
    }; 
 
    return ( 
        <section 
            id="skills" 
            className="relative py-30 md:py-35 overflow-hidden" 
        > 
            {/* TOP DIVIDER */} 
            <div className="absolute top-0 left-0 w-full h-px bg-gray-300" /> 
 
            <div className="container mx-auto px-6"> 
 
                {/* SECTION HEADER */} 
                <div className="text-center mb-12"> 
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] text-purple-500 font-semibold mb-4"> 
                        Skills & Expertise 
                    </p> 
 
                    <h2 className="text-4xl md:text-5xl font-bold text-black"> 
                        What{" "} 
                        <span className="font-serif italic font-normal text-purple-dark"> 
                            I do 
                        </span> 
                    </h2> 
 
                    <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base md:text-lg"> 
                        A combination of analytical, engineering, technical 
                        and creative skills that I use to turn ideas and 
                        data into meaningful results. 
                    </p> 
                </div> 
 
                {/* MAIN SLIDER */} 
                <div className="relative max-w-6xl mx-auto"> 
 
                    <div 
                        className=" 
                            relative 
                            min-h-[530px] 
                            md:min-h-[460px] 
                            rounded-3xl 
                            border 
                            border-purple-900/30 
                            bg-white/70 
                            backdrop-blur-xl 
                            shadow-[0_20px_60px_rgba(88,28,135,0.15)] 
                            overflow-hidden 
                        " 
                    > 
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600" /> 
 
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] h-full"> 
 
                            {/* SLIDE CONTENT */} 
                            <div className="relative overflow-hidden"> 
 
                                <div 
                                    key={currentSlide.title} 
                                    className={` 
                                        px-8 
                                        py-8 
                                        md:px-12 
                                        md:py-10 
                                        ${ 
                                            direction === "next" 
                                                ? "animate-skill-slide-next" 
                                                : "animate-skill-slide-previous" 
                                        } 
                                    `} 
                                > 
 
                                    {/* CATEGORY HEADER */} 
                                    <div className="flex items-center gap-4 mb-4 skill-item skill-item-1"> 
 
                                        <div 
                                            className=" 
                                                flex 
                                                items-center 
                                                justify-center 
                                                w-14 
                                                h-14 
                                                rounded-2xl 
                                                bg-purple-100 
                                                text-purple-700 
                                                shadow-[0_8px_0_rgba(88,28,135,0.12)] 
                                            " 
                                        > 
                                            <currentSlide.icon size={27} /> 
                                        </div> 
 
                                        <div> 
                                            <p className="text-sm text-purple-600 font-semibold uppercase tracking-wider"> 
                                                0{activeSlide + 1} 
                                            </p> 
 
                                            <h3 className="text-3xl md:text-4xl font-bold text-black"> 
                                                {currentSlide.title} 
                                            </h3> 
                                        </div> 
 
                                    </div> 
 
                                    {/* DESCRIPTION */} 
                                    <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed mb-8 skill-item skill-item-2"> 
                                        {currentSlide.description} 
                                    </p> 
 
                                    {/* TOOLS */} 
                                    <div className="mb-7 skill-item skill-item-3"> 
 
                                        <p className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-4"> 
                                            Tools & Technologies 
                                        </p> 
 
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"> 
 
                                            {currentSlide.tools.map((tool) => { 
                                                const Icon = tool.icon; 
 
                                                return ( 
                                                    <div 
                                                        key={tool.name} 
                                                        className=" 
                                                            group 
                                                            relative 
                                                            flex 
                                                            flex-col 
                                                            items-center 
                                                            justify-center 
                                                            gap-2 
                                                            h-24 
                                                            rounded-2xl 
                                                            bg-white 
                                                            border 
                                                            border-purple-900/20 
                                                            shadow-[0_7px_0_rgba(88,28,135,0.12)] 
                                                            hover:-translate-y-2 
                                                            hover:shadow-[0_12px_0_rgba(88,28,135,0.18)] 
                                                            hover:border-purple-400 
                                                            transition-all 
                                                            duration-300 
                                                        " 
                                                    > 
                                                        <Icon 
                                                            size={30} 
                                                            className=" 
                                                                text-purple-700 
                                                                group-hover:scale-110 
                                                                transition-transform 
                                                                duration-300 
                                                            " 
                                                        /> 
                                                       
                                                        <span className="text-[11px] md:text-xs font-semibold text-gray-700 text-center px-1"> 
                                                            {tool.name} 
                                                        </span> 

                                                        {tool.tooltip && ( 
                                                            <div 
                                                                className=" 
                                                                    absolute 
                                                                    bottom-full 
                                                                    left-1/2 
                                                                    -translate-x-1/2 
                                                                    mb-3 
                                                                    w-max 
                                                                    max-w-[280px] 
                                                                    px-4 
                                                                    py-3 
                                                                    rounded-xl 
                                                                    bg-gray-900 
                                                                    text-white 
                                                                    text-xs 
                                                                    font-medium 
                                                                    text-center 
                                                                    leading-relaxed 
                                                                    opacity-0 
                                                                    invisible 
                                                                    translate-y-2 
                                                                    group-hover:opacity-100 
                                                                    group-hover:visible 
                                                                    group-hover:translate-y-0 
                                                                    transition-all 
                                                                    duration-300 
                                                                    z-50 
                                                                    shadow-lg 
                                                                    pointer-events-none 
                                                                " 
                                                            > 
                                                                {tool.tooltip} 
                                                                <div 
                                                                    className=" 
                                                                        absolute 
                                                                        top-full 
                                                                        left-1/2 
                                                                        -translate-x-1/2 
                                                                        border-4 
                                                                        border-transparent 
                                                                        border-t-gray-900 
                                                                    " 
                                                                /> 
                                                            </div> 
                                                        )} 
                                                    </div> 
                                                ); 
                                            })} 
 
                                        </div> 
                                    </div> 
 
                                    {/* WHAT I BRING */} 
                                    <div className="skill-item skill-item-4"> 
 
                                        <p className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-3"> 
                                            What I bring 
                                        </p> 
 
                                        <div className="flex flex-wrap gap-2"> 
 
                                            {currentSlide.skills.map((skill) => ( 
                                                <span 
                                                    key={skill} 
                                                    className=" 
                                                        px-4 
                                                        py-2 
                                                        rounded-full 
                                                        bg-purple-50 
                                                        border 
                                                        border-purple-200 
                                                        text-sm 
                                                        font-medium 
                                                        text-purple-800 
                                                    " 
                                                > 
                                                    {skill} 
                                                </span> 
                                            ))} 
                                        </div> 
                                    </div> 
 
                                </div> 
 
                            </div> 
 
                            {/* DESKTOP SIDE INDICATOR */} 
                            <div 
                                className=" 
                                    hidden 
                                    lg:flex 
                                    flex-col 
                                    items-center 
                                    justify-center 
                                    gap-4 
                                    px-8 
                                    border-l 
                                    border-purple-900/10 
                                " 
                            > 
                                {slides.map((slide, index) => ( 
                                    <button 
                                        key={slide.title} 
                                        type="button" 
                                        onClick={() => 
                                            changeSlide(index) 
                                        } 
                                        aria-label={`Go to ${slide.title}`} 
                                        className="group flex items-center gap-3" 
                                    > 
 
                                        <span 
                                            className={` 
                                                transition-all 
                                                duration-500 
                                                ease-out 
                                                rounded-full 
                                                ${ 
                                                    activeSlide === index 
                                                        ? "w-1 h-12 bg-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.45)]" 
                                                        : "w-1 h-6 bg-purple-200 group-hover:bg-purple-400" 
                                                } 
                                            `} 
                                        /> 
 
                                        <span 
                                            className={` 
                                                text-xs 
                                                font-semibold 
                                                transition-all 
                                                duration-500 
                                                ${ 
                                                    activeSlide === index 
                                                        ? "text-purple-700" 
                                                        : "text-gray-400 group-hover:text-purple-500" 
                                                } 
                                            `} 
                                        > 
                                            0{index + 1} 
                                        </span> 
 
                                    </button> 
                                ))} 
                            </div> 
 
                        </div> 
                    </div> 
 
                    {/* MOBILE SLIDE INDICATOR */} 
                    <div className="flex lg:hidden justify-center items-center gap-3 mt-6"> 
 
                        {slides.map((slide, index) => ( 
                            <button 
                                key={slide.title} 
                                type="button" 
                                onClick={() => 
                                    changeSlide(index) 
                                } 
                                aria-label={`Go to ${slide.title}`} 
                                className={` 
                                    h-1 
                                    rounded-full 
                                    transition-all 
                                    duration-500 
                                    ease-out 
                                    ${ 
                                        activeSlide === index 
                                            ? "w-10 bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.35)]" 
                                            : "w-5 bg-purple-200" 
                                    } 
                                `} 
                            /> 
                        ))} 
 
                    </div> 
 
                    {/* ARROWS */} 
                    <div className="flex justify-center items-center gap-4 mt-7"> 
 
                        <button 
                            type="button" 
                            onClick={goToPrevious} 
                            aria-label="Previous skill category" 
                            className=" 
                                flex 
                                items-center 
                                justify-center 
                                w-12 
                                h-12 
                                rounded-full 
                                border-2 
                                border-purple-300 
                                bg-white 
                                text-purple-700 
                                shadow-[0_5px_0_rgba(88,28,135,0.12)] 
                                hover:-translate-y-1 
                                hover:border-purple-600 
                                hover:bg-purple-50 
                                transition-all 
                                duration-300 
                            " 
                        > 
                            <FaArrowLeft size={16} /> 
                        </button> 
 
                        <span className="text-sm font-semibold text-gray-500 min-w-[60px] text-center"> 
                            {String(activeSlide + 1).padStart(2, "0")}{" "} 
                            /{" "} 
                            {String(slides.length).padStart(2, "0")} 
                        </span> 
 
                        <button 
                            type="button" 
                            onClick={goToNext} 
                            aria-label="Next skill category" 
                            className=" 
                                flex 
                                items-center 
                                justify-center 
                                w-12 
                                h-12 
                                rounded-full 
                                border-2 
                                border-purple-300 
                                bg-white 
                                text-purple-700 
                                shadow-[0_5px_0_rgba(88,28,135,0.12)] 
                                hover:-translate-y-1 
                                hover:border-purple-600 
                                hover:bg-purple-50 
                                transition-all 
                                duration-300 
                            " 
                        > 
                            <FaArrowRight size={16} /> 
                        </button> 
 
                    </div> 
 
                </div> 
            </div> 
 
            {/* BOTTOM DIVIDER */} 
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" /> 
 
            {/* SLIDE ANIMATIONS */} 
            <style> 
                {` 
                    @keyframes skillSlideNext { 
                        0% { 
                            opacity: 0; 
                            transform: translateX(35px); 
                            filter: blur(6px); 
                        } 
 
                        100% { 
                            opacity: 1; 
                            transform: translateX(0); 
                            filter: blur(0); 
                        } 
                    } 
 
                    @keyframes skillSlidePrevious { 
                        0% { 
                            opacity: 0; 
                            transform: translateX(-35px); 
                            filter: blur(6px); 
                        } 
 
                        100% { 
                            opacity: 1; 
                            transform: translateX(0); 
                            filter: blur(0); 
                        } 
                    } 
 
                    @keyframes skillItemReveal { 
                        0% { 
                            opacity: 0; 
                            transform: translateY(25px); 
                            filter: blur(5px); 
                        } 
 
                        100% { 
                            opacity: 1; 
                            transform: translateY(0); 
                            filter: blur(0); 
                        } 
                    } 
 
                    .animate-skill-slide-next { 
                        animation: skillSlideNext 0.85s cubic-bezier(0.22, 1, 0.36, 1); 
                    } 
 
                    .animate-skill-slide-previous { 
                        animation: skillSlidePrevious 0.85s cubic-bezier(0.22, 1, 0.36, 1); 
                    } 
 
                    .skill-item { 
                        opacity: 0; 
                        animation: skillItemReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards; 
                    } 
 
                    .skill-item-1 { 
                        animation-delay: 0.15s; 
                    } 
 
                    .skill-item-2 { 
                        animation-delay: 0.30s; 
                    } 
 
                    .skill-item-3 { 
                        animation-delay: 0.45s; 
                    } 
 
                    .skill-item-4 { 
                        animation-delay: 0.60s; 
                    } 
                `} 
            </style> 
 
        </section> 
    ); 
};