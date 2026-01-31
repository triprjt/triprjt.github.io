"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/(main)/components/ui/button";
import { Users, Clock, UsersRound, CheckCircle2 } from "lucide-react";
import EnrollNowModal from "./modal/enrollNowModal";
import { useRouter, usePathname } from "next/navigation";

const BootcampHeader = () => {
    const heading = "Come with curiosity";
    const heading2 = "Leave with ";
    const leaveWith = ["clarity", "confidence"];
    const [open, setOpen] = useState(false);
    const subheading = "It's still early to upskill in AI. Start today!";
    const router = useRouter();
    const pathname = usePathname();
    // State to track which word is currently shown
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % leaveWith.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [leaveWith.length]);

    const joinUsHighlights = [
        {
            id: 1,
            title: "500+ students enrolled",
            icon: Users,
        },
        {
            id: 2,
            title: "6 weeks program",
            icon: Clock,
        },
        {
            id: 3,
            title: "Join our growing community",
            icon: UsersRound,
        },
    ];

    const bootcampHighlightListItems = [
        { id: 1, title: "Less theory, more practical" },
        { id: 2, title: "Active learning through projects" },
        { id: 3, title: "No coding experience required" },
        { id: 4, title: "1:1 live mentorship by the founder" },
        { id: 5, title: "Money back guarantee" },
    ];

    return (
        <div className="relative w-full min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

                {/* LEFT COLUMN: Hero Text */}
                <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left">

                    <div className="space-y-4">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            {heading}
                        </h1>

                        <div className="flex flex-col md:flex-row items-center lg:justify-start justify-center gap-4">
                            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white/90">
                                {heading2}
                            </h1>

                            {/* --- ANIMATION BLOCK PRESERVED --- */}
                            <div
                                className="relative inline-block"
                                style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentIndex}
                                        initial={{ rotateX: -90, opacity: 0 }}
                                        animate={{ rotateX: 0, opacity: 1 }}
                                        exit={{ rotateX: 90, opacity: 0 }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                        className="inline-flex items-center justify-center rounded-xl bg-white text-[#0f0e17] px-6 py-2 h-16 md:h-16 font-heading font-bold text-3xl md:text-5xl shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                        }}
                                    >
                                        {leaveWith[currentIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            {/* --------------------------------- */}
                        </div>
                    </div>

                    {/* Highlights / Stats */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        {joinUsHighlights.map((highlight) => {
                            const Icon = highlight.icon;
                            return (
                                <div key={highlight.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 backdrop-blur-sm">
                                    <div className="bg-blue-500/20 p-2 rounded-full">
                                        <Icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-zinc-300 font-medium text-sm md:text-base">
                                        {highlight.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT COLUMN: The Card */}
                <div className="flex justify-center w-full px-4 md:px-0">
                    <div className="relative w-full max-w-md md:max-w-[500px] group">

                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-[var(--highlight)] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

                        {/* Main Card */}
                        <div className="relative bg-[var(--bootcamp-card)] border border-white/10 rounded-xl p-6 md:p-10 shadow-2xl flex flex-col gap-6 md:gap-8">

                            {/* Card Header */}
                            <div className="space-y-2 border-b border-white/10 pb-4 md:pb-6">
                                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {subheading}
                                </h2>
                                <div className="inline-block bg-white/10 border border-white/20 rounded-lg px-2 py-1 md:px-3">
                                    <h4 className="text-[var(--bootcamp-card-icon)] font-semibold text-xs md:text-sm tracking-wide uppercase">
                                        Next batch starts Feb 2nd week
                                    </h4>
                                </div>
                            </div>

                            {/* List */}
                            <div className="flex flex-col gap-3 md:gap-5">
                                {bootcampHighlightListItems.map((item) => (
                                    <div key={item.id} className="flex items-start gap-3 md:gap-4 group/item">
                                        {/* Optimized Icon Size */}
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[var(--bootcamp-card-icon)] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                        {/* Optimized Font Size */}
                                        <span className="text-zinc-300 text-base md:text-lg leading-snug">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3 md:gap-4 mt-2">
                                <Button onClick={() => setOpen(true)} className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-[var(--highlight)] text-[#0f0e17] rounded-lg transition-all shadow-[0_0_20px_rgba(255,137,6,0.3)] border-none">
                                    Enroll now
                                </Button>
                                {pathname !== '/bootcamp' && (
                                    <Button onClick={() => router.push('/bootcamp/#curriculum')} className="w-full h-12 md:h-14 text-base md:text-lg font-medium bg-transparent border-2 border-zinc-500 text-white hover:bg-white/10 rounded-lg transition-all hover:border-white disabled:opacity-50 disabled:cursor-not-allowed">
                                        View curriculum
                                    </Button>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <EnrollNowModal open={open} onOpenChange={setOpen} />
        </div>

    );
};

export default BootcampHeader;