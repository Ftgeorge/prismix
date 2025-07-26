import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const voices = [
  {
    name: "Aisha B.",
    title: "Community Leader",
    feedback: "I reported an abandoned school and got a response in days! Prismix is changing the game for real civic engagement.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    location: "Lagos, Nigeria"
  },
  {
    name: "Chinedu O.",
    title: "Local Business Owner",
    feedback: "Finally, a platform where citizens can see real project progress and hold officials accountable. Transparency at its finest!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    location: "Abuja, Nigeria"
  },
  {
    name: "Fatima S.",
    title: "Student Activist",
    feedback: "I love the transparency. My feedback was verified and acted upon. This is democracy in action!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    location: "Kano, Nigeria"
  },
  {
    name: "Tunde A.",
    title: "Tech Professional",
    feedback: "The badge system makes it fun to participate. I feel like my voice matters and creates real change!",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
    location: "Ibadan, Nigeria"
  },
];

export default function CitizenVoices() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-header text-3xl font-bold text-center mb-8">
            Voices from the Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from citizens creating meaningful change in their communities through civic engagement
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {voices.map((voice, i) => (
            <Card 
              key={i} 
              className="group relative p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#1A2A4E] rounded-b-full opacity-60"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="w-6 h-6 text-slate-400" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center h-full pt-4">
                {/* Avatar */}
                <div className="relative mb-6">
                  <Avatar className="relative">
                    <img 
                      src={voice.avatar} 
                      alt={voice.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 shadow-md group-hover:border-slate-300 transition-all duration-300" 
                    />
                  </Avatar>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(voice.rating)].map((_, starI) => (
                    <Star 
                      key={starI} 
                      className="w-4 h-4 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-slate-900 mb-1">
                  {voice.name}
                </h3>
                <p className="text-[#1A2A4E] text-sm font-medium mb-1">{voice.title}</p>
                <p className="text-xs text-slate-500 mb-6">{voice.location}</p>
                
                <blockquote className="text-slate-700 text-sm leading-relaxed flex-grow">
                  "{voice.feedback}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-slate-600 mb-6 text-lg">
              Ready to make your voice heard?
            </p>
            <Button 
              size="lg" 
              className="group px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Join the Community
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}