import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "contact@sm-analytics.studio",
        href: "mailto:contact@sladjana-mandaric.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+381 69 267 25 11",
        href: "tel:+381692672511",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Novi Sad, Serbia",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        setSubmitStatus({
            type: null,
            message: "",
        });

        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(
                serviceID,
                templateID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);

            let errorMessage = "Failed to send message. Please try again later.";
            if (error && typeof error === "object" && "text" in error) {
                errorMessage = error.text;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }

            setSubmitStatus({
                type: "error",
                message: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            {/* 🔒 BULLETPROOF FIXED & STATIC BACKGROUND LAYER */}
            <div
                aria-hidden="true"
                style={{ position: "fixed", inset: 0, transform: "none" }}
                className="pointer-events-none overflow-hidden -z-50 bg-[#09050D]"
            >
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(196,181,253,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.45)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-purple-600/10 blur-[240px]" />
                <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[200px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/12 blur-[180px]" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#09050D] via-[#09050D]/80 to-transparent z-10" />
            </div>

            <section
                id="contact"
                className="relative isolate overflow-hidden text-white py-16 md:py-24"
            >
                {/* ================= CONTENT ================= */}

                <div className="container mx-auto px-6 relative z-10">
                    {/* ================= SECTION HEADER ================= */}

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span
                            className="
                                text-primary
                                text-md
                                font-medium
                                animate-fade-in
                            "
                        >
                            Get In Touch
                        </span>

                        <h2
                            className="
                                text-5xl
                                md:text-6xl
                                font-bold
                                mt-4
                                mb-6
                                animate-fade-in
                            "
                        >
                            {"Let's build "}

                            <span className="font-serif italic font-normal text-primary">
                                something great.
                            </span>
                        </h2>

                        <p
                            className="
                                text-muted-foreground
                                animate-fade-in
                                animation-delay-300
                            "
                        >
                            Have a project in mind? I'd love to hear about it.
                            Send me a message and let's discuss how we can work
                            together.
                        </p>
                    </div>

                    {/* ================= CONTACT FORM + RIGHT COLUMN ================= */}

                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* LEFT — CONTACT FORM */}

                        <div
                            className="
                                glass
                                p-8
                                rounded-3xl
                                border
                                border-primary/30
                                shadow-[0_20px_60px_rgba(88,28,135,0.20)]
                                animate-fade-in
                                animation-delay-300
                            "
                        >
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                {/* Name */}

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Your name..."
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            bg-surface
                                            rounded-xl
                                            border
                                            border-lilac
                                            focus:border-primary-dark
                                            focus:ring-1
                                            focus:ring-primary-dark
                                            outline-none
                                            transition-all
                                        "
                                    />
                                </div>

                                {/* Email */}

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            bg-surface
                                            rounded-xl
                                            border
                                            border-lilac
                                            focus:border-primary-dark
                                            focus:ring-1
                                            focus:ring-primary-dark
                                            outline-none
                                            transition-all
                                        "
                                    />
                                </div>

                                {/* Message */}

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            bg-surface
                                            rounded-xl
                                            border
                                            border-lilac
                                            focus:border-primary-dark
                                            focus:ring-1
                                            focus:ring-primary-dark
                                            outline-none
                                            transition-all
                                            resize-none
                                        "
                                    />
                                </div>

                                {/* Submit Button */}

                                <Button
                                    type="submit"
                                    className="w-full"
                                    size="lg"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                {/* Submit Status */}

                                {submitStatus.type && (
                                    <div
                                        className={`
                                            flex
                                            items-center
                                            gap-3
                                            p-4
                                            rounded-xl
                                            ${
                                                submitStatus.type === "success"
                                                    ? "bg-purple-500/10 border border-purple-500/20 text-primary"
                                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                            }
                                        `}
                                    >
                                        {submitStatus.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                        )}

                                        <p className="text-sm">
                                            {submitStatus.message}
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* RIGHT COLUMN */}

                        <div className="space-y-6">
                            {/* AVAILABLE FOR WORK */}

                            <div
                                className="
                                    glass
                                    rounded-3xl
                                    p-8
                                    border
                                    border-primary/20
                                    shadow-[0_20px_60px_rgba(88,28,135,0.20)]
                                    animate-fade-in
                                    animation-delay-500
                                "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {/* Pulsating Green Dot */}

                                    <span className="relative flex h-3 w-3">
                                        <span
                                            className="
                                                absolute
                                                inline-flex
                                                h-full
                                                w-full
                                                rounded-full
                                                bg-green-400
                                                opacity-75
                                                animate-ping
                                            "
                                        />

                                        <span
                                            className="
                                                relative
                                                inline-flex
                                                h-3
                                                w-3
                                                rounded-full
                                                bg-green-400
                                            "
                                        />
                                    </span>

                                    <h3 className="text-lg font-semibold">
                                        Available For Work
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    I'm currently open to new opportunities and
                                    exciting projects. Whether you need a full-time
                                    engineer or a freelance ads manager, let's talk!
                                </p>
                            </div>

                            {/* CONTACT INFORMATION */}

                            <div
                                className="
                                    glass
                                    rounded-3xl
                                    p-8
                                    border
                                    border-primary/20
                                    bg-purple-100/30
                                    animate-fade-in
                                    animation-delay-400
                                "
                            >
                                <h3 className="text-xl font-semibold mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    {contactInfo.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-4
                                                    p-4
                                                    rounded-xl
                                                    hover:bg-surface
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-1
                                                "
                                            >
                                                {/* Icon */}

                                                <div
                                                    className="
                                                        w-12
                                                        h-12
                                                        rounded-xl
                                                        bg-primary/10
                                                        flex
                                                        items-center
                                                        justify-center
                                                        shrink-0
                                                    "
                                                >
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>

                                                {/* Text */}

                                                <div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {item.label}
                                                    </div>

                                                    <div
                                                        className="
                                                            font-medium
                                                            break-words
                                                            transition-all
                                                            duration-300
                                                            hover:text-purple-600
                                                            hover:underline
                                                            hover:underline-offset-4
                                                        "
                                                    >
                                                        {item.value}
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};