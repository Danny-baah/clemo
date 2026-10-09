import React, { useState, useEffect } from 'react';

/**
 * HeroNavbar - Premium B2B navigation bar for Clemmo.
 * Operates in standard document flow as a clean fixed header with backdrop blur on scroll.
 */
export default function HeroNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Startseite');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const kontaktEl = document.getElementById('kontakt');
      const qualitaetEl = document.getElementById('qualitaet');
      const prozessEl = document.getElementById('prozess');
      const productsEl = document.getElementById('produkte');
      const aboutEl = document.getElementById('ueber-uns');

      if (kontaktEl && scrollY >= kontaktEl.offsetTop - 260) {
        setActiveItem('Kontakt');
      } else if (qualitaetEl && scrollY >= qualitaetEl.offsetTop - 260) {
        setActiveItem('Qualität');
      } else if (prozessEl && scrollY >= prozessEl.offsetTop - 260) {
        setActiveItem('Unser Prozess');
      } else if (productsEl && scrollY >= productsEl.offsetTop - 260) {
        setActiveItem('Produkte');
      } else if (aboutEl && scrollY >= aboutEl.offsetTop - 260) {
        setActiveItem('Über uns');
      } else {
        setActiveItem('Startseite');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Startseite', href: '#' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Produkte', href: '#produkte' },
    { label: 'Unser Prozess', href: '#prozess' },
    { label: 'Qualität', href: '#qualitaet' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`hero-header ${scrolled ? 'hero-header--scrolled' : ''}`}>
      <nav className="hero-nav" aria-label="Hauptnavigation">
        {/* Brand Wordmark */}
        <div className="hero-brand">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="hero-brand-link"
            aria-label="Clemmo Startseite"
          >
            <span className="brand-wordmark">Clemmo</span>
            <sup className="brand-registered">®</sup>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hero-nav-links" role="list">
          {navLinks.map((link) => {
            const isActive = activeItem === link.label;
            return (
              <li key={link.label} className="hero-nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`hero-nav-link ${isActive ? 'hero-nav-link--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="hero-nav-actions">
          <a
            href="#kontakt"
            className="nav-cta-button"
            aria-label="Projekt anfragen"
          >
            <span>Projekt anfragen</span>
            <span className="nav-cta-arrow" aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menü öffnen"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-drawer-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-drawer-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-drawer-cta-item">
            <a
              href="#kontakt"
              className="nav-cta-button mobile-full-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Projekt anfragen</span>
              <span className="nav-cta-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
