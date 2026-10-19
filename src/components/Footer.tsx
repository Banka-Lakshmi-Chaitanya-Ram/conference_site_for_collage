import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const { conference, footer } = conferenceConfig;

  return (
    <footer className="footer-masthead" role="contentinfo">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              {footer.brand}
            </div>

            <p style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 600, lineHeight: 1.4, marginBottom: '6px' }}>
              {footer.fullName}
            </p>

            <p style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '13.5px', marginBottom: '16px' }}>
              {footer.tagline}
            </p>

            {/* VFSTR Logo with crisp card background matching source */}
            <div style={{ display: 'inline-flex', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '4px', marginBottom: '14px' }}>
              <img
                src={conference.branding.universityLogo}
                alt="VFSTR logo"
                style={{ height: '48px', width: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.55 }}>
              {footer.organizedBy}
            </p>
          </div>

          {/* Column 2: Navigation Links matching source structure */}
          <div>
            <h4 className="footer-section-heading">Navigation</h4>
            <ul className="footer-navigation-list" style={{ columns: 2 }}>
              <li><a href="#about-conference">About</a></li>
              <li><a href="#research-tracks">Conference Tracks</a></li>
              <li><a href="#call-for-papers">Call for Papers</a></li>
              <li><a href="#submission-guidelines">Submission Guidelines</a></li>
              <li><a href="#committees">Committees</a></li>
              <li><a href="#important-dates">Important Dates</a></li>
              <li><a href="#registration">Registration</a></li>
              <li><a href="#speakers">Keynote Speakers</a></li>
              <li><a href="#venue">Venue</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyPolicy}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar with Copyright */}
        <div className="footer-bottom-bar">
          <div>
            {footer.copyright}
          </div>
          <div>
            <a href="#home" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              ↑ Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
