"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Static Background (if parallax causes issues) */}
      <div className="absolute inset-0">
        <Image 
          src="/newsletter.jpg"
          alt="Newsletter background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
      </div>
      
      {/* Green Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 135, 83, 0.85)"
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Stay Updated
        </h2>

        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Get the latest updates and news delivered to your inbox
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6 border border-slate-300 rounded-full overflow-hidden px-1 py-1 bg-white shadow-sm">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 py-3 px-4 rounded-lg border border-white"
          />

          <Button
            onClick={handleSubmit}
            disabled={isSubscribed}
            className="px-6 py-3 bg-[#008753] text-white font-medium rounded-full transition-colors duration-200 disabled:opacity-50"
          >
            {isSubscribed ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Subscribed!
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {/* Success message */}
        {isSubscribed && (
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm">
              <CheckCircle className="w-4 h-4" />
              Thanks for subscribing! Check your email to confirm.
            </div>
          </div>
        )}

        {/* Privacy note */}
        <p className="text-sm text-gray-300">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}