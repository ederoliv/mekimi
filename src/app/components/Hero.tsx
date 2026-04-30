import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background decorations */}
      <div className={styles.bgDot} aria-hidden />
      <div className={styles.bgCircle1} aria-hidden />
      <div className={styles.bgCircle2} aria-hidden />

      <div className={`container ${styles.inner}`}>
        {/* Left — copy */}
        <div className={styles.copy}>
          <span className={`badge ${styles.badge}`}>Agência Digital</span>

          <h1 className={styles.heading}>
            Transformamos<br />
            ideias em{' '}
            <span className={styles.hl}>experiências<br />digitais</span>
          </h1>

          <p className={styles.sub}>
            Da estratégia ao código — criamos sites, apps e sistemas
            que geram resultados reais para o seu negócio.
          </p>

          <div className={styles.actions}>
            <a href="#contato" className="btn btn-primary btn-lg">
              Fale com a gente
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#cases" className="btn btn-outline btn-lg">Ver nossos cases</a>
          </div>

          {/* Stats bar */}
          <div className={styles.stats}>
            {[
              { value: '50+', label: 'Projetos entregues' },
              { value: '30+', label: 'Clientes ativos' },
              { value: '5+',  label: 'Anos no mercado' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.visualCard}>
            <div className={styles.visualOrb} />
            <div className={styles.grid}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={styles.gridCell}>
                  {[0,4,8].includes(i) && <span className={styles.gridDot} />}
                </div>
              ))}
            </div>
            {/* Floating chips */}
            <div className={`${styles.chip} ${styles.chip1}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Sites & Apps
            </div>
            <div className={`${styles.chip} ${styles.chip2}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Entrega ágil
            </div>
            <div className={`${styles.chip} ${styles.chip3}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Qualidade garantida
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
}
