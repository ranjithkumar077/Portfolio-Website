import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';

const CONTACTS = [
  {
    id: 'email',
    type: 'Email',
    value: 'branjithk9@gmail.com',
    Icon: SiGmail,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #EA4335, #c5221f)',
    href: 'mailto:branjithk9@gmail.com',
    cardClass: 'email',
    copyable: true,
  },
  {
    id: 'github',
    type: 'GitHub',
    value: 'github.com/ranjithkumar077',
    Icon: FaGithub,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #24292e, #3d444d)',
    href: 'https://github.com/ranjithkumar077',
    cardClass: 'github-c',
    copyable: false,
    external: true,
  },
  {
    id: 'linkedin',
    type: 'LinkedIn',
    value: 'linkedin.com/in/ranjithkumar077',
    Icon: FaLinkedinIn,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #0A66C2, #0077B5)',
    href: 'https://linkedin.com/in/ranjithkumar077',
    cardClass: 'linkedin-c',
    copyable: false,
    external: true,
  },
  {
    id: 'leetcode',
    type: 'LeetCode',
    value: 'ranjithkumar077',
    Icon: SiLeetcode,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #F97316, #f89f1b)',
    href: 'https://leetcode.com/u/ranjithkumar077/',
    cardClass: 'leetcode-c',
    copyable: false,
    external: true,
  },
  {
    id: 'whatsapp',
    type: 'WhatsApp',
    value: 'Chat with me',
    Icon: FaWhatsapp,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #25D366, #128C7E)',
    href: 'https://wa.me/917780183374?text=Hi%20Ranjith%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
    cardClass: 'whatsapp-c',
    copyable: false,
    external: true,
  },
  {
    id: 'location',
    type: 'Location',
    value: 'Andhra Pradesh, India',
    Icon: FaMapMarkerAlt,
    iconColor: '#ffffff',
    iconBg: 'linear-gradient(135deg, #EC4899, #F97316)',
    href: null,
    cardClass: 'email',
    copyable: false,
  },
];

function ContactCard({ contact }) {
  const [copied, setCopied] = useState(false);
  const { Icon } = contact;

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contact.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const cardContent = (
    <>
      <div
        className="contact-icon-wrap"
        style={{ background: contact.iconBg, boxShadow: `0 8px 24px ${contact.iconColor === '#ffffff' ? 'rgba(0,0,0,0.15)' : contact.iconColor + '40'}` }}
      >
        <Icon size={26} color={contact.iconColor} />
      </div>
      <div className="contact-type">{contact.type}</div>
      <div className="contact-value">{contact.value}</div>
      {contact.copyable && (
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Copied!' : '⧉ Copy'}
        </button>
      )}
    </>
  );

  if (contact.href) {
    return (
      <a
        href={contact.href}
        target={contact.external ? '_blank' : undefined}
        rel={contact.external ? 'noreferrer' : undefined}
        className={`contact-card ${contact.cardClass} reveal`}
      >
        {cardContent}
      </a>
    );
  }

  return <div className={`contact-card ${contact.cardClass} reveal`}>{cardContent}</div>;
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="contact-headline reveal">
          Let's Build Something <span className="gradient-text">Amazing</span>
        </h2>
        <p className="contact-subtitle reveal">
          Open to exciting opportunities, collaborations, and interesting projects.
          Reach out through any channel below!
        </p>

        <div className="contact-grid">
          {CONTACTS.map((c, i) => (
            <div key={c.id} className="contact-card-wrapper" style={{ transitionDelay: `${i * 0.08}s` }}>
              <ContactCard contact={c} />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="reveal"
          style={{
            marginTop: 44,
            padding: '40px',
            background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(139,92,246,0.08),rgba(6,182,212,0.04))',
            border: '1px solid rgba(99,102,241,0.18)',
            borderRadius: 'var(--radius-2xl)',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
            }}>
              <FaWhatsapp size={32} color="white" />
            </div>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, fontFamily: 'Outfit,sans-serif' }}>
            Available for Opportunities
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.7 }}>
            Looking for internships, collaborations, and full-time roles in AI Engineering,
            Data Science &amp; Full Stack Development.
          </p>
          <a
            href="https://wa.me/917780183374?text=Hi%20Ranjith%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank" rel="noreferrer"
            className="btn"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
