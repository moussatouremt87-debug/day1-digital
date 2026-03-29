'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

const content = {
  fr: {
    title: 'PrÃªt Ã  lancer votre projet ?',
    subtitle: 'Commencez dÃ¨s maintenant et obtenez votre site en 48h.',
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.06)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))',
            border: '1px solid rgba(132,204,22,0.2)',
          }}
        >
          {/* Decorative grid inside */}
          <div className="absolute inset-0 hero-grid opacity-40" />

          {/* Glow spots */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-lime-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-lime-500/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-lime-500/15 flex items-center justify-center mx-auto mb-8"
            >
              <Rocket size={32} className="text-lime-400" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              {t.title}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary group inline-flex items-center gap-2 text-base"
            >
              {t.cta}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
