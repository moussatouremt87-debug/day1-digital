'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

const content = {
  fr: {
    title: 'Prêt Ã  lancer votre projet ?',
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
