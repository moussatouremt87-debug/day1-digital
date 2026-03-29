'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const content = {
  fr: {
    title: 'Questions Fréquentes',
    subtitle: 'Trouvez les réponses Ã  vos questions',
    faqs: [
      {
        question: 'Comment ça marche exactement ?',
        answer:
          'Nous commençons par comprendre votre projet lors d\'une courte consultation. Ensuite, notre équipe crée votre site en 48h, le teste minutieusement et vous le livre prêt Ã  être publié.',
      },
      {
        question: '48h, vraiment possible ?',
        answer:
          'Oui ! 48h est notre référence pour les projets basiques (landing pages, sites vitrines simples). Pour les projets plus complexes (e-commerce, fonctionnalités avancées), le délai peut aller jusqu\'Ã  7 jours maximum. Nous vous communiquons un délai précis dès la validation du devis.',
      },
      {
        question: 'Je peux modifier après livraison ?',
        answer:
          'Absolument. Tous nos plans incluent la possibilité de demander des modifications mineures. Avec le plan Business et Premium, vous bénéficiez du support 24/7 et de maintenance incluse.',
      },
      {
        question: 'Vous travaillez Ã  Dubaï ?',
        answer:
          'Oui! Nous servons des clients dans les Ãmirats Arabes Unis, en France et partout dans le monde. Le fuseau horaire n\'est pas un problème grÃ¢ce Ã  notre équipe distribuée.',
      },
      {
        question: 'Et si je ne suis pas satisfait ?',
        answer:
          'Votre satisfaction est importante pour nous. Si vous n\'êtes pas satisfait du résultat dans les 14 jours suivant la livraison, nous effectuons des modifications gratuitement dans la limite du périmètre initial du projet. Au-delÃ  de cette période, les modifications sont facturées selon nos tarifs en vigueur.',
