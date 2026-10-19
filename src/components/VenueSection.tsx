import React from 'react';
import { ExternalLink } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const VenueSection: React.FC = () => {
  const { venue, university } = conferenceConfig;

  return (
    <section id="venue" className="section" aria-labelledby="venue-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Location & Travel</span>
          <h2 id="venue-heading" className="section-title">Venue & Travel Information</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Hosted at {university.name}, Vadlamudi campus, Guntur District, Andhra Pradesh.
          </p>
        </div>

        <div className="venue-split-layout">
          {/* Left Column: Venue Details */}
          <div className="venue-details-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '4px' }}>
              {venue.institution}
            </h3>
            {venue.auditorium && (
              <p style={{ fontWeight: 600, color: 'var(--vignan-crimson)', fontSize: '13px', marginBottom: '10px' }}>
                Venue Complex: {venue.auditorium}
              </p>
            )}

            <div style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
              <p>{venue.address.street}, {venue.address.locality}</p>
              <p>{venue.address.city}, {venue.address.district}</p>
              <p>{venue.address.state} - {venue.address.pincode}, {venue.address.country}</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '3px', padding: '12px 14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--academic-navy)', display: 'block', marginBottom: '3px' }}>
                Accommodation Guidance
              </span>
              <p style={{ fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                {venue.accommodationNote}
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(university.name + ', ' + venue.address.locality + ', ' + venue.address.district)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <span>View Campus Location on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Right Column: Transportation */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 700, color: 'var(--academic-navy)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid var(--border-light)' }}>
              Transit & Campus Connectivity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {venue.transportation.map((trans, idx) => (
                <div key={idx} className="transit-option-card">
                  <div className="transit-header-row">
                    <span className="transit-mode-name">{trans.title}</span>
                    <span className="transit-dist-val">{trans.distance}</span>
                  </div>
                  <div className="transit-summary-text">{trans.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
