import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

export const SubmissionGuidelines: React.FC = () => {
  const { submissionGuidelines } = conferenceConfig;

  return (
    <section id="submission-guidelines" className="section" aria-labelledby="sub-guidelines-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Author Instructions</span>
          <h2 id="sub-guidelines-heading" className="section-title">{submissionGuidelines.title}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Formal submission standards and workflow from manuscript drafting to conference presentation.
          </p>
        </div>

        <div className="proceedings-document">
          {/* Requirements for all submissions */}
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '14px' }}>
            {submissionGuidelines.requirementsHeading}
          </h3>

          <ol className="guidelines-ol-academic" style={{ marginBottom: '32px' }}>
            {submissionGuidelines.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ol>

          {/* From manuscript to presentation */}
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '16px', paddingTop: '18px', borderTop: '1px solid var(--border-light)' }}>
            {submissionGuidelines.workflowHeading}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {submissionGuidelines.workflow.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  padding: '16px 18px',
                  borderRadius: '4px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '13.5px', color: 'var(--academic-navy)' }}>
                    {item.stage}
                  </strong>
                  <span className="tba-badge">Pending</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
