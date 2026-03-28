'use client';

import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const content = {
  fr: {
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Tarifs',
    faq: 'FAQ',
    cta: 'Demander un devis',
  },
  en: {
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    faq: 'FAQ',
    cta: 'Get a quote',
  },
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center font-bold text-charcoal-900 text-lg">
              D1
            </div>
            <span className="text-xl font-bold text-slate-50 group-hover:text-lime-400 transition-colors">
              Day1
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-50 hover:text-lime-400 transition-colors">{t.services}</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-slate-50 hover:text-lime-400 transition-colors">{t.portfolio}</button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-50 hover:text-lime-400 transition-colors">{t.pricing}</button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-50 hover:text-lime-400 transition-colors">{t.faq}</button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="px-4 py-2 rounded-lg border border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-charcoal-900 transition-colors text-sm font-semibold">
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button className="hidden md:block btn-primary">{t.cta}</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-50">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-charcoal-800">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-50 hover:text-lime-400 hover:bg-charcoal-800 transition-colors">{t.services}</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 text-slate-50 hover:text-lime-400 hover:bg-charcoal-800 transition-colors">{t.portfolio}</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-slate-50 hover:text-lime-400 hover:bg-charcoal-800 transition-colors">{t.pricing}</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-slate-50 hover:text-lime-400 hover:bg-charcoal-800 transition-colors">{t.faq}</button>
            <div className="px-4 py-2">
              <button className="btn-primary w-full">{t.cta}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
              }
