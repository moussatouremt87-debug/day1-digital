'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Tarifs',
    subtitle: 'Des prix transparents et justes',
    tiers: [
      { name: 'Starter', price: '800€', description: 'Parfait pour démarrer', isPopular: false, features: ['Landing page one-page', 'Design sur mesure', 'Formulaire contact', 'Hébergement 1 an', 'Responsive design'] },
      { name: 'Business', price: '1200€', description: 'Notre offre la plus populaire', isPopular: true, features: ['Landing multi-sections', 'Intégrations CRM & email', 'SEO + Analytics', 'Domaine + hébergement 1 an', 'Support 24/7', 'Formulaires avancés'] },
      { name: 'Premium', price: '1800€', description: 'Pour les projets ambitieux', isPopular: false, features: ['Landing avancée + animations', 'Intégration paiement Stripe', 'A/B testing', 'Formation + 3 mois maintenance', 'Optimisation conversion', 'Statistiques détaillées'] },
    ],
  },
  en: {
    title: 'Our Pricing',
    subtitle: 'Transparent and fair pricing',
    tiers: [
      { name: 'Starter', price: '800€', description: 'Perfect to get started', isPopular: false, features: ['One-page landing', 'Custom design', 'Contact form', '1 year hosting', 'Responsive design'] },
      { name: 'Business', price: '1200€', description: 'Our most popular offer', isPopular: true, features: ['Multi-section landing', 'CRM & email integration', 'SEO + Analytics', 'Domain + 1 year hosting', '24/7 support', 'Advanced forms'] },
      { name: 'Premium', price: '1800€', description: 'For ambitious projects', isPopular: false, features: ['Advanced landing + animations', 'Stripe payment integration', 'A/B testing', 'Training + 3 months maintenance', 'Conversion optimization', 'Detailed analytics'] },
    ],
  },
};

export default function Pricing() {
  const { language } = useLanguage();
  const t = content[language];
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
          {t.tiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants} className={`card p-8 relative ${tier.isPopular ? 'md:scale-105 border-lime-500 shadow-2xl' : ''}`}>
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lime-500 text-charcoal-900 px-4 py-1 rounded-full text-sm font-semibold">{language === 'fr' ? 'POPULAIRE' : 'POPULAR'}</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-50 mb-2">{tier.name}</h3>
              <p className="text-slate-400 mb-6">{tier.description}</p>
              <div className="mb-8"><span className="text-5xl font-bold text-lime-400">{tier.price}</span></div>
              <button className={`w-full mb-8 ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}>{language === 'fr' ? 'Commencer' : 'Get started'}</button>
              <div className="space-y-4">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <Check size={20} className="text-lime-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
