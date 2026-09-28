import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/mandaricsladjana",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/sladjanamandaric/",
        label: "LinkedIn",
    },
    {
        icon: FaMedium,
        href: "https://medium.com/@mandaricsladjana",
        label: "Medium",
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
<footer
    id="footer"
    className="
        relative
        overflow-hidden
        bg-black
        border-t
        border-purple-500/20
    "
>

            {/* ================= BACKGROUND ================= */}

            <div className="absolute inset-0 pointer-events-none">

                {/* Main purple glow */}

                <div
                    className="
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        w-175
                        h-87.5
                        bg-purple-600/10
                        rounded-full
                        blur-3xl
                    "
                />

                {/* Left glow */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        w-75
                        h-75
                        bg-purple-600/5
                        rounded-full
                        blur-3xl
                    "
                />

                {/* Right glow */}

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-75
                        h-75
                        bg-purple-500/5
                        rounded-full
                        blur-3xl
                    "
                />

            </div>


            {/* ================= CONTENT ================= */}

            <div
                className="
                    container
                    mx-auto
                    px-6
                    relative
                    z-10
                "
            >

                {/* ================= TOP FOOTER ================= */}

                <div
                    className="
                        py-3
                        grid
                        md:grid-cols-2
                        lg:grid-cols-2
                        gap-3
                    "
                >

                    {/* ================= BRAND ================= */}

                    <div className="text-center md:text-left">

                        {/* Logo */}

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToTop();
                            }}
                            className="
                                inline-block
                                w-16
                                h-16
                                rounded-full
                                overflow-hidden
                                border
                                border-purple-500/30
                                hover:border-purple-500/70
                                transition-all
                                duration-300
                            "
                        >
                            <img
                                src="/ProfilePhotos/LogoAlternative.png"
                                alt="Sladjana Mandaric"
                                className="w-full h-full object-cover"
                            />
                        </a>


                        {/* Description */}

                        <p
                            className="
                                mt-2
                                max-w-sm
                                text-sm
                                leading-6
                                text-white/60
                            "
                        >
                            Quality Engineer, Data Analyst, and Ads Manager
                            combining analytical thinking, data, and
                            creativity to build meaningful solutions.
                        </p>


                        {/* Availability */}

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-3
                                px-4
                                py-2
                                rounded-full
                                bg-white/5
                                border
                                border-purple-500/20
                                text-sm
                                text-white/70
                            "
                        >

                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-green-400
                                    animate-pulse
                                "
                            />

                            Currently available

                        </div>

                    </div>


                    {/* ================= SOCIALS ================= */}

                    <div className="text-center md:text-left pt-8 lg:pl-70">

                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-white
                                mb-3
                            "
                        >
                            Let's Connect
                        </h3>


                        <p
                            className="
                                text-sm
                                leading-6
                                text-white/60
                                max-w-xs
                                mx-auto
                                md:mx-0
                                mb-3
                            "
                        >
                            Have an interesting project, opportunity, or idea?
                            I'd love to hear from you.
                        </p>


                        {/* Social Buttons */}

                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                md:justify-start
                                gap-3
                            "
                        >

                            {socialLinks.map((social) => {

                                const Icon = social.icon;

                                return (

                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            w-11
                                            h-11
                                            rounded-full
                                            bg-white/5
                                            border
                                            border-white/10
                                            flex
                                            items-center
                                            justify-center
                                            text-white/70
                                            hover:text-purple-500
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/10
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>

                                );

                            })}

                        </div>

                    </div>

                </div>


                {/* ================= DIVIDER ================= */}

                <div className="border-t border-white/10" />


                {/* ================= BOTTOM BAR ================= */}

                <div
                    className="
                        relative
                        py-0
                        min-h-7
                        flex
                        items-center
                    "
                >

                    {/* Copyright + Made With */}

                    <div
                        className="
                            flex
                            items-center
                            justify-start
                            gap-3
                            text-xs
                            text-white/40
                            text-left
                        "
                    >
                        <span>
                            © {currentYear} Sladjana Mandaric. All rights reserved.
                        </span>

                        <span className="text-white/20">
                            ·
                        </span>

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            Made with

                            <Heart
                                className="
                                    w-3.5
                                    h-3.5
                                    text-purple-500
                                    fill-current
                                "
                            />
                        </span>
                    </div>


                    {/* Back To Top */}

                    <div
                        className="
                            absolute
                            left-1/2
                            -translate-x-1/2
                            bottom-1
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-primary/50
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                text-white/60
                                hover:text-purple-500
                                hover:border-purple-500/50
                                hover:bg-purple-500/10
                                transition-all
                                duration-300
                                animate-bounce
                            "
                        >
                            <ArrowUp className="w-6 h-6" />
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
};
