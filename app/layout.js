import Script from 'next/script';
import { LanguageProvider } from '@/components/LanguageContext';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-H0EKE47FEQ';

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

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
