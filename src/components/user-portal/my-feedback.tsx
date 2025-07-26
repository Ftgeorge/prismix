import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const feedbacks = [
  { title: "Abandoned road in Agege", project: "Agege Road Rehab", status: "Open", timestamp: "2025-07-10", response: "Received. Under review." },
  { title: "Non-functional borehole", project: "Ogun Water Project", status: "Resolved", timestamp: "2025-06-22", response: "Issue fixed by contractor." },
];

export function MyFeedback() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">My Feedback</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-100 rounded-xl">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-2 text-left">Title / Project</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Timestamp</th>
              <th className="px-4 py-2 text-left">Admin Response</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb, i) => (
              <tr key={i} className="border-t border-blue-50">
                <td className="px-4 py-3">
                  <div className="font-semibold text-blue-900">{fb.title}</div>
                  <div className="text-sm text-gray-600">{fb.project}</div>
                </td>
                <td className="px-4 py-3">
                  <Badge className={fb.status === "Resolved" ? "bg-emerald-600" : "bg-blue-800"}>{fb.status}</Badge>
                </td>
                <td className="px-4 py-3 text-gray-700">{fb.timestamp}</td>
                <td className="px-4 py-3 text-gray-700">{fb.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
