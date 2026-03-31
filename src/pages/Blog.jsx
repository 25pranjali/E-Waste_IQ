import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'The Rise of Green IT', date: 'March 25, 2026', excerpt: 'How sustainable computing is changing the tech landscape.', icon: '🌱' },
    { title: '5 Tips to Extend Battery Life', date: 'March 20, 2026', excerpt: 'Simple habits to make your devices last longer.', icon: '🔋' },
    { title: 'Urban Mining: A New Gold Rush', date: 'March 15, 2026', excerpt: 'Recovering precious metals from discarded electronics.', icon: '⛏️' },
    { title: 'The Carbon Footprint of Emails', date: 'March 10, 2026', excerpt: 'Understanding the digital waste we don\'t see.', icon: '📧' },
  ];

  return (
    <div className="blog-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <h1 className="section-title">Sustainability <span className="highlight">Blog</span></h1>
        
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article key={i} className="blog-card glass-card">
              <div className="blog-icon">{post.icon}</div>
              <div className="blog-content">
                <span className="date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">Read More →</button>
              </div>
            </article>
          ))}
        </div>

        <section className="carbon-awareness glass-card">
          <h2>Digital Carbon Footprint</h2>
          <p>
            Every byte of data stored or transmitted has a carbon cost. By deleting old emails, optimizing images, and choosing energy-efficient hardware, we can collectively reduce the global energy demand of the IT sector.
          </p>
          <div className="footprint-tip">
            <strong>💡 Pro Tip:</strong> Unsubscribing from 1 newsletter saves 1.2g of CO2 per year.
          </div>
        </section>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; }
        .highlight { color: var(--primary); }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        .blog-card { display: flex; gap: 20px; padding: 25px; align-items: center; transition: var(--transition); }
        .blog-card:hover { transform: scale(1.02); background: rgba(255,255,255,0.7); }
        .blog-icon { font-size: 3rem; opacity: 0.8; }
        .date { font-size: 0.8rem; opacity: 0.6; text-transform: uppercase; }
        .blog-card h3 { margin: 10px 0; color: var(--primary-dark); }
        .read-more { margin-top: 15px; color: var(--primary); font-weight: 600; font-size: 0.9rem; }

        .carbon-awareness { margin-bottom: 100px; padding: 60px; text-align: center; border-left: 10px solid var(--primary-light); }
        .carbon-awareness h2 { margin-bottom: 20px; }
        .carbon-awareness p { font-size: 1.1rem; max-width: 700px; margin: 0 auto 30px; }
        .footprint-tip { background: var(--bg-light); display: inline-block; padding: 15px 30px; border-radius: 50px; font-weight: 500; }
      `}</style>
    </div>
  );
};

export default Blog;
