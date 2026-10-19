import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutConference } from './components/AboutConference';
import { AboutUniversity } from './components/AboutUniversity';
import { ResearchTracks } from './components/ResearchTracks';
import { CallForPapers } from './components/CallForPapers';
import { SubmissionGuidelines } from './components/SubmissionGuidelines';
import { ImportantDates } from './components/ImportantDates';
import { CommitteesSection } from './components/CommitteesSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SpeakersSection } from './components/SpeakersSection';
import { PublicationSection } from './components/PublicationSection';
import { VenueSection } from './components/VenueSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about-conference',
      'about-university',
      'research-tracks',
      'call-for-papers',
      'submission-guidelines',
      'important-dates',
      'committees',
      'registration',
      'speakers',
      'publication-guidelines',
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
      <Header
        activeSection={activeSection}
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content" role="main">
        <HeroSection />
        <AboutConference />
        <ResearchTracks />
        <CallForPapers />
        <SubmissionGuidelines />
        <ImportantDates />
        <CommitteesSection />
        <RegistrationSection />
        <SpeakersSection />
        <PublicationSection />
        <AboutUniversity />
        <VenueSection />
        <ContactSection />
      </main>

      {/* Footer Landmark */}
      <Footer onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
