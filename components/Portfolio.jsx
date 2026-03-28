'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Realisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      { name: 'FulFlo', description: 'E-commerce surplus marques premium', location: 'France', accent: '#22C55E', accentDark: '#166534', tech: 'Next.js + Stripe', type: 'ecommerce' },
      { name: "Saint's Wings", description: 'Restaurant wings & burgers', location: 'Dubai', accent: '#EAB308', accentDark: '#A16207', tech: 'React + Headless CMS', type: 'restaurant' },
      { name: 'A.SAP Consulting', description: 'Conseil & integration SAP ERP', location: 'International', accent: '#3B82F6', accentDark: '#1D4ED8', tech: 'Next.js + Tailwind', type: 'corporate' },
      { name: 'Citere', description: 'Coaching interactif pour enfants', location: 'France', accent: '#F59E0B', accentDark: '#D97706', tech: 'React + Firebase', type: 'education' },
      { name: 'Family Zen', description: 'Accompagnement familial', location: 'UAE', accent: '#38BDF8', accentDark: '#0284C7', tech: 'Next.js + Supabase', type: 'wellness' },
    ],
  },
  en: {
    title: 'Our Work',
    subtitle: 'Projects that turn visitors into customers',
    projects: [
      { name: 'FulFlo', description: 'Premium surplus brands e-commerce', location: 'France', accent: '#22C55E', accentDark: '#166534', tech: 'Next.js + Stripe', type: 'ecommerce' },
      { name: "Saint's Wings", description: 'Wings & burgers restaurant', location: 'Dubai', accent: '#EAB308', accentDark: '#A16207', tech: 'React + Headless CMS', type: 'restaurant' },
      { name: 'A.SAP Consulting', description: 'SAP ERP consulting & integration', location: 'International', accent: '#3B82F6', accentDark: '#1D4ED8', tech: 'Next.js + Tailwind', type: 'corporate' },
      { name: 'Citere', description: 'Interactive coaching for children', location: 'France', accent: '#F59E0B', accentDark: '#D97706', tech: 'React + Firebase', type: 'education' },
      { name: 'Family Zen', description: 'Family coaching & support', location: 'UAE', accent: '#38BDF8', accentDark: '#0284C7', tech: 'Next.js + Supabase', type: 'wellness' },
    ],
  },
};

/* Tall fake page layout that scrolls */
const FakePage = ({ project }) => {
  const c = project.accent;
  const cd = project.accentDark;

  return (
    <div className="w-full" style={{ height: '600px', background: '#0c1220' }}>
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: c + '20' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md" style={{ background: c }} />
          <div className="w-16 h-3 rounded" style={{ background: c + '60' }} />
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-2 rounded-full bg-slate-400/25" />
          <div className="w-10 h-2 rounded-full bg-slate-400/25" />
          <div className="w-10 h-2 rounded-full bg-slate-400/25" />
          <div className="w-14 h-6 rounded-md" style={{ background: c + '90' }} />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="px-5 py-8" style={{ background: `linear-gradient(180deg, ${c}12 0%, transparent 100%)` }}>
        <div className="w-24 h-5 rounded-full mb-4" style={{ background: c + '30', border: `1px solid ${c}40` }} />
        <div className="w-4/5 h-7 rounded mb-2" style={{ background: c + '50' }} />
        <div className="w-3/5 h-7 rounded mb-5" style={{ background: c + '35' }} />
        <div className="w-full h-2 rounded-full bg-slate-400/15 mb-1.5" />
        <div className="w-11/12 h-2 rounded-full bg-slate-400/15 mb-1.5" />
        <div className="w-4/5 h-2 rounded-full bg-slate-400/10 mb-6" />
        <div className="flex gap-3">
          <div className="w-28 h-9 rounded-lg" style={{ background: c }} />
          <div className="w-28 h-9 rounded-lg border" style={{ borderColor: c + '50' }} />
        </div>
      </div>

      {/* STATS BAR */}
      <div className="flex justify-around py-5 mx-5 border-y" style={{ borderColor: c + '15' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <div className="w-10 h-5 rounded mx-auto mb-1" style={{ background: c + '45' }} />
            <div className="w-14 h-2 rounded-full bg-slate-400/15 mx-auto" />
          </div>
        ))}
      </div>

      {/* FEATURES GRID */}
      <div className="px-5 py-6">
        <div className="w-32 h-5 rounded mb-1 mx-auto" style={{ background: c + '40' }} />
        <div className="w-48 h-2 rounded-full bg-slate-400/15 mb-5 mx-auto" />
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg p-3 border" style={{ borderColor: c + '20', background: c + '06' }}>
              <div className="w-8 h-8 rounded-lg mb-2" style={{ background: c + '35' }} />
              <div className="w-full h-2.5 rounded mb-1.5" style={{ background: c + '25' }} />
              <div className="w-full h-1.5 rounded-full bg-slate-400/12 mb-1" />
              <div className="w-3/4 h-1.5 rounded-full bg-slate-400/10" />
            </div>
          ))}
        </div>
      </div>

      {/* SHOWCASE */}
      <div className="px-5 py-5">
        <div className="w-full h-28 rounded-xl" style={{ background: `linear-gradient(135deg, ${c}25, ${cd}20)` }}>
          <div className="flex items-center justify-center h-full gap-4">
            <div className="w-20 h-16 rounded-lg" style={{ background: c + '30' }} />
            <div>
              <div className="w-28 h-4 rounded mb-2" style={{ background: c + '40' }} />
              <div className="w-36 h-2 rounded-full bg-slate-400/15 mb-1" />
              <div className="w-24 h-2 rounded-full bg-slate-400/12" />
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="px-5 py-5">
        <div className="w-28 h-4 rounded mb-4 mx-auto" style={{ background: c + '35' }} />
        <div className="flex gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-lg p-3 border" style={{ borderColor: c + '15', background: c + '05' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full" style={{ background: c + '30' }} />
                <div>
                  <div className="w-16 h-2 rounded mb-1" style={{ background: c + '30' }} />
                  <div className="w-10 h-1.5 rounded-full bg-slate-400/15" />
                </div>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-400/12 mb-1" />
              <div className="w-5/6 h-1.5 rounded-full bg-slate-400/10" />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-5 py-4 mt-2 border-t" style={{ borderColor: c + '15' }}>
        <div className="flex justify-between items-center">
          <div className="w-16 h-3 rounded" style={{ background: c + '30' }} />
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full" style={{ background: c + '25' }} />
            <div className="w-5 h-5 rounded-full" style={{ background: c + '25' }} />
            <div className="w-5 h-5 rounded-full" style={{ background: c + '25' }} />
          </div>
        </div>
      </div>
    </div>
  );
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
      <div className="bg-charcoal-900 border-b border-charcoal-800/50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <div className="ml-3 flex-1 bg-charcoal-800/60 rounded px-3 py-1 text-xs text-slate-400/60 truncate">
            {project.name.toLowerCase().replace(/['\s]/g, '')}.com
          </div>
        </div>
      </div>

      {/* Scrolling screenshot area */}
      <div className="relative h-48 overflow-hidden">
        {/* The tall fake page that scrolls up */}
        <div
          className="absolute left-0 right-0 top-0 animate-scroll-page group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${8 + index * 2}s` }}
        >
          <FakePage project={project} />
        </div>

        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-charcoal-900/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-charcoal-900/80 to-transparent z-10 pointer-events-none" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/70 transition-all duration-500 flex items-center justify-center z-20">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
            <div className="text-sm font-mono text-lime-400 mb-1">{project.tech}</div>
            <div className="text-xs text-slate-400">Scroll paused</div>
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
