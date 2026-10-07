import React from 'react';
import './process.css';

/**
 * 4 Process Steps matching the user-supplied reference image.
 */
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'IDEE & KONZEPT',
    desc: 'Wir besprechen Ihre Idee, Ziele und Anforderungen und entwickeln ein passendes Konzept.',
    image: '/process/step1.jpg',
    alt: 'Konzeptentwicklung und Skizzierung des Baustein-Sets',
  },
  {
    number: '02',
    title: 'DESIGN & ENTWICKLUNG',
    desc: 'Unsere Designer erstellen detaillierte Modelle und Konstruktionspläne – präzise und markengerecht.',
    image: '/process/step2.jpg',
    alt: 'Design und Modellierung des Baustein-Modells auf Konstruktionsplan',
  },
  {
    number: '03',
    title: 'PRODUKTION',
    desc: 'Wir koordinieren die Produktion mit ausgewählten Partnern und achten auf höchste Qualitätsstandards.',
    image: '/process/step3.jpg',
    alt: 'Präzise Fertigung der hochwertigen Bausteine',
  },
  {
    number: '04',
    title: 'LIEFERUNG & SUPPORT',
    desc: 'Ihr fertiges Set wird weltweit geliefert – zuverlässig, termingerecht und mit persönlicher Betreuung.',
    image: '/process/step4.jpg',
    alt: 'Fertig verpacktes Clemmo HP Set bereit zur Auslieferung',
  },
];

/**
 * Process - Standard static process section with clean 4-column layout
 * and integrated normal Process CTA block based on the reference design.
 * Operates entirely in natural document flow without pinning or scroll hijacking.
 */
export default function Process() {
  return (
    <section id="prozess" className="process-static-root" aria-label="Unser Prozess">
      {/* ------------------------------------------------------------------
          1. UPPER PROCESS AREA: 4 STEPS GRID
          ------------------------------------------------------------------ */}
      <div className="process-static-container">
        {/* Section Header Grid */}
        <header className="process-header-grid">
          <div className="process-header-left">
            <div className="process-eyebrow">
              <span className="process-eyebrow-rule" aria-hidden="true" />
              <span className="process-eyebrow-text">UNSER PROZESS</span>
            </div>

            <h2 className="process-headline">
              In 4 Schritten<br />
              <span className="process-headline-accent">zu Ihrem eigenen Set.</span>
            </h2>

            <p className="process-lead-text">
              Von der ersten Idee bis zur fertigen Lieferung – wir begleiten Sie durch den
              gesamten Prozess und sorgen für eine reibungslose und zuverlässige Umsetzung.
            </p>
          </div>

          <div className="process-header-right">
            <p className="process-note-text">
              Dank unserer Erfahrung in Produktentwicklung, Produktion und internationalem Import
              erhalten Sie eine maßgeschneiderte Lösung, die genau zu Ihrer Marke und Ihren Zielen passt.
            </p>
            <a href="#kontakt" className="process-outline-btn">
              <span>Mehr über unseren Prozess</span>
              <span className="process-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        {/* 4 Process Steps Layout */}
        <div className="process-steps-grid" role="list">
          {/* Subtle horizontal connecting line across step headers on desktop */}
          <div className="process-timeline-bar" aria-hidden="true" />

          {PROCESS_STEPS.map((step) => (
            <article key={step.number} className="process-step-col" role="listitem">
              {/* Header: Number Badge, Title, Connecting Line */}
              <div className="process-step-header">
                <span className="process-step-badge">{step.number}</span>
                <h3 className="process-step-title">{step.title}</h3>
              </div>

              {/* Step Description */}
              <p className="process-step-desc">{step.desc}</p>

              {/* Step Image */}
              <div className="process-step-visual">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="process-step-img"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------
          2. PROCESS CTA BANNER: "BEREIT FÜR IHR PROJEKT?"
          ------------------------------------------------------------------ */}
      <div className="process-cta-banner" aria-label="Bereit für Ihr Projekt CTA">
        <div className="process-cta-container">
          <div className="process-cta-grid">
            {/* Left Content */}
            <div className="process-cta-content">
              <div className="process-cta-eyebrow">
                <span className="cta-eyebrow-rule" aria-hidden="true" />
                <span className="cta-eyebrow-text">BEREIT FÜR IHR PROJEKT?</span>
              </div>

              <h2 className="process-cta-headline">
                Lassen Sie uns Ihre<br />
                Idee <span className="process-cta-highlight">Wirklichkeit machen.</span>
              </h2>

              <p className="process-cta-subtext">
                Ob erstes Konzept oder konkrete Vorstellung – wir beraten Sie persönlich und
                entwickeln die passende Lösung für Ihr Unternehmen.
              </p>

              <div className="process-cta-actions">
                <a href="#kontakt" className="process-cta-btn" id="process-cta-contact-btn">
                  <span>Projekt anfragen</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="process-cta-visual">
              <div className="process-cta-image-wrapper">
                <img
                  src="/process/process_cta_model.jpg"
                  alt="Maßgeschneidertes architektonisches Gebäudemodell von Clemmo HP auf Konstruktionsplänen"
                  className="process-cta-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
