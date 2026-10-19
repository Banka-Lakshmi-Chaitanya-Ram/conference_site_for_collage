import React from 'react';
import { Mail, MapPin, Building } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const ContactSection: React.FC = () => {
  const { contact } = conferenceConfig;

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Contact</span>
          <h2 id="contact-heading" className="section-title">{contact.heading}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Organizing Committee & Institutional Correspondence
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
          {/* Organizing Unit & Address */}
          <div className="about-panel">
            <h3 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building size={16} color="var(--academic-navy)" />
              <span>Organizing Committee</span>
            </h3>
            <p style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--academic-navy)', marginBottom: '4px' }}>
              {contact.organizingCommittee}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '12px' }}>
              {contact.institution}
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
              <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{contact.address}</span>
            </div>
          </div>

          {/* Email & Contact Persons */}
          <div className="about-panel">
            <h3 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="var(--academic-navy)" />
              <span>Communication Desk</span>
            </h3>
            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                Official Email
              </span>
              <span className="tba-badge">{contact.officialEmail}</span>
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                Contact Persons
              </span>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', margin: 0 }}>
                {contact.contactPersons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
