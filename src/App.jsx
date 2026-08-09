import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [menuOpen, setMenuOpen] = useState(false);

  // Mouse-following 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Detect current section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div
      className="app"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="background">
        <div className="stars stars-one"></div>
        <div className="stars stars-two"></div>
        <div className="stars stars-three"></div>

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <span>O</span>
          <div>
            <strong>OBAI</strong>
            <small>SOFTWARE ENGINEER</small>
          </div>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="nav-contact"
          onClick={() => scrollToSection("contact")}
        >
          LET'S TALK
        </button>
      </nav>

      {/* HOME */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-small">
            <span className="line"></span>
            SOFTWARE ENGINEER
          </div>

          <h1>
            HI, I'M
            <br />
            <span>OBAI</span>
            <br />
            KHATATBEH
          </h1>

          <p>
            I build modern web applications and AI-powered experiences
            using React, JavaScript, and modern backend technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              VIEW MY WORK
              <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT ME
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Integration</span>
            </div>

            <div>
              <strong>SQL</strong>
              <span>Database</span>
            </div>
          </div>
        </div>

        {/* CSS 3D OBJECT */}
        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="cube">
            <div className="cube-face front">O</div>
            <div className="cube-face back">O</div>
            <div className="cube-face right">AI</div>
            <div className="cube-face left">AI</div>
            <div className="cube-face top">DEV</div>
            <div className="cube-face bottom">DEV</div>
          </div>

          <div className="floating-card card-one">
            <span>01</span>
            <strong>CODE</strong>
          </div>

          <div className="floating-card card-two">
            <span>02</span>
            <strong>CREATE</strong>
          </div>

          <div className="floating-card card-three">
            <span>03</span>
            <strong>BUILD</strong>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-grid">
          <div className="about-title">
            <h2>
              BUILDING
              <br />
              <span>IDEAS</span>
              <br />
              INTO CODE.
            </h2>
          </div>

          <div className="about-text">
            <p className="large-text">
              I'm Obai Khatatbeh, a Software Engineering graduate from
              The Hashemite University.
            </p>

            <p>
              I have hands-on experience building modern responsive web
              applications, full-stack applications, and AI-powered
              features.
            </p>

            <p>
              I enjoy solving problems, learning new technologies, and
              turning ideas into useful digital products.
            </p>

            <div className="about-info">
              <div>
                <span>EDUCATION</span>
                <strong>B.Sc. Software Engineering</strong>
                <small>The Hashemite University · 2024</small>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Amman, Jordan</strong>
              </div>

              <div>
                <span>LANGUAGES</span>
                <strong>Arabic / English</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>02</span>
          SKILLS
        </div>

        <div className="skills-header">
          <h2>
            MY
            <br />
            <span>TOOLKIT</span>
          </h2>

          <p>
            Technologies and concepts I use to design, build, and
            improve software applications.
          </p>
        </div>

        <div className="skills-orbit">
          <div className="skill-center">
            <span>O</span>
            <small>DEVELOPER</small>
          </div>

          <div className="skill-node node-one">
            <span>JS</span>
            JavaScript
          </div>

          <div className="skill-node node-two">
            <span>RE</span>
            React
          </div>

          <div className="skill-node node-three">
            <span>JA</span>
            Java
          </div>

          <div className="skill-node node-four">
            <span>CS</span>
            CSS
          </div>

          <div className="skill-node node-five">
            <span>HT</span>
            HTML
          </div>

          <div className="skill-node node-six">
            <span>DB</span>
            Supabase
          </div>

          <div className="skill-node node-seven">
            <span>GI</span>
            Git
          </div>
        </div>

        <div className="skills-list">
          <div className="skill-row">
            <span>01</span>
            <strong>JavaScript</strong>
            <small>ES6+</small>
          </div>

          <div className="skill-row">
            <span>02</span>
            <strong>React.js</strong>
            <small>Frontend</small>
          </div>

          <div className="skill-row">
            <span>03</span>
            <strong>Java</strong>
            <small>OOP</small>
          </div>

          <div className="skill-row">
            <span>04</span>
            <strong>Supabase</strong>
            <small>PostgreSQL</small>
          </div>

          <div className="skill-row">
            <span>05</span>
            <strong>Git / GitHub</strong>
            <small>Version Control</small>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-label">
          <span>03</span>
          PROJECTS
        </div>

        <div className="projects-header">
          <h2>
            SELECTED
            <br />
            <span>WORK</span>
          </h2>

          <p>
            A selection of projects demonstrating my experience in
            frontend, full-stack development, and AI integration.
          </p>
        </div>

        <div className="projects-grid">
          {/* PROJECT 1 */}
          <article className="project-card featured-project">
            <div className="project-number">01</div>

            <div className="project-visual botbuddy-visual">
              <div className="bot-face">
                <div className="bot-eye"></div>
                <div className="bot-eye"></div>
                <div className="bot-mouth"></div>
              </div>

              <div className="project-floating-text">
                BOT
                <br />
                BUDDY
              </div>
            </div>

            <div className="project-content">
              <div className="project-category">
                AI / FULL STACK
              </div>

              <h3>Bot Buddy</h3>

              <p>
                A conversational AI web application built with React
                and Supabase. Includes authentication, AI chat
                functionality, responsive UI, and database
                integration.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Supabase</span>
                <span>AI</span>
                <span>Vite</span>
              </div>

              <a
                href="https://github.com/obai-dot/bot-buddy"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW ON GITHUB →
              </a>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="project-card">
            <div className="project-number">02</div>

            <div className="project-visual portfolio-visual">
              <div className="screen">
                <div className="screen-bar"></div>

                <div className="screen-content">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-category">
                FRONTEND
              </div>

              <h3>Responsive Web Applications</h3>

              <p>
                A collection of responsive interactive web
                applications demonstrating modern JavaScript,
                React component architecture, UX principles, and
                mobile-first development.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <button
                className="project-link"
                onClick={() => scrollToSection("contact")}
              >
                REQUEST DETAILS →
              </button>
            </div>
          </article>

          {/* PROJECT 3 */}
          <article className="project-card">
            <div className="project-number">03</div>

            <div className="project-visual java-visual">
              <div className="code-lines">
                <span>class Developer {"{"}</span>
                <span> &nbsp; build();</span>
                <span> &nbsp; learn();</span>
                <span> &nbsp; create();</span>
                <span>{"}"}</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-category">
                SOFTWARE ENGINEERING
              </div>

              <h3>Java Development</h3>

              <p>
                Academic and personal experience focused on
                object-oriented programming, data structures,
                algorithms, software design patterns, and clean
                code principles.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>OOP</span>
                <span>Algorithms</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE / EDUCATION */}
      <section className="section timeline-section">
        <div className="section-label">
          <span>04</span>
          JOURNEY
        </div>

        <div className="timeline-header">
          <h2>
            MY
            <br />
            <span>JOURNEY</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>EDUCATION</span>
              <h3>Software Engineering</h3>
              <p>
                Bachelor of Science in Software Engineering at The
                Hashemite University.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">PROJECT</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>FULL STACK</span>
              <h3>AI Chat Bot</h3>
              <p>
                Designed and developed an AI chatbot using React,
                Supabase, and AI API integration.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">NOW</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>FUTURE</span>
              <h3>Building & Learning</h3>
              <p>
                Continuing to develop modern applications while
                expanding my software engineering skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-label">
          <span>05</span>
          CONTACT
        </div>

        <div className="contact-container">
          <div className="contact-title">
            <h2>
              LET'S
              <br />
              <span>BUILD</span>
              <br />
              SOMETHING.
            </h2>

            <p>
              Have an idea, project, or opportunity?
              <br />
              Let's talk.
            </p>
          </div>

          <div className="contact-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>contact.exe</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span>&gt;</span> initializing contact...
              </div>

              <div className="terminal-line">
                <span>&gt;</span> available_for_work: true
              </div>

              <div className="terminal-line">
                <span>&gt;</span> location: Amman, Jordan
              </div>

              <br />

              <a href="mailto:obaieyad@gmail.com">
                <span>&gt;</span> obaieyad@gmail.com
              </a>

              <a href="tel:+962775772290">
                <span>&gt;</span> +962 775 772 290
              </a>

              <a
                href="https://github.com/obai-dot"
                target="_blank"
                rel="noreferrer"
              >
                <span>&gt;</span> github.com/obai-dot
              </a>

              <div className="cursor"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          © {new Date().getFullYear()} OBAI KHATATBEH
        </div>

        <div>
          BUILT WITH <span>REACT</span> + CSS
        </div>

        <button onClick={() => scrollToSection("home")}>
          BACK TO TOP ↑
        </button>
      </footer>
    </div>
  );
}

export default App;