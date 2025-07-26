"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { useEffect, useState } from "react";
import styles from './navbar.module.css';

export function LandingNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Section highlight logic
      const sectionIds = ["home", "projects", "categories", "voices", "newsletter", "contact"];
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
      // Navbar background logic
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${activeSection === 'home' ? styles.transparentHeader : styles.opaqueHeader}`}>
      <nav className="px-10 xl:px-10 mx-auto max-w-screen-xl flex items-center justify-between py-3 xl:py-3">
        {/* Logo Section - Left */}
        <div className="flex items-center w-56 xl:w-56 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2 h-10 xl:h-12">
              <Image
                src="/logo.png"
                alt="Prismix Logo"
                width={80}
                height={80}
              />
              
            </div>
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="flex justify-center mx-auto">
          <ul className="hidden md:flex items-center gap-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#projects", label: "Projects" },
              { href: "#categories", label: "Categories" },
              { href: "#voices", label: "Voices" },
              { href: "#newsletter", label: "Newsletter" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`px-2.5 xl:px-3 py-1 lg:py-1 text-xs lg:text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 relative group ${activeSection === item.href.slice(1) ? `${styles['custom-primary-text']} font-bold` : `text-slate-700 ${styles['hover:custom-primary-text']} hover:bg-slate-50`}`}
                >
                  {item.label}
                  <span className={`absolute inset-x-4 bottom-0 h-0.5 bg-[#008753] transition-transform duration-200 origin-left ${activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button and Mobile Menu - Right */}
        <div className="flex items-end justify-end gap-2 xl:gap-2 w-56 xl:w-56 flex-shrink-0">
          {/* Desktop Sign In button */}
          <button
            className={`relative group flex items-center px-3 xl:px-4 text-xs lg:text-xs xl:text-sm py-1.5 lg:py-1.5 xl:py-2 text-white rounded-full font-semibold transition-all duration-300 overflow-hidden ${styles['custom-primary-bg-dark']} hidden md:flex` }
          >
            <Link href="/auth" className="flex items-center gap-2">
              <span>Sign In</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
  <div className="md:hidden fixed inset-0 z-50 flex justify-end animate-fade-in">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
    {/* Menu Panel */}
    <div className="relative w-72 max-w-full h-full bg-white/70 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-l-2xl py-8 px-6 flex flex-col gap-6 animate-slide-in-right">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Nav Links */}
      <nav className="flex flex-col gap-1 mt-2">
        {[
          { href: "#home", label: "Home" },
          { href: "#projects", label: "Projects" },
          { href: "#categories", label: "Categories" },
          { href: "#voices", label: "Voices" },
          { href: "#newsletter", label: "Newsletter" },
          { href: "#contact", label: "Contact" }
        ].map((item) => (
          <button
            key={item.href}
            onClick={e => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.querySelector(item.href);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`group flex items-center w-full px-0 py-3 text-base font-semibold rounded-lg transition-all duration-200 relative pl-5 ${activeSection === item.href.slice(1)
              ? styles['custom-primary-text'] + ' bg-white/90 shadow-sm' : 'text-slate-700 hover:bg-white/80'}`}
          >
            {/* Accent Bar */}
            <span className={`absolute left-0 top-2 bottom-2 w-1.5 rounded-full transition-all duration-200 ${activeSection === item.href.slice(1) ? 'bg-[#008753]' : 'bg-transparent'}`}></span>
            {item.label}
          </button>
        ))}
      </nav>
      {/* Divider */}
      <div className="border-t border-slate-200 my-2" />
      {/* Sign In Button */}
      <Link href="/auth" className={`flex items-center gap-2 px-5 py-3 text-base font-semibold rounded-full text-white ${styles['custom-primary-bg-dark']} shadow-lg hover:scale-105 transition-transform`}>
        <span>Sign In</span>
        <ArrowRight className="size-5" />
      </Link>
    </div>
    {/* Animation styles */}
    <style jsx>{`
      @keyframes slide-in-right {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .animate-slide-in-right {
        animation: slide-in-right 0.35s cubic-bezier(0.4,0,0.2,1) both;
      }
    `}</style>
  </div>
)}
      </nav>
    </header>
  );
}