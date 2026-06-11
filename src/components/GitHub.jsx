import { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { VscGitCommit } from 'react-icons/vsc';

const HANDLE = 'ranjithkumar077';

export default function GitHub() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub user data live
    fetch(`https://api.github.com/users/${HANDLE}`)
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const repos = data?.public_repos ?? '–';
  const followers = data?.followers ?? '–';
  const following = data?.following ?? '–';
  const avatarUrl = data?.avatar_url;

  return (
    <section id="github" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge" style={{ color: '#24292e', borderColor: 'rgba(36,41,46,0.3)', background: 'rgba(36,41,46,0.06)' }}>
            <FaGithub /> Open Source
          </div>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-desc">
            My open-source contributions, repositories, and coding activity — updated live.
          </p>
        </div>

        <div className="github-card reveal">
          {/* Avatar – live from GitHub */}
          <div className="github-avatar">
            {avatarUrl ? (
              <img src={avatarUrl} alt="GitHub Avatar" />
            ) : (
              <FaGithub size={48} color="white" />
            )}
          </div>

          <div>
            <div className="github-username">
              {data?.name || 'B. Ranjith Kumar'}
            </div>
            <div className="github-handle">@{HANDLE}</div>
            {data?.bio && (
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.5 }}>
                {data.bio}
              </p>
            )}

            <div className="github-stats-mini">
              {[
                { icon: <FaCodeBranch size={14} />, num: repos, label: 'Repos' },
                { icon: <VscGitCommit size={14} />, num: '100+', label: 'Commits' },
                { icon: <FaStar size={14} />, num: followers, label: 'Followers' },
                { icon: null, num: following, label: 'Following' },
              ].map((s, i) => (
                <div key={i} className="github-mini-stat">
                  <div className="github-mini-num" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {s.icon}
                    {loading ? (
                      <span style={{ width: 30, height: 20, background: 'rgba(0,0,0,0.08)', borderRadius: 6, display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
                    ) : s.num}
                  </div>
                  <div className="github-mini-label">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href={`https://github.com/${HANDLE}`}
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
              style={{ marginTop: 24, display: 'inline-flex', background: 'linear-gradient(135deg,#24292e,#444d56)', boxShadow: '0 8px 24px rgba(36,41,46,0.4)' }}
            >
              <FaGithub /> View GitHub Profile
            </a>
          </div>
        </div>

        {/* Live GitHub Stats Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 20, marginTop: 24 }}>
          <div className="glass-card reveal" style={{ padding: 20, overflow: 'hidden' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${HANDLE}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=6366F1&icon_color=8B5CF6&text_color=475569&count_private=true&cache_seconds=3600`}
              alt="GitHub Stats"
              style={{ width: '100%', borderRadius: 12, display: 'block' }}
              onError={e => e.target.style.display = 'none'}
            />
          </div>

          <div className="glass-card reveal reveal-delay-1" style={{ padding: 20, overflow: 'hidden' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${HANDLE}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=6366F1&text_color=475569&cache_seconds=3600`}
              alt="Top Languages"
              style={{ width: '100%', borderRadius: 12, display: 'block' }}
              onError={e => e.target.style.display = 'none'}
            />
          </div>

          <div className="glass-card reveal reveal-delay-2" style={{ padding: 20, overflow: 'hidden', gridColumn: '1 / -1' }}>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${HANDLE}&theme=tokyonight&hide_border=true&background=00000000&ring=6366F1&fire=EC4899&currStreakLabel=8B5CF6&cache_seconds=3600`}
              alt="GitHub Streak"
              style={{ width: '100%', borderRadius: 12, display: 'block' }}
              onError={e => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
