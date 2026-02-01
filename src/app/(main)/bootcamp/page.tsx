"use client";
import NonCoderGraphic from "@/app/(main)/picturesForLandingPages/noncoder";
// import Bootcamp from "./page";
import DiagonalBox from "@/app/(main)/picturesForLandingPages/diagonalBox";
import CoursePricing from "./CoursePricing";
import ComparisonTable from "./Comparison";
import TechStackGrid from "@/app/(main)/picturesForLandingPages/modernStack";
import BootcampHeader from "../bootcamp";
import Image from "next/image";
import GenAICurriculum from "./CurriculumDashboard";
export default function BootcampComponent() {
    const whatMakeThisBootcampDifferent = [
        'highly personalised learning tailored to your goals and background',
        'hands-on projects and real-world applications',
        '1:1 live mentorship by the founder throughout the program',
        'IITian founder with 10+ years of experience in AI and startups',
    ];

    //TODO: pick these itmes later
    // { id: 4, title: 'Tools/MCP/Vector store/Agentic memory', icon: <DiagonalBox />, image: '/images/sec1.png', description: 'Learn how to use Tools, MCP, Vector store, and Agentic memory to build your own AI applications.' },
    //     { id: 5, title: 'Enterprise RAG system with hybrid search & re-ranking', icon: <DiagonalBox />, image: '/images/sec1.png', description: 'Learn how to measure if your AI app is actually good using ROUGE scores.' },
    //     { id: 6, title: 'Full AI product prototype with evals + A/B testing', icon: <DiagonalBox />, image: '/images/sec1.png', description: 'Learn how to stream text token-by-token to the frontend for a snappy feel.' },
    //     { id: 7, title: 'Capstone: internal company AI use-case', icon: <DiagonalBox />, image: '/images/sec1.png', description: 'Build a Full Stack app where users can chat with any GitHub repository.' }

    const whatIsCoveredInBootcamp = [
        { id: 1, title: 'Perfectly curated roadmap', icon: <NonCoderGraphic />, image: '/images/sec1.png', description: 'No more jumping between random YouTube tutorials. Follow a clear, logical path designed to build your skills step-by-step.' },
        { id: 2, title: 'Clear and byte sized lessons', icon: <DiagonalBox />, image: '/images/hsection.png', description: 'Each lesson is focused on building your intuition on AI–without any fluff. Suits your busy schedule.' },
        { id: 3, title: 'Beginner friendly ', icon: <TechStackGrid />, image: '/images/automation.png', description: 'Build your own AI automations –even with no tech background' },
    ];

    const WhyYouWillLoveLearningHere = () => {
        return (
            <div className="flex flex-col gap-20 w-full px-4 mx-auto justify-center items-center md:px-0 pb-20  bg-[var(--card-background)]">
                <h1 style={{ marginTop: '40px' }} className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight">Why you will love learning here</h1>
                {whatIsCoveredInBootcamp.map((item, index) => (
                    <div
                        key={item.id}
                        // Switch to a 2-column grid. Text on left, Image on right.
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center md:w-3/5 pb-12 last:border-0"
                    >
                        {/* Column 1: Title */}
                        <div className={`flex flex-col justify-center gap-2 md:gap-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <h2 className=" text-3xl md:text-5xl font-bold text-white font-heading leading-tight">
                                {item.title}
                            </h2>
                            <p className="text-white text-lg lg:text-2xl leading-7 lg:leading-9 md:text-base">
                                {item.description}
                            </p>
                        </div>

                        {/* Column 2: 3D Icon */}
                        <div className={`flex justify-center w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            {/* We wrap the icon to ensure it doesn't get squashed */}
                            <div className="w-full max-w-[500px] scale-75 md:scale-100 origin-center">
                                <Image src={item.image || ''} alt={item.title} width={500} height={500} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <main className="min-h-[90vh] rounded-full w-full bg-[var(--card-background)] ">
            <div className=" full-bleed-dark">
                <BootcampHeader />
            </div>

            <div id="curriculum" className=" min-h-screen md:mb-0">
                <GenAICurriculum />
            </div>
            <div id="whyyouwilllovelearninghere" className="full-bleed-section w-full h-full full-bleed-dark">
                <WhyYouWillLoveLearningHere />
            </div>
            <div className="full-bleed-section w-full h-full">
                <CoursePricing />
            </div>
            <div className="full-bleed-section w-full h-full full-bleed-dark">
                <ComparisonTable />
            </div>
        </main>
    );
}