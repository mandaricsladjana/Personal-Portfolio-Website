export default {
    id: "azure-nashville",

    overview: {
        eyebrow: "Cloud Data Engineering",
        title: "From Excel to Power BI: Creating an Automated Data Pipeline Using Azure",
        text: "A cloud-based data workflow built around a real estate dataset, connecting raw Excel data with Azure Blob Storage, Azure Data Factory, Azure SQL and Power BI. The project focuses on data quality, transformation, automation and creating a reliable analytical layer for reporting.",
    },

    sections: [

        // =========================================================
        // 01 — CHALLENGE
        // =========================================================

        {
            type: "text",

            eyebrow: "The Challenge",

            title: "Turning messy source data into something reliable.",

            text: "The project started with a raw Nashville housing dataset containing inconsistent values, missing information, duplicated records and fields that were not immediately suitable for analysis. Before building a dashboard, the data needed to be understood, profiled, cleaned and structured so that the final insights could be trusted.",
        },


        // =========================================================
        // 02 — ARCHITECTURE
        // =========================================================

        {
            type: "architecture",

            eyebrow: "Cloud Architecture",

            title: "A pipeline designed around the flow of the data.",

            text: "Instead of treating Power BI as the place where all transformations happen, the project separates ingestion, storage, transformation and reporting into dedicated layers. This creates a cleaner and more maintainable analytical workflow.",
        },


        // =========================================================
        // 03 — PIPELINE
        // =========================================================

        {
            type: "process",

            eyebrow: "Pipeline",

            title: "From raw file to analytical dataset.",

            steps: [

                {
                    number: "01",
                    title: "Source Data",
                    text: "The original Nashville housing dataset was imported and examined to understand its structure, fields, data types and potential quality problems.",
                },

                {
                    number: "02",
                    title: "Azure Storage",
                    text: "The source data was placed into Azure Blob Storage, creating a centralized cloud location for the raw dataset.",
                },

                {
                    number: "03",
                    title: "Data Factory",
                    text: "Azure Data Factory was used to create the pipeline responsible for moving the data through the cloud environment.",
                },

                {
                    number: "04",
                    title: "Azure SQL",
                    text: "The data was loaded into Azure SQL Database, providing a structured environment for SQL-based transformation and analysis.",
                },

                {
                    number: "05",
                    title: "Power BI",
                    text: "The prepared analytical layer was connected to Power BI to create dashboards focused on data quality and real estate insights.",
                },

            ],
        },


        // =========================================================
        // 04 — DATA QUALITY
        // =========================================================

        {
            type: "text",

            eyebrow: "Data Quality",

            title: "The pipeline was built around data quality — not just data movement.",

            text: "A major part of the project was identifying where the dataset could not yet be trusted. SQL was used to profile missing values, inspect inconsistencies, validate important fields and create a cleaner preparation layer before the data reached Power BI.",
        },


        // =========================================================
        // 05 — SQL
        // =========================================================

        {
            type: "text",

            eyebrow: "SQL Transformation",

            title: "Moving transformation logic upstream.",

            text: "Instead of performing all cleaning directly inside Power BI, reusable SQL views were created to provide a structured analytical layer. This approach keeps transformation logic closer to the database, makes the process easier to maintain and gives Power BI a cleaner dataset to work with.",
        },


        // =========================================================
        // 06 — ANALYTICAL LAYER
        // =========================================================

        {
            type: "architecture",

            eyebrow: "Analytical Layer",

            title: "Building reusable SQL views for reporting.",

            text: "The SQL layer contains dedicated views for cleaned data, master analytical data, missing-field analysis and data-quality KPIs. This makes it possible to separate technical data preparation from the final visualization layer.",
        },


        // =========================================================
        // 07 — DATA FLOW
        // =========================================================

        {
            type: "analytics",

            eyebrow: "Data Flow",

            title: "One connected flow from source to insight.",

            text: "Each layer has a specific responsibility: the source provides the raw information, Azure provides the cloud infrastructure, SQL provides the transformation and quality layer, and Power BI turns the prepared data into something decision-makers can understand.",
        },


        // =========================================================
        // 08 — KEY PRINCIPLE
        // =========================================================

        {
            type: "quote",

            eyebrow: "Key Principle",

            text: "Good dashboards start long before the first visual is created.",
        },


        // =========================================================
        // 09 — POWER BI
        // =========================================================

        {
            type: "text",

            eyebrow: "Power BI",

            title: "Power BI becomes the final analytical layer.",

            text: "Once the data had passed through profiling, cleaning and transformation, Power BI could focus on analysis instead of becoming the primary data-cleaning environment. The resulting dashboards can be used to explore data quality, identify critical missing information and support further real estate analysis.",
        },


        // =========================================================
        // 10 — RESULTS
        // =========================================================

        {
            type: "results",

            eyebrow: "Project Results",

            title: "A more reliable foundation for analytics.",

            results: [

                {
                    value: "~90%",
                    text: "Reduction in manual update work through the automated cloud workflow.",
                },

                {
                    value: "Azure",
                    text: "Cloud infrastructure connecting storage, orchestration and database layers.",
                },

                {
                    value: "SQL",
                    text: "Reusable cleaning, validation and analytical views created before Power BI.",
                },

                {
                    value: "Power BI",
                    text: "Final reporting layer for data-quality and market analysis.",
                },

            ],
        },


        // =========================================================
        // 11 — WHAT I BUILT
        // =========================================================

        {
            type: "text",

            eyebrow: "What I Built",

            title: "A complete analytical workflow — not just a dashboard.",

            text: "The project combines data profiling, quality analysis, SQL transformation, Azure cloud services, pipeline orchestration and Power BI reporting into one end-to-end workflow. The goal was to demonstrate how raw business data can be transformed into a structured and maintainable foundation for analytics.",
        },


        // =========================================================
        // 12 — FUTURE DEVELOPMENT
        // =========================================================

        {
            type: "text",

            eyebrow: "Next Step",

            title: "From one dataset to a reusable data engineering approach.",

            text: "The same architecture can be extended to additional datasets, automated refresh schedules, more advanced data-quality monitoring and larger analytical models. The project therefore serves as both a real estate analytics solution and a practical demonstration of cloud-based data engineering principles.",
        },

    ],
};
