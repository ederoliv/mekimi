'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Cases.module.css';

const cases = [
  {
    tag: 'E-commerce',
    title: 'Plataforma de vendas para rede varejista',
    desc: 'Desenvolvemos um e-commerce completo com gestão de estoque, painel administrativo e integração com múltiplos gateways de pagamento. Resultado: +180% nas vendas online no primeiro trimestre.',
    services: ['Site Institucional', 'Integração ERP', 'API'],
    result: '+180% em vendas',
    color: '#e0f5f4',
  },
  {
    tag: 'Mobile',
    title: 'App de delivery com rastreamento em tempo real',
    desc: 'Aplicativo híbrido para iOS e Android com rastreamento ao vivo, sistema de avaliações, push notifications e painel de gestão para restaurantes parceiros.',
    services: ['App Mobile', 'API REST', 'Back-end'],
    result: '12k downloads em 30 dias',
    color: '#f0fffe',
  },
  {
    tag: 'SaaS',
    title: 'Plataforma SaaS para gestão de obras',
    desc: 'Sistema multi-tenant para construtoras gerenciarem projetos, cronogramas, orçamentos e equipes em tempo real. Integração com sistemas legados via API.',
    services: ['SaaS', 'Integrações', 'Dashboard'],
    result: '40+ construtoras na plataforma',
    color: '#e8fffe',
  },
  {
    tag: 'Integração',
    title: 'Migração e modernização de sistema legado',
    desc: 'Migramos um sistema de 15 anos de idade para arquitetura moderna de microsserviços, sem interrupção das operações. Redução de 60% no custo de manutenção.',
    services: ['Software Desktop', 'APIs', 'Legado'],
    result: '-60% custo de manutenção',
    color: '#f5fffd',
  },
];

export default function Cases() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el =>
              el.classList.add('visible')
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = cases[activeIdx];

  return (
    <section id="cases" className={`section ${styles.section}`} ref={sectionRef}>
      <div className="container">
        <div className={`section-header center reveal`}>
          <div className="section-eyebrow"><span className="badge">Cases</span></div>
          <h2 className="section-title">
            Projetos que geram<br /><span className="hl">resultados reais</span>
          </h2>
          <p className="section-subtitle">
            Confira alguns dos projetos que desenvolvemos para clientes que confiam
            na Mekimi para transformar seus negócios.
          </p>
        </div>

        <div className={styles.showcase}>
          {/* Tabs */}
          <div className={`reveal ${styles.tabs}`}>
            {cases.map((c, i) => (
              <button
                key={i}
                className={`${styles.tab} ${activeIdx === i ? styles.tabActive : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className={styles.tabTag}>{c.tag}</span>
                <span className={styles.tabTitle}>{c.title}</span>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div
            className={`reveal-right ${styles.detail}`}
            key={activeIdx}
          >
            <div className={styles.detailCard} style={{ '--case-color': active.color } as React.CSSProperties}>
              <div className={styles.detailBg} />
              <div className={styles.detailContent}>
                <span className={styles.detailTag}>{active.tag}</span>
                <h3 className={styles.detailTitle}>{active.title}</h3>
                <p className={styles.detailDesc}>{active.desc}</p>
                <div className={styles.detailServices}>
                  {active.services.map(s => (
                    <span key={s} className={styles.detailService}>{s}</span>
                  ))}
                </div>
                <div className={styles.resultBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {active.result}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`reveal ${styles.cta}`}>
          <p>Tem um projeto em mente?</p>
          <a href="#contato" className="btn btn-primary">
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
