import { Smartphone, Laptop, Tablet, Watch, Tv, Headphones } from "lucide-react";

const devices = [
  {
    icon: Smartphone,
    name: "Smartphones",
    issues: ["Cracked Screen", "Battery Issues", "Water Damage", "Charging Port"],
    price: "From $49",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Laptop,
    name: "Laptops",
    issues: ["Screen Repair", "Keyboard Replacement", "Motherboard", "Data Recovery"],
    price: "From $89",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Tablet,
    name: "Tablets",
    issues: ["Screen Repair", "Battery Swap", "Port Repair", "Software Issues"],
    price: "From $69",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Watch,
    name: "Smartwatches",
    issues: ["Screen Fix", "Battery", "Strap Repair", "Sensor Issues"],
    price: "From $39",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Tv,
    name: "TVs & Monitors",
    issues: ["Screen Issues", "Power Problems", "HDMI Ports", "Backlight"],
    price: "From $99",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Headphones,
    name: "Audio Devices",
    issues: ["Speaker Repair", "Cable Fix", "Bluetooth", "Charging Case"],
    price: "From $29",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
];

interface DeviceCategoriesProps {
  onSelectDevice: (device: string) => void;
}

export function DeviceCategories({ onSelectDevice }: DeviceCategoriesProps) {
  return (
    <section id="devices" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Devices We Repair
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional repair services for a wide range of electronic devices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${device.bgColor} rounded-xl flex items-center justify-center`}>
                  <device.icon className={`w-7 h-7 ${device.color}`} />
                </div>
                <span className="text-lg font-bold text-emerald-600">{device.price}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">{device.name}</h3>

              <ul className="space-y-2 mb-6">
                {device.issues.map((issue, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                    {issue}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectDevice(device.name)}
                className="w-full bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white py-2 rounded-lg font-medium transition-colors"
              >
                Get Repair Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}