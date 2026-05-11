'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface FooterData {
  closing_en: string;
  closing_fa: string;
  made_by_en: string;
  made_by_fa: string;
  year: string;
}

function AnimatedHeart() {
  return (
    <div className="relative flex items-center justify-center my-8">
      {/* Outer glow rings */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-blush-100 opacity-40"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-blush-200 opacity-50"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      {/* Heart */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1, 1.1, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.14, 0.28, 0.42, 0.7],
        }}
        className="relative text-6xl select-none"
        role="img"
        aria-label="heart"
      >
        ❤️
      </motion.div>
    </div>
  );
}

export default function Footer({ data }: { data: FooterData }) {
  const { isRTL, t } = useLanguage();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden py-20 px-4"
      style={{
        background: 'linear-gradient(to bottom, #FDE8E8 0%, #EDE7F6 60%, #FAF7F2 100%)',
        zIndex: 2,
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #F5C5C5 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 animate-float"
          style={{ background: 'radial-gradient(circle, #D4C5E2 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Animated heart */}
        <AnimatedHeart />

        {/* Closing message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`font-playfair text-3xl md:text-4xl font-bold text-petal-800 mb-3 ${isRTL ? 'font-persian' : ''}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t(data.closing_en, data.closing_fa)}
        </motion.h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6 text-gold-300">
          <span>·</span>
          <span className="text-xl">✿</span>
          <span>·</span>
          <span className="text-xl">♥</span>
          <span>·</span>
          <span className="text-xl">✿</span>
          <span>·</span>
        </div>

        {/* Made by */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-petal-500 text-lg mb-2 ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t(data.made_by_en, data.made_by_fa)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-petal-400 text-sm font-poppins font-light"
        >
          {data.year}
        </motion.p>

        {/* Tiny floral row */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-blush-200 text-2xl mt-8 tracking-widest select-none"
        >
          ✿ ✦ ♥ ✦ ✿
        </motion.p>
      </div>
    </footer>
  );
}
