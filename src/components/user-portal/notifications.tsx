'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, Info, AlertTriangle, Star, StarOff, Trash2, MailCheck, Mail } from "lucide-react";

type Notification = {
  id: number;
  type: string;
  message: string;
  time: string;
  read: boolean;
  starred: boolean;
  sender: string;
};

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "update",
    message: "Project 'Enugu Water Project' status changed to Ongoing.",
    time: "Just now",
    read: false,
    starred: false,
    sender: "Project Updates"
  },
  {
    id: 2,
    type: "info",
    message: "New feedback received on 'Kano Solar Grid Initiative'.",
    time: "2 hours ago",
    read: false,
    starred: true,
    sender: "Feedback"
  },
  {
    id: 3,
    type: "success",
    message: "You successfully updated your profile.",
    time: "Yesterday",
    read: true,
    starred: false,
    sender: "Account"
  },
  {
    id: 4,
    type: "warning",
    message: "Project 'Port Harcourt Bridge Construction' is delayed.",
    time: "2 days ago",
    read: true,
    starred: false,
    sender: "Project Alerts"
  },
];

function iconForType(type: string) {
  switch (type) {
    case "update":
      return <Bell className="w-5 h-5 text-blue-900" />;
    case "success":
      return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    case "info":
      return <Info className="w-5 h-5 text-blue-400" />;
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    default:
      return <Bell className="w-5 h-5 text-blue-900" />;
  }
}

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelected((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  const selectAll = () => {
    setSelected(notifications.length === selected.length ? [] : notifications.map(n => n.id));
  };
  const markSelectedAsRead = () => {
    setNotifications((prev) => prev.map(n => selected.includes(n.id) ? { ...n, read: true } : n));
    setSelected([]);
  };
  const markSelectedAsUnread = () => {
    setNotifications((prev) => prev.map(n => selected.includes(n.id) ? { ...n, read: false } : n));
    setSelected([]);
  };
  const deleteSelected = () => {
    setNotifications((prev) => prev.filter(n => !selected.includes(n.id)));
    setSelected([]);
  };
  const toggleStar = (id: number) => {
    setNotifications((prev) => prev.map(n => n.id === id ? { ...n, starred: !n.starred } : n));
  };
  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Notifications</h2>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={selected.length === notifications.length && notifications.length > 0}
            onChange={selectAll}
            className="form-checkbox h-5 w-5 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
            aria-label="Select all"
          />
          <button
            className="px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 disabled:opacity-50"
            onClick={markSelectedAsRead}
            disabled={selected.length === 0}
          >
            <MailCheck className="inline w-4 h-4 mr-1" /> Mark as read
          </button>
          <button
            className="px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 disabled:opacity-50"
            onClick={markSelectedAsUnread}
            disabled={selected.length === 0}
          >
            <Mail className="inline w-4 h-4 mr-1" /> Mark as unread
          </button>
          <button
            className="px-2 py-1 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 disabled:opacity-50"
            onClick={deleteSelected}
            disabled={selected.length === 0}
          >
            <Trash2 className="inline w-4 h-4 mr-1" /> Delete
          </button>
        </div>
        <div className="bg-white shadow rounded-xl overflow-hidden border border-blue-100">
          <table className="min-w-full divide-y divide-blue-50">
            <thead className="bg-blue-50">
              <tr>
                <th className="w-10 px-2 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selected.length === notifications.length && notifications.length > 0}
                    onChange={selectAll}
                    className="form-checkbox h-5 w-5 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
                    aria-label="Select all"
                  />
                </th>
                <th className="w-10 px-2 py-3"></th>
                <th className="px-2 py-3 text-left text-xs font-semibold text-blue-700">Sender</th>
                <th className="px-2 py-3 text-left text-xs font-semibold text-blue-700">Message</th>
                <th className="px-2 py-3 text-left text-xs font-semibold text-blue-700">Time</th>
                <th className="w-10 px-2 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {notifications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-12 text-lg">No notifications.</td>
                </tr>
              ) : (
                notifications.map((n) => (
                  <tr
                    key={n.id}
                    className={`transition-all duration-200 ${n.read ? 'bg-white' : 'bg-blue-50/80 font-semibold text-blue-900'} ${selected.includes(n.id) ? 'ring-2 ring-blue-200' : ''}`}
                  >
                    <td className="px-2 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(n.id)}
                        onChange={() => toggleSelect(n.id)}
                        className="form-checkbox h-5 w-5 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
                        aria-label={`Select notification ${n.id}`}
                      />
                    </td>
                    <td className="px-2 py-3">
                      <button
                        className="focus:outline-none"
                        onClick={() => toggleStar(n.id)}
                        aria-label={n.starred ? "Unstar" : "Star"}
                      >
                        {n.starred ? <Star className="w-5 h-5 text-yellow-400 fill-yellow-300" /> : <StarOff className="w-5 h-5 text-gray-300" />}
                      </button>
                    </td>
                    <td className="px-2 py-3 text-sm text-blue-800 whitespace-nowrap">{n.sender}</td>
                    <td className="px-2 py-3 text-sm cursor-pointer hover:underline" onClick={() => markAsRead(n.id)}>{iconForType(n.type)} <span className="ml-2">{n.message}</span></td>
                    <td className="px-2 py-3 text-xs text-gray-500 whitespace-nowrap">{n.time}</td>
                    <td className="px-2 py-3">
                      {!n.read && <span className="w-3 h-3 bg-emerald-400 rounded-full inline-block" title="Unread" />}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
