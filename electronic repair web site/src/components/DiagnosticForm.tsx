import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const deviceTypes = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Smartwatch",
  "TV/Monitor",
  "Audio Device",
  "Gaming Console",
  "Other",
];

const commonIssues = [
  "Screen Damage",
  "Battery Problems",
  "Won't Turn On",
  "Water Damage",
  "Software Issues",
  "Port/Charging Issues",
  "Overheating",
  "Other",
];

interface DiagnosticFormProps {
  selectedDevice: string | null;
}

export function DiagnosticForm({ selectedDevice }: DiagnosticFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: selectedDevice || "",
    issue: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="diagnose" className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Request Submitted!</h2>
          <p className="text-slate-600 mb-8">
            Our technicians will review your case and contact you within 2 hours with a detailed diagnosis and quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnose" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
              Free Diagnosis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Describe Your Device Issue
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get a free diagnostic assessment and repair quote. Our experts will analyze your device's problem and provide a detailed solution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Fill the Form</h4>
                  <p className="text-sm text-slate-600">Tell us about your device and the issue you're experiencing</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Get Free Quote</h4>
                  <p className="text-sm text-slate-600">Receive a detailed diagnosis and transparent pricing within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Schedule Repair</h4>
                  <p className="text-sm text-slate-600">Book a convenient time for drop-off or pickup service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-700 font-medium mb-1.5">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full mt-1.5 bg-white border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-slate-700 font-medium mb-1.5">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full mt-1.5 bg-white border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-1.5">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full mt-1.5 bg-white border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Device Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {deviceTypes.map((device) => (
                    <button
                      key={device}
                      type="button"
                      onClick={() => setFormData({ ...formData, deviceType: device })}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        formData.deviceType === device
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-slate-600 border-slate-300 hover:border-emerald-600"
                      }`}
                    >
                      {device}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Primary Issue</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {commonIssues.map((issue) => (
                    <button
                      key={issue}
                      type="button"
                      onClick={() => setFormData({ ...formData, issue })}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        formData.issue === issue
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-slate-600 border-slate-300 hover:border-emerald-600"
                      }`}
                    >
                      {issue}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-slate-700 font-medium mb-1.5">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  placeholder="Describe what happened, when the issue started, and any other relevant details..."
                  rows={4}
                  className="w-full mt-1.5 bg-white border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get Free Diagnosis
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}