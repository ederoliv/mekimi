export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-[76px] overflow-hidden bg-white" id="hero">
      {/* Background shape matching exactly the example */}
      <div className="absolute -top-[2%] -right-[2%] w-[104%] h-[104%] z-0 pointer-events-none">
        <svg 
          className="w-full h-full text-primary" 
          viewBox="0 0 680 416" 
          fill="currentColor" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path opacity=".1" d="M319.883 7C301.96 44.568 306.667 82.98 334 122.238c41 58.887 138.227 21.23 183.906 98.434 30.453 51.469 82.151 79.28 155.094 83.433V7H319.883z" />
        </svg>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 relative z-10 text-center lg:text-left">
        {/* Left — copy */}
        <div className="flex flex-col gap-6 items-center lg:items-start">

          <h1 className="text-[clamp(38px,5.5vw,68px)] font-black leading-[1.05] tracking-tight text-black animate-fade-in-up [animation-delay:100ms]">
            Transformamos<br />
            ideias em{' '}
            <span className="text-primary">experiências<br />digitais</span>
          </h1>

          <p className="text-[18px] text-gray-600 leading-relaxed max-w-full lg:max-w-[480px] animate-fade-in-up [animation-delay:200ms]">
            Da estratégia ao código — criamos sites, apps e sistemas
            que geram resultados reais para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto animate-fade-in-up [animation-delay:300ms]">
            <a href="#contato" className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary text-white text-[16px] font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,178,169,0.35)] transition-all whitespace-nowrap leading-none group">
              Fale com a gente
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 transition-transform duration-150 group-hover:translate-x-[3px]">
                <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#cases" className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-transparent text-gray-800 text-[16px] font-semibold rounded-full border-[1.5px] border-gray-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all whitespace-nowrap leading-none">Ver nossos cases</a>
          </div>

          {/* Stats bar */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 pt-8 mt-2 border-t border-gray-200 w-full animate-fade-in-up [animation-delay:400ms]">
            {[
              { value: '50+', label: 'Projetos entregues' },
              { value: '30+', label: 'Clientes ativos' },
              { value: '5+',  label: 'Anos no mercado' },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-[3px]">
                <strong className="text-[28px] font-extrabold text-primary leading-none tracking-tight">{s.value}</strong>
                <span className="text-[13px] text-gray-400 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className="hidden lg:flex items-center justify-center animate-[fadeInRight_0.8s_0.2s_ease_both] relative z-10" aria-hidden>
          <img src="tech_hero.gif" alt="Mekimi Hero" width={800} height={800} className="w-full h-auto object-contain max-w-[650px]" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-[38px] border-2 border-gray-300 rounded-[12px] flex items-start justify-center pt-[5px]">
        <span className="w-1 h-2 bg-primary rounded-sm animate-float" />
      </div>
    </section>
  );
}
