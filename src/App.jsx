import { lazy, Suspense } from "react";

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

import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

import { AllProjects } from "@/pages/AllProjects";
import { ProjectDetails } from "@/projects/ProjectDetails";

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

            </div>

        </HashRouter>
    );
}

export default App;