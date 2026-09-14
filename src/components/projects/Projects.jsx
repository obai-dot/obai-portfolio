import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Hujrah Village",
      description:
        "An interactive 3D web experience for Hujrah Village, featuring immersive navigation, responsive controls and a modern virtual environment.",
      tech: ["React", "Three.js", "React Three Fiber", "Rapier"],
      link: "https://hujrahvillage.vercel.app/",
      featured: true,
    },
    {
      title: "TurnPoint",
      description:
        "A modern technology company website designed to present digital solutions, services and company information with a clean responsive experience.",
      tech: ["React", "JavaScript", "Vite", "CSS"],
      link: "https://turnpoint.vercel.app/",
    },
    {
      title: "BotBuddy",
      description:
        "An AI agent platform that helps businesses create and manage chat and voice bots for customer support, bookings and automated interactions.",
      tech: ["React", "JavaScript", "Supabase", "n8n"],
      link: "https://bot-buddy-ivory.vercel.app/",
      desktopOnly: true,
    },
    {
      title: "Eterna Clinic",
      description:
        "A premium responsive clinic website for dental, aesthetic and skincare services, designed with a luxury modern visual experience.",
      tech: ["React", "Vite", "CSS", "Responsive UI"],
      link: "https://eterna-clinic-pi.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="projects-description">
            Some of the projects I've built while working with modern web
            technologies, responsive interfaces and interactive experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              key={project.title}
              aria-label={`Open ${project.title}`}
            >
              <div className="project-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <div className="project-image">
                <div className="project-glow"></div>

                <span className="project-code">
                  {"</>"}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {project.desktopOnly && (
                  <div className="desktop-notice">
                    <span className="desktop-notice-icon">🖥</span>
                    <span>Best viewed on desktop</span>
                  </div>
                )}

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;