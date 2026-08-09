import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's Build Something <span>Great</span>
          </h2>

          <p className="contact-description">
            Have a project, idea, or opportunity in mind?
            I'd love to hear about it. Send me a message and
            let's talk.
          </p>
        </div>

        <div className="contact-content">
{/* Contact Information */}
<div className="contact-info">

  {/* Email */}
  <a
    href="mailto:obaieyad@gmail.com"
    className="contact-item"
  >
    <div className="contact-icon">
      @
    </div>

    <div>
      <h3>Email</h3>
      <p>obaieyad@gmail.com</p>
    </div>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/obai-dot"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <div className="contact-icon">
      ↗
    </div>

    <div>
      <h3>GitHub</h3>
      <p>github.com/obai-dot</p>
    </div>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/obai-khatatbeh-ab371240a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <div className="contact-icon">
      in
    </div>

    <div>
      <h3>LinkedIn</h3>
      <p>Obai Khatatbeh</p>
    </div>
  </a>

</div>

          {/* Contact Form */}
          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;