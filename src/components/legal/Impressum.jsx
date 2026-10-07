import React, { useEffect } from 'react';
import LegalHeader from './LegalHeader.jsx';
import Footer from '../footer/Footer.jsx';
import './legal.css';

/**
 * Impressum - Dedicated legal notice page for Clemmo.
 * Complete data provided according to § 5 DDG, § 18 Abs. 2 MStV, Handelsregister Mannheim.
 */
export default function Impressum({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Impressum | Clemmo';
    return () => {
      document.title = 'Clemmo | Individuelle Baustein-Sets für Ihr Unternehmen';
    };
  }, []);

  return (
    <div className="legal-page-root">
      <LegalHeader currentPage="impressum" onNavigate={onNavigate} />

      <main className="legal-main-container">
        {/* Breadcrumb Navigation */}
        <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              else window.location.hash = '';
            }}
            className="legal-breadcrumb-link"
          >
            Startseite
          </a>
          <span aria-hidden="true">/</span>
          <span className="legal-breadcrumb-current">Impressum</span>
        </nav>

        {/* Hero Header */}
        <header className="legal-hero-header">
          <div className="legal-eyebrow">
            <span className="legal-eyebrow-rule" aria-hidden="true" />
            <span className="legal-eyebrow-text">RECHTLICHE INFORMATIONEN</span>
          </div>
          <h1 className="legal-title">Impressum</h1>
          <p className="legal-subtitle">Clemmo – eine Marke der prodestek GmbH</p>
        </header>

        {/* Legal Body Sections */}
        <div className="legal-content-body">
          {/* Card 1: Key Company Data */}
          <section className="legal-card" aria-labelledby="angaben-gem-5-ddg">
            <h2 id="angaben-gem-5-ddg" className="legal-section-heading">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="legal-info-grid">
              <div className="legal-info-item">
                <span className="legal-info-label">Unternehmen</span>
                <div className="legal-info-value legal-info-lines">
                  <strong>prodestek GmbH</strong>
                  <span>Marke: Clemmo</span>
                  <span>Rosenhofweg 10b</span>
                  <span>76149 Karlsruhe</span>
                  <span>Deutschland</span>
                </div>
              </div>

              <div className="legal-info-item">
                <span className="legal-info-label">Vertretungsberechtigt</span>
                <div className="legal-info-value">
                  <strong>Geschäftsführer:</strong>
                  <div>Holger Zöhrens</div>
                </div>
              </div>

              <div className="legal-info-item">
                <span className="legal-info-label">Kontakt</span>
                <div className="legal-info-value legal-info-lines">
                  <span><strong>Telefon:</strong> <a href="tel:+4972194300077" className="legal-link">+49 721 94300077</a></span>
                  <span><strong>Fax:</strong> +49 721 93796476</span>
                  <span><strong>E-Mail:</strong> <a href="mailto:info@clemmo.de" className="legal-link">info@clemmo.de</a></span>
                </div>
              </div>

              <div className="legal-info-item">
                <span className="legal-info-label">Registereintrag</span>
                <div className="legal-info-value legal-info-lines">
                  <span>Eintragung im Handelsregister</span>
                  <span><strong>Registergericht:</strong> Amtsgericht Mannheim</span>
                  <span><strong>Registernummer:</strong> HRB 737323</span>
                </div>
              </div>

              <div className="legal-info-item">
                <span className="legal-info-label">Umsatzsteuer-ID</span>
                <div className="legal-info-value">
                  <span>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</span>
                  <div style={{ marginTop: '0.25rem' }}><strong>DE330023547</strong></div>
                </div>
              </div>

              <div className="legal-info-item">
                <span className="legal-info-label">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</span>
                <div className="legal-info-value legal-info-lines">
                  <strong>Holger Zöhrens</strong>
                  <span>Rosenhofweg 10b</span>
                  <span>76149 Karlsruhe</span>
                </div>
              </div>
            </div>
          </section>

          {/* Card 2: Haftung für Inhalte */}
          <section className="legal-card" aria-labelledby="haftung-inhalte">
            <h2 id="haftung-inhalte" className="legal-section-heading">
              Haftung für Inhalte
            </h2>
            <p className="legal-paragraph">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p className="legal-paragraph">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.
            </p>
          </section>

          {/* Card 3: Haftung für Links */}
          <section className="legal-card" aria-labelledby="haftung-links">
            <h2 id="haftung-links" className="legal-section-heading">
              Haftung für Links
            </h2>
            <p className="legal-paragraph">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der verlinkten Seiten.
            </p>
            <p className="legal-paragraph">
              Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
            </p>
          </section>

          {/* Card 4: Urheberrecht */}
          <section className="legal-card" aria-labelledby="urheberrecht">
            <h2 id="urheberrecht" className="legal-section-heading">
              Urheberrecht
            </h2>
            <p className="legal-paragraph">
              Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der prodestek GmbH.
            </p>
          </section>

          {/* Card 5: Hinweis zu Kontaktdaten */}
          <section className="legal-card" aria-labelledby="hinweis-kontaktdaten">
            <h2 id="hinweis-kontaktdaten" className="legal-section-heading">
              Hinweis zu Kontaktdaten
            </h2>
            <p className="legal-paragraph">
              Der Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Rechtliche Schritte gegen Versender von Spam-Mails bleiben ausdrücklich vorbehalten.
            </p>
          </section>
        </div>
      </main>

      {/* Footer with credit */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
