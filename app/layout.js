import { LanguageProvider } from '@/components/LanguageContext';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.day1-digital.com'),
  title: {
    default: 'Day1.digital \u2014 Votre site pro en ligne d\u00e8s le premier jour',
    template: '%s | Day1.digital',
  },
  description:
    'Agence web nouvelle g\u00e9n\u00e9ration. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7. R\u00e9sultats garantis.',
  keywords: [
    'agence web',
    'landing page',
    'site web',
    'design web',
    'webdesign',
    'site vitrine',
    'e-commerce',
    'cr\u00e9ation site internet',
    'agence digitale',
    'site professionnel',
    'd\u00e9veloppement web',
    'refonte site web',
  ],
  authors: [{ name: 'Day1.digital' }],
  creator: 'Day1.digital',
  publisher: 'Day1.digital',
  formatDetection: {
    email: false,
    telephone: false,
  },
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
    title: 'Day1.digital \u2014 Votre site pro en ligne d\u00e8s le premier jour',
    description:
      'Agence web nouvelle g\u00e9n\u00e9ration. Landing pages haute performance en 48h. Design sur mesure, SEO inclus, support 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Day1.digital \u2014 Agence web nouvelle g\u00e9n\u00e9ration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day1.digital \u2014 Agence web nouvelle g\u00e9n\u00e9ration',
    description: 'Landing pages haute performance en 48h. Design sur mesure, SEO inclus.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
