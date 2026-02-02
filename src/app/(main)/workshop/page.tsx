import React from "react";
import { notFound } from "next/navigation";
import WebinarBanner from "../../(main)/webinarPoster"; // Keep your existing path
import RegistrationForm from "../../(main)/components/registrationForm"; // Update import path
import Link from "next/link";
import WorkshopCard from "@/app/(main)/short-course";
import Image from "next/image";
import { DG_OCEAN_ORIGIN } from "@/env";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WebinarLandingPage() {

  return (
    <div className="min-h-[80vh] bg-[#050505] flex items-center justify-center p-2 md:p-4">
      <div className="w-full mx-auto">
        
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-8 lg:gap-16 items-center justify-center">
          
          {/* Left Column: The Poster */}
          <div className="flex flex-col gap-6 sticky">
            {/* Context Breadcrumb */}
            {/* <div style={{ marginBottom: "40px" }} className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-widest mb-10">
              <Link href="/webinar" className="text-gray-400 hover:text-white">Webinars</Link> / <span className="text-white">{webinarData.title}</span>
            </div> */}

            {/* Your Existing Poster Component */}
            {/* Added shadow/glow to separate it from background */}   
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20 my-auto flex items-center justify-center">
              <Image src={`${DG_OCEAN_ORIGIN}/workshop3.png`} alt="Workshop" width={1000} height={1000} />
            </div>
            
            {/* Optional: Mobile-only helper text */}
            <p className="xl:hidden text-center text-gray-500 text-sm">
              Scroll down to register
            </p>
          </div>

          {/* Right Column: The Form */}
          <div style={{ marginTop: "40px" }} className="w-full h-full flex items-center justify-center">
            <RegistrationForm webinarTitle={"Agentic workshop"} eventType={'workshop_agentic'} />
          </div>

        </div>
      </div>
    </div>
  );
}