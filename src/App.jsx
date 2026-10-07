import React, { useState, useEffect } from 'react';
import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';
import Products from './components/products/Products.jsx';
import Process from './components/process/Process.jsx';
import Quality from './components/quality/Quality.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Impressum from './components/legal/Impressum.jsx';
import Datenschutz from './components/legal/Datenschutz.jsx';

/**
 * App - Root application component for the Clemmo HP.
 * Manages view routing between:
 * - 'home' (Full interactive landing page)
 * - 'impressum' (Dedicated legal notice page)
 * - 'datenschutz' (Dedicated privacy policy page)
 */
export default function App() {
  const getInitialView = () => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (hash.includes('impressum') || path.endsWith('/impressum')) {
      return 'impressum';
    }
    if (hash.includes('datenschutz') || path.endsWith('/datenschutz')) {
      return 'datenschutz';
    }
    return 'home';
  };

  const [currentView, setCurrentView] = useState(getInitialView);

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.includes('impressum') || path.endsWith('/impressum')) {
        setCurrentView('impressum');
        window.scrollTo(0, 0);
      } else if (hash.includes('datenschutz') || path.endsWith('/datenschutz')) {
        setCurrentView('datenschutz');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigateTo = (view) => {
    if (view === 'impressum') {
      window.location.hash = '#impressum';
      setCurrentView('impressum');
      window.scrollTo(0, 0);
    } else if (view === 'datenschutz') {
      window.location.hash = '#datenschutz';
      setCurrentView('datenschutz');
      window.scrollTo(0, 0);
    } else {
      window.location.hash = '';
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dedicated Impressum Page
  if (currentView === 'impressum') {
    return <Impressum onNavigate={navigateTo} />;
  }

  // Dedicated Datenschutz Page
  if (currentView === 'datenschutz') {
    return <Datenschutz onNavigate={navigateTo} />;
  }

  // Default: Main Landing Page in natural flow
  return (
    <div className="clemmo-app">
      {/* 1. Static Hero */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Products Section */}
      <Products />

      {/* 4. Process Section (4 Steps + Process CTA) */}
      <Process />

      {/* 5. Quality Section */}
      <Quality />

      {/* 6. Contact Section */}
      <Contact />

      {/* 7. Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
