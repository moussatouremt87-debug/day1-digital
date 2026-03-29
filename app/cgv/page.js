'use client';

import { useLanguage } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  fr: {
    title: 'Conditions Générales de Vente',
    lastUpdate: 'Dernière mise à jour : 29 mars 2026',
    sections: [
      {
        title: 'Article 1 — Objet',
        text: `Les présentes Conditions Générales de Vente (ci-après "CGV") régissent l'ensemble des prestations de services fournies par Day1.digital (ci-après "le Prestataire") à ses clients (ci-après "le Client"). Toute commande implique l'acceptation sans réserve des présentes CGV. Le Prestataire se réserve le droit de modifier les CGV à tout moment, les conditions applicables étant celles en vigueur à la date de la commande.`,
      },
      {
        title: 'Article 2 — Prestations',
        text: `Le Prestataire propose des services de création de sites web, landing pages, sites vitrines, sites e-commerce, design UI/UX, référencement (SEO), maintenance et support technique. La nature et l'étendue des prestations sont définies dans le devis validé par le Client. Toute prestation non mentionnée dans le devis fera l'objet d'un avenant et d'une facturation complémentaire.`,
      },
      {
        title: 'Article 3 — Devis et commande',
        text: `Tout projet fait l'objet d'un devis préalable gratuit et détaillé. Le devis est valable 30 jours à compter de sa date d'émission. La commande est considérée comme ferme et définitive après acceptation écrite du devis par le Client (email ou signature) et versement de l'acompte prévu. Aucun travail ne débutera avant réception de l'acompte.`,
      },
      {
        title: 'Article 4 — Tarifs et paiement',
        text: `Les prix sont indiqués en euros (EUR) et sont nets de taxes (micro-entreprise non assujettie à la TVA, article 293 B du CGI, le cas échéant). Un acompte de 50% du montant total est exigé à la commande. Le solde est dû à la livraison du projet, avant mise en ligne définitive. En cas de retard de paiement, des pénalités de retard au taux de 3 fois le taux d'intérêt légal seront appliquées de plein droit, sans mise en demeure préalable, ainsi qu'une indemnité forfaitaire de 40 euros pour frais de recouvrement. Le Prestataire se réserve le droit de suspendre toute prestation en cours en cas de non-paiement.`,
      },
      {
        title: 'Article 5 — Délais de livraison',
        text: `Le délai de livraison est communiqué au Client lors de la validation du devis. À titre indicatif : 48 heures pour les projets basiques (landing pages, sites vitrines simples) et jusqu'à 7 jours maximum pour les projets plus complexes (e-commerce, fonctionnalités avancées). Ces délais courent à compter de la réception de l'acompte ET de l'ensemble des éléments nécessaires à la réalisation (contenus, textes, images, accès). Tout retard imputable au Client (retard dans la fourniture des éléments, délai de validation excessif) suspend les délais de livraison. Le dépassement des délais par le Prestataire ne donne droit à aucune remise, indemnité ou prestation gratuite.`,
      },
      {
        title: 'Article 6 — Obligations du Client',
        text: `Le Client s'engage à fournir dans les délais convenus tous les éléments nécessaires à la réalisation du projet (textes, images, logos, accès aux outils et hébergements). Le Client garantit qu'il dispose des droits de propriété intellectuelle sur les éléments fournis. Tout retard ou défaut dans la fourniture de ces éléments pourra entraîner un report des délais et/ou une facturation supplémentaire. Le Client s'engage à désigner un interlocuteur unique pour la validation des étapes du projet.`,
      },
      {
        title: 'Article 7 — Validation et livraison',
        text: `Le projet est soumis au Client pour validation à chaque étape clé (maquette, version de développement, version finale). Le Client dispose de 48 heures pour valider chaque étape ou demander des modifications. L'absence de retour dans ce délai vaut acceptation. La livraison est considérée comme effective dès la mise à disposition du site sur le serveur d'hébergement ou la transmission des fichiers au Client.`,
      },
      {
        title: 'Article 8 — Modifications et révisions',
        text: `Dans les 14 jours suivant la livraison finale, le Client peut demander des modifications gratuites dans la limite du périmètre initial défini dans le devis. Les modifications gratuites concernent des ajustements mineurs (couleurs, textes, disposition d'éléments existants). Toute modification sortant du périmètre initial, ajout de fonctionnalités, refonte de design ou modification structurelle fera l'objet d'un devis complémentaire. Au-delà du délai de 14 jours, toute modification sera facturée selon les tarifs en vigueur du Prestataire.`,
      },
      {
        title: 'Article 9 — Propriété intellectuelle',
        text: `Le transfert des droits de propriété intellectuelle sur le site livré au Client n'est effectif qu'après paiement intégral du prix convenu. Jusqu'au paiement complet, le Prestataire reste propriétaire de l'ensemble des créations. Le Prestataire se réserve le droit de mentionner la réalisation du site dans son portfolio et ses références commerciales, sauf opposition écrite du Client. Les outils, frameworks, bibliothèques et codes open source utilisés restent soumis à leurs licences respectives.`,
      },
      {
        title: 'Article 10 — Responsabilité',
        text: `Le Prestataire s'engage à exécuter les prestations avec diligence et professionnalisme, dans le cadre d'une obligation de moyens. Le Prestataire ne saurait être tenu responsable des dommages indirects (perte de chiffre d'affaires, perte de données, atteinte à l'image) résultant de l'utilisation ou de l'impossibilité d'utiliser le site livré. La responsabilité du Prestataire est limitée au montant total de la prestation facturée. Le Prestataire ne peut être tenu responsable des contenus publiés par le Client sur le site livré, ni de leur conformité légale.`,
      },
      {
        title: 'Article 11 — Hébergement et maintenance',
        text: `Lorsque l'hébergement est inclus dans la prestation, il est fourni pour la durée indiquée dans le devis (généralement 1 an). Le renouvellement de l'hébergement est à la charge du Client aux conditions tarifaires en vigueur. La maintenance incluse dans certaines offres couvre les mises à jour techniques et de sécurité. Elle ne couvre pas les modifications de contenu, l'ajout de fonctionnalités ou la refonte du site.`,
      },
      {
        title: 'Article 12 — Résiliation',
        text: `En cas de résiliation anticipée par le Client après validation du devis, l'acompte versé reste acquis au Prestataire à titre d'indemnité. Si plus de 50% du travail a été réalisé, le Prestataire facturera le travail effectué au prorata. Le Prestataire se réserve le droit de résilier le contrat en cas de manquement grave du Client à ses obligations (non-paiement, comportement abusif, fourniture de contenus illicites), après mise en demeure restée infructueuse pendant 15 jours.`,
      },
      {
        title: 'Article 13 — Force majeure',
        text: `Aucune des parties ne sera responsable de l'inexécution de ses obligations en cas de force majeure telle que définie par l'article 1218 du Code civil. En cas de force majeure, les obligations des parties sont suspendues. Si la situation de force majeure perdure au-delà de 30 jours, chaque partie pourra résilier le contrat sans indemnité.`,
      },
      {
        title: 'Article 14 — Confidentialité',
        text: `Chaque partie s'engage à garder confidentielles les informations transmises par l'autre partie dans le cadre du projet. Cette obligation de confidentialité s'applique pendant la durée du contrat et pendant 2 ans après son terme.`,
      },
      {
        title: 'Article 15 — Données personnelles',
        text: `Le Prestataire collecte et traite les données personnelles du Client dans le strict cadre de l'exécution de la prestation, conformément au Règlement Général sur la Protection des Données (RGPD). Le Client dispose d'un droit d'accès, de rectification, de suppression et de portabilité de ses données. Pour exercer ces droits, le Client peut contacter le Prestataire à l'adresse : contact@day1.digital.`,
      },
      {
        title: 'Article 16 — Droit applicable et litiges',
        text: `Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut de résolution amiable dans un délai de 30 jours, le litige sera soumis aux tribunaux compétents du ressort du siège social du Prestataire.`,
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    lastUpdate: 'Last updated: March 29, 2026',
    sections: [
      {
        title: 'Article 1 — Purpose',
        text: 'These Terms and Conditions (hereinafter "T&C") govern all services provided by Day1.digital (hereinafter "the Provider") to its clients (hereinafter "the Client"). Any order implies unreserved acceptance of these T&C. The Provider reserves the right to modify the T&C at any time; the applicable conditions are those in force on the date of the order.',
      },
      {
        title: 'Article 2 — Services',
        text: 'The Provider offers website creation services, landing pages, showcase websites, e-commerce sites, UI/UX design, SEO, maintenance and technical support. The nature and scope of services are defined in the quote validated by the Client. Any service not mentioned in the quote will be subject to an amendment and additional billing.',
      },
      {
        title: 'Article 3 — Quote and order',
        text: "All projects require a free, detailed preliminary quote. The quote is valid for 30 days from its issue date. The order is considered firm and final after the Client's written acceptance of the quote (email or signature) and payment of the required deposit. No work will begin before receipt of the deposit.",
      },
      {
        title: 'Article 4 — Pricing and payment',
        text: 'Prices are stated in euros (EUR) and are net of tax (micro-enterprise exempt from VAT under article 293 B of the French Tax Code, where applicable). A deposit of 50% of the total amount is required at the time of order. The balance is due upon project delivery, before final deployment. In case of late payment, late payment penalties at 3 times the legal interest rate will be applied automatically, without prior formal notice, along with a flat-rate compensation of 40 euros for recovery costs. The Provider reserves the right to suspend any ongoing service in case of non-payment.',
      },
      {
        title: 'Article 5 — Delivery times',
        text: 'The delivery time is communicated to the Client upon quote validation. As a guide: 48 hours for basic projects (landing pages, simple showcase sites) and up to 7 days maximum for more complex projects (e-commerce, advanced features). These timelines begin from receipt of the deposit AND all necessary materials (content, texts, images, access credentials). Any delay attributable to the Client (late provision of materials, excessive validation delays) suspends delivery timelines. Exceeding deadlines by the Provider does not entitle the Client to any discount, compensation, or free services.',
      },
      {
        title: 'Article 6 — Client obligations',
        text: 'The Client agrees to provide all materials necessary for the project within agreed timelines (texts, images, logos, tool and hosting access). The Client warrants that they hold intellectual property rights to all provided materials. Any delay or failure in providing these materials may result in postponed deadlines and/or additional billing. The Client agrees to designate a single point of contact for project milestone validation.',
      },
      {
        title: 'Article 7 — Validation and delivery',
        text: 'The project is submitted to the Client for validation at each key stage (mockup, development version, final version). The Client has 48 hours to validate each stage or request modifications. No response within this timeframe constitutes acceptance. Delivery is considered complete once the website is made available on the hosting server or files are transmitted to the Client.',
      },
      {
        title: 'Article 8 — Modifications and revisions',
        text: 'Within 14 days of final delivery, the Client may request free modifications within the initial scope defined in the quote. Free modifications cover minor adjustments (colors, texts, layout of existing elements). Any modification outside the initial scope, feature additions, design overhaul, or structural changes will require an additional quote. After the 14-day period, all modifications will be billed at the Provider\'s current rates.',
      },
      {
        title: 'Article 9 — Intellectual property',
        text: "Transfer of intellectual property rights over the delivered website to the Client is only effective upon full payment of the agreed price. Until full payment, the Provider retains ownership of all creations. The Provider reserves the right to reference the website in their portfolio and commercial references, unless the Client objects in writing. Open source tools, frameworks, libraries, and code remain subject to their respective licenses.",
      },
      {
        title: 'Article 10 — Liability',
        text: "The Provider commits to executing services with diligence and professionalism, under an obligation of means. The Provider shall not be held liable for indirect damages (loss of revenue, data loss, image damage) resulting from the use or inability to use the delivered website. The Provider's liability is limited to the total amount of the invoiced service. The Provider cannot be held liable for content published by the Client on the delivered website, nor for its legal compliance.",
      },
      {
        title: 'Article 11 — Hosting and maintenance',
        text: 'When hosting is included in the service, it is provided for the duration indicated in the quote (generally 1 year). Hosting renewal is at the Client\'s expense at current rates. Maintenance included in certain plans covers technical and security updates. It does not cover content modifications, feature additions, or website redesign.',
      },
      {
        title: 'Article 12 — Termination',
        text: "In case of early termination by the Client after quote validation, the paid deposit remains with the Provider as compensation. If more than 50% of the work has been completed, the Provider will invoice the work done on a pro rata basis. The Provider reserves the right to terminate the contract in case of serious breach by the Client (non-payment, abusive behavior, provision of illegal content), after formal notice remaining unsuccessful for 15 days.",
      },
      {
        title: 'Article 13 — Force majeure',
        text: 'Neither party shall be liable for failure to perform its obligations in case of force majeure as defined by article 1218 of the French Civil Code. In case of force majeure, the obligations of the parties are suspended. If the force majeure situation persists beyond 30 days, either party may terminate the contract without compensation.',
      },
      {
        title: 'Article 14 — Confidentiality',
        text: 'Each party agrees to keep confidential the information transmitted by the other party in the context of the project. This confidentiality obligation applies during the contract term and for 2 years after its termination.',
      },
      {
        title: 'Article 15 — Personal data',
        text: "The Provider collects and processes the Client's personal data strictly for the purpose of service execution, in accordance with the General Data Protection Regulation (GDPR). The Client has the right to access, rectify, delete, and transfer their data. To exercise these rights, the Client may contact the Provider at: contact@day1.digital.",
      },
      {
        title: 'Article 16 — Applicable law and disputes',
        text: "These T&C are governed by French law. In case of dispute, the parties agree to seek an amicable solution before any legal action. Failing amicable resolution within 30 days, the dispute shall be submitted to the competent courts of the Provider's registered office jurisdiction.",
      },
    ],
  },
};

export default function CGVPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="bg-charcoal-900 min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            {t.title}
          </h1>
          <p className="text-slate-400 mb-12 text-sm">{t.lastUpdate}</p>

          <div className="space-y-10">
            {t.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-lime-400 mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-charcoal-800">
            <p className="text-slate-400 text-sm">
              {language === 'fr'
                ? 'Pour toute question relative aux présentes CGV, contactez-nous à contact@day1.digital.'
                : 'For any questions regarding these Terms and Conditions, contact us at contact@day1.digital.'}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
