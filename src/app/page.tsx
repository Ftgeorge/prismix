import { LandingNavBar } from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero-section";
import QuickStats from "@/components/landing/quick-stats";
import FeaturedProjectsSlider from "@/components/landing/featured-projects-slider";
import { ProjectCategories } from "@/components/landing/project-categories";
import CitizenVoices from "@/components/landing/citizen-voices";
import NewsletterSection from "@/components/landing/newsletter-section";
import FooterSection from "@/components/landing/footer-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-neutral-50 min-h-screen flex flex-col">

      <HeroSection />
      <QuickStats />
      <FeaturedProjectsSlider />
      <ProjectCategories />
      <CitizenVoices />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}
