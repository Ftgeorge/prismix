import { HelpCircle } from "lucide-react";

export default function MetricsDashboard() {
  return (
    <section className="w-full py-8 md:py-16 bg-[#f9fafb]">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0">
          <MetricCard 
            value="91.3%" 
            label="Budget Utilization" 
            bgColor="bg-gradient-to-br from-[#008753] to-[#008753]" 
            textColor="text-white"
          />
          <MetricCard 
            value="134" 
            label="Ongoing Projects" 
            bgColor="bg-gradient-to-br from-[#00875360] to-[#00875390]" 
            textColor="text-white"
          />
          <MetricCard 
            value="87%" 
            label="Public Service Satisfaction" 
            bgColor="bg-gradient-to-br from-[#f59e0b] to-[#d97706]" 
            textColor="text-white"
          />
          <MetricCard 
            value="12.6M" 
            label="Citizens Reached Digitally" 
            bgColor="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]" 
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ 
  value, 
  label, 
  bgColor, 
  textColor 
}: { 
  value: string; 
  label: string; 
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className={`${bgColor} ${textColor} px-2 py-4 sm:px-3 sm:py-5 lg:px-4 lg:py-6 xl:px-5 xl:py-8 2xl:px-6 2xl:py-10 relative flex flex-col justify-center min-h-[80px] sm:min-h-[90px] lg:min-h-[90px] xl:min-h-[125px] 2xl:min-h-[140px] hover:shadow-xl transition-shadow duration-300`}>
      <div className="text-xs sm:text-xs lg:text-xs xl:text-sm 2xl:text-sm font-medium mb-1 sm:mb-1 lg:mb-1.5 xl:mb-1.5 2xl:mb-2 opacity-90">
        {label}
      </div>
      <div className="text-xl sm:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight">
        {value}
      </div>
      <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 lg:bottom-2.5 lg:right-2.5 xl:bottom-3.5 xl:right-3.5 2xl:bottom-4 2xl:right-4">
        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 size-3.5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
      </div>
    </div>
  );
}