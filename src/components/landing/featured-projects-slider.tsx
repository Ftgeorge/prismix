"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
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
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(featuredProjects.length / itemsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

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
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full py-8 xs:py-12 lg:py-28 xl:py-16 bg-white">
      <div className="max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 xs:px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-6 xs:mb-8 lg:mb-8 xl:mb-12">
          <h2 className="section-header text-xl xs:text-2xl lg:text-2xl xl:text-3xl font-bold text-center mb-4 xs:mb-6 lg:mb-0 xl:mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm xs:text-base px-2 xs:px-0">
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 xs:-ml-3 lg:-ml-4 h-8 w-8 xs:h-9 xs:w-9 lg:h-10 lg:w-10 rounded-full bg-white border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-2 xs:-mr-3 lg:-mr-4 h-8 w-8 xs:h-9 xs:w-9 lg:h-10 lg:w-10 rounded-full bg-white border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 ${currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
          </Button>

          {/* Sliding Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >

              {Array.from({ length: Math.min(totalSlides, featuredProjects.length) }).map((_, slideIndex) => {
                const startIndex = slideIndex * itemsPerView;
                const endIndex = Math.min(startIndex + itemsPerView, featuredProjects.length);
                const projectsInSlide = featuredProjects.slice(startIndex, endIndex);

                return (
                  <div
                    key={slideIndex}
                    className="flex-shrink-0 px-1 xs:px-2 lg:px-3 flex gap-2 xs:gap-4 lg:gap-6"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {projectsInSlide.map((project, projectIndex) => (
                      <div
                        key={project.title}
                        className="flex-1"
                      >
                        <Card className="h-full py-0 md:py-0 lg:py-0 xl:py-0 2xl:py-0 gap-0 xs:gap-3 lg:gap-4 overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                          {/* Project Image */}
                          <div className="relative h-56 md:h-40 lg:h-32 xl:h-56 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 xs:top-3 left-2 xs:left-3">
                              <span className={`px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                                {project.status}
                              </span>
                            </div>
                            <div className="absolute top-2 xs:top-3 right-2 xs:right-3">
                              <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                                {project.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="px-3 xs:px-4 lg:px-5 flex flex-col h-32 md:h-40 lg:h-40 xl:h-52 justify-start ">
                            <div className="h-20 xs:h-24 lg:h-16 xl:h-20">
                              {/* Location */}
                              <div className="flex items-center gap-1 pt-2 text-gray-500 mb-1 xs:mb-2">
                                <MapPin className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400" />
                                <span className="text-xs xs:text-sm lg:text-xs xl:text-sm">{project.location}</span>
                              </div>

                              {/* Project Title */}
                              <h3 className="text-sm xs:text-base lg:text-sm xl:text-lg font-semibold text-gray-900 mb-1 xs:mb-2 leading-snug line-clamp-1 xs:line-clamp-1 lg:line-clamp-1">
                                {truncateText(project.title, window.innerWidth < 640 ? 35 : 50)}
                              </h3>

                              {/* Contractor and Amount */}
                              <div className="flex flex-row xs:items-center justify-between text-sm lg:text-xs xl:text-sm text-gray-700 gap-1 xs:gap-0">
                                <div className="flex items-center gap-1 xs:gap-2">
                                  <Building2 className="w-3 h-3 xs:w-4 xs:h-4 lg:size-3 xl:size-4 text-gray-400" />
                                  <span>{truncateText(project.contractor, window.innerWidth < 640 ? 18 : 24)}</span>
                                </div>
                                <div className="flex items-center gap-1 xs:gap-2">
                                  <span className="font-semibold">{project.amount}</span>
                                </div>
                              </div>
                            </div>

                            {/* Progress + Button */}
                            <div className="flex flex-col gap-2 xs:gap-3 lg:gap-4 xl:mt-4 2xl:mt-4">
                              <div>
                                <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                                  <span>Progress</span>
                                  <span className="font-semibold text-gray-900">{project.progress}%</span>
                                </div>
                                <div className="w-full h-1.5 xs:h-2 bg-gray-200 rounded-full">
                                  <div
                                    className={`h-1.5 xs:h-2 ${progressColors[project.status]} rounded-full transition-all duration-500`}
                                    style={{ width: `${project.progress}%` }}
                                  />
                                </div>
                              </div>
                              <button
                                className={`relative group flex gap-2 justify-center items-center text-xs lg:text-xs xl:text-sm px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 text-sm md:text-sm lg:text-sm xl:text-base text-white rounded-full font-semibold transition-all duration-300 overflow-hidden bg-[#008753] hidden md:flex`}
                              >
                                <span>View Details</span>
                              </button>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1 xs:gap-2 mt-4 xs:mt-6 lg:mt-8">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                disabled={i > maxIndex}
                className={`h-1.5 xs:h-2 rounded-full transition-all duration-200 ${i === currentIndex
                  ? 'bg-[#008753] w-4 xs:w-6'
                  : 'bg-gray-300 w-1.5 xs:w-2 hover:bg-gray-400'
                  } ${i > maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}