import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow"></div>
      <div className="contact-info">
        <h3 className="contact-title">
          Let's Build <span className="highlight">Great</span>
        </h3>
        <p className="contact-desc">Open to full-stack, mobile, AI projects. Let's connect.</p>
        <div className="contact-links">
          <div className="contact-link-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:isilkurt96@gmail.com">isilkurt96@gmail.com</a>
          </div>
          <div className="contact-link-item">
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/user312222?tab=repositories" target="_blank" rel="noreferrer">github.com/ışıl</a>
          </div>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
        </div>
        <input type="text" placeholder="Subject" className="form-input" />
        <textarea placeholder="Message" className="form-input form-textarea"></textarea>
        <button type="submit" className="btn-submit">Send ↗</button>
      </form>
    </section>
  );
};

export default ContactSection;

