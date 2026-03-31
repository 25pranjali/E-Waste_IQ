import React from 'react';

const Recycle = () => {
  const dos = [
    'Wipe all personal data from devices before recycling.',
    'Remove batteries and recycle them separately if possible.',
    'Check for manufacturer take-back programs.',
    'Donate working devices to NGOs or schools.',
  ];

  const donts = [
    'Never throw e-waste in the regular garbage bin.',
    'Do not attempt to dismantle CRT monitors or batteries at home.',
    'Avoid selling to informal scrap dealers who burn waste.',
    'Do not store old electronics in damp or hot areas.',
  ];

  return (
    <div className="recycle-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <section className="how-to">
          <h1 className="section-title">How to <span className="highlight">Recycle?</span></h1>
          <div className="steps-grid">
            <div className="step-card glass-card">
              <span className="step-num">01</span>
              <h3>Assess Condition</h3>
              <p>Is it working? Repair or donate. If not, proceed to recycle.</p>
            </div>
            <div className="step-card glass-card">
              <span className="step-num">02</span>
              <h3>Find a Center</h3>
              <p>Use our locator to find authorized collection points.</p>
            </div>
            <div className="step-card glass-card">
              <span className="step-num">03</span>
              <h3>Prepare Device</h3>
              <p>Backup data, factory reset, and remove SIM/SD cards.</p>
            </div>
            <div className="step-card glass-card">
              <span className="step-num">04</span>
              <h3>Drop Off</h3>
              <p>Safely hand over your device to certified recyclers.</p>
            </div>
          </div>
        </section>

        <section className="dos-donts grid-2">
          <div className="dos glass-card">
            <h2 className="title-green">🗹 Do's</h2>
            <ul>
              {dos.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="donts glass-card">
            <h2 className="title-red">🖿 Don'ts</h2>
            <ul>
              {donts.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="initiatives glass-card container">
          <h2>India's E-Waste Rules 2022</h2>
          <p>
            The Ministry of Environment (MoEFCC) has notified the E-Waste (Management) Rules, 2022, which mandate Extended Producer Responsibility (EPR). Manufacturers are now responsible for the end-of-life disposal of their electronics. Many brands like Croma, Samsung, and Dell have active recycling programs in major Indian cities.
          </p>
          <div className="stats-mini">
            <div className="s-item"><strong>1.6M tons</strong> processed in 2023</div>
            <div className="s-item"><strong>150+</strong> registered recyclers</div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; color: var(--primary-dark); transition: var(--transition); }
        body.dark .section-title { color: var(--primary-light); }
        .highlight { color: var(--primary); }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 80px;
        }
        .step-card { text-align: center; position: relative; padding: 40px 20px; border: 1px solid var(--glass-border); }
        body.dark .step-card { border-color: var(--glass-border-dark); }
        .step-num { 
          font-size: 3rem; font-weight: 800; opacity: 0.1; 
          position: absolute; top: 10px; left: 50%; transform: translateX(-50%); 
        }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 80px; }
        .dos { border-left: 5px solid #43a047; }
        .donts { border-left: 5px solid #e53935; }
        .title-green { color: #43a047; margin-bottom: 20px; }
        .title-red { color: #e53935; margin-bottom: 20px; }
        ul { list-style: none; }
        ul li { margin-bottom: 15px; padding-left: 20px; position: relative; }
        ul li::before { content: '→'; position: absolute; left: 0; color: var(--primary); }

        .initiatives { margin-bottom: 100px; padding: 60px; text-align: center; }
        .initiatives h2 { margin-bottom: 20px; color: var(--primary-dark); transition: var(--transition); }
        body.dark .initiatives h2 { color: var(--primary-light); }
        .stats-mini { display: flex; justify-content: center; gap: 40px; margin-top: 30px; }
        .s-item { 
          background: var(--bg-light); padding: 12px 24px; border-radius: 40px; 
          font-size: 1rem; border: 1px solid var(--primary-light); color: var(--text-light);
          transition: var(--transition);
        }
        body.dark .s-item { 
          background: rgba(0, 121, 107, 0.2); color: var(--text-dark); border-color: var(--primary-light); 
        }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
          .stats-mini { flex-direction: column; gap: 10px; }
        }
      `}</style>
    </div>
  );
};

export default Recycle;
