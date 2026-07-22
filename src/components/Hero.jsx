import React from 'react';
import { ArrowRight, Mail, Phone, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import shailiPortrait from '../assets/shaili.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">01 — INTRO</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="hero-grid-split">
          {/* Left Column: Human Editorial Headline */}
          <div className="hero-left-pane">
            <div className="hero-human-badge">
              <span className="human-badge-dot"></span>
              {PERSONAL_INFO.availability}
            </div>

            <h1 className="hero-editorial-title">
              Shaili<br />
              Srivastava
            </h1>
            <h2 className="hero-editorial-subtitle">
              {PERSONAL_INFO.title}
            </h2>

            <p className="hero-editorial-description">
              Computer Science undergraduate and Computer Vision Engineer with hands-on experience in Deep Learning, Computer Vision,
              and Full-Stack Development. Built real-time AI applications using Python, YOLOv11, OpenCV, Flask, React.js, Next.js, and FastAPI.
              Strong foundation in OOP, Data Structures & Algorithms <strong>({PERSONAL_INFO.dsaCount} problems solved)</strong>.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Shaili_Srivastava_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={16} /> Download CV
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Overview Card */}
          <div className="hero-right-pane">
            <div className="glass-panel editorial-portrait-card">
              <div className="portrait-image-wrapper">
                <img
                  src={shailiPortrait}
                  alt="Shaili Srivastava - Full Stack Developer & Computer Vision Engineer"
                  className="hero-portrait-img"
                />
              </div>

              <div className="editorial-box-header">
                <h3>Quick Overview</h3>
              </div>
              
              <div className="editorial-spec-rows">
                <div className="editorial-row">
                  <span className="row-key">Degree</span>
                  <span className="row-val">B.Tech Computer Science</span>
                </div>
                <div className="editorial-row">
                  <span className="row-key">Specialization</span>
                  <span className="row-val">Computer Vision & AI Engineering</span>
                </div>
                <div className="editorial-row">
                  <span className="row-key">Problem Solved</span>
                  <span className="row-val">{PERSONAL_INFO.dsaCount} DSA Problems</span>
                </div>
                <div className="editorial-row">
                  <span className="row-key">Main Stack</span>
                  <span className="row-val">YOLOv11, OpenCV, PyTorch, React, FastAPI</span>
                </div>
              </div>

              <div className="editorial-box-footer">
                <div className="editorial-social-links">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="social-box-icon" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="social-box-icon" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="social-box-icon" aria-label="Email">
                    <Mail size={18} />
                  </a>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="social-box-icon" aria-label="Phone">
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
