import React, { useState } from 'react';
import { X, BookOpen } from 'lucide-react';
import { conferenceConfig, type Speaker } from '../config/conferenceConfig';
import { LocalImage } from './common/LocalImage';

export const SpeakersSection: React.FC = () => {
  const { speakers } = conferenceConfig;
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="section section-alt" aria-labelledby="speakers-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Distinguished Speakers</span>
          <h2 id="speakers-heading" className="section-title">Keynote & Plenary Speakers</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Invited international luminaries delivering keynote lectures and technical perspectives.
          </p>
        </div>

        <div className="speakers-scholarly-grid">
          {speakers.map((speaker: Speaker) => (
            <div key={speaker.id} className="speaker-profile-card">
              <div className="speaker-portrait-box">
                <LocalImage
                  src={speaker.photo || ''}
                  alt={speaker.name}
                  fallbackText="Portrait"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              <div className="speaker-details-col">
                <span className="speaker-type-tag">{speaker.role}</span>
                <h3 className="speaker-title-name">{speaker.name}</h3>
                <p className="speaker-inst-text">{speaker.institution}</p>

                {speaker.talkTitle && (
                  <div className="speaker-topic-quote">
                    <strong>Topic:</strong> "{speaker.talkTitle}"
                  </div>
                )}

                {(speaker.abstract || speaker.bio) && (
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      <BookOpen size={12} />
                      <span>View Abstract & Bio</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
          Note: Speaker profiles and lecture abstracts are updated periodically upon formal confirmation.
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedSpeaker && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedSpeaker(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-speaker-name"
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-trigger"
              onClick={() => setSelectedSpeaker(null)}
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>

            <span className="speaker-type-tag">{selectedSpeaker.role}</span>
            <h3 id="modal-speaker-name" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--academic-navy)', margin: '4px 0' }}>
              {selectedSpeaker.name}
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '14px' }}>
              {selectedSpeaker.institution}
            </p>

            {selectedSpeaker.talkTitle && (
              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                  Lecture Title
                </span>
                <p style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--academic-navy)' }}>
                  "{selectedSpeaker.talkTitle}"
                </p>
              </div>
            )}

            {selectedSpeaker.abstract && (
              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                  Abstract
                </span>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {selectedSpeaker.abstract}
                </p>
              </div>
            )}

            {selectedSpeaker.bio && (
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                  Biography
                </span>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {selectedSpeaker.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
