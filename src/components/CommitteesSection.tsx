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
            Organizing leadership and committee structures for ICVLIC.
          </p>
        </div>

        <div className="committee-directory-stack">
          {committees.map((category: CommitteeCategory) => (
            <div key={category.id} className="committee-roster-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <h3 className="committee-roster-title" style={{ margin: 0 }}>{category.title}</h3>
                <span className="tba-badge">
                  {category.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
