import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "JS",
    },
    {
      name: "HTML",
      category: "Frontend",
      icon: "</>",
    },
    {
      name: "CSS",
      category: "Frontend",
      icon: "#",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "TW",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "N",
    },
    {
      name: "Supabase",
      category: "Database",
      icon: "S",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: "G",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <p>MY TECHNOLOGIES</p>

          <h2>
            Skills & <span>Tools</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build modern
            web applications and digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;