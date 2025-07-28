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
    message: "Project 'Umuahia Road Expansion' status changed to Ongoing.",
    time: "Just now",
    read: false,
    starred: false,
    sender: "Project Updates"
  },
  {
    id: 2,
    type: "info",
    message: "New feedback received on 'Ariaria Smart Power Project'.",
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
    message: "Project 'Port Harcourt Road Rehabilitation (Aba)' is delayed.",
    time: "2 days ago",
    read: true,
    starred: false,
    sender: "Project Alerts"
  },
  {
    id: 5,
    type: "update",
    message: "New photos uploaded for 'Umuahia-Afikpo Road Dualization'.",
    time: "3 days ago",
    read: false,
    starred: false,
    sender: "Project Media"
  },
  {
    id: 6,
    type: "info",
    message: "Town hall feedback received on 'Osusu Road Drainage System'.",
    time: "4 days ago",
    read: true,
    starred: false,
    sender: "Community"
  },
  {
    id: 7,
    type: "success",
    message: "'Abia Innovation Hub' successfully commissioned.",
    time: "1 week ago",
    read: true,
    starred: true,
    sender: "Governor's Office"
  },
  {
    id: 8,
    type: "warning",
    message: "'Bende-Itumbauzo Road' construction may face weather delays.",
    time: "1 week ago",
    read: false,
    starred: false,
    sender: "Project Alerts"
  }
];

function iconForType(type: string) {
  switch (type) {
    case "update":
      return <Bell className="w-4 h-4 text-primary/80" />;
    case "success":
      return <CheckCircle className="w-4 h-4 text-primary/70" />;
    case "info":
      return <Info className="w-4 h-4 text-primary/60" />;
    case "warning":
      return <AlertTriangle className="w-4 h-4 text-amber-600" />;
    default:
      return <Bell className="w-4 h-4 text-primary/80" />;
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
    <div className="mx-auto p-6 2xl:p-8 xl:p-6 lg:p-5 md:p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 2xl:mb-8 xl:mb-6 lg:mb-5 md:mb-4">
        <div className="flex items-center justify-between mb-6 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3">
          <h1 className="text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold text-blue-900 flex items-center gap-2">
            Notifications
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center px-2 2xl:px-2 xl:px-2 lg:px-1.5 md:px-1 py-0.5 rounded-full text-xs 2xl:text-xs xl:text-xs lg:text-xs md:text-[11px] font-semibold bg-blue-100 text-blue-700">
                {unreadCount}
              </span>
            )}
          </h1>
          <button className="text-gray-500 hover:text-blue-700 transition-colors" aria-label="More actions">
            <MoreVertical className="w-6 h-6 2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 lg:w-5 lg:h-5 md:w-4 md:h-4" />
          </button>
        </div>
        <p className="text-gray-600 2xl:text-sm xl:text-sm lg:text-xs md:text-[11px]">Stay updated with your project activities and system alerts</p>
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
          <div className="flex items-center gap-4 2xl:gap-4 xl:gap-3 lg:gap-3 md:gap-2 mb-2 2xl:mb-2 xl:mb-2 lg:mb-1 md:mb-1 px-2 2xl:px-2 xl:px-2 lg:px-1 md:px-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={selected.length === notifications.length}
                onChange={selectAll}
                className="accent-primary w-4 h-4 2xl:w-4 2xl:h-4 xl:w-4 xl:h-4 lg:w-3.5 lg:h-3.5 md:w-3 md:h-3"
                aria-label="Select all notifications"
              />
              <span className="ml-3 text-sm 2xl:text-sm xl:text-xs lg:text-xs md:text-[11px] font-medium text-gray-700">
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
                    className="mt-1 h-4 w-4 text-primary/80 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
                          className={`text-sm cursor-pointer hover:text-primary/80 transition-colors ${
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