'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Réalisations',
    subtitle: 'Projets qui transforment les visiteurs en clients',
    projects: [
      { name: 'FulFlo', description: 'E-commerce surplus marques premium', location: 'France', accent: '#22C55E', accentDark: '#166534', tech: 'Next.js + Stripe', type: 'ecommerce' },
      { name: "Saint's Wings", description: 'Restaurant wings & burgers', location: 'Dubai', accent: '#EAB308', accentDark: '#A16207', tech: 'React + Headless CMS', type: 'restaurant' },
      { name: 'A.SAP Consulting', description: 'Conseil & intégration SAP ERP', location: 'International', accent: '#3B82F6', accentDark: '#1D4ED8', tech: 'Next.js + Tailwind', type: 'corporate' },
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

/* Tall fake page layout â rendered 3x taller than the viewport card so it scrolls */
const FakePage = ({ project }) => {
  const c = project.accent;
  const cd = project.accentDark;

