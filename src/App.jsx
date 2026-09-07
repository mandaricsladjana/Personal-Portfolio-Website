import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Learning } from "@/sections/Learning";
import { Services } from "@/sections/Services";
import { Resources } from "@/sections/Resources";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

import ExperienceAds from "@/pages/ExperienceAds";
import ExperienceQualityEngineer from "@/pages/ExperienceQualityEngineer";
import ExperienceLogistics from "@/pages/ExperienceLogistics";
import ExperienceAnalytics from "@/pages/ExperienceAnalytics";

import { AllProjects } from "@/pages/AllProjects";
import { ProjectDetails } from "@/projects/ProjectDetails";


function PageScrollArrow() {
    const location = useLocation();

    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        if (location.pathname !== "/") {
            setShowArrow(false);
            return;
        }

        const handleScroll = () => {
            const nearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100;

            setShowArrow(!nearBottom);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight * 0.75,
            behavior: "smooth",
        });
    };

    if (!showArrow || location.pathname !== "/") {
        return null;
    }

    return (
        <button
            onClick={scrollDown}
            aria-label="Scroll down"
            className="
                fixed
                bottom-8
                left-1/2
                -translate-x-1/2
                z-50
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-primary/30
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-primary/20
                hover:border-primary
                hover:text-primary
                transition-all
                duration-300
            "
        >
            <ArrowDown className="w-5 h-5" />
        </button>
    );
}


function App() {
    return (
        <HashRouter>

            <ScrollToTop />

            <div className="min-h-screen overflow-x-hidden">

                <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={
                            <main>
                                <Hero />
                                <About />
                                <Projects />
                                <Resources />
                                <Services />
                                <Experience />
                                <Skills />
                                <Learning />
                                <Contact />
                            </main>
                        }
                    />

                    <Route
                        path="/experience/ads"
                        element={<ExperienceAds />}
                    />

                    <Route
                        path="/experience/quality-engineer"
                        element={<ExperienceQualityEngineer />}
                    />

                    <Route
                        path="/experience/logistics"
                        element={<ExperienceLogistics />}
                    />

                    <Route
                        path="/experience/data-analytics"
                        element={<ExperienceAnalytics />}
                    />

                    <Route
                        path="/pages"
                        element={<AllProjects />}
                    />

                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetails />}
                    />

                </Routes>

                <Footer />

                <PageScrollArrow />

            </div>

        </HashRouter>
    );
}

export default App;