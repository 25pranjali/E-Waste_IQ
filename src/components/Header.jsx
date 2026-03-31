import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/recycle">Recycle</Link>
          <Link to="/centers">Centers</Link>
          <Link to="/quiz">Quiz</Link>
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
        }
        @media (max-width: 768px) {
          .nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
