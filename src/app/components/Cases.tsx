'use client';

import { useEffect, useRef, useState } from 'react';

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
    <section id="cases" className="py-16 md:py-[100px] bg-gray-50" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-[13px] font-semibold tracking-wide rounded-full border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Cases
            </span>
          </div>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
            Projetos que geram<br /><span className="text-primary">resultados reais</span>
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.75] max-w-[520px] mx-auto">
            Confira alguns dos projetos que desenvolvemos para clientes que confiam
            na Mekimi para transformar seus negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start mb-16">
          {/* Tabs */}
          <div className="reveal flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0">
            {cases.map((c, i) => (
              <button
                key={i}
                className={`flex flex-col gap-1 px-5 py-4.5 min-w-[200px] lg:min-w-0 bg-white border rounded-[14px] cursor-pointer text-left transition-all ${activeIdx === i ? 'border-primary bg-primary-light shadow-[0_2px_16px_rgba(0,178,169,0.15)]' : 'border-gray-200 hover:border-primary/40 hover:shadow-[0_2px_12px_rgba(0,178,169,0.1)]'}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-primary">{c.tag}</span>
                <span className="text-[14px] font-semibold text-black leading-[1.4]">{c.title}</span>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div
            className="reveal-right h-full"
            key={activeIdx}
          >
            <div className="relative rounded-[32px] overflow-hidden border border-gray-200 shadow-lg animate-scale-in">
              <div className="absolute inset-0 opacity-50" style={{ backgroundColor: active.color }} />
              <div className="relative p-6 sm:p-12 flex flex-col gap-5">
                <span className="inline-block px-3 py-1 bg-primary text-white text-[12px] font-bold rounded-full tracking-[0.5px] uppercase w-fit">{active.tag}</span>
                <h3 className="text-[clamp(22px,3vw,32px)] font-extrabold text-black tracking-[-0.8px] leading-[1.2]">{active.title}</h3>
                <p className="text-[16px] text-gray-600 leading-[1.75] max-w-[560px]">{active.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {active.services.map(s => (
                    <span key={s} className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] font-medium text-gray-800">{s}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-[14px] text-[15px] font-bold w-fit mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {active.result}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-5 px-6 sm:px-10 py-8 bg-white border border-gray-200 rounded-[32px] text-center sm:text-left">
          <p className="text-[18px] font-semibold text-black">Tem um projeto em mente?</p>
          <a href="#contato" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-[15px] font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,178,169,0.35)] transition-all whitespace-nowrap leading-none group">
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-150 group-hover:translate-x-[3px]">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
