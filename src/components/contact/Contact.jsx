import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    emailjs
      .sendForm(
        "service_zbjswxq",
        "template_3hw0bso",
        form.current,
        "-dqcEHNmXpEjCb1N6"
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setSending(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

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
              href="https://www.linkedin.com/in/obai-khatatbeh-ab371240a"
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
          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >

            <div className="form-row">

              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
              <span>→</span>
            </button>

            {sent && (
              <p className="success-message">
                Message sent successfully! ✓
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;