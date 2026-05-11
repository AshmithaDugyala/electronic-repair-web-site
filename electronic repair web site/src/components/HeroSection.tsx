import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onGetQuote: () => void;
}

export function HeroSection({ onGetQuote }: HeroSectionProps) {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
              Professional Repair Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Electronic Device{" "}
              <span className="text-emerald-400">Repair Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Fast, reliable, and affordable repair services for all your electronic devices. 
              Our certified technicians bring your devices back to life with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onGetQuote}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Get Free Diagnosis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                View Pricing
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Same Day Service</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">15K+</div>
                  <div className="text-slate-300 text-sm">Devices Repaired</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                  <div className="text-slate-300 text-sm">Success Rate</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">24hr</div>
                  <div className="text-slate-300 text-sm">Avg. Turnaround</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">4.9★</div>
                  <div className="text-slate-300 text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600 rounded-xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500 rounded-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}