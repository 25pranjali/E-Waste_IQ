import React from 'react';

const About = () => {
  const ewasteTypes = [
    { title: 'Information Technology', items: 'Laptops, PCs, Tablets, Servers', icon: '💻' },
    { title: 'Telecommunications', items: 'Smartphones, Routers, Modems', icon: '📱' },
    { title: 'Consumer Electronics', items: 'TVs, Speakers, Cameras', icon: '📺' },
    { title: 'Small Appliances', items: 'Microwaves, Trimmers, Watches', icon: '⌚' },
    { title: 'Batteries & Chargers', items: 'Li-ion, NiMH, Lead-acid', icon: '🔋' },
    { title: 'Cables & Accessories', items: 'HDMI, USB, Power cords', icon: '🔌' },
  ];

  return (
    <div className="about-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <section className="definition">
          <h1 className="section-title">What is <span className="highlight">E-Waste?</span></h1>
          <div className="glass-card">
            <p>
              Electronic waste or e-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste.
            </p>
            <p style={{marginTop: '20px'}}>
              As technology evolves at an exponential rate, devices become obsolete faster, leading to a massive surge in global waste.
            </p>
          </div>
        </section>

        <section className="types">
          <h2 className="section-title">Common Types of E-Waste</h2>
          <div className="types-grid">
            {ewasteTypes.map((type, idx) => (
              <div key={idx} className="type-card glass-card">
                <div className="type-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lifecycle">
          <h2 className="section-title">The Lifecycle of Electronics</h2>
          <div className="lifecycle-visual glass-card">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Production</h4>
              <p>Raw material extraction and energy-intensive manufacturing.</p>
            </div>
            <div className="arrow">➜</div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Consumption</h4>
              <p>Average device lifespan: 2-4 years.</p>
            </div>
            <div className="arrow">➜</div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Disposition</h4>
              <p>Often stored in drawers or thrown in trash.</p>
            </div>
            <div className="arrow">➜</div>
            <div className="step highlight-step">
              <div className="step-number">4</div>
              <h4>Recycling</h4>
              <p>The goal: Responsible recovery of materials.</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; color: var(--primary-dark); transition: var(--transition); }
        body.dark .section-title { color: var(--primary-light); }
        .highlight { color: var(--primary); }
        
        .definition { margin-bottom: 80px; }
        .definition p { font-size: 1.2rem; line-height: 1.8; }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 80px;
        }
        .type-card { text-align: center; transition: var(--transition); border: 1px solid var(--glass-border); }
        body.dark .type-card { border-color: var(--glass-border-dark); }
        .type-card:hover { transform: translateY(-5px); background: rgba(56, 142, 60, 0.1); }
        .type-icon { font-size: 3rem; margin-bottom: 15px; }

        .lifecycle-visual {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 40px;
          gap: 20px;
          border: 1px solid var(--glass-border);
        }
        body.dark .lifecycle-visual { border-color: var(--glass-border-dark); }
        .step { flex: 1; text-align: center; }
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-weight: bold;
        }
        .arrow { font-size: 2rem; color: var(--primary); align-self: center; opacity: 0.5; }
        .highlight-step { transform: scale(1.05); }

        @media (max-width: 768px) {
          .lifecycle-visual { flex-direction: column; align-items: center; }
          .arrow { transform: rotate(90deg); margin: 10px 0; }
        }
      `}</style>
    </div>
  );
};

export default About;
