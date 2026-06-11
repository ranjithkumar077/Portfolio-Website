const CERTS = [
  { icon: '📊', name: 'Data Science', org: 'Certification Program', color: '#6366F1', bg: 'rgba(99,102,241,0.12)', badge: 'Verified' },
  { icon: '🤖', name: 'Machine Learning', org: 'Coursera / NPTEL', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)', badge: 'Completed' },
  { icon: '☁️', name: 'Cloud Computing', org: 'AWS / Azure', color: '#F97316', bg: 'rgba(249,115,22,0.12)', badge: 'Certified' },
  { icon: '📈', name: 'Power BI', org: 'Microsoft', color: '#F2C811', bg: 'rgba(242,200,17,0.12)', badge: 'Verified' },
  { icon: '🐍', name: 'Python Programming', org: 'HackerRank / Coursera', color: '#3776AB', bg: 'rgba(55,118,171,0.12)', badge: 'Gold' },
  { icon: '🧠', name: 'Artificial Intelligence', org: 'NPTEL / Coursera', color: '#EC4899', bg: 'rgba(236,72,153,0.12)', badge: 'Completed' },
  { icon: '🗄️', name: 'SQL & Database', org: 'HackerRank', color: '#10B981', bg: 'rgba(16,185,129,0.12)', badge: 'Certified' },
  { icon: '⚛️', name: 'React Development', org: 'Meta / Udemy', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)', badge: 'Completed' },
  { icon: '🔀', name: 'Git & DevOps', org: 'GitHub Learning Lab', color: '#F05032', bg: 'rgba(240,80,50,0.12)', badge: 'Verified' },
  { icon: '📊', name: 'Data Analytics', org: 'Google', color: '#06B6D4', bg: 'rgba(6,182,212,0.12)', badge: 'Google' },
];

// Duplicate for seamless loop
const ALL_CERTS = [...CERTS, ...CERTS];

function CertCard({ cert }) {
  return (
    <div className="cert-card">
      <div className="cert-icon-wrap" style={{ background: cert.bg }}>
        <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
      </div>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-org">{cert.org}</div>
      <div className="cert-badge" style={{ color: cert.color, borderColor: cert.color + '33', background: cert.bg }}>
        {cert.badge}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">✦ Certifications</div>
          <h2 className="section-title">
            My <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-desc">
            Industry-recognized certifications that validate my expertise in AI, Data Science, and Development.
          </p>
        </div>
      </div>

      <div className="certs-track-wrapper reveal">
        <div className="certs-track">
          {ALL_CERTS.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
