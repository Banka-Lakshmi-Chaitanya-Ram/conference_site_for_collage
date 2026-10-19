import React from 'react';
import { conferenceConfig, type DeadlineItem } from '../config/conferenceConfig';

export const ImportantDates: React.FC = () => {
  const { deadlines } = conferenceConfig;

  return (
    <section id="important-dates" className="section" aria-labelledby="dates-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Conference Calendar</span>
          <h2 id="dates-heading" className="section-title">Important Deadlines & Milestones</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Chronological schedule for manuscript submission, author notification, camera-ready papers, and registration.
          </p>
        </div>

        <div className="academic-table-container">
          <table className="academic-table">
            <thead>
              <tr>
                <th style={{ width: '48%' }}>Conference Event / Milestone</th>
                <th style={{ width: '28%' }}>Scheduled Date</th>
                <th style={{ width: '24%' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((item: DeadlineItem) => (
                <tr key={item.id}>
                  <td>
                    <div className="td-milestone">{item.label}</div>
                    {item.note && (
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {item.note}
                      </div>
                    )}
                  </td>
                  <td>
                    <span className="td-date-val">{item.date}</span>
                  </td>
                  <td>
                    <span className="tba-badge">
                      {item.isConfirmed ? (item.status || 'Active') : 'TBA'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          <strong>Note:</strong> All deadlines are subject to formal notification by the organizing committee. Dates adhere to Indian Standard Time (IST, UTC+5:30).
        </div>
      </div>
    </section>
  );
};
