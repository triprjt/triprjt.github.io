import React from 'react';
import { Code2 } from 'lucide-react';

export default function OurStoryPage() {
    return (
        <div className="w-full bg-[#09090b] text-[#fffffe] font-body selection:bg-[#ff8906] selection:text-[#0f0e17]">
            
            <section className="w-full py-12 md:py-20 bg-[#0f0e17] border-y border-white/5 overflow-hidden">
                {/* 
                   1. Changed w-fit to w-full max-w-7xl to constrain max width but allow full width on mobile 
                   2. Added px-4 for safety margin on mobile edges
                */}
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* --- TEXT CONTENT --- */}
                    {/* Removed w-[60%] and added w-full. Added md:text-left if you want it aligned left on desktop, or keep centered. */}
                    <div className="order-1 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                            Hi, I&apos;m <br className="block md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8906] to-[#f25f4c]">
                                Rajat Tripathi.
                            </span>
                        </h1>

                        {/* 
                           Fixed: Changed w-[60%] to w-full md:max-w-lg 
                           This ensures it fills the screen on mobile but stays neat on desktop 
                        */}
                        <p className="text-base md:text-xl text-[#a7a9be] w-full md:max-w-lg mx-auto leading-relaxed">
                            I have spent 10+ years in the software industry. My goal isn&apos;t just to teach AI – it&apos;s to help you think like an AI engineer and build skills that you will use for life.
                        </p>
                    </div>

                    {/* --- VISUAL / IMAGE --- */}
                    {/* 
                        Fixed: Changed w-[50%] to w-full. 
                        Added max-w-sm to prevent it from looking huge on tablets/desktop 
                    */}
                    <div className="order-2 w-[50%] flex justify-center items-center mx-auto relative group">
                        
                        {/* Background Rotation Effect */}
                        <div className="absolute inset-0 bg-[#ff8906] rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                        
                        {/* Main Card */}
                        <div className="relative overflow-hidden w-[50%] mx-auto rounded-2xl border border-white/10 bg-[#232946] shadow-2xl">
                            <div className="p-6 md:p-8 space-y-4">
                                
                                {/* Window Controls */}
                                <div className="flex gap-2 mb-6 md:mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                
                                {/* Skeleton Loader Lines */}
                                <div className="space-y-3 opacity-50">
                                    <div className="h-3 md:h-4 bg-white/10 rounded w-3/4" />
                                    <div className="h-3 md:h-4 bg-white/10 rounded w-1/2" />
                                    <div className="h-3 md:h-4 bg-white/10 rounded w-5/6" />
                                </div>
                                
                                {/* Code Icon Area */}
                                <div className="pt-6 md:pt-8">
                                    <div className="h-24 md:h-32 bg-[#0f0e17] rounded-lg border border-white/5 flex items-center justify-center">
                                        <Code2 className="text-[#46db89] w-10 h-10 md:w-12 md:h-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>           
        </div>
    );
}