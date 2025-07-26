"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera, User, Mail, Lock, Bell, Shield, CheckCircle } from "lucide-react";

export function ProfileSettings() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@email.com",
    phone: "+1 (555) 123-4567",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Profile updated:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 2xl:py-8 xl:py-7 lg:py-6 md:py-5 px-4 2xl:px-4 xl:px-3 lg:px-3 md:px-2">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 2xl:mb-8 xl:mb-6 lg:mb-5 md:mb-4">
          <h1 className="text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold text-primary mb-2">Profile Settings</h1>
          <p className="text-gray-600 2xl:text-base xl:text-sm lg:text-xs md:text-xs">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Avatar & Trust Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white border border-primary/20 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Avatar Section */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-primary/20 overflow-hidden bg-gray-100">
                    {avatar ? (
                      <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-50">
                        <User className="w-12 h-12 text-blue-300" />
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </div>

                {/* User Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{formData.email}</p>

                {/* Trust Rating */}
                <div className="bg-emerald-50 rounded-lg p-4 w-full">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-2xl font-bold text-emerald-600">A+</span>
                  </div>
                  <p className="text-sm font-medium text-emerald-700">Government Trust Rating</p>
                  <p className="text-xs text-emerald-600 mt-1">Based on feedback & participation</p>
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-1" />
                    <span className="text-xs text-emerald-600">Verified Account</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content - Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="p-6 bg-white border border-primary/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-primary/80 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>

              {/* Security Settings */}
              <Card className="p-6 bg-white border border-primary/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <Lock className="w-5 h-5 text-primary/80 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Security</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <Input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange("newPassword", e.target.value)}
                      placeholder="Enter new password"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Leave blank to keep current password. Password must be at least 8 characters.
                </p>
              </Card>

              {/* Notification Preferences */}
              <Card className="p-6 bg-white border border-primary/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <Bell className="w-5 h-5 text-primary/80 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-xs text-gray-500">Receive updates via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.emailNotifications}
                        onChange={(e) => handleInputChange("emailNotifications", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                      <p className="text-xs text-gray-500">Receive updates via text message</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.smsNotifications}
                        onChange={(e) => handleInputChange("smsNotifications", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                      <p className="text-xs text-gray-500">Receive browser push notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.pushNotifications}
                        onChange={(e) => handleInputChange("pushNotifications", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={() => console.log("Profile updated:", formData)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}