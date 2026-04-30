'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Sobre nós',  href: '#sobre' },
  { label: 'Serviços',   href: '#servicos' },
  { label: 'Cases',      href: '#cases' },
  { label: 'Contato',    href: '#contato' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={() => handleNav('#')}>
          <span className={styles.logoMark}>M</span>
          <span className={styles.logoText}>mekimi</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.links} aria-label="Navegação principal">
          {navLinks.map(l => (
            <button
              key={l.href}
              className={`${styles.link} ${activeLink === l.href ? styles.active : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className={`btn btn-primary ${styles.cta}`}
          onClick={e => { e.preventDefault(); handleNav('#contato'); }}
        >
          Fale conosco
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map(l => (
          <button key={l.href} className={styles.mobileLink} onClick={() => handleNav(l.href)}>
            {l.label}
          </button>
        ))}
        <a
          href="#contato"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={e => { e.preventDefault(); handleNav('#contato'); }}
        >
          Fale conosco →
        </a>
      </div>
    </header>
  );
}
