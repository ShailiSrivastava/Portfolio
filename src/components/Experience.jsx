import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">04 — EXPERIENCE</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="section-editorial-heading">
          <h2 className="editorial-section-title">Work Experience</h2>
          <p className="editorial-section-subtext">
            Internships, developer roles, and technical operations leadership.
          </p>
        </div>

        <div className="editorial-experience-list">
          {EXPERIENCES_DATA.map((exp, index) => (
            <div key={index} className="glass-panel editorial-exp-card">
              <div className="exp-card-left">
                <span className="exp-index-tag">{exp.index}</span>
                <h3 className="exp-role-heading">{exp.role}</h3>
                <h4 className="exp-company-sub">{exp.company}</h4>
                <div className="exp-time-badge">
                  <Calendar size={13} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="exp-card-right">
                <span className="exp-section-label">Key Contributions & Accomplishments</span>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <ChevronRight size={14} className="exp-chevron" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
