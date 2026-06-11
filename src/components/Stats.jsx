import { useEffect, useRef, useState } from 'react';

const STATS = [
  { icon: '🚀', number: 5, suffix: '+', label: 'Major Projects', sublabel: 'Academic & Personal', color: 'var(--primary)' },
  { icon: '🏆', number: 10, suffix: '+', label: 'Certifications', sublabel: 'Industry Recognized', color: 'var(--secondary)' },
  { icon: '💼', number: 3, suffix: '+', label: 'Internships', sublabel: 'Real-world Experience', color: 'var(--accent)' },
  { icon: '⏰', number: 1000, suffix: '+', label: 'Learning Hours', sublabel: 'Continuous Growth', color: 'var(--orange)' },
];

function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, started, delay }) {
  const count = useCounter(stat.number, 2000, started);
  return (
    <div className="stat-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-icon-wrap">{stat.icon}</div>
      <div className="stat-number">{count}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sublabel">{stat.sublabel}</div>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
