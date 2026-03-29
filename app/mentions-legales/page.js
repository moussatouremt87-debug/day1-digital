'use client';

import { useLanguage } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  fr: {
    title: 'Mentions L\u00e9gales',
    lastUpdate: 'Derni\u00e8re mise \u00e0 jour : 29 mars 2026',
    sections: [
      {
        title: '1. \u00c9diteur du site',
        text: `Le site www.day1-digital.com est \u00e9dit\u00e9 par :

Nom : Day1.digital
Responsable de la publication : Moussa Tour\u00e9
Email : contact@day1.digital
Statut : [\u00c0 COMPL\u00c9TER - forme juridique]
SIRET : [\u00c0 COMPL\u00c9TER]
Si\u00e8ge social : [\u00c0 COMPL\u00c9TER]`,
      },
      {
        title: '2. H\u00e9bergement',
        text: `Le site est h\u00e9berg\u00e9 par :

Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723, \u00c9tats-Unis
Site web : https://vercel.com`,
      },
      {
        title: '3. Propri\u00e9t\u00e9 intellectuelle',
        text: `L\u2019ensemble des contenus pr\u00e9sents sur le site www.day1-digital.com (textes, images, graphismes, logo, ic\u00f4nes, vid\u00e9os, logiciels, code source) est la propri\u00e9t\u00e9 exclusive de Day1.digital ou de ses partenaires et est prot\u00e9g\u00e9 par les lois fran\u00e7aises et internationales relatives \u00e0 la propri\u00e9t\u00e9 intellectuelle.

Toute reproduction, repr\u00e9sentation, modification, distribution ou exploitation de tout ou partie de ces contenus, par quelque proc\u00e9d\u00e9 que ce soit, sans l\u2019autorisation pr\u00e9alable \u00e9crite de Day1.digital, est strictement interdite et constitue un d\u00e9lit de contrefa\u00e7on.`,
      },
      {
        title: '4. Protection des donn\u00e9es personnelles (RGPD)',
        text: `Conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD - UE 2016/679) et \u00e0 la loi Informatique et Libert\u00e9s du 6 janvier 1978 modifi\u00e9e, vous disposez des droits suivants sur vos donn\u00e9es personnelles :

\u2022 Droit d\u2019acc\u00e8s : obtenir la confirmation que des donn\u00e9es vous concernant sont trait\u00e9es et en obtenir une copie.
\u2022 Droit de rectification : demander la correction de donn\u00e9es inexactes ou incompl\u00e8tes.
\u2022 Droit \u00e0 l\u2019effacement : demander la suppression de vos donn\u00e9es dans les conditions pr\u00e9vues par le RGPD.
\u2022 Droit \u00e0 la limitation du traitement : demander la limitation du traitement de vos donn\u00e9es.
\u2022 Droit \u00e0 la portabilit\u00e9 : recevoir vos donn\u00e9es dans un format structur\u00e9 et les transf\u00e9rer \u00e0 un autre responsable de traitement.
\u2022 Droit d\u2019opposition : vous opposer au traitement de vos donn\u00e9es pour des motifs l\u00e9gitimes.

Pour exercer ces droits, contactez-nous \u00e0 : contact@day1.digital

Responsable du traitement : Moussa Tour\u00e9
Vous pouvez \u00e9galement introduire une r\u00e9clamation aupr\u00e8s de la CNIL (Commission Nationale de l\u2019Informatique et des Libert\u00e9s) : www.cnil.fr`,
      },
      {
        title: '5. Cookies',
        text: `Le site utilise des cookies analytiques (Google Analytics) pour mesurer l\u2019audience de mani\u00e8re anonyme. Ces cookies ne sont d\u00e9pos\u00e9s qu\u2019apr\u00e8s votre consentement explicite via la banni\u00e8re de cookies affich\u00e9e lors de votre premi\u00e8re visite.

Vous pouvez \u00e0 tout moment modifier vos pr\u00e9f\u00e9rences en supprimant les cookies de votre navigateur. Le site affichera alors \u00e0 nouveau la banni\u00e8re de consentement.

Cookies utilis\u00e9s :
\u2022 _ga, _gid (Google Analytics) \u2014 mesure d\u2019audience, dur\u00e9e : 2 ans / 24h
\u2022 cookie-consent (localStorage) \u2014 m\u00e9morisation de votre choix, dur\u00e9e : illimit\u00e9e`,
      },
      {
        title: '6. Liens hypertextes',
        text: `Le site peut contenir des liens vers des sites tiers. Day1.digital n\u2019exerce aucun contr\u00f4le sur ces sites et d\u00e9cline toute responsabilit\u00e9 quant \u00e0 leur contenu, leurs pratiques en mati\u00e8re de confidentialit\u00e9 ou leur disponibilit\u00e9.`,
      },
      {
        title: '7. Limitation de responsabilit\u00e9',
        text: `Day1.digital s\u2019efforce de fournir des informations exactes et \u00e0 jour sur ce site. Toutefois, Day1.digital ne peut garantir l\u2019exactitude, la compl\u00e9tude ou l\u2019actualit\u00e9 des informations diffus\u00e9es.

Day1.digital ne saurait \u00eatre tenu responsable des dommages directs ou indirects r\u00e9sultant de l\u2019acc\u00e8s au site ou de l\u2019impossibilit\u00e9 d\u2019y acc\u00e9der, de l\u2019utilisation du site et/ou du cr\u00e9dit accord\u00e9 \u00e0 une information provenant directement ou indirectement de ce dernier.`,
      },
      {
        title: '8. Droit applicable',
        text: `Les pr\u00e9sentes mentions l\u00e9gales sont r\u00e9gies par le droit fran\u00e7ais. En cas de litige, les tribunaux fran\u00e7ais seront seuls comp\u00e9tents.`,
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    lastUpdate: 'Last updated: March 29, 2026',
    sections: [
      {
        title: '1. Website Publisher',
        text: `The website www.day1-digital.com is published by:

Name: Day1.digital
Publication Director: Moussa Tour\u00e9
Email: contact@day1.digital
Status: [TO BE COMPLETED - legal form]
Registration: [TO BE COMPLETED]
Address: [TO BE COMPLETED]`,
      },
      {
        title: '2. Hosting',
        text: `The website is hosted by:

Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723, United States
Website: https://vercel.com`,
      },
      {
        title: '3. Intellectual Property',
        text: `All content on www.day1-digital.com (text, images, graphics, logo, icons, videos, software, source code) is the exclusive property of Day1.digital or its partners and is protected by French and international intellectual property laws.

Any reproduction, representation, modification, distribution, or exploitation of all or part of this content, by any means whatsoever, without the prior written authorization of Day1.digital, is strictly prohibited.`,
      },
      {
        title: '4. Personal Data Protection (GDPR)',
        text: `In accordance with the General Data Protection Regulation (GDPR - EU 2016/679), you have the following rights regarding your personal data:

\u2022 Right of access: obtain confirmation that your data is being processed and receive a copy.
\u2022 Right to rectification: request correction of inaccurate or incomplete data.
\u2022 Right to erasure: request deletion of your data under GDPR conditions.
\u2022 Right to restriction: request limitation of processing of your data.
\u2022 Right to portability: receive your data in a structured format.
\u2022 Right to object: object to the processing of your data on legitimate grounds.

To exercise these rights, contact us at: contact@day1.digital

Data Controller: Moussa Tour\u00e9
You may also file a complaint with the CNIL (French Data Protection Authority): www.cnil.fr`,
      },
      {
        title: '5. Cookies',
        text: `This site uses analytical cookies (Google Analytics) for anonymous audience measurement. These cookies are only set after your explicit consent via the cookie banner displayed on your first visit.

You can change your preferences at any time by clearing your browser cookies. The site will then display the consent banner again.

Cookies used:
\u2022 _ga, _gid (Google Analytics) \u2014 audience measurement, duration: 2 years / 24h
\u2022 cookie-consent (localStorage) \u2014 stores your choice, duration: unlimited`,
      },
      {
        title: '6. External Links',
        text: `This site may contain links to third-party websites. Day1.digital has no control over these sites and accepts no responsibility for their content, privacy practices, or availability.`,
      },
      {
        title: '7. Limitation of Liability',
        text: `Day1.digital strives to provide accurate and up-to-date information on this site. However, Day1.digital cannot guarantee the accuracy, completeness, or timeliness of the information provided.

Day1.digital shall not be held liable for any direct or indirect damage resulting from access to or inability to access the site, use of the site, and/or reliance on any information obtained directly or indirectly from it.`,
      },
      {
        title: '8. Governing Law',
        text: `These legal notices are governed by French law. In the event of a dispute, French courts shall have exclusive jurisdiction.`,
      },
    ],
  },
};

export default function MentionsLegales() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-charcoal-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-2">
            {t.title}
          </h1>
          <p className="text-slate-400 text-sm mb-12">{t.lastUpdate}</p>

          <div className="space-y-10">
            {t.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold text-slate-50 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
