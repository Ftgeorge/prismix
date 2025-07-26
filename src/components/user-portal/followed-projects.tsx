import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const followed = [
  { title: "Lagos-Ibadan Expressway", progress: 65, notifications: true },
  { title: "Enugu Water Project", progress: 40, notifications: false },
];

export function FollowedProjects() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Followed Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {followed.map((proj, i) => (
          <Card key={i} className="p-6 flex flex-col gap-3 bg-white border border-blue-100">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-900 text-lg">{proj.title}</span>
              <Switch checked={proj.notifications} />
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: `${proj.progress}%` }}></div>
            </div>
            <span className="text-xs text-gray-500 mt-1">Progress: {proj.progress}%</span>
            <Button size="sm" variant="outline" className="mt-2 border-blue-800 text-blue-800">Unfollow</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
