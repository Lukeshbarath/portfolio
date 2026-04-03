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
      title: "Project Title 1",
      category: "Machine Learning",
      description: "Brief description of your ML project. What problem does it solve? What techniques did you use? What were the results?",
      tech: ["Python", "TensorFlow", "scikit-learn"],
      github: "https://github.com/yourusername/project1",
      demo: ""
    },
    {
      title: "Project Title 2",
      category: "Data Science",
      description: "Description of your data science project. Include key insights, datasets used, and analytical approaches.",
      tech: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/project2",
      demo: ""
    },
    {
      title: "Project Title 3",
      category: "AI Engineering",
      description: "Your AI/GenAI project description. What did you build? What was innovative about it?",
      tech: ["Python", "OpenAI API", "LangChain"],
      github: "https://github.com/yourusername/project3",
      demo: ""
    }
  ];

  const skills = {
    "Embedded Systems": ["C/C++", "Real-Time OS", "Firmware Development", "Hardware Integration", "Printer Systems"],
    "AI/ML": ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Machine Learning", "Deep Learning"],
    "Data Science": ["SQL", "Pandas", "NumPy", "Data Analysis", "Statistical Modeling", "Visualization"],
    "Tools & Platforms": ["Git", "Linux", "Docker", "Jupyter", "VS Code", "CI/CD"]
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
            <span>Senior Embedded Software Engineer</span>
          </div>
          <h1 className="hero-title">
            Building the Bridge from
            <span className="gradient-text"> Embedded Systems</span> to
            <span className="gradient-text"> Artificial Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Full-time Senior Software Engineer in embedded systems with a passion for AI/ML. 
            Currently pursuing BS in Data Science while building intelligent solutions.
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
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
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
                I'm a Senior Software Engineer specializing in embedded systems, with hands-on experience 
                in firmware development for printer systems. While I excel in low-level programming and 
                hardware integration, my true passion lies in the intersection of software engineering and 
                artificial intelligence.
              </p>
              <p>
                Currently, I'm actively transitioning into AI/ML engineering through a structured learning 
                path that combines academic rigor (BS in Data Science) with practical project work. My 
                embedded systems background gives me a unique perspective on ML systems engineering, edge AI, 
                and optimization.
              </p>
              <p>
                I'm seeking opportunities in AI/ML Engineering, Data Engineering, or AI-adjacent software 
                roles where I can leverage my systems thinking, software engineering discipline, and growing 
                expertise in machine learning.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <FaMicrochip className="highlight-icon" />
                  <div>
                    <h4>Embedded Systems Expert</h4>
                    <p>Senior-level firmware development & real-time systems</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaBrain className="highlight-icon" />
                  <div>
                    <h4>AI/ML Transition</h4>
                    <p>Actively building portfolio in GenAI, ML Engineering & Data Science</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>Strong Fundamentals</h4>
                    <p>Python expert with deep SQL knowledge & systems thinking</p>
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
                <div className="timeline-date">Present</div>
                <h3>Senior Software Engineer - Embedded Systems</h3>
                <h4>Company Name</h4>
                <p className="timeline-description">
                  Leading firmware development for printer systems. Responsible for low-level programming, 
                  hardware integration, and real-time system optimization. Key achievements include 
                  [add your specific accomplishments here].
                </p>
                <div className="timeline-tech">
                  <span>C/C++</span>
                  <span>RTOS</span>
                  <span>Firmware</span>
                  <span>Hardware Integration</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">In Progress</div>
                <h3>BS in Data Science</h3>
                <h4>University Name</h4>
                <p className="timeline-description">
                  Pursuing degree in Data Science while working full-time. Coursework includes machine learning, 
                  statistical analysis, data engineering, and AI systems. Applying concepts through hands-on projects.
                </p>
                <div className="timeline-tech">
                  <span>Machine Learning</span>
                  <span>Statistics</span>
                  <span>Data Engineering</span>
                  <span>Python</span>
                </div>
              </div>
            </div>

            {/* Add more experience entries here */}
            <div className="timeline-item placeholder">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">YYYY - YYYY</div>
                <h3>Previous Role Title</h3>
                <h4>Previous Company</h4>
                <p className="timeline-description">
                  Add description of previous roles here. Include key responsibilities and achievements.
                </p>
                <div className="timeline-tech">
                  <span>Tech 1</span>
                  <span>Tech 2</span>
                  <span>Tech 3</span>
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
            <h2 className="section-title">AI/ML Projects</h2>
            <div className="section-line"></div>
          </div>
          <p className="section-subtitle">
            Building practical AI/ML solutions while transitioning from embedded systems to intelligent software
          </p>
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
          <div className="projects-note">
            <p>💡 <strong>Note:</strong> Projects section ready for your work. Update the project data in App.js with your actual projects.</p>
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
              I'm currently seeking opportunities in AI/ML Engineering, Data Engineering, or AI-adjacent 
              software roles. If you're looking for someone with strong software engineering fundamentals, 
              systems thinking from embedded work, and genuine passion for AI/ML, let's connect!
            </p>
            <a href="mailto:your.email@example.com" className="btn btn-primary btn-large">
              <FaEnvelope /> Send Me an Email
            </a>
            <div className="contact-social">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
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
