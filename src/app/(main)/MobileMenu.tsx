"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const activeBorderClass = "border-b-2 border-white";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* Menu button for mobile */}
      <button
        className="md:hidden p-2"
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[var(--card-background)] z-50">
          <div className="relative w-full h-full">
            {/* Close button at top right */}
            <button
              className="absolute top-4 right-4 p-2"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation links */}
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              <a href="/bootcamp" className={`nav-link ${isActive("/bootcamp") ? activeBorderClass : ""}`} onClick={closeMenu}>
                Bootcamp
              </a>
              <a href="/webinar" className={`nav-link ${isActive("/webinar") ? activeBorderClass : ""}`} onClick={closeMenu}>
                Webinar
              </a>
              <a href="/our-story" className={`nav-link ${isActive("/our-story") ? activeBorderClass : ""}`} onClick={closeMenu}>
                About us
              </a>
              <a href="/services" className={`nav-link ${isActive("/services") ? activeBorderClass : ""}`} onClick={closeMenu}>
                Services
              </a>
              <a className="cta-button-header">Let's talk</a>
            </nav>
          </div>
        </div>
      )}

      {/* Navigation links for desktop - well centered */}
      <nav className="hidden md:flex items-center justify-center gap-8 nav-a">
        <a className={`nav-link ${isActive("/bootcamp") ? activeBorderClass : ""}`} href="/bootcamp">Bootcamp</a>
        <a className={`nav-link ${isActive("/webinar") ? activeBorderClass : ""}`} href="/webinar">Webinar</a>
        <a className={`nav-link ${isActive("/our-story") ? activeBorderClass : ""}`} href="/our-story">About us</a>
        <a className={`nav-link ${isActive("/services") ? activeBorderClass : ""}`} href="/services">Services</a>
        <a className="cta-button-header block md:hidden">Let's talk</a>
      </nav>
    </>
  );
};
