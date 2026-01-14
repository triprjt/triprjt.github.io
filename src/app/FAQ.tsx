"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const listOfQuestions = [
        {
          id: 1,
          question: "How is this bootcamp different from the hundreds of other AI courses and bootcamps already available?",
          answer:
            "Most programs teach toy projects or outdated theory. This bootcamp focuses exclusively on **production-grade, real-world AI systems** used by companies in 2025–2026: retrieval-augmented generation (RAG), agentic workflows, fine-tuning on private data, evaluation frameworks, cost optimization at scale, secure deployment patterns, and post-training alignment/guardrails. You build 5–7 end-to-end systems that appear in recent job descriptions at top AI companies and scale-ups."
        },
        {
          id: 2,
          question: "What kind of projects will participants actually build?",
          answer:
            "Participants build **7 production-style projects** over 12 weeks:\n" +
            "1. Enterprise RAG system with hybrid search & re-ranking\n" +
            "2. Multi-agent customer support system\n" +
            "3. Fine-tuned domain-specific LLM (legal, finance, medical, etc.)\n" +
            "4. Autonomous AI agent with tool use & memory\n" +
            "5. Cost-optimized inference pipeline (vLLM, quantization, batching)\n" +
            "6. Full AI product prototype with evals + A/B testing\n" +
            "7. Capston: internal company AI use-case (bring-your-own-data option)\n" +
            "Every project includes CI/CD, monitoring, cost tracking and security review — exactly what hiring managers now ask for in senior roles."
        },
        {
          id: 3,
          question: "What measurable business outcomes can we expect from sending our team?",
          answer:
            "Companies that sent 2–5 people in previous cohorts reported:\n" +
            "• 40–70% faster prototyping of internal AI features\n" +
            "• 30–60% reduction in inference costs after optimization week\n" +
            "• Teams started shipping LLM-powered features in 6–10 weeks instead of 6–9 months\n" +
            "• Several participants were promoted to AI Engineer / AI Product roles within 4–8 months\n" +
            "We also offer a post-bootcamp **company consulting call** (2 hours) to help implement one internal use-case."
        },
        {
          id: 4,
          question: "Is this suitable for people who already know Python and some machine learning?",
          answer:
            "Yes — this is explicitly **not** a beginner course.\n" +
            "We assume solid Python, basic ML (scikit-learn level), and ideally some exposure to deep learning or LLMs.\n" +
            "If your team has 1–2 years of applied ML experience or has already played with OpenAI APIs / LangChain / LlamaIndex, this is the right level. If they are complete beginners, we recommend our free webinar first."
        },
        {
          id: 5,
          question: "What happens if someone cannot finish all weeks or misses live sessions?",
          answer:
            "Everything is recorded in HD and available forever.\n" +
            "You get lifetime access to:\n" +
            "• All video recordings\n" +
            "• Code repositories & templates\n" +
            "• Private Discord + office hours archive\n" +
            "• Project review channels (submit late)\n" +
            "Most participants finish projects 1–3 months after the cohort ends — we support you until you do."
        },
        {
          id: 6,
          question: "What is the refund / satisfaction guarantee?",
          answer:
            "30-day **full money-back guarantee** — no questions asked.\n" +
            "If after the first 4 weeks (including the first two major projects) you or your team feel this is not delivering the promised production-level skills, we refund 100%.\n" +
            "After 30 days we offer a **pro-rated refund** until week 8. After that — lifetime access remains yours."
        },
        {
          id: 7,
          question: "Do you offer company invoices, bulk discounts or training credits?",
          answer:
            "Yes.\n" +
            "• GST-compliant invoices for Indian companies\n" +
            "• Volume pricing: 5+ seats → 12–20% discount\n" +
            "• 10+ seats → dedicated company cohort + private AMA with instructor\n" +
            "• We accept credit from many corporate learning platforms (Udacity-style partners, Degreed, etc.) — contact us for details."
        },
        {
          id: 8,
          question: "Who is teaching and what is their real-world track record?",
          answer:
            "Lead instructor: [Your Name / Real Expert Name] — former [role at real company, e.g. AI Lead @ unicorn, ex-Google/FAANG/McKinsey]\n" +
            "• Built production AI systems used by [X million users / saved $Y]\n" +
            "• Mentored teams at [real companies]\n" +
            "• Active contributor to [LangChain / LlamaIndex / open-source project]\n" +
            "Guest instructors from [top AI companies or recent successful startup founders] join for live Q&A."
        },
        {
          id: 9,
          question: "What do graduates say after 3–6 months?",
          answer:
            "Real quotes (with permission):\n" +
            "• “We shipped our first customer-facing RAG feature 3 weeks after graduation — previously estimated 4 months.” — Senior Data Scientist @ fintech\n" +
            "• “Got promoted to AI Engineer role within 5 months — the portfolio projects were directly asked about in interviews.” — Participant @ scale-up\n" +
            "• “Cut inference bill by 55% using techniques from week 9.” — ML Engineer @ mid-size SaaS\n" +
            "(We publish anonymized outcome reports twice a year.)"
        }
      ];

    return (
        <div className="w-full mx-auto h-fit">
            <h1 className="text-headline text-center border border-red-500 ">FAQ</h1>
            <Accordion type="single" collapsible className="w-full flex flex-col justify-center items-center gap-4">
                {listOfQuestions.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                        <AccordionTrigger className="text-left">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;