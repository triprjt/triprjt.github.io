import React from 'react';
import { Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';

const CommunityTestimonials = () => {
    // Mock Data mimicking the screenshot
    const testimonials = [
        {
            id: 1,
            name: "Mabi Nadaf",
            role: "Founder, GIICT",
            text: "The Crash Course on Generative AI by Build Fast with AI is an exceptional program for anyone looking to dive into the world of AI. Satvik's teaching style is engaging and easy to follow, even for those without a technical background.",
            initials: "MN"
        },
        {
            id: 2,
            name: "Vijay S.",
            role: "Data analyst",
            text: "I recently completed this course as a network engineer, and I'm genuinely impressed by how it's transformed my perspective on Generative AI in our field. I'm particularly excited to apply these newfound skills to enhance our cloud and network...",
            initials: "VS"
        },
        {
            id: 3,
            name: "Pooja T",
            role: "Product Lead",
            text: "Satvik is one of few people who have been building, educating and delivering great sessions on AI for more than a year. The 'learn by doing' approach was invaluable, it has helped us visualize and understand the key topics in a very short span...",
            initials: "PT"
        },
        {
            id: 4,
            name: "Arjun Pandey",
            role: "Software Engineer",
            text: "I would like to express my gratitude to Satvik Paramkusham for curating and delivering such an insightful course. The hands-on exercises were great to clarify any questions on how LLMs actually work.",
            initials: "AP"
        },
        {
            id: 5, // Duplicate for variety in the scroll
            name: "Barun Kumar",
            role: "Chief engineering, Mahindra",
            text: "The pacing of the workshops is perfect. It bridges the gap between high-level theory and actual implementation. Highly recommended for anyone wanting to stay relevant.",
            initials: "BK"
        }
    ];

    // Duplicate the array to ensure seamless looping
    const infiniteTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="min-h-[80vh] py-20 overflow-hidden font-sans text-white">

            {/* Inject Animation Styles */}
            <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        /* Pause on hover so users can read */
        .group:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>

            <div className="flex flex-col justify-center items-center gap-20">

                {/* --- Header & Navigation --- */}
                <div className="flex flex-col md:flex-row items-center mb-16 gap-6">
                    <div className="w-full text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">               
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-gray-400">
                                Hear from the
                            </span>{" "}                      
                            <span className="text-[#5B8DEF]">
                                Community
                            </span>
                        </h2>
                    </div>
                </div>

                {/* --- Infinite Marquee Container --- */}
                <div className="relative w-full group">

                    {/* Gradient Masks to fade edges */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[400px] bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-blue-200/40 blur-[80px] rounded-full pointer-events-none z-0" />
                    {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1E3A8A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1E3A8A] to-transparent z-10 pointer-events-none" /> */}

                    {/* Scrolling Track */}
                    <div className="absolute inset-0 pointer-events-none z-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                        {/* Optional: Add slight blue tint at edges to enhance the "Glow" feel */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F3F5F7] to-transparent opacity-80" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F3F5F7] to-transparent opacity-80" />
                    </div>

                    {/* Scrolling Track */}
                    <div className="flex animate-scroll-left w-max py-10 gap-10">
                        {infiniteTestimonials.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="w-[350px] md:w-[400px] mx-6 relative"
                            >
                                {/* 
                   Card Design
                   - White Background
                   - Light Shadow
                   - Hover Effect
                */}
                                <div className="bg-white rounded-2xl p-8 pt-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative h-full flex flex-col hover:shadow-[0_8px_30px_rgba(78,113,242,0.15)] hover:border-[#4E71F2]/30 transition-all duration-300">

                                    {/* 
                     Avatar - Cutout Effect
                     border-[#F3F5F7] matches the section background to create the "Cutout" look
                  */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                        <div className="w-20 h-20 rounded-full border-[6px] border-[#F3F5F7] bg-[#1F2937] overflow-hidden shadow-lg flex items-center justify-center">
                                            <span className="text-white text-xl font-medium tracking-widest">
                                                {item.initials}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-grow">
                                        {item.text}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex justify-center items-center mt-auto border-t border-gray-100 pt-6">
                                        <div>
                                            <h4 className="text-gray-900 font-bold text-lg">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mt-1">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CommunityTestimonials;