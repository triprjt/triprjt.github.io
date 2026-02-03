"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(main)/components/ui/accordion"; // Ensure you have shadcn accordion installed
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const listOfQuestions = [
    {
      id: 1,
      question: "How is this bootcamp different from the hundreds of other AI courses?",
      answer: "Most programs teach toy projects or outdated theory. This bootcamp focuses exclusively on **production-grade, real-world AI systems** used by companies in 2025–2026: retrieval-augmented generation (RAG), agentic workflows, fine-tuning on private data, evaluation frameworks, cost optimization at scale, secure deployment patterns, and post-training alignment/guardrails. You build 5–7 end-to-end systems that appear in recent job descriptions at top AI companies and scale-ups.",
    },
    {
      id: 2,
      question: "I have never coded before and I am in a nont-tech role, can i still join the bootcamp?",
      answer: "AI has enabled thousands of first time builders to create end-to-end applications\n So, tech skills is no longer a pre-requisite to build. Companies also know this, and they expect you to be able to work with a AI first mindset.",
    },
    {
      id: 3,
      question: "I am a founder, what measurable business outcomes can i expect from this bootcamp?",
      answer: "The goal here is to help you leverage AI efficiency to make your company the top1% in your industry. Most founders are stuck in the pre-AI era and this bootcamp will help you shift to the post-AI era.",
    },
    {
      id: 4,
      question: "Is this suitable for people who already know Python and ML?",
      answer: "Your technical skills are definitely a plus, but its not a pre-requisite for this course\n In the course, you will be building AI applications with the modern AI stack and tools.",
    },
    {
      id: 5,
      question: "What happens if someone cannot finish all weeks or misses live sessions?",
      answer: "Everything is recorded in HD and available forever–including the live sessions",
    },
    {
      id: 6,
      question: "What is the refund / satisfaction guarantee?",
      answer: "There is a 100% money back guarantee, at all times, no questions asked.",
    },
    {
      id: 7,
      question: "Do you offer company invoices, bulk discounts or training credits?",
      answer: "Yes.\n• GST-compliant invoices for Indian companies\n• Volume pricing: 5+ seats → 12–20% discount\n• 10+ seats → dedicated company cohort + private AMA with instructor\n• We accept credit from many corporate learning platforms (Udacity-style partners, Degreed, etc.) — contact us for details.",
    },
    {
      id: 8,
      question: "Who is teaching and what is their real-world track record?",
      answer: "Lead instructor: Rajat Tripathi \n•  former Team lead @ Contour–where he built production systems that has handled 10B USD per month in transactions\n• Ex- founder of an edtech company \n• B.Tech from IIT Kanpur and 10+years of overall tech experience",
    },
    {
      id: 9,
      question: "What do people say about the bootcamp?",
      answer: "• Non-tech people build their first automation/app with AI and deploy it to production\n• Founders get clarity to shift their company from pre-AI to post-AI era.\n• Job seekers unlock their dream AI role–by building real projects and getting interviews.",
    },
  ];

  // Logic to parse the **bold** and newlines from the string
  const parseContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className={`mb-3 last:mb-0 leading-relaxed text-gray-400 ${line.startsWith("•") || line.startsWith("1.") ? "pl-4" : ""}`}>
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="text-gray-200 font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <section className="min-h-screen py-24 font-sans">
      <div className="mx-auto w-full mx-auto flex flex-col items-center justify-center gap-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 space-y-4">
            <span className="text-[#5B8DEF] font-bold tracking-widest text-xs uppercase bg-[#5B8DEF]/10 px-4 py-1.5 rounded-full border border-[#5B8DEF]/20">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-500 to-slate-300">
                    Frequently Asked
                </span>{" "}
                <span className="text-white">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Everything you need to know about the curriculum, schedule, and outcomes.
            </p>
        </div>

        {/* --- FAQ Cards --- */}
        <Accordion type="single" collapsible className="max-w-3xl mx-auto flex flex-col gap-4">
          {listOfQuestions.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              // Removes default border-b and adds custom card styling
              className="border border-white/5 bg-[#161822]/50 px-2 rounded-2xl data-[state=open]:bg-[#161822] data-[state=open]:border-[#5B8DEF]/30 transition-all duration-300"
            >
              <AccordionTrigger 
                // [&>svg]:hidden removes the default chevron from shadcn
                className="hover:no-underline py-5 px-4 md:px-6 [&>svg]:hidden group"
              >
                <div className="flex items-start justify-between w-full text-left gap-6">
                    <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                        {item.question}
                    </span>
                    
                    {/* Custom Plus/Minus Icon */}
                    <div className="shrink-0 mt-1">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            {/* Plus Icon: Fades out when open */}
                            <Plus className="w-5 h-5 text-gray-500 absolute transition-all duration-300 rotate-0 scale-100 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                            {/* Minus Icon: Zooms in when open */}
                            <Minus className="w-5 h-5 text-[#5B8DEF] absolute transition-all duration-300 rotate-90 scale-0 opacity-0 group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" />
                        </div>
                    </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-4 md:px-6 pb-6">
                <div className="pt-2 border-t border-white/5">
                    <div className="mt-4 text-base text-gray-400 bg-white/2">
                        {parseContent(item.answer)}
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQ;