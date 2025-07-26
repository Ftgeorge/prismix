"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Star, StarOff, MapPin, Clock, Users, ChevronDown, Building2, DollarSign } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "Lagos-Ibadan Expressway Rehabilitation",
    category: "Transportation",
    location: "Lagos, Oyo",
    status: "Ongoing",
    description: "Major expressway upgrade for safer, faster travel between Nigeria's economic centers.",
    followed: false,
    progress: 75,
    budget: "₦500B",
    beneficiaries: "2.5M people",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format",
    contractor: "Julius Berger PLC"
  },
  {
    id: 2,
    title: "Enugu Water Project",
    category: "Infrastructure",
    location: "Enugu",
    status: "Delayed",
    description: "Expanding clean water access to rural communities across Enugu state.",
    followed: true,
    progress: 45,
    budget: "₦120B",
    beneficiaries: "800K people",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&auto=format",
    contractor: "AquaTrust Ltd"
  },
  {
    id: 3,
    title: "Abuja Light Rail Expansion",
    category: "Transportation",
    location: "Abuja",
    status: "Completed",
    description: "Modern light rail system connecting major districts in the capital city.",
    followed: false,
    progress: 100,
    budget: "₦350B",
    beneficiaries: "1.2M people",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format",
    contractor: "China Civil Engineering"
  },
  {
    id: 4,
    title: "Kano Solar Grid Initiative",
    category: "Energy",
    location: "Kano",
    status: "Ongoing",
    description: "Solar microgrids providing sustainable power to underserved communities.",
    followed: false,
    progress: 60,
    budget: "₦200B",
    beneficiaries: "600K people",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&auto=format",
    contractor: "GreenTech NG"
  },
  {
    id: 5,
    title: "Port Harcourt Bridge Construction",
    category: "Infrastructure",
    location: "Rivers",
    status: "Planning",
    description: "New bridge to ease traffic congestion and boost regional trade connections.",
    followed: false,
    progress: 15,
    budget: "₦180B",
    beneficiaries: "1M people",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&auto=format",
    contractor: "Setraco Nigeria Ltd"
  },
  {
    id: 6,
    title: "Kaduna Tech Hub Development",
    category: "Technology",
    location: "Kaduna",
    status: "Ongoing",
    description: "State-of-the-art technology center fostering innovation and digital skills.",
    followed: true,
    progress: 80,
    budget: "₦85B",
    beneficiaries: "300K people",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop&auto=format",
    contractor: "Reynolds Construction"
  }
];

const statusColors = {
  Ongoing: "bg-blue-100 text-blue-700 border-blue-200",
  Completed: "bg-green-100 text-green-700 border-green-200",
  Delayed: "bg-orange-100 text-orange-700 border-orange-200",
  Planning: "bg-purple-100 text-purple-700 border-purple-200",
} as const;

type StatusType = keyof typeof statusColors;

function getStatusColor(status: string) {
  return statusColors[status as StatusType] || "bg-gray-100 text-gray-600 border-gray-200";
}


export default function ExploreProjects() {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState(mockProjects);
  const [filter, setFilter] = useState("All");
  const [showFilters, setShowFilters] = useState<false | 'category'>(false);

  const handleFollow = (id: any) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, followed: !p.followed } : p
      )
    );
  };

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              Explore Development Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover and follow infrastructure projects transforming communities across Nigeria
            </p>
          </div>

          {/* Hero-style Search Bar */}
          <div className="max-w-4xl mx-auto mt-12">
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
                        value={search}
                        onChange={e => setSearch(e.target.value)}
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
                      onClick={() => setShowFilters(showFilters === 'category' ? false : 'category')}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-gray-800 text-sm truncate pr-2">
                        {filter === "All" ? "Any category" : filter}
                      </span>
                      <ChevronDown className={`size-3 text-gray-600 flex-shrink-0 transition-transform duration-200 ${showFilters === 'category' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {showFilters === 'category' && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-30 overflow-hidden max-h-60 overflow-y-auto">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setFilter(cat);
                            setShowFilters(false);
                          }}
                          className="w-full px-6 py-3 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-r border-gray-200 h-10 my-auto" />
                {/* Location Filter (mock for now) */}
                <div className="relative">
                  <div className="p-6">
                    <button
                      disabled
                      className="flex items-center justify-between w-full text-left opacity-60 cursor-not-allowed"
                    >
                      <span className="text-gray-800 text-sm truncate pr-2">Any location</span>
                      <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    </button>
                  </div>
                </div>
                <div className="border-r border-gray-200 h-10 my-auto" />
                {/* Year Filter (mock for now) */}
                <div className="relative">
                  <div className="p-6 border-b lg:border-b-0 border-gray-200">
                    <button
                      disabled
                      className="flex items-center justify-between w-full text-left opacity-60 cursor-not-allowed"
                    >
                      <span className="text-gray-800 text-sm truncate pr-2">Any time</span>
                      <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    </button>
                  </div>
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

            <div className="flex gap-3 justify-center flex-wrap mt-6">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === cat
                    ? 'bg-gradient-to-br from-[#10b981] to-[#059669] text-white'
                    : 'bg-white border border-gray-300 text-black hover:bg-gray-100 opacity-60'
                    }`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filtered.length}</span> projects found
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {filtered.map((project) => (
              <Card key={project.id} className="h-full gap-0 py-0 flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                {/* Project Image + Badges */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${getStatusColor(project.status)}`}>{project.status}</span>
                    <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/90 text-gray-700">{project.category}</span>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">

                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full hover:bg-gray-100 transition-colors"
                      onClick={() => handleFollow(project.id)}
                      aria-label={project.followed ? "Unfollow project" : "Follow project"}
                    >
                      {project.followed ? (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      ) : (
                        <StarOff className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                      )}
                    </Button>
                  </div>
                </div>
                {/* Card Content */}
                <div className="flex-1 flex flex-col px-4 py-3">
                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight line-clamp-2">{project.title}</h3>
                  {/* Description */}
                  <p className="text-xs text-slate-500 mb-2 line-clamp-2">{project.description}</p>
                  {/* Contractor & Location */}
                  <div className="flex items-center justify-between text-xs text-gray-700 mb-1">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-gray-400" />
                      <span className="truncate max-w-[80px]">{project.contractor || "-"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  {/* Budget & Progress */}
                  <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                    <div className="flex items-center gap-1 mt-2">
                      <span className="font-semibold">{project.budget}</span>
                    </div>
                    <span className="text-[11px] text-gray-500">{project.progress}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className={`h-1.5 ${project.status === 'Completed' ? 'bg-green-500' : project.status === 'Ongoing' ? 'bg-blue-500' : project.status === 'Delayed' ? 'bg-orange-500' : 'bg-purple-500'} rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1" />
                  {/* Follow Button */}

                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}