'use client';

import { useLanguage } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  fr: {
    title: 'Conditions Générales de Vente',
    lastUpdate: 'Dernière mise Ã  jour : 29 mars 2026',
    sections: [
      {
        title: 'Article 1 â Objet',
        text: `Les présentes Conditions Générales de Vente (ci-après "CGV") régissent l'ensemble des prestations de services fournies par Day1.digital (ci-après "le Prestataire") Ã  ses clients (ci-après "le Client"). Toute commande implique l'acceptation sans réserve des présentes CGV. Le Prestataire se réserve le droit de modifier les CGV Ã  tout moment, les conditions applicables étant celles en vigueur Ã  la date de la commande.`,
      },
      {
        title: 'Article 2 â Prestations',
        text: `Le Prestataire propose des services de création de sites web, landing pages, sites vitrines, sites e-commerce, design UI/UX, référencement (SEO), maintenance et support technique. La nature et l'étendue des prestations sont définies dans le devis validé par le Client. Toute prestation non mentionnée dans le devis fera l'objet d'un avenant et d'une facturation complémentaire.`,
      },
      {
        title: 'Article 3 â Devis et commande',
        text: `Tout projet fait l'objet d'un devis préalable gratuit et détaillé. Le devis est valable 30 jours Ã  compter de sa date d'émission. La commande est considérée comme ferme et définitive après acceptation écrite du devis par le Client (email ou signature) et versement de l'acompte prévu. Aucun travail ne débutera avant réception de l'acompte.`,
      },
      {
        title: 'Article 4 â Tarifs et paiement',
        text: `Les prix sont indiqués en euros (EUR) et sont nets de taxes (micro-entreprise non assujettie Ã  la TVA, article 293 B du CGI, le cas échéant). Un acompte de 50% du montant total est exigé Ã  la commande. Le solde est dû Ã  la livraison du projet, avant mise en ligne définitive. En cas de retard de paiement, des pénalités de retard au taux de 3 fois le taux d'intérêt légal seront appliquées de plein droit, sans mise en demeure préalable, ainsi qu'une indemnité forfaitaire de 40 euros pour frais de recouvrement. Le Prestataire se réserve le droit de suspendre toute prestation en cours en cas de non-paiement.`,
      },
      {
        title: 'Article 5 â Délais de livraison',
        text: `Le délai de livraison est communiqué au Client lors de la validation du devis. Ã titre indicatif : 48 heures pour les projets basiques (landing pages, sites vitrines simples) et jusqu'Ã  7 jours maximum pour les projets plus complexes (e-commerce, fonctionnalités avancées). Ces délais courent Ã  compter de la réception de l'acompte ET de l'ensemble des éléments nécessaires Ã  la réalisation (contenus, textes, images, accès). Tout retard imputable au Client (retard dans la fourniture des éléments, délai de validation excessif) suspend les délais de livraison. Le dépassement des délais par le Prestataire ne donne droit Ã  aucune remise, indemnité ou prestation gratuite.`,
      },
      {
        title: 'Article 6 â Obligations du Client',
        text: `Le Client s'engage Ã  fournir dans les délais convenus tous les éléments nécessaires Ã  la réalisation du projet (textes, images, logos, accès aux outils et hébergements). Le Client garantit qu'il dispose des droits de propriété intellectuelle sur les éléments fournis. Tout retard ou défaut dans la fourniture de ces éléments pourra entraîner un report des délais et/ou une facturation supplémentaire. Le Client s'engage Ã  désigner un interlocuteur unique pour la validation des étapes du projet.`,
      },
      {
