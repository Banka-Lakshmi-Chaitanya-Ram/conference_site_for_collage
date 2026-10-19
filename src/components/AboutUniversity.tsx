import React from 'react';
import { ExternalLink } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const AboutUniversity: React.FC = () => {
  const { university } = conferenceConfig;

  return (
    <section id="about-university" className="section section-alt" aria-labelledby="about-univ-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Host Institution</span>
          <h2 id="about-univ-heading" className="section-title">About the University</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {university.name}
          </p>
        </div>

        <div className="univ-grid-layout">
          {/* Left Column: Second Campus Building Photo (Dome) */}
          <div className="campus-photo-container">
            <div className="campus-photo-frame">
              <img
                src={university.campusBuildingPhoto}
                alt="Academic Complex with Dome, Vignan's Foundation for Science, Technology & Research"
                loading="lazy"
              />
            </div>
            <div className="campus-photo-legend">
              <strong>Campus Academic Complex & Central Plaza</strong>
              <span>{university.shortName} Campus</span>
            </div>
          </div>

          {/* Right Column: Institutional Overview & Highlights */}
          <div className="prose-text">
            <p style={{ fontWeight: 600, color: 'var(--academic-navy)', marginBottom: '8px' }}>
              {university.status}
            </p>

            {university.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {/* Metrics Grid */}
            <div className="univ-metrics-grid">
              {university.highlights.map((item, i) => (
                <div key={i} className="univ-metric-card">
                  <div className="metric-label">{item.label}</div>
                  <div className="metric-value">{item.value}</div>
                </div>
              ))}
            </div>

            <div>
              <a
                href={university.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Visit University Official Website</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
