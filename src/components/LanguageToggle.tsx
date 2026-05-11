'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="flex items-center gap-1 glass-card rounded-full px-1.5 py-1.5 shadow-soft">
        <button
          onClick={() => setLanguage('en')}
          className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
          style={{ color: language === 'en' ? '#5C2820' : '#B89080' }}
        >
          {language === 'en' && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-white rounded-full shadow-softer"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}
          <span className="relative z-10 font-poppins">EN</span>
        </button>

        <span className="text-blush-300 text-xs select-none">|</span>

        <button
          onClick={() => setLanguage('fa')}
          className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
          style={{ color: language === 'fa' ? '#5C2820' : '#B89080' }}
        >
          {language === 'fa' && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-white rounded-full shadow-softer"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}
          <span className="relative z-10 font-persian">فارسی</span>
        </button>
      </div>
    </div>
  );
}
