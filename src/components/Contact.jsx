import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-grid">

        {/* LEFT */}
        <div className="contact-left">
          <p className="sec-tag">— LET'S CONNECT</p>

          <h2 className="contact-title">
            Ready to build <br />
            <span>something great?</span>
          </h2>

          <p className="contact-sub">
            Open to internships, collaborations, and exciting projects.
            Whether you have an opportunity or just want to talk tech —
            my inbox is always open.
          </p>

          <div className="contact-availability">
             Available for Internships & Collaborations
          </div>

          <div className="contact-chips">
            <span>Open to Internships</span>
            <span>Collaborations</span>
            <span>Freelance</span>
          </div>
        </div>

        {/* RIGHT */}
        
<div className="contact-right">

  <a href="mailto:iamprabhusingh543@gmail.com" className="contact-card">
    <div className="contact-icon">📧</div>
    <div>
      <h3>Email Me</h3>
      <p>iamprabhusingh543@gmail.com</p>
    </div>
  </a>

  <a href="https://linkedin.com/in/prabhu-singhh" target="_blank" className="contact-card">
    <div className="contact-icon">💼</div>
    <div>
      <h3>LinkedIn</h3>
      <p>linkedin.com/in/prabhu-singhh</p>
    </div>
  </a>

  <a href="https://github.com/prabhusinghh" target="_blank" className="contact-card">
    <div className="contact-icon">🐙</div>
    <div>
      <h3>GitHub</h3>
      <p>github.com/prabhusinghh</p>
    </div>
  </a>

  <a href="tel:+916205720843" className="contact-card">
    <div className="contact-icon">📱</div>
    <div>
      <h3>Call Me</h3>
      <p>+91 6205720843</p>
    </div>
  </a>

</div>
      </div>
    </section>
  );
}