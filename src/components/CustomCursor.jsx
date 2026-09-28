import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        const handleMouseOver = (event) => {
            const target = event.target.closest(
                "a, button, [data-cursor-hover]"
            );

            setIsHovering(!!target);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-[9999]"
            style={{
                left: position.x,
                top: position.y,
                transform: `translate(-2px, -2px) ${
                    isHovering ? "scale(1.15)" : "scale(1)"
                }`,
                transformOrigin: "top left",
                transition: "transform 150ms ease-out",
            }}
        >
            <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 2L19.5 16.5L12.5 17.5L17 25L12.5 27L8 19L3 23L2 2Z"
                    fill="#7C3AED"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}