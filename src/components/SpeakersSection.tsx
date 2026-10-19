import React from 'react';
import { UserCheck } from 'lucide-react';
import { conferenceConfig, type Speaker } from '../config/conferenceConfig';

export const SpeakersSection: React.FC = () => {
  const { speakers } = conferenceConfig;

  return (
    <section id="speakers" className="section section-alt" aria-labelledby="speakers-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Distinguished Speakers</span>
          <h2 id="speakers-heading" className="section-title">Keynote Speakers</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Distinguished speakers will be announced once confirmed.
          </p>
        </div>

        <div className="speakers-scholarly-grid">
          {speakers.map((speaker: Speaker) => (
            <div key={speaker.id} className="speaker-profile-card">
              <div className="speaker-portrait-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-alt)' }}>
                <UserCheck size={36} color="var(--text-muted)" style={{ opacity: 0.6 }} />
              </div>

              <div className="speaker-details-col">
                <span className="speaker-type-tag">{speaker.role}</span>
                <h3 className="speaker-title-name" style={{ color: 'var(--academic-navy)' }}>{speaker.name}</h3>
                <p className="speaker-inst-text" style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {speaker.institution}
                </p>
                <div style={{ marginTop: '8px' }}>
                  <span className="tba-badge">Details will be announced</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
          Note: Distinguished speakers will be announced once confirmed. Name, institution, talk title and biography will appear here.
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
