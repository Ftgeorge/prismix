"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "../ui/switch";

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
  },
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


export function FollowedProjects() {
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
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Followed Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <Card key={i} className="h-full flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            {/* Project Image + Badges */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${getStatusColor(proj.status)}`}>{proj.status}</span>
                <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/90 text-gray-700">{proj.category}</span>
              </div>
            </div>
            {/* Card Content */}
            <div className="flex-1 flex flex-col px-4 py-3">
              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight line-clamp-2">{proj.title}</h3>
              {/* Contractor & Location */}
              <div className="flex items-center justify-between text-xs text-gray-700 mb-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{proj.contractor}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{proj.location}</span>
                </div>
              </div>
              {/* Budget & Progress */}
              <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{proj.amount}</span>
                </div>
                <span className="text-[11px] text-gray-500">{proj.progress}%</span>
              </div>
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div
                    className={`h-1.5 ${proj.status === 'Completed' ? 'bg-green-500' : proj.status === 'Ongoing' ? 'bg-blue-500' : proj.status === 'Delayed' ? 'bg-orange-500' : 'bg-purple-500'} rounded-full transition-all duration-500`}
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>
              </div>
              {/* Actions */}
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  variant={proj.followed ? "outline" : "default"}
                  className={proj.followed ? "border-blue-800 text-blue-800" : "bg-blue-800 text-white"}
                  onClick={() => handleFollowToggle(i)}
                >
                  {proj.followed ? "Unfollow" : "Follow"}
                </Button>
                <Button
                  size="sm"
                  variant={proj.notifications ? "default" : "outline"}
                  className={proj.notifications ? "bg-emerald-600 text-white" : "border-emerald-600 text-emerald-600"}
                  onClick={() => handleNotificationToggle(i)}
                >
                  {proj.notifications ? "Notifications On" : "Notifications Off"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
