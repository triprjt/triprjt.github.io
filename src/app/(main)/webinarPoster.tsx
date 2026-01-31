"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const WebinarPoster = ({
    urlType,
    dateStr,
    timeStr,
}: {
    urlType: string;
    dateStr?: string;
    timeStr?: string;
}) => {
    const posterRef = useRef<HTMLDivElement>(null);

    const isBusinessContext = urlType.includes("business");
    const webinarType = isBusinessContext ? "business" : "personal";
    const displayDate = dateStr;
    const displayTime = timeStr;

    console.log('dateStr from poster', dateStr);

    return (
        <div className="flex flex-col items-center gap-8 w-full h-full">
            <div
                ref={posterRef}
                className="relative rounded-2xl base:aspect-[4/5] base:max-w-[40dvh] base:max-h-[100dvh] sm:max-w-[35dvh] sm:max-h-[50dvh] md:max-h-[100vh] md:max-w-[70vw] bg-[#5DDE5D] overflow-hidden shadow-2xl font-sans "
                style={{
                    background: "linear-gradient(135deg, #6ae96a 0%, #4cd14c 100%)"
                }}
            >
                {/* 1. Abstract 3D Cube */}
                <div className="absolute -right-10 -top-8 md:-right-16 md:-top-10 w-32 h-32 md:w-48 md:h-48 bg-[#00c950] transform rotate-12 skew-y-12 rounded-3xl shadow-lg">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                </div>

                {/* 2. Main Content Container */}
                <div className="relative p-6 md:p-10 flex flex-col h-fit justify-center gap-6 md:gap-12 md:justify-between">

                    {/* Header Text */}
                    <div className="space-y-4 md:space-y-6 mt-4 md:mt-0 relative">

                        {/* 4. Conditional Rendering based on URL type */}
                        {webinarType === 'business' ? (
                            // BUSINESS HEADLINE
                            <h1 className="text-black base:text-4xl sm:text-4xl md:text-5xl font-extrabold leading-[0.95] tracking-tight line-height-8">
                                Learn how to<br />
                                get maximum <br />
                                leverage with AI<br />
                                without writing code
                            </h1>
                        ) : (
                            // DEFAULT / TECHNICAL HEADLINE
                            <h1 className="text-black text-4xl sm:text-5xl md:text-5xl font-extrabold leading-[0.95] tracking-tight line-height-8">
                                Stop being<br />
                                confused about<br />
                                AI in 2026
                            </h1>
                        )}

                        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md opacity-95 font-heading">
                            Join me live at <br />
                            the free exclusive webinar
                        </h2>
                    </div>

                    {/* Feature Box */}
                    <div className="mt-2 md:mt-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 md:p-6 w-full md:w-[85%] shadow-lg">
                        {webinarType === 'business' ? (
                            // BUSINESS FEATURES
                            <ul className="flex flex-col gap-3 md:gap-4">
                                <FeatureItem text="Come as a beginner and leave with a clear AI roadmap " />
                                <FeatureItem text="Discover what AI can do for your business" />
                                <FeatureItem text="Start building AI side projects even with non-tech background" />
                            </ul>
                        ) : (
                            // DEFAULT / TECHNICAL FEATURES
                            <ul className="flex flex-col gap-3 md:gap-4">
                                <FeatureItem text="Catch up instantly on the game-changing AI breakthroughs of 2025" />
                                <FeatureItem text="Discover exactly how the top 1% are upskilling in AI right now" />
                                <FeatureItem text="Start building AI side projects even with non-tech background" />
                            </ul>
                        )}
                    </div>

                    {/* Footer Section */}
                    <div className="flex justify-between items-end mt-4 relative">
                        <div className="flex flex-col items-start gap-1 mb-2 md:mb-4 relative">
                            <div className="bg-[#ffaa00] text-black font-bold px-3 py-1 text-sm md:text-lg shadow-md -rotate-1 whitespace-nowrap">
                                Date: {displayDate}
                            </div>
                            <div className="bg-[#ffaa00] text-black font-bold px-3 py-1 text-sm md:text-lg shadow-md -rotate-1 ml-2 md:ml-4 whitespace-nowrap">
                                Time: {displayTime}
                            </div>
                            <div className="mt-4 flex flex-col gap-0.5 md:gap-1 text-[#1a1a1a] font-medium text-xs md:text-sm ml-1">
                                <span className="font-bold">Speaker: Rajat Tripathi</span>
                                <span className="opacity-80">IIT Kanpur Alumnus | AI Educator</span>
                            </div>
                        </div>

                        <div className="absolute -right-4 bottom-[-20px] md:-right-22 md:-bottom-10 w-40 sm:w-48 md:w-80 h-auto overflow-visible pointer-events-none">
                            <Image
                                src="/images/founder.jpg"
                                alt="Rajat Tripathi"
                                width={224}
                                height={256}
                                className="w-full h-full object-cover object-top"
                                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                                unoptimized
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const FeatureItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-2 md:gap-3">
        <div className="bg-black rounded-full p-1 mt-0.5 md:mt-1 flex-shrink-0">
            <Check className="w-2 h-2 md:w-3 md:h-3 text-white stroke-[4]" />
        </div>
        <span className="text-black font-medium leading-snug text-xs sm:text-sm md:text-[15px]">
            {text}
        </span>
    </li>
);

export default WebinarPoster;