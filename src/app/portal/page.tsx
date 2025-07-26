import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Send, Search, Medal } from "lucide-react";

const user = {
  name: "James",
  followed: 4,
  feedback: 7,
  witnessLevel: "Silver",
};

const recentActivity = [
  { type: "report", text: "You reported: Abandoned road in Agege" },
  { type: "response", text: "Lagos MDA responded to your feedback." },
];

const suggestions = [
  { title: "Ogun Water Project", location: "Ogun", trending: true },
  { title: "Enugu School Renovation", location: "Enugu", trending: false },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top Section: Welcome and Stats */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">Welcome back, {user.name}!</h1>
          <div className="flex gap-4 mt-4">
            <StatCard label="Projects Followed" value={user.followed} icon={<Star className="w-5 h-5 text-amber-500" />} />
            <StatCard label="Feedback Submitted" value={user.feedback} icon={<Send className="w-5 h-5 text-blue-800" />} />
            <StatCard label="Witness Level" value={user.witnessLevel} icon={<Medal className="w-5 h-5 text-emerald-600" />} />
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <Button size="lg" className="bg-blue-800 text-white w-52">Track New Project</Button>
          <Button size="lg" variant="outline" className="w-52 border-blue-800 text-blue-800">Report an Issue</Button>
          <Button size="lg" variant="secondary" className="w-52 bg-emerald-600 text-white">Search Projects</Button>
        </div>
      </div>
      {/* Middle Section: Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Recent Activity</h2>
        <div className="flex flex-col gap-2">
          {recentActivity.map((item, i) => (
            <Card key={i} className="p-4 flex items-center gap-3 bg-white border-l-4 border-blue-800/60">
              <span className="text-blue-800 font-bold">•</span>
              <span className="text-gray-700">{item.text}</span>
            </Card>
          ))}
        </div>
      </div>
      {/* Bottom Section: Suggestions */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Suggested Projects</h2>
        <div className="flex gap-4">
          {suggestions.map((s, i) => (
            <Card key={i} className="p-6 min-w-[220px] flex flex-col gap-3 bg-blue-50 border border-blue-100">
              <span className="font-semibold text-blue-900 text-lg">{s.title}</span>
              <span className="text-sm text-gray-600">{s.location}</span>
              {s.trending && <Badge className="bg-amber-400 text-white">Trending</Badge>}
              <Button size="sm" variant="secondary" className="bg-blue-800 text-white mt-2">View</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return (
    <Card className="flex items-center gap-3 px-6 py-4 bg-blue-50 border border-blue-200 min-w-[170px]">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-900">{value}</span>
        <span className="text-xs text-gray-700">{label}</span>
      </div>
    </Card>
  );
}
