import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre-mi" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">
          Sobre <span className="gradient-text">Mí</span>
        </h2>
        <p className="section-subtitle">
          Ingeniera de Software enfocada en interfaces precisas, accesibles y fáciles de mantener.
        </p>

        <div className={styles.grid}>
          <div className={styles.storyCard}>
            <div className={`glass-card ${styles.card}`}>
              <div className={styles.cardIcon} aria-hidden="true">🚀</div>
              <h3 className={styles.cardTitle}>Mi Perfil Profesional</h3>
              <p className={styles.cardText}>
                Soy Ingeniera de Software con más de 6 años de experiencia en desarrollo frontend y
                maquetación web para plataformas digitales y portales corporativos de alta demanda
                en banca, salud, retail y consumo masivo.
              </p>
              <p className={styles.cardText}>
                Construyo interfaces responsivas y accesibles con HTML5 semántico, CSS3/SASS,
                Bootstrap 5 y JavaScript moderno (ES6+), y tengo sólida experiencia en arquitecturas
                desacopladas (Headless CMS) que integran Drupal con React y Next.js.
              </p>
              <p className={styles.cardText}>
                Trabajo con diseño modular (Atomic Design), traslado fiel de prototipos en Figma
                (Dev Mode / pixel-perfect), estándares de accesibilidad WCAG, SEO técnico, planes de
                taggeo e integración de herramientas de IA para acelerar el desarrollo y mejorar la
                calidad del código.
              </p>
            </div>
          </div>

          <div className={styles.infoCards}>
            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon} aria-hidden="true">🎯</div>
              <div>
                <h4 className={styles.miniTitle}>Enfoque</h4>
                <p className={styles.miniText}>
                  Maquetación pixel-perfect, design systems con Atomic Design y Drupal headless con React y Next.js
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon} aria-hidden="true">🏢</div>
              <div>
                <h4 className={styles.miniTitle}>Sectores</h4>
                <p className={styles.miniText}>
                  Banca y finanzas, salud, retail y consumo masivo, construcción y tecnología
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon} aria-hidden="true">🎓</div>
              <div>
                <h4 className={styles.miniTitle}>Formación</h4>
                <p className={styles.miniText}>
                  Ingeniería de Software (Politécnico Grancolombiano), Tecnología ADSI y Técnico en
                  Programación de Software (SENA)
                </p>
              </div>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniIcon} aria-hidden="true">🌎</div>
              <div>
                <h4 className={styles.miniTitle}>Idiomas</h4>
                <p className={styles.miniText}>
                  Español nativo · Inglés técnico (lectura y documentación)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
