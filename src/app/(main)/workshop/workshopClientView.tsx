'use client';
import Link from "next/link";
import RegistrationForm from "../components/registrationForm";
import WorkshopPoster from "../workshop";
import { useState } from "react";

type WorkshopData = {
    title: string;
    date: string;
    time: string;
    speaker: string;
    eventType: string;
};

const WorkshopClientView = ({ data }: { data: WorkshopData }) => {
    const [joinButtonClick, setJoinButtonClick] = useState(false);
    return (
        <div className="min-h-[80vh] bg-[#050505] flex items-center justify-center p-2 md:p-4">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">

                    {/* Left Column: The Poster */}
                    <div className="flex flex-col gap-6 sticky">
                        {/* Context Breadcrumb */}
                        <div className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-widest mb-10 md:mb-10">
                            <Link href="/webinar" className="text-gray-400 hover:text-white">
                                Workshops
                            </Link>{" "}
                            / <span className="text-white">{data.title}</span>
                        </div>

                        {/* Poster Component */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center shadow-green-900/20 my-auto">
                            <WorkshopPoster
                                urlType={data.title}
                                dateStr={data.date}
                                timeStr={data.time}
                            />
                        </div>

                        {/* Button: Visible ONLY on mobile/tablet (lg:hidden) */}
                        {!joinButtonClick && (
                            <button
                                onClick={() => setJoinButtonClick(true)}
                                className="w-full lg:hidden mt-4" // lg:hidden ensures this disappears on desktop
                            >
                                <span className="block border border-gray-500 rounded-lg px-4 py-2 text-center text-gray-400 text-sm hover:bg-white/10 transition-colors cursor-pointer">
                                    Request to join
                                </span>
                            </button>
                        )}
                    </div>

                    {/* Right Column: The Form */}
                    {/* FIX: Removed JS conditional {joinButtonClick && ...} */}
                    {/* Used Tailwind to handle visibility: hidden on mobile (unless clicked), always flex on desktop */}
                    <div
                        style={{ marginTop: "40px" }}
                        className={`
              w-full h-full items-center justify-center mt-10 xl:mt-0
              ${joinButtonClick ? 'flex' : 'hidden'} 
              lg:flex 
            `}
                    >
                        <RegistrationForm webinarTitle={data.title} eventType={data.eventType} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkshopClientView;