"use client";

import React from "react";
import { Youtube, Linkedin, MessageCircle, Calendar, Twitter } from "lucide-react";

// --- Part 1: The "Let's Talk" CTA Section ---
const LetsTalk = () => {
    return (
        <div className="w-full bg-[#F3F5F7] py-24 px-6">
            <div className="w-full flex flex-col items-center justify-center gap-10 mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                    AI upskilling is not difficult <br className="hidden md:block" />
                    when you have <span className="text-[#5B8DEF]">clarity.</span>
                </h2>

                <p className="text-gray-500 text-lg md:text-xl font-medium">
                    Book a free consultation call with our founder.
                </p>

                <button onClick={() => window.open('https://cal.com/tripathirajat', '_blank')} className="bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-lg py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(217,119,6,0.39)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto">
                    <Calendar className="w-5 h-5" />
                    <span>Book a 15min call</span>
                </button>
            </div>
        </div>
    );
};

// --- Part 2: The Main Footer ---
const Footer = () => {
    return (
        <footer className="w-full h-full bg-[#F3F5F7] text-gray-900 font-sans">

            {/* Include the CTA Section */}
            <LetsTalk />

            {/* Main Footer Content */}
            <div className="px-4 w-full items-center justify-center mx-auto py-8 md:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-4 md:px-20">

                    {/* LEFT SIDE: Logo & Copyright */}
                    <div className="flex flex-col gap-4 md:gap-6 justify-end">
                        {/* Logo */}
                        <div>
                            <h3 className="text-3xl font-black tracking-tighter text-[#161822]">
                                10xAIBootcaamp<span className="text-xs align-top ml-0.5">TM</span>
                            </h3>
                        </div>

                        {/* Copyright (Hidden on mobile, shown on desktop bottom) */}
                        <p className="text-gray-400 text-sm font-medium hidden md:block">
                            © 2026 10xAIBootcaamp All rights reserved.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Socials & Links */}
                    <div className="grid grid-cols-3 md:grid-cols-3 grid-shrink-0 gap-10 w-[100%] mx-auto justify-between items-start md:w-full">

                        {/* Resources */}
                        <div className="flex flex-col items-start justify-start gap-2 md:gap-6">
                            <h3 className="base:text-sm md:text-2xl font-bold">Resources</h3>
                            <div className="flex flex-col items-start justify-start gap-1 md:gap-3">
                                <FooterLink>Free Courses</FooterLink>
                                <FooterLink>Free Tools</FooterLink>
                                <FooterLink>10x AI Roadmap </FooterLink>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-2 md:gap-6">

                            <h3 className="base:text-sm md:text-2xl font-bold">Services</h3>
                            <div className="flex flex-col items-start justify-start gap-1 md:gap-3">
                                <FooterLink>Corporate Training</FooterLink>
                                <FooterLink>AI consulting</FooterLink>
                                <FooterLink>AI workshops </FooterLink>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-start justify-start gap-2 md:gap-6">
                            <h3 className="base:text-sm md:text-2xl font-bold">Company</h3>
                            <div className="flex flex-col items-start justify-start gap-1 md:gap-3">
                                <FooterLink>Terms</FooterLink>
                                <FooterLink>Refund policy</FooterLink>
                                <FooterLink>Privacy</FooterLink>
                                <FooterLink>Contact</FooterLink>
                            </div>
                        </nav>

                        {/* Copyright (Shown on mobile bottom only) */}

                    </div>
                    <p className="text-gray-400 text-sm font-medium w-full text-center items-center mx-auto md:hidden mt-4">
                        <span className="text-center w-full">© 2026 10xAIBootcaamp All rights reserved.</span>
                    </p>

                </div>
            </div>
        </footer>
    );
};
const FooterLink = ({ children }: { children: React.ReactNode }) => (
    <span
        className="text-gray-500 font-semibold base:text-xs md:text-base cursor-default select-none"
        aria-disabled
    >
        {children}
    </span>
);

export default Footer;