'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, Info, AlertTriangle, Star, StarOff, Trash2, MailCheck, Mail, MoreVertical } from "lucide-react";

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
      return <Bell className="w-4 h-4 text-blue-600" />;
    case "success":
      return <CheckCircle className="w-4 h-4 text-emerald-600" />;
    case "info":
      return <Info className="w-4 h-4 text-blue-500" />;
    case "warning":
      return <AlertTriangle className="w-4 h-4 text-amber-600" />;
    default:
      return <Bell className="w-4 h-4 text-blue-600" />;
  }
}

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selected, setSelected] = useState<number[]>([]);

  const unreadCount = notifications.filter(n => !n.read).length;

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
    <div className="mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-semibold text-gray-900">Notifications</h1>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {unreadCount} unread
              </span>
            )}
          </div>
        </div>
        <p className="text-gray-600">Stay updated with your project activities and system alerts</p>
      </div>

      {/* Action Bar */}
      {selected.length > 0 && (
        <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 font-medium">
              {selected.length} notification{selected.length !== 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={markSelectedAsRead}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                <MailCheck className="w-4 h-4 mr-1.5" />
                Mark Read
              </button>
              <button
                onClick={markSelectedAsUnread}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1.5" />
                Mark Unread
              </button>
              <button
                onClick={deleteSelected}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-1.5" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications List */}
      <Card className="bg-white shadow-sm border-0">
        <div className="divide-y divide-gray-100">
          {/* Select All Header */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selected.length === notifications.length && notifications.length > 0}
                onChange={selectAll}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {selected.length > 0 ? `${selected.length} selected` : 'Select all'}
              </span>
            </label>
          </div>

          {/* Notifications */}
          {notifications.length === 0 ? (
            <div className="text-center py-16">
              <Bell className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-blue-50/50' : ''
                } ${selected.includes(notification.id) ? 'bg-blue-100/50' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selected.includes(notification.id)}
                    onChange={() => toggleSelect(notification.id)}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />

                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {iconForType(notification.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.sender}
                          </p>
                          {!notification.read && (
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <p
                          className={`text-sm cursor-pointer hover:text-blue-600 transition-colors ${
                            !notification.read ? 'text-gray-900 font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 ml-4">
                        <button
                          onClick={() => toggleStar(notification.id)}
                          className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
                          aria-label={notification.starred ? "Remove star" : "Add star"}
                        >
                          {notification.starred ? (
                            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                          ) : (
                            <StarOff className="w-4 h-4 text-gray-400 hover:text-amber-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}