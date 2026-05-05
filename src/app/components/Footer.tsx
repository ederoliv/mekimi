import Image from 'next/image';

const navLinks = [
  { label: 'Sobre nós',  href: '#sobre' },
  { label: 'Serviços',   href: '#servicos' },
  { label: 'Cases',      href: '#cases' },
  { label: 'Contato',    href: '#contato' },
];

const services = [
  'Sites Institucionais',
  'Landing Pages',
  'Hotsites',
  'Aplicativos Mobile',
  'SaaS',
  'Software Desktop',
  'APIs',
  'Integrações',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[72px]">
      <div className="flex flex-col max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-9 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="Mekimi" width={36} height={25} className="block shrink-0" />
              <span className="text-[20px] font-extrabold text-white tracking-[-0.5px]">mekimi</span>
            </div>
            <p className="text-[14px] text-white/55 leading-[1.65] max-w-[280px]">
              Transformando ideias em experiências digitais que geram resultados.
            </p>
            <div className="flex gap-2">
              <a href="#" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-white/55 transition-all hover:border-primary hover:text-primary hover:bg-primary/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mekimi.br/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-white/55 transition-all hover:border-primary hover:text-primary hover:bg-primary/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <strong className="text-[13px] font-bold text-white uppercase tracking-[0.8px]">Navegação</strong>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] text-white/55 transition-colors hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <strong className="text-[13px] font-bold text-white uppercase tracking-[0.8px]">Serviços</strong>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s}><a href="#servicos" className="text-[14px] text-white/55 transition-colors hover:text-primary">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <strong className="text-[13px] font-bold text-white uppercase tracking-[0.8px]">Pronto para começar?</strong>
            <p className="text-[14px] text-white/55 leading-[1.65]">
              Fale com nosso time e dê o primeiro passo rumo à sua solução digital.
            </p>
            <a href="#contato" className="mt-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-[15px] font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,178,169,0.35)] transition-all whitespace-nowrap leading-none w-fit">
              Fale conosco →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-6 text-center sm:text-left">
          <p className="text-[13px] text-white/35">
            © {new Date().getFullYear()} Mekimi Agência Digital. Todos os direitos reservados.
          </p>
          <p className="text-[13px] text-white/35">
            Feito com <span className="text-primary">♥</span> em Caxias do Sul - RS, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
