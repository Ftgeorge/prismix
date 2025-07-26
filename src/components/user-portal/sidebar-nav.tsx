import { Home, Search, Send, Star, User, LogOut, Activity, Bell, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/portal" },
  { label: "Explore Projects", icon: Search, href: "/portal/explore" },
  { label: "Activity Feed", icon: Activity, href: "/portal/activity" },
  { label: "Notifications", icon: Bell, href: "/portal/notifications" },
  { label: "My Feedback", icon: Send, href: "/portal/feedback" },
  { label: "Followed Projects", icon: Star, href: "/portal/followed" },
  { label: "Profile Settings", icon: User, href: "/portal/profile" },
];

const helpNav = { label: "Help & Support", icon: HelpCircle, href: "/portal/help" };

export function SidebarNav() {
  const pathname = usePathname();
  return (
    <aside className="h-full w-64 bg-primary text-white flex flex-col py-8 px-4 gap-8 shadow-xl">
      <div className="mb-6 text-2xl font-bold tracking-tight">Prismix</div>
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base font-medium ${pathname === item.href ? "bg-primary/90 font-bold shadow-inner" : "hover:bg-primary/80"}`}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={helpNav.href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base font-medium mb-2 ${pathname === helpNav.href ? "bg-primary/90 font-bold shadow-inner" : "hover:bg-primary/80"}`}
        aria-current={pathname === helpNav.href ? "page" : undefined}
      >
        <helpNav.icon className="w-5 h-5" />
        {helpNav.label}
      </Link>
      <button className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors text-base font-medium mt-auto">
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </aside>
  );
}
