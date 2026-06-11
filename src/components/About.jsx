const HIGHLIGHTS = [
  { icon: '🎓', text: 'AI & Data Science Student', color: '#6366F1' },
  { icon: '📊', text: 'Data Analyst Intern', color: '#8B5CF6' },
  { icon: '📈', text: 'Power BI Developer', color: '#06B6D4' },
  { icon: '☁️', text: 'Cloud Computing Enthusiast', color: '#10B981' },
  { icon: '🚀', text: 'Future AI Entrepreneur', color: '#EC4899' },
  { icon: '🐍', text: 'Python Developer', color: '#F97316' },
];

const CODE_LINES = [
  { num: 1, content: <><span className="code-kw">class </span><span className="code-cls">RanjithKumar</span><span className="code-prop">:</span></> },
  { num: 2, content: <><span className="code-prop">&nbsp;&nbsp;role</span> <span className="code-kw">=</span> <span className="code-str">"AI Engineer"</span></> },
  { num: 3, content: <><span className="code-prop">&nbsp;&nbsp;passion</span> <span className="code-kw">=</span> <span className="code-str">"Machine Learning"</span></> },
  { num: 4, content: <><span className="code-prop">&nbsp;&nbsp;goal</span> <span className="code-kw">=</span> <span className="code-str">"Build AI Startups"</span></> },
  { num: 5, content: <span className="code-comment">&nbsp;&nbsp;</span> },
  { num: 6, content: <><span className="code-fn">&nbsp;&nbsp;def </span><span className="code-fn">skills</span><span className="code-prop">(self):</span></> },
  { num: 7, content: <><span className="code-kw">&nbsp;&nbsp;&nbsp;&nbsp;return </span><span className="code-prop">[</span></> },
  { num: 8, content: <><span className="code-str">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Python"</span><span className="code-prop">,</span><span className="code-str"> "ML"</span><span className="code-prop">,</span></> },
  { num: 9, content: <><span className="code-str">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"React"</span><span className="code-prop">,</span><span className="code-str"> "AWS"</span></> },
  { num: 10, content: <><span className="code-prop">&nbsp;&nbsp;&nbsp;&nbsp;]</span></> },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left: Text */}
          <div className="reveal">
            <div className="section-badge">✦ About Me</div>
            <h2 className="section-title">
              Passionate About<br />
              <span className="gradient-text">Building AI Solutions</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 20, fontSize: '1.0625rem' }}>
              I am <strong style={{ color: 'var(--primary)' }}>B. Ranjith Kumar</strong>, a passionate Artificial Intelligence and
              Data Science student with strong interests in AI Engineering, Data Science,
              Machine Learning, Cloud Computing and Full Stack Development.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 16, fontSize: '1.0625rem' }}>
              I enjoy solving real-world problems using technology and continuously learning
              cutting-edge innovations in Artificial Intelligence. My goal is to become a
              highly skilled AI Engineer and eventually build impactful AI products and
              startups that create value for people worldwide.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="highlight-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="highlight-icon" style={{ background: h.color + '18' }}>
                    {h.icon}
                  </div>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code window */}
          <div className="about-image-section reveal reveal-delay-2">
            <div className="about-visual glass-card" style={{ padding: '24px', width: '100%' }}>
              <div className="about-code-window">
                <div className="code-window-header">
                  <div className="code-dot red" />
                  <div className="code-dot yellow" />
                  <div className="code-dot green" />
                  <span className="code-filename">ranjith_kumar.py</span>
                </div>
                <div className="code-body">
                  {CODE_LINES.map(line => (
                    <div key={line.num} className="code-line">
                      <span className="code-num">{line.num}</span>
                      <span>{line.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini info cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%' }}>
              {[
                { icon: '📍', label: 'Location', value: 'Andhra Pradesh, India' },
                { icon: '🎯', label: 'Focus', value: 'AI & Data Science' },
                { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
                { icon: '🌐', label: 'Languages', value: 'Python, Java, JS' },
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
