'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Réalisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      { name: 'FulFlo', description: 'E-commerce surplus marques premium', location: 'France', accent: '#166534' },
      { name: "Saint's Wings", description: 'Restaurant wings', location: 'Dubai', accent: '#D4A017' },
      { name: 'A.SAP Consulting', description: 'Conseil & intégration SAP ERP', location: 'International', accent: '#2563EB' },
      { name: 'Citere', description: 'Coaching interactif pour enfants', location: 'France', accent: '#F59E0B' },
      { name: 'Family Zen', description: 'Accompagnement familial', location: 'UAE', accent: '#38BDF8' },
    ],
  },
  en: {
    title: 'Our Work',
    subtitle: 'Projects that turn visitors into customers',
    projects: [
      { name: 'FulFlo', description: 'Premium surplus brands e-commerce', location: 'France', accent: '#166534' },
      { name: "Saint's Wings", description: 'Wings restaurant', location: 'Dubai', accent: '#D4A017' },
      { name: 'A.SAP Consulting', description: 'SAP ERP consulting & integration', location: 'International', accent: '#2563EB' },
      { name: 'Citere', description: 'Interactive coaching for children', location: 'France', accent: '#F59E0B' },
      { name: 'Family Zen', description: 'Family coaching & support', location: 'UAE', accent: '#38BDF8' },
    ],
  },
};

const BrowserMockup = ({ project, index }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="card overflow-hidden">
    <div className="bg-charcoal-900 border-b border-charcoal-800 p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="bg-charcoal-800 rounded px-3 py-2 text-sm text-slate-400">
        www.{project.name.toLowerCase().replace(/\s+/g, '')}.com
      </div>
    </div>
    <div className="aspect-video bg-gradient-to-br p-8 flex flex-col justify-between" style={{ backgroundColor: project.accent + '15', borderLeft: `4px solid ${project.accent}` }}>
      <div>
        <div className="text-sm font-semibold text-slate-400 mb-2">{project.location}</div>
        <h3 className="text-2xl font-bold text-slate-50 mb-2">{project.name}</h3>
        <p className="text-slate-400">{project.description}</p>
      </div>
      <div className="flex items-center gap-2 text-slate-400 hover:text-slate-50 transition-colors">
        <Globe size={16} />
        <span className="text-sm">Visiter le site</span>
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <BrowserMockup key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
          }
