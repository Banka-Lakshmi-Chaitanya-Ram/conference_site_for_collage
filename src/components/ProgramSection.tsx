import React from 'react';
import { Clock } from 'lucide-react';

export const ProgramSection: React.FC = () => {
  return (
    <section id="program" className="section section-alt" aria-labelledby="program-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Schedule</span>
          <h2 id="program-heading" className="section-title">Conference Program</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Presentation format and duration pending confirmation. To be announced.
          </p>
        </div>

        <div className="advisory-box" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Clock size={16} color="var(--vignan-crimson)" />
            <div className="advisory-box-title" style={{ margin: 0 }}>Program Schedule Status</div>
          </div>
          <div className="advisory-box-body">
            Technical session schedule and keynote timetable will be published once paper submissions and peer reviews are completed.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
