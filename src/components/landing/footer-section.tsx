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
    <div className="mb-6">
      <div className="flex items-center min-w-0 flex-shrink-0">
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

        </Link>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {footerData.company.description}
      </p>
      <div className="text-slate-500 text-xs">
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
    <div>
      <h4 className="text-lg font-semibold text-slate-900 mb-6">{title}</h4>
      <nav className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
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
    <div>
      <h4 className="text-lg font-semibold text-slate-900 mb-6">Contact</h4>
      <div className="space-y-4">
        {footerData.contact.map((item, index) => {
          const IconComponent = item.icon;
          const content = (
            <div className="flex items-start gap-3">
              <IconComponent className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 text-sm font-medium">
                {item.label}
              </span>
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              className="block hover:text-slate-900 transition-colors"
            >
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}

// Social Media Links Component
function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-6">
      <span className="text-slate-600 text-sm font-medium">Follow us:</span>
      <div className="flex gap-4">
        {footerData.social.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="text-slate-500 hover:text-slate-800 transition-colors"
              aria-label={social.label}
            >
              <IconComponent className="w-5 h-5" />
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
    <nav className="flex gap-6 text-sm">
      {footerData.links.legal.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
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
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
      <div className="text-slate-600 font-medium">
        &copy; {currentYear} Prismix Nigeria Limited. All rights reserved.
      </div>
      <div className="flex gap-4 text-xs text-slate-500">
        <span>Made with ❤️ in Nigeria</span>
        <span>•</span>
        <span>Registered Company: RC 123456</span>
      </div>
    </div>
  );
}

// Main Footer Component
export default function FooterSection() {
  return (
    <footer className="w-full bg-slate-50 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <CompanyLogo />
          </div>

          <NavigationLinks
            title="Platform"
            links={footerData.links.platform}
          />

          <NavigationLinks
            title="Company"
            links={footerData.links.company}
          />

          <ContactInfo />
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <SocialMediaLinks />
            <LegalLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 mt-8 pt-6">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}