import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Download } from 'lucide-react';
import { Github, Linkedin, Sun, Moon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="logo-symbol">&lt;</span>
          Shaili
          <span className="logo-symbol"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item ${
                activeSection === link.href.substring(1) ? 'active-nav-link' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social, Theme Switcher & Download CV Button (Desktop) */}
        <div className="nav-socials-desktop">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Shaili_Srivastava_Resume.pdf"
            className="btn-download-cv"
            title="Download Shaili Srivastava Resume"
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="theme-toggle-text">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>
          
          <div className="nav-divider"></div>

          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="nav-social-icon" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-menu-mobile glass-panel">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Shaili_Srivastava_Resume.pdf"
            className="btn-download-cv mobile-cv-btn"
            onClick={() => setIsOpen(false)}
          >
            <Download size={16} />
            <span>Download Resume PDF</span>
          </a>

          <button
            className="theme-toggle-btn mobile-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>SWITCH TO {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item-mobile ${
                activeSection === link.href.substring(1) ? 'active-nav-link' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="nav-socials-mobile">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="nav-social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
