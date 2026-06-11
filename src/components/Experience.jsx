const EXPERIENCES = [
  {
    role: 'Data Analyst Intern',
    company: 'Internship Program',
    date: '2024 – Present',
    tasks: [
      'Developed interactive Power BI dashboards for business insights',
      'Performed data cleaning and transformation using Python & SQL',
      'Created compelling data visualizations for stakeholder presentations',
      'Analyzed business KPIs and generated actionable reports',
      'Collaborated with cross-functional teams on data-driven decisions',
    ],
    tags: ['Power BI', 'Python', 'SQL', 'Data Analysis', 'Excel'],
    icon: '📊',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
  },
  {
    role: 'AI & ML Projects',
    company: 'Academic & Self-Initiated',
    date: '2023 – Present',
    tasks: [
      'Built AI Resume Screening System using NLP and Machine Learning',
      'Developed Cloud Monitoring System with AWS CloudWatch',
      'Created Sales Analytics Dashboard with Power BI',
      'Implemented various ML models for classification & regression',
      'Explored deep learning and neural network architectures',
    ],
    tags: ['Python', 'Machine Learning', 'NLP', 'AWS', 'Flask'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  },
  {
    role: 'Full Stack Development',
    company: 'Personal Projects',
    date: '2022 – Present',
    tasks: [
      'Built responsive web applications using React & Node.js',
      'Designed RESTful APIs with Express and MongoDB',
      'Implemented authentication and authorization systems',
      'Deployed applications to cloud platforms',
      'Practiced modern development workflows with Git & GitHub',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'GitHub'],
    icon: '💻',
    gradient: 'linear-gradient(135deg, #06B6D4, #6366F1)',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">✦ Experience</div>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-desc">
            Real-world experience, academic projects, and continuous learning that shaped my skills.
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 12,
                        background: exp.gradient,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.25rem', flexShrink: 0,
                        boxShadow: '0 4px 15px rgba(99,102,241,0.3)'
                      }}>
                        {exp.icon}
                      </div>
                      <div>
                        <div className="timeline-role">{exp.role}</div>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-date">{exp.date}</div>
                </div>

                <ul className="timeline-tasks">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="timeline-task">{task}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
