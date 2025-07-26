import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LandingNavBar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <nav className="px-40 mx-auto flex items-center justify-between py-4">
        {/* Logo Section - Left */}
        <div className="flex items-center w-80 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Prismix Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-2xl tracking-tight text-slate-900 transition-colors duration-200">
                Prism
              </span>
            </div>
            <span className="hidden lg:inline text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
              Transparency for Tomorrow
            </span>
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="flex justify-center mx-auto">
          <ul className="hidden md:flex items-center gap-1">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#reports", label: "Reports" },
              { href: "#contact", label: "Contact" },
              { href: "/portal", label: "Dashboard" }
            ].map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button and Mobile Menu - Right */}
        <div className="flex items-end justify-end gap-3 w-80 flex-shrink-0">
          <button
            className="relative group flex items-center px-6 text-sm py-2.5 bg-[#1A2A4E] text-white rounded-full font-semibold transition-all duration-300 overflow-hidden hover:bg-[#162040]"
          >
            <Link href="/auth" className="flex items-center gap-2">
              <span>Sign In</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}