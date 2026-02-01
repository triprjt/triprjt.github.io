"use client";

import { CheckCircle2, Sparkles } from "lucide-react";

const WhoShouldJoin = () => {
    const cardContentItems = [
        {
            id: 1,
            title: "Product & Growth Managers",
            // Using Lucide icon or keep your image path
            icon: "/images/productandgrowth1.jpg",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            description: [
                "Learn no-code tools to build MVPs with AI",
                "Think clearly about Gen AI use cases",
                "Land AI roles paying 20-50% more",
                "Bridge the gap between technical and business goals",
                "Don't just chat with AI, build with it for 10x growth",
            ],
        },
        {
            id: 2,
            title: "Developers & IT Professionals",
            icon: "/images/developer.jpeg",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            description: [
                "Learn the modern stack: LLM, RAG, Agentic workflows",
                "Land AI roles paying 20-50% more",
                "Upskill fast: Get 1 year of learning in 6 weeks",
                "Build Leverage: Learn how to use AI to build resume and apply to jobs for you",
                "Be confident: lead your career without fear of AI replacing you",
            ],
        },
        {
            id: 3,
            title: "Founders & Senior Executives",
            icon: "/images/executives.png",
            gradient: "from-amber-400 via-orange-500 to-red-500",
            description: [
                "Think clearly: Separate the hype from the reality",
                "Leverage AI automations: Build for 10x growth within your team",
                "Hiring: how to shape your organization for AI",
                "Upskill: Get up to the speed with everything that has happened in AI in the last 1 year",
            ],
        },
    ];

    const CardComponent = ({
        title,
        description,
        icon,
        gradient,
    }: {
        title: string;
        description: Array<string>;
        icon: string;
        gradient: string;
    }) => {
        return (
            <div className="group relative w-full h-full">
                {/* 1. The Glow Effect (Behind the card) */}
                <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200`}
                ></div>

                {/* 2. The Main Card Content */}
                <div className="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 hover:translate-y-[-4px] transition-all duration-300">

                    {/* Header Section */}
                    <div className="flex flex-col items-center gap-4">
                        {/* Icon Container with subtle glow matching card theme */}
                        <div className={`w-20 h-20 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all duration-300`}>
                            <img src={icon} alt={title} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-colors">
                            {title}
                        </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>

                    {/* List Items */}
                    <ul className="flex flex-col gap-4">
                        {description.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                                {/* Replaced PlusCircle with CheckCircle2 for a cleaner checklist look */}
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-zinc-500 group-hover:text-white transition-colors`} />
                                <span className="text-sm md:text-[15px] font-medium leading-relaxed">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section className=" w-full py-20 text-white relative overflow-hidden mx-auto flex justify-center items-center">
            {/* Background Gradients for section depth */}
            <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10" />

            <div className="w-fulls mx-auto px-2 md:px-6 flex flex-col items-center gap-12">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        <Sparkles className="w-3 h-3 text-yellow-500" />
                        <span>Target Audience</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 pb-2">
                        Who Should Join?
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Whether you are technical or business-focused, our curriculum is designed to bridge the gap and accelerate your AI career.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {cardContentItems.map((ele) => (
                        <CardComponent
                            key={ele.id}
                            title={ele.title}
                            description={ele.description}
                            icon={ele.icon}
                            gradient={ele.gradient}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoShouldJoin;