'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const content = {
  fr: {
    tag: 'Agence web nouvelle génération',
    h1: 'Votre site pro. Dès le jour 1.',
    subtitle: 'Nous créons des landing pages haute performance qui transforment vos visiteurs en clients. Rapidement. Sans compromis sur la qualité.',
    cta1: 'Demander un devis gratuit',
    cta2: 'Voir nos réalisations',
    counter1Label: 'Sites livrés',
    counter2Label: 'Temps moyen',
    counter3Label: 'Satisfaction',
    counter1Value: '24+',
    counter2Value: '48h',
    counter3Value: '98%',
  },
  en: {
    tag: 'Next-gen web agency',
    h1: 'Your pro website. From day 1.',
    subtitle: 'We build high-performance landing pages that turn visitors into customers. Fast. No compromise on quality.',
    cta1: 'Get a free quote',
    cta2: 'See our work',
    counter1Label: 'Sites delivered',
    counter2Label: 'Avg. delivery',
    counter3Label: 'Satisfaction',
    counter1Value: '24+',
    counter2Value: '48h',
    counter3Value: '98%',
  },
};

const Counter = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-lime-400">{count}{suffix}</div>
      <div className="text-slate-400 mt-2">{label}</div>
    </div>
  );
};

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 mb-8">
          <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
          <span className="text-lime-400 font-semibold text-sm md:text-base">{t.tag}</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight">
          {t.h1}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12">
          {t.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="btn-primary group">
            {t.cta1}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary">{t.cta2}</button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="grid grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-charcoal-800">
          <Counter target={24} label={t.counter1Label} suffix="+" />
          <Counter target={48} label={t.counter2Label} suffix="h" />
          <Counter target={98} label={t.counter3Label} suffix="%" />
        </motion.div>
      </div>
    </section>
  );
}
