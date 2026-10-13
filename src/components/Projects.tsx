'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico con carrito de compras, pagos integrados, panel de administración y gestión de inventario en tiempo real.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    category: 'fullstack',
    color: '#7c3aed',
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '🛒',
  },
  {
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real, notificaciones push y tableros Kanban personalizables.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    category: 'fullstack',
    color: '#3b82f6',
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '📋',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Dashboard interactivo para visualización de datos con gráficos dinámicos, reportes exportables y métricas en tiempo real.',
    tags: ['React', 'D3.js', 'TypeScript', 'REST API'],
    category: 'frontend',
    color: '#06b6d4',
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '📊',
  },
  {
    title: 'API REST Microservices',
    description:
      'Arquitectura de microservicios con autenticación JWT, rate limiting, documentación Swagger y tests automatizados.',
    tags: ['Node.js', 'Express', 'Docker', 'PostgreSQL', 'Jest'],
    category: 'backend',
    color: '#ec4899',
    github: 'https://github.com',
    demo: null,
    image: '🔗',
  },
  {
    title: 'Social Media App',
    description:
      'Red social con feed personalizado, sistema de followers, mensajería directa y stories con contenido multimedia.',
    tags: ['Next.js', 'GraphQL', 'AWS S3', 'Prisma', 'WebSocket'],
    category: 'fullstack',
    color: '#10b981',
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '💬',
  },
  {
    title: 'Design System Library',
    description:
      'Biblioteca de componentes reutilizables con Storybook, testing visual, documentación interactiva y versionado semántico.',
    tags: ['React', 'Storybook', 'CSS Modules', 'Jest', 'npm'],
    category: 'frontend',
    color: '#f59e0b',
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '🎨',
  },
];

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">
          Proyectos <span className="gradient-text">Destacados</span>
        </h2>
        <p className="section-subtitle">
          Una selección de proyectos que demuestran mi experiencia y habilidades técnicas.
        </p>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${
                activeFilter === f.key ? styles.filterActive : ''
              }`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.title} className={`glass-card ${styles.card}`}>
              <div
                className={styles.cardHeader}
                style={{
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                }}
              >
                <span className={styles.projectIcon}>{project.image}</span>
                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    title="Código fuente"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      title="Demo en vivo"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
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
      </div>
    </section>
  );
}
