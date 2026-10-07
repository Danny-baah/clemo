import React from 'react';
import HeroNavbar from './HeroNavbar.jsx';
import './hero.css';

/**
 * Hero - Standard static hero section for Clemmo HP.
 * Replaces previous canvas / scroll-scrubbed hero with a clean, high-performance static composition.
 * Features:
 * - Brand palette: Deep green-black (#162623), Soft light (#F0F5F7), Primary teal (#295255), Secondary teal (#577877)
 * - Typographic hierarchy & editorial composition
 * - High-resolution architectural building-block model visual
 * - 3 credibility badges at bottom
 * - Normal document flow
 */
export default function Hero() {
  return (
    <section className="hero-static-root" aria-label="Hero Präsentation">
      {/* Top Navigation */}
      <HeroNavbar />

      {/* Main Hero Container */}
      <div className="hero-static-container">
        {/* Content Column (Left) */}
        <div className="hero-static-content">
          <div className="hero-static-eyebrow">
            <span className="hero-eyebrow-rule" aria-hidden="true" />
            <span className="hero-eyebrow-text">CUSTOM BUILDING SOLUTIONS</span>
          </div>

          <h1 className="hero-static-headline">
            Individuelle<br />
            <span className="hero-headline-highlight">Baustein-Sets</span><br />
            für Ihr Unternehmen.
          </h1>

          <p className="hero-static-subtext">
            Wir entwickeln und produzieren maßgeschneiderte Baustein-Sets für Marken,
            Unternehmen und besondere Projekte – präzise, kreativ und in höchster Qualität.
          </p>

          <div className="hero-static-actions">
            <a
              href="#kontakt"
              className="hero-btn-primary"
              id="hero-primary-cta"
            >
              <span>Jetzt anfragen</span>
              <span className="hero-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a
              href="#produkte"
              className="hero-btn-secondary"
              id="hero-secondary-cta"
            >
              <span>Unsere Produkte</span>
            </a>
          </div>

          {/* Bottom Credibility Badges */}
          <div className="hero-static-badges" role="list" aria-label="Unsere Kernvorteile">
            <div className="hero-badge-item" role="listitem">
              <div className="hero-badge-icon" aria-hidden="true">
                {/* Cube Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="hero-badge-text">
                <span className="hero-badge-title">INDIVIDUELLE</span>
                <span className="hero-badge-sub">LÖSUNGEN</span>
              </div>
            </div>

            <div className="hero-badge-item" role="listitem">
              <div className="hero-badge-icon" aria-hidden="true">
                {/* Gear Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div className="hero-badge-text">
                <span className="hero-badge-title">PRÄZISE</span>
                <span className="hero-badge-sub">FERTIGUNG</span>
              </div>
            </div>

            <div className="hero-badge-item" role="listitem">
              <div className="hero-badge-icon" aria-hidden="true">
                {/* Shield Check Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="hero-badge-text">
                <span className="hero-badge-title">HÖCHSTE</span>
                <span className="hero-badge-sub">QUALITÄT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Column (Right) */}
        <div className="hero-static-visual">
          <div className="hero-visual-frame">
            <img
              src="/hero/hero_model.jpg"
              alt="Architektonisches Clemmo Firmenmodell aus Bausteinen auf Konstruktionsplan"
              className="hero-static-image"
              loading="eager"
              fetchPriority="high"
            />
            {/* Subtle atmospheric vignette and highlight overlays */}
            <div className="hero-visual-vignette" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
