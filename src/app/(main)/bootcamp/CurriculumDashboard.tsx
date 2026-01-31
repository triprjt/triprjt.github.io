"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  MessageSquare,
  User,
  Cpu,
  Briefcase,
  Code,
  Rocket,
  Search,
  Zap,
  Layout,
  Terminal,
  Database,
  BrainCircuit,
  Bot,
  Star,
  CheckCircle2,
  Target,
  ChevronRight
} from 'lucide-react';

// --- Data Structure ---
const modules = [
  {
    id: 1,
    title: "Module 1",
    subtitle: "Basics of Gen AI and How to Get Started",
    icon: <BookOpen className="w-5 h-5" />,
    headerInfo: {
      headline: "The Fundamentals & APIs",
      subHeadline: "Understand how LLMs work, master prompt engineering, and make your first API calls.",
      goals: ["Prompt Engineering", "LLM Architecture"],
      outcomes: ["Your First AI Script", "API Key Setup"]
    },
    steps: [
      {
        title: "LLM Architecture & Tokens",
        desc: "Learn how Large Language Models predict the next token and understand the 'Context Window'.",
        tag: "Theory",
        difficulty: 1,
        icon: <BrainCircuit className="w-6 h-6" />
      },
      {
        title: "Project: Mood-Based Recommender",
        desc: "Build a Python script that suggests movies based on the user's current mood.",
        tag: "Code",
        difficulty: 2,
        icon: <Terminal className="w-6 h-6" />
      },
      {
        title: "Project: The 5-Year-Old Explainer",
        desc: "Create a Next.js UI that takes complex text and simplifies it using AI.",
        tag: "Code",
        difficulty: 3,
        icon: <Layout className="w-6 h-6" />
      }
    ]
  },
  {
    id: 2,
    title: "Module 2",
    subtitle: "RAG: Chat with Data",
    icon: <Database className="w-5 h-5" />,
    headerInfo: {
      headline: "Retrieval Augmented Generation",
      subHeadline: "Stop hallucinations by giving the AI access to your private documents and data.",
      goals: ["Stop Hallucinations", "Connect Private Data"],
      outcomes: ["RAG Pipeline", "Vector Database Skills"]
    },
    steps: [
      {
        title: "Embeddings & Vectors",
        desc: "Understand how text is converted into numbers (vectors) to compare meaning.",
        tag: "Theory",
        difficulty: 2,
        icon: <Search className="w-6 h-6" />
      },
      {
        title: "Project: Chat with your Resume",
        desc: "Upload a PDF and build a chat interface to ask questions about your experience.",
        tag: "Code",
        difficulty: 3,
        icon: <MessageSquare className="w-6 h-6" />
      }
    ]
  },
  {
    id: 3,
    title: "Module 3",
    subtitle: "Tools & Structured Output",
    icon: <User className="w-5 h-5" />,
    headerInfo: {
      headline: "Giving AI 'Hands'",
      subHeadline: "Transition from generating text to generating actions and reliable JSON data.",
      goals: ["Reliable JSON", "Function Calling"],
      outcomes: ["Smart Data Extractor", "Pydantic Schema"]
    },
    steps: [
      {
        title: "Structured Outputs",
        desc: "Learn how to force the LLM to return valid JSON for use in your applications.",
        tag: "Theory",
        difficulty: 2,
        icon: <Code className="w-6 h-6" />
      },
      {
        title: "Project: Smart Data Extractor",
        desc: "Feed messy emails into the AI and automatically extract calendar invites as JSON.",
        tag: "Code",
        difficulty: 3,
        icon: <Layout className="w-6 h-6" />
      }
    ]
  },
  {
    id: 4,
    title: "Module 4",
    subtitle: "Automation with AI Agents",
    icon: <Cpu className="w-5 h-5" />,
    headerInfo: {
      headline: "Autonomous Agents",
      subHeadline: "Build systems that can think, plan, and use tools to solve problems on their own.",
      goals: ["ReAct Pattern Logic", "Tool Integration"],
      outcomes: ["Autonomous Researcher Agent"]
    },
    steps: [
      {
        title: "The ReAct Pattern",
        desc: "Understand the Reasoning + Acting loop that powers autonomous agents.",
        tag: "Theory",
        difficulty: 3,
        icon: <BrainCircuit className="w-6 h-6" />
      },
      {
        title: "Project: The Internet Researcher",
        desc: "Build an agent that searches the web to answer current event questions.",
        tag: "Code",
        difficulty: 5,
        icon: <Bot className="w-6 h-6" />
      }
    ]
  },
  {
    id: 5,
    title: "Module 5",
    subtitle: "Multi-Agent Orchestration",
    icon: <Briefcase className="w-5 h-5" />,
    headerInfo: {
      headline: "Managing AI Teams",
      subHeadline: "Orchestrate multiple specialized agents to handle complex workflows.",
      goals: ["Manager/Worker Flows", "CrewAI Setup"],
      outcomes: ["AI Newsroom System"]
    },
    steps: [
      {
        title: "Role-Playing Agents",
        desc: "Assign personas (Researcher, Writer, Editor) to specific agents.",
        tag: "Theory",
        difficulty: 3,
        icon: <User className="w-6 h-6" />
      },
      {
        title: "Project: The AI Newsroom",
        desc: "Create a team of agents that research, write, and edit a blog post automatically.",
        tag: "Code",
        difficulty: 5,
        icon: <MessageSquare className="w-6 h-6" />
      }
    ]
  },
  {
    id: 6,
    title: "Module 6",
    subtitle: "Advanced AI Implementation",
    icon: <Code className="w-5 h-5" />,
    headerInfo: {
      headline: "Production & Deployment",
      subHeadline: "Deploy a full-stack, production-grade GenAI application to the world.",
      goals: ["Production Deployment", "Cost Evaluation"],
      outcomes: ["Live Vercel App", "ROUGE Scores"]
    },
    steps: [
      {
        title: "Streaming & UX",
        desc: "Learn how to stream text token-by-token to the frontend for a snappy feel.",
        tag: "Practical",
        difficulty: 4,
        icon: <Zap className="w-6 h-6" />
      },
      {
        title: "Evaluation (Evals)",
        desc: "How to measure if your AI app is actually good using ROUGE scores.",
        tag: "Theory",
        difficulty: 3,
        icon: <Search className="w-6 h-6" />
      }
    ]
  },
  {
    id: 7,
    title: "Module 7-8",
    subtitle: "Capstone Project & Launch",
    icon: <Rocket className="w-5 h-5" />,
    headerInfo: {
      headline: "Capstone Project & Launch",
      subHeadline: "Transform Your AI Ideas into Reality and Present to Industry Experts",
      goals: ["Full Stack App", "Pitch Deck"],
      outcomes: ["Portfolio Piece", "Job Ready Skills"]
    },
    steps: [
      {
        title: "Capstone: Talk to Your Repo",
        desc: "Build a Full Stack app where users can chat with any GitHub repository.",
        tag: "Capstone",
        difficulty: 5,
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "Live Demo Day",
        desc: "Present your capstone project to peers and industry experts.",
        tag: "Presentation",
        difficulty: 1,
        icon: <PresentationIcon />
      }
    ]
  }
];

// Helper Component for Star Rating
const DifficultyRating = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1" title={`Difficulty: ${level}/5`}>
      <span className="text-[10px] uppercase font-bold text-gray-400 mr-1">Difficulty:</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={`${i < level
              ? "fill-[#ff8906] text-[#ff8906]"
              : "fill-white/10 text-white/10"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

function PresentationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
  );
}

export default function CurriculumDashboard() {
  const [activeModule, setActiveModule] = useState(1);
  const activeData = modules.find(m => m.id === activeModule);

  // Ref to hold all buttons
  const itemsRef = useRef<Map<number, HTMLButtonElement>>(new Map());

  // Scroll active item into center view
  useEffect(() => {
    const node = itemsRef.current.get(activeModule);
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center' // This forces horizontal centering
      });
    }
  }, [activeModule]);

  return (
    <div className="min-h-[80vh] w-full flex flex-col justify-start md:justify-around items-center text-[#0f0e17] bg-[#eff0f3] py-12 px-1 md:p-4 font-body">
      
      {/* Main Heading */}
      <h1 style={{ marginBottom: '40px' }} className="text-3xl md:text-5xl font-heading font-bold text-[#0f0e17] tracking-tight mb-8">
        Curriculum
      </h1>

      <div className="w-full w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

        {/* --- NAVIGATION: Horizontal Scroll (Mobile) / Sidebar (Desktop) --- */}
        <div
          className="lg:col-span-4 w-full flex lg:flex-col lg:justify-center lg:items-center gap-3 overflow-x-auto pb-4 lg:pb-0 px-4 md:px-0 snap-x hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {modules.map((module) => (
            <button
              key={module.id}
              // Store reference to this button
              ref={(node) => {
                if (node) {
                  itemsRef.current.set(module.id, node);
                } else {
                  itemsRef.current.delete(module.id);
                }
              }}
              onClick={() => setActiveModule(module.id)}
              className={`
                w-[85%] md:min-w-[300px] lg:w-full flex-shrink-0 snap-center
                text-left transition-all duration-300 group relative overflow-hidden rounded-xl border-2 p-2 md:p-4 flex items-center gap-4
                ${activeModule === module.id
                  ? 'bg-white border-[#0f0e17] shadow-lg scale-[1.02]' // Active: White bg, Green border, Pop effect
                  : 'bg-[#eff0f3] border-transparent hover:bg-white hover:border-gray-200' // Inactive: Muted bg
                }
              `}
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-lg flex-shrink-0 transition-colors
                ${activeModule === module.id
                  ? 'bg-[#0f0e17] text-white' // Active Icon: Dark
                  : 'bg-[#232946] text-white group-hover:bg-[#0f0e17]' // Inactive Icon: Purple
                }
              `}>
                {module.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-grow justify-between items-center w-full min-w-0">
                <div className="flex flex-col min-w-0">
                  <h4 className={`font-heading font-bold text-sm mb-0.5 truncate uppercase tracking-wide
                    ${activeModule === module.id ? 'text-[#f25f4c]' : 'text-gray-500'}`}>
                    {module.title}
                  </h4>
                  <p className="text-sm md:text-[15px] font-medium text-[#2e2f3e] leading-tight line-clamp-2">
                    {module.subtitle}
                  </p>
                </div>
                <ChevronRight size={20} className={`hidden md:block flex-shrink-0 ml-2 ${activeModule === module.id ? 'text-[#0f0e17]' : 'text-gray-300'}`} />
              </div>
            </button>
          ))}
        </div>

        {/* --- RIGHT CONTENT AREA --- */}
        <div className="lg:col-span-8 px-4 md:px-0">

          <div className="h-full w-full 
            rounded-3xl
            bg-[#0f0e17] border border-white/10 p-6 md:p-10 relative overflow-hidden shadow-2xl text-[#fffffe]">

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#232946]/20 blur-3xl pointer-events-none" />

            {activeData && (
              <div className="relative z-10 animate-fadeIn flex flex-col gap-8">

                {/* 1. Header Section */}
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#fffffe] tracking-tight">
                    {activeData.headerInfo.headline}
                  </h2>
                  <p className="text-[#a7a9be] text-base md:text-lg font-light leading-relaxed max-w-2xl">
                    {activeData.headerInfo.subHeadline}
                  </p>
                </div>

                {/* 2. Goals & Outcomes Badges */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-4 border-b border-[#a7a9be]/20">
                  {/* Goals */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#a7a9be] uppercase tracking-wider">
                      <Target size={14} /> Goals
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeData.headerInfo.goals.map((g, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-[#fffffe] text-[#0f0e17] text-xs font-bold shadow-sm">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What You Get */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ff8906] uppercase tracking-wider">
                      <CheckCircle2 size={14} /> What You Get
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeData.headerInfo.outcomes.map((o, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-[#ff8906] text-[#0f0e17] text-xs font-bold shadow-sm">
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Steps/Projects Cards (GLASSMORPHISM APPLIED HERE) */}
                <div className="flex flex-col gap-4">
                  {activeData.steps?.map((step, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl 
                        bg-white/5 backdrop-blur-md border border-white/10
                        hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10
                        transition-all duration-300"
                    >
                      {/* Icon Box */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-[#46db89]">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow w-full min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-heading font-bold text-white truncate group-hover:text-[#46db89] transition-colors">
                            {step.title}
                          </h3>
                          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                            {step.tag}
                          </span>
                        </div>

                        <p className="text-[#a7a9be] text-sm leading-relaxed mb-2 line-clamp-2 md:line-clamp-none">
                          {step.desc}
                        </p>

                        <DifficultyRating level={step.difficulty} />
                      </div>
                      
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}