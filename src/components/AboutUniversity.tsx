import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const AboutUniversity: React.FC = () => {
  const { university } = conferenceConfig;

  return (
    <section id="about-university" className="section section-alt" aria-labelledby="about-univ-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Host Institution</span>
          <h2 id="about-univ-heading" className="section-title">{university.heading}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {university.name} • {university.location}
          </p>
        </div>

        <div className="univ-grid-layout">
          {/* Left Column: Campus Photograph Placeholder per source site specification */}
          <div className="campus-placeholder-card">
            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: 'var(--bg-tag)', marginBottom: '14px', color: 'var(--academic-navy)' }}>
              <Camera size={26} />
            </div>
            <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--academic-navy)', marginBottom: '4px' }}>
              Authentic VFSTR campus photograph
            </p>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              (to be supplied by organizers)
            </span>
          </div>

          {/* Right Column: Institutional Overview & Department */}
          <div className="prose-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontWeight: 700, fontSize: '18px', color: 'var(--academic-navy)', marginBottom: '6px' }}>
              {university.name}
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {university.location}
            </p>

            <p style={{ fontSize: '14.5px', lineHeight: 1.75, color: 'var(--text-body)', marginBottom: '24px' }}>
              {university.body}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="#venue"
                className="btn btn-primary"
              >
                <span>Venue Information</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
              >
                <span>Contact Secretariat</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;
