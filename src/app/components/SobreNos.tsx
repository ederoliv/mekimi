'use client';

import { useEffect, useRef } from 'react';

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
    <section id="sobre" className="py-16 md:py-[100px] bg-gray-50" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Grid: copy + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div className="reveal-left flex flex-col gap-5">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-[13px] font-semibold tracking-wide rounded-full border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Sobre nós
              </span>
            </div>
            <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
              Uma agência focada<br />
              em <span className="text-primary">resultados reais</span>
            </h2>
            <div className="w-11 h-[3px] bg-primary rounded-full my-4.5" />
            <p className="text-[16px] text-gray-600 leading-[1.8]">
              A <strong className="text-black font-bold">Mekimi</strong> é uma agência digital especializada em transformar
              ideias em produtos digitais de alto impacto. Atuamos desde o design até a
              arquitetura de sistemas, entregando soluções que geram valor para o negócio.
            </p>
            <p className="text-[16px] text-gray-600 leading-[1.8]">
              Nossa equipe combina criatividade e rigor técnico para criar experiências
              que encantam usuários e impulsionam o crescimento das empresas que
              confiam no nosso trabalho.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5 mt-2 stagger-children">
              {values.map(v => (
                <div key={v.title} className="reveal flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-[14px] bg-primary-light text-primary flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <strong className="block text-[15px] font-bold text-black mb-1">{v.title}</strong>
                    <p className="text-[14px] text-gray-600 leading-[1.6]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div className="reveal-right flex items-center">
            <div className="w-full bg-white border border-gray-200 rounded-[32px] p-6 sm:p-10 shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-[2px] bg-gray-200 rounded-[14px] overflow-hidden mb-8 stagger-children">
                {stats.map(s => (
                  <div key={s.label} className="reveal bg-white p-6 sm:px-6 sm:py-7 flex flex-col gap-1.5 [&:first-child]:rounded-tl-[14px] [&:nth-child(2)]:rounded-tr-[14px] [&:nth-child(3)]:rounded-bl-[14px] [&:last-child]:rounded-br-[14px]">
                    <strong className="text-[32px] sm:text-[40px] font-black text-primary tracking-[-2px] leading-none">{s.value}</strong>
                    <span className="text-[13px] text-gray-400 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {['E', 'M', 'A', 'R'].map((l, i) => (
                    <div key={i} className="w-[38px] h-[38px] rounded-full bg-primary text-white text-[13px] font-bold flex items-center justify-center border-2 border-white -ml-2 first:ml-0">{l}</div>
                  ))}
                </div>
                <p className="text-[14px] text-gray-600 leading-[1.4]">Time especializado pronto para o seu projeto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
