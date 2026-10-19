import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const HeroSection: React.FC = () => {
  const { conference, university } = conferenceConfig;

  return (
    <section id="home" className="hero-section" aria-label="Conference Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Academic Metadata & Direct Information */}
          <div className="hero-left">
            <span className="hero-institution-line">
              Hosted by {university.name}
            </span>

            <h1 className="hero-conf-acronym">{conference.acronym}</h1>
            <p className="hero-conf-fullname">{conference.fullName}</p>

            <p className="hero-conf-summary">
              An international academic forum bringing together researchers, academicians, and industry engineers
              to share peer-reviewed contributions across VLSI design, computational intelligence,
              and communication technologies.
            </p>

            {/* Clean Scholarly Metadata Table */}
            <div className="hero-meta-table">
              <div className="hero-meta-cell">
                <span className="meta-cell-header">Conference Dates</span>
                <span className="meta-cell-content">{conference.dates.displayDates}</span>
                <span className="meta-cell-note">Provisional Schedule</span>
              </div>

              <div className="hero-meta-cell">
                <span className="meta-cell-header">Host Campus</span>
                <span className="meta-cell-content">{university.shortName} Campus</span>
                <span className="meta-cell-note">Vadlamudi, Guntur, AP</span>
              </div>

              <div className="hero-meta-cell">
                <span className="meta-cell-header">Peer Review</span>
                <span className="meta-cell-content">{conference.statusBadge}</span>
                <span className="meta-cell-note">Double-Blind Review</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-bar">
              <a href="#call-for-papers" className="btn btn-primary">
                <Send size={13} />
                <span>Submit Paper</span>
              </a>
              <a href="#about-conference" className="btn btn-secondary">
                <span>About Conference</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Campus Main Building Photograph */}
          <div className="campus-photo-container">
            <div className="campus-photo-frame">
              <img
                src={university.campusMainPhoto}
                alt="Main Administrative and Academic Building, Vignan's Foundation for Science, Technology & Research"
                loading="eager"
              />
            </div>
            <div className="campus-photo-legend">
              <strong>Main Academic & Administrative Complex</strong>
              <span>VFSTR Campus, Vadlamudi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
