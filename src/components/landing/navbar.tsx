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
      // Navbar background logic - becomes true when scrolled down
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call handleScroll immediately to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? styles.opaqueHeader
          : styles.transparentHeader
        }`}
    >
      <nav className="px-4 md:px-10 xl:px-10 mx-auto max-w-screen-xl flex items-center justify-between py-3 xl:py-3">
        {/* Logo Section - Left */}
        <div className="flex items-center md:w-22 lg:w-56 xl:w-56 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2 h-10 xl:h-12">
              <Image
                src={scrolled ? "/logo.png" : "/logo-white.png"}
                alt="Prism Logo"
                width={80}
                height={80}
                className="transition-all duration-500 ease-in-out"
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
                  className={`px-2.5 xl:px-3 py-1 lg:py-1 text-xs lg:text-xs xl:text-sm font-medium rounded-lg transition-all duration-300 relative group ${activeSection === item.href.slice(1)
                      ? `${!scrolled ? 'text-white' : styles['custom-primary-text']} font-bold`
                      : `${!scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`
                    }`}
                >
                  {item.label}
                  <span className={`absolute inset-x-4 bottom-0 h-0.5 ${!scrolled ? 'bg-white' : 'bg-[#008753]'} transition-transform duration-200 origin-left ${activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button and Mobile Menu - Right */}
        <div className="flex items-end justify-end gap-2 xl:gap-2 md:w-22 lg:w-56 xl:w-56 flex-shrink-0">
          {/* Desktop Sign In button */}
          <button
            className={`relative group flex items-center px-3 xl:px-5 text-xs lg:text-xs xl:text-sm py-1.5 lg:py-1.5 xl:py-2 rounded-full font-semibold transition-all duration-300 overflow-hidden hidden md:flex ${!scrolled
                ? 'text-black bg-white'
                : `text-white ${styles['custom-primary-bg-dark']} hover:opacity-90`
              }`}
          >
            <Link href="/auth" className="flex items-center gap-2">
              <span>Sign In</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${!scrolled
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-100'
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu - Professional Design */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="relative w-80 max-w-[90vw] h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">

              {/* Header Section */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center gap-3 h-8">
                  <Image
                    src="/logo.png"
                    alt="Prism Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <button
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-4">
                <nav className="space-y-1">
                  {[
                    { href: "#home", label: "Home", },
                    { href: "#projects", label: "Projects", },
                    { href: "#categories", label: "Categories", },
                    { href: "#voices", label: "Voices", },
                    { href: "#newsletter", label: "Newsletter", },
                    { href: "#contact", label: "Contact", }
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
                      className={`group flex items-center w-full px-4 py-3 text-left rounded-xl transition-all duration-200 ${activeSection === item.href.slice(1)
                          ? 'bg-[#008753]/10 text-[#008753] shadow-sm border border-[#008753]/20'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      <span className="font-medium text-base">{item.label}</span>
                      {activeSection === item.href.slice(1) && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-[#008753]"></div>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Footer Section */}
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <Link
                  href="/auth"
                  className={`flex items-center justify-center gap-3 w-full px-6 py-4 text-base font-semibold rounded-xl text-white ${styles['custom-primary-bg-dark']} shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Sign In</span>
                  <ArrowRight className="size-5" />
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500">© 2024 Prism. All rights reserved.</p>
                </div>
              </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
              @keyframes slide-in-right {
                from { 
                  transform: translateX(100%); 
                  opacity: 0; 
                }
                to { 
                  transform: translateX(0); 
                  opacity: 1; 
                }
              }
              .animate-slide-in-right {
                animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
}