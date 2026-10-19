import React from 'react';
import { Eye, MessageSquareText, Cpu, Layers } from 'lucide-react';
import { conferenceConfig, type ResearchTrack } from '../config/conferenceConfig';

export const ResearchTracks: React.FC = () => {
  const { tracks, tracksIntro } = conferenceConfig.callForPapers;

  const getTrackIcon = (number: string) => {
    switch (number) {
      case 'Track 1':
        return <Eye size={18} color="#38bdf8" />;
      case 'Track 2':
        return <MessageSquareText size={18} color="#38bdf8" />;
      case 'Track 4':
        return <Cpu size={18} color="#38bdf8" />;
      case 'Track 5':
      default:
        return <Layers size={18} color="#38bdf8" />;
    }
  };

  return (
    <section id="research-tracks" className="section section-alt" aria-labelledby="tracks-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Technical Domains</span>
          <h2 id="tracks-heading" className="section-title">Conference Tracks</h2>
          <div className="section-rule" />
          <p className="section-subtitle">
            {tracksIntro}
          </p>
        </div>

        <div className="tracks-editorial-grid">
          {tracks.map((track: ResearchTrack) => (
            <div key={track.id} className="track-editorial-card">
              <div className="track-card-header">
                <span className="track-tag-rubric">{track.number}</span>
                {getTrackIcon(track.number)}
              </div>

              <div className="track-card-body">
                <h3 className="track-editorial-title">{track.title}</h3>
                <p className="track-editorial-summary">{track.description}</p>

                <ul className="track-bullet-list">
                  {track.topics.map((topic, tIdx) => (
                    <li key={tIdx}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchTracks;
