'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Realisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    visit: 'Voir le site',
    projects: [
      {
        name: 'FulFlo',
        description: 'E-commerce surplus marques premium',
        location: 'France',
        accent: '#22C55E',
        tech: 'Next.js + Stripe',
        url: 'https://www.fulflo.app/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fulflo.app%2F?w=800&h=500',
      },
      {
        name: "Saint's Wings",
        description: 'Restaurant wings & burgers',
        location: 'Dubai',
        accent: '#EAB308',
        tech: 'React + Headless CMS',
        url: 'https://wingsaints.com/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwingsaints.com%2F?w=800&h=500',
      },
      {
        name: 'A.SAP Consulting',
        description: 'Conseil & integration SAP ERP',
        location: 'International',
        accent: '#3B82F6',
        tech: 'Next.js + Tailwind',
        url: 'https://sap-context--moussatouremt87.replit.app/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=500',
      },
      {
        name: 'Citere',
        description: 'Coaching interactif pour enfants',
        location: 'France',
        accent: '#F59E0B',
        tech: 'React + Firebase',
        url: null,
        screenshot: null,
      },
      {
        name: 'Family Zen',
        description: 'Accompagnement familial',
        location: 'UAE',
        accent: '#38BDF8',
        tech: 'Next.js + Supabase',
        url: 'https://1001familles.com/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=500',
      },
    ],
  },
  en: {
    title: 'Our Work',
    subtitle: 'Projects that turn visitors into customers',
    visit: 'Visit site',
    projects: [
      {
        name: 'FulFlo',
        description: 'Premium surplus brands e-commerce',
        location: 'France',
        accent: '#22C55E',
        tech: 'Next.js + Stripe',
        url: 'https://www.fulflo.app/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fulflo.app%2F?w=800&h=500',
      },
      {
        name: "Saint's Wings",
        description: 'Wings & burgers restaurant',
        location: 'Dubai',
        accent: '#EAB308',
        tech: 'React + Headless CMS',
        url: 'https://wingsaints.com/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwingsaints.com%2F?w=800&h=500',
      },
      {
        name: 'A.SAP Consulting',
        description: 'SAP ERP consulting & integration',
        location: 'International',
        accent: '#3B82F6',
        tech: 'Next.js + Tailwind',
        url: 'https://sap-context--moussatouremt87.replit.app/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=500',
      },
      {
        name: 'Citere',
        description: 'Interactive coaching for children',
        location: 'France',
        accent: '#F59E0B',
        tech: 'React + Firebase',
        url: null,
        screenshot: null,
      },
      {
        name: 'Family Zen',
        description: 'Family coaching & support',
        location: 'UAE',
        accent: '#38BDF8',
        tech: 'Next.js + Supabase',
        url: 'https://1001familles.com/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=500',
      },
    ],
  },
};

/* Citere placeholder — styled to match the actual site warm yellow/education theme */
const CiterePlaceholder = () => (
  <div
    className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #FFF8E7 0%, #FEF3C7 40%, #FDE68A 100%)',
    }}
  >
    {/* Decorative circles */}
    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-300/30" />
    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-orange-300/20" />

    {/* Headphone icon */}
    <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center mb-4 z-10">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    </div>

    <p
      className="text-2xl font-bold text-center z-10 px-4 leading-tight"
      style={{ color: '#92400E' }}
    >
      Et si votre enfant avait enfin un coach ?
    </p>
    <p className="text-sm mt-2 z-10" style={{ color: '#B45309' }}>
      citere-edutech.org
    </p>
  </div>
);

const ProjectCard = ({ project, index, visitLabel }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="card overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-charcoal-900 border-b border-charcoal-800/50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <div className="ml-3 flex-1 bg-charcoal-800/60 rounded px-3 py-1 text-xs text-slate-400/60 truncate">
            {project.url
              ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
              : 'citere-edutech.org'}
          </div>
        </div>
      </div>

      {/* Screenshot area */}
      <div className="relative h-52 overflow-hidden bg-charcoal-800">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} website screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:object-bottom"
            loading="lazy"
          />
        ) : (
          <CiterePlaceholder />
        )}

        {/* Hover overlay with visit link */}
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/70 transition-all duration-500 flex items-center justify-center z-20">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
            <div className="text-sm font-mono text-lime-400 mb-2">{project.tech}</div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-lime-400 transition-colors"
              >
                <ExternalLink size={14} />
                {visitLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-charcoal-800/30">
        <div>
          <h3 className="font-bold text-slate-50 group-hover:text-lime-400 transition-colors">
            {project.name}
          </h3>
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
            <ProjectCard
              key={index}
              project={project}
              index={index}
              visitLabel={t.visit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
