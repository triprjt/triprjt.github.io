import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import Footer from "./Footer";
import { OfferWrapper } from "./OfferWrapper";
import { MobileMenu } from "./MobileMenu";

const BUILD_VERSION = Date.now();
export const metadata: Metadata = {
  title: "10x AI Bootcamp – Become Top 1% with AI Skills",
  description:
    "Master Generative AI, build real-world AI agents & apps. Join the 10x AI Bootcamp and become the top 1% in your job. Enroll now and transform your career!",
  keywords: [
    "AI bootcamp",
    "Generative AI course",
    "AI agents",
    "learn AI",
    "AI for professionals",
    "10x productivity",
    "AI skills 2026",
    "RAG",
    "LangChain",
    "AI career",
  ],
  openGraph: {
    title: "10x AI Bootcamp – Master AI & Become Top 1%",
    description:
      "Become the top 1% in your job. Hands-on Generative AI bootcamp teaching RAG, AI agents, automation & real projects. Start today!",
    url: "https://10xaibootcamp.com",
    siteName: "10x AI Bootcamp",
    images: [
      {
        url: "/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "10x AI Bootcamp – Become Top 1% with AI",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10x AI Bootcamp – Become Top 1% with AI",
    description:
      "Master AI agents, RAG & automation. Join the bootcamp that turns professionals into AI power users.",
    images: ["/twitter-image.jpg"], // same or similar to OG image
  },
  alternates: {
    canonical: "https://10xaibootcamp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <OfferWrapper /> */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="10x AI Bootcamp" />
        <link rel="apple-touch-icon" href="/images/icon-ai.png" />
        <meta name="description" content="Master Generative AI, build real-world AI agents & apps. Join the 10x AI Bootcamp and become the top 1% in your job. Enroll now and transform your career!" />
        <meta name="build-version" content={BUILD_VERSION.toString()} />
      </head>
      <header className="header-container sticky top-0 z-[100]">
        {/* //logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer w-24 p-4 my-auto align-middle items-center"><span className="text-blue-500 text-2xl">10x<span className="text-white text-2xl">AI</span><span className="text-white text-2xl">Bootcamp</span></span></Link>
          <MobileMenu />
          <button className="cta-button-header hidden md:block">Let&apos;s talk</button>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
