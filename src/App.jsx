import React, { useEffect, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
  }, [theme]);

  useEffect(() => {
    // 1. Observe active section to morph 3D particle background
    const sectionIds = ['home', 'skills', 'projects', 'experience', 'education', 'contact'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          window.dispatchEvent(new CustomEvent('sectionChange', { detail: id }));
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Observe reveal elements for scroll animation
    const revealCallback = (entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          self.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* 3D WebGL Background Scene */}
      <ThreeBackground theme={theme} />

      {/* Navigation Overlay with Theme Switcher */}
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main className="app-container">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
