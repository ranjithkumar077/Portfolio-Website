import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const FOOTER_LINKS = [
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/ranjithkumar077', color: '#24292e', hoverBg: '#24292e' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/ranjithkumar077', color: '#0A66C2', hoverBg: '#0A66C2' },
  { Icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/ranjithkumar077/', color: '#f89f1b', hoverBg: '#f89f1b' },
  { Icon: FiMail, label: 'Email', href: 'mailto:branjithk9@gmail.com', color: '#6366F1', hoverBg: '#6366F1' },
  { Icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/917780183374', color: '#25D366', hoverBg: '#25D366' },
];

export default function Footer() {
  const [imgErr, setImgErr] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Profile + Name */}
        <div className="footer-profile" onClick={scrollTop} style={{ cursor: 'pointer' }}>
          <div className="footer-avatar">
            {!imgErr ? (
              <img
                src="/profile.jpg"
                alt="B. Ranjith Kumar"
                onError={() => setImgErr(true)}
              />
            ) : (
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', fontFamily: 'Outfit,sans-serif' }}>RK</span>
            )}
          </div>
          <div className="footer-name">B. Ranjith Kumar</div>
        </div>

        <div className="footer-tagline">
          AI &amp; Data Science Student · Andhra Pradesh, India
        </div>

        <div className="footer-links">
          {FOOTER_LINKS.map(({ Icon, label, href, color, hoverBg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={label}
              style={{
                width: 42, height: 42, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                color: color,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = hoverBg;
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = `0 10px 25px ${hoverBg}50`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.color = color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="footer-heart">
          Made with <span>♥</span> by B. Ranjith Kumar · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
