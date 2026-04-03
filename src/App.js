import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaBrain, FaMicrochip, FaRocket } from 'react-icons/fa';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Placeholder data - UPDATE THESE WITH YOUR ACTUAL INFO
  const projects = [
  {
    title: "Document Q/A System (RAG)",
    category: "AI / GenAI",
    description: "Built a RAG-based system to query custom documents using LLMs. Implemented retrieval + response pipeline using Ollama for local inference.",
    tech: ["Python", "RAG", "Ollama"],
    github: "https://github.com/Lukeshbarath/RAG-V1.0",
  },
  {
    title: "Embedded Safety Device",
    category: "Embedded Systems",
    description: "Developed an Arduino-based safety device with GPS and GSM for real-time location tracking and alerts. Led end-to-end implementation.",
    tech: ["Arduino", "C++", "GSM", "GPS"],

  },
  {
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description: "Built a content-based recommender using TF-IDF and cosine similarity to suggest similar movies based on input.",
    tech: ["Python", "TF-IDF", "Cosine Similarity"],
    github: "https://github.com/Lukeshbarath/Movie-recommendation-system",
  }
];

  const skills = {
  "Embedded Systems": ["C++", "Firmware Development", "Linux", "Hardware Integration"],
  "AI/ML": ["Python", "RAG", "LLMs", "scikit-learn"],
  "Data Science": ["Pandas", "NumPy", "Data Analysis"],
  "Tools & Platforms": ["Git", "Linux", "Jupyter", "VS Code"]
};

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-text">LUKE</span>
            <span className="logo-bracket">{'/>'}</span>
          </div>
          <ul className="nav-menu">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <li key={section}>
                <button 
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <FaMicrochip className="badge-icon" />
            <span>Senior Software Engineer</span>
          </div>
          <h1 className="hero-title">
           Embedded Systems Engineer
            <span className="gradient-text"> exploring AI & Data Science</span>
          </h1>
          <p className="hero-subtitle">
            Working on firmware systems at HCLTech. 
            Currently learning data science and building small AI/ML projects.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <FaRocket /> View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Lukeshbarath" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lukesh-barath-s-286382250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:stlukeshbarath@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an Embedded Software Engineer working on firmware systems at HCLTech, mainly using Linux and C++.
              </p>
              <p>
                Alongside this, I'm pursuing a BS in Data Science from IIT Madras and exploring machine learning and generative AI through hands-on projects.
              </p>
              <p>
                I'm interested in understanding how intelligence can be applied to real-world systems, especially where software interacts closely with hardware.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <FaMicrochip className="highlight-icon" />
                  <div>
                    <h4>Embedded Systems</h4>
                    <p>Firmware development, debugging, Linux-based systems</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaBrain className="highlight-icon" />
                  <div>
                    <h4>AI/ML </h4>
                    <p>Working on RAG, basic ML systems, data-driven projects</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>Core skills</h4>
                    <p>C++, Python, Git, systems-level problem solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Aug 2024 - Present</div>
                <h3>Senior Software Engineer - Embedded Systems</h3>
                <h4>HCLTech</h4>
                <p className="timeline-description">
                  Working on firmware for printer systems. Involved in debugging issues, developing features, and working in Linux-based environments using C++ and Git.
                </p>
                <div className="timeline-tech">
                  <span>C++</span>
                  <span>Linux</span>
                  <span>Firmware</span>
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Jan 2024 - Jul 2024</div>
                <h3>Academic Trainee</h3>
                <h4>HCLTech</h4>
                <p className="timeline-description">
                  Trained in embedded systems and firmware development. Gained exposure to development workflows, debugging, and system-level concepts.
                </p>
                <div className="timeline-tech">
                  <span>C++</span>
                  <span>Linux</span>
                  <span>Debugging</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2024 - Present</div>
                <h3>BS in Data Science</h3>
                <h4>IIT Madras</h4>
                <p className="timeline-description">
                  Pursuing data science alongside full-time work. Learning machine learning, data analysis, and building small AI/ML projects.
                </p>
                <div className="timeline-tech">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Data Analysis</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2025</div>
                <h3>BE in Electronics and Communication Engineering</h3>
                <h4>Sri Sairam Engineering College</h4>
                <p className="timeline-description">
                  Studied core electronics, embedded systems, and programming fundamentals. Built projects involving Arduino, communication modules, and system-level concepts.
                </p>
                <div className="timeline-tech">
                  <span>C++</span>
                  <span>Embedded Systems</span>
                  <span>Arduino</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03.</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04.</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div className="skill-category" key={index}>
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-items">
                  {skillList.map((skill, i) => (
                    <span className="skill-item" key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-number">05.</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <p className="contact-text">
              I'm an Embedded Software Engineer exploring AI/ML through hands-on projects. 
               Open to opportunities and collaborations in this space.
            </p>
            <a href="mailto:stlukeshbarath@gmail.com" className="btn btn-primary btn-large">
              <FaEnvelope /> Send Me an Email
            </a>
            <div className="contact-social">
              <a href="https://github.com/Lukeshbarath" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/lukesh-barath-s-286382250/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with React • Deployed on GitHub Pages</p>
        <p>© {new Date().getFullYear()} Luke. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
