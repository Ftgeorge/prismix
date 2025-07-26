"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, MessageCircle, Star, ArrowRight } from "lucide-react";

const mockActivity = [
  {
    id: 1,
    type: "followed",
    project: "Lagos-Ibadan Expressway Rehabilitation",
    time: "2 hours ago",
    details: "You started following this project.",
  },
  {
    id: 2,
    type: "feedback",
    project: "Enugu Water Project",
    time: "1 day ago",
    details: "Your feedback received a response.",
  },
  {
    id: 3,
    type: "update",
    project: "Abuja Light Rail Expansion",
    time: "3 days ago",
    details: "Project status updated to Completed.",
  },
  {
    id: 4,
    type: "followed",
    project: "Kano Solar Grid Initiative",
    time: "5 days ago",
    details: "You started following this project.",
  },
];

export default function ActivityFeed() {
  const [activity] = useState(mockActivity);

  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Activity Feed</h2>
        <div className="flex flex-col gap-5">
          {activity.map((item) => (
            <Card key={item.id} className="p-5 flex items-center gap-5 border-blue-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-200">
              <div className="flex-shrink-0">
                {item.type === "followed" && <Star className="w-7 h-7 text-emerald-500" />}
                {item.type === "feedback" && <MessageCircle className="w-7 h-7 text-blue-500" />}
                {item.type === "update" && <Bell className="w-7 h-7 text-blue-900" />}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-blue-900 mb-1">{item.project}</div>
                <div className="text-gray-600 text-sm mb-1">{item.details}</div>
                <div className="text-xs text-gray-400">{item.time}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-200" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
