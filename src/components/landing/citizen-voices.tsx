import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const voices = [
  {
    name: "Adaeze N.",
    title: "Community Organizer",
    feedback:
      "I reported a broken bridge and got feedback within days. Prism truly empowers our voices!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010",
    rating: 5,
    location: "Enugu, Nigeria",
  },
  {
    name: "Ifeanyi U.",
    title: "Local Trader",
    feedback:
      "For the first time, I feel like someone is actually listening to our community’s issues.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010",
    rating: 5,
    location: "Onitsha, Nigeria",
  },
  {
    name: "Chinonso M.",
    title: "Youth Advocate",
    feedback:
      "This is the kind of civic tech we need. It’s easy to use and gets real results.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010",
    rating: 5,
    location: "Awka, Nigeria",
  },
  {
    name: "Obinna K.",
    title: "Tech Enthusiast",
    feedback:
      "The gamification makes engagement fun. I log in daily just to check project progress!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010",
    rating: 5,
    location: "Umuahia, Nigeria",
  },
];

export default function CitizenVoices() {
  return (
    <section className="w-full py-6 xs:py-8 sm:py-16 md:py-20 lg:py-16 xl:py-18 2xl:py-20 bg-white">
      <div className="max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 xs:px-4 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="section-header text-xl xs:text-2xl lg:text-2xl xl:text-3xl font-bold text-center mb-2 xs:mb-3 sm:mb-6 md:mb-8 lg:mb-2 xl:mb-8">
            Voices from the Abians 
          </h2>
          <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-sm xl:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-0">
            Real stories from citizens creating meaningful change in their communities through civic engagement
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-6 md:gap-8 lg:gap-2 xl:gap-3 2xl:gap-6 my-6 xs:my-8 sm:my-12 md:my-12 lg:my-4 xl:my-10 2xl:my-12">
          {voices.map((voice, i) => (
            <Card
              key={i}
              className="group relative p-3 xs:p-4 sm:p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-2 right-2 xs:left-3 xs:right-3 sm:left-5 sm:right-5 md:left-6 md:right-6 h-0.5 bg-[#008753] rounded-b-full opacity-60"></div>

              {/* Quote icon */}
              <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-5 sm:right-5 md:top-6 md:right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="w-3 h-3 xs:w-4 xs:h-4 w-5 h-5 md:w-6 md:h-6 text-slate-400" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center h-full pt-1 xs:pt-2 sm:pt-3 md:pt-4">
                {/* Avatar */}
                <div className="relative mb-5 md:mb-6">
                  <Avatar className="relative">
                    <img
                      src={voice.avatar}
                      alt={voice.name}
                      className="rounded-full object-cover border-2 border-slate-200 shadow-md group-hover:border-slate-300 transition-all duration-300"
                    />
                  </Avatar>
                </div>

                {/* Rating stars */}
                <div className="flex gap-0.5 xs:gap-0.5 sm:gap-1 mb-1 xs:mb-2 sm:mb-4 md:mb-5">
                  {[...Array(voice.rating)].map((_, starI) => (
                    <Star
                      key={starI}
                      className="w-4 h-4 lg:size-3 xl:size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg lg:text-sm xl:text-lg text-slate-900 mb-0.5 xs:mb-0.5">
                  {voice.name}
                </h3>
                <p className="text-[#008753] text-sm lg:text-xs xl:text-sm font-medium mb-0.5 xs:mb-0.5">{voice.title}</p>
                <p className="text-xs text-slate-500 mb-5 md:mb-6">{voice.location}</p>

                <blockquote className="text-slate-700 text-sm lg:text-xs xl:text-sm leading-relaxed flex-grow">
                  "{voice.feedback}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-slate-600 mb-5 md:mb-6 lg:mb-3 xl:mb-6 text-lg lg:text-sm xl:text-lg">
              Ready to make your voice heard?
            </p>
            <button className="relative group flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-[#008753] text-sm md:text-sm lg:text-sm xl:text-base text-white rounded-full font-semibold transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 relative z-10">
                Join the Community
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}