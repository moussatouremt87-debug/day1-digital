'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Réalisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      {
        name: 'FulFlo',
        description: 'E-commerce surplus marques premium',
        location: 'France',
        tech: 'Next.js + Stripe',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fulflo.app%2F?w=800&h=1500',
      },
      {
        name: "Saint's Wings",
        description: 'Restaurant wings & burgers',
        location: 'Dubai',
        tech: 'React + Headless CMS',
        screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fsaintswings--moussatouremt87.replit.app%2F&screenshot=true&meta=false&embed=screenshot.url',
      },
      {
        name: 'A.SAP Consulting',
        description: 'Conseil & intégration SAP ERP',
        location: 'International',
        tech: 'Next.js + Tailwind',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=1500',
      },
      {
        name: 'Citere',
        description: 'Coaching interactif pour enfants',
        location: 'France',
        tech: 'React + Firebase',
        screenshot: null,
      },
      {
        name: 'Family Zen',
        description: 'Accompagnement familial',
        location: 'UAE',
        tech: 'Next.js + Supabase',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=1500',
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
      },
      {
        name: "Saint's Wings",
        description: 'Wings & burgers restaurant',
        location: 'Dubai',
        tech: 'React + Headless CMS',
        screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fsaintswings--moussatouremt87.replit.app%2F&screenshot=true&meta=false&embed=screenshot.url',
      },
      {
        name: 'A.SAP Consulting',
        description: 'SAP ERP consulting & integration',
        location: 'International',
        tech: 'Next.js + Tailwind',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsap-context--moussatouremt87.replit.app%2F?w=800&h=1500',
      },
      {
        name: 'Citere',
        description: 'Interactive coaching for kids',
        location: 'France',
        tech: 'React + Firebase',
        screenshot: null,
      },
      {
        name: 'Family Zen',
        description: 'Family support platform',
        location: 'UAE',
        tech: 'Next.js + Supabase',
        screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2F1001familles.com%2F?w=800&h=1500',
      },
    ],
  },
};
const CiterePlaceholder = () => (
  <div style={{
    width: '100%', height: '100%',
    background: 'linear-gradient(135deg, #FFF8E7 0%, #FFE4B5 50%, #FFDAB9 100%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '20px', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ marginBottom: '16px' }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    </div>
    <p style={{ color: '#92400E', fontSize: '14px', fontWeight: '600', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>
      Et si votre enfant avait<br />enfin un coach ?
    </p>
    <p style={{ color: '#B45309', fontSize: '11px', marginTop: '8px', opacity: 0.8 }}>citere-edutech.org</p>
  </div>
);
const scrollAnimStyles = "@keyframes scrollPreview { 0%,10% { object-position: center top; } 90%,100% { object-position: center bottom; } } .portfolio-screenshot { width:100%; height:100%; object-fit:cover; object-position:center top; } .portfolio-card:hover .portfolio-screenshot { animation: scrollPreview 4s ease-in-out infinite alternate; }";

const ProjectCard = ({ project, index }) => {
  const getDomain = (url) => {
    try {
      if (url.includes('mshots')) {
        const decoded = decodeURIComponent(url.split('/v1/')[1].split('?')[0]);
        return new URL(decoded).hostname;
      }
      if (url.includes('microlink')) {
        const params = new URL(url).searchParams;
        return new URL(params.get('url')).hostname;
      }
      return new URL(url).hostname;
    } catch { return ''; }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="portfolio-card group"
    >
      <div style={{
        background: '#1E293B',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(132,204,22,0.1)',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(132,204,22,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(132,204,22,0.1)'}
      >        {/* Browser chrome bar */}
        <div style={{
          background: '#0F172A', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '8px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
          </div>
          <span style={{ color: '#64748B', fontSize: '11px', marginLeft: '4px' }}>
            {project.screenshot ? getDomain(project.screenshot) : (project.name === 'Citere' ? 'citere-edutech.org' : '')}
          </span>
        </div>

        {/* Screenshot or Placeholder */}
        <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative', background: '#0F172A' }}>
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={project.name}
              className="portfolio-screenshot"
              loading="lazy"
            />
          ) : project.name === 'Citere' ? (
            <CiterePlaceholder />
          ) : (
            <div style={{ width: '100%', height: '100%', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#475569', fontSize: '14px' }}>Preview coming soon</span>
            </div>
          )}
        </div>

        {/* Info bar */}
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ color: '#F1F5F9', fontSize: '16px', fontWeight: '600', margin: 0 }}>{project.name}</h3>
            <span style={{ color: '#94A3B8', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={12} /> {project.location}
            </span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0 0 0' }}>{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="portfolio" style={{ padding: '100px 20px', background: '#0F172A' }}>
      <style dangerouslySetInnerHTML={{ __html: scrollAnimStyles }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ color: '#F1F5F9', fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>{t.title}</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px' }}>{t.subtitle}</p>
        </motion.div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
        }}>
          {t.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
