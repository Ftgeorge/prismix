import { Mail, Twitter, Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Footer data
const footerData = {
  company: {
    name: "Prism",
    description: "Building transparent governance through citizen engagement and accountability.",
    tagline: "Empowering communities since 2025"
  },

  links: {
    platform: [
      { label: "Track Projects", href: "#projects" },
      { label: "Submit Reports", href: "#reports" },
      { label: "Transparency Hub", href: "#transparency" },
      { label: "Community", href: "#community" },
      { label: "Dashboard", href: "#dashboard" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
      { label: "Blog", href: "#blog" },
      { label: "Partners", href: "#partners" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  },

  contact: [
    { icon: Mail, label: "hello@prism.ng", href: "mailto:hello@prism.ng" },
    { icon: Phone, label: "+234 (0) 800 Prism", href: "tel:+2348007747649" },
    { icon: MapPin, label: "Lagos, Nigeria", href: null },
    { icon: Clock, label: "24/7 Platform Access", href: null }
  ],

  social: [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" }
  ]
};

// Company Logo Component
function CompanyLogo() {
  return (
    <div className="mb-5 xs:mb-6 sm:mb-6">
      <div className="flex items-center min-w-0 flex-shrink-0 mb-0 lg:mb-2 xl:mb-0">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2 h-10 xl:h-12">
            <Image
              src="/logo.png"
              alt="Prism Logo"
              width={80}
              height={80}
            />
          </div>
        </Link>
      </div>
      <p className="text-slate-600 text-xs xs:text-sm sm:text-base lg:text-xs xl:text-base leading-relaxed mb-2 xs:mb-3 sm:mb-4 lg:mb-2 xl:mb-4 max-w-xs sm:max-w-sm">
        {footerData.company.description}
      </p>
      <div className="text-slate-500 text-xs xs:text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
        {footerData.company.tagline}
      </div>
    </div>
  );
}

interface NavigationLinks {
  title: string;
  links: { label: string; href: string }[];
}

// Navigation Links Component
function NavigationLinks({ title, links }: NavigationLinks) {
  return (
    <div className="mb-5 xs:mb-6 sm:mb-0">
      <h4 className="text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-semibold text-slate-900 mb-2 xs:mb-3 sm:mb-6">{title}</h4>
      <nav className="space-y-1 xs:space-y-2 sm:space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-slate-600 hover:text-slate-900 transition-colors text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium py-0.5 xs:py-1"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

// Contact Information Component
function ContactInfo() {
  return (
    <div className="mb-5 xs:mb-6 sm:mb-0">
      <h4 className="text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-semibold text-slate-900 mb-2 xs:mb-3 sm:mb-6">Contact</h4>
      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        {footerData.contact.map((item, index) => {
          const IconComponent = item.icon;
          const content = (
            <div className="flex items-center gap-2 xs:gap-3">
              <IconComponent className="size-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium break-words">
                {item.label}
              </span>
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              className="block hover:text-slate-900 transition-colors py-0.5 xs:py-1"
            >
              {content}
            </a>
          ) : (
            <div key={index} className="py-0.5 xs:py-1">{content}</div>
          );
        })}
      </div>
    </div>
  );
}

// Social Media Links Component
function SocialMediaLinks() {
  return (
    <div className="flex flex-row items-start sm:items-center gap-2 xs:gap-3 sm:gap-6">
      <span className="text-slate-600 text-sm xs:text-base sm:text-lg md:text-lg lg:text-sm xl:text-sm 2xl:text-lg font-medium whitespace-nowrap">Follow us:</span>
      <div className="flex gap-2 xs:gap-3 sm:gap-4 lg:gap-2 xl:gap-4">
        {footerData.social.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="text-slate-500 hover:text-slate-800 transition-colors p-1 xs:p-1.5 sm:p-1"
              aria-label={social.label}
            >
              <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:size-4 xl:size-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Legal Links Component
function LegalLinks() {
  return (
    <nav className="flex flex-row gap-2 xs:gap-3 sm:gap-6 lg:gap-3 xl:gap-6 text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mt-3 xs:mt-4 sm:mt-0">
      {footerData.links.legal.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-0.5 xs:py-1"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

// Copyright Component
function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm">
      <div className="text-slate-600 font-medium order-2 sm:order-1">
        &copy; {currentYear} Prism Nigeria Limited. All rights reserved.
      </div>
      <div className="flex flex-row items-center gap-1 xs:gap-2 sm:gap-4 lg:gap-2 xl:gap-4 text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 order-1 sm:order-2">
        <div className="flex items-center gap-1 justify-center">
          <span className="whitespace-nowrap">from</span>
          <div className="flex items-center h-7">
            <Image
              src="/heuvera.png"
              alt="Prism Logo"
              width={55}
              height={55}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Footer Component
export default function FooterSection() {
  return (
    <footer className="w-full bg-slate-50">
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="px-4 md:px-0 pt-12 lg:pt-12 pb-4 xs:pb-5 sm:pb-8 lg:pb-8">
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-8 mb-12 lg:mb-12">
            {/* Company logo - spans full width on mobile, single column on larger screens */}
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
              <CompanyLogo />
            </div>

            {/* Platform links */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <NavigationLinks
                title="Platform"
                links={footerData.links.platform}
              />
            </div>

            {/* Company links */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <NavigationLinks
                title="Company"
                links={footerData.links.company}
              />
            </div>

            {/* Contact info - spans full width on mobile and tablet */}
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          {/* Social Media & Legal - stacked on mobile */}
          <div className="border-t border-slate-200 pt-12 lg:pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-center gap-2 lg:gap-8">
              <SocialMediaLinks />
              <LegalLinks />
            </div>
          </div>

          {/* Copyright - always stacked on very small screens */}
          <div className="border-t border-slate-200 mt-12 lg:mt-12 pt-12 lg:pt-12">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}