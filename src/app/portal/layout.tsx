"use client";

import { Home, Search, Send, Star, User, LogOut, Activity, Bell, HelpCircle, ChevronRight, Menu, X, Settings, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/portal", category: "main" },
  { label: "Explore", icon: Search, href: "/portal/explore", category: "main" },
  { label: "Activity", icon: Activity, href: "/portal/activity", category: "main" },
  { label: "Followed", icon: Star, href: "/portal/followed", category: "main" },
];

const personalItems = [
  { label: "Profile", icon: User, href: "/portal/profile", category: "personal" },
  { label: "Notifications", icon: Bell, href: "/portal/notifications", category: "personal", badge: 2 },
  { label: "Feedback", icon: Send, href: "/portal/feedback", category: "personal" },
];

const systemItems = [
  { label: "Help & Support", icon: HelpCircle, href: "/portal/help", category: "system" },
];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      <SidebarNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
}

function DashboardHeader() {
  const currentDate = new Date();
  const timeOfDay = currentDate.getHours() < 12 ? 'morning' : currentDate.getHours() < 18 ? 'afternoon' : 'evening';
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className="w-full px-8 py-5 border-b border-slate-200 bg-white">
      <div className="flex items-center justify-between">
        {/* Left section - Clean greeting */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 mb-1">
            Good {timeOfDay}, Mazi
          </h1>
          <p className="text-sm text-slate-500">{formattedDate}</p>
        </div>

        {/* Right section - Clean status indicators */}
        <div className="flex items-center gap-4">
          {/* Status badges */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md font-medium">
              Verified Civic Champion
            </span>
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md font-medium">
              Level 4
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 ml-2">
            <button className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200 relative" title="Notifications">
              <Bell className="w-5 h-5 text-slate-600" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200" title="Settings">
              <Settings className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarNav({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (collapsed: boolean) => void }) {
  const pathname = usePathname();

  return (
    <aside className={`h-full ${isCollapsed ? 'w-20' : 'w-72'} bg-white flex flex-col shadow-xl border-r border-slate-200 transition-all duration-500 ease-in-out`}>
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div 
              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isCollapsed ? 'cursor-pointer hover:bg-slate-100 transition-colors duration-200' : ''
              }`}
              onClick={isCollapsed ? () => setIsCollapsed(false) : undefined}
              title={isCollapsed ? "Expand sidebar" : undefined}
            >
              <img src="https://yzub7xjzmf.ufs.sh/f/p5WCAJ95HVcjpWCwrj295HVcjyE3Xs0mkUNIQflGw8evWqRA" alt="Logo" width={100} height={100} className="size-full" />
            </div>
            <div className={`transition-all duration-500 ease-in-out min-w-0 ${
              isCollapsed 
                ? 'opacity-0 scale-95 translate-x-2 w-0 overflow-hidden' 
                : 'opacity-100 scale-100 translate-x-0 w-auto'
            }`}>
            </div>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 hover:bg-slate-100 rounded-md transition-all duration-300 flex-shrink-0 ${
              isCollapsed 
                ? 'opacity-0 scale-95 translate-x-2 w-0 overflow-hidden pointer-events-none' 
                : 'opacity-100 scale-100 translate-x-0 w-auto pointer-events-auto'
            }`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <LayoutDashboard className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        {/* Main Navigation */}
        <div className="mb-8">
          <h2 className={`text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 transition-all duration-400 ${
            isCollapsed 
              ? 'opacity-0 scale-95 translate-x-2 h-0 overflow-hidden mb-0' 
              : 'opacity-100 scale-100 translate-x-0 h-auto'
          }`}>
            Overview
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={pathname === item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </div>

        {/* Personal Section */}
        <div className="mb-8">
          <h2 className={`text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 transition-all duration-400 ${
            isCollapsed 
              ? 'opacity-0 scale-95 translate-x-2 h-0 overflow-hidden mb-0' 
              : 'opacity-100 scale-100 translate-x-0 h-auto'
          }`}>
            Personal
          </h2>
          <div className="space-y-1">
            {personalItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={pathname === item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </div>

        {/* System Section */}
        <div>
          <h2 className={`text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 transition-all duration-400 ${
            isCollapsed 
              ? 'opacity-0 scale-95 translate-x-2 h-0 overflow-hidden mb-0' 
              : 'opacity-100 scale-100 translate-x-0 h-auto'
          }`}>
            System
          </h2>
          <div className="space-y-1">
            {systemItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={pathname === item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="px-3 py-4 border-t border-slate-100 bg-slate-50/50">
        <div className={`p-3 bg-white rounded-lg border border-slate-200 shadow-sm`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} mb-3`}>
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
                <span className="text-white text-xs font-semibold">UO</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full transition-all duration-300"></div>
            </div>
            <div className={`flex-1 min-w-0 transition-all duration-400 ${
              isCollapsed 
                ? 'opacity-0 scale-95 translate-x-2 w-0 overflow-hidden' 
                : 'opacity-100 scale-100 translate-x-0 w-auto'
            }`}>
              <p className="text-sm font-semibold text-slate-900 truncate whitespace-nowrap">Ugochukwu Okoroafor</p>
              <p className="text-xs text-slate-500 whitespace-nowrap">Verified Citizen</p>
            </div>
          </div>

          <button className={`w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-300 group ${
            isCollapsed 
              ? 'opacity-0 scale-95 translate-y-2 h-0 overflow-hidden py-0 pointer-events-none' 
              : 'opacity-100 scale-100 translate-y-0 h-auto pointer-events-auto'
          }`}>
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span className="font-medium whitespace-nowrap">Sign Out</span>
            </div>
            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>

          <button
            className={`w-full flex justify-center p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-300 ${
              isCollapsed 
                ? 'opacity-100 scale-100 translate-y-0 h-auto pointer-events-auto' 
                : 'opacity-0 scale-95 translate-y-2 h-0 overflow-hidden py-0 pointer-events-none'
            }`}
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  item,
  isActive,
  isCollapsed = false
}: {
  item: any;
  isActive: boolean;
  isCollapsed?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`relative w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'justify-between px-3'} py-2.5 rounded-lg transition-all duration-300 group ${isActive
          ? "bg-primary text-white shadow-sm"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }`}
      title={isCollapsed ? item.label : undefined}
    >
      <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'} min-w-0`}>
        <item.icon
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-700"
            }`}
        />
        <span className={`font-medium transition-all duration-400 ${
          isActive ? "font-semibold" : ""
        } ${
          isCollapsed 
            ? 'opacity-0 scale-95 translate-x-2 w-0 overflow-hidden whitespace-nowrap' 
            : 'opacity-100 scale-100 translate-x-0 w-auto whitespace-nowrap'
        }`}>
          {item.label}
        </span>
      </div>

      {/* Badge and active indicator container */}
      <div className={`flex items-center gap-2 transition-all duration-400 ${
        isCollapsed 
          ? 'opacity-0 scale-95 translate-x-2 w-0 overflow-hidden' 
          : 'opacity-100 scale-100 translate-x-0 w-auto'
      }`}>
        {/* Badge for notifications */}
        {item.badge && (
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full min-w-[18px] text-center leading-none whitespace-nowrap">
            {item.badge}
          </span>
        )}

        {/* Active indicator */}
        {isActive && (
          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80 flex-shrink-0" />
        )}
      </div>

      {/* Badge for collapsed state */}
      {isCollapsed && item.badge && (
        <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white transition-all duration-300 ${
          isCollapsed ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      )}

      {/* Active indicator for collapsed state */}
      {isCollapsed && isActive && (
        <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-l-full transition-all duration-300 ${
          isCollapsed ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      )}
    </Link>
  );
}