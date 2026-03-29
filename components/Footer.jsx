'use client';

import { useLanguage } from './LanguageContext';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const content = {
  fr: {
    description: 'Agence web nouvelle génération. Landing pages haute performance en 48h.',
    services: 'Services',
    company: 'Entreprise',
    legal: 'Légal',
    contact: 'Contact',
    about: 'Ã Propos',
    privacy: 'Confidentialité',
    terms: 'CGV',
    email: 'contact@day1.digital',
    year: new Date().getFullYear(),
  },
  en: {
    description: 'Next-gen web agency. High-performance landing pages in 48 hours.',
    services: 'Services',
    company: 'Company',
    legal: 'Legal',
    contact: 'Contact',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    email: 'contact@day1.digital',
    year: new Date().getFullYear(),
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

