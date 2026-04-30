'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import styles from './Contato.module.css';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'E-mail',
    value: 'contato@mekimi.com.br',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Telefone',
    value: '+55 (11) 99999-9999',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Localização',
    value: 'São Paulo, SP — Brasil',
  },
];

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    /* Simulate async submit — replace with real endpoint */
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contato" className={`section ${styles.section}`} ref={sectionRef}>
      <div className={styles.bg} aria-hidden />
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={`reveal-left ${styles.info}`}>
            <div className="section-eyebrow"><span className="badge">Contato</span></div>
            <h2 className="section-title">
              Vamos conversar<br />sobre o seu <span className="hl">projeto?</span>
            </h2>
            <p className={styles.infoText}>
              Estamos prontos para entender o seu desafio e propor a melhor solução
              tecnológica. Preencha o formulário ou fale diretamente conosco.
            </p>

            <div className={styles.infoItems}>
              {contactInfo.map(c => (
                <div key={c.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{c.icon}</div>
                  <div>
                    <span className={styles.infoLabel}>{c.label}</span>
                    <strong className={styles.infoValue}>{c.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className={styles.social}>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`reveal-right ${styles.formWrap}`}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Mensagem enviada!</h3>
                <p>Entraremos em contato em breve. Obrigado pelo interesse!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Nome *</label>
                    <input id="name" name="name" type="text" placeholder="Seu nome completo" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">E-mail *</label>
                    <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Telefone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" value={form.phone} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea id="message" name="message" rows={5} placeholder="Conte-nos sobre o seu projeto..." value={form.message} onChange={handleChange} required />
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submit}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className={styles.spinner} /> Enviando...</>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
