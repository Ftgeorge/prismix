import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Send, Search, Medal, Plus, AlertCircle, TrendingUp, Eye } from "lucide-react";

const user = {
  name: "James",
  followed: 4,
  feedback: 7,
  witnessLevel: "Silver",
};

const recentActivity = [
  { type: "report", text: "You reported: Abandoned road in Agege", time: "2 hours ago" },
  { type: "response", text: "Lagos MDA responded to your feedback", time: "1 day ago" },
  { type: "follow", text: "You started following Ogun Water Project", time: "3 days ago" },
];

const suggestions = [
  { title: "Ogun Water Project", location: "Ogun State", trending: true, status: "In Progress" },
  { title: "Enugu School Renovation", location: "Enugu State", trending: false, status: "Planning" },
  { title: "Lagos Road Infrastructure", location: "Lagos State", trending: true, status: "Completed" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-gray-600 text-lg">
              Track government projects and make your voice heard
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Track Project
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 font-medium">
              <AlertCircle className="w-4 h-4 mr-2" />
              Report Issue
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            label="Projects Followed" 
            value={user.followed} 
            icon={<Star className="w-6 h-6 text-blue-600" />}
            bgColor="bg-blue-50"
            borderColor="border-blue-100"
          />
          <StatCard 
            label="Feedback Submitted" 
            value={user.feedback} 
            icon={<Send className="w-6 h-6 text-emerald-600" />}
            bgColor="bg-emerald-50"
            borderColor="border-emerald-100"
          />
          <StatCard 
            label="Witness Level" 
            value={user.witnessLevel} 
            icon={<Medal className="w-6 h-6 text-amber-600" />}
            bgColor="bg-amber-50"
            borderColor="border-amber-100"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <Card key={i} className="p-5 bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium mb-1">{item.text}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'report' ? 'bg-orange-400' : 
                      item.type === 'response' ? 'bg-green-400' : 'bg-blue-400'
                    }`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Suggested Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Suggested Projects</h2>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                <Search className="w-4 h-4 mr-1" />
                Browse All
              </Button>
            </div>
            <div className="space-y-4">
              {suggestions.map((project, i) => (
                <Card key={i} className="p-5 bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        {project.trending && (
                          <Badge className="bg-orange-100 text-orange-700 text-xs font-medium">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{project.location}</p>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">Stay Informed</h3>
              <p className="text-blue-100">Get notified about updates on projects you're following</p>
            </div>
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-gray-50 font-medium px-6">
              Manage Notifications
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ 
  label, 
  value, 
  icon, 
  bgColor, 
  borderColor 
}: { 
  label: string; 
  value: string | number; 
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <Card className={`p-6 ${bgColor} border ${borderColor} hover:shadow-sm transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
          <p className="text-sm font-medium text-gray-600">{label}</p>
        </div>
        <div className="opacity-80">
          {icon}
        </div>
      </div>
    </Card>
  );
}