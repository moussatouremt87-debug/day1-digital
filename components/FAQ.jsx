'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const content = {
  fr: {
    title: 'Questions FrÃ©quentes',
    subtitle: 'Trouvez les rÃ©ponses Ã  vos questions',
    faqs: [
      {
        question: 'Comment Ã§a marche exactement ?',
        answer:
          'Nous commenÃ§ons par comprendre votre projet lors d\'une courte consultation. Ensuite, notre Ã©quipe crÃ©e votre site en 48h, le teste minutieusement et vous le livre prÃªt Ã  Ãªtre publiÃ©.',
      },
      {
        question: '48h, vraiment possible ?',
        answer:
          'Oui ! 48h est notre rÃ©fÃ©rence pour les projets basiques (landing pages, sites vitrines simples). Pour les projets plus complexes (e-commerce, fonctionnalitÃ©s avancÃ©es), le dÃ©lai peut aller jusqu\'Ã  7 jours maximum. Nous vous communiquons un dÃ©lai prÃ©cis dÃ¨s la validation du devis.',
      },
      {
        question: 'Je peux modifier aprÃ¨s livraison ?',
        answer:
          'Absolument. Tous nos plans incluent la possibilitÃ© de demander des modifications mineures. Avec le plan Business et Premium, vous bÃ©nÃ©ficiez du support 24/7 et de maintenance incluse.',
      },
      {
        question: 'Vous travaillez Ã  DubaÃ¯ ?',
        answer:
          'Oui! Nous servons des clients dans les Ãmirats Arabes Unis, en France et partout dans le monde. Le fuseau horaire n\'est pas un problÃ¨me grÃ¢ce Ã  notre Ã©quipe distribuÃ©e.',
      },
      {
        question: 'Et si je ne suis pas satisfait ?',
        answer:
          'Votre satisfaction est importante pour nous. Si vous n\'Ãªtes pas satisfait du rÃ©sultat dans les 14 jours suivant la livraison, nous effectuons des modifications gratuitement dans la limite du pÃ©rimÃ¨tre initial du projet. Au-delÃ  de cette pÃ©riode, les modifications sont facturÃ©es selon nos tarifs en vigueur.',
      },
      {
        question: 'Pouvez-vous faire des sites plus complets ?',
        answer:
          'Bien sÃ»r ! Nous nous spÃ©cialisons dans les landing pages et sites vitrines, mais nous pouvons aussi crÃ©er des sites e-commerce, plateformes SaaS et autres projets plus complexes. Contactez-nous pour un devis personnalisÃ©.',
      },
    ],
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to your questions',
    faqs: [
      {
        question: 'How does it work exactly?',
        answer:
          'We start by understanding your project during a short consultation. Then, our team creates your website in 48 hours, thoroughly tests it, and delivers it ready to publish.',
      },
      {
        question: 'Really 48 hours possible?',
        answer:
          'Yes! 48 hours is our reference for basic projects (landing pages, simple showcase sites). For more complex projects (e-commerce, advanced features), delivery can take up to 7 days maximum. We provide a precise timeline as soon as the quote is validated.',
      },
      {
        question: 'Can I edit after delivery?',
        answer:
          'Absolutely. All our plans include the ability to request minor modifications. With Business and Premium plans, you get 24/7 support and included maintenance.',
      },
      {
        question: 'Do you work in Dubai?',
        answer:
          'Yes! We serve clients in the UAE, France, and worldwide. Time zones aren\'t a problem thanks to our distributed team.',
      },
      {
        question: 'What if I\'m not satisfied?',
        answer:
          'Your satisfaction matters to us. If you\'re not satisfied with the result within 14 days of delivery, we make modifications for free within the scope of the original project. Beyond this period, modifications are billed at our standard rates.',
      },
      {
        question: 'Can you build more complete websites?',
        answer:
          'Of course! We specialize in landing pages and showcase websites, but we can also create e-commerce sites, SaaS platforms, and other more complex projects. Contact us for a custom quote.',
      },
    ],
  },
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-charcoal-800 last:border-0">
    <button
      onClick={onToggle}
      className="w-full text-left py-6 flex items-center justify-between group hover:bg-charcoal-900/50 transition-colors px-6 -mx-6"
    >
      <span className="text-lg font-semibold text-slate-50 group-hover:text-lime-400 transition-colors">
        {question}
      </span>
      <ChevronDown
        size={20}
        className={`text-lime-400 flex-shrink-0 transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 pb-6"
      >
        <p className="text-slate-400">{answer}</p>
      </motion.div>
    )}
  </div>
);

export default function FAQ() {
  const { language } = useLanguage();
  const t = content[language];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-800/50"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card overflow-hidden"
        >
          {t.faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
