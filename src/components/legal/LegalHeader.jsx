import React from 'react';

/**
 * LegalHeader - Minimal top bar for dedicated legal subpages (Impressum & Datenschutz).
 * Allows rapid navigation back to the main landing page and switching between legal sections.
 */
export default function LegalHeader({ currentPage = 'impressum', onNavigate }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (e, targetPage) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetPage);
    } else {
      window.location.hash = `#${targetPage}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="legal-header">
      <div className="legal-header-inner">
        {/* Brand Logo linking back to start */}
        <a
          href="#"
          onClick={handleHomeClick}
          className="legal-brand-link"
          aria-label="Zurück zur Clemmo Startseite"
        >
          <span className="legal-brand-wordmark">Clemmo</span>
          <sup className="legal-brand-registered">®</sup>
        </a>

        {/* Legal Switch & Back Button */}
        <div className="legal-nav-actions">
          <div className="legal-switch-links" role="navigation" aria-label="Rechtliche Navigation">
            <a
              href="#impressum"
              onClick={(e) => handlePageClick(e, 'impressum')}
              className={`legal-switch-link ${currentPage === 'impressum' ? 'legal-switch-link--active' : ''}`}
            >
              Impressum
            </a>
            <span className="legal-switch-dot" aria-hidden="true">·</span>
            <a
              href="#datenschutz"
              onClick={(e) => handlePageClick(e, 'datenschutz')}
              className={`legal-switch-link ${currentPage === 'datenschutz' ? 'legal-switch-link--active' : ''}`}
            >
              Datenschutz
            </a>
          </div>

          <a
            href="#"
            onClick={handleHomeClick}
            className="legal-back-btn"
            aria-label="Zurück zur Startseite"
          >
            <span className="legal-back-arrow" aria-hidden="true">←</span>
            <span>Zurück zur Startseite</span>
          </a>
        </div>
      </div>
    </header>
  );
}
