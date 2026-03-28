import Script from 'next/script';
import { LanguageProvider } from '@/components/LanguageContext';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-H0EKE47FEQ';

export const metadata = {
  title: 'Day1.digital — Votre site pro en ligne dès le premier jour',
  description:
    'Agence web nouvelle génération. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7.',
  keywords: [
    'agence web',
    'landing page',
    'site web',
    'design web',
    'webdesign',
    'site vitrine',
    'e-commerce',
  ],
  authors: [{ name: 'Day1.digital' }],
  creator: 'Day1.digital',
  publisher: 'Day1.digital',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.day1-digital.com',
    siteName: 'Day1-Digital',
    title: 'Day1.digital — Votre site pro en ligne dès le premier jour',
    description:
      'Agence web nouvelle génération. Landing pages haute performance en 48h.',
  },
  twitter: {
