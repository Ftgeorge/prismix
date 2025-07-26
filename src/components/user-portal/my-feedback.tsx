import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, CheckCircle, AlertCircle, Plus, Filter, Search } from "lucide-react";

const feedbacks = [
  { 
    id: 1,
    title: "Abandoned road in Agege", 
    project: "Agege Road Rehab", 
    status: "Open", 
    timestamp: "2025-07-10", 
    response: "Received. Under review by engineering team. Expected resolution timeline: 2-3 weeks.",
    priority: "High",
    category: "Infrastructure"
  },
  { 
    id: 2,
    title: "Non-functional borehole", 
    project: "Ogun Water Project", 
    status: "Resolved", 
    timestamp: "2025-06-22", 
    response: "Issue fixed by contractor. Water flow restored to normal capacity.",
    priority: "Medium",
    category: "Water Supply"
  },
  { 
    id: 3,
    title: "Street lighting installation delay", 
    project: "Lagos Street Lighting", 
    status: "In Progress", 
    timestamp: "2025-07-08", 
    response: "Installation crew deployed. 60% completion achieved.",
    priority: "Low",
    category: "Utilities"
  },
];

function getStatusIcon(status: string) {
  switch (status) {
    case "Resolved":
      return <CheckCircle className="w-4 h-4 text-primary/80" />;
    case "In Progress":
      return <Clock className="w-4 h-4 text-primary/80" />;
    case "Open":
      return <AlertCircle className="w-4 h-4 text-amber-600" />;
    default:
      return <MessageSquare className="w-4 h-4 text-gray-400" />;
  }
}

function getStatusBadgeStyle(status: string) {
  switch (status) {
    case "Resolved":
      return "bg-primary/10 text-primary/80 border-primary/30";
    case "In Progress":
      return "bg-primary/10 text-primary/80 border-primary/30";
    case "Open":
      return "bg-amber-100 text-amber-800 border-amber-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

function getPriorityBadgeStyle(priority: string) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 border-red-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

export function MyFeedback() {
  const totalFeedback = feedbacks.length;
  const resolvedCount = feedbacks.filter(fb => fb.status === "Resolved").length;
  const pendingCount = feedbacks.filter(fb => fb.status !== "Resolved").length;

  return (
    <div className="mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Feedback</h1>
            <p className="text-gray-600">Track your submitted feedback and admin responses</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
            <Plus className="w-4 h-4 mr-2" />
            Submit Feedback
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-white border-0 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-primary/80" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                <p className="text-2xl font-semibold text-gray-900">{totalFeedback}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-white border-0 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary/80" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-semibold text-gray-900">{resolvedCount}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-white border-0 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">{pendingCount}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search feedback..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
            <option>All Categories</option>
            <option>Infrastructure</option>
            <option>Water Supply</option>
            <option>Utilities</option>
          </select>
        </div>
      </div>

      {/* Feedback List */}
      <Card className="bg-white shadow-sm border-0">
        {feedbacks.length === 0 ? (
          <div className="text-center py-16">
            <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No feedback submitted</h3>
            <p className="text-gray-500 mb-4">Share your thoughts and help improve our projects.</p>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Submit Your First Feedback
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {getStatusIcon(feedback.status)}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {feedback.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">{feedback.project}</span>
                          <span>•</span>
                          <span>{feedback.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge className={`${getStatusBadgeStyle(feedback.status)} border px-2 py-1 text-xs font-medium rounded-full`}>
                          {feedback.status}
                        </Badge>
                        <Badge className={`${getPriorityBadgeStyle(feedback.priority)} border px-2 py-1 text-xs font-medium rounded-full`}>
                          {feedback.priority}
                        </Badge>
                      </div>
                    </div>

                    {/* Admin Response */}
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Admin Response:</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border-l-4 border-blue-200">
                        {feedback.response}
                      </p>
                    </div>

                    {/* Timestamp */}
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Submitted on {new Date(feedback.timestamp).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <button className="text-xs text-primary/80 hover:text-blue-800 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}