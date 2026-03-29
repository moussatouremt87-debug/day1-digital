'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Zap,
  Globe,
  ShoppingCart,
  BarChart3,
  Palette,
  Wrench,
} from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Services',
    subtitle: 'Tout ce dont vous avez besoin pour réussir en ligne',
    services: [
      { icon: Zap, title: 'Landing Pages', description: 'Des pages de destination optimisées pour convertir vos visiteurs en clients.' },
      { icon: Globe, title: 'Sites Vitrine', description: 'Présentez votre entreprise avec un site web moderne et professionnel.' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'Boutiques en ligne performantes avec integration paiement Stripe.' },
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

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.2s ease-out' }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function Services() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/40 via-charcoal-900 to-charcoal-800/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <TiltCard className="card p-8 h-full group cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-lime-500/10 flex items-center justify-center mb-5 group-hover:bg-lime-500/20 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.2)] transition-all duration-500">
                    <Icon size={28} className="text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-lime-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
