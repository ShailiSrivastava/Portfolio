import React from 'react';
import { ExternalLink, Cpu, Compass, Landmark, Layers } from 'lucide-react';
import { Github } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">03 — PROJECTS</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="section-editorial-heading">
          <h2 className="editorial-section-title">Featured Projects</h2>
          <p className="editorial-section-subtext">
            Full-stack web applications, AI vector search platforms, and personalized web applications.
          </p>
        </div>

        <div className="editorial-case-studies-list">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="glass-panel editorial-project-card">
              <div className="project-card-top">
                <div className="project-index-tag">{project.index}</div>
                <div className="project-meta-info">
                  <span className="project-category-tag">{project.category}</span>
                  <div className="project-action-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="editorial-link-btn" aria-label="GitHub Source Code">
                      <Github size={16} /> Source Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="editorial-link-btn" aria-label="Live Demo">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="editorial-project-title">{project.title}</h3>

              <div className="project-tags-row">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="editorial-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="editorial-bullet-list">
                {project.description.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
