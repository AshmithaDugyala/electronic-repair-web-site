import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">TechFix Pro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional electronic device repair services with certified technicians and genuine parts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Screen Repair</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Battery Replacement</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Water Damage Recovery</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Data Recovery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">FAQs</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Warranty Info</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Track Repair</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                +1 (800) 555-TECH
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                support@techfixpro.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 TechFix Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}