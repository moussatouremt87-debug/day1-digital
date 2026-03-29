'use client';

import { useLanguage } from './LanguageContext';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const content = {
  fr: {
    description: 'Agence web nouvelle gÃ©nÃ©ration. Landing pages haute performance en 48h.',
    services: 'Services',
    company: 'Entreprise',
    legal: 'LÃ©gal',
    contact: 'Contact',
    about: 'Ã Propos',
    privacy: 'ConfidentialitÃ©',
    terms: 'CGV',
    email: 'contact@day1.digital',
    year: new Date().getFullYear(),
  },
  en: {
    description: 'Next-gen web agency. High-performance landing pages in 48 hours.',
    services: 'Services',
    company: 'Company',
    legal: 'Legal',
    contact: 'Contact',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    email: 'contact@day1.digital',
    year: new Date().getFullYear(),
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center font-bold text-charcoal-900">
                D1
              </div>
              <span className="text-xl font-bold text-slate-50">Day1</span>
            </div>
            <p className="text-slate-400 text-sm">{t.description}</p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-slate-400 hover:text-lime-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-lime-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@day1.digital"
                className="text-slate-400 hover:text-lime-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">{t.services}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {language === 'fr' ? 'Landing Pages' : 'Landing Pages'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {language === 'fr' ? 'Sites Vitrine' : 'Showcase Sites'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {language === 'fr' ? 'E-commerce' : 'E-commerce'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  SEO & Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">{t.company}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {language === 'fr' ? 'Nos RÃ©alisations' : 'Our Work'}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {language === 'fr' ? 'Questions FrÃ©quentes' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">{t.contact}</h4>
            <a
              href="mailto:contact@day1.digital"
              className="text-slate-400 hover:text-lime-400 transition-colors text-sm block mb-6"
            >
              {t.email}
            </a>
            <h4 className="font-semibold text-slate-50 mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {t.privacy}
                </a>
              </li>
              <li>
                <a
                  href="/cgv"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            {language === 'fr'
              ? `Â© ${t.year} Day1.digital. Tous droits rÃ©servÃ©s.`
              : `Â© ${t.year} Day1.digital. All rights reserved.`}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
            >
              {t.privacy}
            </a>
            <a
              href="/cgv"
              className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
