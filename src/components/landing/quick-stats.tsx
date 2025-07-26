import { HelpCircle } from "lucide-react";

export default function MetricsDashboard() {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4">
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
    <div className={`${bgColor} ${textColor} px-6 py-10 relative flex flex-col justify-center min-h-[140px] hover:shadow-xl transition-shadow duration-300`}>
      <div className="text-sm font-medium mb-2 opacity-90">
        {label}
      </div>
      <div className="text-4xl md:text-5xl font-bold tracking-tight">
        {value}
      </div>
      <div className="absolute bottom-4 right-4">
        <HelpCircle className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
      </div>
    </div>
  );
}
