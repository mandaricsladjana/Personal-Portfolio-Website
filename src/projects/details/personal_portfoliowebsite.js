const personalPortfolioWebsite = {
    id: "personal-portfolio-website",

    overview: {
        eyebrow: "Project Overview",
        title: "My First Portfolio Website",
        text:
            "This project started from an idea how to best showcase my analytical projects and services and it gradually became a real **frontend development project**. Instead of treating the website as a static CV, I used it to learn how to **structure a React application**, build **reusable components**, **manage routes**, **separate project data from presentation**, **create responsive interfaces**, **connect analytics**, **work with Git and GitHub**, and much more."
    },

    sections: [

        {
            type: "text",
            theme: "light",
            eyebrow: "The Idea",
            title:
                "I didn't want a portfolio that only talked about my skills.",
            text:
                "I wanted the website itself to demonstrate them. The idea was to build a portfolio where the frontend architecture, responsive UX, project system, analytics setup and visual design could all show what I can actually do. Every section became part of the technical project rather than simply content placed on a page.",
       text2:" The portfolio website didn't just have to present my experience. It needed to **bring together** my work in **quality engineering**, **data analytics**, **logistics**, **advertising** and **web development** in one unique digital experience. At the same time, the website needed to remain flexible enough to grow as I evolved and learned new technologies and created new projects."
            },
{
            type: "process",
            eyebrow: "How I Built It",
            title:
                "From an idea to the complete digital platform.",
            text:"A complete digital product starts with an idea and grows through a series of connected steps — from **planning** and **design** to **development**, **content**, **analytics**, and **optimization**. Each part builds on the previous one, turning the initial concept into a platform that can be launched, measured, improved, and developed over time.The map below shows this journey from the first idea to a fully connected digital platform.",
            steps: [
                {
                    number: "01",
                    title: "Plan",
                    text:
                        "Defined the purpose of the website, target audience, main sections, experience structure, project categories and visual direction."
                },
                {
                    number: "02",
                    title: "Structure",
                    text:
                        "“Built the React and Vite application structure, developed reusable components, established application routing, and organized structured project data under Git and GitHub version control."  },
                {
                    number: "03",
                    title: "Develop",
                    text:
                        "Built the interface section by section using React, JavaScript and Tailwind CSS while continuously refining responsive behavior and visual consistency."
                },
                {
                    number: "04",
                    title: "Connect",
                    text:
                        "Connected internal routes, project details, professional resources and the analytics foundation using Google Tag Manager and GA4."
                },
                {
                    number: "05",
                    title: "Improve",
                    text:
                        "Continuously tested the website, fixed layout and routing issues, improved reusable components and added new technical features as the project evolved."
                }
            ]
        },

        {
            type: "architecture",
            eyebrow: "System Map",
            title:
                "What's actually happening behind the interface?",
            text:
                "The website is a **React application** built with **Vite** and organized around **reusable components**, **shared layouts**, **routed pages** and **structured project data**. The main application controls navigation and page-level behavior, while individual sections are separated into components. Project content is kept separately from the component responsible for rendering it, which makes the system easier to expand as new projects are added.",
            image: "/ProfilePhotos/portfolio-system-map.jpg"

            },

   

        {
            type: "tools",
            eyebrow: "Technology Stack",
            title:
                "The tools behind the website.",
            tools: [
                {
                    name: "React",
                    description:
                        "Component-based frontend development, reusable UI structures and dynamic rendering."
                },
                {
                    name: "Vite",
                    description:
                        "Fast development environment, module handling and optimized production build workflow."
                },
                {
                    name: "JavaScript",
                    description:
                        "Application logic, arrays, objects, conditional rendering, dynamic content and reusable data structures."
                },
                {
                    name: "Tailwind CSS",
                    description:
                        "Responsive styling, spacing, typography, gradients, borders, layouts, transitions and visual effects."
                },
                {
                    name: "React Router",
                    description:
                        "Client-side navigation between the homepage, experience pages and individual project experiences."
                },
                {
                    name: "Git & GitHub",
                    description:
                        "Version control, backup, development history and safer experimentation with new features."
                },
                {
                    name: "Google Analytics 4",
                    description:
                        "Measurement layer for understanding portfolio traffic, engagement and important user interactions."
                },
                {
                    name: "Google Tag Manager",
                    description:
                        "Flexible tag-management layer used as the foundation for analytics and future marketing tracking."
                },
                {
                    name: "Google Sheets",
                    description:
                        "Planned reporting layer for making collected website data easier to analyze and organize."
                },
                {
                    name: "Looker Studio",
                    description:
                        "Planned visualization layer for turning portfolio analytics data into dashboards and reports."
                }
            ]
        },

        {
            type: "text",
            theme: "light",
            eyebrow: "Frontend Development",
            title:
                "Building the interface with React, Vite and Tailwind.",
            text:
                "I built the website using React and Vite and structured the interface around reusable components rather than separate static HTML pages. Components such as the **Navbar**, **Hero**, **About**, **Projects**, **Experience*, **Skills**, **Learning**, **Services**, **Resources**, **Contact** and **Footer** each have their own responsibility. Tailwind CSS is used directly within the components to control responsive layouts, spacing, typography, borders, gradients, hover states and animations.",
        text2:  "Instead of placing the entire website inside one large component, I separated major parts of the interface into their own React components. This makes individual sections easier to maintain and allows the same component to be reused by principal - Build once. Reuse across the website.",

            },
        {
            type: "code",
            eyebrow: "Data-Driven Rendering",
            title:
                "The same logic can render completely different content.",
            text:
                "Rather than hard-coding every project card or experience item, I use arrays of JavaScript objects and map over them. This keeps content structured and allows the UI to be generated from data.",
            code: `projects.map((project) => (
    <ProjectCard
        key={project.id}
        project={project}
    />
))`
        },

        {
            type: "code",
            eyebrow: "Component Thinking",
            title:
                "Reusable components keep the interface maintainable.",
            text:
                "A major part of the development process was learning to avoid duplicating the same markup. For example, **project cards** and **experience cards** can receive different data while keeping the same rendering structure.",
            code: `const ExperienceCard = ({ exp, index }) => {
    return (
        <div className="relative rounded-3xl border">
            <h3>{exp.role}</h3>

            <p>{exp.company}</p>

            <p>{exp.description}</p>

            {exp.technologies.map((tech) => (
                <span key={tech}>
                    {tech}
                </span>
            ))}
        </div>
    );
};`
        },

        {
            type: "text",
            theme: "light",
            eyebrow: "Project Architecture",
            title:
                "Separating content from presentation.",
            text:
                "One of the most important architectural decisions was separating **project information** from the **component responsible for displaying it**. The project-detail system stores the content for each project while the shared ProjectDetails component controls the general layout and presentation. This allows new projects to be added without rebuilding the entire page structure."
        },

        {
            type: "code",
            eyebrow: "Dynamic Project Pages",
            title:
                "One structure can power multiple project experiences.",
            text2: "One of the most important architectural decisions was separating project information from the component responsible for displaying it. The project-detail system stores the content for each project while the shared ProjectDetails component controls the general layout and presentation. This allows new projects to be added without rebuilding the entire page structure."
,
            text:
                "Instead of manually creating a completely different page component for every project, I use a **project ID** to identify the selected project and retrieve its corresponding data. The same project-detail system can therefore support multiple projects while keeping their content independent.",

                code: `const project = projects.find(
    (project) => project.id === projectId
);

const details = projectDetails[projectId];`
        },

        {
            type: "code",
            eyebrow: "Dynamic Detail Loading",
            title:
                "Project details can be loaded from separate files.",
            text:
                "As the number of projects grew, I moved toward a structure where individual project detail files could live separately while the application automatically discovers them. Using Vite's **import.meta.glob** allows the project system to load multiple detail modules without manually importing every single file into one component.",
            code: `const projectDetails = import.meta.glob(
    "./details/*.js",
    {
        eager: true,
        import: "default"
    }
);`
        },

        {
            type: "text",
            eyebrow: "Why This Matters",
            title:
                "Adding a project should not mean rebuilding the application.",
            text:
                "This structure makes the portfolio scalable. A new project can have its own content file while the shared project-detail renderer continues to handle the overall page structure. It also gives individual projects room to become more specialized when a standard layout is not enough."
        },

        {
            type: "code",
            eyebrow: "Routing",
            title:
                "Using client-side routes for separate experiences.",
            text:
                "The portfolio uses React Router so the main website and individual experience pages can behave like separate destinations while remaining part of the same React application. I use routes for sections such as Data Analytics, Ads Management, Quality Engineering and Logistics.",
            code: `<Route
    path="/experience/data-analytics"
    element={<ExperienceAnalytics />}
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
/>`
        },

    {
            type: "gallery",
            eyebrow: "A closer look at the website design",
            title:
                "Creating a visual identity instead of using a template.",
            text:
                "The design direction was intentionally built around a **purple**, **lilac**, **black** and **white** visual system. I experimented with gradients, glowing elements, rounded containers, typography, spacing, image treatments and subtle animations to create a visual identity that feels more like a digital magazine than a traditional CV website.",
            images: [
                {
                    src: "/ProfilePhotos/background7a.jpg",
                    alt: "Portfolio visual background"
                }
            ]
        },


{
    type: "text",
    eyebrow: "Responsive UX",
    title:
        "Designed for desktop, tablet and mobile.",

    text:
        "Responsive behavior was considered throughout development rather than added at the end. Tailwind responsive classes are used to **change grids**, **typography**, **spacing**, **navigation**, **card layouts** and **positioning at different screen sizes**. The goal was not simply to make the desktop design smaller, but to make each section remain usable and visually balanced on smaller screens.",

    text2:
        "The same component adapts to different screen sizes. Tailwind's responsive modifiers allow the layout to change without creating separate desktop and mobile components. For example, a two-column experience layout can become a single-column layout on smaller screens.",
},
        

        {
            type: "text",
            theme: "light",
            eyebrow: "Interactive UI",
            title:
                "Small interactions are part of the experience.",
            text:
                "I used **React state**, **conditional rendering** and **Tailwind transitions** to create interactive behavior throughout the website. Examples include mobile navigation, expandable resources, hover effects, project navigation, current-state indicators, scroll controls and animated visual elements. These details were built as part of the interface rather than added as isolated effects.",
        text2:"The navigation is made to feel as one continuous page. Because the portfolio contains multiple routes, the shared scroll behavior is added so navigating to a new page does not leave the visitor at an unexpected scroll position. This is handled through a reusable ScrollToTop component.",
            },

        {
            type: "code",
            eyebrow: "Tracking Event Data",
            title:
                "The data layer creates a bridge between the interface and tracking.",
            text:
                "The GTM setup initializes the dataLayer, which can receive structured events from the website. This creates a foundation for tracking meaningful interactions such as project exploration, navigation actions and future conversion events.",
            code: `window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
    event: "project_view",
    project_id: projectId
});`
        },
  

{
    type: "text",
    eyebrow: "SEO",

    title:
        "Building for visibility, not only appearance.",

    text:
        "I also worked on the website’s **SEO basics** while building it. This includes clear **page titles and descriptions**, making sure search engines can properly read and index the pages, and keeping the content and page structure clear. I also made sure the website works well across different screen sizes, so SEO was considered alongside the actual development rather than added at the end.",

    text2:
        "The **HTML entry point** contains the foundational metadata used to describe the website to browsers and search engines. This gives the application a clear document identity before the React interface is rendered and creates a technical foundation for how the site can be understood, indexed and presented."
},

        {
            type: "code",
            eyebrow: "Version Control",
            title:
                "The project has a real version-controlled workflow.",
            text:
                "The project is maintained with Git and GitHub so changes can be tracked, backed up and reviewed over time. I use version control as part of the development process rather than only as a final upload step. This makes it safer to experiment with new sections, refactor components and test visual changes while preserving working versions.",
            code: `git status

git add .

git commit -m "Update portfolio project structure"

git push origin main`
        },

        {
            type: "text",
            theme: "light",
            eyebrow: "Problem Solving",
            title:
                "The development process was also about debugging.",
            text:
                "Building the portfolio taught me that frontend development is not only writing new code. I worked through routing issues, component rendering problems, missing exports, project-data loading, responsive layout problems, styling conflicts and dependency issues. Each problem became part of the development process and helped me understand how the different parts of a React application interact."
        },

        {
            type: "quote",
            eyebrow: "A Note From the Creator",
            text:
                "The website became part of the learning process itself. Every new section, project and technical improvement became another opportunity to understand how digital products are actually structured, built, measured and improved."
        },

        {
            type: "text",
            eyebrow: "What I Learned",
            title:
                "The biggest lesson was learning to think beyond the page.",
            text:
                "The project helped me understand that frontend development is not only about making an interface look good. I learned to think about component architecture, reusable data, routing, responsive behavior, analytics, SEO, version control, debugging and maintainability at the same time."
        },

        {
            type: "text",
            eyebrow: "Continuous Development",
            title:
                "This project is intentionally still evolving.",
            text:
                "New projects, technologies, analytics features and design improvements are continuously added. That is what makes this project valuable to me: it is not only a portfolio of finished work, but also a practical record of how my development skills continue to grow.",
        text2:  "**The architecture was designed to grow with the portfolio** - It allows new projects, experiences and resources to be added without rebuilding the application from scratch. That was an important shift from thinking about the website as a single page to thinking about it as a small digital product."
            }
    ]
};

export default personalPortfolioWebsite;
