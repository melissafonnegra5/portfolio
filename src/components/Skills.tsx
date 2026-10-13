import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend & Maquetación UI',
    icon: '🎨',
    color: '#3b82f6',
    skills: [
      'HTML5 semántico',
      'CSS3',
      'SASS',
      'Bootstrap 5',
      'Atomic Design',
      'Figma (Handoff / Dev Mode)',
      'Responsive Design',
      'Pixel-Perfect',
    ],
  },
  {
    title: 'JavaScript & Frameworks',
    icon: '⚡',
    color: '#f7df1e',
    skills: [
      'JavaScript ES6+',
      'React.js',
      'Next.js',
      'jQuery',
      'APIs REST',
      'GraphQL',
      'Componentes modulares reactivos',
    ],
  },
  {
    title: 'CMS & Arquitectura',
    icon: '💧',
    color: '#0678be',
    skills: [
      'Drupal 8, 9 y 10',
      'Drupal desacoplado / Headless CMS',
      'PHP básico',
      'Desarrollo asistido por IA',
    ],
  },
  {
    title: 'Calidad, Analítica & Flujo',
    icon: '🔧',
    color: '#ec4899',
    skills: [
      'Accesibilidad WCAG / a11y',
      'SEO técnico',
      'Plan de taggeo',
      'Analítica digital',
      'Git',
      'Bitbucket',
      'DDEV',
      'Docker (local)',
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Habilidades</span> Técnicas
        </h2>
        <p className="section-subtitle">
          Mis tecnologías principales y las herramientas con las que trabajo a diario.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <ul className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={styles.skillTag}
                    style={{ borderColor: `${category.color}55` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
