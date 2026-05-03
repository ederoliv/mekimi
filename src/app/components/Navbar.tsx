'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início',     href: '#hero' },
  { label: 'Sobre nós',  href: '#sobre' },
  { label: 'Serviços',   href: '#servicos' },
  { label: 'Cases',      href: '#cases' },
  { label: 'Contato',    href: '#contato' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 w-[95%] max-w-[900px] ${scrolled ? 'top-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]' : 'top-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'} bg-white rounded-full border border-gray-100`}>
      <div className="px-5 py-2.5 md:py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0 cursor-pointer pl-1 md:pl-2" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}>
          <Image src="/logo.svg" alt="Mekimi" width={32} height={22} className="block shrink-0" />
          <span className="text-[18px] font-extrabold text-black tracking-tight">mekimi</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map(l => {
            const isContact = l.href === '#contato';
            const isActive = activeLink === l.href;
            
            if (isContact) {
              return (
                <button
                  key={l.href}
                  className="px-6 py-2.5 ml-2 bg-primary text-white border-none text-[14px] font-bold rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-dark shadow-md hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(0,178,169,0.25)]"
                  onClick={() => handleNav(l.href)}
                >
                  {l.label}
                </button>
              );
            }

            return (
              <button
                key={l.href}
                className={`px-5 py-2.5 bg-transparent border-none text-[14px] font-bold rounded-full cursor-pointer transition-all duration-300 ${isActive ? 'text-primary bg-primary-light/70' : 'text-[#2D3748] hover:text-primary hover:bg-primary-light/40'}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </button>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 pr-1"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm origin-center transition-transform duration-150 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm origin-center transition-transform duration-150 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm origin-center transition-transform duration-150 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-[110%] left-0 right-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 flex-col gap-1 transition-all duration-300 ${menuOpen ? 'flex opacity-100 translate-y-0 pointer-events-auto' : 'flex opacity-0 -translate-y-2.5 pointer-events-none'}`}>
        {navLinks.map(l => {
          const isContact = l.href === '#contato';
          const isActive = activeLink === l.href;
          
          if (isContact) {
            return (
              <button 
                key={l.href} 
                className="mt-2 px-4 py-3.5 bg-primary text-white border-none text-[15px] font-bold text-center cursor-pointer rounded-xl transition-colors duration-150 shadow-sm hover:bg-primary-dark hover:shadow-md" 
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </button>
            );
          }

          return (
            <button 
              key={l.href} 
              className={`px-4 py-3 border-none text-[16px] font-bold text-left cursor-pointer rounded-xl transition-colors duration-150 ${isActive ? 'bg-primary-light/70 text-primary' : 'bg-transparent text-[#2D3748] hover:bg-primary-light/40 hover:text-primary'}`} 
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
