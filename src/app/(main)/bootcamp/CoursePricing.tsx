import React from 'react';
import { Check } from 'lucide-react';

const CoursePricing = () => {
    return (
        <div className="min-h-screen mt-[20px] w-full text-white py-20 px-4 flex flex-col items-center relative overflow-hidden gap-2 md:gap-4">

            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="relative flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto space-y-4 gap-2 md:gap-4">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                    Course <span className="text-[#5B8DEF]">Pricing</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl">
                    For founders, PMs, and engineers ready to build real GenAI products - without second-guessing the fine print.
                </p>
            </div>

            {/* Main Pricing Card Container */}
            <div className="relative w-full md:max-w-6xl bg-[#0A0A0A] rounded-[32px] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl">

                {/* --- LEFT SECTION (Price & Basic Features) --- */}
                <div className="w-full md:w-[40%] bg-[#151925] p-8 md:p-12 flex flex-col justify-around border-r border-white/5 gap-6 md:gap-8">
                    <div className="flex flex-col justify-between items-between gap-4 md:gap-6">
                        {/* Price Tag */}
                        <div className="mb-2 relative flex flex-col gap-4 md:gap-6">
                            <div className='flex gap-2 md:gap-4'>
                                <span className="bg-[var(--highlight)] rounded-full px-2 py-1 text-white text-xs">inclusive everything</span>
                                <span className="text-white bg-[var(--highlight)] rounded-full px-2 py-1 text-xs">one-time payment</span>
                            </div>
                            <span className="text-5xl md:text-6xl font-bold text-[#5B8DEF]">₹99,999</span>
                        </div>
                        {/* Checklist */}
                        <ul className="space-y-6">
                            <ListItem text="6-week intensive program" />
                            <ListItem text="Build and deploy 5+ GenAI production ready automations" />
                            <ListItem text="Superhelpful 1:1 mentorship" />                                                        
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-12 py-4 rounded-xl bg-gradient-to-b from-[#4F80E2] to-[#365FB5] hover:to-[#2e5099] text-white font-semibold text-lg shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all transform active:scale-[0.98]">
                        Join the Cohort
                    </button>
                </div>

                {/* --- RIGHT SECTION (Detailed Benefits) --- */}
                <div className="w-full md:w-[60%] bg-[#080808] p-2 md:p-12 gap-6 md:gap-0 flex flex-col">

                    <h3 className="text-xl font-bold mb-8 text-white">What you get:</h3>

                    <div className="space-y-8 mb-12">
                        <FeatureItem
                            title="One-Time Fee"
                            desc="No hidden costs, no upsells"
                        />
                        <FeatureItem
                            title="Only 10 spots per batch"
                            desc="Highly personalised learning tailored to your goals and background"
                        />
                        <FeatureItem
                            title="Exclusive access to a tight community"
                            desc="Builders and founders who help each other grow"
                        />
                        <FeatureItem
                            title=""
                            desc="All the resources(videos/text/code) you need to build your next project"
                        />
                        <FeatureItem
                            title="Built for Builders"
                            desc="The only course where you learn the practical side of GenAI"
                        />
                    </div>

                    {/* Consultation Box */}
                    <div className="mt-auto bg-[#12141C] border border-white/5 rounded-2xl p-6 md:p-8">
                        <p className="text-gray-300 text-sm md:text-base mb-6 text-center md:text-left">
                            Want to understand how our course aligns with your AI goals? We are here to help!
                        </p>
                        <button style={{ marginTop: '10px' }} className="w-full py-3 rounded-lg bg-[#272A38] hover:bg-[#313545] border border-white/5 text-gray-200 font-medium transition-colors">
                            Book a Consultation
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

// Helper Components

const CheckIcon = () => (
    <div className="mt-0.5 min-w-[24px] h-[24px] rounded-full bg-[#1E2332] flex items-center justify-center border border-white/5">
        <Check size={14} className="text-[#5B8DEF]" strokeWidth={3} />
    </div>
);

const ListItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3">
        <CheckIcon />
        <span className="text-gray-200 text-sm md:text-base font-medium leading-tight">{text}</span>
    </li>
);

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 min-w-[24px] h-[24px] rounded-full bg-[#1E2332] flex items-center justify-center border border-white/5">
            <Check size={14} className="text-[#5B8DEF]" strokeWidth={3} />
        </div>
        <div className="flex flex-col gap-1">
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-gray-400 text-sm md:text-base">{desc}</p>
        </div>
    </div>
);

export default CoursePricing;