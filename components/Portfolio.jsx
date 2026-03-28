'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Realisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      { name: 'FulFlo', description: 'E-commerce surplus marques premium', location: 'France', accent: '#166534', tech: 'Next.js + Stripe' },
      { name: "Saint's Wings", description: 'Restaurant wings & burgers', location: 'Dubai', accent: '#D4A017', tech: 'React + Headless CMS' },
      { name: 'A.SAP Consulting', description: 'Conseil & integration SAP ERP', location: 'International', accent: '#2563EB', tech: 'Next.js + Tailwind' },
      { name: 'Citere', description: 'Coaching interactif pour enfants', location: 'France', accent: '#F59E0B', tech: 'React + Firebase' },
      { name: 'Family Zen', description: 'Accompagnement familial', location: 'UAE', accent: '#38BDF8', tech: 'Next.js + Supabase' },
    ],
  },
  en: {
    title: 'Our Work',
    subtitle: 'Projects that turn visitors into customers',
    projects: [
      { name: 'FulFlo', description: 'Premium surplus brands e-commerce', location: 'France', accent: '#166534', tech: 'Next.js + Stripe' },
      { name: "Saint's Wings", description: 'Wings & burgers restaurant', location: 'Dubai', accent: '#D4A017', tech: 'React + Headless CMS' },
      { name: 'A.SAP Consulting', description: 'SAP ERP consulting & integration', location: 'International', accent: '#2563EB', tech: 'Next.js + Tailwind' },
      { name: 'Citere', description: 'Interactive coaching for children', location: 'France', accent: '#F59E0B', tech: 'React + Firebase' },
      { name: 'Family Zen', description: 'Family coaching & support', location: 'UAE', accent: '#38BDF8', tech: 'Next.js + Supabase' },
    ],
  },
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="card overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-charcoal-900 border-b border-charcoal-800/50 px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <div className="ml-3 flex-1 bg-charcoal-800/60 rounded px-3 py-1 text-xs text-slate-400/60 truncate">
            {project.name.toLowerCase().replace(/['\s]/g, '')}.com
          </div>
        </div>
      </div>

      {/* Screenshot area - visual mockup */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)` }}
      >
        {/* Decorative elements simulating a website screenshot */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Fake nav */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-4 rounded" style={{ background: project.accent + '40' }} />
            <div className="flex gap-3">
              <div className="w-10 h-2 rounded bg-slate-400/10" />
              <div className="w-10 h-2 rounded bg-slate-400/10" />
              <div className="w-10 h-2 rounded bg-slate-400/10" />
            </div>
          </div>
          {/* Fake hero text */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-3/4 h-5 rounded mb-3" style={{ background: project.accent + '25' }} />
            <div className="w-1/2 h-5 rounded mb-5" style={{ background: project.accent + '20' }} />
            <div className="w-full h-2 rounded bg-slate-400/8 mb-2" />
            <div className="w-5/6 h-2 rounded bg-slate-400/8 mb-4" />
            <div className="w-24 h-7 rounded-md" style={{ background: project.accent + '35' }} />
          </div>
          {/* Fake cards row */}
          <div className="flex gap-3 mt-auto">
            <div className="flex-1 h-12 rounded-lg bg-slate-400/5 border border-slate-400/5" />
            <div className="flex-1 h-12 rounded-lg bg-slate-400/5 border border-slate-400/5" />
            <div className="flex-1 h-12 rounded-lg bg-slate-400/5 border border-slate-400/5" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/60 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
            <div className="text-sm font-mono text-lime-400 mb-1">{project.tech}</div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-charcoal-800/30">
        <div>
          <h3 className="font-bold text-slate-50 group-hover:text-lime-400 transition-colors">{project.name}</h3>
          <p className="text-sm text-slate-400">{project.description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400/60 text-xs flex-shrink-0 ml-3">
          <MapPin size={12} />
          {project.location}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
          {t.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
