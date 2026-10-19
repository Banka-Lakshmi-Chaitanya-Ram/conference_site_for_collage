import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { conferenceConfig, type DeadlineItem } from '../config/conferenceConfig';

export const ImportantDates: React.FC = () => {
  const { deadlines } = conferenceConfig;

  return (
    <section id="important-dates" className="section" aria-labelledby="dates-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Important Dates</span>
          <h2 id="dates-heading" className="section-title">Key Milestones</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            All dates will be published once officially confirmed by the organizing committee.
          </p>
        </div>

        {/* 5 Milestone Cards in a Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: '16px', marginBottom: '24px' }}>
          {deadlines.map((item: DeadlineItem) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <Calendar size={14} color="var(--vignan-crimson)" />
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    Milestone
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', fontWeight: 600, color: 'var(--academic-navy)', margin: '0 0 18px', lineHeight: 1.4 }}>
                  {item.label}
                </h3>
              </div>

              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--vignan-crimson)',
                    backgroundColor: 'var(--vignan-crimson-light)',
                    padding: '4px 9px',
                    borderRadius: '4px',
                    border: '1px solid rgba(139, 0, 0, 0.15)'
                  }}
                >
                  <Clock size={11} />
                  <span>{item.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          All dates will be published once officially confirmed by the organizing committee.
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
