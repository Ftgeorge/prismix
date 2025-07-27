"use client";
import { useEffect, useState } from "react";

const OVERLAY_SETS = [
  {
    title: "Welcome to Prismix",
    sections: [
      {
        header: "Modern Governance",
        points: [
          "Empowering communities through transparent and accountable governance systems",
          "Your journey to better civic engagement and democratic participation starts here",
          "Building bridges between citizens and government through innovative technology",
          "Fostering trust and collaboration in public service delivery"
        ]
      },
      {
        header: "Seamless Access",
        points: [
          "Access all public services with ease, confidence, and unprecedented convenience",
          "Experience secure and modern digital government that works for everyone",
          "Navigate complex bureaucracy with simple, intuitive interfaces",
          "One platform, countless possibilities for civic engagement"
        ]
      },
      {
        header: "Digital Transformation",
        points: [
          "Revolutionizing how government serves its people in the digital age",
          "Streamlined processes that save time and reduce administrative burden",
          "Modern solutions for age-old civic challenges and community needs"
        ]
      }
    ]
  },
  {
    title: "Your Voice Matters",
    sections: [
      {
        header: "Direct Communication",
        points: [
          "Submit requests, concerns, and feedback directly to your elected leaders and officials",
          "Track the status and progress of your submissions in real time with detailed updates",
          "Engage in meaningful dialogue with government representatives",
          "Receive personalized responses to your civic inquiries and requests",
          "Bridge the gap between citizens and their government representatives"
        ]
      },
      {
        header: "Community Impact",
        points: [
          "Every interaction strengthens our community and builds lasting social connections",
          "Join the growing movement for open, responsive, and accountable governance",
          "Participate in local decision-making processes that affect your daily life",
          "Collaborate with neighbors to address shared community challenges and opportunities"
        ]
      },
      {
        header: "Democratic Participation",
        points: [
          "Make your vote count beyond election day through continuous civic engagement",
          "Influence policy decisions through structured feedback and consultation processes",
          "Be part of the solution in creating more responsive government services"
        ]
      }
    ]
  },
  {
    title: "Innovation for Citizens",
    sections: [
      {
        header: "Smart Solutions",
        points: [
          "Intelligent tools and features designed specifically for your convenience and efficiency",
          "Stay informed with timely notifications, alerts, and updates on matters that concern you",
          "AI-powered assistance to help navigate government services and requirements",
          "Personalized dashboard that adapts to your specific needs and preferences",
          "Automated reminders for important deadlines, renewals, and civic duties"
        ]
      },
      {
        header: "Collaborative Platform",
        points: [
          "Work together with officials and fellow citizens to solve real community problems",
          "Your active participation directly shapes the future of governance and public policy",
          "Join working groups and committees focused on issues you care about most",
          "Contribute your expertise and experience to improve government services for everyone"
        ]
      },
      {
        header: "Future-Ready Technology",
        points: [
          "Cutting-edge platform built for scalability, reliability, and continuous innovation",
          "Integration with emerging technologies to enhance user experience",
          "Constant updates and improvements based on user feedback and technological advances"
        ]
      }
    ]
  },
  {
    title: "Security & Privacy First",
    sections: [
      {
        header: "Data Protection",
        points: [
          "Your personal data is protected with industry-leading security standards and encryption protocols",
          "Only you have control over your personal information and how it's shared with government agencies",
          "Regular security audits and compliance checks ensure your data remains safe and secure",
          "Transparent data usage policies that clearly explain how your information is handled",
          "Zero-knowledge architecture means even we can't access your private communications"
        ]
      },
      {
        header: "Trust & Safety",
        points: [
          "We respect and protect your privacy at every step of your digital government journey",
          "Engage confidently knowing your interactions are secure, private, and legally protected",
          "Multi-factor authentication and advanced security measures protect your account",
          "Complete audit trails maintain transparency while ensuring accountability"
        ]
      },
      {
        header: "Compliance & Standards",
        points: [
          "Full compliance with international data protection regulations and government security requirements",
          "Regular third-party security assessments and certifications validate our commitment to safety",
          "Incident response protocols ensure rapid resolution of any security concerns"
        ]
      }
    ]
  },
  {
    title: "Accessible for Everyone",
    sections: [
      {
        header: "Inclusive Design",
        points: [
          "Carefully designed to be inclusive, accessible, and easy to use for people of all abilities and backgrounds",
          "Comprehensive support for citizens regardless of their technical expertise or physical capabilities",
          "Multiple accessibility features including screen readers, keyboard navigation, and high contrast modes",
          "User interface available in multiple languages to serve diverse communities",
          "Simplified workflows that accommodate different learning styles and preferences"
        ]
      },
      {
        header: "Universal Access",
        points: [
          "Multi-device compatibility ensures access from smartphones, tablets, computers, and public terminals",
          "24/7 availability means government services are always within reach when you need them",
          "Offline capabilities for essential functions in areas with limited internet connectivity",
          "Public access points in libraries, community centers, and government offices"
        ]
      },
      {
        header: "Support & Assistance",
        points: [
          "Comprehensive help resources including tutorials, FAQs, and step-by-step guides",
          "Multilingual customer support team available to assist with any questions or concerns",
          "Community forums where users can help each other and share best practices"
        ]
      }
    ]
  }
];

export default function AnimatedOverlayTexts() {
  const [setIndex, setSetIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setSetIndex((prev) => (prev + 1) % OVERLAY_SETS.length);
        setTimeout(() => {
          setAnimating(true);
        }, 100);
      }, 800);
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  const currentSet = OVERLAY_SETS[setIndex];
  let delayIndex = 0;

  return (
    <div className="flex items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 select-none pointer-events-none relative overflow-hidden">
      <div
        className={`transition-all duration-700 ease-out transform flex flex-col items-start justify-center w-full max-h-full absolute inset-0 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 overflow-y-auto ${
          animating 
            ? "opacity-100 translate-y-0 scale-100 blur-0" 
            : "opacity-0 translate-y-8 scale-95 blur-sm"
        }`}
      >
        <h1
          className={`text-white text-xl sm:text-2xl md:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-bold text-left drop-shadow mb-3 sm:mb-4 md:mb-6 flex-shrink-0 transition-all duration-500 ease-out transform ${
            animating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
          style={{ transitionDelay: `${delayIndex++ * 100}ms` }}
        >
          {currentSet.title}
        </h1>
        
        {currentSet.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-3 sm:mb-4 md:mb-6 last:mb-0 flex-shrink-0 w-full">
            <h2
              className={`text-white text-lg sm:text-xl md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl font-semibold text-left drop-shadow mb-2 sm:mb-3 transition-all duration-500 ease-out transform ${
                animating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${delayIndex++ * 100}ms` }}
            >
              {section.header}
            </h2>
            {section.points.map((point, pointIndex) => (
              <p
                key={pointIndex}
                className={`text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal text-left drop-shadow mb-1 sm:mb-2 ml-2 sm:ml-3 md:ml-4 leading-snug sm:leading-normal md:leading-relaxed transition-all duration-500 ease-out transform ${
                  animating ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
                }`}
                style={{ transitionDelay: `${delayIndex++ * 100}ms` }}
              >
                <span className={`inline-block transition-transform duration-300 ${animating ? 'rotate-0' : 'rotate-12'}`}>
                  •
                </span> {point}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}