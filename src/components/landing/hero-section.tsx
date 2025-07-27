"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Filter, ArrowRight, ChevronDown, Building, Target, AlertCircle, Shield, Users, Eye, CheckCircle, Sliders } from "lucide-react";

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
                    <img
                        src="/hero.png"
                        alt="Nigeria Map - Governance Background"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-emerald-700/80" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>


            {/* Floating Dots Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* White dots */}
                    <div className="absolute top-1/2 left-1/4 w-1 h-1 lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 bg-white rounded-full opacity-60 animate-[float_4s_ease-in-out_infinite]"></div>
                    <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 lg:w-1 lg:h-1 bg-white/80 rounded-full opacity-40 animate-[float_5s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 bg-white/70 rounded-full opacity-50 animate-[float_3.5s_ease-in-out_infinite_2s]"></div>

                    {/* Emerald colored dots */}
                    <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 lg:w-1 lg:h-1 bg-[#008753] rounded-full opacity-60 animate-[float_4.5s_ease-in-out_infinite_0.5s]"></div>
                    <div className="absolute top-1/4 left-1/3 w-0.5 h-0.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 bg-[#00875380] rounded-full opacity-40 animate-[float_3s_ease-in-out_infinite_1.5s]"></div>
                    <div className="absolute bottom-1/2 right-1/2 w-0.5 h-0.5 lg:w-1 lg:h-1 bg-[#008753]/80 rounded-full opacity-50 animate-[float_5.5s_ease-in-out_infinite_2.5s]"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-20px) translateX(4px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translateY(-40px) translateX(-2px);
                        opacity: 1;
                    }
                    75% {
                        transform: translateY(-20px) translateX(-4px);
                        opacity: 0.6;
                    }
                }
                
                @media (min-width: 1024px) {
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px);
                            opacity: 0.3;
                        }
                        25% {
                            transform: translateY(-40px) translateX(6px);
                            opacity: 0.8;
                        }
                        50% {
                            transform: translateY(-80px) translateX(-3px);
                            opacity: 1;
                        }
                        75% {
                            transform: translateY(-40px) translateX(-6px);
                            opacity: 0.6;
                        }
                    }
                }

                @media (min-width: 1280px) {
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
                }
            `}</style>

            {/* Main Content Container */}
            <div className="relative min-h-screen flex items-center pb-16 sm:pt-20 md:pb-40 lg:pt-12 xl:pt-16 2xl:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-12 xl:pb-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
                    <div className="items-center">
                        {/* Hero Content */}
                        <div className="text-white space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-5 xl:space-y-6 2xl:space-y-8 text-center">
                            {/* Main Heading */}
                            <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                                    <span className="text-[#008753]">
                                        Shine a Light
                                    </span>
                                </h1>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-2 xl:-mt-3 2xl:-mt-4">
                                    <span className="text-white"> on Governance</span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-200 leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
                                Track projects. Expose corruption. Build accountability. Empowering citizens with transparency tools to monitor government activities and ensure responsible governance.
                            </p>

                            {/* Search Section */}
                            <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-3xl xl:max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-8 xl:mt-10 2xl:mt-12">
                                {/* Mobile Simple Search Bar */}
                                <div className="sm:hidden">
                                    <div className="bg-white rounded-full shadow-2xl overflow-hidden backdrop-blur-sm bg-white/95 mx-3">
                                        <div className="flex items-center p-1">
                                            <div className="flex-1 relative">
                                                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                                                <input
                                                    type="text"
                                                    placeholder="Search projects..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="pl-7 w-full text-gray-800 placeholder:text-gray-400 bg-transparent border-0 focus:outline-none text-sm"
                                                />
                                            </div>
                                            <button className="bg-[#008753] text-white p-2 rounded-full ml-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                <Search className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Mobile Filter Button */}
                                    {/* <div className="flex justify-center mt-3">
                                        <button
                                            onClick={() => handleDropdownToggle('category')}
                                            className="flex items-center gap-1.5 px-2.5 py-1 bg-white/20 border border-white/30 rounded-full backdrop-blur-xl text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                                        >
                                            <Sliders className="w-3.5 h-3.5" />
                                            <span className="text-xs">Filters</span>
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div> */}

                                    {/* Mobile Filters Dropdown */}
                                    {showCategoryDropdown && (
                                        <div className="mt-3 mx-3 bg-white rounded-xl shadow-2xl border border-gray-200 z-30 overflow-hidden">
                                            <div className="p-3 space-y-3">
                                                {/* Category */}
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
                                                    <select
                                                        value={activeCategory}
                                                        onChange={(e) => setActiveCategory(e.target.value)}
                                                        className="w-full p-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#008753]"
                                                    >
                                                        {CATEGORIES.map((category) => (
                                                            <option key={category} value={category}>
                                                                {category === "All Categories" ? "Any category" : category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Location */}
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Location</label>
                                                    <select
                                                        value={activeLGA}
                                                        onChange={(e) => setActiveLGA(e.target.value)}
                                                        className="w-full p-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#008753]"
                                                    >
                                                        {LGAS.map((lga) => (
                                                            <option key={lga} value={lga}>
                                                                {lga === "All LGAs" ? "Any location" : lga}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Year */}
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Year</label>
                                                    <select
                                                        value={activeYear}
                                                        onChange={(e) => setActiveYear(e.target.value)}
                                                        className="w-full p-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#008753]"
                                                    >
                                                        {YEARS.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year === "All Years" ? "Any time" : year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <button
                                                    onClick={() => setShowCategoryDropdown(false)}
                                                    className="w-full bg-[#008753] text-white py-1.5 rounded-lg text-sm font-medium"
                                                >
                                                    Apply Filters
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Desktop Complex Search Bar */}
                                <div className="hidden sm:block bg-white rounded-full shadow-2xl overflow-hidden backdrop-blur-sm bg-white/95">
                                    <div className="flex flex-col md:flex-row lg:flex-row items-center">
                                        {/* Search Input */}
                                        <div className="flex-1 relative w-full md:w-auto">
                                            <div className="p-3 sm:p-4 md:p-4 lg:p-3 xl:p-5 2xl:p-6 border-b md:border-b-0">
                                                <div className="relative">
                                                    <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-3 lg:h-3 xl:w-5 xl:h-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search projects, contractors..."
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        className="pl-5 sm:pl-6 md:pl-7 lg:pl-8 xl:pl-7 w-full text-gray-800 placeholder:text-gray-400 bg-transparent border-0 focus:outline-none text-sm md:text-sm lg:text-sm xl:text-base"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block border-r border-gray-200 h-6 md:h-8 lg:h-8 xl:h-10 my-auto" />

                                        {/* Category Filter */}
                                        <div className="relative w-full md:w-auto">
                                            <div className="p-3 sm:p-4 md:p-4 lg:p-3 xl:p-5 2xl:p-6">
                                                <button
                                                    onClick={() => handleDropdownToggle('category')}
                                                    className="flex items-center justify-between w-full text-left min-w-0"
                                                >
                                                    <span className="text-gray-800 text-sm md:text-sm lg:text-xs xl:text-base truncate pr-2 max-w-20 sm:max-w-24 md:max-w-36 lg:max-w-28 xl:max-w-none">
                                                        {activeCategory === "All Categories" ? "Any category" : activeCategory}
                                                    </span>
                                                    <ChevronDown className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showCategoryDropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-40 md:max-h-48 lg:max-h-48 xl:max-h-60 overflow-y-auto">
                                                    {CATEGORIES.map((category) => (
                                                        <button
                                                            key={category}
                                                            onClick={() => {
                                                                setActiveCategory(category);
                                                                setShowCategoryDropdown(false);
                                                            }}
                                                            className="w-full px-3 sm:px-4 md:px-4 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 text-left text-sm md:text-sm lg:text-sm xl:text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="hidden md:block border-r border-gray-200 h-6 md:h-8 lg:h-8 xl:h-10 my-auto" />

                                        {/* Location Filter */}
                                        <div className="relative w-full md:w-auto">
                                            <div className="p-3 sm:p-4 md:p-4 lg:p-3 xl:p-5 2xl:p-6">
                                                <button
                                                    onClick={() => handleDropdownToggle('lga')}
                                                    className="flex items-center justify-between w-full text-left min-w-0"
                                                >
                                                    <span className="text-gray-800 text-sm md:text-sm lg:text-xs xl:text-base truncate pr-2 max-w-20 sm:max-w-24 md:max-w-36 lg:max-w-28 xl:max-w-none">
                                                        {activeLGA === "All LGAs" ? "Any location" : activeLGA}
                                                    </span>
                                                    <ChevronDown className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showLGADropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showLGADropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-40 md:max-h-48 lg:max-h-48 xl:max-h-60 overflow-y-auto">
                                                    {LGAS.map((lga) => (
                                                        <button
                                                            key={lga}
                                                            onClick={() => {
                                                                setActiveLGA(lga);
                                                                setShowLGADropdown(false);
                                                            }}
                                                            className="w-full px-3 sm:px-4 md:px-4 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 text-left text-sm md:text-sm lg:text-sm xl:text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {lga}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="hidden md:block border-r border-gray-200 h-6 md:h-8 lg:h-8 xl:h-10 my-auto" />

                                        {/* Year Filter */}
                                        <div className="relative w-full md:w-auto">
                                            <div className="p-3 sm:p-4 md:p-4 lg:p-3 xl:p-5 2xl:p-6 border-b md:border-b-0 border-gray-200">
                                                <button
                                                    onClick={() => handleDropdownToggle('year')}
                                                    className="flex items-center justify-between w-full text-left min-w-0"
                                                >
                                                    <span className="text-gray-800 text-sm md:text-sm lg:text-xs xl:text-base truncate pr-2 max-w-16 sm:max-w-20 md:max-w-28 lg:max-w-20 xl:max-w-none">
                                                        {activeYear === "All Years" ? "Any time" : activeYear}
                                                    </span>
                                                    <ChevronDown className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showYearDropdown ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            {showYearDropdown && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-40 md:max-h-48 lg:max-h-48 xl:max-h-60 overflow-y-auto">
                                                    {YEARS.map((year) => (
                                                        <button
                                                            key={year}
                                                            onClick={() => {
                                                                setActiveYear(year);
                                                                setShowYearDropdown(false);
                                                            }}
                                                            className="w-full px-3 sm:px-4 md:px-4 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 text-left text-sm md:text-sm lg:text-sm xl:text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {year}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Search Button */}
                                        <div className="flex items-center justify-center p-1.5 md:p-1.5 lg:p-1 xl:p-2 2xl:p-2">
                                            <button className="bg-[#008753] text-white p-2.5 md:p-3 lg:p-3 xl:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                <Search className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Search Suggestions */}
                                <div className=" w-full max-w-fit mx-auto rounded-b-2xl px-0.5 pb-0.5 mt-8 md:mt-4 lg:mt-4 xl:mt-6">
                                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 max-w-fit p-1 rounded-b-2xl">
                                        {SUGGESTIONS.map((suggestion, index) => {
                                            const isSuggested = suggestedSearch.includes(suggestion);
                                            return (
                                                <button
                                                    key={suggestion}
                                                    onClick={() => toggleSuggestion(suggestion)}
                                                    className={`px-2.5 md:px-3 lg:px-3 xl:px-4 py-1 md:py-1.5 lg:py-1.5 xl:py-2 text-xs md:text-xs lg:text-xs xl:text-sm transition-all duration-300 ${
                                                        index >= 4 ? 'hidden sm:inline-block md:inline-block' : ''
                                                    } ${isSuggested
                                                        ? "bg-white border border-[#008753] text-black rounded-full shadow-sm hover:bg-gray-100"
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
                            <div className="flex flex-row gap-2 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-6 mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-4xl xl:max-w-5xl justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-12 xl:mt-16 2xl:mt-20">
                                <button className="relative group flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-[#008753] text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-base rounded-full text-white font- transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 relative z-10">
                                        <Target className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                                        <span>Track a Project</span>
                                        <ArrowRight className="hidden md:block w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>

                                <button className="relative group flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-white/10 backdrop-blur-sm text-white text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-base rounded-full font- transition-all duration-300 hover:bg-white/20 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 relative z-10">
                                        <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                                        <span>Report an Issue</span>
                                        <ArrowRight className="hidden md:block w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>

                                <button className="relative group flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-[#008753] backdrop-blur-lg text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-base text-white rounded-full font- transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 relative z-10">
                                        <Building className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                                        <span>Explore Projects</span>
                                        <ArrowRight className="hidden md:block w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-10 xl:mt-12 2xl:mt-16 opacity-60">
                                <div className="flex items-center gap-1.5">
                                    <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#008753]" />
                                    <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-white">Secure</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#008753]" />
                                    <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-white">Transparent</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#008753]" />
                                    <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-white">Community-Driven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Branding */}
            <div className="hidden lg:flex items-center gap-1.5 absolute bottom-4 lg:bottom-6 xl:bottom-8 2xl:bottom-10 left-6 lg:left-12 xl:left-16 2xl:left-20">
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 rounded-full bg-[#008753] shadow-lg" />
                <h1 className="text-white font-semibold text-xs lg:text-sm xl:text-base">Transparent Governance</h1>
            </div>
        </div>
    );
}