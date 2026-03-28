'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Zap, Globe, ShoppingCart, BarChart3, Palette, Wrench } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Services',
    subtitle: 'Tout ce dont vous avez besoin pour réussir en ligne',
    services: [
      { icon: Zap, title: 'Landing Pages', description: 'Des pages de destination optimisées pour convertir vos visiteurs en clients.' },
      { icon: Globe, title: 'Sites Vitrine', description: 'Présentez votre entreprise avec un site web moderne et professionnel.' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'Boutiques en ligne performantes avec intégration paiement Stripe.' },
      { icon: BarChart3, title: 'SEO & Analytics', description: 'Optimisation pour les moteurs de recherche et suivi de performance.' },
      { icon: Palette, title: 'Design UI/UX', description: 'Designs personnalisés et expériences utilisateur exceptionnelles.' },
      { icon: Wrench, title: 'Maintenance', description: 'Support technique 24/7 et mises à jour régulières de votre site.' },
    ],
  },
  en: {
    title: 'Our Services',
    subtitle: 'Everything you need to succeed online',
    services: [
      { icon: Zap, title: 'Landing Pages', description: 'Optimized landing pages designed to convert visitors into customers.' },
      { icon: Globe, title: 'Showcase Websites', description: 'Present your business with a modern and professional website.' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'High-performance online stores with Stripe payment integration.' },
      { icon: BarChart3, title: 'SEO & Analytics', description: 'Search engine optimization and performance tracking.' },
      { icon: Palette, title: 'UI/UX Design', description: 'Custom designs and exceptional user experiences.' },
      { icon: Wrench, title: 'Maintenance', description: '24/7 technical support and regular website updates.' },
    ],
  },
};

export default function Services() {
  const { language } = useLanguage();
  const t = content[language];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="card p-8">
                <Icon size={40} className="text-lime-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-50 mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
            }
