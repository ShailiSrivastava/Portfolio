# 🌌 Shaili Srivastava — 3D Creative Portfolio & Developer Website

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-Render-22c55e?style=for-the-badge&logo=render)](https://shaili-srivastava-portfolio.onrender.com/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> **Live Website URL:** [https://shaili-srivastava-portfolio.onrender.com/](https://shaili-srivastava-portfolio.onrender.com/)

A modern, high-impact 3D developer portfolio for **Shaili Srivastava** — Computer Science Undergraduate and Computer Vision Engineer specializing in Deep Learning, Computer Vision (YOLOv11, OpenCV), Full-Stack Engineering (React, Node.js, FastAPI), and RAG Architectures.

---

## 🌟 Key Features

- **🌌 Dynamic 3D WebGL Scene (`ThreeBackground.jsx`)**: Powered by Three.js featuring 6 scroll-linked particle geometry transformations and real-time texture regeneration when switching between themes.
- **🌗 Stark Monochrome Light/Dark Mode**: Real-time theme toggle button in the header that shifts color schemes between a deep dark canvas (`#000000`) and a stark light canvas (`#ffffff`).
- **📄 Downloadable Resume Integration**: Direct access to `Shaili_Srivastava_Resume.pdf` from the Top Navbar, Hero banner, Contact section, and Footer.
- **📱 Human-Centered Editorial Layout**: Designed with editorial magazine typography, clean spacing, monospaced section tags, and zero robotic jargon.
- **⚡ High Performance & Mobile Responsive**: Optimized Vite bundle (~600ms build time) with responsive layouts for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React.js (v19), HTML5, Vanilla CSS3 (Custom Design System) |
| **3D & Graphics** | Three.js (WebGL), Dynamic Canvas Particle Textures |
| **Backend & APIs** | Node.js, Express.js, FastAPI, RESTful Standards |
| **AI & Computer Vision** | Python, YOLOv11, OpenCV, PyTorch, RAG, ChromaDB, SentenceTransformers |
| **Build & Tooling** | Vite 8, Lucide React Icons, Git, GitHub |
| **Hosting & Deployment** | Render (Static / Web Service) |

---

## 📚 Section Breakdown

- **01 — INTRO (`Hero.jsx`)**: Executive headline, computer vision & full-stack developer intro, profile overview card, and quick CTA buttons.
- **02 — SKILLS (`Skills.jsx`)**: Categorized technical capabilities (Languages, Frontend, Backend, Computer Vision & AI, Databases, Tools).
- **03 — PROJECTS (`Projects.jsx`)**: Featured project case studies with source code links, technology pills, and key highlights:
  - `CV+YOLO Classic – Augmented Reality Vision System`
  - `RepoMind RAG Matcher`
  - `AI College Helpdesk & Student Helpdesk`
  - `Campus Connect (MERN Stack)`
- **04 — EXPERIENCE (`Experience.jsx`)**: Work history at RD Infro Technology, Motion Cut, and leadership at ENIGMA Club.
- **05 — ACADEMICS & CREDENTIALS (`EducationCertifications.jsx`)**: Academic background at Jain University, Bengaluru (CGPA 8.01/10), Cloud & AI certifications (Oracle, Microsoft, Google, Accenture).
- **06 — CONTACT & RESUME (`Contact.jsx`)**: Direct connection hub for Email, Phone, GitHub, LinkedIn, and instant Resume PDF download.

---

## 📁 Repository Structure

```
PORTFOLIO/
├── public/
│   ├── Shaili_Srivastava_Resume.pdf    # Official Resume PDF
│   └── shaili.jpg                      # Developer Portrait Photo
├── src/
│   ├── assets/                         # Static assets & fallbacks
│   ├── components/
│   │   ├── Contact.jsx                 # Direct Connection & Resume Hub
│   │   ├── EducationCertifications.jsx # Academics & Certifications
│   │   ├── Experience.jsx              # Work History & Deliverables
│   │   ├── Footer.jsx                  # Multi-column Footer & Back-to-Top
│   │   ├── Hero.jsx                    # Intro Banner & Overview Card
│   │   ├── Icons.jsx                   # Custom SVG Brand Icons
│   │   ├── Navbar.jsx                  # Fixed Header & Light/Dark Switcher
│   │   ├── Projects.jsx                # Featured Case Studies
│   │   ├── Skills.jsx                  # Technical Skills Matrix
│   │   └── ThreeBackground.jsx         # WebGL Particle Canvas Scene
│   ├── data/
│   │   └── portfolioData.js            # Centralized Data Source
│   ├── App.jsx                         # Main Container & Theme State
│   ├── main.jsx                        # React Entry Point
│   └── index.css                       # Global Design System & CSS Variables
├── index.html                          # Primary SEO HTML Page
├── package.json                        # Project Dependencies & Scripts
├── vite.config.js                      # Vite Configuration
└── README.md                           # Documentation
```

---

## 🚀 Local Setup & Installation

Follow these steps to run the portfolio locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ShailiSrivastava/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Live Deployment

The website is deployed live on **Render**:
👉 **[https://shaili-srivastava-portfolio.onrender.com/](https://shaili-srivastava-portfolio.onrender.com/)**

---

## 📧 Contact Information

- **Name**: Shaili Srivastava
- **Email**: [shailisrivastava090@gmail.com](mailto:shailisrivastava090@gmail.com)
- **Phone**: +91 9305201801
- **GitHub**: [https://github.com/ShailiSrivastava](https://github.com/ShailiSrivastava)
- **LinkedIn**: [https://www.linkedin.com/in/shaili-srivastava0908/](https://www.linkedin.com/in/shaili-srivastava0908/)
