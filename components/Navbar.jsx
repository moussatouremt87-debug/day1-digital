'use client';

import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [scrolled, setScrolled] = useState(false);
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load Tally embed script
    const existing = document.querySelector('script[src*="tally.so"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav-scrolled' : 'glass-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center font-bold text-charcoal-900 text-lg group-hover:shadow-[0_0_20px_rgba(132,204,22,0.5)] transition-shadow duration-300">
              D1
            </div>
            <span className="text-xl font-bold text-slate-50 group-hover:text-lime-400 transition-colors">
              Day1
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['services', 'portfolio', 'pricing', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative px-4 py-2 text-slate-50 hover:text-lime-400 transition-colors group"
              >
                {t[item]}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-lime-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-3.5 py-1.5 rounded-lg border border-lime-500/30 text-lime-400 hover:bg-lime-500/10 hover:border-lime-500 transition-all text-sm font-semibold"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-tally-open="EkLGQr"
              data-tally-layout="modal"
              className="hidden md:block btn-primary text-sm"
            >
              {t.cta}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-50 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-charcoal-800/50"
            >
              <div className="py-4 space-y-1">
                {['services', 'portfolio', 'pricing', 'faq'].map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-3 text-slate-50 hover:text-lime-400 hover:bg-charcoal-800/50 transition-all rounded-lg"
                  >
                    {t[item]}
                  </motion.button>
                ))}
                <div className="px-4 pt-2">
                  <button
                    data-tally-open="EkLGQr"
                    data-tally-layout="modal"
                    className="btn-primary w-full"
                  >
                    {t.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
