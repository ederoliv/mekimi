'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'E-mail',
    value: 'comercial@mekimi.com.br',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Telefone (Comercial)',
    value: '+55 (54) 9 9657-6280',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Localização',
    value: 'Caxias do Sul, RS — Brasil',
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
    <section id="contato" className="relative bg-white overflow-hidden py-16 md:py-[100px]" ref={sectionRef}>
      <div className="hidden lg:block absolute top-0 right-0 w-[40%] h-full bg-gray-50 border-l border-gray-200 pointer-events-none" aria-hidden />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
          {/* Left */}
          <div className="reveal-left flex flex-col gap-6">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-[13px] font-semibold tracking-wide rounded-full border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Contato
              </span>
            </div>
            <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
              Vamos conversar<br />sobre o seu <span className="text-primary">projeto?</span>
            </h2>
            <p className="text-[16px] text-gray-600 leading-[1.75] max-w-full lg:max-w-[400px]">
              Estamos prontos para entender o seu desafio e propor a melhor solução
              tecnológica. Preencha o formulário ou fale diretamente conosco.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {contactInfo.map(c => (
                <div key={c.label} className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-[14px] bg-primary-light text-primary flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <span className="block text-[12px] text-gray-400 font-medium uppercase tracking-[0.5px] mb-0.5">{c.label}</span>
                    <strong className="block text-[15px] font-semibold text-black">{c.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="https://wa.me/5554996576280?text=Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Mekimi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-[15px] font-semibold rounded-full hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all whitespace-nowrap leading-none group">
                Chamar no WhatsApp
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 transition-transform duration-150 group-hover:scale-110">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 mt-1">
              <a href="#" aria-label="LinkedIn" className="w-[42px] h-[42px] rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-600 transition-colors duration-150 hover:border-primary hover:text-primary hover:bg-primary-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mekimi.br/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[42px] h-[42px] rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-600 transition-colors duration-150 hover:border-primary hover:text-primary hover:bg-primary-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal-right bg-white border border-gray-200 rounded-[32px] p-6 sm:p-10 shadow-lg">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-15 px-5 text-center animate-scale-in min-h-[350px]">
                <div className="w-[72px] h-[72px] rounded-full bg-primary-light text-primary flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-extrabold text-black">Mensagem enviada!</h3>
                <p className="text-[15px] text-gray-600">Entraremos em contato em breve. Obrigado pelo interesse!</p>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[13px] font-semibold text-gray-800">Nome *</label>
                    <input id="name" name="name" type="text" placeholder="Seu nome completo" value={form.name} onChange={handleChange} required className="px-4 py-3 border-[1.5px] border-gray-200 rounded-[8px] text-[15px] text-black bg-white transition-all duration-150 outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/12 placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[13px] font-semibold text-gray-800">E-mail *</label>
                    <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} required className="px-4 py-3 border-[1.5px] border-gray-200 rounded-[8px] text-[15px] text-black bg-white transition-all duration-150 outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/12 placeholder:text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[13px] font-semibold text-gray-800">Telefone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" value={form.phone} onChange={handleChange} className="px-4 py-3 border-[1.5px] border-gray-200 rounded-[8px] text-[15px] text-black bg-white transition-all duration-150 outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/12 placeholder:text-gray-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[13px] font-semibold text-gray-800">Mensagem *</label>
                  <textarea id="message" name="message" rows={5} placeholder="Conte-nos sobre o seu projeto..." value={form.message} onChange={handleChange} required className="px-4 py-3 border-[1.5px] border-gray-200 rounded-[8px] text-[15px] text-black bg-white transition-all duration-150 outline-none resize-none focus:border-primary focus:ring-[3px] focus:ring-primary/12 placeholder:text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white text-[16px] font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,178,169,0.35)] transition-all leading-none group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className="w-[18px] h-[18px] border-2 border-white/40 border-t-white rounded-full animate-spin" /> Enviando...</>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 transition-transform duration-150 group-hover:translate-x-[3px] group-disabled:translate-x-0">
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
