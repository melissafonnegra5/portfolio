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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

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
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <div className={`${styles.badge} animate-in`}>
            <span className={styles.badgeDot} />
            Disponible para nuevos proyectos
          </div>

          <h1 className={`${styles.title} animate-in animate-delay-1`}>
            Hola, soy{' '}
            <span className="gradient-text">Melissa Fonnegra</span>
          </h1>

          <p className={`${styles.subtitle} animate-in animate-delay-2`}>
            <span className={styles.typingWrapper}>
              <span className={styles.typingText}>Desarrolladora Web Frontend &amp; CMS</span>
            </span>
          </p>

          <p className={`${styles.description} animate-in animate-delay-3`}>
            Desarrollo e implementación de portales y aplicaciones web para marcas de alto
            impacto. Especializada en JavaScript ES6+, React, Next.js y Drupal CMS.
            Maquetación, funcionalidades frontend y gestión de contenidos en ambientes productivos.
          </p>

          <div className={`${styles.ctas} animate-in animate-delay-4`}>
            <a href="#proyectos" className={styles.ctaPrimary}>
              <span>Ver Proyectos</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contacto" className={styles.ctaSecondary}>
              Contáctame
            </a>
          </div>

          <div className={`${styles.stats} animate-in animate-delay-5`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Clientes &amp; proyectos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Stacks tecnológicos</span>
            </div>
          </div>
        </div>

        <div className={`${styles.imageCol} animate-in animate-delay-3`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatarBorder}>
              <Image
                src="/avatar.jpg"
                alt="Melissa Fonnegra"
                width={340}
                height={340}
                className={styles.avatar}
                priority
              />
            </div>
            <div className={styles.floatingBadge1}>
              <span>⚛️</span> React / Next.js
            </div>
            <div className={styles.floatingBadge2}>
              <span>💧</span> Drupal CMS
            </div>
            <div className={styles.floatingBadge3}>
              <span>🅱️</span> Bootstrap 5
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
