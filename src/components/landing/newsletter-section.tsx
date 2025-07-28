"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
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
    <section className="relative w-full py-12 xs:py-16 sm:py-20 lg:py-16 xl:py-18 2xl:py-20 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/newsletter.jpg')"
          }}
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
      <div className="relative z-20 max-w-lg xs:max-w-xl sm:max-w-2xl lg:max-w-xl xl:max-w-2xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
        {/* Header */}
        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-center mb-4 xs:mb-6 sm:mb-8 lg:mb-6 xl:mb-8 text-white">
          Stay Updated
        </h2>

        <p className="text-sm xs:text-base sm:text-lg lg:text-base xl:text-lg text-gray-200 mb-4 xs:mb-6 sm:mb-8 lg:mb-6 xl:mb-8 leading-relaxed">
          Get the latest updates and news delivered to your inbox
        </p>

        {/* Form */}
        <div className="flex items-center flex-row gap-2 xs:gap-3 sm:gap-3 max-w-xs xs:max-w-sm sm:max-w-md mx-auto mb-4 xs:mb-5 sm:mb-6 border border-slate-300 rounded-full overflow-hidden px-0.5 xs:px-1 py-0.5 xs:py-1 bg-white shadow-sm">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 py-2 xs:py-2.5 sm:py-3 px-2.5 xs:px-3 sm:px-4 rounded-lg border border-white text-sm xs:text-sm sm:text-base"
          />

          <Button
            onClick={handleSubmit}
            disabled={isSubscribed}
            className="px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-[#008753] text-white font-medium rounded-full transition-colors duration-200 disabled:opacity-50 text-xs xs:text-xs sm:text-xs lg:text-xs xl:text-xs"
          >
            {isSubscribed ? (
              <span className="flex items-center gap-1.5 xs:gap-2">
                <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4" />
                Subscribed!
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {/* Success message */}
        {isSubscribed && (
          <div className="mb-4 xs:mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-green-100 text-green-800 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg text-xs xs:text-sm">
              <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4" />
              Thanks for subscribing! Check your email to confirm.
            </div>
          </div>
        )}

        {/* Privacy note */}
        <p className="text-xs xs:text-sm text-gray-300">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}