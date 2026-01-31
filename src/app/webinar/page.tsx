'use client';
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, AlertCircle, ChevronDown, History } from 'lucide-react';

// Define Event Interface
interface Event {
  id: number;
  title: string;
  description: string;
  dateObj: Date;
  dateStr: string;
  ideal: Array<string>;
  remarks: Array<string>;
  dayTime: string;
  location: string;
  attendees?: string;
  url: string;
  thumbnailType: 'blue' | 'white';
  link: string;
}

const Webinar = () => {
  const [open, setOpen] = useState(false);
  
  // New State for Toggle
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- Helper: Get Upcoming Day ---
  // Returns the next occurrence of a specific day index (0=Sun, 3=Wed)
  // If today is the specific day, it returns Today.
  const getNextDayOfWeek = (dayIndex: number) => {
    const now = new Date();
    const currentDay = now.getDay();
    
    // Calculate days to add to get to the target day
    // The modulo 7 ensures we wrap around the week correctly
    let daysToAdd = (dayIndex + 7 - currentDay) % 7;
    
    // Optional: If you always want "Next Sunday" to skip today (if today is Sunday),
    // uncomment the line below:
    // if (daysToAdd === 0) daysToAdd = 7;

    const nextDate = new Date(now);
    nextDate.setDate(now.getDate() + daysToAdd);
    return nextDate;
  };

  const getNextSunday = () => getNextDayOfWeek(0);
  const getNextWednesday = () => getNextDayOfWeek(3);

  // --- Generate Data ---
  const { futureEvents, pastEvents } = useMemo(() => {
    
    // 1. Prepare Dynamic Dates for Future Events
    
    // Event 1: Sunday 11:00 AM
    const sunDate = getNextSunday();
    sunDate.setHours(11, 0, 0, 0); // Set time to 11:00 AM
    const sunDateStr = sunDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // Event 2: Wednesday 21:00 PM
    const wedDate = getNextWednesday();
    wedDate.setHours(21, 0, 0, 0); // Set time to 9:00 PM
    const wedDateStr = wedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const future: Event[] = [
      {
        id: 1, 
        title: "AI for 10x productivity at your job",
        description: "Reality check: While you're stuck in sprint planning, other PMs are building actual products using AI. Learn to bridge the gap.",
        dateObj: sunDate,
        dateStr: sunDateStr,
        ideal: ["Product Managers", "Marketing", "HR"],
        remarks: ["No coding skills required"],
        dayTime: "Sunday, 11:00 AM IST",
        location: "Online Webinar",
        thumbnailType: 'white',
        // Fix: Use the variable sunDateStr directly, not event.dateStr
        url: `webinar/ai-for-10x-productivity?date=${encodeURIComponent(sunDateStr)}&time=${encodeURIComponent("Sunday, 11:00 AM IST")}`,
        link: "https://example.com/register/productivity"
      },
      {
        id: 2, 
        title: "Build AI Agents & Automations for your business",
        description: "Agentic AI and Automations are the talk of 2026! Join us for an interactive workshop where you'll learn how to automate complex workflows.",
        dateObj: wedDate,
        dateStr: wedDateStr,
        ideal: ["CXO", "Founders", "Leaders"],
        remarks: ["No coding skills required"],
        dayTime: "Wednesday, 21:00 PM IST",
        location: "Online Webinar",
        attendees: "310 people attending",
        url: `webinar/build-ai-agents-for-your-business?date=${encodeURIComponent(wedDateStr)}&time=${encodeURIComponent("Wednesday, 21:00 PM IST")}`,
        thumbnailType: 'blue',
        link: "https://example.com/register/business"
      }
    ];

    // 2. Generate Past Events (Inactive)
    const past: Event[] = [];
    const startDate = new Date('2026-01-01');
    const endDate = new Date(); // Use today as the cutoff
    
    let loopDate = new Date(startDate);
    let idCounter = 3;

    while (loopDate < endDate) {
      const dayOfWeek = loopDate.getDay(); // 0 = Sun, 3 = Wed
      
      // If loopDate is today or in future, stop (so we don't duplicate future events in past)
      if (loopDate.getTime() >= new Date().setHours(0,0,0,0)) break; 

      if (dayOfWeek === 0) {
        past.push({
          id: idCounter++,
          title: "AI for 10x productivity at your job",
          description: "Reality check: While you're stuck in sprint planning, other PMs are building actual products using AI.",
          dateObj: new Date(loopDate),
          dateStr: loopDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          ideal: ["Product Managers", "Marketing", "HR"],
          remarks: ["Recording available"],
          dayTime: "Sunday, 11:00 AM IST",
          location: "Online Webinar",
          thumbnailType: 'white',
          url: "webinar/ai-for-10x-productivity",
          link: "#"
        });
      }
      
      if (dayOfWeek === 3) {
         past.push({
          id: idCounter++,
          title: "Build AI Agents & Automations for your business",
          description: "Agentic AI and Automations are the talk of 2026!",
          dateObj: new Date(loopDate),
          dateStr: loopDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          ideal: ["CXO", "Founders", "Leaders"],
          remarks: ["Recording available"],
          dayTime: "Wednesday, 21:00 PM IST",
          location: "Online Webinar",
          thumbnailType: 'blue',
          url: "webinar/build-ai-agents-for-your-business",
          link: "#"
        });
      }
      loopDate.setDate(loopDate.getDate() + 1);
    }

    // Sort past events: Newest First
    past.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

    return { futureEvents: future, pastEvents: past };
  }, []);

  // --- Pagination Logic (Only for Past Events) ---
  const totalPages = Math.ceil(pastEvents.length / itemsPerPage);
  const paginatedPastEvents = pastEvents.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // Send event data when user clicks the external link
  const handleExternalLinkClick = (webinarEvent: Event) => {
    // Example: send to your API / analytics
    try {
      const payload = JSON.stringify(webinarEvent);

      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/webinar-click", blob);
      } else {
        void fetch("/api/webinar-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
        });
      }
    } catch (e) {
      // Fallback – don't block navigation if tracking fails
      console.error("Failed to send webinar event data", e);
    }
  };

  // Reusable Card Component
  const WebinarCard = ({ event, isActive }: { event: Event, isActive: boolean }) => (
    <div
      key={event.id}
      className={`
          relative w-full rounded-3xl border overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-in-out
          ${isActive 
            ? 'bg-[#161822] border-gray-700 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-1 hover:border-gray-500' 
            : 'bg-[#0f1119] border-gray-800/30 opacity-40 grayscale pointer-events-none'}
      `}
    >
      
      {/* External Link */}
      <a 
        href={event.url} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => handleExternalLinkClick(event)}
        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md border transition-colors
          ${isActive 
              ? 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white' 
              : 'hidden'}
        `}
      >
        <ExternalLink className="w-5 h-5" />
      </a>

      {/* --- Left Side: Thumbnail --- */}
      <div className={`w-full md:w-[320px] lg:w-[350px] shrink-0 relative flex flex-col p-6 
        ${event.thumbnailType === 'blue' ? 'bg-[#0047AB]' : 'bg-[#F0F4F8]'}
      `}>
        
        {/* Active Badge */}
        {isActive && (
          <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg z-10 animate-pulse flex items-center gap-1 shadow-md">
            <AlertCircle className="w-3 h-3" />
            FILLING FAST
          </div>
        )}

        {event.thumbnailType === 'blue' ? (
          // Blue Variant
          <div className="flex flex-col justify-center h-full relative gap-3">
            <span className="text-white/80 text-xs font-bold tracking-widest mb-1 uppercase">Free AI Workshop</span>
            <h3 className="text-3xl font-black text-white leading-[0.9] -ml-0.5">
              10x leverage<br />with AI <br />automations
            </h3>
            <div className="mt-auto pt-6 mb-8">
              <span className="bg-white rounded-full text-blue-900 font-bold px-4 py-1.5 text-xs tracking-wide uppercase shadow-lg">Free Entry</span>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden border-2 border-white/20">
                <img src="/images/founder.jpg" alt="Rajat Tripathi" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wide">Rajat Tripathi</span>
                <span className="text-xs text-blue-200">AI Expert</span>
              </div>
            </div>
          </div>
        ) : (
          // White Variant
          <div className="flex flex-col h-full gap-2 justify-center relative text-gray-900">
            <span className="text-blue-600 text-xs font-bold tracking-widest mb-2 uppercase text-start">Free Webinar</span>
            <h3 className="text-3xl font-bold leading-tight mb-2">
              <span className="line-through decoration-blue-500 decoration-4 text-gray-400">Learn</span> build<br />
              for 10x<br />
              <span className="text-blue-600">productivity</span>
            </h3>
            <div className="mt-auto pt-6">
              <span className="bg-blue-600 rounded-full text-white font-bold px-4 py-1.5 text-xs tracking-wide uppercase shadow-lg">Free Entry</span>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-100">
                <img src="/images/founder.jpg" alt="Rajat Tripathi" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">Rajat Tripathi</span>
                <span className="text-xs text-gray-500">AI Expert</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- Right Side: Content --- */}
      <div className="p-6 md:p-8 flex flex-col justify-between w-full min-h-[300px]">
        <div className="flex flex-col">
          <h3 className={`text-2xl font-bold mb-3 leading-snug ${isActive ? 'text-white' : 'text-gray-500'}`}>
            {event.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {event.description}
          </p>

          {/* Ideal For Tags */}
          {event.ideal && event.ideal.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Ideal for:
              </span>
              {event.ideal.map((role, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-md border
                    ${isActive 
                        ? 'bg-[#1F2937] text-gray-200 border-gray-700' 
                        : 'bg-transparent text-gray-600 border-gray-800'}`}
                >
                  {role}
                </span>
              ))}
            </div>
          )}

          {/* Date/Time Info */}
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <div className={`flex items-center gap-2 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
              <Calendar className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-gray-700'}`} />
              <span className="font-medium">{event.dateStr}</span>
            </div>
            <div className={`flex items-center gap-2 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
              <Clock className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-gray-700'}`} />
              <span className="font-medium">{event.dayTime}</span>
            </div>
          </div>
        </div>

        {/* Footer Area: Remarks + Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-800 pt-5 mt-auto">
          <div className="flex gap-2">
              {event.remarks.map((eve, idx) => (
              <span key={idx} className="text-gray-500 text-[10px] uppercase tracking-wide font-bold">
                  * {eve}
              </span>
              ))}
          </div>

          <button 
              onClick={() => isActive && setOpen(true)} 
              disabled={!isActive}
              className={`w-full sm:w-auto font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-sm
                  ${isActive 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
              `}
          >
            {isActive ? 'Reserve My Spot' : 'Registration Closed'}
            {isActive && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[100vh] full-bleed-dark text-white font-sans py-16 px-4 md:px-8">
      
      <div className="w-full h-full flex items-center justify-center mx-auto flex flex-col gap-10 p-2 md:p-8">
        
        {/* === SECTION 1: Future Events (Always Visible) === */}
        <div className="flex flex-col gap-8 w-[60%]">
          {futureEvents.map((event) => (
            <WebinarCard key={event.id} event={event} isActive={true} />
          ))}
        </div>

        {/* === SECTION 2: Divider / Toggle for Past Events === */}
        {pastEvents.length > 0 && (
          <div className="w-[60%] flex flex-col gap-4 mt-8">
            <button 
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="group flex items-center justify-center gap-3 w-full py-4 rounded-full border border-gray-800 bg-[#0f1119] hover:bg-[#161822] hover:border-gray-700 transition-all text-gray-400 hover:text-white"
            >
              <History className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                {showPastEvents ? 'Hide Past Events' : 'View Past Events'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showPastEvents ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* === SECTION 3: Past Events (Collapsible) === */}
        {showPastEvents && (
          <div className="flex flex-col gap-8 w-[60%] animate-in fade-in slide-in-from-top-4 duration-500">
            {paginatedPastEvents.map((event) => (
              <WebinarCard key={event.id} event={event} isActive={false} />
            ))}

            {/* --- Pagination Controls (Only visible when Past Events are open) --- */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center justify-center gap-3 mt-4">
                  <div className="flex items-center gap-2 bg-[#161822] p-1.5 rounded-full border border-gray-800">
                      <button 
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className={`p-2 rounded-full transition-colors ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-gray-700'}`}
                      >
                          <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      <div className="px-4 text-sm font-medium text-gray-400">
                          Page <span className="text-white">{currentPage}</span> of {totalPages}
                      </div>
                      
                      <button 
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className={`p-2 rounded-full transition-colors ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-gray-700'}`}
                      >
                          <ChevronRight className="w-5 h-5" />
                      </button>
                  </div>
                  <p className="text-xs text-gray-600">Showing {itemsPerPage} events per page</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Webinar;