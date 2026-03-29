'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const content = {
  fr: {
    title: 'Pourquoi Day1?',
    subtitle: 'Comparez nos offres avec les agences traditionnelles',
    rows: [
      {
        feature: 'DÃ©lai de livraison',
        traditional: '2-4 semaines',
        day1: '48h Ã  7 jours',
      },
      {
        feature: 'Prix de base',
        traditional: '3000-10000â¬',
        day1: '800-1800â¬',
      },
      {
        feature: 'Design sur mesure',
        traditional: true,
        day1: true,
      },
      {
        feature: 'Support technique',
        traditional: false,
        day1: true,
      },
      {
        feature: 'SEO inclus',
        traditional: false,
        day1: true,
      },
    ],
  },
  en: {
    title: 'Why Day1?',
    subtitle: 'Compare our offers with traditional agencies',
    rows: [
      {
        feature: 'Delivery time',
        traditional: '2-4 weeks',
        day1: '48h to 7 days',
      },
      {
        feature: 'Base price',
        traditional: '3000-10000â¬',
        day1: '800-1800â¬',
      },
      {
        feature: 'Custom design',
        traditional: true,
        day1: true,
      },
      {
        feature: 'Technical support',
        traditional: false,
        day1: true,
      },
      {
        feature: 'SEO included',
        traditional: false,
        day1: true,
      },
    ],
  },
};

export default function Comparison() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-800/50">
      <div className="max-w-4xl mx-auto">
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal-800">
                  <th className="px-6 py-4 text-left text-slate-50 font-semibold">
                    CritÃ¨res
                  </th>
                  <th className="px-6 py-4 text-left text-slate-400">
                    {language === 'fr' ? 'Agences traditionnelles' : 'Traditional agencies'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-lime-400 font-semibold">Day1.digital</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-charcoal-800 hover:bg-charcoal-900/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-50 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <Check size={20} className="text-lime-500" />
                        ) : (
                          <X size={20} className="text-red-500" />
                        )
                      ) : (
                        row.traditional
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-50 font-medium">
                      {typeof row.day1 === 'boolean' ? (
                        row.day1 ? (
                          <Check size={20} className="text-lime-400" />
                        ) : (
                          <X size={20} className="text-red-500" />
                        )
                      ) : (
                        <span className="text-lime-400">{row.day1}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
