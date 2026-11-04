import { lazy, Suspense, useEffect, useState } from "react";

import { Navbar } from "@/layout/Navbar";
import { Landing } from "@/sections/Landing";
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

import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import { ScrollRevealPageElements } from "@/components/ScrollRevealPageElements";

import { AllProjects } from "@/pages/AllProjects";
import { ProjectDetails } from "@/projects/ProjectDetails";

import { ArrowDown, ArrowUp } from "lucide-react";

const ExperienceAds = lazy(() => import("@/pages/ExperienceAds"));
const ExperienceQualityEngineer = lazy(
    () => import("@/pages/ExperienceQualityEngineer")
);
const ExperienceLogistics = lazy(
    () => import("@/pages/ExperienceLogistics")
);
const ExperienceAnalytics = lazy(
    () => import("@/pages/ExperienceAnalytics")
);

function PageScrollArrow() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight;

            const documentHeight =
                document.documentElement.scrollHeight;

            setIsAtBottom(
                scrollPosition >= documentHeight - 80
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const handleArrowClick = () => {
        if (isAtBottom) {
            window.scrollTo({
                top: 0,
                behavior: "auto",
            });

            return;
        }

        const scrollAmount = window.innerHeight * 0.7;

        window.scrollBy({
            top: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={handleArrowClick}
            aria-label={
                isAtBottom
                    ? "Go to home"
                    : "Scroll to next section"
            }
            className="
                fixed
                bottom-8
                left-1/2
                -translate-x-1/2
                z-40
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                border
                border-white/30
                bg-black/40
                backdrop-blur-md
                text-white
                hover:bg-primary/30
                hover:border-primary
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-lg
            "
        >
            {isAtBottom ? (
                <ArrowUp size={22} />
            ) : (
                <ArrowDown size={22} />
            )}
        </button>
    );
}

function App() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [hasResourcesBeenTriggered, setHasResourcesBeenTriggered] =
        useState(false);

    useEffect(() => {
        let observer;
        let animationFrame;

        const findAboutSection = () => {
            const aboutSection = document.getElementById("about");

            if (!aboutSection) {
                animationFrame =
                    requestAnimationFrame(findAboutSection);
                return;
            }

            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setHasResourcesBeenTriggered(true);
                        setIsResourcesOpen(true);

                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.15,
                }
            );

            observer.observe(aboutSection);
        };

        animationFrame = requestAnimationFrame(findAboutSection);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <HashRouter>
            <ScrollToTop />

            <div className="min-h-screen overflow-x-hidden relative bg-[#09050D]">
                {/* 🔒 BULLETPROOF GLOBAL FIXED & STATIC BACKGROUND */}
                <div
                    aria-hidden="true"
                    style={{ position: "fixed", inset: 0, transform: "none" }}
                    className="pointer-events-none overflow-hidden -z-50 bg-[#09050D]"
                >
                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
                    <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                    <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                    <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
                </div>

                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <main className="page-enter">
                                <Landing />

                                <ScrollRevealPageElements>
                                    <Hero />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <Projects />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <Services />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <Skills />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <Experience />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <About />
                                </ScrollRevealPageElements>

                                <Resources
                                    isOpen={isResourcesOpen}
                                    onClose={() =>
                                        setIsResourcesOpen(false)
                                    }
                                    onOpen={() =>
                                        setIsResourcesOpen(true)
                                    }
                                    hasBeenTriggered={
                                        hasResourcesBeenTriggered
                                    }
                                />

                                <ScrollRevealPageElements>
                                    <Learning />
                                </ScrollRevealPageElements>

                                <ScrollRevealPageElements>
                                    <Contact />
                                </ScrollRevealPageElements>
                            </main>
                        }
                    />

                    <Route
                        path="/experience/ads"
                        element={
                            <ScrollRevealPageElements>
                                <ExperienceAds />
                            </ScrollRevealPageElements>
                        }
                    />

                    <Route
                        path="/experience/quality-engineer"
                        element={
                            <ScrollRevealPageElements>
                                <ExperienceQualityEngineer />
                            </ScrollRevealPageElements>
                        }
                    />

                    <Route
                        path="/experience/logistics"
                        element={
                            <ScrollRevealPageElements>
                                <ExperienceLogistics />
                            </ScrollRevealPageElements>
                        }
                    />

                    <Route
                        path="/experience/data-analytics"
                        element={
                            <ScrollRevealPageElements>
                                <ExperienceAnalytics />
                            </ScrollRevealPageElements>
                        }
                    />

                    <Route
                        path="/pages"
                        element={
                            <ScrollRevealPageElements>
                                <AllProjects />
                            </ScrollRevealPageElements>
                        }
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