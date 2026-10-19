import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

export const AboutConference: React.FC = () => {
  const { conference } = conferenceConfig;
  const { about } = conference;

  return (
    <section id="about-conference" className="section" aria-labelledby="about-conf-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">About ICVLIC</span>
          <h2 id="about-conf-heading" className="section-title">{about.heading}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {conference.tagline}
          </p>
        </div>

        {/* Lead Narrative */}
        <div style={{ maxWidth: '960px', marginBottom: '40px' }}>
          <p style={{ fontSize: '16.5px', color: 'var(--text-body)', lineHeight: 1.75, fontWeight: 400 }}>
            {about.body}
          </p>
        </div>

        {/* Objectives of ICVLIC (Clean Numbered Scholarly List) */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '8px' }}>
            {about.objectivesHeading}
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Core objectives driving research impact, academic collaboration, and ethical AI deployment.
          </p>

          <ol className="objectives-ordered-list">
            {about.objectives.map((obj, i) => (
              <li key={i} className="objective-item-row">
                <span className="objective-numeral">0{i + 1}</span>
                <span className="objective-statement">{obj}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Why ICVLIC — A Focused Forum (5-Card Grid) */}
        <div>
          <div style={{ marginBottom: '18px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--vignan-crimson)', display: 'block', marginBottom: '4px' }}>
              Why ICVLIC
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--academic-navy)', margin: 0 }}>
              {about.whyConference.heading}
            </h3>
          </div>

          <div className="why-cards-grid">
            {about.whyConference.items.map((item, idx) => (
              <div key={idx} className="why-card">
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Banner */}
        <div className="organizing-banner">
          Organized by {conference.organizingUnit}, {conference.location}
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
