"use client";
import { useEffect, useState } from "react";

const OVERLAY_SETS = [
  [
    "Welcome to Prism.",
    "Empowering communities through transparent governance.",
    "Your journey to better civic engagement starts here.",
    "Access public services with ease and confidence.",
    "Experience seamless, secure, and modern digital government.",
    "Together, we build trust and accountability."
  ],
  [
    "Your voice matters.",
    "Submit requests and feedback directly to your leaders.",
    "Every interaction strengthens our community.",
    "Transparency is at the heart of everything we do.",
    "Track the status of your submissions in real time.",
    "Join the movement for open and responsive governance."
  ],
  [
    "Innovation for citizens.",
    "Smart tools designed for your convenience.",
    "Stay informed with timely notifications and updates.",
    "Collaborate with officials to solve real problems.",
    "Your participation shapes the future of governance.",
    "Prismix: Where technology meets public service."
  ],
  [
    "Security and privacy first.",
    "Your data is protected with industry-leading standards.",
    "We respect your privacy at every step.",
    "Only you control your personal information.",
    "Trust and safety are our top priorities.",
    "Engage confidently with digital government."
  ],
  [
    "Accessible for everyone.",
    "Designed to be inclusive and easy to use.",
    "Support for all citizens, every background.",
    "Multi-device, multi-language, always available.",
    "Public services at your fingertips.",
    "Prismix welcomes you, wherever you are."
  ]
];

export default function AnimatedOverlayTexts() {
  const [setIndex, setSetIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setSetIndex((prev) => (prev + 1) % OVERLAY_SETS.length);
        setAnimating(true);
      }, 500); // match animation duration
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center w-full h-full px-8 select-none pointer-events-none ${
        animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {OVERLAY_SETS[setIndex].map((sentence, i) => (
        <p
          key={i}
          className="text-white text-lg md:text-2xl font-medium text-center drop-shadow mb-2 last:mb-0"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {sentence}
        </p>
      ))}
    </div>
  );
}

