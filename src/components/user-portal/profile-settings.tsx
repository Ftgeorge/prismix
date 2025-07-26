"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProfileSettings() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">Profile</h1>
      <Card className="p-8 bg-white border border-blue-100 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Avatar & Trust Rating */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="relative w-28 h-28">
                <img
                  src={avatar || "/avatar-default.png"}
                  alt="Avatar"
                  className="rounded-full w-28 h-28 object-cover border-4 border-blue-100 shadow-sm"
                />
                <Button
                  type="button"
                  size="sm"
                  className="absolute bottom-0 right-0 bg-blue-800 text-white rounded-full px-3 py-1 text-xs shadow-md"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change
                </Button>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="flex flex-col items-center mt-2">
                <span className="font-bold text-emerald-600 text-lg">A+</span>
                <span className="text-xs text-gray-500">Gov. Trust Rating</span>
                <span className="text-[10px] text-gray-400">(based on feedback & participation)</span>
              </div>
            </div>
          </div>
          {/* Right: Form Fields */}
          <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Name</label>
              <Input type="text" placeholder="Your name" defaultValue="James" className="input input-bordered" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Email</label>
              <Input type="email" placeholder="Your email" defaultValue="james@email.com" className="input input-bordered" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Change Password</label>
              <Input type="password" placeholder="New password" className="input input-bordered" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Notification Preferences</label>
              <Input type="text" placeholder="e.g. Email, SMS" className="input input-bordered" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Button className="bg-blue-800 text-white w-full py-2 text-base font-semibold shadow hover:bg-blue-900 transition-all duration-150">Save Changes</Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
