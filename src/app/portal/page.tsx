"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Send, Search, Shield, Plus, AlertTriangle, TrendingUp, Eye, Clock, CheckCircle, Calendar, ArrowUpRight, Activity, BarChart3, PieChart, Users, MapPin, Zap, Target, Award, Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar, Area, AreaChart } from "recharts";

const user = {
  name: "James",
  followed: 12,
  feedback: 23,
  witnessLevel: "Verified",
  completionRate: 87,
};

const recentActivity = [
  { 
    type: "report", 
    title: "Infrastructure Report Submitted",
    description: "Road maintenance issue documented in Agege District", 
    time: "2 hours ago",
    status: "under_review",
    priority: "medium",
    impact: "High"
  },
  { 
    type: "response", 
    title: "Official Response Received",
    description: "Lagos State Ministry of Works has acknowledged your submission", 
    time: "1 day ago",
    status: "responded",
    priority: "high",
    impact: "Critical"
  },
  { 
    type: "follow", 
    title: "Project Monitoring Started",
    description: "Now tracking Ogun State Water Infrastructure Initiative", 
    time: "3 days ago",
    status: "active",
    priority: "low",
    impact: "Medium"
  },
];

const projectSuggestions = [
  { 
    title: "Ogun Water Infrastructure Initiative", 
    location: "Ogun State", 
    trending: true, 
    status: "In Progress",
    completion: 68,
    budget: "₦2.4B",
    category: "Infrastructure",
    stakeholders: 12,
    daysLeft: 45
  },
  { 
    title: "Enugu Educational Facility Upgrade", 
    location: "Enugu State", 
    trending: false, 
    status: "Planning",
    completion: 15,
    budget: "₦1.8B",
    category: "Education",
    stakeholders: 8,
    daysLeft: 120
  },
  { 
    title: "Lagos Transportation Hub", 
    location: "Lagos State", 
    trending: true, 
    status: "Completed",
    completion: 100,
    budget: "₦5.2B",
    category: "Transportation",
    stakeholders: 24,
    daysLeft: 0
  },
];

// Chart data
const engagementData = [
  { month: 'Jan', reports: 4, responses: 2, projects: 3 },
  { month: 'Feb', reports: 6, responses: 4, projects: 4 },
  { month: 'Mar', reports: 8, responses: 6, projects: 6 },
  { month: 'Apr', reports: 12, responses: 9, projects: 8 },
  { month: 'May', reports: 15, responses: 12, projects: 10 },
  { month: 'Jun', reports: 23, responses: 18, projects: 12 },
];

const categoryData = [
  { name: 'Infrastructure', value: 45, color: '#3B82F6' },
  { name: 'Education', value: 25, color: '#10B981' },
  { name: 'Healthcare', value: 20, color: '#F59E0B' },
  { name: 'Transportation', value: 10, color: '#EF4444' },
];

const impactData = [
  { category: 'Water', completed: 8, inProgress: 4, planned: 3 },
  { category: 'Roads', completed: 12, inProgress: 6, planned: 2 },
  { category: 'Schools', completed: 5, inProgress: 8, planned: 5 },
  { category: 'Health', completed: 3, inProgress: 4, planned: 7 },
];

const metrics = [
  {
    label: "Active Projects",
    value: user.followed,
    change: "+3 this month",
    trend: "up" as const,
    icon: <Star className="w-5 h-5 text-blue-600" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    percentage: 25
  },
  {
    label: "Submissions Made",
    value: user.feedback,
    change: "+5 this week",
    trend: "up" as const,
    icon: <Send className="w-5 h-5 text-emerald-600" />,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    percentage: 40
  },
  {
    label: "Civic Status",
    value: user.witnessLevel,
    change: `${user.completionRate}% complete`,
    trend: "neutral" as const,
    icon: <Shield className="w-5 h-5 text-amber-600" />,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    percentage: user.completionRate
  },
  {
    label: "Community Impact",
    value: "2.4k",
    change: "+180 this month",
    trend: "up" as const,
    icon: <Users className="w-5 h-5 text-purple-600" />,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    percentage: 75
  }
];

function MetricCard({ 
  label, 
  value, 
  change,
  trend,
  icon, 
  bgColor, 
  borderColor,
  percentage 
}: { 
  label: string; 
  value: string | number; 
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  percentage: number;
}) {
  return (
    <Card className={`p-6 ${bgColor} border ${borderColor} hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-200">{value}</p>
            <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
              {icon}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">{label}</p>
            <div className="w-full bg-slate-200 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${
                  trend === 'up' ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                  trend === 'down' ? 'bg-gradient-to-r from-red-500 to-red-400' :
                  'bg-gradient-to-r from-slate-500 to-slate-400'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className={`text-xs font-medium flex items-center gap-1 ${
              trend === 'up' ? 'text-emerald-600' :
              trend === 'down' ? 'text-red-600' :
              'text-slate-500'
            }`}>
              {trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {trend === 'down' && <Activity className="w-3 h-3" />}
              {change}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-full max-w-full mx-0 p-6 space-y-8">
        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Section - Single Row */}
        <div className="flex flex-row gap-6 w-full">
          {/* Bar Chart */}
          <Card className="flex-1 min-w-0 p-4 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Impact Overview by Sector</h3>
                <p className="text-sm text-slate-500">Project completion status across different areas</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <BarChart3 className="w-4 h-4 mr-2" />
                Detailed Report
              </Button>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} barGap={10}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="category" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Bar dataKey="completed" stackId="a" fill="#10B981" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="inProgress" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="planned" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-600 font-medium">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-slate-600 font-medium">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-slate-600 font-medium">Planned</span>
              </div>
            </div>
          </Card>

          {/* Line Chart */}
          <Card className="flex-1 min-w-0 p-4 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Civic Engagement Trends</h3>
                <p className="text-sm text-slate-500">Your activity over the past 6 months</p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                +42% growth
              </Badge>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="reports" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="responses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Area
                    type="monotone"
                    dataKey="reports"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    fill="url(#reports)"
                  />
                  <Area
                    type="monotone"
                    dataKey="responses"
                    stroke="#10B981"
                    strokeWidth={3}
                    fill="url(#responses)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-slate-600 font-medium">Reports Submitted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-600 font-medium">Official Responses</span>
              </div>
            </div>
          </Card>

          {/* Pie Chart */}
          <Card className="w-64 min-w-[180px] max-w-[240px] p-4 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Project Focus</h3>
                <p className="text-sm text-slate-500">Your monitoring distribution</p>
              </div>
              <PieChart className="w-5 h-5 text-slate-400" />
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <defs>
                    {categoryData.map((entry, index) => (
                      <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={entry.color} stopOpacity={0.8}/>
                        <stop offset="100%" stopColor={entry.color} stopOpacity={0.6}/>
                      </linearGradient>
                    ))}
                  </defs>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1 mt-2">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium text-slate-700">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        
        {/* Main Content Grid - Enhanced */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Activity - Enhanced */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
                <p className="text-sm text-slate-500 mt-1">Your latest civic engagement activities</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-700 hover:bg-slate-100">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View History
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <Card key={i} className="p-5 bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      item.type === 'report' ? 'bg-orange-100 group-hover:bg-orange-200' : 
                      item.type === 'response' ? 'bg-emerald-100 group-hover:bg-emerald-200' : 'bg-blue-100 group-hover:bg-blue-200'
                    } transition-colors duration-200`}>
                      {item.type === 'report' && <AlertTriangle className="w-5 h-5 text-orange-600" />}
                      {item.type === 'response' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                      {item.type === 'follow' && <Activity className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary"
                            className={`text-xs font-medium ${
                              item.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                              item.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                              'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {item.impact}
                          </Badge>
                          <Badge 
                            className={`text-xs ${
                              item.priority === 'high' ? 'bg-red-50 text-red-600 border-red-200' :
                              item.priority === 'medium' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' :
                              'bg-slate-50 text-slate-600 border-slate-200'
                            }`}
                            variant="outline"
                          >
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-slate-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.time}
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700 h-6 px-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Recommendations - Mature Card */}
          <Card className="xl:col-span-1 flex flex-col h-full min-h-[450px] max-h-[600px] p-0 border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Recommended</h2>
                <p className="text-sm text-slate-500 mt-1">Projects you might want to monitor</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {projectSuggestions.map((project, i) => (
                <Card key={i} className="p-4 bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight group-hover:text-blue-700 transition-colors">{project.title}</h3>
                      {project.trending && (
                        <Badge className="bg-orange-100 text-orange-700 text-xs font-medium ml-2 flex-shrink-0 border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <p className="text-xs text-slate-500">{project.location}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={`text-xs ${
                        project.status === 'Completed' ? 'border-emerald-200 text-emerald-700' :
                        project.status === 'In Progress' ? 'border-blue-200 text-blue-700' :
                        'border-orange-200 text-orange-700'
                      }`}>
                        {project.status}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500 font-medium">Progress</span>
                      <span className="font-semibold text-slate-700">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          project.completion === 100 ? 'bg-emerald-500' :
                          project.completion > 50 ? 'bg-blue-500' : 
                          'bg-orange-500'
                        }`}
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-1 bg-white rounded border border-slate-100">
                        <div className="font-semibold text-slate-900">{project.budget}</div>
                        <div className="text-slate-500">Budget</div>
                      </div>
                      <div className="text-center p-1 bg-white rounded border border-slate-100">
                        <div className="font-semibold text-slate-900">{project.stakeholders}</div>
                        <div className="text-slate-500">Stakeholders</div>
                      </div>
                    </div>
                    {project.daysLeft > 0 && (
                      <div className="flex items-center justify-center p-1 bg-amber-50 rounded">
                        <Target className="w-3 h-3 text-amber-600 mr-1" />
                        <span className="text-xs font-medium text-amber-700">
                          {project.daysLeft} days remaining
                        </span>
                      </div>
                    )}
                    <Button size="sm" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium mt-2">
                      <Eye className="w-3 h-3 mr-2" />
                      Monitor Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Enhanced Call to Action - Mature Card */}
        <Card className="p-8 bg-white border border-slate-200 shadow flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
              <Bell className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Stay Connected &amp; Make Impact</h3>
              <p className="text-slate-600 text-sm max-w-md">
                Enable notifications to stay updated on your monitored projects. Your civic engagement is making a real difference in community governance.
              </p>
              <div className="flex gap-4 mt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Real-time updates
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-blue-500" />
                  Smart alerts
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-none">
              <Bell className="w-4 h-4 mr-2" />
              Enable Alerts
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}