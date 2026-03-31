import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="contact-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <h1 className="section-title">Contact <span className="highlight">E-Waste IQ</span></h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about recycling your devices? Our team is here to help.</p>
            <div className="info-items">
              <div className="info-item">📧 contact@ewasteiq.org</div>
              <div className="info-item">📞 +91 1800-EW-HELP</div>
              <div className="info-item">📍 New Delhi, India</div>
            </div>
            <div className="social-links">
              <h3>Follow Our Journey</h3>
              <div className="social-icons">
                <a href="#">TW</a>
                <a href="#">LN</a>
                <a href="#">IG</a>
              </div>
            </div>
          </div>

          <div className="contact-form glass-card">
            {submitted ? (
              <div className="success-msg">
                <h2>Thank You! 🌿</h2>
                <p>We've received your message and will get back to you shortly.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" id="name" required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" id="email" required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" rows="5" required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; }
        .highlight { color: var(--primary); }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 100px; }
        .contact-info h2 { font-size: 2rem; margin-bottom: 20px; }
        .contact-info p { font-size: 1.1rem; opacity: 0.8; margin-bottom: 40px; }
        .info-items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px; font-weight: 500; }
        
        .social-links h3 { font-size: 1.2rem; margin-bottom: 15px; }
        .social-icons { display: flex; gap: 15px; }
        .social-icons a { background: var(--primary-light); color: white; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 600; transition: var(--transition); }
        .social-icons a:hover { transform: rotate(10deg) scale(1.1); background: var(--primary); }

        .contact-form { padding: 40px; }
        .form-group { margin-bottom: 25px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem; }
        .form-group input, .form-group textarea { 
          width: 100%; padding: 12px 15px; border-radius: 8px; border: 1px solid var(--primary-light); 
          background: rgba(255,255,255,0.7); font-size: 1rem; 
        }
        body.dark .form-group input, body.dark .form-group textarea { background: rgba(0,0,0,0.2); color: white; }
        
        .success-msg { text-align: center; }
        .success-msg h2 { margin-bottom: 15px; color: var(--primary); }
        .success-msg p { margin-bottom: 30px; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-info { text-align: center; }
          .info-items { align-items: center; }
          .social-icons { justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
