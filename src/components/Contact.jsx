import React from 'react';
import { Mail, Phone, MapPin, Download, ArrowUpRight, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const connectionLinks = [
    {
      title: 'Curriculum Vitae',
      label: 'Shaili Srivastava Resume (PDF)',
      href: PERSONAL_INFO.resumeUrl,
      icon: <FileText size={22} />,
      type: 'Downloadable PDF',
      actionText: 'Download CV',
      download: 'Shaili_Srivastava_Resume.pdf',
      isFeatured: true
    },
    {
      title: 'Email',
      label: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail size={22} />,
      type: 'Direct Email',
      actionText: 'Send Email'
    },
    {
      title: 'Phone',
      label: PERSONAL_INFO.phoneDisplay,
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: <Phone size={22} />,
      type: 'Phone Line',
      actionText: 'Call Phone'
    },
    {
      title: 'GitHub',
      label: 'github.com/ShailiSrivastava',
      href: PERSONAL_INFO.github,
      icon: <Github size={22} />,
      type: 'Code Profile',
      actionText: 'View Profile',
      isExternal: true
    },
    {
      title: 'LinkedIn',
      label: 'linkedin.com/in/shaili-srivastava0908',
      href: PERSONAL_INFO.linkedin,
      icon: <Linkedin size={22} />,
      type: 'Professional Profile',
      actionText: 'Connect on LinkedIn',
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">06 — CONTACT & RESUME</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="section-editorial-heading">
          <h2 className="editorial-section-title">Get In Touch</h2>
          <p className="editorial-section-subtext">
            Download my updated resume PDF or reach out directly via email, phone, GitHub, and LinkedIn.
          </p>
        </div>

        {/* Connections Hub Grid */}
        <div className="editorial-connections-grid">
          {connectionLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              download={link.download || undefined}
              target={link.isExternal ? '_blank' : '_self'}
              rel={link.isExternal ? 'noopener noreferrer' : ''}
              className={`glass-panel connection-hub-card ${link.isFeatured ? 'featured-cv-card' : ''}`}
            >
              <div className="connection-card-top">
                <div className="connection-icon-box">{link.icon}</div>
                <span className="connection-type-badge">{link.type}</span>
              </div>

              <div className="connection-card-body">
                <span className="connection-title-tag">{link.title}</span>
                <h3 className="connection-main-label">{link.label}</h3>
              </div>

              <div className="connection-card-footer">
                <span className="connection-action-text">
                  {link.actionText}
                </span>
                {link.download ? (
                  <Download size={16} className="connection-arrow-icon" />
                ) : (
                  <ArrowUpRight size={16} className="connection-arrow-icon" />
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Base Location & Availability Banner */}
        <div className="glass-panel location-status-banner">
          <div className="location-banner-item">
            <MapPin size={18} />
            <div>
              <span className="location-banner-label">Location</span>
              <p className="location-banner-val">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="location-banner-item">
            <span className="status-indicator-dot"></span>
            <div>
              <span className="location-banner-label">Availability</span>
              <p className="location-banner-val">{PERSONAL_INFO.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
