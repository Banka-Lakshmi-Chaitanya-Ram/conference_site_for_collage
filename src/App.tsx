import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutConference } from './components/AboutConference';
import { AboutUniversity } from './components/AboutUniversity';
import { ImportantDates } from './components/ImportantDates';
import { CallForPapers } from './components/CallForPapers';
import { ResearchTracks } from './components/ResearchTracks';
import { SpeakersSection } from './components/SpeakersSection';
import { CommitteesSection } from './components/CommitteesSection';
import { ProgramSection } from './components/ProgramSection';
import { RegistrationSection } from './components/RegistrationSection';
import { PublicationSection } from './components/PublicationSection';
import { VenueSection } from './components/VenueSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about-conference',
      'about-university',
      'important-dates',
      'call-for-papers',
      'research-tracks',
      'speakers',
      'committees',
      'program',
      'registration',
      'venue',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Landmark */}
      <main id="main-content" role="main">
        <HeroSection />
        <AboutConference />
        <AboutUniversity />
        <ImportantDates />
        <CallForPapers />
        <ResearchTracks />
        <SpeakersSection />
        <CommitteesSection />
        <ProgramSection />
        <RegistrationSection />
        <PublicationSection />
        <VenueSection />
        <ContactSection />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
};

export default App;
