import { useEffect, useRef } from 'react';

const SKILLS = [
  { name: 'Python', icon: '🐍', percent: 92, gradient: ['#3776AB','#FFD43B'], bg: 'rgba(55,118,171,0.1)' },
  { name: 'Machine Learning', icon: '🤖', percent: 85, gradient: ['#6366F1','#8B5CF6'], bg: 'rgba(99,102,241,0.1)' },
  { name: 'Data Science', icon: '📊', percent: 88, gradient: ['#06B6D4','#6366F1'], bg: 'rgba(6,182,212,0.1)' },
  { name: 'Artificial Intelligence', icon: '🧠', percent: 82, gradient: ['#8B5CF6','#EC4899'], bg: 'rgba(139,92,246,0.1)' },
  { name: 'Power BI', icon: '📈', percent: 90, gradient: ['#F2C811','#F97316'], bg: 'rgba(242,200,17,0.1)' },
  { name: 'SQL', icon: '🗄️', percent: 87, gradient: ['#00758F','#06B6D4'], bg: 'rgba(0,117,143,0.1)' },
  { name: 'React', icon: '⚛️', percent: 78, gradient: ['#61DAFB','#6366F1'], bg: 'rgba(97,218,251,0.1)' },
  { name: 'Node.js', icon: '🟢', percent: 72, gradient: ['#68A063','#10B981'], bg: 'rgba(104,160,99,0.1)' },
  { name: 'JavaScript', icon: '⚡', percent: 80, gradient: ['#F7DF1E','#F97316'], bg: 'rgba(247,223,30,0.1)' },
  { name: 'Java', icon: '☕', percent: 75, gradient: ['#ED8B00','#F97316'], bg: 'rgba(237,139,0,0.1)' },
  { name: 'AWS', icon: '☁️', percent: 70, gradient: ['#FF9900','#F97316'], bg: 'rgba(255,153,0,0.1)' },
  { name: 'MongoDB', icon: '🍃', percent: 73, gradient: ['#47A248','#10B981'], bg: 'rgba(71,162,72,0.1)' },
  { name: 'Git & GitHub', icon: '🔀', percent: 88, gradient: ['#F05032','#EC4899'], bg: 'rgba(240,80,50,0.1)' },
  { name: 'Excel', icon: '📋', percent: 85, gradient: ['#217346','#10B981'], bg: 'rgba(33,115,70,0.1)' },
];

const CIRCUMFERENCE = 2 * Math.PI * 24; // r=24

function SkillCard({ skill, delay }) {
  const circleRef = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const offset = CIRCUMFERENCE - (skill.percent / 100) * CIRCUMFERENCE;
          setTimeout(() => {
            circle.style.strokeDashoffset = offset;
          }, delay * 1000);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(circle.closest('.skill-card'));
    return () => observer.disconnect();
  }, [skill.percent, delay]);

  return (
    <div className="skill-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="skill-icon-wrap" style={{ background: skill.bg }}>
        {skill.icon}
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-ring-wrap">
        <svg className="skill-ring-svg" viewBox="0 0 60 60">
          <circle className="skill-ring-bg" cx="30" cy="30" r="24" />
          <circle
            ref={circleRef}
            className="skill-ring-fill"
            cx="30" cy="30" r="24"
            style={{
              stroke: `url(#g-${skill.name.replace(/\s/g,'')}`,
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: CIRCUMFERENCE,
            }}
          />
          <defs>
            <linearGradient id={`g-${skill.name.replace(/\s/g,'')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={skill.gradient[0]} />
              <stop offset="100%" stopColor={skill.gradient[1]} />
            </linearGradient>
          </defs>
        </svg>
        <div className="skill-percent">{skill.percent}%</div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">✦ Technical Skills</div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-desc">
            Technologies and tools I use to build intelligent, scalable, and impactful solutions.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
