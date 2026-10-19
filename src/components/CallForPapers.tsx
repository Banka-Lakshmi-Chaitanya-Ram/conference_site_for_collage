import React from 'react';
import { Send, ExternalLink } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const CallForPapers: React.FC = () => {
  const { callForPapers, conference } = conferenceConfig;

  return (
    <section id="call-for-papers" className="section section-alt" aria-labelledby="cfp-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Submissions</span>
          <h2 id="cfp-heading" className="section-title">Call for Papers & Author Guidelines</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Submissions are invited for original, unpublished research articles across theoretical and applied engineering disciplines.
          </p>
        </div>

        <div className="proceedings-document">
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '16px' }}>
            {callForPapers.intro}
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '10px' }}>
            Manuscript Formatting & Submission Requirements
          </h3>
          <ol className="guidelines-ol-academic">
            {callForPapers.guidelines.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ol>

          {/* Academic Integrity Notice */}
          <div className="advisory-box">
            <div className="advisory-box-title">Plagiarism & Academic Integrity Standard</div>
            <div className="advisory-box-body">{callForPapers.plagiarismPolicy}</div>
          </div>

          {/* Proceedings Transparency */}
          <div style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '3px', padding: '14px 16px', marginBottom: '20px' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '13.5px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '4px' }}>
              Proceedings Publication & Indexing
            </h4>
            <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
              {callForPapers.publicationNote}
            </p>
          </div>

          {/* Submission Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '12.5px', color: 'var(--text-body)' }}>
              Online Submission Portal: <strong style={{ color: 'var(--text-dark)' }}>Microsoft CMT / EasyChair Portal</strong>
            </span>
            <a
              href={conference.portals.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Send size={12} />
              <span>Access Online Submission Portal</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
