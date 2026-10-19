import React from 'react';
import { Clock } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

export const RegistrationSection: React.FC = () => {
  const { registration } = conferenceConfig;

  return (
    <section id="registration" className="section" aria-labelledby="registration-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Registration</span>
          <h2 id="registration-heading" className="section-title">Registration</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {registration.intro}
          </p>
        </div>

        {/* Academic Fee Table matching source categories */}
        <div className="academic-table-container" style={{ marginBottom: '22px' }}>
          <table className="academic-table">
            <thead>
              <tr>
                <th style={{ width: '60%' }}>Registration Category</th>
                <th style={{ width: '40%' }}>Registration Fee</th>
              </tr>
            </thead>
            <tbody>
              {registration.categories.map((cat, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="td-milestone">{cat.category}</div>
                  </td>
                  <td>
                    <span className="tba-badge">
                      {cat.fee}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Advisory Box */}
        <div className="advisory-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Clock size={16} color="var(--vignan-crimson)" />
            <div className="advisory-box-title" style={{ margin: 0 }}>Registration Status</div>
          </div>
          <div className="advisory-box-body">
            {registration.status}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
