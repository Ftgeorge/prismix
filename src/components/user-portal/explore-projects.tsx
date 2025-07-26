"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Star, StarOff } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "Lagos-Ibadan Expressway Rehabilitation",
    category: "Transportation",
    location: "Lagos, Oyo",
    status: "Ongoing",
    description: "Major expressway upgrade for safer, faster travel.",
    followed: false,
  },
  {
    id: 2,
    title: "Enugu Water Project",
    category: "Infrastructure",
    location: "Enugu",
    status: "Delayed",
    description: "Expanding clean water access to rural communities.",
    followed: true,
  },
  {
    id: 3,
    title: "Abuja Light Rail Expansion",
    category: "Transportation",
    location: "Abuja",
    status: "Completed",
    description: "Modern light rail for urban mobility.",
    followed: false,
  },
  {
    id: 4,
    title: "Kano Solar Grid Initiative",
    category: "Energy",
    location: "Kano",
    status: "Ongoing",
    description: "Solar microgrids for sustainable power.",
    followed: false,
  },
  {
    id: 5,
    title: "Port Harcourt Bridge Construction",
    category: "Infrastructure",
    location: "Rivers",
    status: "Planning",
    description: "New bridge to ease traffic and boost trade.",
    followed: false,
  },
];

export default function ExploreProjects() {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState(mockProjects);
  const [filter, setFilter] = useState("All");

  const handleFollow = (id: number) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, followed: !p.followed } : p
      )
    );
  };

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Explore Projects</h2>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search by title or location..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="rounded-full px-6 py-2 border-blue-200 focus:border-blue-400 shadow-sm text-base w-64"
            />
            <Button variant="outline" className="rounded-full px-4 flex gap-2 items-center">
              <Filter className="w-4 h-4" /> Filters
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              className="rounded-full px-5 py-1 text-sm font-medium"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12 text-lg">
              No projects found.
            </div>
          ) : (
            filtered.map((project) => (
              <Card key={project.id} className="p-6 flex flex-col gap-3 border-blue-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-900 font-semibold mr-2">
                      {project.category}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                      {project.status}
                    </span>
                  </div>
                  <Button
                    size="icon"
                    variant={project.followed ? "default" : "outline"}
                    className="rounded-full"
                    aria-label={project.followed ? "Unfollow" : "Follow"}
                    onClick={() => handleFollow(project.id)}
                  >
                    {project.followed ? <Star className="w-5 h-5 text-emerald-500" /> : <StarOff className="w-5 h-5 text-blue-400" />}
                  </Button>
                </div>
                <div className="font-bold text-lg text-blue-900 mb-1">{project.title}</div>
                <div className="text-gray-600 text-sm mb-1">{project.description}</div>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span>{project.location}</span>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
