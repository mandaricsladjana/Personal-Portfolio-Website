import { useState } from "react";
import { ArrowRight, Download, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Button } from "../components/Button";
import { DataParticles } from "../components/DataParticles";

export const Hero = () => {
    const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >

            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/ProfilePhotos/background7a.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-linear-to-b from-black/85 to-black/80"></div>
            </div>

            {/* Floating data dots */}
            <DataParticles />

            {/* Hero TEXT content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left column - TEXT */}
                    <div className="space-y-8">

                        {/* Small introduction badge */}
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 text-sm text-primary-dark">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Quality Engineer | Data Analyst | Ads Management
                            </span>
                        </div>

                        {/* HEADLINE HERO SECTION */}
                        <div className="space-y-4">

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white/90 w-text animate-fade-in animation-delay-100">
                                Hello I'm{" "}
                                <span className="text-purple-500">
                                    Sladjana
                                </span>
                                !
                            </h1>

                            <p className="text-lg text-white/90 max-w-lg animate-fade-in animation-delay-200">
                                I'm a Quality Engineer and aspiring Data Analyst
                                with experience on the QMS team and working in a
                                multicultural environment. I enjoy{" "}
                                <span className="text-purple-500">
                                    working with data
                                </span>
                                ,{" "}
                                <span className="text-purple-500">
                                    creating meaningful KPIs
                                </span>
                                ,{" "}
                                <span className="text-purple-500">
                                    building dashboards
                                </span>{" "}
                                that help teams make better decisions and drive
                                continuous improvement.
                            </p>

                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">

                            {/* View My Work */}
                            <Button
                                size="lg"
                                onClick={() => {
                                    document.getElementById("projects")?.scrollIntoView({
                                        behavior: "auto",
                                        block: "start",
                                    });
                                }}
                                className="border-2 border-primary hover:bg-primary/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5" />
                            </Button>

                            {/* Download CV */}
                            <button
                                onClick={() => setIsCvPopupOpen(true)}
                                className="relative bg-transparent border border-border
                                text-white hover:border-primary/50 transition-all
                                duration-1000 focus:outline-none focus-visible:ring-2
                                focus-visible:ring-primary focus-visible:ring-offset-2
                                disabled:opacity-50 disabled:cursor-not-allowed group 
                                px-8 py-4 text-lg font:medium rounded-full overflow-visible
                                animated-border"
                            >

                                {/* Animated SVG Border */}
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                    viewBox="0 0 200 60"
                                    preserveAspectRatio="none"
                                    style={{ overflow: "visible" }}
                                >
                                    <path
                                        d="M 30 1 H 170 A 29 29 0 0 1 199 30 A 29 29 0 0 1 170 59 H 30 A 29 29 0 0 1 1 30 A 29 29 0 0 1 30 1 Z"
                                        fill="none"
                                        stroke="var(--color-primary)"
                                        strokeWidth={2}
                                        strokeDasharray="400 500"
                                        strokeDashoffset={400}
                                        strokeLinecap="round"
                                        className="animated-border-path"
                                    />
                                </svg>

                                {/* Button content */}
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </span>
                            </button>
                        </div>

                        {/* SOCIALS BUTTONS */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-white">Let's connect:</span>

                            {[
                                {
                                    icon: FaGithub,
                                    href: "https://github.com/mandaricsladjana"
                                },
                                {
                                    icon: FaLinkedin,
                                    href: "https://www.linkedin.com/in/sladjanamandaric/"
                                },
                                {
                                    icon: FaMedium,
                                    href: "https://medium.com/@mandaricsladjana"
                                }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-transparent/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Right column - PROFILE PICTURE */}
                    <div className="relative animate-fade-in animation-delay-300">

                        {/* Profile picture */}
                        <div className="relative max-w-sm mx-auto">

                            <div
                                className="absolute inset-0
                                rounded-3xl bg-linear-to-br
                                from-primary-dark/30 via-transparent
                                to-primary-dark/10 blur 2xl animate-pulse"
                            />

                            <div className="relative glass rounded-3xl p-2 glow-border">

                                <img
                                    src="/ProfilePhotos/ProfilePhoto.jpg"
                                    alt="Sladjana Mandaric"
                                    className="w-full aspect-4/5 object-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div>
                                    <div>
                                        <div />
                                        <span>

                                        </span>
                                    </div>
                                </div>

                                {/* Stats Badge */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CV POPUP */}
            {isCvPopupOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
                    onClick={() => setIsCvPopupOpen(false)}
                >
                    <div
                        className="relative w-full max-w-md rounded-3xl border border-purple-500/30 bg-[#08050f] p-8 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setIsCvPopupOpen(false)}
                            aria-label="Close CV popup"
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:bg-purple-500/20 hover:text-white"
                        >
                            <X size={20} />
                        </button>

                        {/* Icon */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                            <Download size={28} />
                        </div>

                        {/* Text */}
                        <h2 className="mb-3 text-2xl font-bold text-white">
                            Download My CV
                        </h2>

                        <p className="mb-8 text-sm leading-relaxed text-white/60">
                            Choose whether you would like to view my CV first or
                            download a copy directly to your device.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="/CV/Sladjana-Mandaric-CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-purple-500/40 px-5 py-3 font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
                            >
                                View CV
                            </a>

                            <a
                                href="/CV/Sladjana-Mandaric-CV.pdf"
                                download
                                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500"
                            >
                                <Download size={18} />
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};