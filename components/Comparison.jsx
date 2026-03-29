'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const content = {
  fr: {
    title: 'Pourquoi Day1?',
    subtitle: 'Comparez nos offres avec les agences traditionnelles',
    rows: [
      {
        feature: 'Délai de livraison',
        traditional: '2-4 semaines',
        day1: '48h Ã  7 jours',
      },
      {
        feature: 'Prix de base',
        traditional: '3000-10000â¬',
        day1: '800-1800â¬',
      },
      {
        feature: 'Design sur mesure',
        traditional: true,
        day1: true,
      },
      {
        feature: 'Support technique',
        traditional: false,
        day1: true,
      },
      {
        feature: 'SEO inclus',
        traditional: false,
        day1: true,
      },
