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
        url: 'https://saintswings--moussatouremt87.replit.app/',
        screenshot: null,
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
        description: 'Premium brand surplus e-commerce',
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
        url: 'https://saintswings--moussatouremt87.replit.app/',
        screenshot: null,
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
        description: 'Interactive coaching for kids',
        location: 'France',
        accent: '#F59E0B',
        tech: 'React + Firebase',
        url: null,
        screenshot: null,
      },
      {
        name: 'Family Zen',
        description: 'Family support platform',
        location: 'UAE',
        accent: '#38BDF8',
        tech: 'Next.js + Supabase',
        url: 'https://1001familles.com/',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=500',
      },
    ],
  },
};

// Saint's Wings placeholder - dark/gold neon aesthetic matching real site
function SaintsWingsPlaceholder() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #1a1008 0%, #0d0a04 50%, #1a1008 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Neon glow background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      {/* Crown SVG */}
      <svg width="64" height="48" viewBox="0 0 64 48" fill="none" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 12px rgba(234,179,8,0.5))' }}>
        <path d="M4 40L12 16L24 28L32 8L40 28L52 16L60 40H4Z" fill="url(#crownGrad)" stroke="#EAB308" strokeWidth="2"/>
        <rect x="4" y="40" width="56" height="6" rx="2" fill="url(#crownGrad)"/>
        <defs>
          <linearGradient id="crownGrad" x1="32" y1="8" x2="32" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD34D"/>
            <stop offset="1" stopColor="#B45309"/>
          </linearGradient>
        </defs>
      </svg>
      {/* SW DXB text */}
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#EAB308',
        textShadow: '0 0 20px rgba(234,179,8,0.4), 0 0 40px rgba(234,179,8,0.2)',
        letterSpacing: '6px',
        marginBottom: '6px',
      }}>
        SW <span style={{ color: '#94A3B8', fontSize: '16px', fontWeight: 'normal' }}>DXB</span>
      </div>
      {/* Tagline */}
      <div style={{
        fontSize: '11px',
        color: '#A8860A',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontFamily: 'Georgia, serif',
      }}>
        Strictly Business
      </div>
      {/* Domain */}
      <div style={{
        marginTop: '16px',
        fontSize: '12px',
        color: '#92400E',
        fontFamily: 'monospace',
      }}>
        saintswings.dxb
      </div>
    </div>
  );
}

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

function ProjectCard({ project, index, visitText }) {
  const isPlaceholder = !project.screenshot;
  const isSaintsWings = project.name === "Saint's Wings";
  const isCitere = project.name === 'Citere';
  const displayUrl = project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : (isCitere ? 'citere-edutech.org' : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
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

        {/* Screenshot area */}
        <div className="relative" style={{ height: '220px', overflow: 'hidden' }}>
          {isPlaceholder ? (
            isSaintsWings ? <SaintsWingsPlaceholder /> : <CiterePlaceholder />
          ) : (
            <img
              src={project.screenshot}
              alt={project.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
            />
          )}

          {/* Hover overlay */}
          {project.url && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(15, 23, 42, 0.85)' }}
            >
              <span className="text-sm font-medium" style={{ color: '#BEF264' }}>
                {project.tech}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ background: '#84CC16', color: '#0F172A' }}
              >
                {visitText} <ExternalLink size={14} />
              </a>
            </div>
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
            <ProjectCard key={project.name} project={project} index={i} visitText={t.visit} />
          ))}
        </div>
      </div>
    </section>
  );
}
