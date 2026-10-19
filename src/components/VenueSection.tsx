import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const VenueSection: React.FC = () => {
  const { venue } = conferenceConfig;

  return (
    <section id="venue" className="section" aria-labelledby="venue-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Location & Travel</span>
          <h2 id="venue-heading" className="section-title">{venue.title}</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {venue.hostingInstitution} • {venue.organizingDepartment}
          </p>
        </div>

        <div className="venue-split-layout">
          {/* Left Column: Hosting details & address */}
          <div className="venue-details-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '4px' }}>
              {venue.hostingInstitution}
            </h3>
            <p style={{ fontWeight: 600, color: 'var(--vignan-crimson)', fontSize: '13.5px', marginBottom: '14px' }}>
              Organized by: {venue.organizingDepartment}
            </p>

            <div style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
              <p><strong>Location:</strong> {venue.location}</p>
              <p><strong>Campus venue & full postal address:</strong> {venue.campusAddress}</p>
            </div>

            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', maxWidth: '100%', whiteSpace: 'normal', textAlign: 'center' }}
            >
              <MapPin size={14} style={{ flexShrink: 0 }} />
              <span>View Vadlamudi, Guntur on Google Maps</span>
              <ExternalLink size={13} style={{ flexShrink: 0 }} />
            </a>
          </div>

          {/* Right Column: Travel & accommodation */}
          <div className="venue-details-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '14px' }}>
              Travel and Accommodation
            </h3>
            <div style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '18px' }}>
              <span className="tba-badge" style={{ marginBottom: '10px', display: 'inline-block' }}>
                Pending
              </span>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                {venue.travelNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
