import React from 'react';
import { Clock } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const CallForPapers: React.FC = () => {
  const { callForPapers, deadlines } = conferenceConfig;

  return (
    <section id="call-for-papers" className="section section-alt" aria-labelledby="cfp-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Submissions</span>
          <h2 id="cfp-heading" className="section-title">{callForPapers.title}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Connecting Vision, Language and Intelligence for a Smarter Future
          </p>
        </div>

        <div className="proceedings-document">
          <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
            {callForPapers.intro}
          </p>

          {/* Scope Heading & Track Overview */}
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '14px' }}>
            Technical Tracks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '12px', marginBottom: '28px' }}>
            {callForPapers.tracks.map((track) => (
              <div
                key={track.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '12px 14px',
                  borderRadius: '4px'
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--vignan-crimson)', textTransform: 'uppercase' }}>
                  {track.number}
                </span>
                <h4 style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--academic-navy)', margin: '4px 0 2px' }}>
                  {track.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Policies Heading: Originality, review and ethics */}
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '14px' }}>
            {callForPapers.policiesHeading}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px', marginBottom: '28px' }}>
            <div className="about-panel">
              <strong style={{ fontSize: '13.5px', color: 'var(--academic-navy)', display: 'block', marginBottom: '4px' }}>
                Originality
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                {callForPapers.policies.originality}
              </p>
            </div>

            <div className="about-panel">
              <strong style={{ fontSize: '13.5px', color: 'var(--academic-navy)', display: 'block', marginBottom: '4px' }}>
                Peer Review
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                {callForPapers.policies.peerReview}
              </p>
            </div>

            <div className="about-panel">
              <strong style={{ fontSize: '13.5px', color: 'var(--academic-navy)', display: 'block', marginBottom: '4px' }}>
                Research Ethics
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                {callForPapers.policies.researchEthics}
              </p>
            </div>
          </div>

          {/* Important Dates Summary */}
          <div style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '18px', marginBottom: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '14.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '12px' }}>
              Important Dates
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
              {deadlines.map((d) => (
                <div key={d.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>{d.label}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--vignan-crimson)' }}>{d.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Information */}
          <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--academic-navy)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', borderRadius: '4px', padding: '16px 18px', marginBottom: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '4px' }}>
              Publication Information
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {callForPapers.publicationNote}
            </p>
          </div>

          {/* Submission Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '18px', borderTop: '1px solid var(--border-light)' }}>
            <div>
              <span style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', display: 'block' }}>
                Submit Your Paper
              </span>
              <strong style={{ fontSize: '14.5px', color: 'var(--academic-navy)' }}>
                {callForPapers.submissionPortalNote}
              </strong>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled
              style={{ opacity: 0.85, cursor: 'not-allowed' }}
            >
              <Clock size={12} />
              <span>Portal: To Be Announced</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
