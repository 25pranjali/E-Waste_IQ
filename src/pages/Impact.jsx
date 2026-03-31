import React from 'react';

const Impact = () => {
  const impacts = [
    { title: 'Soil Contamination', description: 'Heavy metals like lead and cadmium leach into the ground, affecting plant growth and food chains.', icon: '🌱' },
    { title: 'Water Pollution', description: 'Toxic runoff enters groundwater and rivers, polluting drinking water sources for millions.', icon: '💧' },
    { title: 'Air Toxicity', description: 'Open burning of cables releases dioxins and furans, causing chronic respiratory issues.', icon: '💨' },
    { title: 'Human Health', description: 'Exposure can lead to neurological damage, kidney failure, and developmental issues in children.', icon: '🧠' },
  ];

  return (
    <div className="impact-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <section className="environmental-impact">
          <h1 className="section-title">Environmental <span className="highlight">Footprint</span></h1>
          <p className="subtitle">The hidden cost of our digital lifestyle is a growing ecological crisis.</p>
          
          <div className="impact-grid">
            {impacts.map((impact, idx) => (
              <div key={idx} className="impact-card glass-card">
                <div className="impact-icon">{impact.icon}</div>
                <h3>{impact.title}</h3>
                <p>{impact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="real-world container glass-card">
          <h2>The Case of Agbogbloshie</h2>
          <p>
            In Ghana, the Agbogbloshie site was once one of the world's largest e-waste dumps. Thousands of people, including children, work there to dismantle electronics by hand and burn cables to recover copper. The air and soil levels of toxic chemicals are hundreds of times higher than safety limits.
          </p>
        </section>

        <section className="did-you-know container">
          <div className="dyk-card">
            <h3>💡 Did You Know?</h3>
            <p>
              Recycling 1 million laptops saves the energy equivalent to the electricity used by 3,500 homes in the U.S. for a year.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 10px; text-align: center; color: var(--primary-dark); transition: var(--transition); }
        body.dark .section-title { color: var(--primary-light); }
        .highlight { color: var(--primary); }
        .subtitle { text-align: center; margin-bottom: 40px; font-size: 1.1rem; opacity: 0.8; }
        
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 80px;
        }
        .impact-card { text-align: center; padding: 40px; border-top: 4px solid var(--primary); border: 1px solid var(--glass-border); }
        body.dark .impact-card { border-color: var(--glass-border-dark); }
        .impact-icon { font-size: 3.5rem; margin-bottom: 15px; }
        .impact-card h3 { margin-bottom: 10px; color: var(--primary-dark); transition: var(--transition); }
        body.dark .impact-card h3 { color: var(--primary-light); }

        .real-world { margin-bottom: 80px; padding: 50px; text-align: center; }
        .real-world h2 { margin-bottom: 20px; font-size: 2rem; color: #d32f2f; }
        .real-world p { font-size: 1.1rem; max-width: 800px; margin: 0 auto; color: var(--text-light); }

        .dyk-card {
          background: var(--accent);
          color: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(255, 171, 0, 0.2);
        }
        .dyk-card h3 { font-size: 1.5rem; margin-bottom: 10px; }
        .dyk-card p { font-size: 1.2rem; font-weight: 500; }

        @media (max-width: 768px) {
          .real-world { padding: 30px; }
        }
      `}</style>
    </div>
  );
};

export default Impact;
