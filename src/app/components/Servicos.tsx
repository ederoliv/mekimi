'use client';

import { useEffect, useRef } from 'react';

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
    <section id="servicos" className="py-16 md:py-[100px] bg-white" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-[13px] font-semibold tracking-wide rounded-full border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Serviços
            </span>
          </div>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
            O que podemos fazer<br />por <span className="text-primary">você</span>
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.75] max-w-[520px] mx-auto">
            Do conceito ao deploy — cobrimos toda a jornada de desenvolvimento digital
            com qualidade e metodologia ágil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
          {services.map(s => (
            <div key={s.title} className="reveal group bg-white border border-gray-200 rounded-[22px] p-7 sm:p-8 flex flex-col gap-3.5 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_28px_rgba(0,178,169,0.12)] hover:-translate-y-1">
              <div className="w-14 h-14 rounded-[14px] bg-primary-light text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="text-[16px] font-bold text-black leading-[1.3]">{s.title}</h3>
              <p className="text-[14px] text-gray-600 leading-[1.65] flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {s.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[12px] font-medium rounded-full transition-colors duration-150 group-hover:bg-primary-light group-hover:text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
