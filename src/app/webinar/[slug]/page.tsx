import React from "react";
import { notFound } from "next/navigation";
import WebinarBanner from "../../(main)/webinarPoster"; // Keep your existing path
import RegistrationForm from "../../(main)/components/registrationForm"; // Update import path

// 1. Mock Data Database
const WEBINARS = {
  "ai-for-10x-productivity": {
    title: "AI for 10x Productivity",
    date: "Feb 1, 2026",
    time: "11:00 AM IST",
    speaker: "Stewart Bond",
    topic: "What Real-Time means for AI",
  },
  "build-ai-agents-for-your-business": {
    title: "Build AI Agents & Automations for your business",
    date: "Feb 4, 2026",
    time: "9:00 PM IST",
    speaker: "Rajat",
    topic: "Next.js 15 and Beyond",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WebinarLandingPage({ params }: Props) {
  const { slug } = await params;
  
  // 2. Fetch data based on slug
  const webinarData = WEBINARS[slug as keyof typeof WEBINARS];

  // 3. Handle invalid URLs
  if (!webinarData) {
    notFound(); 
  }

  return (
    <div className="min-h-[80vh] bg-[#050505] flex items-center justify-center p-4 md:p-12">
      <div className="w-full mx-auto">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
          
          {/* Left Column: The Poster */}
          <div className="flex flex-col gap-6 sticky">
            {/* Context Breadcrumb */}
            <div style={{ marginBottom: "40px" }} className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-widest mb-10">
              Webinars / <span className="text-white">{webinarData.title}</span>
            </div>

            {/* Your Existing Poster Component */}
            {/* Added shadow/glow to separate it from background */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20 my-auto">
              <WebinarBanner urlType={webinarData.title} dateStr={webinarData.date} timeStr={webinarData.time} />
            </div>
            
            {/* Optional: Mobile-only helper text */}
            <p className="xl:hidden text-center text-gray-500 text-sm">
              Scroll down to register
            </p>
          </div>

          {/* Right Column: The Form */}
          <div style={{ marginTop: "40px" }} className="w-full h-full flex items-center justify-center">
            <RegistrationForm webinarTitle={webinarData.title} />
          </div>

        </div>
      </div>
    </div>
  );
}