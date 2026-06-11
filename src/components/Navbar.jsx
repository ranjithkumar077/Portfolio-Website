import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}>
        RK
      </a>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={active === item.href ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          >
            Hire Me
          </a>
        </li>
      </ul>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none', transition: 'all 0.3s' }} />
        <span style={{ opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition: 'all 0.3s' }} />
      </button>
    </nav>
  );
}
