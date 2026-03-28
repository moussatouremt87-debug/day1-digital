'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const content = {
  fr: {
    title: 'Questions Fréquentes',
    subtitle: 'Trouvez les réponses à vos questions',
    faqs: [
      { question: 'Comment ça marche exactement?', answer: 'Nous commençons par comprendre votre projet lors d\'une courte consultation. Ensuite, notre équipe crée votre site en 48h, le teste minutieusement et vous le livre prêt à être publié.' },
      { question: '48h vraiment possible?', answer: 'Oui! Grâce à notre processus optimisé et nos templates hautement personnalisables, nous créons des sites exceptionnels en 48 heures. Nous garantissons les délais ou c\'est gratuit.' },
      { question: 'Je peux modifier après livraison?', answer: 'Absolument. Tous nos plans incluent la possibilité de demander des modifications mineures. Avec le plan Business et Premium, vous bénéficiez du support 24/7 et de maintenance incluse.' },
      { question: 'Vous travaillez à Dubai?', answer: 'Oui! Nous servons des clients dans les Émirats Arabes Unis, en France et partout dans le monde. Le fuseau horaire n\'est pas un problème grâce à notre équipe distribuée.' },
      { question: 'Et si je ne suis pas satisfait?', answer: 'Votre satisfaction est notre priorité. Si vous n\'êtes pas satisfait du résultat dans les 14 jours suivants la livraison, nous effectuons les modifications gratuitement jusqu\'\u00e0 votre satisfaction.' },
      { question: 'Pouvez-vous faire des sites plus complets?', answer: 'Bien sûr! Nous spécialisons dans les landing pages et sites vitrines, mais nous pouvons aussi créer des sites e-commerce, plateformes SaaS et autres projets plus complexes. Contactez-nous pour un devis personnalisé.' },
    ],
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to your questions',
    faqs: [
      { question: 'How does it work exactly?', answer: 'We start by understanding your project during a short consultation. Then, our team creates your website in 48 hours, thoroughly tests it, and delivers it ready to publish.' },
      { question: 'Really 48 hours possible?', answer: 'Yes! Thanks to our optimized process and highly customizable templates, we create exceptional websites in 48 hours. We guarantee delivery times or it\'s free.' },
      { question: 'Can I edit after delivery?', answer: 'Absolutely. All our plans include the ability to request minor modifications. With Business and Premium plans, you get 24/7 support and included maintenance.' },
      { question: 'Do you work in Dubai?', answer: 'Yes! We serve clients in the UAE, France, and worldwide. Time zones aren\'t a problem thanks to our distributed team.' },
      { question: 'What if I\'m not satisfied?', answer: 'Your satisfaction is our priority. If you\'re not satisfied with the result within 14 days of delivery, we make modifications for free until you\'re happy.' },
      { question: 'Can you build more complete websites?', answer: 'Of course! We specialize in landing pages and showcase websites, but we can also create e-commerce sites, SaaS platforms, and other more complex projects. Contact us for a custom quote.' },
    ],
  },
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-charcoal-800 last:border-0">
    <button onClick={onToggle} className="w-full text-left py-6 flex items-center justify-between group hover:bg-charcoal-900/50 transition-colors px-6 -mx-6">
      <span className="text-lg font-semibold text-slate-50 group-hover:text-lime-400 transition-colors">{question}</span>
      <ChevronDown size={20} className={`text-lime-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="px-6 pb-6">
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
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-800/50">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="card overflow-hidden">
          {t.faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
      }
