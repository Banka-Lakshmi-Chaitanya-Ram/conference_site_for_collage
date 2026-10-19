import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

interface HeaderProps {
  activeSection: string;
  onOpenPrivacyPolicy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenPrivacyPolicy }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { conference, university } = conferenceConfig;

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-conference', label: 'About' },
    { href: '#research-tracks', label: 'Tracks' },
    { href: '#call-for-papers', label: 'Call for Papers' },
    { href: '#submission-guidelines', label: 'Submission' },
    { href: '#important-dates', label: 'Dates' },
    { href: '#committees', label: 'Committees' },
    { href: '#registration', label: 'Registration' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#venue', label: 'Venue' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Institutional Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="top-bar-inst">{university.name}</span>
            <span className="top-bar-badge">Dept. of AIML</span>
          </div>
          <div>
            <a
              href={university.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-link"
              title="Official university portal"
            >
              <span>University Portal</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="header-wrapper" role="banner">
        <div className="container header-container">
          {/* Logo & Conference Brand */}
          <a href="#home" className="brand-block" aria-label="ICVLIC Home">
            <div className="brand-card">
              <img
                src={conference.branding.universityLogo}
                alt="VFSTR Emblem"
                className="brand-emblem"
              />
            </div>
            <div className="brand-divider" />
            <span className="brand-title">
              {conference.acronym}<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Desktop Navigation - Clean, uncrowded, single-line */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-navigation"
            className="mobile-drawer"
            aria-label="Mobile Navigation"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={conference.branding.universityLogo}
                  alt="VFSTR Emblem"
                  style={{ height: '28px', width: 'auto' }}
                />
                <span style={{ fontWeight: 800, fontSize: '17px', color: 'var(--academic-navy)' }}>
                  {conference.acronym}.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mobile-nav-link"
                style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenPrivacyPolicy) onOpenPrivacyPolicy();
                }}
              >
                Privacy Policy
              </button>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
              <a
                href="#call-for-papers"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Call for Papers
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
