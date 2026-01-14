"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, UsersRound } from "lucide-react";

const Bootcamp = () => {
    const heading = "Come with curiosity";
    const heading2 = "Leave with ";
    const leaveWith = ["clarity", "confidence"];

    const subheading = "It's still early to upskill in AI. Start today!";

    const cards = [
        {
            id: 1,
            icon_url: "/images/build.svg",
            title: "Learn from the best",
            misc: ["IITians", "ex-founders", "10+ years of AI engineering experience"],
            description: "People who have ",
        },
        {
            id: 2,
            icon_url: "/images/build.svg",
            title: "6 week program",
            description: "Build 7 production-style projects over 12 weeks",
        },
        {
            id: 3,
            icon_url: "/images/build.svg",
            title: "Join a Growing community of passionate builders",
            description: "An amazing bunch of people who are passionate about building AI products",
        },
    ];

    // State to track which word is currently shown
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % leaveWith.length);
        }, 3000); // Slower interval - 3 seconds per word

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
        }
    ]
    const bootcampHighlightListItems = [
        {
            id: 1,
            title: "Less theory, more practical",            
        },
        {
            id: 2,
            title: "Active learning through projects",
        },
        {
            id: 3,
            title: "No codign experience required",
        },
        {
            id: 4,
            title: "1:1 live mentorship by the founder",
        },        
        {
            id: 5,
            title: "Money back guarantee",
        },
    ];

    const bootcampHighlightList = () => {
        return (
            <div className="flex flex-col gap-4">
                {bootcampHighlightListItems.map((card) => (
                    <div key={card.id} className="flex flex-row gap-4 items-center w-full">
                        <div className="flex-shrink-0 w-6 h-6 bg-[var(--bootcamp-card-icon)] rounded-full flex items-center justify-center">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-white w-full">{card.title}</h3>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="w-full h-full md:h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center border border-blue-500 gap-20 md:gap-1">
            <div className="flex flex-col items-center justify-center gap-6 h-full border border-red-500">
                <h1 className="text-headline-flyer md:text-[8rem] font-bold text-center">{heading}</h1>
                <div className="flex items-center justify-center flex-wrap gap-2">
                    <h1 className="text-headline-flyer md:text-[8rem] font-bold mb-2">{heading2}</h1>
                    {/* Animation container - inline with text */}
                    <div 
                        className="relative inline-block "
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
                                className="inline-flex items-center justify-center rounded-xl bg-white text-headline w-64 h-20 font-bold text-2xl md:text-5xl shadow-2xl"
                                style={{
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                {leaveWith[currentIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-blue flex flex-col gap-4">
                        {joinUsHighlights.map((highlight) => {
                            const Icon = highlight.icon;
                            return (
                                <div key={highlight.id} className="flex flex-row gap-2 items-center">
                                    <Icon className="w-6 h-6 fill-white" />
                                    <h3 className="text-white text-md">{highlight.title}</h3>
                                </div>
                            );
                        })}  
                    </div>
                </div>
            </div>
            <div className="bootcamp-card border border-blue-500 flex flex-col items-start justify-start gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-headline-flyer text-2xl md:text-3xl font-bold">{subheading}</h2>
                    <h4 className="text-headline-flyer text-xl md:text-2xl opacity-90">Next batch starts on Feb 2nd week</h4>
                </div>
                {bootcampHighlightList()}
                <div className="flex flex-col gap-3 w-full">
                    <Button className="bg-highlight text-white primary-button w-full">Enroll now</Button>
                    <Button className="bg-primary text-white border secondary-button w-full">View curriculum</Button>
                </div>
            </div>
        </div>
    );
};

export default Bootcamp;