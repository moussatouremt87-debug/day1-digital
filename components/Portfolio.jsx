'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Realisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      {
        name: 'FulFlo',
        description: 'E-commerce surplus marques premium',
        location: 'France',
        tech: 'Next.js + Stripe',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fulflo.app%2F?w=800&h=1500',
        iframe: null,
      },
      {
        name: "Saint's Wings",
        description: 'Restaurant wings & burgers',
        location: 'Dubai',
        tech: 'React + Headless CMS',
        screenshot: null,
        iframe: 'https://saintswings--moussatouremt87.replit.app/',
      },
      {
        name: 'A.SAP Consulting',
        description: 'Conseil & integration SAP ERP',
        location: 'International',
        tech: 'Next.js + Tailwind',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=1500',
        iframe: null,
      },
      {
        name: 'Citere',
        description: 'Coaching interactif pour enfants',
        location: 'France',
        tech: 'React + Firebase',
        screenshot: null,
        iframe: null,
      },
      {
        name: 'Family Zen',
        description: 'Accompagnement familial',
        location: 'UAE',
        tech: 'Next.js + Supabase',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=1500',
        iframe: null,
      },
    ],
  },
  en: {
    title: 'Our Work',
    subtitle: 'Projects that turn visitors into customers',
    projects: [
      {
        name: 'FulFlo',
        description: 'Premium brand surplus e-commerce',
        location: 'France',
        tech: 'Next.js + Stripe',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fulflo.app%2F?w=800&h=1500',
        iframe: null,
      },
      {
        name: "Saint's Wings",
        description: 'Wings & burgers restaurant',
        location: 'Dubai',
        tech: 'React + Headless CMS',
        screenshot: null,
        iframe: 'https://saintswings--moussatouremt87.replit.app/',
      },
      {
        name: 'A.SAP Consulting',
        description: 'SAP ERP consulting & integration',
        location: 'International',
        tech: 'Next.js + Tailwind',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=1500',
        iframe: null,
      },
      {
        name: 'Citere',
        description: 'Interactive coaching for kids',
        location: 'France',
        tech: 'React + Firebase',
        screenshot: null,
        iframe: null,
      },
      {
        name: 'Family Zen',
        description: 'Family support platform',
        location: 'UAE',
        tech: 'Next.js + Supabase',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=1500',
        iframe: null,
      },
    ],
  },
};
// Citere placeholder - warm yellow education theme
function CiterePlaceholder() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #FFF8E7 0%, #FEF3C7 50%, #FDE68A 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '12px' }}>
        <circle cx="24" cy="24" r="20" stroke="#D97706" strokeWidth="2" fill="none"/>
        <path d="M16 20C16 20 18 16 24 16C30 16 32 20 32 20" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 24C14 24 14 18 18 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 24C34 24 34 18 30 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="4" fill="#D97706" opacity="0.3"/>
        <path d="M20 32C20 32 22 34 24 34C26 34 28 32 28 32" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <div style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#92400E',
        textAlign: 'center',
        lineHeight: '1.4',
        fontFamily: 'Georgia, serif',
      }}>
        Et si votre enfant avait enfin un coach ?
      </div>
      <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: '#B45309',
        fontFamily: 'monospace',
      }}>
        citere-edutech.org
      </div>
    </div>
  );
}

// CSS keyframes for scroll preview animation
const scrollAnimStyles = `
@keyframes scrollPreview {
  0%, 10% { object-position: center top; }
  90%, 100% { object-position: center bottom; }
}
.portfolio-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.portfolio-card:hover .portfolio-screenshot {
  animation: scrollPreview 4s ease-in-out infinite alternate;
}
`;

function ProjectCard({ project, index }) {
  const isCitere = project.name === 'Citere';
  const hasIframe = !!project.iframe;
  const hasScreenshot = !!project.screenshot;
  const displayUrl = hasIframe
    ? project.iframe.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : hasScreenshot
    ? decodeURIComponent(project.screenshot.split('/v1/')[1]?.split('?')[0] || '').replace(/^https?:\/\//, '').replace(/\/$/, '')
    : isCitere ? 'citere-edutech.org' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="portfolio-card"
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(148, 163, 184, 0.1)' }}
      >
        {/* Browser chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-2"
          style={{ background: 'rgba(15, 23, 42, 0.8)', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#EAB308' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} />
          </div>
          <div
            className="flex-1 text-xs truncate px-3 py-1 rounded"
            style={{ color: '#64748B', background: 'rgba(15, 23, 42, 0.5)' }}
          >
            {displayUrl}
          </div>
        </div>

        {/* Screenshot / iframe / placeholder area */}
        <div className="relative" style={{ height: '220px', overflow: 'hidden' }}>
          {hasIframe ? (
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
              <iframe
                src={project.iframe}
                title={project.name}
                style={{
                  width: '1200px',
                  height: '800px',
                  border: 'none',
                  transform: 'scale(0.335)',
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : hasScreenshot ? (
            <img
              src={project.screenshot}
              alt={project.name}
              className="portfolio-screenshot"
              loading="lazy"
            />
          ) : (
            <CiterePlaceholder />
          )}
        </div>

        {/* Info bar */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-base" style={{ color: '#F1F5F9' }}>
              {project.name}
            </h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8' }}>
            <MapPin size={12} />
            {project.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <style dangerouslySetInnerHTML={{ __html: scrollAnimStyles }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
            {t.title}
          </h2>
          <p className="text-lg" style={{ color: '#94A3B8' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
