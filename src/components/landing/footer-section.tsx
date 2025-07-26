import { Mail, Twitter, Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Footer data
const footerData = {
  company: {
    name: "Prismix",
    description: "Building transparent governance through citizen engagement and accountability.",
    tagline: "Empowering communities since 2024"
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
    { icon: Mail, label: "hello@prismix.ng", href: "mailto:hello@prismix.ng" },
    { icon: Phone, label: "+234 (0) 800 PRISMIX", href: "tel:+2348007747649" },
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
    <div className="mb-8 sm:mb-6">
      <div className="flex items-center min-w-0 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 sm:h-12">
            <Image
              src="/logo.png"
              alt="Prismix Logo"
              width={100}
              height={100}
              className="w-auto h-full"
            />
          </div>
        </Link>
      </div>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 max-w-xs sm:max-w-sm">
        {footerData.company.description}
      </p>
      <div className="text-slate-500 text-xs sm:text-sm">
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
    <div className="mb-8 sm:mb-0">
      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-6">{title}</h4>
      <nav className="space-y-2 sm:space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-slate-600 hover:text-slate-900 transition-colors text-sm sm:text-base font-medium py-1"
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
    <div className="mb-8 sm:mb-0">
      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-6">Contact</h4>
      <div className="space-y-3 sm:space-y-4">
        {footerData.contact.map((item, index) => {
          const IconComponent = item.icon;
          const content = (
            <div className="flex items-start gap-3">
              <IconComponent className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 text-sm sm:text-base font-medium break-words">
                {item.label}
              </span>
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              className="block hover:text-slate-900 transition-colors py-1"
            >
              {content}
            </a>
          ) : (
            <div key={index} className="py-1">{content}</div>
          );
        })}
      </div>
    </div>
  );
}

// Social Media Links Component
function SocialMediaLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
      <span className="text-slate-600 text-sm sm:text-base font-medium whitespace-nowrap">Follow us:</span>
      <div className="flex gap-3 sm:gap-4">
        {footerData.social.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="text-slate-500 hover:text-slate-800 transition-colors p-2 sm:p-1"
              aria-label={social.label}
            >
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
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
    <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base mt-4 sm:mt-0">
      {footerData.links.legal.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-slate-600 hover:text-slate-900 transition-colors font-medium py-1"
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
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-sm">
      <div className="text-slate-600 font-medium order-2 sm:order-1">
        &copy; {currentYear} Prismix Nigeria Limited. All rights reserved.
      </div>
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 text-xs sm:text-sm text-slate-500 order-1 sm:order-2">
        <span className="whitespace-nowrap">Made with ❤️ in Nigeria</span>
        <span className="hidden xs:inline">•</span>
        <span className="whitespace-nowrap">Registered Company: RC 123456</span>
      </div>
    </div>
  );
}

// Main Footer Component
export default function FooterSection() {
  return (
    <footer className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="pt-8 xl:pt-8 sm:pt-12 lg:pt-12 pb-6 xl:pb-6 sm:pb-8 lg:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 sm:gap-8 lg:gap-8 mb-8 xl:mb-8 sm:mb-12 lg:mb-12">
            {/* Company logo - spans full width on mobile, single column on larger screens */}
            <div className="sm:col-span-2 lg:col-span-1">
              <CompanyLogo />
            </div>

            {/* Platform links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <NavigationLinks
                title="Platform"
                links={footerData.links.platform}
              />
            </div>

            {/* Company links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <NavigationLinks
                title="Company"
                links={footerData.links.company}
              />
            </div>

            {/* Contact info - spans full width on mobile and tablet */}
            <div className="sm:col-span-2 lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          {/* Social Media & Legal - stacked on mobile */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
              <SocialMediaLinks />
              <LegalLinks />
            </div>
          </div>

          {/* Copyright - always stacked on very small screens */}
          <div className="border-t border-slate-200 mt-6 sm:mt-8 pt-6">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}