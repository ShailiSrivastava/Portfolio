import React from 'react';
import { GraduationCap, ShieldCheck, Award } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, MILESTONES_DATA } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="edu-cert-section">
      <div className="container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">05 — ACADEMICS & CREDENTIALS</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="section-editorial-heading">
          <h2 className="editorial-section-title">Education & Certifications</h2>
          <p className="editorial-section-subtext">
            Academic degree, university coursework, software certifications, and key accomplishments.
          </p>
        </div>

        <div className="editorial-edu-grid">
          {/* Left: Academic Record */}
          <div className="glass-panel editorial-vault-box">
            <div className="vault-box-header">
              <GraduationCap size={18} />
              <h3>Education</h3>
            </div>

            <div className="vault-box-body">
              <h4 className="vault-school-name">{EDUCATION_DATA.school}</h4>
              <p className="vault-degree-name">{EDUCATION_DATA.degree}</p>

              <div className="vault-stats-row">
                <div className="vault-stat">
                  <span className="stat-label">Duration</span>
                  <span className="stat-val">{EDUCATION_DATA.timeline}</span>
                </div>
                <div className="vault-stat">
                  <span className="stat-label">CGPA</span>
                  <span className="stat-val">{EDUCATION_DATA.cgpa}</span>
                </div>
              </div>

              <div className="vault-coursework">
                <span className="coursework-label">Relevant Coursework</span>
                <div className="coursework-pills-row">
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <span key={idx} className="editorial-course-pill">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Certifications Vault */}
          <div className="glass-panel editorial-vault-box">
            <div className="vault-box-header">
              <ShieldCheck size={18} />
              <h3>Certifications</h3>
            </div>

            <div className="vault-certs-list">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div key={idx} className="editorial-cert-row">
                  <div className="cert-row-top">
                    <span className="cert-code-tag">{cert.issuer}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  <h4 className="cert-row-title">{cert.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="glass-panel editorial-milestones-box">
          <div className="vault-box-header">
            <Award size={18} />
            <h3>Key Accomplishments</h3>
          </div>

          <div className="editorial-milestones-grid">
            {MILESTONES_DATA.map((ach, idx) => (
              <div key={idx} className="milestone-block">
                <span className="milestone-idx">0{idx + 1}</span>
                <p className="milestone-desc">{ach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
