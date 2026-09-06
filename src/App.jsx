import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Services } from "@/sections/Services";
import { Resources } from "@/sections/Resources";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

import ExperienceAds from "@/pages/ExperienceAds";
import ExperienceQualityEngineer from "@/pages/ExperienceQualityEngineer";
import ExperienceLogistics from "@/pages/ExperienceLogistics";
import ExperienceAnalytics from "@/pages/ExperienceAnalytics";

import { AllProjects } from "@/pages/AllProjects";
import { ProjectDetails } from "@/projects/ProjectDetails";

function App() {
return ( <HashRouter>
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