import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Dentsu · Medellín, Colombia',
    period: 'Jun 2020 - Presente',
    description:
      'Construcción, maquetación y mantenimiento de portales corporativos, aplicaciones web y landing pages promocionales de alta exigencia técnica y visual para marcas líderes.',
    highlights: [
      'Arquitectura desacoplada: backends en Drupal 8, 9 y 10 integrados con interfaces en React y Next.js.',
      'Traslado pixel-perfect de prototipos en Figma (Dev Mode, variables y tokens) a código con Atomic Design.',
      'Componentes en JavaScript ES6+: filtros dinámicos, simuladores, calculadoras y breadcrumbs.',
      'Accesibilidad WCAG 2.1, SEO técnico y planes de taggeo para medición de conversiones.',
      'Desarrollo asistido por IA para maquetar, refactorizar y resolver incidencias más rápido.',
      'Entornos locales con DDEV, Git/Bitbucket y soporte continuo a producción.',
    ],
    tags: ['Drupal', 'React', 'Next.js', 'SASS', 'Bootstrap 5', 'Figma'],
    color: '#7c3aed',
    textColor: '#a78bfa',
    current: true,
  },
  {
    role: 'Ingeniería de Software',
    company: 'Politécnico Grancolombiano',
    period: '2022 - 2024',
    description: 'Pregrado profesional · Graduada.',
    highlights: [],
    tags: ['Formación'],
    color: '#3b82f6',
    textColor: '#60a5fa',
    current: false,
  },
  {
    role: 'Tecnología en Análisis y Desarrollo de Sistemas (ADSI)',
    company: 'SENA Medellín',
    period: '2019 - 2020',
    description: 'Tecnólogo · Titulada.',
    highlights: [],
    tags: ['Formación'],
    color: '#06b6d4',
    textColor: '#22d3ee',
    current: false,
  },
  {
    role: 'Técnico en Programación de Software',
    company: 'SENA Medellín',
    period: '2017 - 2018',
    description:
      'Técnico · Titulada. Complementado con Fundamentos de Metodologías Ágiles (SENA) y el Proyecto Intercambio Virtual de inglés.',
    highlights: [],
    tags: ['Formación'],
    color: '#10b981',
    textColor: '#34d399',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Experiencia</span> y Formación
        </h2>
        <p className="section-subtitle">
          Mi trayectoria profesional y académica.
        </p>

        <ol className={styles.timeline}>
          {experiences.map((exp, i) => (
            <li
              key={exp.period}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div
                className={styles.timelineDot}
                style={{ background: exp.color }}
                aria-hidden="true"
              >
                {exp.current && <span className={styles.pulse} />}
              </div>

              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.period} style={{ color: exp.textColor }}>
                    <span className="sr-only">Periodo: </span>
                    {exp.period}
                  </span>
                  {exp.current && <span className={styles.currentBadge}>Actual</span>}
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
