import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span> E-Waste IQ
        </Link>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/impact" onClick={() => setIsMenuOpen(false)}>Impact</Link>
          <Link to="/recycle" onClick={() => setIsMenuOpen(false)}>Recycle</Link>
          <Link to="/centers" onClick={() => setIsMenuOpen(false)}>Centers</Link>
          <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>Quiz</Link>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: var(--transition);
        }
        .header.scrolled {
          background: var(--glass);
          backdrop-filter: blur(10px);
          padding: 10px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border-bottom: 1px solid var(--glass-border);
        }
        body.dark .header.scrolled {
          background: var(--glass-dark);
          border-color: var(--glass-border-dark);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav {
          display: flex;
          gap: 20px;
        }
        .nav a {
          font-weight: 500;
          transition: var(--transition);
        }
        .nav a:hover {
          color: var(--primary);
        }
        .theme-toggle {
          font-size: 1.2rem;
          padding: 5px;
          z-index: 1001;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          z-index: 1001;
        }
        .menu-toggle span {
          display: block;
          width: 30px;
          height: 3px;
          background: var(--primary);
          border-radius: 3px;
          transition: var(--transition);
        }
        .menu-toggle.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

        @media (max-width: 768px) {
          .menu-toggle { display: flex; }
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--bg-light);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);
            z-index: 1000;
          }
          body.dark .nav { background: var(--bg-dark); }
          .nav.open { right: 0; }
          .nav a { font-size: 1.5rem; }
        }
      `}</style>
    </header>
  );
};

export default Header;
