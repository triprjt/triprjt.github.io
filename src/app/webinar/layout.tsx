import React from "react";
import Link from "next/link";
import { MobileMenu } from "../(main)/MobileMenu";
import Footer from "../(main)/Footer";
import { LetsTalkButton } from "../(main)/LetsTalkButton";

export default function WebinarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const BUILD_VERSION = Date.now();
  return (
    <>
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
      {/* --- WEBINAR SPECIFIC HEADER --- */}
      <div className="full-bleed-dark">
        <header className="header-container sticky top-0 z-[100]">
          {/* //logo */}
          <div className="flex items-center justify-between z-30">
            <Link href="/" className="cursor-pointer w-24 p-4 my-auto align-middle items-center"><span className="text-blue-500 text-2xl">10x<span className="text-white text-2xl">AI</span><span className="text-white text-2xl">Bootcamp</span></span></Link>
            <MobileMenu />
            <LetsTalkButton />
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen bg-[#050505]">
          {children}
        </main>

        {/* --- OPTIONAL: Minimal Footer --- */}
        <Footer />
      </div>
    </>
  );
}