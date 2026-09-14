import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "N",
    },
    {
      name: "Vercel",
      category: "Deployment",
      icon: "▲",
    },
    {
      name: "JavaScript",
      category: "Programming",
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
      name: "React Router",
      category: "Routing",
      icon: "RR",
    },
    {
      name: "Vite",
      category: "Build Tool",
      icon: "V",
    },
    {
      name: "Responsive Design",
      category: "UI / UX",
      icon: "UI",
    },
    {
      name: "Supabase",
      category: "Database, Auth & Storage",
      icon: "S",
    },
    {
      name: "SQL",
      category: "Database",
      icon: "SQL",
    },
    {
      name: "REST APIs",
      category: "API Integration",
      icon: "API",
    },
    {
      name: "Three.js",
      category: "3D Web Development",
      icon: "3D",
    },
    {
      name: "React Three Fiber",
      category: "3D / React",
      icon: "R3F",
    },
    {
      name: "React Three Drei",
      category: "3D Utilities",
      icon: "D",
    },
    {
      name: "React Three Rapier",
      category: "3D Physics",
      icon: "RP",
    },
    {
      name: "Blender",
      category: "3D Modeling",
      icon: "B",
    },
    {
      name: "n8n",
      category: "Workflow Automation",
      icon: "n8n",
    },
    {
      name: "EmailJS",
      category: "Email Integration",
      icon: "EJ",
    },
    {
      name: "Git",
      category: "Version Control",
      icon: "G",
    },
    {
      name: "GitHub",
      category: "Development Platform",
      icon: "GH",
    },
    {
      name: "GitHub Pages",
      category: "Deployment",
      icon: "GP",
    },
    {
      name: "VS Code",
      category: "Development Tool",
      icon: "VS",
    },
    {
      name: "npm",
      category: "Package Management",
      icon: "npm",
    },
    {
      name: "Python",
      category: "Programming",
      icon: "Py",
    },
    {
      name: "Odoo",
      category: "ERP Concepts",
      icon: "O",
    },
  ];

  const visibleSkills = showMore
    ? skills
    : skills.slice(0, 3);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>MY TECHNOLOGIES</p>

          <h2>
            Skills & <span>Tools</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build modern web
            applications, interactive 3D experiences, automation
            workflows and digital products.
          </p>
        </div>

        <div className="skills-grid">
          {visibleSkills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
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

        <div className="skills-more">
          <button
            className="skills-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Skills;