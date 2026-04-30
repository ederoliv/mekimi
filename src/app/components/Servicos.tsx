'use client';

import { useEffect, useRef } from 'react';
import styles from './Servicos.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sites Institucionais',
    desc: 'Presença online profissional que transmite credibilidade e converte visitantes em clientes.',
    tags: ['Next.js', 'SEO', 'CMS'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Landing Pages',
    desc: 'Páginas de alta conversão focadas em capturar leads e impulsionar campanhas de marketing.',
    tags: ['Alta conversão', 'A/B Test', 'Analytics'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Hotsites',
    desc: 'Páginas de impacto para lançamentos, eventos e campanhas com experiências imersivas.',
    tags: ['Animações', 'UX premium', 'Responsivo'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Aplicativos Mobile',
    desc: 'Apps nativos e híbridos para iOS e Android, do MVP ao produto final escalável.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SaaS',
    desc: 'Plataformas Software as a Service multi-tenant com autenticação, billing e escalabilidade.',
    tags: ['Multi-tenant', 'Stripe', 'Cloud'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Software Desktop',
    desc: 'Aplicações desktop robustas para Windows, macOS e Linux com interfaces modernas.',
    tags: ['Electron', 'Tauri', 'C#'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'APIs & Back-end',
    desc: 'APIs RESTful e GraphQL documentadas, performáticas e preparadas para qualquer escala.',
    tags: ['REST', 'GraphQL', 'Node.js'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="6" r="2" fill="currentColor"/>
        <circle cx="15" cy="12" r="2" fill="currentColor"/>
        <circle cx="9" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Integrações & Legados',
    desc: 'Conectamos sistemas legados a plataformas modernas, garantindo continuidade e eficiência.',
    tags: ['ERP', 'Middleware', 'Migração'],
  },
];

export default function Servicos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className={`section ${styles.section}`} ref={sectionRef}>
      <div className="container">
        <div className={`section-header center reveal`}>
          <div className="section-eyebrow"><span className="badge">Serviços</span></div>
          <h2 className="section-title">
            O que podemos fazer<br />por <span className="hl">você</span>
          </h2>
          <p className="section-subtitle">
            Do conceito ao deploy — cobrimos toda a jornada de desenvolvimento digital
            com qualidade e metodologia ágil.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {services.map(s => (
            <div key={s.title} className={`reveal ${styles.card}`}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
