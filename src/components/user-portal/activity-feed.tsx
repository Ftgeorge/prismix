"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Bell, 
  MessageCircle, 
  Star, 
  ArrowRight, 
  Filter,
  Check,
  Settings,
  Clock,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  MoreHorizontal
} from "lucide-react";

const mockActivity = [
  {
    id: 1,
    type: "followed",
    project: "Lagos-Ibadan Expressway Rehabilitation",
    time: "2 hours ago",
    details: "You started following this project.",
    read: false,
    priority: "normal"
  },
  {
    id: 2,
    type: "feedback",
    project: "Enugu Water Project",
    time: "1 day ago",
    details: "Your feedback received a response from the project team.",
    read: false,
    priority: "high"
  },
  {
    id: 3,
    type: "update",
    project: "Abuja Light Rail Expansion",
    time: "3 days ago",
    details: "Project status updated to Completed. Final report available.",
    read: true,
    priority: "normal"
  },
  {
    id: 4,
    type: "milestone",
    project: "Kano Solar Grid Initiative",
    time: "5 days ago",
    details: "Project reached 75% completion milestone.",
    read: true,
    priority: "normal"
  },
  {
    id: 5,
    type: "mention",
    project: "Port Harcourt Road Network",
    time: "1 week ago",
    details: "You were mentioned in a comment by Sarah Johnson.",
    read: true,
    priority: "normal"
  },
  {
    id: 6,
    type: "deadline",
    project: "Kaduna Bridge Construction",
    time: "1 week ago",
    details: "Feedback deadline approaching in 2 days.",
    read: true,
    priority: "high"
  }
];

export default function ActivityFeed() {
  const [activity, setActivity] = useState(mockActivity);
  const [filter, setFilter] = useState("all");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const getIcon = (type:any) => {
    switch (type) {
      case "followed":
        return <Star className="w-4 h-4 text-primary/80" />;
      case "feedback":
        return <MessageCircle className="w-4 h-4 text-primary/80" />;
      case "update":
        return <Bell className="w-4 h-4 text-primary" />;
      case "milestone":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "mention":
        return <Users className="w-4 h-4 text-purple-500" />;
      case "deadline":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const markAsRead = (id:any) => {
    setActivity(prev => 
      prev.map(item => 
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const markAllAsRead = () => {
    setActivity(prev => 
      prev.map(item => ({ ...item, read: true }))
    );
  };

  const filteredActivity = activity.filter(item => {
    if (showUnreadOnly && item.read) return false;
    if (filter === "all") return true;
    return item.type === filter;
  });

  const unreadCount = activity.filter(item => !item.read).length;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto py-6 px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold text-black mb-1">
                Activity Feed
              </h1>
              <p className="text-gray-600 text-sm">
                Stay updated with your project activities and notifications
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
                >
                  <Check className="w-3 h-3" />
                  Mark all read
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Filter className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-600">Filter:</span>
            </div>
            {["all", "followed", "feedback", "update", "milestone", "mention", "deadline"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-2 py-1 rounded-md text-xs 2xl:text-xs xl:text-xs lg:text-xs md:text-xs transition-colors ${
                  filter === filterType
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
            <label className="flex items-center gap-1 ml-3">
              <input
                type="checkbox"
                checked={showUnreadOnly}
                onChange={(e) => setShowUnreadOnly(e.target.checked)}
                className="rounded text-primary w-3 h-3"
              />
              <span className="text-xs text-gray-600">Unread only</span>
            </label>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white border border-gray-200 rounded-lg">
          {filteredActivity.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-3">
                <Bell className="w-8 h-8 mx-auto mb-2" />
              </div>
              <h3 className="text-base font-medium text-gray-600 mb-1">No activities found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your filters to see more activities.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredActivity.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !item.read ? "bg-primary/10" : ""
                  }`}
                  onClick={() => !item.read && markAsRead(item.id)}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 relative mt-0.5">
                      <div className={`p-2 rounded-full ${!item.read ? 'bg-white' : 'bg-gray-100'}`}>
                        {getIcon(item.type)}
                      </div>
                      {!item.read && (
                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-medium text-gray-900 leading-tight ${!item.read ? 'font-semibold' : ''}`}>
                              {item.project}
                            </h3>
                            {item.priority === "high" && (
                              <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded font-medium">
                                High
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            {item.details}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.time}
                            </div>
                            {!item.read && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markAsRead(item.id);
                                }}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                              >
                                Mark as read
                              </button>
                            )}
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-1 ml-3">
                          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span>{unreadCount} unread</span>
            <span>{activity.length} total activities</span>
          </div>
          {filteredActivity.length > 0 && (
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}