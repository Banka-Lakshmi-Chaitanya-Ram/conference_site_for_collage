import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

export const PublicationSection: React.FC = () => {
  const { publication } = conferenceConfig;

  return (
    <section id="publication-guidelines" className="section section-alt" aria-labelledby="publication-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Publication Policy</span>
          <h2 id="publication-heading" className="section-title">{publication.heading}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {publication.subheading}
          </p>
        </div>

        <div className="proceedings-document">
          <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.75, maxWidth: '820px', margin: '0 auto 16px', textAlign: 'center' }}>
            {publication.body}
          </p>

          <div style={{ backgroundColor: 'var(--bg-alt)', borderLeft: '3px solid var(--vignan-crimson)', padding: '14px 18px', borderRadius: '3px', maxWidth: '820px', margin: '0 auto' }}>
            <p style={{ fontSize: '13px', color: 'var(--academic-navy)', fontWeight: 600, margin: 0, textAlign: 'center' }}>
              Further information will be announced on the official conference website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;
