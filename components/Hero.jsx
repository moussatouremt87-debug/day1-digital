'use client';

import { useLanguage } from './LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const content = {
  fr: {
    tag: 'Agence web nouvelle gÃ©nÃ©ration',
    h1_words: ['Votre', 'site', 'pro.', 'Des', 'le', 'jour', '1.'],
    subtitle:
      'Nous crÃ©ons des landing pages haute performance qui transforment vos visiteurs en clients. Rapidement. Sans compromis sur la qualitÃ©.',
    cta1: 'Demander un devis gratuit',
    cta2: 'Voir nos rÃ©alisations',
    counter1Label: 'Sites livrÃ©s',
    counter2Label: 'Temps moyen',
    counter3Label: 'Satisfaction',
  },
  en: {
    tag: 'Next-gen web agency',
    h1_words: ['Your', 'pro', 'website.', 'From', 'day', '1.'],
    subtitle:
      'We build high-performance landing pages that turn visitors into customers. Fast. No compromise on quality.',
    cta1: 'Get a free quote',
    cta2: 'See our work',
    counter1Label: 'Sites delivered',
    counter2Label: 'Avg. delivery',
    counter3Label: 'Satisfaction',
  },
};

const Counter = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-lime-400 counter-glow">
        {count}
        {suffix}
      </div>
      <div className="text-slate-400 mt-2 text-sm md:text-base group-hover:text-slate-50 transition-colors">
        {label}
      </div>
    </div>
  );
};

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-lime-500 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.15 + Math.random() * 0.2,
          animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(132,204,22,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(132,204,22,0.05)_0%,transparent_50%)]" />

      {/* Floating particles */}
      <Particles />

      {/* Large blurred lime circle deco */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-8 glass px-4 py-2 rounded-full"
        >
          <Sparkles size={16} className="text-lime-400" />
          <span className="text-lime-400 font-semibold text-sm md:text-base">
            {t.tag}
          </span>
        </motion.div>

        {/* H1 with stagger word animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 mb-8 leading-[1.05]">
          {t.h1_words.map((word, i) => (
            <motion.span
              key={`${language}-${i}`}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.3em] ${
                word === '1.' || word === 'pro.' || word === 'pro' || word === 'website.'
                  ? 'text-lime-400 text-glow'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary group text-base"
          >
            {t.cta1}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary text-base"
          >
            {t.cta2}
          </motion.button>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-charcoal-800/60"
        >
          <Counter target={24} label={t.counter1Label} suffix="+" />
          <Counter target={48} label={t.counter2Label} suffix="h" />
          <Counter target={98} label={t.counter3Label} suffix="%" />
        </motion.div>
      </div>
    </section>
  );
}
