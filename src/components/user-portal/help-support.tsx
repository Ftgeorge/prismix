"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, HelpCircle, BookOpen, ChevronDown, ChevronUp, Search, MessageCircle, Phone, FileText, ExternalLink, Send } from "lucide-react";

const faqs = [
  {
    id: 1,
    category: "Getting Started",
    q: "How do I follow a project?",
    a: "Browse to the Explore Projects page, then click the star icon on any project card to follow or unfollow it. You'll receive notifications about project updates and milestones.",
  },
  {
    id: 2,
    category: "Privacy",
    q: "Can I submit feedback anonymously?",
    a: "Yes, you can use Guest mode to submit feedback without creating an account. However, creating an account allows you to track your feedback status and receive responses.",
  },
  {
    id: 3,
    category: "Account",
    q: "How do I update my profile information?",
    a: "Go to Profile Settings in the portal sidebar and edit your details, then save. You can update your name, email, notification preferences, and other account settings.",
  },
  {
    id: 4,
    category: "Privacy",
    q: "Who can see my feedback?",
    a: "Only project administrators and moderators can view individual feedback details. Your personal information is kept confidential and is never shared publicly.",
  },
  {
    id: 5,
    category: "Projects",
    q: "How are project updates communicated?",
    a: "Project updates are shared through notifications, email alerts (if enabled), and status updates on the project pages. Follow projects you're interested in to stay informed.",
  },
  {
    id: 6,
    category: "Technical",
    q: "What browsers are supported?",
    a: "Our platform works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.",
  },
];

const resources = [
  { title: "User Guide", status: "Available", link: "#", icon: FileText },
  { title: "Project Transparency Policy", status: "Available", link: "#", icon: FileText },
  { title: "FAQ for Contributors", status: "Available", link: "#", icon: FileText },
  { title: "API Documentation", status: "Coming Soon", link: "#", icon: FileText },
];

export default function HelpSupport() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Help & Support</h1>
            <p className="text-gray-600">Find answers to common questions and get the help you need</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-white border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-600">Get instant help</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-white border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Email Support</h3>
                <p className="text-sm text-gray-600">support@prismix.ng</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-white border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Phone Support</h3>
                <p className="text-sm text-gray-600">Mon-Fri, 9AM-5PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <Card className="p-8 text-center bg-white border-0 shadow-sm">
                  <HelpCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </Card>
              ) : (
                filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="bg-white border-0 shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="font-medium text-gray-900">{faq.q}</h3>
                        </div>
                        {expandedFaq === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us Feedback</h2>
            <Card className="bg-white border-0 shadow-sm">
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Brief description of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical"
                    placeholder="Let us know your thoughts, issues, or suggestions..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Guides & Resources
            </h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <Card key={index} className="p-4 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <resource.icon className="w-4 h-4 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-xs text-gray-500">{resource.status}</p>
                      </div>
                    </div>
                    {resource.status === "Available" && (
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <Card className="bg-white border-0 shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-600" />
                Contact Support
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a href="mailto:support@prismix.ng" className="text-blue-600 hover:text-blue-800">
                    support@prismix.ng
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Response Time</p>
                  <p className="text-gray-600">Usually within 24 hours</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday<br />9:00 AM - 5:00 PM WAT</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}