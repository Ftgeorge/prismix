"use client";

import { Home, Search, Send, Star, User, LogOut, Activity, Bell, HelpCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/portal", category: "main" },
  { label: "Explore Projects", icon: Search, href: "/portal/explore", category: "main" },
  { label: "Activity Feed", icon: Activity, href: "/portal/activity", category: "main" },
  { label: "Notifications", icon: Bell, href: "/portal/notifications", category: "main", badge: 3 },
];

const personalItems = [
  { label: "My Feedback", icon: Send, href: "/portal/feedback", category: "personal" },
  { label: "Followed Projects", icon: Star, href: "/portal/followed", category: "personal" },
  { label: "Profile Settings", icon: User, href: "/portal/profile", category: "personal" },
];

const helpNav = { label: "Help & Support", icon: HelpCircle, href: "/portal/help" };

export default function SidebarNav() {
  const [activeItem, setActiveItem] = useState("/portal");
  
  return (
    <aside className="h-full w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Header */}
      <div className="px-6 py-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Prismix</h1>
            <p className="text-sm text-gray-500">Citizen Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-8">
        {/* Main Navigation */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Main
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={activeItem === item.href}
                onClick={() => setActiveItem(item.href)}
              />
            ))}
          </div>
        </div>

        {/* Personal Section */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Personal
          </h2>
          <div className="space-y-1">
            {personalItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={activeItem === item.href}
                onClick={() => setActiveItem(item.href)}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-gray-100 space-y-2">
        <NavItem
          item={helpNav}
          isActive={activeItem === helpNav.href}
          onClick={() => setActiveItem(helpNav.href)}
        />
        
        {/* User Profile Section */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">James Doe</p>
              <p className="text-xs text-gray-500">Silver Member</p>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors group">
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </div>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: any; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group ${
        isActive
          ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <item.icon 
          className={`w-5 h-5 ${
            isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
          }`} 
        />
        <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
          {item.label}
        </span>
      </div>
      
      {/* Badge for notifications or active indicator */}
      {item.badge && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
          {item.badge}
        </span>
      )}
      
      {isActive && (
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
      )}
    </button>
  );
}