import { LanguageProvider } from '@/components/LanguageContext';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.day1-digital.com'),
  title: {
    default: 'Day1.digital — Votre site pro en ligne dès le premier jour',
    template: '%s | Day1.digital',
  },
  description:
    'Agence web nouvelle génération. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7. Résultats garantis.',
  keywords: [
    'agence web',
    'landing page',
    'site web',
    'design web',
    'webdesign',
    'site vitrine',
    'e-commerce',
    'création site internet',
    'agence digitale',
    'site professionnel',
    'développement web',
    'refonte site web',
  ],
  authors: [{ name: 'Day1.digital' }],
  creator: 'Day1.digital',
  publisher: 'Day1.digital',
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.day1-digital.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.day1-digital.com',
    siteName: 'Day1.digital',
    title: 'Day1.digital — Votre site pro en ligne dès le premier jour',
    description:
      'Agence web nouvelle génération. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Day1.digital — Agence web nouvelle génération',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day1.digital — Agence web nouvelle génération',
    description: 'Landing pages haute performance en 48h. Design sur mesure, SEO inclus.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Day1.digital',
  url: 'https://www.day1-digital.com',
  logo: 'https://www.day1-digital.com/android-chrome-512x512.png',
  description:
    'Agence web nouvelle génération. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7.',
  priceRange: '€€',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: [
    'Création de site web',
    'Landing page',
    'Web design',
    'SEO',
    'E-commerce',
    'Refonte de site web',
  ],
  founder: {
    '@type': 'Person',
    name: 'Moussa Touré',
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
