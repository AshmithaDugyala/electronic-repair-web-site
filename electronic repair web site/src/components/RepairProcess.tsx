import { Clock, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnosis",
    description: "Our experts thoroughly examine your device to identify all issues and provide an accurate repair quote.",
    duration: "30 min",
    color: "bg-blue-500",
  },
  {
    icon: Clock,
    title: "Quote & Approval",
    description: "Receive a detailed breakdown of costs and repair timeline. No hidden fees, ever.",
    duration: "15 min",
    color: "bg-amber-500",
  },
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "Certified technicians perform the repair using genuine parts and industry-best practices.",
    duration: "2-24 hrs",
    color: "bg-emerald-500",
  },
  {
    icon: CheckCircle,
    title: "Quality Check & Pickup",
    description: "Every device undergoes rigorous testing before being returned with a 90-day warranty.",
    duration: "1 hr",
    color: "bg-purple-500",
  },
];

export function RepairProcess() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Streamlined Repair Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From diagnosis to delivery, we ensure a smooth and transparent repair experience
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 mb-2">STEP {index + 1}</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-8 right-0 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}