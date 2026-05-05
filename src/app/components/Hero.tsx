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
            <a href="https://wa.me/5554996576280?text=Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Mekimi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#25D366] text-white text-[16px] font-semibold rounded-full hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all whitespace-nowrap leading-none group">
              Fale com a gente
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 transition-transform duration-150 group-hover:scale-110">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
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
