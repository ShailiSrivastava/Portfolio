import React, { useState } from 'react';
import { Code, Layout, Server, Database, Settings, Terminal } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={18} />,
      skills: ['Java', 'JavaScript', 'Python', 'SQL'],
      desc: 'Writing clean Object-Oriented Programming (OOP) logic, algorithm solutions, and backend scripts (excluding Ruby).',
      spec: 'Java JDK, JavaScript ES6+, Python 3, SQL Query Optimization & Aggregation.'
    },
    {
      title: 'Frontend Engineering',
      icon: <Layout size={18} />,
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3'],
      desc: 'Building responsive web interfaces, interactive components, dynamic layouts, and web page optimizations.',
      spec: 'React Hooks, Next.js Components, Modular CSS & Flexbox, Semantic HTML5.'
    },
    {
      title: 'Backend Development',
      icon: <Server size={18} />,
      skills: ['Node.js', 'Express.js', 'FastAPI'],
      desc: 'Designing scalable RESTful APIs, server routes, middleware pipelines, and Python backend services.',
      spec: 'Express.js Router Middleware, FastAPI Routers, REST API Standards, JSON APIs.'
    },
    {
      title: 'Database Architecture',
      icon: <Database size={18} />,
      skills: ['MongoDB', 'MySQL'],
      desc: 'NoSQL document modeling, relational database schemas, query design, and persistent data storage.',
      spec: 'MongoDB Collections, MySQL Relational Schemas, Indexing, Connection Management.'
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings size={18} />,
      skills: ['Git', 'GitHub', 'Postman', 'Windows', 'Vercel', 'Docker'],
      desc: 'Version control workflows, API testing, containerization, and cloud deployment pipelines.',
      spec: 'Docker Containers, Vercel Hosting, Postman Test Collections, Git Workflows.'
    },
    {
      title: 'Software Engineering',
      icon: <Terminal size={18} />,
      skills: [
        'OOP Principles',
        'Data Structures & Algorithms',
        'SDLC Processes',
        'Debugging',
        'Unit Testing',
        'REST APIs'
      ],
      desc: 'Applying core computer science concepts, runtime analysis, unit testing, and modular software design.',
      spec: 'Algorithm Complexity, Object-Oriented Patterns, Debugging Protocols, Clean Code.'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container reveal">
        <div className="chapter-header-rule">
          <span className="chapter-index-badge">02 — SKILLS</span>
          <span className="chapter-rule-line"></span>
        </div>

        <div className="section-editorial-heading">
          <h2 className="editorial-section-title">Technical Skills & Expertise</h2>
          <p className="editorial-section-subtext">
            Categorized technical capabilities and software engineering principles applied across projects.
          </p>
        </div>

        {/* Tabbed Spec Sheet */}
        <div className="glass-panel editorial-matrix-box">
          <div className="matrix-nav-column">
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`matrix-nav-item ${activeCategory === idx ? 'active-matrix-nav' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                <span className="matrix-nav-icon">{cat.icon}</span>
                <span className="matrix-nav-text">{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="matrix-content-column">
            <div className="matrix-content-header">
              <h3>{skillCategories[activeCategory].title}</h3>
              <span className="matrix-code-badge">Category 0{activeCategory + 1}</span>
            </div>

            <div className="matrix-content-body">
              <div className="matrix-block">
                <span className="matrix-block-label">Technologies</span>
                <div className="matrix-pills-row">
                  {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                    <span key={sIdx} className="editorial-tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="matrix-block">
                <span className="matrix-block-label">Overview</span>
                <p className="matrix-block-text">{skillCategories[activeCategory].desc}</p>
              </div>

              <div className="matrix-block">
                <span className="matrix-block-label">Key Highlights</span>
                <p className="matrix-block-code">{skillCategories[activeCategory].spec}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
