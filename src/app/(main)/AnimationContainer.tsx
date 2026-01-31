import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import EnrollNowModal from './modal/enrollNowModal';

const offers = [
  {
    title: "Corporate Training",
    description: "Upskill your team with practical AI expertise. We deliver tailored, hands-on training that helps your people solve real problems with AI.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Book a Call",
    ctaLink: "https://cal.com/tripathirajat",
    featured: false
  },
  {
    title: "10xAI Bootcamp",
    description: "An 8-week course with comprehensive lectures and hands-on projects. Learn to build with AI from scratch—no prerequisites required.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    ctaText: "Enroll Now",
    ctaLink: "#",
    featured: true // Highlights this card
  },
  {
    title: "AI Consulting",
    description: "We help you leverage AI in your organization, building workflows and systems that are scalable, efficient, and future-proof.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Book a Call",
    ctaLink: "https://cal.com/tripathirajat",
    featured: false
  }
];

const WhatDoWeOffer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="relative w-full py-10 md:py-24 overflow-hidden full-bleed-dark">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full w-full h-full pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full">

        {/* Header Section */}
        <div style={{ marginBottom: '40px' }} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl w-full leading-relaxed">
            Where curiosity meets capability. We provide the AI learning paths that actually stick.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`
                group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500
                ${offer.featured 
                  ? 'bg-[#0f0e17] border-blue-500/30 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]' 
                  : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'
                }
              `}
            >
              
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-80" />
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Featured Badge */}
                {offer.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border border-blue-400/20">
                    <Sparkles size={12} className="text-yellow-300" />
                    MOST POPULAR
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 -mt-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {offer.title}
                  </h3>
                  <div className={`h-1 w-12 rounded-full opacity-50 bg-blue-500`} />
                </div>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {offer.description}
                </p>

                {/* Button Logic */}
                <div style={{ marginTop: '20px' }} className="mt-auto">
                  {offer.ctaText === "Enroll Now" ? (
                    <button 
                      onClick={handleOpen} 
                      className="w-full relative primary-button overflow-hidden rounded-xl bg-blue-600 text-white font-semibold group/btn transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {offer.ctaText}
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => window.open(offer.ctaLink, '_blank')} 
                      className="w-full relative secondary-button overflow-hidden rounded-xl bg-white/5 border border-white/10 text-white font-semibold group/btn transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {offer.ctaText}
                        <ArrowUpRight size={18} className="text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <EnrollNowModal open={open} onOpenChange={handleClose} />

      </div>
    </section>
  );
};

export default WhatDoWeOffer;