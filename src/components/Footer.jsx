import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ExternalLink, Download, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Academics & Credentials', href: '#education' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  return (
    <footer className="footer-panel detailed-footer">
      <div className="container">
        {/* Main Footer Multi-Column Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Brand & Profile Brief */}
          <div className="footer-col brand-col">
            <a href="#home" className="logo footer-logo">
              <span className="logo-symbol">&lt;</span>
              Shaili
              <span className="logo-symbol"> /&gt;</span>
            </a>
            <p className="footer-brand-desc">
              Computer Science undergraduate & Computer Vision Engineer specializing in YOLOv11, OpenCV, FastAPI, React, and RAG architectures.
            </p>

            <div className="footer-status-tag">
              <span className="status-indicator-dot"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <div className="footer-location-tag">
              <MapPin size={14} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Project Repositories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Project Repositories</h4>
            <ul className="footer-links-list">
              {PROJECTS_DATA.map((proj, idx) => (
                <li key={idx}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-project-link"
                  >
                    <span>{proj.title}</span>
                    <ExternalLink size={12} className="link-ext-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Connections & Download Resume */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Connections</h4>
            <ul className="footer-contact-list">
              <li>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Shaili_Srivastava_Resume.pdf"
                  className="footer-contact-item footer-cv-highlight"
                >
                  <FileText size={14} />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-contact-item">
                  <Mail size={14} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="footer-contact-item">
                  <Phone size={14} />
                  <span>{PERSONAL_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <Github size={14} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rule Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-left-credit">
            <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>

          <div className="footer-center-tech">
            <span>Built with React, Vite & Three.js</span>
          </div>

          <div className="footer-right-actions">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Shaili_Srivastava_Resume.pdf"
              className="back-to-top-btn footer-download-btn"
            >
              <Download size={14} />
              <span>DOWNLOAD CV</span>
            </a>

            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
