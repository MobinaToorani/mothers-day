'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface Reason {
  id: number;
  icon: string;
  reason_en: string;
  reason_fa: string;
  description_en: string;
  description_fa: string;
}

const CARD_GRADIENTS = [
  'from-blush-50 to-blush-100',
  'from-lavender-50 to-lavender-100',
  'from-gold-100 to-cream-200',
  'from-blush-50 to-lavender-100',
  'from-lavender-100 to-blush-50',
  'from-cream-200 to-gold-100',
  'from-blush-100 to-cream-200',
  'from-lavender-50 to-blush-100',
];

export default function Reasons({ reasons }: { reasons: Reason[] }) {
  const { isRTL, t } = useLanguage();

  return (
    <section
      id="reasons"
      className="relative py-20 px-4 md:px-8"
      style={{ background: 'linear-gradient(to bottom, #FAF7F2, #FDE8E8)', zIndex: 2 }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="font-dancing text-gold-300 text-2xl mb-2 tracking-wide">
          why I love you
        </p>
        <h2
          className={`font-playfair text-4xl md:text-5xl font-bold text-petal-800 mb-3 ${isRTL ? 'font-persian' : ''}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t('Things I Love About You', 'چیزهایی که عاشق‌شان هستم')}
        </h2>
        <p
          className={`text-petal-500 text-lg max-w-md mx-auto ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t(
            'Just a few of the countless reasons you make my world brighter',
            'تنها چند مورد از بی‌شمار دلیلی که دنیایم را روشن‌تر می‌کنی'
          )}
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="reason-card"
          >
            <div
              className={`h-full bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]} rounded-2xl p-6 border border-white/80 shadow-card cursor-default`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                {reason.icon}
              </div>

              {/* Reason title */}
              <h3
                className={`font-semibold text-petal-700 mb-2 text-base leading-snug ${isRTL ? 'font-persian text-right' : 'font-playfair'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t(reason.reason_en, reason.reason_fa)}
              </h3>

              {/* Description */}
              <p
                className={`text-petal-500 text-sm leading-relaxed ${isRTL ? 'font-persian text-right' : 'font-poppins font-light'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t(reason.description_en, reason.description_fa)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
