'use client';
import React, { useState } from 'react';
import { Button } from "@/app/(main)/components/ui/button";
import { ArrowRight, Play, Maximize2, FileText, Download, CheckCircle2, BookText, Rocket } from "lucide-react";
import EnrollNowModal from './modal/enrollNowModal';
import Image from 'next/image';

const Flyer = () => {
    const heading = "Master AI. Build Real Projects. Get Hired.";
    const subheading = "Join us to build real world AI skills.";
    const description = "Learn. Build. Grow 10x.";
    const [open, setOpen] = useState(false);
    const DG_OCEAN_ORIGIN = process.env.NEXT_PUBLIC_DG_OCEAN_ORIGIN;
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--card-background)] text-[var(--card-heading)] p-6 md:p-12">

            {/* --- BACKGROUND LAYER 1: Ambient Left-to-Right Glow --- */}
            <div
                className="absolute top-[0] left-[-10%] w-[70%] h-[140%] bg-[var(--background)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* --- BACKGROUND LAYER 2: Subtle Dots (Right Side) --- */}
            <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none z-0">
                <div
                    className="w-full h-full"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 60%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)'
                    }}
                >
                    <svg className="w-full h-full opacity-[0.25]">
                        <defs>
                            <pattern id="dot-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" fill="white" />
                            </pattern>
                            <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60A5FA" />
                                <stop offset="50%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#1E40AF" />
                            </linearGradient>
                            <mask id="dot-mask">
                                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blue-gradient)" mask="url(#dot-mask)" />
                    </svg>
                </div>
            </div>

            {/* --- BACKGROUND LAYER 3: Vignette Shadow --- */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)] z-0" />

            {/* --- MAIN CONTENT --- */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">

                {/* --- Left Column: Text Content --- */}
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1
                            className="font-bold tracking-tight leading-[1.1] text-4xl md:text-[4rem]"
                        >
                            Master AI.<br /> Build Real Projects.<br /> Get Hired.
                        </h1>

                        <h2
                            className="font-medium opacity-90 text-2xl md:text-[2rem] text-[var(--card-paragraph)]"
                        >
                            {subheading}
                        </h2>

                        <p
                            className="max-w-xl mx-auto lg:mx-0 opacity-70 font-bold leading-relaxed text-sm md:text-base text-[var(--card-paragraph)]"
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                        <Button
                            className="h-12 px-8 rounded-[var(--radius)] font-semibold transition-all bg-gradient-to-br from-[#FF9966] to-[#FF5E62] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,137,6,0.4)]"
                            style={{
                                fontSize: 'var(--text-button)',
                                color: 'white'
                            }}
                            onClick={() => setOpen(true)}
                        >
                            Enroll now
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 px-8 rounded-[var(--radius)] border border-[var(--card-paragraph)]/30 hover:bg-[var(--card-paragraph)]/10 transition-all group"
                            style={{
                                fontSize: 'var(--text-button)',
                                color: 'var(--card-heading)',
                                background: 'transparent'
                            }}
                        >
                            Start strong
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* --- Right Column: Glassmorphism UI --- */}
                <div className="w-full h-full flex items-center justify-center">
                    <Image src={`${DG_OCEAN_ORIGIN}/hsection.png`} alt="Flyer" width={800} height={800} />
                </div>
            </div>
            <EnrollNowModal open={open} onOpenChange={setOpen} />
        </section>
    );
}

export default Flyer;