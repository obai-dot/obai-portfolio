import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "BotBuddy",
      description:
        "An AI agent platform that helps businesses create and manage chat and voice bots for customer support and bookings.",
      tech: ["React", "JavaScript", "Supabase", "n8n"],
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio designed to showcase my skills, projects and experience.",
      tech: ["React", "CSS", "Vite"],
    },
    {
      title: "Library App",
      description:
        "A digital library application for searching books, booking books and reserving library halls.",
      tech: ["React", "JavaScript", "Supabase"],
    },
    {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot project designed to interact with users and provide intelligent responses.",
      tech: ["JavaScript", "AI", "API"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <p>MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="projects-description">
            Some of the projects I've worked on while
            learning, experimenting and building real-world
            applications.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <div
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              key={index}
            >

              {/* Project Number */}
              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              {/* Fake Project Visual */}
              <div className="project-image">
                <div className="project-glow"></div>

                <span className="project-code">
                  {"</>"}
                </span>
              </div>

              {/* Content */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.tech.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;