import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          OBAI<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Button */}
        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="mobile-talk-button"
            onClick={closeMenu}
          >
            Let's Talk
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;