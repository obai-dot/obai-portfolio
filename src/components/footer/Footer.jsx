import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo">
              OBAI<span>.</span>
            </div>

            <p>
              Software Engineer & Full-Stack Developer
              building modern digital experiences.
            </p>
          </div>

          <div className="footer-links">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#projects">Projects</a>

            <a href="#skills">Skills</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Obai Khatatbeh.
            All rights reserved.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/obai-dot"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="#contact"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;