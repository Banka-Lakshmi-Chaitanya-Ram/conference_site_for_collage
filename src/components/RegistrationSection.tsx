import React from 'react';
import { conferenceConfig } from '../config/conferenceConfig';

export const RegistrationSection: React.FC = () => {
  const { registration } = conferenceConfig;

  return (
    <section id="registration" className="section" aria-labelledby="registration-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Registration</span>
          <h2 id="registration-heading" className="section-title">Registration Fees & Entitlements</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Delegate registration rates across categories for paper presentation and conference attendance.
          </p>
        </div>

        {/* Standard Academic Fee Table */}
        <div className="academic-table-container" style={{ marginBottom: '22px' }}>
          <table className="academic-table">
            <thead>
              <tr>
                <th style={{ width: '42%' }}>Delegate Category</th>
                <th style={{ width: '24%' }}>Early-Bird Rate</th>
                <th style={{ width: '24%' }}>Regular Rate</th>
                <th style={{ width: '10%' }}>Currency</th>
              </tr>
            </thead>
            <tbody>
              {registration.tiers.map((tier, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="td-milestone">{tier.category}</div>
                    {tier.notes && (
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {tier.notes}
                      </div>
                    )}
                  </td>
                  <td>
                    <span className="td-date-val">{tier.earlyFee}</span>
                  </td>
                  <td>
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{tier.regularFee}</span>
                  </td>
                  <td>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{tier.currency}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Inclusions and Instructions in 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
          <div className="about-panel">
            <h3 className="panel-title">Registration Fee Includes</h3>
            <ul className="academic-list">
              {registration.inclusions.map((inc, i) => (
                <li key={i}>{inc}</li>
              ))}
            </ul>
          </div>

          <div className="about-panel">
            <h3 className="panel-title">Author Guidelines</h3>
            <ul className="academic-list">
              {registration.instructions.map((inst, j) => (
                <li key={j}>{inst}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {registration.note} The university payment gateway link will be activated upon release of acceptance notifications.
        </div>
      </div>
    </section>
  );
};
