"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, MapPin, Building2, Calendar, TrendingUp } from "lucide-react";

const followedProjects = [
  {
    title: "Lagos-Ibadan Expressway Rehabilitation",
    status: "Ongoing",
    contractor: "Julius Berger PLC",
    amount: "₦120B",
    location: "Lagos, Oyo",
    progress: 65,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format",
    category: "Transportation",
    notifications: true,
    followed: true,
    startDate: "Jan 2023",
    expectedCompletion: "Dec 2025"
  },
  {
    title: "Enugu Water Project",
    status: "Delayed",
    contractor: "AquaTrust Ltd",
    amount: "₦22B",
    location: "Enugu",
    progress: 40,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&auto=format",
    category: "Infrastructure",
    notifications: false,
    followed: true,
    startDate: "Mar 2023",
    expectedCompletion: "Aug 2024"
  },
  {
    title: "Abuja Metro Rail Phase 2",
    status: "Ongoing",
    contractor: "CCECC Nigeria Ltd",
    amount: "₦180B",
    location: "FCT, Abuja",
    progress: 78,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop&auto=format",
    category: "Transportation",
    notifications: true,
    followed: true,
    startDate: "Sep 2022",
    expectedCompletion: "Jun 2025"
  },
  {
    title: "Port Harcourt Refinery Modernization",
    status: "Planning",
    contractor: "Tecnimont SpA",
    amount: "₦1.5T",
    location: "Rivers",
    progress: 15,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
    category: "Energy",
    notifications: false,
    followed: true,
    startDate: "Nov 2023",
    expectedCompletion: "Dec 2026"
  },
  {
    title: "Kano-Kaduna Highway Upgrade",
    status: "Ongoing",
    contractor: "RCC Nigeria Ltd",
    amount: "₦85B",
    location: "Kano, Kaduna",
    progress: 52,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop&auto=format",
    category: "Transportation",
    notifications: true,
    followed: true,
    startDate: "Feb 2023",
    expectedCompletion: "Oct 2025"
  },
  {
    title: "Calabar Industrial Park Development",
    status: "Completed",
    contractor: "Dangote Industries",
    amount: "₦95B",
    location: "Cross River",
    progress: 100,
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=400&h=250&fit=crop&auto=format",
    category: "Industrial",
    notifications: false,
    followed: true,
    startDate: "Jan 2022",
    expectedCompletion: "Mar 2024"
  },
  {
    title: "Lagos Smart City Initiative",
    status: "Ongoing",
    contractor: "Huawei Technologies",
    amount: "₦200B",
    location: "Lagos",
    progress: 35,
    image: "https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?w=400&h=250&fit=crop&auto=format",
    category: "Technology",
    notifications: true,
    followed: true,
    startDate: "Jun 2023",
    expectedCompletion: "Dec 2026"
  },
  {
    title: "Kaduna Solar Power Plant",
    status: "Delayed",
    contractor: "BUA Power Ltd",
    amount: "₦45B",
    location: "Kaduna",
    progress: 25,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop&auto=format",
    category: "Energy",
    notifications: false,
    followed: true,
    startDate: "Apr 2023",
    expectedCompletion: "Nov 2024"
  }
];

const statusColors = {
  Ongoing: "bg-primary/10 text-primary/80 border-primary/30",
  Completed: "bg-green-50 text-green-700 border-green-200",
  Delayed: "bg-orange-50 text-orange-700 border-orange-200",
  Planning: "bg-purple-50 text-purple-700 border-purple-200",
} as const;

const categoryColors = {
  Transportation: "bg-indigo-50 text-indigo-700",
  Infrastructure: "bg-cyan-50 text-cyan-700",
  Energy: "bg-amber-50 text-amber-700",
  Industrial: "bg-slate-50 text-slate-700",
  Technology: "bg-primary/10 text-primary/80",
} as const;

type StatusType = keyof typeof statusColors;
type CategoryType = keyof typeof categoryColors;

function getStatusColor(status: string) {
  return statusColors[status as StatusType] || "bg-gray-50 text-gray-600 border-gray-200";
}

function getCategoryColor(category: string) {
  return categoryColors[category as CategoryType] || "bg-gray-50 text-gray-700";
}

function getProgressColor(status: string) {
  switch (status) {
    case 'Completed': return 'bg-green-500';
    case 'Ongoing': return 'bg-blue-500';
    case 'Delayed': return 'bg-orange-500';
    case 'Planning': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
}

export default function FollowedProjects() {
  const [projects, setProjects] = useState<typeof followedProjects>(followedProjects);

  const handleFollowToggle = (idx: number) => {
    setProjects((prev: typeof followedProjects) =>
      prev.map((p, i) =>
        i === idx ? { ...p, followed: !p.followed } : p
      )
    );
  };

  const handleNotificationToggle = (idx: number) => {
    setProjects((prev: typeof followedProjects) =>
      prev.map((p, i) =>
        i === idx ? { ...p, notifications: !p.notifications } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto py-8 2xl:py-8 xl:py-7 lg:py-6 md:py-5 px-4 2xl:px-4 xl:px-3 lg:px-3 md:px-2">
          <h1 className="text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold text-blue-900 mb-6 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 flex items-center gap-3 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-1.5">
            <Star className="w-7 h-7 2xl:w-7 2xl:h-7 xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-4 md:h-4 text-yellow-400" />
            Followed Projects
          </h1>
          <p className="text-gray-600/70">Track your favorite infrastructure projects across Nigeria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-6 xl:gap-5 lg:gap-4 md:gap-3">
          {projects.map((proj, i) => (
            <Card key={i} className="group py-0 gap-0 h-full flex flex-col overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
              {/* Project Image + Badges */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(proj.status)}`}>
                    {proj.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(proj.category)}`}>
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col p-4">
                {/* Title */}
                <h3 className="text-sm font-bold text-slate-900 mb-3 leading-tight line-clamp-2 min-h-[2rem]">
                  {proj.title}
                </h3>

                {/* Info Grid */}
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600">
                      <Building2 className="w-3 h-3 mr-2 text-blue-500" />
                      <span className="font-medium truncate">{proj.contractor}</span>
                    </div>

                    <div className="flex items-center text-xs text-gray-600">
                      <MapPin className="w-3 h-3 mr-2 text-red-500" />
                      <span>{proj.location}</span>
                    </div>
                  </div>


                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-3 h-3 mr-2 text-green-500" />
                      <span>{proj.startDate}</span>
                    </div>
                    <span className="font-bold text-blue-700">{proj.amount}</span>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-xs text-gray-600">
                      <TrendingUp className="w-3 h-3 mr-1 text-blue-500" />
                      <span>Progress</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{proj.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-2 ${getProgressColor(proj.status)} rounded-full transition-all duration-700 ease-out`}
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Expected: {proj.expectedCompletion}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Button
                    size="sm"
                    variant={proj.followed ? "outline" : "default"}
                    className={`flex-1 text-xs h-8 ${proj.followed
                        ? "border-blue-200 text-blue-700 hover:bg-blue-50"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    onClick={() => handleFollowToggle(i)}
                  >
                    {proj.followed ? "Following" : "Follow"}
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className={`w-8 h-8 p-0 ${proj.notifications
                        ? "border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    onClick={() => handleNotificationToggle(i)}
                  >
                    {proj.notifications ? (
                      <Bell className="w-3 h-3" />
                    ) : (
                      <BellOff className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}