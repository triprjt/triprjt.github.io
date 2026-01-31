import React from "react";
import { MobileMenu } from "../(main)/MobileMenu";
import Footer from "../(main)/Footer";

export default function WebinarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="full-bleed-dark">
      {/* --- WEBINAR SPECIFIC HEADER --- */}
      <header className="header-container sticky top-0">
          {/* //logo */}
          <div className="flex items-center justify-between z-30">
            <a href="/" className="cursor-pointer w-24 p-4 my-auto align-middle items-center"><span className="text-blue-500 text-2xl">10x<span className="text-white text-2xl">AI</span><span className="text-white text-2xl">Bootcamp</span></span></a>
            <MobileMenu />
            <button className="cta-button-header hidden md:block">Let's talk</button>
          </div>
        </header>

      {/* Page Content */}
      <main className="min-h-screen bg-[#050505]">
        {children}
      </main>

      {/* --- OPTIONAL: Minimal Footer --- */}
      <Footer />
    </div>
  );
}