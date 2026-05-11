import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RepairProcess } from "./components/RepairProcess";
import { DeviceCategories } from "./components/DeviceCategories";
import { DiagnosticForm } from "./components/DiagnosticForm";
import { Footer } from "./components/Footer";
import { QuotePage } from "./pages/QuotePage";

type Page = 'home' | 'quote';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const handleNavigateToQuote = (device?: string) => {
    setSelectedDevice(device || null);
    setCurrentPage('quote');
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    setSelectedDevice(null);
  };

  if (currentPage === 'quote') {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onNavigateHome={handleNavigateHome} />
        <QuotePage 
          selectedDevice={selectedDevice} 
          onBack={handleNavigateHome} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigateHome={handleNavigateHome} />
      <main>
        <HeroSection onGetQuote={() => handleNavigateToQuote()} />
        <RepairProcess />
        <DeviceCategories onSelectDevice={handleNavigateToQuote} />
        <DiagnosticForm selectedDevice={selectedDevice} />
      </main>
      <Footer />
    </div>
  );
}