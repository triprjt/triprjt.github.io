import React from 'react';
import { Check, X, Minus, Sparkles } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ComparisonFeature {
  name: string;
  us: string;
  others: string;
  self: string;
}

const features: ComparisonFeature[] = [
  {
    name: "Curriculum Depth",
    us: "Production-grade (RAG, Agents, MCP, Tooling)",
    others: "Surface level (Basics & APIs)",
    self: "Fragmented / Outdated tutorials"
  },
  {
    name: "Mentorship",
    us: "1:1 Live with IITian Founder/10+ years of experience in AI and startups",
    others: "Generic TAs / Recorded videos",
    self: "No feedback loop"
  },
  {
    name: "Project Complexity",
    us: "5 projects tailored to your job/business",
    others: "Simple projects with no production grade value",
    self: "Simple projects with no production grade value"
  },
  {
    name: "Community",
    us: "Vetted Builders & Founders",
    others: "Large, silent discord channels",
    self: "Lonely journey"
  },
  {
    name: "Accountability",
    us: "Very high",
    others: "Very high",
    self: "Requires 100% self-discipline–low completion rate"
  },
  {
    name: "Career Outcome",
    us: "Shippable Product Portfolio–High Payoff",
    others: "Generic Certificate–Low Payoff",
    self: "Knowledge gaps–Low Payoff"
  }
];

export default function ComparisonTable() {
  return (
    <section className="w-full py-fluid px-0 md:px-4 flex flex-col items-center gap-8 md:gap-12 text-[#e4e4e7]">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-[#fffffe]">
          Don't just watch. <span className="text-[#ff8906] relative inline-block">
            Build.
            <svg className="absolute w-full h-2 bottom-0 left-0 translate-y-2 text-[#ff8906]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h2>
        <p className="text-[#a7a9be] text-lg font-body">
          Most courses sell you content. We sell you the capability to ship.
        </p>
      </div>

      {/* Table Container - Scrollable Wrapper */}
      {/* "max-w-6xl" constraints width on desktop. "w-full" ensures it takes space. */}
      <div className="w-full max-w-6xl relative px-0 md:px-4">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-1/3 h-full bg-[#e53170]/10 blur-3xl pointer-events-none" />

        {/* 
            SCROLLABLE TABLE CONTAINER 
            1. overflow-x-auto: Enables horizontal scroll
            2. pb-4: Space for scrollbar
        */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar md:custom-scrollbar relative z-10 rounded-none md:rounded-3xl border-y md:border border-[#a7a9be]/10 bg-[#0f0e17] shadow-2xl">
          
          {/* 
              GRID LAYOUT 
              Mobile: Fixed pixel widths [110px | 240px | 180px | 180px] to force scroll.
              Desktop: grid-cols-12 for responsive fluid layout.
          */}
          <div className="grid grid-cols-[110px_240px_180px_180px] md:grid-cols-12 min-w-[710px] md:min-w-0">

            {/* --- HEADERS --- */}

            {/* Sticky Label Column (Mobile) */}
            <div className="sticky left-0 z-30 col-span-1 md:col-span-3 p-3 md:p-6 flex items-center justify-start md:justify-center border-b border-[#a7a9be]/10 bg-[#0f0e17] border-r border-[#a7a9be]/10 md:border-r-0 shadow-[4px_0_24px_-2px_rgba(0,0,0,0.5)] md:shadow-none">
              <span className="text-[#a7a9be] font-heading font-semibold uppercase tracking-wider text-[10px] md:text-sm">Comparison</span>
            </div>
            
            {/* YOUR BOOTCAMP HEADER */}
            <div className="col-span-1 md:col-span-3 p-3 md:p-6 border-b border-[#a7a9be]/10 bg-[#232946] border-x border-[#46db89]/20 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#46db89] to-[#232946]" />
              <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#46db89]" />
                <span className="text-[#46db89] text-[10px] md:text-xs font-bold uppercase tracking-wide">The GenAI Cohort</span>
              </div>
              <h3 className="text-sm md:text-xl font-heading font-bold text-[#fffffe]">Your Bootcamp</h3>
            </div>

            {/* OTHERS HEADER */}
            <div className="col-span-1 md:col-span-3 p-3 md:p-6 border-b border-[#a7a9be]/10 flex flex-col justify-center bg-[#0f0e17]">
               <h3 className="text-sm md:text-lg font-heading font-semibold text-[#a7a9be] md:text-[#fffffe]">Traditional Bootcamps</h3>
            </div>

            {/* YOUTUBE HEADER */}
            <div className="col-span-1 md:col-span-3 p-3 md:p-6 border-b border-[#a7a9be]/10 flex flex-col justify-center bg-[#0f0e17]">
               <h3 className="text-sm md:text-lg font-heading font-semibold text-[#a7a9be] md:text-[#fffffe]">Self Learning</h3>
            </div>


            {/* --- ROWS --- */}
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                
                {/* Feature Name (Sticky Left Column) */}
                <div className="sticky left-0 z-20 col-span-1 md:col-span-3 p-3 md:p-6 flex items-center border-b border-[#a7a9be]/10 bg-[#0f0e17] text-[#a7a9be] font-medium font-body text-xs md:text-base border-r border-[#a7a9be]/10 md:border-r-0 shadow-[4px_0_24px_-2px_rgba(0,0,0,0.5)] md:shadow-none">
                  {feature.name}
                </div>

                {/* Your Bootcamp Data (Winner Column) */}
                <div className="col-span-1 md:col-span-3 p-3 md:p-6 flex items-center border-b border-[#a7a9be]/10 bg-[#232946]/50 border-x border-[#46db89]/10 backdrop-blur-sm">
                  <div className="flex items-start md:items-center gap-2 md:gap-3">
                    {/* Icon Container */}
                    <div className="mt-0.5 md:mt-0 min-w-[20px] h-[20px] md:min-w-[24px] md:h-[24px] rounded-full bg-[#46db89]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-[#46db89]" />
                    </div>
                    {/* Text */}
                    <span className="text-[#fffffe] font-semibold text-xs md:text-[15px] font-body leading-tight">
                      {feature.us}
                    </span>
                  </div>
                </div>

                {/* Others Data */}
                <div className="col-span-1 md:col-span-3 p-3 md:p-6 flex items-center border-b border-[#a7a9be]/10 bg-[#0f0e17]">
                  <div className="flex items-start md:items-center gap-2 md:gap-3 opacity-70">
                    <div className="mt-0.5 md:mt-0 min-w-[20px] h-[20px] md:min-w-[24px] md:h-[24px] rounded-full bg-[#a7a9be]/10 flex items-center justify-center shrink-0">
                      <Minus className="w-3 h-3 md:w-4 md:h-4 text-[#a7a9be]" />
                    </div>
                    <span className="text-[#a7a9be] text-xs md:text-sm font-body leading-tight">
                      {feature.others}
                    </span>
                  </div>
                </div>

                {/* Self Learning Data */}
                <div className="col-span-1 md:col-span-3 p-3 md:p-6 flex items-center border-b border-[#a7a9be]/10 bg-[#0f0e17]">
                   <div className="flex items-start md:items-center gap-2 md:gap-3 opacity-70">
                    <div className="mt-0.5 md:mt-0 min-w-[20px] h-[20px] md:min-w-[24px] md:h-[24px] rounded-full bg-[#a7a9be]/10 flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 md:w-4 md:h-4 text-[#f25f4c]" />
                    </div>
                    <span className="text-[#a7a9be] text-xs md:text-sm font-body leading-tight">
                      {feature.self}
                    </span>
                  </div>
                </div>

              </React.Fragment>
            ))}

          </div>
        </div>
        
        {/* Mobile Swipe Indicator (Optional UX improvement) */}
        <div className="md:hidden text-center mt-4 text-[#a7a9be] text-xs flex items-center justify-center gap-2 animate-pulse">
           <span>← Swipe to compare →</span>
        </div>

      </div>
    </section>
  );
}