import { useState } from "react";
import { ArrowLeft, Send, Loader2, CheckCircle, Shield, Clock, Award } from "lucide-react";

const deviceTypes = [
  { name: "Smartphone", icon: "📱", price: "From $49" },
  { name: "Laptop", icon: "💻", price: "From $89" },
  { name: "Tablet", icon: "📟", price: "From $69" },
  { name: "Smartwatch", icon: "⌚", price: "From $39" },
  { name: "TV/Monitor", icon: "🖥️", price: "From $99" },
  { name: "Audio Device", icon: "🎧", price: "From $29" },
  { name: "Gaming Console", icon: "🎮", price: "From $79" },
  { name: "Other", icon: "🔧", price: "Contact Us" },
];

const commonIssues = [
  "Screen Damage",
  "Battery Problems",
  "Won't Turn On",
  "Water Damage",
  "Software Issues",
  "Port/Charging Issues",
  "Overheating",
  "Speaker/Audio Issues",
  "Camera Problems",
  "Other",
];

interface QuotePageProps {
  selectedDevice?: string | null;
  onBack: () => void;
}

export function QuotePage({ selectedDevice, onBack }: QuotePageProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    deviceType: selectedDevice || "",
    brand: "",
    model: "",
    issue: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
  });

  const handleDeviceSelect = (device: string) => {
    setFormData({ ...formData, deviceType: device });
  };

  const handleIssueSelect = (issue: string) => {
    setFormData({ ...formData, issue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-16">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Quote Request Submitted!
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Thank you! Our expert technicians will review your request and contact you within 2 hours with a detailed repair quote.
          </p>
          <div className="bg-white rounded-xl p-6 mb-8 border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-sm">1</span>
                </div>
                <span className="text-slate-600">Our team reviews your device issue</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-sm">2</span>
                </div>
                <span className="text-slate-600">You receive a detailed cost estimate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-sm">3</span>
                </div>
                <span className="text-slate-600">Schedule your repair at a convenient time</span>
              </div>
            </div>
          </div>
          <button
            onClick={onBack}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-slate-50 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Get Your Free Repair Quote
          </h1>
          <p className="text-lg text-slate-600">
            Tell us about your device and we'll provide a detailed repair estimate
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              1
            </div>
            <span className={`font-medium ${step >= 1 ? 'text-emerald-600' : 'text-slate-500'}`}>
              Device
            </span>
          </div>
          <div className={`w-16 h-1 mx-2 ${step >= 2 ? 'bg-emerald-600' : 'bg-slate-200'}`}></div>
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              2
            </div>
            <span className={`font-medium ${step >= 2 ? 'text-emerald-600' : 'text-slate-500'}`}>
              Issue
            </span>
          </div>
          <div className={`w-16 h-1 mx-2 ${step >= 3 ? 'bg-emerald-600' : 'bg-slate-200'}`}></div>
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              3
            </div>
            <span className={`font-medium ${step >= 3 ? 'text-emerald-600' : 'text-slate-500'}`}>
              Contact
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Device Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Select Your Device Type</h2>
                  <p className="text-slate-600 mb-6">Choose the type of device you need repaired</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {deviceTypes.map((device) => (
                      <button
                        key={device.name}
                        type="button"
                        onClick={() => handleDeviceSelect(device.name)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.deviceType === device.name
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-slate-200 hover:border-emerald-300 bg-white'
                        }`}
                      >
                        <div className="text-3xl mb-2">{device.icon}</div>
                        <div className="font-medium text-slate-800">{device.name}</div>
                        <div className="text-sm text-slate-500">{device.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Brand</label>
                    <input
                      type="text"
                      placeholder="e.g., Apple, Samsung, Dell"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Model</label>
                    <input
                      type="text"
                      placeholder="e.g., iPhone 14 Pro, Galaxy S23"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.deviceType}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    Next: Describe Issue
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Issue Description */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">What's the Problem?</h2>
                  <p className="text-slate-600 mb-6">Select the primary issue with your {formData.deviceType}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {commonIssues.map((issue) => (
                      <button
                        key={issue}
                        type="button"
                        onClick={() => handleIssueSelect(issue)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.issue === issue
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                            : 'border-slate-200 hover:border-emerald-300 text-slate-600'
                        }`}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Additional Details</label>
                  <textarea
                    placeholder="Please describe what happened, when the issue started, and any other relevant information..."
                    rows={4}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.issue}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    Next: Contact Info
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Your Contact Information</h2>
                  <p className="text-slate-600 mb-6">We'll send your quote to this email</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        checked={formData.preferredContact === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-slate-600">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        checked={formData.preferredContact === 'phone'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-slate-600">Phone Call</span>
                    </label>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">Request Summary</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-500">Device:</div>
                    <div className="text-slate-800 font-medium">{formData.deviceType}</div>
                    {formData.brand && (
                      <>
                        <div className="text-slate-500">Brand:</div>
                        <div className="text-slate-800 font-medium">{formData.brand}</div>
                      </>
                    )}
                    {formData.model && (
                      <>
                        <div className="text-slate-500">Model:</div>
                        <div className="text-slate-800 font-medium">{formData.model}</div>
                      </>
                    )}
                    <div className="text-slate-500">Issue:</div>
                    <div className="text-slate-800 font-medium">{formData.issue}</div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span className="text-sm">90-Day Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span className="text-sm">24hr Turnaround</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-sm">Certified Techs</span>
          </div>
        </div>
      </div>
    </div>
  );
}