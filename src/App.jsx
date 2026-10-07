import React from 'react';
import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';
import Products from './components/products/Products.jsx';
import Process from './components/process/Process.jsx';
import Quality from './components/quality/Quality.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

/**
 * App - Root application component for the Clemmo HP Standard / Simple Version.
 * Conventional modern document flow:
 * 1. Static Hero ("Individuelle Baustein-Sets")
 * 2. About section ("Über uns")
 * 3. Products section ("Unsere Produkte")
 * 4. Process section ("Unser Prozess" 4-step layout + "Bereit für Ihr Projekt" CTA)
 * 5. Quality section ("Qualität")
 * 6. Contact section ("Kontakt")
 * 7. Footer (Upper CTA banner + 5-column navigation & brand footer)
 */
export default function App() {
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
      <Footer />
    </div>
  );
}
