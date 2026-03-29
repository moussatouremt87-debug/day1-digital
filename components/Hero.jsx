'use client';

import { useLanguage } from './LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const content = {
  fr: {
    tag: 'Agence web nouvelle génération',
    h1_words: ['Votre', 'site', 'pro.', 'Des', 'le', 'jour', '1.'],
    subtitle:
      'Nous créons des landing pages haute performance qui transforment vos visiteurs en clients. Rapidement. Sans compromis sur la qualité.',
    cta1: 'Demander un devis gratuit',
    cta2: 'Voir nos réalisations',
    counter1Label: 'Sites livrés',
    counter2Label: 'Temps moyen',
    counter3Label: 'Satisfaction',
  },
  en: {
    tag: 'Next-gen web agency',
    h1_words: ['Your', 'pro', 'website.', 'From', 'day', '1.'],
    subtitle:
      'We build high-performance landing pages that turn visitors into customers. Fast. No compromise on quality.',
    cta1: 'Get a free quote',
    cta2: 'See our work',
    counter1Label: 'Sites delivered',
    counter2Label: 'Avg. delivery',
    counter3Label: 'Satisfaction',
  },
};

const Counter = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
