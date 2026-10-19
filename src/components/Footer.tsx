import React from 'react';
import { ExternalLink } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const Footer: React.FC = () => {
  const { conference, university, contact } = conferenceConfig;

  return (
    <footer className="footer-masthead" role="contentinfo">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Institutional Identification */}
          <div>
            <img
              src={conference.branding.universityLogo}
              alt="University Emblem - VFSTR"
              className="footer-emblem-img"
            />
            <p style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '14px', fontWeight: 700, lineHeight: 1.35 }}>
              {university.name}
            </p>
            <p style={{ color: 'var(--vignan-crimson)', fontWeight: 700, fontSize: '13px', marginTop: '4px' }}>
              {conference.acronym} Conference
            </p>
            <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.55, maxWidth: '360px', marginTop: '6px' }}>
              International conference hosted by VFSTR to advance scholarly discourse across VLSI design, artificial intelligence, and communications.
            </p>
            <div style={{ marginTop: '12px' }}>
              <a
                href={university.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#cbd5e1', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>University Official Portal</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-heading">Conference Directory</h4>
            <ul className="footer-navigation-list">
              <li><a href="#home">Home Overview</a></li>
              <li><a href="#about-conference">About ICVLIC</a></li>
              <li><a href="#call-for-papers">Call for Papers</a></li>
              <li><a href="#important-dates">Important Dates</a></li>
              <li><a href="#research-tracks">Research Tracks</a></li>
              <li><a href="#speakers">Keynote Speakers</a></li>
              <li><a href="#committees">Committees</a></li>
              <li><a href="#program">Program Framework</a></li>
              <li><a href="#registration">Registration Rates</a></li>
              <li><a href="#venue">Venue & Travel</a></li>
            </ul>
          </div>

          {/* Secretariat Contact */}
          <div>
            <h4 className="footer-section-heading">Secretariat Desk</h4>
            <p style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '8px' }}>
              Email: <a href={`mailto:${contact.primaryEmail}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>{contact.primaryEmail}</a>
            </p>
            <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.6 }}>
              {university.name}<br />
              Vadlamudi, Guntur District - 522213<br />
              Andhra Pradesh, India
            </p>
            <p style={{ fontSize: '11.5px', color: '#6b7280', marginTop: '8px' }}>
              Hours: Mon - Sat, 09:00 AM - 05:00 PM IST
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {conference.acronym}. All Rights Reserved. Hosted by {university.name}.
          </div>
          <div>
            <a href="#home" style={{ color: '#9ca3af', textDecoration: 'none' }}>
              ↑ Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
