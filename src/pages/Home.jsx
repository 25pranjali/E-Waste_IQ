import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Think Smart. <span className="highlight">Recycle E-Waste.</span></h1>
            <p className="hero-subtitle">
              Join the movement for a cleaner planet. Learn how to responsibly manage your electronic devices and reduce your carbon footprint.
            </p>
            <div className="hero-ctas">
              <Link to="/about" className="btn-primary">Learn More</Link>
              <Link to="/centers" className="btn-secondary">Find Centers</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-blob"></div>
            <img src="/src/assets/hero.png" alt="E-Waste Recycling Illustration" className="hero-img" />
          </div>
        </div>
      </section>

      <section className="stats container">
        <div className="stat-card glass-card">
          <h2 className="stat-number">53.6M</h2>
          <p className="stat-label">Metric Tons of E-Waste generated globally in 2019.</p>
        </div>
        <div className="stat-card glass-card">
          <h2 className="stat-number">17.4%</h2>
          <p className="stat-label">Only a fraction of e-waste is formally recycled.</p>
        </div>
        <div className="stat-card glass-card">
          <h2 className="stat-number">$57B</h2>
          <p className="stat-label">Value of raw materials potentially recoverable.</p>
        </div>
      </section>

      <section className="intro container">
        <div className="intro-card glass-card">
          <h2>Why E-Waste Matters?</h2>
          <p>
            Electronic waste contains both valuable materials and hazardous substances. Improper disposal leads to toxic chemicals leaching into our soil and water, affecting ecosystems and human health. At E-Waste IQ, we educate you on how to bridge the gap between technology and sustainability.
          </p>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 60px 0;
          overflow: hidden;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--primary-dark);
          transition: var(--transition);
        }
        body.dark .hero-title {
          color: var(--primary-light);
        }
        .hero-title .highlight {
          color: var(--primary);
          display: block;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 40px;
          opacity: 0.8;
          max-width: 500px;
        }
        .hero-ctas {
          display: flex;
          gap: 20px;
        }
        .btn-secondary {
          border: 2px solid var(--primary);
          color: var(--primary);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          transition: var(--transition);
        }
        body.dark .btn-secondary {
          color: var(--primary-light);
          border-color: var(--primary-light);
        }
        .btn-secondary:hover {
          background: var(--primary);
          color: white;
        }

        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .glass-blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary-light), var(--accent));
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: pulse 10s infinite alternate;
        }
        .hero-img {
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          animation: float 6s infinite ease-in-out;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }
        .stat-card {
          text-align: center;
          padding: 40px;
        }
        .stat-number {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 10px;
        }

        .intro { margin-bottom: 100px; }
        .intro-card { padding: 60px; text-align: center; }
        .intro-card h2 { margin-bottom: 20px; font-size: 2.5rem; }
        .intro-card p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; line-height: 1.8; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse {
          0% { transform: scale(1) rotate(0); }
          100% { transform: scale(1.2) rotate(10deg); }
        }

        @media (max-width: 968px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-title { font-size: 3rem; }
          .hero-subtitle { margin: 0 auto 40px; }
          .hero-ctas { justify-content: center; }
          .hero-visual { height: 200px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
