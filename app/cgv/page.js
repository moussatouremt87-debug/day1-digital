'use client';

import { useLanguage } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  fr: {
    title: 'Conditions GÃ©nÃ©rales de Vente',
    lastUpdate: 'DerniÃ¨re mise Ã  jour : 29 mars 2026',
    sections: [
      {
        title: 'Article 1 â Objet',
        text: `Les prÃ©sentes Conditions GÃ©nÃ©rales de Vente (ci-aprÃ¨s "CGV") rÃ©gissent l'ensemble des prestations de services fournies par Day1.digital (ci-aprÃ¨s "le Prestataire") Ã  ses clients (ci-aprÃ¨s "le Client"). Toute commande implique l'acceptation sans rÃ©serve des prÃ©sentes CGV. Le Prestataire se rÃ©serve le droit de modifier les CGV Ã  tout moment, les conditions applicables Ã©tant celles en vigueur Ã  la date de la commande.`,
      },
      {
        title: 'Article 2 â Prestations',
        text: `Le Prestataire propose des services de crÃ©ation de sites web, landing pages, sites vitrines, sites e-commerce, design UI/UX, rÃ©fÃ©rencement (SEO), maintenance et support technique. La nature et l'Ã©tendue des prestations sont dÃ©finies dans le devis validÃ© par le Client. Toute prestation non mentionnÃ©e dans le devis fera l'objet d'un avenant et d'une facturation complÃ©mentaire.`,
      },
      {
        title: 'Article 3 â Devis et commande',
        text: `Tout projet fait l'objet d'un devis prÃ©alable gratuit et dÃ©taillÃ©. Le devis est valable 30 jours Ã  compter de sa date d'Ã©mission. La commande est considÃ©rÃ©e comme ferme et dÃ©finitive aprÃ¨s acceptation Ã©crite du devis par le Client (email ou signature) et versement de l'acompte prÃ©vu. Aucun travail ne dÃ©butera avant rÃ©ception de l'acompte.`,
      },
      {
        title: 'Article 4 â Tarifs et paiement',
        text: `Les prix sont indiquÃ©s en euros (EUR) et sont nets de taxes (micro-entreprise non assujettie Ã  la TVA, article 293 B du CGI, le cas Ã©chÃ©ant). Un acompte de 50% du montant total est exigÃ© Ã  la commande. Le solde est dÃ» Ã  la livraison du projet, avant mise en ligne dÃ©finitive. En cas de retard de paiement, des pÃ©nalitÃ©s de retard au taux de 3 fois le taux d'intÃ©rÃªt lÃ©gal seront appliquÃ©es de plein droit, sans mise en demeure prÃ©alable, ainsi qu'une indemnitÃ© forfaitaire de 40 euros pour frais de recouvrement. Le Prestataire se rÃ©serve le droit de suspendre toute prestation en cours en cas de non-paiement.`,
      },
      {
        title: 'Article 5 â DÃ©lais de livraison',
        text: `Le dÃ©lai de livraison est communiquÃ© au Client lors de la validation du devis. Ã titre indicatif : 48 heures pour les projets basiques (landing pages, sites vitrines simples) et jusqu'Ã  7 jours maximum pour les projets plus complexes (e-commerce, fonctionnalitÃ©s avancÃ©es). Ces dÃ©lais courent Ã  compter de la rÃ©ception de l'acompte ET de l'ensemble des Ã©lÃ©ments nÃ©cessaires Ã  la rÃ©alisation (contenus, textes, images, accÃ¨s). Tout retard imputable au Client (retard dans la fourniture des Ã©lÃ©ments, dÃ©lai de validation excessif) suspend les dÃ©lais de livraison. Le dÃ©passement des dÃ©lais par le Prestataire ne donne droit Ã  aucune remise, indemnitÃ© ou prestation gratuite.`,
      },
      {
        title: 'Article 6 â Obligations du Client',
        text: `Le Client s'engage Ã  fournir dans les dÃ©lais convenus tous les Ã©lÃ©ments nÃ©cessaires Ã  la rÃ©alisation du projet (textes, images, logos, accÃ¨s aux outils et hÃ©bergements). Le Client garantit qu'il dispose des droits de propriÃ©tÃ© intellectuelle sur les Ã©lÃ©ments fournis. Tout retard ou dÃ©faut dans la fourniture de ces Ã©lÃ©ments pourra entraÃ®ner un report des dÃ©lais et/ou une facturation supplÃ©mentaire. Le Client s'engage Ã  dÃ©signer un interlocuteur unique pour la validation des Ã©tapes du projet.`,
      },
      {
        title: 'Article 7 â Validation et livraison',
        text: `Le projet est soumis au Client pour validation Ã  chaque Ã©tape clÃ© (maquette, version de dÃ©veloppement, version finale). Le Client dispose de 48 heures pour valider chaque Ã©tape ou demander des modifications. L'absence de retour dans ce dÃ©lai vaut acceptation. La livraison est considÃ©rÃ©e comme effective dÃ¨s la mise Ã  disposition du site sur le serveur d'hÃ©bergement ou la transmission des fichiers au Client.`,
      },
      {
        title: 'Article 8 â Modifications et rÃ©visions',
        text: `Dans les 14 jours suivant la livraison finale, le Client peut demander des modifications gratuites dans la limite du pÃ©rimÃ¨tre initial dÃ©fini dans le devis. Les modifications gratuites concernent des ajustements mineurs (couleurs, textes, disposition d'Ã©lÃ©ments existants). Toute modification sortant du pÃ©rimÃ¨tre initial, ajout de fonctionnalitÃ©s, refonte de design ou modification structurelle fera l'objet d'un devis complÃ©mentaire. Au-delÃ  du dÃ©lai de 14 jours, toute modification sera facturÃ©e selon les tarifs en vigueur du Prestataire.`,
      },
      {
        title: 'Article 9 â PropriÃ©tÃ© intellectuelle',
        text: `Le transfert des droits de propriÃ©tÃ© intellectuelle sur le site livrÃ© au Client n'est effectif qu'aprÃ¨s paiement intÃ©gral du prix convenu. Jusqu'au paiement complet, le Prestataire reste propriÃ©taire de l'ensemble des crÃ©ations. Le Prestataire se rÃ©serve le droit de mentionner la rÃ©alisation du site dans son portfolio et ses rÃ©fÃ©rences commerciales, sauf opposition Ã©crite du Client. Les outils, frameworks, bibliothÃ¨ques et codes open source utilisÃ©s restent soumis Ã  leurs licences respectives.`,
      },
      {
        title: 'Article 10 â ResponsabilitÃ©',
        text: `Le Prestataire s'engage Ã  exÃ©cuter les prestations avec diligence et professionnalisme, dans le cadre d'une obligation de moyens. Le Prestataire ne saurait Ãªtre tenu responsable des dommages indirects (perte de chiffre d'affaires, perte de donnÃ©es, atteinte Ã  l'image) rÃ©sultant de l'utilisation ou de l'impossibilitÃ© d'utiliser le site livrÃ©. La responsabilitÃ© du Prestataire est limitÃ©e au montant total de la prestation facturÃ©e. Le Prestataire ne peut Ãªtre tenu responsable des contenus publiÃ©s par le Client sur le site livrÃ©, ni de leur conformitÃ© lÃ©gale.`,
      },
      {
        title: 'Article 11 â HÃ©bergement et maintenance',
        text: `Lorsque l'hÃ©bergement est inclus dans la prestation, il est fourni pour la durÃ©e indiquÃ©e dans le devis (gÃ©nÃ©ralement 1 an). Le renouvellement de l'hÃ©bergement est Ã  la charge du Client aux conditions tarifaires en vigueur. La maintenance incluse dans certaines offres couvre les mises Ã  jour techniques et de sÃ©curitÃ©. Elle ne couvre pas les modifications de contenu, l'ajout de fonctionnalitÃ©s ou la refonte du site.`,
      },
      {
        title: 'Article 12 â RÃ©siliation',
        text: `En cas de rÃ©siliation anticipÃ©e par le Client aprÃ¨s validation du devis, l'acompte versÃ© reste acquis au Prestataire Ã  titre d'indemnitÃ©. Si plus de 50% du travail a Ã©tÃ© rÃ©alisÃ©, le Prestataire facturera le travail effectuÃ© au prorata. Le Prestataire se rÃ©serve le droit de rÃ©silier le contrat en cas de manquement grave du Client Ã  ses obligations (non-paiement, comportement abusif, fourniture de contenus illicites), aprÃ¨s mise en demeure restÃ©e infructueuse pendant 15 jours.`,
      },
      {
        title: 'Article 13 â Force majeure',
        text: `Aucune des parties ne sera responsable de l'inexÃ©cution de ses obligations en cas de force majeure telle que dÃ©finie par l'article 1218 du Code civil. En cas de force majeure, les obligations des parties sont suspendues. Si la situation de force majeure perdure au-delÃ  de 30 jours, chaque partie pourra rÃ©silier le contrat sans indemnitÃ©.`,
      },
      {
        title: 'Article 14 â ConfidentialitÃ©',
        text: `Chaque partie s'engage Ã  garder confidentielles les informations transmises par l'autre partie dans le cadre du projet. Cette obligation de confidentialitÃ© s'applique pendant la durÃ©e du contrat et pendant 2 ans aprÃ¨s son terme.`,
      },
      {
        title: 'Article 15 â DonnÃ©es personnelles',
        text: `Le Prestataire collecte et traite les donnÃ©es personnelles du Client dans le strict cadre de l'exÃ©cution de la prestation, conformÃ©ment au RÃ¨glement GÃ©nÃ©ral sur la Protection des DonnÃ©es (RGPD). Le Client dispose d'un droit d'accÃ¨s, de rectification, de suppression et de portabilitÃ© de ses donnÃ©es. Pour exercer ces droits, le Client peut contacter le Prestataire Ã  l'adresse : contact@day1.digital.`,
      },
      {
        title: 'Article 16 â Droit applicable et litiges',
        text: `Les prÃ©sentes CGV sont soumises au droit franÃ§ais. En cas de litige, les parties s'engagent Ã  rechercher une solution amiable avant toute action judiciaire. Ã dÃ©faut de rÃ©solution amiable dans un dÃ©lai de 30 jours, le litige sera soumis aux tribunaux compÃ©tents du ressort du siÃ¨ge social du Prestataire.`,
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    lastUpdate: 'Last updated: March 29, 2026',
    sections: [
      {
        title: 'Article 1 â Purpose',
        text: 'These Terms and Conditions (hereinafter "T&C") govern all services provided by Day1.digital (hereinafter "the Provider") to its clients (hereinafter "the Client"). Any order implies unreserved acceptance of these T&C. The Provider reserves the right to modify the T&C at any time; the applicable conditions are those in force on the date of the order.',
      },
      {
        title: 'Article 2 â Services',
        text: 'The Provider offers website creation services, landing pages, showcase websites, e-commerce sites, UI/UX design, SEO, maintenance and technical support. The nature and scope of services are defined in the quote validated by the Client. Any service not mentioned in the quote will be subject to an amendment and additional billing.',
      },
      {
        title: 'Article 3 â Quote and order',
        text: "All projects require a free, detailed preliminary quote. The quote is valid for 30 days from its issue date. The order is considered firm and final after the Client's written acceptance of the quote (email or signature) and payment of the required deposit. No work will begin before receipt of the deposit.",
      },
      {
        title: 'Article 4 â Pricing and payment',
        text: 'Prices are stated in euros (EUR) and are net of tax (micro-enterprise exempt from VAT under article 293 B of the French Tax Code, where applicable). A deposit of 50% of the total amount is required at the time of order. The balance is due upon project delivery, before final deployment. In case of late payment, late payment penalties at 3 times the legal interest rate will be applied automatically, without prior formal notice, along with a flat-rate compensation of 40 euros for recovery costs. The Provider reserves the right to suspend any ongoing service in case of non-payment.',
      },
      {
        title: 'Article 5 â Delivery times',
        text: 'The delivery time is communicated to the Client upon quote validation. As a guide: 48 hours for basic projects (landing pages, simple showcase sites) and up to 7 days maximum for more complex projects (e-commerce, advanced features). These timelines begin from receipt of the deposit AND all necessary materials (content, texts, images, access credentials). Any delay attributable to the Client (late provision of materials, excessive validation delays) suspends delivery timelines. Exceeding deadlines by the Provider does not entitle the Client to any discount, compensation, or free services.',
      },
      {
        title: 'Article 6 â Client obligations',
        text: 'The Client agrees to provide all materials necessary for the project within agreed timelines (texts, images, logos, tool and hosting access). The Client warrants that they hold intellectual property rights to all provided materials. Any delay or failure in providing these materials may result in postponed deadlines and/or additional billing. The Client agrees to designate a single point of contact for project milestone validation.',
      },
      {
        title: 'Article 7 â Validation and delivery',
        text: 'The project is submitted to the Client for validation at each key stage (mockup, development version, final version). The Client has 48 hours to validate each stage or request modifications. No response within this timeframe constitutes acceptance. Delivery is considered complete once the website is made available on the hosting server or files are transmitted to the Client.',
      },
      {
        title: 'Article 8 â Modifications and revisions',
        text: 'Within 14 days of final delivery, the Client may request free modifications within the initial scope defined in the quote. Free modifications cover minor adjustments (colors, texts, layout of existing elements). Any modification outside the initial scope, feature additions, design overhaul, or structural changes will require an additional quote. After the 14-day period, all modifications will be billed at the Provider\'s current rates.',
      },
      {
        title: 'Article 9 â Intellectual property',
        text: "Transfer of intellectual property rights over the delivered website to the Client is only effective upon full payment of the agreed price. Until full payment, the Provider retains ownership of all creations. The Provider reserves the right to reference the website in their portfolio and commercial references, unless the Client objects in writing. Open source tools, frameworks, libraries, and code remain subject to their respective licenses.",
      },
      {
        title: 'Article 10 â Liability',
        text: "The Provider commits to executing services with diligence and professionalism, under an obligation of means. The Provider shall not be held liable for indirect damages (loss of revenue, data loss, image damage) resulting from the use or inability to use the delivered website. The Provider's liability is limited to the total amount of the invoiced service. The Provider cannot be held liable for content published by the Client on the delivered website, nor for its legal compliance.",
      },
      {
        title: 'Article 11 â Hosting and maintenance',
        text: 'When hosting is included in the service, it is provided for the duration indicated in the quote (generally 1 year). Hosting renewal is at the Client\'s expense at current rates. Maintenance included in certain plans covers technical and security updates. It does not cover content modifications, feature additions, or website redesign.',
      },
      {
        title: 'Article 12 â Termination',
        text: "In case of early termination by the Client after quote validation, the paid deposit remains with the Provider as compensation. If more than 50% of the work has been completed, the Provider will invoice the work done on a pro rata basis. The Provider reserves the right to terminate the contract in case of serious breach by the Client (non-payment, abusive behavior, provision of illegal content), after formal notice remaining unsuccessful for 15 days.",
      },
      {
        title: 'Article 13 â Force majeure',
        text: 'Neither party shall be liable for failure to perform its obligations in case of force majeure as defined by article 1218 of the French Civil Code. In case of force majeure, the obligations of the parties are suspended. If the force majeure situation persists beyond 30 days, either party may terminate the contract without compensation.',
      },
      {
        title: 'Article 14 â Confidentiality',
        text: 'Each party agrees to keep confidential the information transmitted by the other party in the context of the project. This confidentiality obligation applies during the contract term and for 2 years after its termination.',
      },
      {
        title: 'Article 15 â Personal data',
        text: "The Provider collects and processes the Client's personal data strictly for the purpose of service execution, in accordance with the General Data Protection Regulation (GDPR). The Client has the right to access, rectify, delete, and transfer their data. To exercise these rights, the Client may contact the Provider at: contact@day1.digital.",
      },
      {
        title: 'Article 16 â Applicable law and disputes',
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
                ? 'Pour toute question relative aux prÃ©sentes CGV, contactez-nous Ã  contact@day1.digital.'
                : 'For any questions regarding these Terms and Conditions, contact us at contact@day1.digital.'}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

