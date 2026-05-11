import { useState } from "react";
import { Menu, X, Phone, Clock, Shield, ArrowLeft } from "lucide-react";

interface HeaderProps {
  onNavigateHome?: () => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">TechFix Pro</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onNavigateHome}
              className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </button>
            <a href="#process" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
              Repair Process
            </a>
            <a href="#devices" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
              Devices
            </a>
            <a href="#diagnose" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
              Diagnose
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={onNavigateHome}
                className="text-slate-600 hover:text-emerald-600 font-medium text-left"
              >
                Home
              </button>
              <a href="#process" className="text-slate-600 hover:text-emerald-600 font-medium">
                Repair Process
              </a>
              <a href="#devices" className="text-slate-600 hover:text-emerald-600 font-medium">
                Devices
              </a>
              <a href="#diagnose" className="text-slate-600 hover:text-emerald-600 font-medium">
                Diagnose
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}