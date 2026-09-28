import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const html = document.documentElement;

        // Temporarily disable smooth scrolling
        html.style.scrollBehavior = "auto";

        // Jump immediately to the top
        window.scrollTo(0, 0);

        // Restore smooth scrolling after the jump
        requestAnimationFrame(() => {
            html.style.scrollBehavior = "";
        });
    }, [pathname]);

    return null;
}