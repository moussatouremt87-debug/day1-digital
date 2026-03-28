'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const content = {
  fr: {
    title: 'Prêt à lancer votre projet?',
    subtitle: 'Commencez dès maintenant et obtenez votre site en 48h.',
    cta: 'Demander un devis gratuit',
  },
  en: {
    title: 'Ready to launch your project?',
    subtitle: 'Get started now and have your website in 48 hours.',
    cta: 'Get a free quote',
  },
};

export default function FooterCTA() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="card bg-gradient-to-r from-charcoal-800 to-charcoal-900 p-12 md:p-16 text-center border-lime-500">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">{t.title}</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">{t.subtitle}</p>
          <button className="btn-primary group inline-flex items-center gap-2">
            {t.cta}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
