import { Card } from "@/components/ui/card";
import { Building2, Hospital, BookOpen, Zap, Leaf, MoreHorizontal } from "lucide-react";

const categories = [
  { 
    icon: Building2, 
    title: "Roads & Infrastructure", 
    color: "bg-primary/10 text-primary/80",
    hoverColor: "from-primary/10 to-primary/5",
    description: "Building the backbone of modern society with roads, bridges, and essential infrastructure.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
  },
  { 
    icon: Hospital, 
    title: "Health & Hospitals", 
    color: "bg-primary/10 text-primary/80",
    hoverColor: "from-primary/10 to-primary/5",
    description: "Advancing healthcare facilities and medical infrastructure for community wellness.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop"
  },
  { 
    icon: BookOpen, 
    title: "Education", 
    color: "bg-amber-100 text-amber-700",
    hoverColor: "from-amber-600/10 to-amber-400/5",
    description: "Creating learning environments that inspire and empower future generations.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
  },
  { 
    icon: Zap, 
    title: "Utilities", 
    color: "bg-sky-100 text-sky-700",
    hoverColor: "from-sky-600/10 to-sky-400/5",
    description: "Powering communities with reliable electricity, water, and telecommunications.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
  },
  { 
    icon: Leaf, 
    title: "Environment", 
    color: "bg-green-100 text-green-700",
    hoverColor: "from-green-600/10 to-green-400/5",
    description: "Protecting our planet through sustainable practices and environmental conservation.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
  },
  { 
    icon: MoreHorizontal, 
    title: "Others", 
    color: "bg-gray-100 text-gray-700",
    hoverColor: "from-gray-600/10 to-gray-400/5",
    description: "Diverse projects that contribute to community development and social progress.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
  },
];

export function ProjectCategories() {
  return (
    <section className="w-full py-8 xs:py-10 sm:py-12 md:py-16 bg-[#f9fafb]">
      <div className="max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 xs:px-4 lg:px-10">
        <h2 className="section-header text-xl xs:text-2xl lg:text-2xl xl:text-3xl font-bold text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8">
          Project Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {categories.map((cat) => (
            <Card key={cat.title} className="group py-0 lg:py-0 xl:py-0 2xl:py-0 relative overflow-hidden rounded-3xl shadow-md xs:shadow-lg hover:shadow-xl xs:hover:shadow-2xl transition-all duration-300 cursor-pointer border border-blue-100 bg-white transform hover:-translate-y-1 xs:hover:-translate-y-2">
              {/* Parallelogram Image */}
              <div className="relative h-44 md:h-36 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform skew-y-1 scale-110 transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" style={{clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'}} />
              </div>
              
              {/* Content */}
              <div className="relative p-4 md:p-5 -mt-4 md:-mt-5 bg-white rounded-t-xl xs:rounded-t-xl sm:rounded-t-2xl">
                <div className="flex items-center mb-2.5 md:mb-3">
                  <div className={`rounded-full p-2 md:p-2.5 mr-2.5 ${cat.color} group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                    <cat.icon className="h-5 md:w-5 md:h-5 lg:size-3 xl:size-5" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-serif font-bold text-blue-900 transition-colors duration-200 leading-tight">
                    {cat.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm lg:text-xs xl:text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}