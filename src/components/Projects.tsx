'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

const personalProjects = [
  {
    title: 'Portfolio',
    description:
      'Este sitio: portafolio personal construido con Next.js 16 y CSS Modules, con entorno local en DDEV y despliegue continuo en Vercel.',
    tags: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'DDEV', 'Vercel'],
    color: '#7c3aed',
    github: 'https://github.com/melissafonnegra5/portfolio',
    demo: 'https://melissafonnegra.vercel.app',
    image: '💼',
  },
  {
    title: 'Retazos Negros',
    description:
      'Blog personal bilingüe (español / inglés) con rutas i18n, metadatos SEO, datos estructurados JSON-LD, RSS por idioma y formulario de newsletter.',
    tags: ['Astro', 'i18n', 'SEO', 'JSON-LD', 'RSS'],
    color: '#ec4899',
    github: null,
    demo: null,
    image: '📝',
  },
];

const responsibilities = [
  'Intervención del código fuente para mantener los sitios actualizados en ambiente productivo',
  'Actualización y carga de contenidos e imágenes',
  'Maquetación HTML responsiva',
  'Funcionalidades como filtros, migas de pan y simuladores',
];

const clientProjects = [
  { name: 'Famisanar', type: 'Portal web', sector: 'salud' },
  { name: 'Nueva EPS', type: 'Portal web', sector: 'salud' },
  { name: 'Banesco Panamá', type: 'Portal web', sector: 'finanzas' },
  { name: 'Ban100', type: 'Portal web', sector: 'finanzas' },
  { name: 'Credivalores', type: 'Portal web', sector: 'finanzas' },
  { name: 'Línea Directa', type: 'Aplicación web', sector: 'finanzas' },
  { name: 'Mastercard', type: 'Campañas de fidelización', sector: 'finanzas' },
  { name: 'Diageo', type: 'Landings promocionales', sector: 'consumo' },
  { name: 'FLA', type: 'Landing Barú', sector: 'consumo' },
  { name: 'Haceb Servicio', type: 'Portal web', sector: 'consumo' },
  { name: 'Haceb Blog', type: 'Portal web', sector: 'consumo' },
  { name: 'Constructora Bolívar', type: 'Portal web', sector: 'corporativo' },
  { name: 'Londoño Gómez', type: 'Portal web', sector: 'corporativo' },
  { name: 'Grupo UMA', type: 'Portal web', sector: 'corporativo' },
  { name: 'Rappi', type: 'Portal web (About)', sector: 'corporativo' },
  { name: 'Navegg', type: 'Portal web', sector: 'corporativo' },
];

const sectorIcons: Record<string, string> = {
  salud: '🏥',
  finanzas: '🏦',
  consumo: '🛍️',
  corporativo: '🏢',
};

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'salud', label: 'Salud' },
  { key: 'finanzas', label: 'Banca & Finanzas' },
  { key: 'consumo', label: 'Retail & Consumo' },
  { key: 'corporativo', label: 'Corporativo & Tecnología' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredClients =
    activeFilter === 'all'
      ? clientProjects
      : clientProjects.filter((p) => p.sector === activeFilter);

  return (
    <section id="proyectos" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">
          Proyectos <span className="gradient-text">Destacados</span>
        </h2>
        <p className="section-subtitle">
          Proyectos personales y portales que he desarrollado para marcas líderes en Dentsu.
        </p>

        <h3 className={styles.groupTitle}>Proyectos personales</h3>
        <div className={styles.grid}>
          {personalProjects.map((project) => (
            <article key={project.title} className={`glass-card ${styles.card}`}>
              <div
                className={styles.cardHeader}
                style={{
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                }}
              >
                <span className={styles.projectIcon} aria-hidden="true">
                  {project.image}
                </span>
                <div className={styles.cardLinks}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Código fuente de ${project.title} en GitHub (se abre en una pestaña nueva)`}
                    >
                      <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Ver ${project.title} en vivo (se abre en una pestaña nueva)`}
                    >
                      <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className={styles.groupTitle}>Portales y aplicaciones en Dentsu</h3>
        <div className={`glass-card ${styles.workIntro}`}>
          <ul className={styles.responsibilities}>
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.tags}>
            {['JavaScript ES6+', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap 5', 'PHP', 'Drupal CMS'].map(
              (tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className={styles.filters} role="group" aria-label="Filtrar por sector">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={activeFilter === f.key}
              className={`${styles.filterBtn} ${
                activeFilter === f.key ? styles.filterActive : ''
              }`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {filteredClients.length === 1
            ? '1 proyecto'
            : `${filteredClients.length} proyectos`}
        </p>

        <ul className={styles.clientGrid}>
          {filteredClients.map((client) => (
            <li key={client.name} className={`glass-card ${styles.clientCard}`}>
              <span className={styles.clientIcon} aria-hidden="true">
                {sectorIcons[client.sector]}
              </span>
              <div>
                <h4 className={styles.clientName}>{client.name}</h4>
                <p className={styles.clientType}>{client.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
