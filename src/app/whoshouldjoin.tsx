"use client";

import { PlusCircle } from "lucide-react";

const WhoShouldJoin = () => {
    const cardContentItems = [
        {
            id: 1,
            title: "Product & Growth Managers",
            icon: "/images/product-manager-icon.png", // Placeholder - replace with actual icon path
            description: [
                "Learn no code tools to build MVPs with AI",
                "Think clearly about Gen AI use cases",
                "Bridge the gap between technical and business goals",
                "Dont just chat with AI, build with it for 10x growth"
            ],
        },
        {
            id: 2,
            title: "Developers & IT Professionals",
            icon: "/images/developer-icon.png", // Placeholder - replace with actual icon path
            description: [
                "Learn the modern stack: LLM, RAG, Agentic workflows, Fine-tuning on private data",
                "Stand out while job hunting: show Gen AI skills on your resume",
                "Get 1 year of learning in 6 weeks: Build 5 production-style projects",
                "Job hunting: write agents that apply to jobs for you",
                "Be confident: lead your career without fear of AI"
            ],
        },
        {
            id: 3,
            title: "Founders & Senior Executives",
            icon: "/images/executive-icon.png", // Placeholder - replace with actual icon path
            description: [
                "Think clearly: Separate the hype from the reality",
                "Optimise costs: Learn how to use AI agents to automate repetitive tasks",
                "Hiring: Hire AI first teams in the modern era",
                "Upskill: Dont just chat with AI, build with it for 10x growth"
            ]
        }
    ];

    const CardComponent = ({ title, description, icon }: { title: string, description: Array<string>, icon: string }) => {
        return (
            <div className="bg-card rounded-lg flex flex-col p-2 gap-6 border border-highlight">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-background rounded-lg flex items-center justify-center">
                        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
                    </div>
                </div>
                
                {/* Title */}
                <h6 className="text-card-heading text-xl md:text-2xl font-bold text-center">
                    {title}
                </h6>
                
                {/* Description list with plus icons */}
                <ul className="flex flex-col gap-3 w-full  card-content-desription">
                    {description.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <PlusCircle className="w-5 h-full text-card-heading flex-shrink-0" />
                            <span className="text-card-paragraph text-sm md:text-base">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="w-full h-full md:h-[80vh] flex flex-col items-center justify-center gap-8">
            <h1 className="text-headline-flyer text-3xl md:text-4xl font-bold text-center border border-red-500">
                Who Should Join
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto px-4 justify-items-center">
                {cardContentItems.map((ele) => (
                    <CardComponent 
                        key={ele.id} 
                        title={ele.title} 
                        description={ele.description}
                        icon={ele.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default WhoShouldJoin;