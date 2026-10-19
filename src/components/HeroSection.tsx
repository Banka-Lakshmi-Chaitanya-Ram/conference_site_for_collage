import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const HeroSection: React.FC = () => {
  const { conference, university } = conferenceConfig;

  return (
    <section id="home" className="hero-section" aria-label="Conference Introduction">
      {/* Background Media with Rich Dark Gradient Overlay */}
      <div className="hero-bg-media">
        <img
          src={conference.branding.heroImage}
          alt="AI and Vision Computing Background"
          loading="eager"
        />
      </div>
      <div className="hero-gradient-overlay" />

      {/* Main Centered Content */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content-wrapper">
          <span className="hero-eyebrow">
            <Sparkles size={14} />
            <span>International Conference on</span>
          </span>

          <h1 className="hero-subtitle">
            Vision, Language and Intelligent Computing
          </h1>

          <div className="hero-acronym-display">
            {conference.acronym}<span className="hero-acronym-dot">.</span>
          </div>

          <p className="hero-tagline-text">
            {conference.tagline}
          </p>

          <div className="hero-themes-badge">
            {conference.themeLine}
          </div>

          <p className="hero-organizer-info">
            Organized by <strong>{conference.organizingUnit}</strong> • {university.name}, {conference.location}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions-center">
            <a href="#research-tracks" className="btn btn-crimson">
              <span>Explore Conference Tracks</span>
              <ArrowRight size={14} />
            </a>
            <a href="#call-for-papers" className="btn btn-secondary">
              <FileText size={14} />
              <span>View Call for Papers</span>
            </a>
            <a
              href="#submission-guidelines"
              className="btn btn-outline"
              style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.35)' }}
            >
              <span>Submission Guidelines</span>
            </a>
          </div>

          {/* 4 Quick Facts Clean Centered Grid */}
          <div className="hero-stats-grid">
            <div className="hero-stat-cell">
              <span className="hero-stat-label">Edition</span>
              <span className="hero-stat-value">{conference.quickFacts.edition}</span>
            </div>
            <div className="hero-stat-cell">
              <span className="hero-stat-label">Dates</span>
              <span className="hero-stat-value">{conference.quickFacts.dates}</span>
            </div>
            <div className="hero-stat-cell">
              <span className="hero-stat-label">Venue</span>
              <span className="hero-stat-value">{conference.quickFacts.venue}</span>
            </div>
            <div className="hero-stat-cell">
              <span className="hero-stat-label">Submission Deadline</span>
              <span className="hero-stat-value">{conference.quickFacts.submissionDeadline}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
