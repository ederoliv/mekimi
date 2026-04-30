'use client';

import { useEffect, useRef } from 'react';
import styles from './SobreNos.module.css';

const stats = [
  { value: '5+',   label: 'Anos de mercado' },
  { value: '50+',  label: 'Projetos entregues' },
  { value: '30+',  label: 'Clientes satisfeitos' },
  { value: '8',    label: 'Tecnologias dominadas' },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tecnologia de ponta',
    desc: 'Utilizamos as melhores stacks do mercado para construir soluções robustas e escaláveis.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Entregas no prazo',
    desc: 'Metodologia ágil que garante transparência, qualidade e pontualidade em cada etapa.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Parceria de longo prazo',
    desc: 'Somos mais que uma agência — somos o time de tecnologia que o seu negócio precisa.',
  },
];

export default function SobreNos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className={`section ${styles.section}`} ref={sectionRef}>
      <div className="container">
        {/* Grid: copy + image */}
        <div className={styles.grid}>
          {/* Left — copy */}
          <div className={`reveal-left ${styles.copy}`}>
            <div className="section-eyebrow">
              <span className="badge">Sobre nós</span>
            </div>
            <h2 className="section-title">
              Uma agência focada<br />
              em <span className="hl">resultados reais</span>
            </h2>
            <div className="divider" />
            <p className={styles.text}>
              A <strong>Mekimi</strong> é uma agência digital especializada em transformar
              ideias em produtos digitais de alto impacto. Atuamos desde o design até a
              arquitetura de sistemas, entregando soluções que geram valor para o negócio.
            </p>
            <p className={styles.text}>
              Nossa equipe combina criatividade e rigor técnico para criar experiências
              que encantam usuários e impulsionam o crescimento das empresas que
              confiam no nosso trabalho.
            </p>

            {/* Values */}
            <div className={`${styles.values} stagger-children`}>
              {values.map(v => (
                <div key={v.title} className={`reveal ${styles.valueItem}`}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div className={`reveal-right ${styles.statsCol}`}>
            <div className={styles.statsCard}>
              <div className={`${styles.statsGrid} stagger-children`}>
                {stats.map(s => (
                  <div key={s.label} className={`reveal ${styles.statItem}`}>
                    <strong className={styles.statVal}>{s.value}</strong>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.statsCardBottom}>
                <div className={styles.avatars}>
                  {['E', 'M', 'A', 'R'].map((l, i) => (
                    <div key={i} className={styles.avatar}>{l}</div>
                  ))}
                </div>
                <p>Time especializado pronto para o seu projeto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
