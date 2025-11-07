import { ArrowRight } from "lucide-react";

// --- ADD THESE IMPORTS ---
import businessImage from '../assets/sec1_business.png';
import projectsImage from '../assets/sec2_projects.png';
import servicesImage from '../assets/sec3_services.png';

export default function BusinessAreas() {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          <div className="flex-col justify-items-center">
            {/* --- THIS IS THE CHANGED LINE --- */}
            <img src={businessImage} alt="BUSINESS" className="h-[150px] w-[150px] border-2 border-[#acc8df] rounded-[]" />
            <div className="font-bold text-black text-[25px]">BUSINESSES</div>
          </div>
          
          <div className="flex-col justify-items-center">
            {/* --- THIS IS THE CHANGED LINE --- */}
            <img src={projectsImage} alt="PROJECTS" className="h-[150px] w-[150px] border-2 border-[#acc8df] rounded-[]" />
            <div className="font-bold text-black text-[25px]">PROJECTS</div>
          </div>
          
          <div className="flex-col justify-items-center">
            {/* --- THIS IS THE CHANGED LINE --- */}
            <img src={servicesImage} alt="SERVICES" className="h-[150px] w-[150px] border-2 border-[#acc8df] rounded-[]" />
            <div className="font-bold text-black text-[25px]">SERVICES</div>
          </div>

        </div>
      </div>
    </section>
  );
}