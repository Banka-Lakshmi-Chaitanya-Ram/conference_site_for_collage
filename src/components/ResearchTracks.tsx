import React from 'react';
import { conferenceConfig, type ResearchTrack } from '../config/conferenceConfig';

export const ResearchTracks: React.FC = () => {
  const { tracks } = conferenceConfig.callForPapers;

  return (
    <section id="research-tracks" className="section" aria-labelledby="tracks-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Conference Tracks</span>
          <h2 id="tracks-heading" className="section-title">Research Areas & Thematic Tracks</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            Submissions are categorized across four principal thematic domains.
          </p>
        </div>

        <div className="tracks-editorial-grid">
          {tracks.map((track: ResearchTrack, index: number) => (
            <div key={track.id} className="track-editorial-card">
              <span className="track-tag-rubric">Track 0{index + 1}</span>
              <h3 className="track-editorial-title">{track.title.replace(/^Track \d+:\s*/, '')}</h3>
              <p className="track-editorial-summary">{track.description}</p>

              <ul className="track-bullet-list">
                {track.topics.map((topic, tIdx) => (
                  <li key={tIdx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
