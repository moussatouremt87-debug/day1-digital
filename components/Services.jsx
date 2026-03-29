'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Zap,
  Globe,
  ShoppingCart,
  BarChart3,
  Palette,
  Wrench,
} from 'lucide-react';

const content = {
  fr: {
    title: 'Nos Services',
    subtitle: 'Tout ce dont vous avez besoin pour réussir en ligne',
    services: [
      { icon: Zap, title: 'Landing Pages', description: 'Des pages de destination optimisées pour convertir vos visiteurs en clients.' },
      { icon: Globe, title: 'Sites Vitrine', description: 'Présentez votre entreprise avec un site web moderne et professionnel.' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'Boutiques en ligne performantes avec integration paiement Stripe.' },
      { icon: BarChart3, title: 'SEO & Analytics', description: 'Optimisation pour les moteurs de recherche et suivi de performance.' },
      { icon: Palette, title: 'Design UI/UX', description: 'Designs personnalisés et expériences utilisateur exceptionnelles.' },
      { icon: Wrench, title: 'Maintenance', description: 'Support technique 24/7 et mises Ã  jour régulières de votre site.' },
    ],
  },
  en: {
    title: 'Our Services',
    subtitle: 'Everything you need to succeed online',
    services: [
      { icon: Zap, title: 'Landing Pages', description: 'Optimized landing pages designed to convert visitors into customers.' },
      { icon: Globe, title: 'Showcase Websites', description: 'Present your business with a modern and professional website.' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'High-performance online stores with Stripe payment integration.' },
      { icon: BarChart3, title: 'SEO & Analytics', description: 'Search engine optimization and performance tracking.' },
      { icon: Palette, title: 'UI/UX Design', description: 'Custom designs and exceptional user experiences.' },
