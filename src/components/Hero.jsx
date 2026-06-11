import { useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaDownload, FaRocket } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { BsArrowDownCircle } from 'react-icons/bs';

const TYPING_STRINGS = [
  'AI Engineer',
  'Data Scientist',
  'ML Engineer',
  'Full Stack Dev',
  'Power BI Expert',
  'Cloud Architect',
  'Python Developer',
];

function useTypingEffect(strings, speed = 75, pause = 1800) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => i + 1);
    } else {
      const nextText = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(nextText), deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, strings, speed, pause]);
  return text;
}

// Skill badges around the profile
const ORBIT_BADGES = [
  { label: 'Python', icon: '🐍', color: '#3776AB', bg: 'rgba(55,118,171,0.12)', top: '-8%', right: '-12%', anim: 'floatBadge1 3.5s ease-in-out infinite' },
  { label: 'Machine Learning', icon: null, svgIcon: 'ml', color: '#6366F1', bg: 'rgba(99,102,241,0.12)', top: '10%', left: '-20%', anim: 'floatBadge2 4s ease-in-out infinite' },
  { label: 'Power BI', icon: null, svgIcon: 'pbi', color: '#F2C811', bg: 'rgba(242,200,17,0.12)', bottom: '20%', left: '-18%', anim: 'floatBadge3 3.8s ease-in-out infinite' },
  { label: 'AWS Cloud', icon: null, svgIcon: 'aws', color: '#FF9900', bg: 'rgba(255,153,0,0.12)', top: '35%', right: '-20%', anim: 'floatBadge4 4.2s ease-in-out infinite' },
  { label: 'React', icon: null, svgIcon: 'react', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)', bottom: '5%', right: '-15%', anim: 'floatBadge5 3.6s ease-in-out infinite' },
  { label: 'Data Science', icon: null, svgIcon: 'ds', color: '#06B6D4', bg: 'rgba(6,182,212,0.12)', bottom: '-5%', left: '-5%', anim: 'floatBadge6 4.5s ease-in-out infinite' },
];

function BadgeIcon({ svgIcon, color }) {
  const icons = {
    ml: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    pbi: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <rect x="2" y="10" width="4" height="12" rx="1"/>
        <rect x="8" y="6" width="4" height="16" rx="1"/>
        <rect x="14" y="2" width="4" height="20" rx="1"/>
        <rect x="20" y="8" width="2" height="14" rx="1"/>
      </svg>
    ),
    aws: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.504.336c-.072.048-.144.072-.208.072-.08 0-.16-.04-.24-.112-.112-.12-.208-.248-.288-.376-.08-.136-.16-.288-.248-.472-.624.736-1.408 1.104-2.352 1.104-.672 0-1.208-.192-1.6-.576-.392-.384-.592-.896-.592-1.536 0-.68.24-1.232.728-1.648.488-.416 1.136-.624 1.96-.624.272 0 .552.024.848.064.296.04.6.104.92.176v-.584c0-.608-.128-1.032-.376-1.28-.256-.248-.688-.368-1.304-.368-.28 0-.568.032-.864.104-.296.072-.584.16-.864.272-.128.056-.224.088-.28.1-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.392c0-.128.016-.224.056-.28.04-.056.112-.112.224-.168.28-.144.616-.264 1.008-.36.392-.104.808-.152 1.248-.152.952 0 1.648.216 2.096.648.44.432.664 1.088.664 1.968v2.592zm-3.248 1.216c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336c-.232-.056-.48-.104-.736-.136-.256-.032-.504-.048-.752-.048-.536 0-.928.104-1.192.32-.264.216-.392.52-.392.92 0 .376.096.656.296.848.192.2.472.296.84.296zm6.408.872c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.312l-1.888-6.208c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.192-.2h.784c.152 0 .256.024.312.08.064.048.112.16.16.312l1.352 5.328 1.256-5.328c.04-.16.088-.264.152-.312.064-.048.176-.08.32-.08h.64c.152 0 .256.024.32.08.064.048.12.16.152.312l1.272 5.392 1.392-5.392c.048-.16.104-.264.16-.312.064-.048.16-.08.312-.08h.744c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.016.048-.032.112-.064.2l-1.936 6.208c-.048.16-.104.264-.168.312-.064.048-.168.08-.304.08h-.688c-.152 0-.256-.024-.32-.08-.064-.056-.12-.16-.152-.32l-1.248-5.168-1.24 5.16c-.04.16-.088.264-.152.32-.064.056-.176.08-.328.08H9.923zm10.192.24c-.408 0-.816-.048-1.208-.144-.392-.096-.696-.2-.904-.32-.128-.072-.216-.152-.248-.224-.032-.072-.048-.152-.048-.232v-.408c0-.168.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.272.12.568.216.888.28.328.064.648.096.976.096.52 0 .92-.088 1.2-.264.28-.176.424-.432.424-.76 0-.224-.072-.408-.216-.56-.144-.152-.416-.288-.808-.416l-1.16-.36c-.584-.184-1.016-.456-1.288-.816-.272-.352-.408-.744-.408-1.168 0-.336.072-.632.216-.888.144-.256.336-.48.584-.664.248-.184.528-.32.848-.416.32-.096.656-.14 1.008-.14.176 0 .36.008.536.032.184.024.352.056.512.096.152.04.296.088.432.144.136.056.24.112.312.168.104.072.176.144.216.224.04.072.064.168.064.28v.376c0 .168-.064.256-.184.256-.064 0-.168-.032-.304-.096-.456-.208-.968-.312-1.536-.312-.472 0-.84.08-1.104.24-.264.16-.4.4-.4.728 0 .224.08.416.24.568.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.768.248.328.368.704.368 1.12 0 .344-.072.656-.208.928-.144.272-.336.512-.592.704-.256.2-.56.344-.912.44-.368.104-.76.152-1.184.152z"/>
      </svg>
    ),
    react: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    ),
    ds: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828"/>
        <path d="M12 2v4M12 18v4" stroke={color} strokeWidth="2" fill="none"/>
      </svg>
    ),
  };
  return icons[svgIcon] || null;
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_STRINGS);
  const [imgErr, setImgErr] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <div className="hero-greeting">
              <span style={{ fontSize: '1.3rem' }}>👋</span> Hello, I'm
            </div>

            <h1 className="hero-name">
              <span className="gradient-text">B. Ranjith</span>
              <br />Kumar
            </h1>

            <p className="hero-title">
              🎓 AI &amp; Data Science Student
            </p>

            <div className="hero-typing-wrap">
              <span className="typing-prefix">I specialize as</span>
              <span className="typing-text">
                {typedText}<span className="typing-cursor" />
              </span>
            </div>

            <p className="hero-desc">
              Passionate about Artificial Intelligence, Machine Learning, Data Analytics,
              Cloud Computing and building innovative digital solutions. Focused on creating
              impactful projects and continuously learning emerging technologies.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <FaRocket /> View Projects
              </button>
              <a
                href="/resume.docx"
                className="btn btn-secondary"
                download="B_Ranjith_Kumar_Resume.docx"
              >
                <FaDownload /> Download Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-social">
              <span className="hero-social-label">Find me</span>

              <a
                href="https://github.com/ranjithkumar077"
                target="_blank" rel="noreferrer"
                className="social-icon-link github"
                title="GitHub"
                style={{ color: '#24292e' }}
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/ranjithkumar077"
                target="_blank" rel="noreferrer"
                className="social-icon-link linkedin"
                title="LinkedIn"
                style={{ color: '#0A66C2' }}
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://leetcode.com/u/ranjithkumar077/"
                target="_blank" rel="noreferrer"
                className="social-icon-link leetcode"
                title="LeetCode"
                style={{ color: '#f89f1b' }}
              >
                <SiLeetcode size={17} />
              </a>

              <a
                href="mailto:branjithk9@gmail.com"
                className="social-icon-link email"
                title="Email"
                style={{ color: '#6366F1' }}
              >
                <FiMail size={17} />
              </a>

              <a
                href="https://wa.me/917780183374"
                target="_blank" rel="noreferrer"
                className="social-icon-link whatsapp"
                title="WhatsApp"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT – Profile + Orbit Badges */}
          <div className="hero-image-wrap">
            {/* Rotating rings */}
            <div className="profile-outer-ring">
              <div className="profile-outer-ring-inner" />
            </div>
            <div className="profile-mid-ring" />
            <div className="profile-outer-ring2" />

            {/* Orbit skill badges */}
            {ORBIT_BADGES.map((b, i) => (
              <div
                key={i}
                className="skill-orbit-badge"
                style={{
                  top: b.top, bottom: b.bottom,
                  left: b.left, right: b.right,
                  background: 'rgba(255,255,255,0.95)',
                  animation: b.anim,
                }}
              >
                <div
                  className="skill-orbit-badge-dot"
                  style={{ background: b.color }}
                />
                {b.icon ? (
                  <span style={{ fontSize: '1rem' }}>{b.icon}</span>
                ) : (
                  <BadgeIcon svgIcon={b.svgIcon} color={b.color} />
                )}
                <span style={{ color: '#1e293b', fontWeight: 700, fontSize: '0.76rem' }}>
                  {b.label}
                </span>
              </div>
            ))}

            {/* Profile Photo */}
            <div className="profile-img-container">
              {!imgErr ? (
                <img
                  src="/profile.jpg"
                  alt="B. Ranjith Kumar"
                  onError={() => setImgErr(true)}
                />
              ) : (
                <div className="profile-placeholder-text" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>RANJITH KUMAR</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        style={{
          display: 'flex', justifyContent: 'center', marginTop: 48,
          opacity: 0, animation: 'fadeSlideUp 0.6s ease 1.8s forwards',
          position: 'relative', zIndex: 2,
        }}
      >
        <button
          onClick={() => scrollTo('about')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--primary)', fontSize: '1.75rem',
            animation: 'heroFloat 2s ease-in-out infinite',
          }}
          aria-label="Scroll down"
        >
          <BsArrowDownCircle />
        </button>
      </div>
    </section>
  );
}
