"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const activeBorderClass = "border-b-2 border-white";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Needed to prevent SSR errors
  const pathname = usePathname();

  // 1. Wait until client loads before accessing document.body
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* --- 1. ELEMENTS THAT STAY IN THE HEADER --- */}

      {/* Mobile Trigger Button */}
      <button
        className="md:hidden p-2 z-50 relative"
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navigation (Visible on md+) */}
      <nav className="hidden md:flex items-center justify-center gap-8 nav-a">
        <Link className={`nav-link ${isActive("/bootcamp") ? activeBorderClass : ""}`} href="/bootcamp">Bootcamp</Link>
        <Link className={`nav-link ${isActive("/webinar") ? activeBorderClass : ""}`} href="/webinar">Webinar</Link>
        {/* <Link className={`nav-link ${isActive("/our-story") ? activeBorderClass : ""}`} href="/our-story">About us</Link> */}
        <Link className={`nav-link ${isActive("/services") ? activeBorderClass : ""}`} href="/services">Services</Link>
        {/* Note: I removed the Let's Talk button from here if you want it distinct, add it back if needed */}
      </nav>


      {/* --- 2. THE OVERLAY (TELEPORTED TO BODY) --- */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 bg-[#0F0F16] z-[9999] flex flex-col items-center justify-center animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center gap-8 text-xl font-medium">
            <Link href="/bootcamp" className={`nav-link ${isActive("/bootcamp") ? "text-purple-400" : "text-white"}`} onClick={closeMenu}>
              Bootcamp
            </Link>
            <Link href="/webinar" className={`nav-link ${isActive("/webinar") ? "text-purple-400" : "text-white"}`} onClick={closeMenu}>
              Webinar
            </Link>
            {/* <Link href="/our-story" className={`nav-link ${isActive("/our-story") ? "text-purple-400" : "text-white"}`} onClick={closeMenu}>
              About us
            </Link> */}
            <Link href="/services" className={`nav-link ${isActive("/services") ? "text-purple-400" : "text-white"}`} onClick={closeMenu}>
              Services
            </Link>
            <button onClick={() => window.open('https://cal.com/tripathirajat', '_blank')} type="button" className="mt-4 px-8 py-3 bg-blue-600 rounded-full text-white font-semibold">
              Let&apos;s talk
            </button>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
};