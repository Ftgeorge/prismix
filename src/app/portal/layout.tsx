"use client";

import { Home, Search, Send, Star, User, LogOut, Activity, Bell, HelpCircle, ChevronRight, Menu, X, Settings, BarChart3, FileText, Users } from "lucide-react";
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
        <div className="w-full px-8 py-6 border-b border-slate-200 bg-white flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Good morning, James</h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back! Let's make an impact today.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Verified Civic Champion</span>
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Level 4</span>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

function SidebarNav({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (collapsed: boolean) => void }) {
  const pathname = usePathname();

  return (
    <aside className={`h-full ${isCollapsed ? 'w-20' : 'w-72'} bg-white flex flex-col shadow-xl border-r border-slate-200 transition-all duration-300 ease-in-out`}>
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="size-full" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-slate-900 tracking-tight">Prism</h1>
                <p className="text-xs text-slate-500 font-medium">Civic Engagement Platform</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <Menu className="w-4 h-4 text-slate-600" />
            ) : (
              <X className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        {/* Main Navigation */}
        <div className="mb-8">
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
              Overview
            </h2>
          )}
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
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
              Personal
            </h2>
          )}
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
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
              System
            </h2>
          )}
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
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-semibold">JD</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></div>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">James Doe</p>
                <p className="text-xs text-slate-500">Verified Citizen</p>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200 group">
              <div className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Sign Out</span>
              </div>
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          )}

          {isCollapsed && (
            <button
              className="w-full flex justify-center p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
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
      className={`relative w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'justify-between px-3'} py-2.5 rounded-lg transition-all duration-200 group ${isActive
          ? "bg-[#1A2A4E] text-white shadow-sm"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }`}
      title={isCollapsed ? item.label : undefined}
    >
      <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
        <item.icon
          className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-700"
            }`}
        />
        {!isCollapsed && (
          <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
            {item.label}
          </span>
        )}
      </div>

      {!isCollapsed && (
        <>
          {/* Badge for notifications */}
          {item.badge && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full min-w-[18px] text-center leading-none">
              {item.badge}
            </span>
          )}

          {/* Active indicator */}
          {isActive && (
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
          )}
        </>
      )}

      {/* Badge for collapsed state */}
      {isCollapsed && item.badge && (
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
      )}

      {/* Active indicator for collapsed state */}
      {isCollapsed && isActive && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-l-full" />
      )}
    </Link>
  );
}