export default {
    id: "sql-cleaning-nashville",

    overview: {
        eyebrow: "Project Overview",
        title: "Building a SQL Cleaning & Preparation Layer",
        text: "A hands-on data engineering and analytics project focused on transforming raw Nashville housing data into a clean, structured and reusable SQL layer for Power BI. The project establishes SQL as the preparation and analytical foundation of the reporting workflow, with dedicated views for cleaned housing data, missing-field analysis, data quality KPIs and downstream dashboard consumption.",
        Medium: "https://medium.com/@mandaricsladjana/from-raw-data-to-power-bi-building-a-sql-cleaning-preparation-layer-part-1-0eb32dbc058c"
    },

    sections: [
        {
            type: "story",
            eyebrow: "The Challenge",
            title: "Raw Data Is Not Ready for Reliable Analysis.",
            text: "The Nashville housing dataset contained a large amount of real estate information, but the raw structure was not suitable for directly building reliable analytical reports. Missing values, inconsistent fields and incomplete records needed to be identified and addressed before the data could support meaningful KPIs and visual analysis. The objective was to create a dedicated SQL preparation layer that could make the dataset cleaner, more consistent and easier to consume."
        },

        {
            type: "architecture",
            eyebrow: "Solution Architecture",
            title: "Separate Data Preparation From Data Visualization.",
            text: "The project uses SQL as a dedicated transformation layer between the raw housing dataset and Power BI. Instead of repeatedly cleaning data inside individual reports, reusable SQL views were created to centralize preparation logic and provide a structured analytical source for downstream reporting."
        },

        {
            type: "sql",
            eyebrow: "SQL Data Cleaning",
            title: "Build the Cleaning Layer Before Building the Dashboard.",
            text: "The cleaning process started with an inspection of the raw Nashville housing table to understand its structure, missing values and data consistency. SQL transformations were then used to prepare the data, standardize fields and create reusable analytical views. This approach keeps the preparation logic centralized and makes the resulting dataset easier to maintain and reuse."
        },

        {
            type: "quality",
            eyebrow: "Data Quality Analysis",
            title: "Measure What Is Missing Instead of Hiding It.",
            text: "Data quality was treated as a measurable part of the project. Dedicated SQL analysis was used to identify missing fields and calculate data quality indicators across the dataset. The analysis revealed that a significant portion of critical information was missing, making data quality an important consideration before using the dataset for further analysis."
        },

        {
            type: "dashboard",
            eyebrow: "Power BI Preparation",
            title: "Create a Reliable Analytical Source for Power BI.",
            text: "Once the SQL preparation layer was established, the resulting views could be connected to Power BI as structured analytical sources. This allowed the reporting layer to focus on visualization, interaction and insight generation rather than repeating the underlying cleaning logic."
        },

        {
            type: "pipeline",
            eyebrow: "End-to-End Workflow",
            title: "From Raw Housing Data to a Reusable SQL Layer.",
            text: "The workflow connects the original Nashville housing dataset with SQL transformation and analytical views before the prepared data moves into Power BI. Each layer has a clear responsibility: the source provides the raw information, SQL prepares and validates it, and Power BI consumes the resulting analytical structure."
        },

        {
            type: "results",
            eyebrow: "Project Outcomes",
            title: "A Structured SQL Foundation for Data Analytics.",
            results: [
                {
                    value: "SQL Views",
                    text: "Created reusable views for cleaned housing data and downstream analytical reporting."
                },
                {
                    value: "Data Quality",
                    text: "Built dedicated analysis for missing fields and data quality KPIs."
                },
                {
                    value: "Power BI",
                    text: "Prepared a structured SQL source that can be consumed directly by Power BI."
                },
                {
                    value: "Reusable",
                    text: "Centralized preparation logic so the same cleaning process does not need to be repeated manually inside reports."
                }
            ]
        },

        {
            type: "quote",
            eyebrow: "Project Perspective",
            text: "A reliable dashboard starts long before the first visual. It starts with understanding, cleaning and structuring the data behind it."
        }
    ],
};
