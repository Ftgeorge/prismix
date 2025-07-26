import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProfileSettings() {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Profile Settings</h1>
      <Card className="p-6 flex flex-col gap-4 bg-white border border-blue-100">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Name</label>
          <Input type="text" placeholder="Your name" defaultValue="James" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Email</label>
          <Input type="email" placeholder="Your email" defaultValue="james@email.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Change Password</label>
          <Input type="password" placeholder="New password" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Upload Avatar</label>
          <Input type="file" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Notification Preferences</label>
          <Input type="text" placeholder="e.g. Email, SMS" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Government Trust Rating</label>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-emerald-600">A+</span>
            <span className="text-xs text-gray-500">(based on feedback accuracy & participation)</span>
          </div>
        </div>
        <Button className="bg-blue-800 text-white mt-4">Save Changes</Button>
      </Card>
    </div>
  );
}
