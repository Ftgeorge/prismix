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
        <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-2">
          <HelpCircle className="w-7 h-7 text-blue-700" /> Help & Support
        </h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h3>
          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6 border border-blue-100 shadow-sm rounded-xl bg-blue-50/40">
                <div className="font-semibold text-blue-900 mb-1">Q: {faq.q}</div>
                <div className="text-gray-700">A: {faq.a}</div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-500" /> Guides & Resources</h3>
          <ul className="list-disc pl-6 text-blue-700">
            <li>User Guide (coming soon)</li>
            <li>Project Transparency Policy</li>
            <li>FAQ for Contributors</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2"><Mail className="w-6 h-6 text-emerald-600" /> Contact Support</h3>
          <p>For further assistance, email <a href="mailto:support@prismix.ng" className="text-emerald-600 underline">support@prismix.ng</a>.</p>
        </div>

        {/* Feedback Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Send Us Feedback</h3>
          <form className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm flex flex-col gap-4 max-w-xl">
            <div>
              <label htmlFor="feedback-name" className="block text-sm font-medium text-blue-900 mb-1">Name</label>
              <input id="feedback-name" name="name" type="text" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-blue-200 focus:border-blue-400" placeholder="Your name (optional)" />
            </div>
            <div>
              <label htmlFor="feedback-email" className="block text-sm font-medium text-blue-900 mb-1">Email</label>
              <input id="feedback-email" name="email" type="email" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-blue-200 focus:border-blue-400" placeholder="Your email (optional)" />
            </div>
            <div>
              <label htmlFor="feedback-message" className="block text-sm font-medium text-blue-900 mb-1">Message</label>
              <textarea id="feedback-message" name="message" rows={4} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-blue-200 focus:border-blue-400" placeholder="Let us know your thoughts, issues, or suggestions..." />
            </div>
            <button type="submit" className="bg-blue-800 text-white font-semibold rounded-md px-6 py-2 mt-2 hover:bg-blue-900 transition-all">Submit Feedback</button>
          </form>
        </div>
      </div>
    </section>
  );
}
