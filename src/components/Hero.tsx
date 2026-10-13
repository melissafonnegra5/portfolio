'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ['#7c3aed', '#3b82f6', '#06b6d4', '#ec4899'];

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        if (!reducedMotion.matches) {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 150) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
    };

    const loop = () => {
      draw();
      animationId = requestAnimationFrame(loop);
    };

    // Solo anima cuando el hero está en pantalla, la pestaña está activa
    // y la persona no pidió reducir el movimiento
    const update = () => {
      cancelAnimationFrame(animationId);
      if (reducedMotion.matches || !visible || document.hidden) {
        draw();
      } else {
        loop();
      }
    };

    const onResize = () => {
      resize();
      update();
    };
    window.addEventListener('resize', onResize);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(canvas);
    document.addEventListener('visibilitychange', update);
    reducedMotion.addEventListener('change', update);
    update();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      reducedMotion.removeEventListener('change', update);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <div className={`${styles.badge} animate-in`}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Disponible para nuevos proyectos
          </div>

          <h1 id="hero-title" className={`${styles.title} animate-in animate-delay-1`}>
            Hola, soy{' '}
            <span className="gradient-text">Melissa Fonnegra</span>
          </h1>

          <p className={`${styles.subtitle} animate-in animate-delay-2`}>
            <span className={styles.typingWrapper}>
              <span className={styles.typingText}>Ingeniera de Software · Frontend Developer &amp; UI Specialist</span>
            </span>
          </p>

          <p className={`${styles.description} animate-in animate-delay-3`}>
            Construyo interfaces responsivas y accesibles para portales corporativos de banca,
            salud, retail y consumo masivo. Especializada en maquetación pixel-perfect desde Figma
            y en arquitecturas desacopladas que integran Drupal con React y Next.js.
          </p>

          <div className={`${styles.ctas} animate-in animate-delay-4`}>
            <a href="#proyectos" className={styles.ctaPrimary}>
              <span>Ver Proyectos</span>
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contacto" className={styles.ctaSecondary}>
              Contáctame
            </a>
          </div>

          <div className={`${styles.stats} animate-in animate-delay-5`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>16</span>
              <span className={styles.statLabel}>Marcas y portales</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Sectores</span>
            </div>
          </div>
        </div>

        <div className={`${styles.imageCol} animate-in animate-delay-3`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarGlow} aria-hidden="true" />
            <div className={styles.avatarBorder}>
              <Image
                src="/avatar.jpg"
                alt="Melissa Fonnegra Zapata"
                width={340}
                height={340}
                className={styles.avatar}
                preload
              />
            </div>
            <div className={styles.floatingBadge1}>
              <span aria-hidden="true">⚛️</span> React / Next.js
            </div>
            <div className={styles.floatingBadge2}>
              <span aria-hidden="true">💧</span> Drupal CMS
            </div>
            <div className={styles.floatingBadge3}>
              <span aria-hidden="true">🎨</span> Figma · Pixel-Perfect
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
