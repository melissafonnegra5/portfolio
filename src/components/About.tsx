'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre-mi" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">
          Sobre <span className="gradient-text">Mí</span>
        </h2>
        <p className="section-subtitle">
          Transformo diseños en experiencias web funcionales, rápidas y mantenibles.
        </p>

        <div className={styles.grid}>
          <div className={styles.storyCard}>
            <div className={`glass-card ${styles.card}`}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Mi Perfil Profesional</h3>
              <p className={styles.cardText}>
                Soy desarrolladora web con más de 4 años de experiencia en la implementación
                y mantenimiento de portales y aplicaciones web para marcas reconocidas en
                sectores como salud, fintech, construcción, tecnología y consumo masivo.
              </p>
              <p className={styles.cardText}>
                Me especializo en intervenir código fuente en ambientes productivos,
                maquetación HTML/CSS responsiva, programación de funcionalidades frontend
                como filtros, migas de pan y simuladores, así como la actualización y
                carga de contenidos e imágenes en sitios web en producción.
              </p>
              <p className={styles.cardText}>
                Trabajo con JavaScript ES6+ (React, Next.js), HTML/CSS con Bootstrap 5
                y PHP con Drupal CMS, combinando desarrollo frontend moderno con
                gestión de contenidos empresariales.
              </p>
            </div>
          </div>

          <div className={styles.infoCards}>
            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon}>🎯</div>
              <div>
                <h4 className={styles.miniTitle}>Enfoque</h4>
                <p className={styles.miniText}>
                  Desarrollo frontend y mantenimiento de portales web en ambientes productivos para clientes de alto impacto
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon}>🔧</div>
              <div>
                <h4 className={styles.miniTitle}>Especialidades</h4>
                <p className={styles.miniText}>
                  Maquetación HTML, funcionalidades JS (filtros, breadcrumbs, simuladores), gestión de contenidos CMS
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon}>🏢</div>
              <div>
                <h4 className={styles.miniTitle}>Sectores</h4>
                <p className={styles.miniText}>
                  Salud (EPS), Fintech, Construcción, Tecnología, Consumo masivo, Banca y Seguros
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon}>🌱</div>
              <div>
                <h4 className={styles.miniTitle}>Crecimiento</h4>
                <p className={styles.miniText}>
                  En constante evolución desde HTML/CSS hacia React y Next.js, siempre con foco en código limpio y rendimiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
