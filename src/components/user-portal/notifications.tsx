"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, Info, AlertTriangle } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "update",
    message: "Project 'Enugu Water Project' status changed to Ongoing.",
    time: "Just now",
    read: false,
  },
  {
    id: 2,
    type: "info",
    message: "New feedback received on 'Kano Solar Grid Initiative'.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "success",
    message: "You successfully updated your profile.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    type: "warning",
    message: "Project 'Port Harcourt Bridge Construction' is delayed.",
    time: "2 days ago",
    read: true,
  },
];

function iconForType(type: string) {
  switch (type) {
    case "update":
      return <Bell className="w-6 h-6 text-blue-900" />;
    case "success":
      return <CheckCircle className="w-6 h-6 text-emerald-500" />;
    case "info":
      return <Info className="w-6 h-6 text-blue-400" />;
    case "warning":
      return <AlertTriangle className="w-6 h-6 text-orange-400" />;
    default:
      return <Bell className="w-6 h-6 text-blue-900" />;
  }
}

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Notifications</h2>
        <div className="flex flex-col gap-5">
          {notifications.length === 0 ? (
            <div className="text-center text-gray-500 py-12 text-lg">No notifications.</div>
          ) : (
            notifications.map((n) => (
              <Card
                key={n.id}
                className={`p-5 flex items-center gap-5 border-blue-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-200 ${n.read ? 'opacity-70' : 'bg-blue-50/60'}`}
                onClick={() => markAsRead(n.id)}
                role="button"
                tabIndex={0}
              >
                <div className="flex-shrink-0">{iconForType(n.type)}</div>
                <div className="flex-1">
                  <div className="font-semibold text-blue-900 mb-1">{n.message}</div>
                  <div className="text-xs text-gray-400">{n.time}</div>
                </div>
                {!n.read && <span className="w-3 h-3 bg-emerald-400 rounded-full" />}
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
