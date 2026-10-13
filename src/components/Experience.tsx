'use client';

import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2023 - Presente',
    description:
      'Liderazgo técnico del equipo frontend. Migración de la plataforma principal a Next.js 14 con App Router, mejorando el rendimiento un 40%. Implementación de design system corporativo.',
    tags: ['Next.js', 'TypeScript', 'React', 'CI/CD'],
    color: '#7c3aed',
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup SaaS',
    period: '2021 - 2023',
    description:
      'Desarrollo del MVP y escalamiento de la plataforma SaaS. Construcción de APIs RESTful, integración con servicios de terceros y optimización de bases de datos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#3b82f6',
    current: false,
  },
  {
    role: 'Frontend Developer',
    company: 'Agencia Digital',
    period: '2020 - 2021',
    description:
      'Desarrollo de aplicaciones web responsivas para clientes de múltiples industrias. Implementación de animaciones complejas y optimización de rendimiento.',
    tags: ['React', 'JavaScript', 'CSS', 'Figma'],
    color: '#06b6d4',
    current: false,
  },
  {
    role: 'Junior Developer',
    company: 'Software House',
    period: '2019 - 2020',
    description:
      'Primeros pasos en desarrollo profesional. Participación en proyectos de mantenimiento, desarrollo de features y aprendizaje de buenas prácticas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
    color: '#10b981',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Experiencia</span> Profesional
        </h2>
        <p className="section-subtitle">
          Mi trayectoria profesional y los roles que han definido mi carrera.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={exp.period}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineDot} style={{ background: exp.color }}>
                {exp.current && <span className={styles.pulse} />}
              </div>

              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <span
                    className={styles.period}
                    style={{ color: exp.color }}
                  >
                    {exp.period}
                  </span>
                  {exp.current && <span className={styles.currentBadge}>Actual</span>}
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
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
