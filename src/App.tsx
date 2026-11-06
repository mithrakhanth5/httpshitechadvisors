import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TalkToExpertModal } from './components/TalkToExpertModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EventsPage } from './pages/EventsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AiAssessmentPage } from './pages/AiAssessmentPage';
import './App.css';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || 'Strategic Challenge Intake');
    setIsConsultationOpen(true);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#D2232A] selection:text-white">
        {/* Navigation */}
        <Navbar onOpenConsultation={() => handleOpenConsultation('Header Discuss a Challenge')} />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/what-we-do" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/what-we-do/:serviceId" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/solutions" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/solutions/:serviceId" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/capabilities" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/capabilities/:serviceId" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/events" element={<EventsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/blog" element={<BlogPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/talk-to-an-expert" element={<ContactPage />} />
            <Route path="/ai-assessment" element={<AiAssessmentPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenConsultation={() => handleOpenConsultation('Footer Consultation')} />

        {/* Modal Consultation Form */}
        <TalkToExpertModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          initialTopic={consultationTopic}
        />
      </div>
    </HashRouter>
  );
}

export default App;
