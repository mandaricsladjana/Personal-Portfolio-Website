export const Learning = () => {
    return (
        <section
            id="learning"
            className="
                relative
                py-35
                overflow-hidden
                bg-black
            "
        >
            <div className="container mx-auto px-6 relative z-10">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span
                        className="
                            inline-flex
                            items-center
                            px-4
                            py-2
                            rounded-full
                            bg-purple-500/10
                            border
                            border-purple-500/20
                            text-sm
                            text-purple-400
                            mb-5
                        "
                    >
                        Learning & Growth
                    </span>

                    <h2
                        className="
                            text-4xl
                            md:text-5xl
                            font-bold
                            text-white
                            mb-5
                        "
                    >
                        Learning{" "}
                        <span className="text-purple-500">
                            & Inspiration
                        </span>
                    </h2>

                    <p
                        className="
                            text-lg
                            text-white/60
                            leading-7
                        "
                    >
                        I believe that continuous learning is one of the most
                        important parts of personal and professional growth.
                        I enjoy exploring new technologies, developing my
                        analytical skills, and finding inspiration in new ideas.
                    </p>

                </div>


                {/* LEARNING CARDS */}
                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        max-w-6xl
                        mx-auto
                    "
                >

                    {/* COURSES & CERTIFICATIONS */}
                    <div
                        className="
                            glass
                            rounded-3xl
                            p-8
                            border
                            border-white/10
                            hover:border-purple-500/40
                            hover:-translate-y-1
                            transition-all
                            duration-300
                        "
                    >

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-purple-500/10
                                border
                                border-purple-500/20
                                flex
                                items-center
                                justify-center
                                mb-6
                            "
                        >
                            🎓
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            Courses & Certifications
                        </h3>

                        <p className="text-white/60 leading-6">
                            Continuously expanding my knowledge through
                            professional courses, certifications, and
                            hands-on learning in data, technology, quality,
                            and business.
                        </p>

                    </div>


                    {/* DATA & TECHNOLOGY */}
                    <div
                        className="
                            glass
                            rounded-3xl
                            p-8
                            border
                            border-white/10
                            hover:border-purple-500/40
                            hover:-translate-y-1
                            transition-all
                            duration-300
                        "
                    >

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-purple-500/10
                                border
                                border-purple-500/20
                                flex
                                items-center
                                justify-center
                                mb-6
                            "
                        >
                            📊
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            Data & Technology
                        </h3>

                        <p className="text-white/60 leading-6">
                            Exploring data analytics, SQL, Python, Power BI,
                            machine learning, cloud technologies, and new
                            tools that help transform data into meaningful
                            insights.
                        </p>

                    </div>


                    {/* INSPIRATION */}
                    <div
                        className="
                            glass
                            rounded-3xl
                            p-8
                            border
                            border-white/10
                            hover:border-purple-500/40
                            hover:-translate-y-1
                            transition-all
                            duration-300
                        "
                    >

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-purple-500/10
                                border
                                border-purple-500/20
                                flex
                                items-center
                                justify-center
                                mb-6
                            "
                        >
                            ✨
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            Inspiration
                        </h3>

                        <p className="text-white/60 leading-6">
                            Finding inspiration through books, articles,
                            creative projects, design, technology, and
                            different perspectives that encourage me to
                            keep learning and creating.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};