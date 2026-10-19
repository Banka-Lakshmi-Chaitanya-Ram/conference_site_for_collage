import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

export const AboutConference: React.FC = () => {
  const { conference } = conferenceConfig;

  return (
    <section id="about-conference" className="section" aria-labelledby="about-conf-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Conference Overview</span>
          <h2 id="about-conf-heading" className="section-title">About ICVLIC</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            An international forum dedicated to cutting-edge research in VLSI, intelligent systems, and communication.
          </p>
        </div>

        <div className="academic-columns">
          {/* Main Narrative */}
          <div className="prose-text">
            {conference.overview.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'lead-para' : ''}>
                {paragraph}
              </p>
            ))}

            <h3 className="subheading-academic">Primary Conference Objectives</h3>
            <ul className="scholarly-list">
              {conference.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>

            <div className="organizing-banner">
              {conference.organizingUnit}
            </div>
          </div>

          {/* Right Column: Intended Participants Panel */}
          <aside>
            <div className="side-panel">
              <h3 className="side-panel-header">Intended Participants</h3>
              <ul className="scholarly-list">
                {conference.intendedAudience.map((aud, i) => (
                  <li key={i}>{aud}</li>
                ))}
              </ul>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Peer-Review Standard
                </span>
                <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                  All submitted manuscripts will undergo double-blind peer review by independent experts from the Technical Program Committee.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
