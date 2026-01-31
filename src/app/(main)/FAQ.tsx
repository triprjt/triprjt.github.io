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
      question: "What kind of projects will participants actually build?",
      answer: "Participants build **7 production-style projects** over 12 weeks:\n1. Enterprise RAG system with hybrid search & re-ranking\n2. Multi-agent customer support system\n3. Fine-tuned domain-specific LLM (legal, finance, medical)\n4. Autonomous AI agent with tool use & memory\n5. Cost-optimized inference pipeline (vLLM, quantization)\n6. Full AI product prototype with evals + A/B testing\n7. Capstone: internal company AI use-case\nEvery project includes CI/CD, monitoring, and security review.",
    },
    {
      id: 3,
      question: "What measurable business outcomes can we expect?",
      answer: "Companies that sent 2–5 people in previous cohorts reported:\n• 40–70% faster prototyping of internal AI features\n• 30–60% reduction in inference costs after optimization week\n• Teams started shipping LLM-powered features in 6–10 weeks instead of 6–9 months\n• Several participants were promoted to AI Engineer / AI Product roles within 4–8 months\nWe also offer a post-bootcamp **company consulting call** (2 hours) to help implement one internal use-case.",
    },
    {
      id: 4,
      question: "Is this suitable for people who already know Python and ML?",
      answer: "Yes — this is explicitly **not** a beginner course.\nWe assume solid Python, basic ML (scikit-learn level), and ideally some exposure to deep learning or LLMs.\nIf your team has 1–2 years of applied ML experience or has already played with OpenAI APIs / LangChain / LlamaIndex, this is the right level. If they are complete beginners, we recommend our free webinar first.",
    },
    {
      id: 5,
      question: "What happens if someone cannot finish all weeks or misses live sessions?",
      answer: "Everything is recorded in HD and available forever.\nYou get lifetime access to:\n• All video recordings\n• Code repositories & templates\n• Private Discord + office hours archive\n• Project review channels (submit late)\nMost participants finish projects 1–3 months after the cohort ends — we support you until you do.",
    },
    {
      id: 6,
      question: "What is the refund / satisfaction guarantee?",
      answer: "30-day **full money-back guarantee** — no questions asked.\nIf after the first 4 weeks (including the first two major projects) you or your team feel this is not delivering the promised production-level skills, we refund 100%.\nAfter 30 days we offer a **pro-rated refund** until week 8. After that — lifetime access remains yours.",
    },
    {
      id: 7,
      question: "Do you offer company invoices, bulk discounts or training credits?",
      answer: "Yes.\n• GST-compliant invoices for Indian companies\n• Volume pricing: 5+ seats → 12–20% discount\n• 10+ seats → dedicated company cohort + private AMA with instructor\n• We accept credit from many corporate learning platforms (Udacity-style partners, Degreed, etc.) — contact us for details.",
    },
    {
      id: 8,
      question: "Who is teaching and what is their real-world track record?",
      answer: "Lead instructor: [Your Name] — former AI Lead @ Unicorn.\n• Built production AI systems used by millions\n• Mentored teams at top tech companies\n• Active contributor to LangChain / LlamaIndex\nGuest instructors from top AI companies or recent successful startup founders join for live Q&A.",
    },
    {
      id: 9,
      question: "What do graduates say after 3–6 months?",
      answer: "Real quotes (with permission):\n• “We shipped our first customer-facing RAG feature 3 weeks after graduation.”\n• “Got promoted to AI Engineer role within 5 months.”\n• “Cut inference bill by 55% using techniques from week 9.”\n(We publish anonymized outcome reports twice a year.)",
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