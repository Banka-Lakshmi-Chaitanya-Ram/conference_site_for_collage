import React from 'react';

export const PublicationSection: React.FC = () => {
  return (
    <section id="publication-guidelines" className="section section-alt" aria-labelledby="publication-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Publication Standards</span>
          <h2 id="publication-heading" className="section-title">Publication & Review Standards</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Ethical review principles, camera-ready submission guidelines, and publisher compliance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
          {/* Card 1: Review Criteria */}
          <div className="about-panel">
            <h3 className="panel-title">Double-Blind Peer Review</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '12px' }}>
              To ensure impartiality and scientific credibility, ICVLIC enforces a strict double-blind evaluation model. Authors and reviewers remain anonymous throughout the cycle.
            </p>
            <ul className="academic-list">
              <li>Technical originality and methodology</li>
              <li>Empirical validation and reproducibility</li>
              <li>Adherence to citation integrity standards</li>
            </ul>
          </div>

          {/* Card 2: Camera Ready Submissions */}
          <div className="about-panel">
            <h3 className="panel-title">Camera-Ready Submissions</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '12px' }}>
              Authors of accepted articles must incorporate reviewer revisions and submit the final camera-ready copy in accordance with standard conference formatting requirements.
            </p>
            <ul className="academic-list">
              <li>Complete institutional author metadata</li>
              <li>Signed copyright consent form</li>
              <li>PDF compliant with font embedding rules</li>
            </ul>
          </div>

          {/* Card 3: Indexing Policy Notice */}
          <div className="about-panel">
            <h3 className="panel-title">Publication Transparency</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '12px' }}>
              Conference proceedings publication agreements are subject to formal contract execution. No unratified indexing or publisher series is declared without official approval.
            </p>
            <div style={{ backgroundColor: 'var(--bg-alt)', borderLeft: '3px solid var(--vignan-crimson)', padding: '10px 12px', marginTop: '10px', borderRadius: '2px' }}>
              <p style={{ fontSize: '12px', color: 'var(--academic-navy)', fontWeight: 600, margin: 0 }}>
                Official publication series identification will be published upon final contract execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
