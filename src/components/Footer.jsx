import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>E-Waste IQ</h3>
          <p>Educating for a cleaner, greener tech future.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/recycle">Recycle</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 E-Waste IQ. Built with Green IT Principles. 🌿</p>
      </div>
      <style jsx>{`
        .footer {
          background: var(--primary-dark);
          color: white;
          padding: 60px 0 20px;
          margin-top: 100px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer h3, .footer h4 { margin-bottom: 20px; }
        .footer nav { display: flex; flex-direction: column; gap: 10px; }
        .footer nav a { opacity: 0.8; transition: var(--transition); color: white; }
        .footer nav a:hover { opacity: 1; transform: translateX(5px); }
        .social-icons { display: flex; gap: 15px; }
      `}</style>
    </footer>
  );
};

export default Footer;
