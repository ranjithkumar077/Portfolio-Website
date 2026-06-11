import { FaGithub, FaExternalLinkAlt, FaBrain, FaAws } from 'react-icons/fa';
import { SiPython, SiReact, SiMongodb, SiTensorflow, SiFlask, SiMysql } from 'react-icons/si';
import { MdCloudQueue, MdBarChart, MdSmartphone, MdStorage } from 'react-icons/md';
import Tilt from 'react-parallax-tilt';

const PROJECTS = [
  {
    number: '01',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(102,126,234,0.5)' }}>
        <FaBrain size={42} color="white" />
      </div>
    ),
    title: 'AI Resume Screening System',
    desc: 'Smart ATS platform using AI to intelligently match resumes with job descriptions. Automates candidate screening with NLP, achieving 90%+ matching accuracy.',
    tech: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'NLP', Icon: FaBrain, color: '#8B5CF6' },
      { name: 'ML', Icon: FaBrain, color: '#6366F1' },
      { name: 'Flask', Icon: SiFlask, color: '#555' },
      { name: 'SQL', Icon: SiMysql, color: '#00758F' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
  },
  {
    number: '02',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#f093fb,#f5576c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(240,147,251,0.5)' }}>
        <MdCloudQueue size={42} color="white" />
      </div>
    ),
    title: 'Cloud Monitoring & Alert System',
    desc: 'AWS Cloud Monitoring solution with real-time alerts, logging, and performance dashboards. Tracks metrics across EC2, Lambda, and S3 with automated incident response.',
    tech: [
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'CloudWatch', Icon: MdCloudQueue, color: '#F97316' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Lambda', Icon: MdStorage, color: '#EC4899' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#f093fb 0%,#f5576c 100%)',
  },
  {
    number: '03',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#4facfe,#00f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(79,172,254,0.5)' }}>
        <MdBarChart size={42} color="white" />
      </div>
    ),
    title: 'Sales Analytics Dashboard',
    desc: 'Enterprise-grade Business Intelligence dashboard using Power BI with drill-down KPIs, sales trends, regional performance heatmaps, and revenue forecasting.',
    tech: [
      { name: 'Power BI', Icon: MdBarChart, color: '#F2C811' },
      { name: 'SQL', Icon: SiMysql, color: '#00758F' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)',
  },
  {
    number: '04',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#43e97b,#38f9d7)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(67,233,123,0.5)' }}>
        <SiTensorflow size={40} color="white" />
      </div>
    ),
    title: 'Deep Learning Image Classifier',
    desc: 'Convolutional Neural Network model for image classification with transfer learning from ResNet50. Achieves 95%+ accuracy on custom datasets with data augmentation.',
    tech: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
      { name: 'CNN', Icon: FaBrain, color: '#6366F1' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#43e97b 0%,#38f9d7 100%)',
  },
  {
    number: '05',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#fa709a,#fee140)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(250,112,154,0.5)' }}>
        <SiReact size={40} color="white" />
      </div>
    ),
    title: 'Full Stack E-Commerce Web App',
    desc: 'Complete MERN stack e-commerce platform with user authentication, product catalog, cart management, payment integration, and admin dashboard.',
    tech: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', Icon: MdStorage, color: '#68A063' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#fa709a 0%,#fee140 100%)',
  },
  {
    number: '06',
    GradientIcon: () => (
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(161,140,209,0.5)' }}>
        <MdSmartphone size={42} color="white" />
      </div>
    ),
    title: 'Customer Churn Prediction',
    desc: 'ML model to predict customer churn using ensemble methods (Random Forest + XGBoost). Includes feature engineering, SHAP explainability, and interactive Streamlit dashboard.',
    tech: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'ML', Icon: FaBrain, color: '#8B5CF6' },
      { name: 'SQL', Icon: SiMysql, color: '#00758F' },
    ],
    github: 'https://github.com/ranjithkumar077',
    demo: null,
    gradient: 'linear-gradient(135deg,#a18cd1 0%,#fbc2eb 100%)',
  },
];

function TechBadge({ name, Icon, color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 5,
      padding: '4px 10px', borderRadius: 8,
      background: color + '18',
      border: `1px solid ${color}30`,
      fontSize: '0.7rem', fontWeight: 700,
      color: color,
      fontFamily: 'JetBrains Mono, monospace',
      transition: 'all 0.2s ease',
    }}>
      <Icon size={11} color={color} />
      {name}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">✦ Featured Projects</div>
          <h2 className="section-title">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-desc">
            6 real-world projects spanning AI, Cloud, Data Science, and Full Stack Development.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <Tilt
              key={i}
              className="reveal"
              style={{ transitionDelay: `${(i % 3) * 0.12}s`, borderRadius: 'var(--radius-xl)' }}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
            >
              <div className="project-card" style={{ height: '100%' }}>
                <div className="project-banner" style={{ background: project.gradient }}>
                  <project.GradientIcon />
                  {/* Decorative circles */}
                  <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
                  <div style={{ position: 'absolute', bottom: -25, left: -10, width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '10%', width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                </div>

                <div className="project-body">
                  <div className="project-number">{project.number}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tech">
                    {project.tech.map(t => (
                      <TechBadge key={t.name} {...t} />
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank" rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '9px 18px', fontSize: '0.82rem' }}
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank" rel="noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '9px 18px', fontSize: '0.82rem' }}
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
