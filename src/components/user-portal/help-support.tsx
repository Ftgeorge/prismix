"use client";
import { Card } from "@/components/ui/card";
import { Mail, HelpCircle, BookOpen } from "lucide-react";

const faqs = [
  {
    q: "How do I follow a project?",
    a: "Browse to the Explore Projects page, then click the star icon on any project card to follow or unfollow it.",
  },
  {
    q: "Can I submit feedback anonymously?",
    a: "Yes, you can use Guest mode to submit feedback without creating an account.",
  },
  {
    q: "How do I update my profile information?",
    a: "Go to Profile Settings in the portal sidebar and edit your details, then save.",
  },
  {
    q: "Who can see my feedback?",
    a: "Only project administrators and moderators can view individual feedback details.",
  },
];

export default function HelpSupport() {
  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 flex items-center gap-2">
          <HelpCircle className="w-7 h-7 text-blue-500" /> Help & Support
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-5 border-blue-100 shadow-md rounded-2xl">
                <div className="font-semibold text-blue-900 mb-1">Q: {faq.q}</div>
                <div className="text-gray-700">A: {faq.a}</div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-400" /> Guides & Resources</h3>
          <ul className="list-disc pl-6 text-blue-700">
            <li>User Guide (coming soon)</li>
            <li>Project Transparency Policy</li>
            <li>FAQ for Contributors</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Mail className="w-6 h-6 text-emerald-500" /> Contact Support</h3>
          <p>For further assistance, email <a href="mailto:support@prismix.ng" className="text-emerald-600 underline">support@prismix.ng</a>.</p>
        </div>
      </div>
    </section>
  );
}
