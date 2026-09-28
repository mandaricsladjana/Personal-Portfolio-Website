export default {
    id: "power-bi-nashville",

    overview: {
        eyebrow: "Project Overview",
        title: "Interactive Data Quality Power BI Dashboard",
        text: "A hands-on real estate analytics project focused on transforming raw Nashville housing data into a structured analytical layer and an interactive Power BI dashboard. The project combines SQL data cleaning, data quality measurement, dynamic KPIs, interactive filters, custom navigation, dynamic titles, selected-record previews, detailed tables, and city-level analysis.",
        Medium: "https://medium.com/@mandaricsladjana/building-an-interactive-data-quality-power-bi-dashboard-part-2-a9f121552800"
    },

    sections: [

        // ================================================================
        // 01 — PROJECT STORY
        // ================================================================

        {
            type: "story",

            eyebrow: "The Challenge",

            title: "Turning Raw Housing Data Into a Reliable Analytical Experience.",

            text: "The Nashville housing dataset contained a large amount of real estate information, but raw data alone is not enough for meaningful analysis. Missing values, inconsistent fields and incomplete records can directly affect KPIs, filtering and visual conclusions. The goal of this project was to create a structured workflow where the data could first be prepared and validated in SQL and then transformed into an interactive Power BI experience."
        },


        // ================================================================
        // 02 — ARCHITECTURE
        // ================================================================

        {
            type: "architecture",

            eyebrow: "Solution Architecture",

            title: "A Data Workflow Designed Around Quality, Reusability and Analysis.",

            text: "Instead of building the dashboard directly on top of the raw dataset, the project separates data preparation from visualization. SQL is used as the preparation and analytical layer, while Power BI becomes the visualization and interaction layer."
        },


        // ================================================================
        // 03 — SQL CLEANING
        // ================================================================

        {
            type: "sql",

            eyebrow: "SQL Data Cleaning",

            title: "Clean the Data Before Building the Dashboard.",

            text: "The first stage of the project focused on understanding the structure and quality of the raw housing data. SQL was used to inspect missing fields, standardize values, prepare analytical columns and create reusable views that could be consumed by Power BI without repeating the same preparation steps manually."
        },


        // ================================================================
        // 04 — DATA QUALITY
        // ================================================================

        {
            type: "quality",

            eyebrow: "Data Quality",

            title: "Make Data Quality Visible Instead of Hiding It.",

            text: "Data quality was treated as part of the analytical product rather than a hidden preparation step. The dashboard makes it possible to monitor completeness and identify where important information is missing or inconsistent, helping users understand the reliability of the underlying dataset."
        },


        // ================================================================
        // 05 — POWER BI DASHBOARD
        // ================================================================

        {
            type: "dashboard",

            eyebrow: "Power BI Dashboard",

            title: "From Prepared Data to an Interactive Analytical Interface.",

            text: "The Power BI layer transforms the prepared SQL data into an interactive dashboard where users can explore the housing dataset through KPIs, filters, dynamic titles, detailed tables, selected-record previews and geographic analysis. The interface was designed to make data quality and real estate information easier to explore rather than presenting the dataset as a static report."
        },


        // ================================================================
        // 06 — PIPELINE
        // ================================================================

        {
            type: "pipeline",

            eyebrow: "End-to-End Workflow",

            title: "One Dataset. Multiple Analytical Layers.",

            text: "The complete workflow connects the original housing data with SQL transformation, cloud infrastructure and Power BI visualization. Each layer has a specific role, creating a more maintainable process than performing all preparation directly inside the dashboard."
        },


        // ================================================================
        // 07 — RESULTS
        // ================================================================

        {
            type: "results",

            eyebrow: "Project Outcomes",

            title: "From Raw Housing Records to a Reusable Analytics System.",

            results: [
                {
                    value: "SQL",
                    text: "Created a dedicated cleaning and preparation layer for the Nashville housing dataset."
                },

                {
                    value: "Power BI",
                    text: "Built an interactive dashboard with KPIs, filters, navigation, dynamic titles and detailed analytical views."
                },

                {
                    value: "Data Quality",
                    text: "Converted missing-value and completeness analysis into visible quality indicators."
                },

                {
                    value: "Interactive",
                    text: "Added user-driven exploration through selected records, detailed tables, geographic analysis and dynamic dashboard elements."
                }
            ]
        },


        // ================================================================
        // 08 — FINAL PROJECT MESSAGE
        // ================================================================

        {
            type: "quote",

            eyebrow: "Project Perspective",

            text: "A useful dashboard does not begin with charts. It begins with understanding, cleaning and structuring the data behind them."
        }

    ]
};