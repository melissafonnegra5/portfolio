'use client';

import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'JavaScript ES6+',
    icon: '⚡',
    color: '#f7df1e',
    years: '3 años',
    skills: [
      { name: 'JavaScript ES6+', level: 90 },
      { name: 'ReactJS', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'DOM / APIs del navegador', level: 90 },
      { name: 'Fetch / Axios / REST', level: 85 },
    ],
  },
  {
    title: 'HTML & CSS',
    icon: '🎨',
    color: '#3b82f6',
    years: '4 años',
    skills: [
      { name: 'HTML5 Semántico', level: 95 },
      { name: 'CSS3 / Flexbox / Grid', level: 95 },
      { name: 'Bootstrap 5', level: 92 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Maquetación pixel-perfect', level: 90 },
    ],
  },
  {
    title: 'Drupal CMS',
    icon: '💧',
    color: '#0678be',
    years: '3 años',
    skills: [
      { name: 'Drupal (PHP)', level: 85 },
      { name: 'Creación de contenidos', level: 92 },
      { name: 'Theming / Templates', level: 85 },
      { name: 'Módulos y configuración', level: 80 },
      { name: 'Ambientes productivos', level: 88 },
    ],
  },
  {
    title: 'Herramientas & Flujo',
    icon: '🔧',
    color: '#ec4899',
    years: '',
    skills: [
      { name: 'Git / Control de versiones', level: 88 },
      { name: 'Filtros / Breadcrumbs / UI', level: 90 },
      { name: 'SEO on-page', level: 80 },
      { name: 'Performance web', level: 78 },
      { name: 'Deploy / Ambientes prod', level: 82 },
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
                <div className={styles.headerLeft}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                {category.years && (
                  <span className={styles.yearsBadge}>{category.years}</span>
                )}
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressBar}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
