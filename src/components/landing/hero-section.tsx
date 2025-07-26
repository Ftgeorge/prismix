"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Filter, ArrowRight, ChevronDown, Building, Target, AlertCircle, Shield, Users, Eye, CheckCircle } from "lucide-react";
import Image from "next/image";

// Animation configuration
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 18,
            duration: 0.6,
        }
    }
};

// Constants
const CATEGORIES = ["All Categories", "Infrastructure", "Healthcare", "Education", "Agriculture", "Environment", "Social Welfare"];
const LGAS = ["All LGAs", "Ibadan North", "Ibadan South-West", "Ibadan North-East", "Ibadan South-East", "Ibadan North-West"];
const YEARS = ["All Years", "2024", "2023", "2022", "2021", "2020"];
const SUGGESTIONS = ["Road Projects", "Healthcare", "Education", "Water Supply", "Agriculture"];

export default function HeroSection() {
    // State management
    const [mounted, setMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Search and filter states
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Categories");
    const [activeLGA, setActiveLGA] = useState("All LGAs");
    const [activeYear, setActiveYear] = useState("All Years");
    const [suggestedSearch, setSuggestedSearch] = useState(["Road Projects"]);

    // Dropdown states
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showLGADropdown, setShowLGADropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);

    // Effects
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Event handlers
    const toggleSuggestion = (item: any) => {
        setSuggestedSearch((prev) =>
            prev.includes(item)
                ? prev.filter((s) => s !== item)
                : [...prev, item]
        );
    };

    const handleDropdownToggle = (dropdown: any) => {
        setShowCategoryDropdown(dropdown === 'category' ? !showCategoryDropdown : false);
        setShowLGADropdown(dropdown === 'lga' ? !showLGADropdown : false);
        setShowYearDropdown(dropdown === 'year' ? !showYearDropdown : false);
    };

    // Early return for SSR
    if (!mounted) return null;

    const parallaxY = scrollY * 0.4;

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Parallax Background */}
            <div
                style={{ transform: `translateY(${parallaxY}px)` }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="relative w-full h-screen">
                    <Image
                        src="/hero.png"
                        alt="Nigeria Map - Governance Background"
                        className="w-full h-full object-cover"
                        width={1020}
                        height={600}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            </div>

            {/* Floating Dots Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated floating dots */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* White dots */}
                    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-[float_4s_ease-in-out_infinite]"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/80 rounded-full opacity-40 animate-[float_5s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/70 rounded-full opacity-50 animate-[float_3.5s_ease-in-out_infinite_2s]"></div>
                    
                    {/* Emerald colored dots */}
                    <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-60 animate-[float_4.5s_ease-in-out_infinite_0.5s]"></div>
                    <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-40 animate-[float_3s_ease-in-out_infinite_1.5s]"></div>
                    <div className="absolute bottom-1/2 right-1/2 w-1 h-1 bg-emerald-400/80 rounded-full opacity-50 animate-[float_5.5s_ease-in-out_infinite_2.5s]"></div>
                    
                    {/* Blue colored dots */}
                    <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-[float_3.8s_ease-in-out_infinite_1.2s]"></div>
                    <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-blue-500/70 rounded-full opacity-60 animate-[float_4.2s_ease-in-out_infinite_3s]"></div>
                    
                    {/* Navy colored dots */}
                    <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-800 rounded-full opacity-40 animate-[float_4.8s_ease-in-out_infinite_0.8s]"></div>
                    <div className="absolute top-1/5 left-1/2 w-1 h-1 bg-blue-900/60 rounded-full opacity-50 animate-[float_3.2s_ease-in-out_infinite_2.8s]"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-60px) translateX(10px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translateY(-120px) translateX(-5px);
                        opacity: 1;
                    }
                    75% {
                        transform: translateY(-60px) translateX(-10px);
                        opacity: 0.6;
                    }
                }
            `}</style>

            {/* Main Content Container */}
            <div className="relative min-h-screen flex items-start pt-32 pb-20 px-4 md:px-8 lg:px-16 xl:px-40">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="items-center">
                        {/* Hero Content */}
                        <div className="text-white space-y-3 text-center">
                            {/* Main Heading */}
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                                    <span className="bg-gradient-to-br from-[#10b981] to-[#059669] bg-clip-text text-transparent">
                                        Shine a Light
                                    </span>

                                </h1>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight -mt-6">
                                    <span className="text-white"> on Governance</span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                                Track projects. Expose corruption. Build accountability. Empowering citizens with transparency tools to monitor government activities and ensure responsible governance.
                            </p>

                            {/* Search Section */}
                            <div className="max-w-4xl mx-auto mt-12">
                                {/* Main Search Bar */}
                                <div className="bg-white rounded-full shadow-2xl overflow-hidden backdrop-blur-sm bg-white/95">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Search Input */}
                                        <div className="flex-1 relative">
                                            <div className="p-6 border-b lg:border-b-0">
                                                <div className="relative">
                                                    <Search className="size-4 text-gray-400 absolute left-0 top-1/2 transform -translate-y-1/2" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search projects, contractors..."
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        className="pl-7 w-full text-gray-800 placeholder:text-gray-400 bg-transparent border-0 focus:outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-r border-gray-200 h-10 my-auto" />

                                        {/* Category Filter */}
                                        <div className="relative">
                                            <div className="p-6">
                                                <button
                                                    onClick={() => handleDropdownToggle('category')}
                                                    className="flex items-center justify-between w-full text-left"
                                                >
                                                    <span className="text-gray-800 text-sm truncate pr-2">
                                                        {activeCategory === "All Categories" ? "Any category" : activeCategory}
                                                    </span>
                                                    <ChevronDown className={`size-3 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showCategoryDropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-60 overflow-y-auto">
                                                    {CATEGORIES.map((category) => (
                                                        <button
                                                            key={category}
                                                            onClick={() => {
                                                                setActiveCategory(category);
                                                                setShowCategoryDropdown(false);
                                                            }}
                                                            className="w-full px-6 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-r border-gray-200 h-10 my-auto" />

                                        {/* Location Filter */}
                                        <div className="relative">
                                            <div className="p-6">
                                                <button
                                                    onClick={() => handleDropdownToggle('lga')}
                                                    className="flex items-center justify-between w-full text-left"
                                                >
                                                    <span className="text-gray-800 text-sm truncate pr-2">
                                                        {activeLGA === "All LGAs" ? "Any location" : activeLGA}
                                                    </span>
                                                    <ChevronDown className={`w-4 h-4 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showLGADropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showLGADropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-60 overflow-y-auto">
                                                    {LGAS.map((lga) => (
                                                        <button
                                                            key={lga}
                                                            onClick={() => {
                                                                setActiveLGA(lga);
                                                                setShowLGADropdown(false);
                                                            }}
                                                            className="w-full px-6 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {lga}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-r border-gray-200 h-10 my-auto" />

                                        {/* Year Filter */}
                                        <div className="relative">
                                            <div className="p-6 border-b lg:border-b-0 border-gray-200">
                                                <button
                                                    onClick={() => handleDropdownToggle('year')}
                                                    className="flex items-center justify-between w-full text-left"
                                                >
                                                    <span className="text-gray-800 text-sm truncate pr-2">
                                                        {activeYear === "All Years" ? "Any time" : activeYear}
                                                    </span>
                                                    <ChevronDown className={`w-4 h-4 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showYearDropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showYearDropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-60 overflow-y-auto">
                                                    {YEARS.map((year) => (
                                                        <button
                                                            key={year}
                                                            onClick={() => {
                                                                setActiveYear(year);
                                                                setShowYearDropdown(false);
                                                            }}
                                                            className="w-full px-6 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {year}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Search Button */}
                                        <div className="flex items-center justify-center p-2">
                                            <button className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                <Search className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Search Suggestions */}
                                <div className="w-full max-w-fit mx-auto rounded-b-2xl px-0.5 pb-0.5 mt-6">
                                    <div className="flex flex-wrap justify-center gap-3 max-w-fit p-1 rounded-b-2xl">
                                        {SUGGESTIONS.map((suggestion) => {
                                            const isSuggested = suggestedSearch.includes(suggestion);
                                            return (
                                                <button
                                                    key={suggestion}
                                                    onClick={() => toggleSuggestion(suggestion)}
                                                    className={`px-4 py-2 text-sm transition-all duration-300 ${isSuggested
                                                        ? "bg-white border border-gray-300 text-black rounded-full shadow-sm hover:bg-gray-100"
                                                        : "bg-white/20 border border-white/30 rounded-full backdrop-blur-xl text-white hover:bg-white/30 hover:border-white/50"
                                                        }`}
                                                >
                                                    {suggestion}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-6 mx-auto w-full max-w-4xl justify-center mt-20">
                                <button className="relative group flex items-center px-6 py-3 bg-gradient-to-br from-[#10b981] to-[#059669] text-sm rounded-full text-black font-semibold transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-3 relative z-10">
                                        <Target className="size-4" />
                                        <span className="text-sm">Track a Project</span>
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>

                                <button className="relative group flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full font-semibold transition-all duration-300 hover:bg-white/20 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-3 relative z-10">
                                        <AlertCircle className="size-4" />
                                        <span className="text-sm">Report an Issue</span>
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>

                                <button className="relative group flex items-center px-6 py-3 bg-[#1A2A4E] backdrop-blur-lg text-white rounded-full font-semibold transition-all duration-300 hover:bg-blue-500/90 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-3 relative z-10">
                                        <Building className="size-4" />
                                        <span className="text-sm">Explore Projects</span>
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex items-center justify-center gap-8 mt-16 opacity-60">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-white">Secure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Eye className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-white">Transparent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-white">Community-Driven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Branding */}
            <div className="flex items-center gap-2 absolute bottom-10 left-44">
                <div className="w-3 h-3 rounded-full bg-[#1A2A4E] shadow-lg" />
                <h1 className="text-white font-semibold">Transparent Governance</h1>
            </div>
        </div>
    );
}