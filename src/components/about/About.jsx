import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Title */}
        <div className="about-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">
            <h3>
              I'm a Software Engineer who loves
              building things for the web.
            </h3>

            <p>
              I'm a Software Engineering graduate with a passion
              for creating modern and useful digital experiences.
              I enjoy turning ideas into real applications and
              solving problems through code.
            </p>

            <p>
              I work with technologies such as React, JavaScript,
              Node.js, Tailwind CSS, Vite, and Supabase. I'm always
              learning new technologies and improving my skills
              through personal and real-world projects.
            </p>

            <a href="#contact" className="about-btn">
              Let's Work Together
            </a>
          </div>

          {/* Right Side */}
          <div className="about-cards">

            <div className="about-card">
              <span className="card-number">01</span>
              <h4>Software Engineering</h4>
              <p>
                Building scalable and maintainable applications.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">02</span>
              <h4>Frontend Development</h4>
              <p>
                Creating modern and responsive user interfaces.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">03</span>
              <h4>Problem Solving</h4>
              <p>
                Finding simple solutions to complex problems.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">04</span>
              <h4>Continuous Learning</h4>
              <p>
                Always exploring new technologies and ideas.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;