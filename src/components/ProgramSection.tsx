import React, { useState } from 'react';
import { conferenceConfig, type ScheduleDay, type ScheduleSession } from '../config/conferenceConfig';

export const ProgramSection: React.FC = () => {
  const { program } = conferenceConfig;
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeDay = program.days[activeDayIndex] || program.days[0];

  return (
    <section id="program" className="section section-alt" aria-labelledby="program-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Schedule</span>
          <h2 id="program-heading" className="section-title">Conference Program Framework</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Tentative schedule framework across conference days. Detailed oral presentation schedules will follow camera-ready submissions.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="schedule-nav-tabs" role="tablist">
          {program.days.map((day: ScheduleDay, index: number) => (
            <button
              key={day.dayId}
              type="button"
              role="tab"
              aria-selected={activeDayIndex === index}
              className={`schedule-nav-tab ${activeDayIndex === index ? 'active' : ''}`}
              onClick={() => setActiveDayIndex(index)}
            >
              {day.dateLabel}
            </button>
          ))}
        </div>

        {/* Tabular Schedule */}
        {activeDay && (
          <div className="academic-table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th style={{ width: '190px' }}>Time Slot</th>
                  <th>Session Particulars & Venue</th>
                </tr>
              </thead>
              <tbody>
                {activeDay.sessions.map((session: ScheduleSession, sIdx: number) => (
                  <tr key={sIdx}>
                    <td style={{ verticalAlign: 'top' }}>
                      <div className="td-date-val">{session.time}</div>
                      <span className="tba-badge" style={{ marginTop: '6px' }}>
                        {session.type.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <div className="td-milestone" style={{ fontSize: '14px' }}>{session.title}</div>
                      {session.description && (
                        <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '3px' }}>
                          {session.description}
                        </div>
                      )}
                      {session.speaker && (
                        <div style={{ fontSize: '12.5px', color: 'var(--academic-navy)', fontWeight: 600, marginTop: '3px' }}>
                          Invited Speaker: {session.speaker}
                        </div>
                      )}
                      <div style={{ fontSize: '11.5px', color: 'var(--vignan-crimson)', fontWeight: 600, marginTop: '4px' }}>
                        Venue: {session.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {program.announcementNote}
        </div>
      </div>
    </section>
  );
};
