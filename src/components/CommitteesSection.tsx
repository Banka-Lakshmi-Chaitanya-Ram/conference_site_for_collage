import React from 'react';
import { conferenceConfig, type CommitteeCategory } from '../config/conferenceConfig';

export const CommitteesSection: React.FC = () => {
  const { committees } = conferenceConfig;

  return (
    <section id="committees" className="section" aria-labelledby="committees-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Organization</span>
          <h2 id="committees-heading" className="section-title">Conference Committees</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Executive leadership, organizing chairs, and technical advisory board for ICVLIC.
          </p>
        </div>

        <div className="committee-directory-stack">
          {committees.map((category: CommitteeCategory) => (
            <div key={category.id} className="committee-roster-card">
              <h3 className="committee-roster-title">{category.title}</h3>
              {category.description && (
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {category.description}
                </p>
              )}

              <div className="committee-roster-grid">
                {category.members.map((member, idx) => (
                  <div key={idx} className="committee-roster-member">
                    <span className="member-fullname">{member.name}</span>
                    {member.role && <span className="member-role-title">{member.role}</span>}
                    {member.department && <span className="member-dept-inst">{member.department}</span>}
                    <span className="member-dept-inst">{member.institution}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
