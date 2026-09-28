
                            <div className="relative">

                                <div className="rounded-[2rem] border border-cyan-400/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                                    <div className="mb-6 flex items-center justify-between">

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                                                Architecture
                                            </p>

                                            <h2 className="mt-2 text-xl font-bold">
                                                End-to-End Data Flow
                                            </h2>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-3 text-cyan-300">
                                            <Workflow size={24} />
                                        </div>

                                    </div>

                                    <div className="space-y-3">

                                        {[
                                            {
                                                icon: FileSpreadsheet,
                                                label: "Raw Excel / CSV Data",
                                            },
                                            {
                                                icon: Cloud,
                                                label: "Azure Blob Storage",
                                            },
                                            {
                                                icon: Workflow,
                                                label: "Azure Data Factory",
                                            },
                                            {
                                                icon: Database,
                                                label: "Azure SQL Database",
                                            },
                                            {
                                                icon: BarChart3,
                                                label: "Power BI Analytics",
                                            },
                                        ].map((item, index) => {

                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    key={item.label}
                                                    className="flex items-center gap-4"
                                                >

                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
                                                        <Icon size={19} />
                                                    </div>

                                                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.035] px-4 py-3">
                                                        <span className="text-sm font-medium text-white/75">
                                                            {item.label}
                                                        </span>
                                                    </div>

                                                    {index < 4 && (
                                                        <ArrowRight
                                                            size={15}
                                                            className="hidden text-white/20 sm:block"
                                                        />
                                                    )}

                                                </div>
                                            );
                                        })}

                                    </div>

                                </div>

                            </div>




/*TAGS*/

                            <div className="relative">

                                <div className="rounded-[2rem] border border-cyan-400/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                                    <div className="mb-6 flex items-center justify-between">

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                                                Architecture
                                            </p>

                                            <h2 className="mt-2 text-xl font-bold">
                                                End-to-End Data Flow
                                            </h2>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-3 text-cyan-300">
                                            <Workflow size={24} />
                                        </div>

                                    </div>

                                    <div className="space-y-3">

                                        {[
                                            {
                                                icon: FileSpreadsheet,
                                                label: "Raw Excel / CSV Data",
                                            },
                                            {
                                                icon: Cloud,
                                                label: "Azure Blob Storage",
                                            },
                                            {
                                                icon: Workflow,
                                                label: "Azure Data Factory",
                                            },
                                            {
                                                icon: Database,
                                                label: "Azure SQL Database",
                                            },
                                            {
                                                icon: BarChart3,
                                                label: "Power BI Analytics",
                                            },
                                        ].map((item, index) => {

                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    key={item.label}
                                                    className="flex items-center gap-4"
                                                >

                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
                                                        <Icon size={19} />
                                                    </div>

                                                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.035] px-4 py-3">
                                                        <span className="text-sm font-medium text-white/75">
                                                            {item.label}
                                                        </span>
                                                    </div>

                                                    {index < 4 && (
                                                        <ArrowRight
                                                            size={15}
                                                            className="hidden text-white/20 sm:block"
                                                        />
                                                    )}

                                                </div>
                                            );
                                        })}

                                    </div>

                                </div>

                            </div>

                            /*TAGS <ABOVE></ABOVE>
                              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

                        <div>

                            <div className="mb-6 flex flex-wrap items-center gap-3">

                                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                    <Cloud size={14} />
                                    Azure Data Engineering
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60">
                                    <Database size={14} />
                                    Data Pipeline
                                </span>

                            </div>
                                    };
