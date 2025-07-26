"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, Building2, DollarSign } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const featuredProjects = [
  {
    title: "Lagos-Ibadan Expressway Rehabilitation",
    status: "Ongoing",
    contractor: "Julius Berger PLC",
    amount: "₦120B",
    location: "Lagos, Oyo",
    progress: 65,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format",
    category: "Transportation"
  },
  {
    title: "Abuja Light Rail Expansion",
    status: "Completed",
    contractor: "China Civil Engineering",
    amount: "₦80B",
    location: "Abuja",
    progress: 100,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format",
    category: "Transportation"
  },
  {
    title: "Enugu Water Project",
    status: "Delayed",
    contractor: "AquaTrust Ltd",
    amount: "₦22B",
    location: "Enugu",
    progress: 40,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&auto=format",
    category: "Infrastructure"
  },
  {
    title: "Kano Solar Grid Initiative",
    status: "Ongoing",
    contractor: "GreenTech NG",
    amount: "₦15B",
    location: "Kano",
    progress: 55,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&auto=format",
    category: "Energy"
  },
  {
    title: "Port Harcourt Bridge Construction",
    status: "Planning",
    contractor: "Setraco Nigeria Ltd",
    amount: "₦45B",
    location: "Rivers",
    progress: 15,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&auto=format",
    category: "Infrastructure"
  },
  {
    title: "Kaduna Airport Expansion",
    status: "Ongoing",
    contractor: "Reynolds Construction",
    amount: "₦35B",
    location: "Kaduna",
    progress: 78,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop&auto=format",
    category: "Transportation"
  },
  {
    title: "Benin City Smart Drainage Project",
    status: "Ongoing",
    contractor: "EdoWorks Engineering",
    amount: "₦18B",
    location: "Edo",
    progress: 60,
    image: "https://images.unsplash.com/photo-1565103031652-97ff53f2b1fc?w=400&h=250&fit=crop&auto=format",
    category: "Infrastructure"
  },
  {
    title: "Maiduguri Solar Electrification",
    status: "Completed",
    contractor: "SolarWave Africa",
    amount: "₦10B",
    location: "Borno",
    progress: 100,
    image: "https://images.unsplash.com/photo-1573652636608-d5e30b3dcb06?w=400&h=250&fit=crop&auto=format",
    category: "Energy"
  },
  {
    title: "Ibadan Inland Dry Port",
    status: "Planning",
    contractor: "NSC & Partners",
    amount: "₦50B",
    location: "Oyo",
    progress: 10,
    image: "https://images.unsplash.com/photo-1559734840-9e57d5aa4bfa?w=400&h=250&fit=crop&auto=format",
    category: "Logistics"
  },
  {
    title: "Awka Smart City Project",
    status: "Ongoing",
    contractor: "Anambra Smart Dev",
    amount: "₦25B",
    location: "Anambra",
    progress: 45,
    image: "https://images.unsplash.com/photo-1584277268944-3cfe06e3a1f0?w=400&h=250&fit=crop&auto=format",
    category: "Urban Development"
  },
  {
    title: "Sokoto Irrigation Modernization",
    status: "Delayed",
    contractor: "AgroPro Africa",
    amount: "₦12B",
    location: "Sokoto",
    progress: 35,
    image: "https://images.unsplash.com/photo-1612182069333-7f17bc4b0c67?w=400&h=250&fit=crop&auto=format",
    category: "Agriculture"
  },
  {
    title: "Calabar Deep Seaport Upgrade",
    status: "Ongoing",
    contractor: "NigerDock",
    amount: "₦60B",
    location: "Cross River",
    progress: 50,
    image: "https://images.unsplash.com/photo-1616571688964-f776d8f3bb1c?w=400&h=250&fit=crop&auto=format",
    category: "Maritime"
  }
];


const statusColors: { [key: string]: string } = {
  "Ongoing": "bg-blue-500 text-white",
  "Completed": "bg-green-500 text-white",
  "Delayed": "bg-red-500 text-white",
  "Planning": "bg-yellow-500 text-white"
};

const progressColors: { [key: string]: string } = {
  "Ongoing": "bg-blue-500",
  "Completed": "bg-green-500",
  "Delayed": "bg-red-500",
  "Planning": "bg-yellow-500"
};

export default function FeaturedProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, featuredProjects.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [maxIndex]);


  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-header text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our most impactful infrastructure initiatives transforming communities
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 h-10 w-10 rounded-full bg-white border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 h-10 w-10 rounded-full bg-white border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 ${currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Sliding Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(Math.ceil(featuredProjects.length / itemsPerView)) * 100}%`
              }}
            >

              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / (Math.ceil(featuredProjects.length / itemsPerView) * itemsPerView)}%` }}
                >
                  <Card className="h-full py-0 gap-4 overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-5 flex flex-col h-56 justify-start">
                      <div className="h-28">
                        {/* Location */}
                        <div className="flex items-center gap-1 text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{project.location}</span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                          {truncateText(project.title, 50)}
                        </h3>

                        {/* Contractor and Amount */}
                        <div className="flex flex-row items-center justify-between text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <span>{truncateText(project.contractor, 24)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <span className="font-semibold">{project.amount}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress + Button */}
                      <div className="mt-4 space-y-3">
                        <div>
                          <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span className="font-semibold text-gray-900">{project.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 ${progressColors[project.status]} rounded-full transition-all duration-500`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>

                        <Button
                          size="lg"
                          className="w-full items-center rounded-full bg-[#008753] border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-white font-medium transition-all duration-200"
                        >
                          <span className="text-sm mr-2">View Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === currentIndex
                  ? 'bg-[#008753] w-6'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}