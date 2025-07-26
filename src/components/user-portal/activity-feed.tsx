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
  CheckCircle
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
        return <Star className="w-6 h-6 text-emerald-500" />;
      case "feedback":
        return <MessageCircle className="w-6 h-6 text-blue-500" />;
      case "update":
        return <Bell className="w-6 h-6 text-blue-900" />;
      case "milestone":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "mention":
        return <Users className="w-6 h-6 text-purple-500" />;
      case "deadline":
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                Activity Feed
              </h1>
              <p className="text-gray-600">
                Stay updated with your project activities and notifications
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-blue-900 hover:bg-blue-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
                >
                  <Check className="w-4 h-4" />
                  Mark all read
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">{unreadCount}</div>
                  <div className="text-sm text-gray-600">Unread</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Star className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">
                    {activity.filter(item => item.type === "followed").length}
                  </div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">{activity.length}</div>
                  <div className="text-sm text-gray-600">Total Activities</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter:</span>
            </div>
            {["all", "followed", "feedback", "update", "milestone", "mention", "deadline"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filter === filterType
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
            <label className="flex items-center gap-2 ml-4">
              <input
                type="checkbox"
                checked={showUnreadOnly}
                onChange={(e) => setShowUnreadOnly(e.target.checked)}
                className="rounded text-blue-900"
              />
              <span className="text-sm text-gray-600">Unread only</span>
            </label>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredActivity.length === 0 ? (
            <Card className="p-8 text-center border-blue-100">
              <div className="text-gray-400 mb-2">
                <Bell className="w-12 h-12 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No activities found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more activities.</p>
            </Card>
          ) : (
            filteredActivity.map((item) => (
              <Card
                key={item.id}
                className={`p-5 border-blue-100 hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  !item.read ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
                onClick={() => !item.read && markAsRead(item.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    {getIcon(item.type)}
                    {!item.read && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-blue-900 text-lg leading-tight">
                        {item.project}
                      </h3>
                      {item.priority === "high" && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full ml-2">
                          High Priority
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      {item.details}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </div>
                      
                      {!item.read && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(item.id);
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Load More */}
        {filteredActivity.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Load More Activities
            </button>
          </div>
        )}
      </div>
    </div>
  );
}