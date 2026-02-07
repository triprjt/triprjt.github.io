import React, { useState } from 'react';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import EnrollNowModal from './modal/enrollNowModal';
import { useRouter } from 'next/navigation';
import { DG_OCEAN_ORIGIN } from '@/env';

interface Event {
    id: number;
    title: string;
    description: string;
    dateStr: string;
    ideal: Array<string>;
    remarks: Array<string>;
    dayTime: string;
    location: string;
    attendees?: string;
    thumbnailType: 'blue' | 'white'; // To switch between the two distinct visual styles
    eventType: string;
}


const SocialProofSection = () => {
    const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
    const stats = [
        { value: '400+', label: 'Workshops' },
        { value: '20,000+', label: 'Professionals Trained' },
        { value: '100+', label: 'Companies Trust Us' },
    ];
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const getNextWednesday = () => {
        const now = new Date();
        const nowUTC = now.getTime();
        const currentDayIST = now.getUTCDay();
        const currentHourIST = now.getUTCHours();
        const currentMinutesIST = now.getUTCMinutes();
        if (currentDayIST === 3 && (currentHourIST < 17 || (currentHourIST === 17 && currentMinutesIST === 0))) {
            return new Date(nowUTC);
        }
        const nextWednesdayUTC = nowUTC + 3 * 24 * 60 * 60 * 1000;
        return new Date(nextWednesdayUTC);
    }

    const getNextSunday = () => {
        const now = new Date();

        // IST is UTC+5:30, so we need to work in IST timezone
        // Get current time in IST by adding 5.5 hours to UTC
        const istOffsetMs = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        const nowUTC = now.getTime();
        const nowIST = new Date(nowUTC + istOffsetMs);

        // Get current day, hour, and minutes in IST
        const currentDayIST = nowIST.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const currentHourIST = nowIST.getUTCHours();
        const currentMinutesIST = nowIST.getUTCMinutes();

        // Create a date for 11:00 AM IST today
        const todayAt11AMIST = new Date(nowIST);
        todayAt11AMIST.setUTCHours(11, 0, 0, 0);
        const todayAt11AMUTC = todayAt11AMIST.getTime() - istOffsetMs;

        // If today is Sunday and it's before 11:00 AM IST, use today
        if (currentDayIST === 0 && (currentHourIST < 11 || (currentHourIST === 11 && currentMinutesIST === 0))) {
            return new Date(todayAt11AMUTC);
        }

        // Calculate days until next Sunday
        // If today is Sunday (and past 11 AM) or any other day, find next Sunday
        const daysUntilSunday = currentDayIST === 0 ? 7 : (7 - currentDayIST);
        const nextSundayIST = new Date(nowIST);
        nextSundayIST.setUTCDate(nowIST.getUTCDate() + daysUntilSunday);
        nextSundayIST.setUTCHours(11, 0, 0, 0);

        // Convert back to UTC for the Date object
        const nextSundayUTC = nextSundayIST.getTime() - istOffsetMs;
        return new Date(nextSundayUTC);
    };

    const companies = [
        'Societe Generale', 'Walmart', 'Accenture', 'Amazon',
        'BCG', 'Citi', 'Cognizant', 'CRED', 'Deloitte'
    ];
    const events: Event[] = [
        {
            id: 1,
            title: "Hands on learning: Build products with AI",
            description: "Learn how the top 1% people are building with AI.",
            dateStr: getNextWednesday().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            ideal: ["CXO", "founders", "Leaders"],
            remarks: ["No coding skills required"],
            dayTime: "Wednesday, 21:00 PM",
            location: "Online Webinar",
            attendees: "283 people attending",
            thumbnailType: 'blue',
            eventType: 'wednesday_webinar'
        },
        {
            id: 2,
            title: "AI: from confusion to clarity",
            ideal: ["Product Managers", "Marketing/Sales", "Designers", "HR"],
            remarks: ["No coding skills required"],
            description: "AI is a new technology and its confusing to understand. Join us for a webinar where we'll clear the confusion and help you understand the foundations.",
            dateStr: getNextSunday().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            dayTime: "Sunday, 11:00 AM",
            location: "Online Webinar",
            thumbnailType: 'white',
            eventType: 'sunday_webinar'
        }
    ];

    // We duplicate the array to create the seamless loop
    const infiniteCompanies = [...companies, ...companies];

    return (
        <div className="relative min-h-screen text-white font-sans overflow-hidden flex flex-col items-center">

            {/* 
        Injecting custom keyframes for the marquee. 
        In a real project, you would put this in tailwind.config.js or a global CSS file.
      */}
            <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        /* Pause animation on hover if desired */
        .group:hover .animate-scroll-right {
          animation-play-state: paused; 
        }
      `}</style>

            <div className="max-w-7xl mx-auto py-20 w-full flex flex-col justify-center items-center gap-20">

                {/* --- Header Section --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                        Our Learners Work at <br />
                        <span className="text-[#5B8DEF]">World-Class Companies</span>
                    </h2>
                </div>

                {/* --- Infinite Marquee Section --- */}
                <div className="w-full mb-24 relative group">

                    {/* Gradient Masks (Fades the edges) */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex min-w-full gap-16 animate-scroll-right items-center">
                            {infiniteCompanies.map((company, index) => (
                                <div
                                    key={index}
                                    className="whitespace-nowrap text-xl md:text-2xl font-bold text-gray-500 opacity-70 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default select-none"
                                >
                                    {/* Placeholder Logic for Logo Styles */}
                                    {company === 'Amazon' ? (
                                        <span className="font-serif italic tracking-tighter">amazon</span>
                                    ) : company === 'Walmart' ? (
                                        <span className="tracking-tight">Walmart <span className="text-yellow-500 text-3xl leading-none">*</span></span>
                                    ) : company === 'CRED' ? (
                                        <span className="font-serif tracking-widest">CRED</span>
                                    ) : (
                                        <span className="tracking-wide">{company.toUpperCase()}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Stats Cards Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#141522] border border-gray-800/50 rounded-2xl p-8 hover:border-[#5B8DEF]/30 hover:bg-[#1A1B2E] transition-all duration-300 group"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-lg">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* --- Floating Action Buttons --- */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/917607471549" // Replace with your number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
                    aria-label="Chat on WhatsApp"
                >
                    {/* 
           Using your existing Image component. 
           p-1 ensures the green background peeks out as a border if the SVG is full-bleed.
        */}
                    <div className="p-2 group-hover:scale-110 transition-transform duration-300">
                        <Image
                            src={`${DG_OCEAN_ORIGIN}/logos_whatsapp-icon.svg`}
                            alt="WhatsApp"
                            width={38}
                            height={38}
                            className="drop-shadow-sm"
                        />
                    </div>
                </a>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col gap-10">

                {/* --- Header --- */}
                <div className="text-center flex flex-col items-center gap-4 mb-20 md:mb-32">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4">Upcoming Events</h2>
                    <p className="text-gray-400 text-lg mb-[200px]">
                        Join our community events and connect with like-minded people
                    </p>
                </div>

                {/* --- Events List --- */}
                <div className="flex flex-col gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-[#161822] rounded-3xl border border-gray-800 overflow-hidden flex flex-col md:flex-row hover:border-gray-700 transition-colors duration-300"
                        >

                            {/* --- Image/Thumbnail Section --- */}
                            {/* Since we don't have the real images, I'm recreating the look with CSS/HTML */}
                            <div className={`w-full md:w-[320px] lg:w-[380px] shrink-0 relative flex flex-col p-6 ${event.thumbnailType === 'blue' ? 'bg-[#0047AB]' : 'bg-[#F0F4F8]'
                                }`}>

                                {event.thumbnailType === 'blue' ? (
                                    // The "No Code AI Agents" Blue Look
                                    <div className="h-64 md:h-full flex flex-col justify-center relative gap-3">
                                        <span className="text-white/80 text-xs font-bold tracking-widest mb-1 uppercase">Free AI Workshop</span>
                                        <h3 className="text-2xl md:text-3xl font-black text-white leading-[0.9] -ml-1">
                                            10x leverage<br />with AI <br />automations
                                        </h3>
                                        <div className="mt-auto pt-4 mb-10">
                                            <span className="bg-white rounded-full text-blue-900 font-bold px-3 py-1 text-sm uppercase">Register for Free</span>
                                        </div>
                                        <div className="mt-auto flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                                {/* Placeholder for person avatar */}
                                                <img src={`${DG_OCEAN_ORIGIN}/founder.jpg`} alt="Rajat Tripathi" width={40} height={40} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base md:text-md font-bold text-white uppercase">Rajat Tripathi</span>
                                                <span className="text-base md:text-sm text-gray-100">AI Expert | IIT Kanpur Alumnus</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // The "AI for PMs" White Look
                                    <div className="h-64 md:h-full flex flex-col gap-2 justify-center relative text-gray-900">
                                        <span className="text-blue-600 text-xs font-bold tracking-widest mb-2 uppercase text-start">Free Webinar</span>
                                        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                                            <span className="line-through decoration-blue-500 decoration-4 ">Learn</span> build<br />
                                            for 10x<br />
                                            <span className="text-blue-600">productivity</span>
                                        </h3>
                                        <div className="mt-auto pt-4">
                                            <span className="bg-blue-500 rounded-full text-white font-bold px-3 py-1 text-sm uppercase">Register for Free</span>
                                        </div>
                                        <div className="mt-auto flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                                {/* Placeholder for person avatar */}
                                                <img src={`${DG_OCEAN_ORIGIN}/founder.jpg`} alt="Rajat Tripathi" width={40} height={40} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base md:text-md font-bold text-blue-600 uppercase">Rajat Tripathi</span>
                                                <span className="text-base md:text-sm text-gray-600">AI Expert | IIT Kanpur Alumnus</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* --- Content Section --- */}
                            <div className="p-6 md:p-8 flex flex-col justify-between w-full">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-col gap-3 mb-6">

                                        {/* 1. IDEAL FOR: Highlight Blue, Medium Size */}
                                        {event.ideal && event.ideal.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                                                    Ideal for:
                                                </span>
                                                {event.ideal.map((role, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-[var(--highlight)] text-white text-[10px] md:text-xs font-medium px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(78,113,242,0.3)]"
                                                    >
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Meta Data Grid (Existing) */}
                                    <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-300 mb-8">
                                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                                            <Calendar className="w-4 h-4 text-blue-400" />
                                            <span>{event.dateStr}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                                            <Clock className="w-4 h-4 text-blue-400" />
                                            <span>{event.dayTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
                                            <MapPin className="w-4 h-4 text-blue-400" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Row: Attendees & Button */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-800 pt-6 mt-auto">
                                    {event.remarks.map((eve, idx) => (
                                        <span key={idx} className="bg-[#2A2D3A] text-gray-300 border border-gray-700 text-[10px] md:text-xs px-2.5 py-0.5 rounded-md">
                                            {eve}
                                        </span>
                                    ))}

                                    <button onClick={() => { setOpen(true); setSelectedEventType(event.eventType); }} className={`w-full sm:w-auto font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm
                  
                  bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50
                  }`}>
                                        Reserve Spot
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- Footer Button --- */}
                <div className="flex justify-center">
                    <button onClick={() => router.push('/webinar')} className="group border border-gray-800 hover:border-gray-600 bg-transparent text-white py-3 px-8 rounded-full flex items-center gap-2 transition-all">
                        Discover All Events
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
            <EnrollNowModal open={open} onOpenChange={setOpen} eventType={selectedEventType as string} />

        </div>
    );
};

export default SocialProofSection;