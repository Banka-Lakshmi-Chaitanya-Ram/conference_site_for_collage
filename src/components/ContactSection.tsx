import React from 'react';
import { Mail } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const ContactSection: React.FC = () => {
  const { contact } = conferenceConfig;

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Secretariat</span>
          <h2 id="contact-heading" className="section-title">Conference Secretariat & Inquiries</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            For academic correspondence, author inquiries, and registration assistance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
          {/* Email Contacts */}
          <div className="about-panel">
            <h3 className="panel-title">Official Inquiries</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '14px', lineHeight: 1.55 }}>
              Direct all manuscript submissions and registration communications to our official email desk.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`mailto:${contact.primaryEmail}`}
                className="btn btn-outline btn-sm"
                style={{ justifyContent: 'flex-start' }}
              >
                <Mail size={13} />
                <span>{contact.primaryEmail}</span>
              </a>
              {contact.secondaryEmail && (
                <a
                  href={`mailto:${contact.secondaryEmail}`}
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'flex-start' }}
                >
                  <Mail size={13} />
                  <span>{contact.secondaryEmail}</span>
                </a>
              )}
            </div>
          </div>

          {/* Secretariat Office */}
          <div className="about-panel">
            <h3 className="panel-title">Secretariat Location</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '10px' }}>
              {contact.officeLocation}
            </p>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Working Hours: {contact.workingHours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
