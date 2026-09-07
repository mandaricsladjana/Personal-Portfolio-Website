import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const Navlinks = [
    { href: "home", title: "Home" },
    { href: "about", title: "About Me" },
    { href: "experience", title: "Experience" },
    { href: "services", title: "Services" },
    { href: "projects", title: "Projects" },
    { href: "skills", title: "Skills" },
    { href: "learning", title: "Learning" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSectionClick = (section) => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate(`/#${section}`);
            return;
        }

        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleHomeClick = () => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleContactClick = () => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/#contact");
            return;
        }

        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-strong py-3"
                    : "bg-transparent py-5"
            }`}
        >
            {/* LEFT SIDE - LOGO */}
            <nav className="container mx-auto px-0 flex items-center justify-between">

                <Link
                    to="/"
                    aria-label="Go to homepage"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        w-18
                        h-18
                        rounded-full
                        overflow-hidden
                        border-2
                        border-white/30
                        hover:border-purple-500
                        hover:-translate-y-1
                        transition-all
                        duration-300
                    "
                >
                    <img
                        src="/ProfilePhotos/footer-logo-black.png"
                        alt="Sladjana Mandaric"
                        className="w-full h-full object-cover"
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass bg-white/10 rounded-full px-2 py-1 flex items-center gap-1 border-2 border-white/30">

                        {Navlinks.map((link) => (
                            <button
                                type="button"
                                onClick={() =>
                                    link.href === "home"
                                        ? handleHomeClick()
                                        : handleSectionClick(link.href)
                                }
                                key={link.href}
                                className="
                                    px-4
                                    py-2
                                    text-base
                                    font-semibold
                                    text-white/80
                                    hover:text-purple-400
                                    rounded-full
                                    hover:bg-purple-500/15
                                    transition-all
                                    duration-300
                                "
                            >
                                {link.title}
                            </button>
                        ))}

                    </div>
                </div>

                {/* CONTACT BUTTON */}
                <Button
                    size="sm"
                    onClick={handleContactClick}
                    className="h-[42px] border-2 border-primary hover:bg-primary/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                >
                    Contact Me
                </Button>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">

                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

                        {Navlinks.map((link) => (
                            <button
                                type="button"
                                onClick={() =>
                                    link.href === "home"
                                        ? handleHomeClick()
                                        : handleSectionClick(link.href)
                                }
                                key={link.href}
                                className="
                                    text-lg
                                    font-semibold
                                    text-muted
                                    hover:text-foreground
                                    py-2
                                    transition-colors
                                    text-left
                                "
                            >
                                {link.title}
                            </button>
                        ))}

                        <Button onClick={handleContactClick}>
                            Contact Me
                        </Button>

                    </div>

                </div>
            )}

        </header>
    );
};