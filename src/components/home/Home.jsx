import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        <p className="home-tag">
          HELLO, I'M
        </p>

        <h1>
          Obai <span>Khatatbeh</span>
        </h1>

        <h2>
          Software Engineer & Full-Stack Developer
        </h2>

        <p className="home-description">
          I build modern, interactive and user-friendly
          websites and applications using modern web technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

      <div className="home-visual">
        <div className="glow"></div>

        <div className="cube">
          <div className="cube-face front">&lt;/&gt;</div>
          <div className="cube-face back">{"{ }"}</div>
          <div className="cube-face right">JS</div>
          <div className="cube-face left">CSS</div>
          <div className="cube-face top">{"< />"}</div>
          <div className="cube-face bottom">{"{ }"}</div>
        </div>
      </div>
    </section>
  );
}

export default Home;