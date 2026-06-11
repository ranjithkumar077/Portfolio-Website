import { useEffect, useRef, useState } from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const HANDLE = 'ranjithkumar077';
const LC_PROFILE = `https://leetcode.com/u/${HANDLE}/`;

function FULL_CIRCUMFERENCE(r) { return 2 * Math.PI * r; }

function DonutSegment({ r, percent, color, offset, animStart, delay }) {
  const ref = useRef(null);
  const circ = FULL_CIRCUMFERENCE(r);
  const dashOffset = animStart ? circ - (percent / 100) * circ : circ;

  return (
    <circle
      ref={ref}
      cx="100" cy="100" r={r}
      fill="none"
      stroke={color}
      strokeWidth="16"
      strokeDasharray={circ}
      strokeDashoffset={dashOffset}
      strokeLinecap="round"
      transform={`rotate(${offset - 90} 100 100)`}
      style={{ transition: `stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }}
    />
  );
}

export default function LeetCode() {
  const sectionRef = useRef(null);
  const [animStart, setAnimStart] = useState(false);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch live LeetCode stats
  useEffect(() => {
    // Use alfa-leetcode-api (reliable community API)
    fetch(`https://alfa-leetcode-api.onrender.com/${HANDLE}/solved`)
      .then(r => r.json())
      .then(d => {
        if (d && d.solvedProblem !== undefined) {
          setStats({
            total: d.solvedProblem,
            easy: d.easySolved,
            medium: d.mediumSolved,
            hard: d.hardSolved,
          });
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback: try another API
        fetch(`https://leetcode-stats-api.herokuapp.com/${HANDLE}`)
          .then(r => r.json())
          .then(d => {
            if (d && d.totalSolved !== undefined) {
              setStats({
                total: d.totalSolved,
                easy: d.easySolved,
                medium: d.mediumSolved,
                hard: d.hardSolved,
              });
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  // Trigger donut animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimStart(true); },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const easy = stats?.easy ?? 45;
  const medium = stats?.medium ?? 28;
  const hard = stats?.hard ?? 8;
  const total = stats?.total ?? (easy + medium + hard);
  const totalDenom = Math.max(total, 100);

  const easyPct = (easy / totalDenom) * 100;
  const medPct = (medium / totalDenom) * 100;
  const hardPct = (hard / totalDenom) * 100;
  const easyDeg = 0;
  const medDeg = (easyPct / 100) * 360;
  const hardDeg = medDeg + (medPct / 100) * 360;
  const r = 72;

  const Skeleton = () => (
    <div style={{ width: 60, height: 28, background: 'rgba(0,0,0,0.08)', borderRadius: 6, animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
  );

  return (
    <section id="leetcode" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge" style={{ color: '#F97316', borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)' }}>
            <FaTrophy /> Coding Challenges
          </div>
          <h2 className="section-title">
            LeetCode <span style={{ background: 'linear-gradient(135deg,#F97316,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Profile</span>
          </h2>
          <p className="section-desc">
            Real-time problem-solving stats — auto-updates as I solve more challenges daily.
          </p>
        </div>

        <div className="leetcode-card reveal">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Profile Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div className="leetcode-avatar">
                <img
                  src={`https://assets.leetcode.com/users/${HANDLE}/avatar_1768056551.png`}
                  alt="LeetCode"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<span style="font-size:1.75rem;color:white"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='36' height='36'><path d='M16.102 17.93l-2.697 2.607c-.466.466-1.109.73-1.801.73-.692 0-1.339-.259-1.805-.729l-1.97-1.989c-.91-.92-.911-2.418 0-3.337l.846-.828a1.24 1.24 0 0 1 1.742 0c.481.476.481 1.243 0 1.72l-.546.539.977.989.546-.539c1.357-1.338 3.543-1.338 4.9 0 .336.33.336.869 0 1.2-.336.33-.88.33-1.214 0zm1.24-6.135c-.91-.92-.911-2.418 0-3.337l1.969-1.989c.466-.466 1.09-.73 1.782-.73.69 0 1.337.259 1.803.729l.847.828c.91.92.91 2.417-.001 3.337l-2.697 2.606c-.357.35-.822.525-1.291.525a1.82 1.82 0 0 1-1.291-.525c-.336-.33-.336-.87 0-1.2.336-.33.88-.33 1.215 0l1.214-1.177-.977-.989-.547.539c-.481.476-1.261.476-1.742 0-.481-.476-.481-1.244 0-1.72l.547-.539-.847-.828c-.34-.34-.91-.34-1.25 0l-1.97 1.989c-.339.34-.339.89 0 1.228l.846.828c.481.476.481 1.244 0 1.72a1.24 1.24 0 0 1-1.742 0l-.846-.828a3.618 3.618 0 0 1 0-5.142l1.97-1.989c.714-.72 1.66-1.116 2.679-1.116z'/></svg></span>`;
                  }}
                />
              </div>
              <div>
                <div className="leetcode-username">ranjithkumar077</div>
                <div className="leetcode-handle">leetcode.com/u/{HANDLE}</div>
                <div style={{
                  marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: '0.72rem', fontWeight: 700, color: '#F97316',
                  background: 'rgba(249,115,22,0.1)', padding: '3px 10px', borderRadius: 99,
                  border: '1px solid rgba(249,115,22,0.2)',
                }}>
                  <SiLeetcode size={11} /> Active Solver
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="leetcode-stats-grid">
              <div className="lc-stat lc-easy">
                <div className="lc-stat-num">{loading ? <Skeleton /> : easy}</div>
                <div className="lc-stat-label">Easy</div>
              </div>
              <div className="lc-stat lc-medium">
                <div className="lc-stat-num">{loading ? <Skeleton /> : medium}</div>
                <div className="lc-stat-label">Medium</div>
              </div>
              <div className="lc-stat lc-hard">
                <div className="lc-stat-num">{loading ? <Skeleton /> : hard}</div>
                <div className="lc-stat-label">Hard</div>
              </div>
            </div>

            {loading && (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center' }}>
                Fetching live stats...
              </p>
            )}

            <a
              href={LC_PROFILE}
              target="_blank" rel="noreferrer"
              className="btn"
              style={{ background: 'linear-gradient(135deg,#F97316,#EC4899)', color: 'white', boxShadow: '0 8px 24px rgba(249,115,22,0.4)', width: 'fit-content' }}
            >
              <SiLeetcode /> View Profile
            </a>
          </div>

          {/* Right – Animated donut */}
          <div className="lc-donut">
            <div className="lc-donut-wrap">
              <svg className="lc-donut-svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="16" />
                <DonutSegment r={r} percent={easyPct} color="#00AF9B" offset={easyDeg} animStart={animStart} delay={200} />
                <DonutSegment r={r} percent={medPct} color="#FFC01E" offset={medDeg} animStart={animStart} delay={600} />
                <DonutSegment r={r} percent={hardPct} color="#FF2D55" offset={hardDeg} animStart={animStart} delay={1000} />
              </svg>
              <div className="lc-donut-center">
                <div className="lc-total-num">{loading ? '...' : total}</div>
                <div className="lc-total-label">Solved</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Easy', color: '#00AF9B' },
                { label: 'Medium', color: '#FFC01E' },
                { label: 'Hard', color: '#FF2D55' },
              ].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: l.color }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {l.label}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
              ↻ Auto-updates with your real-time LeetCode progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
