'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface HeroData {
  title_en: string;
  title_fa: string;
  subtitle_en: string;
  subtitle_fa: string;
  message_en: string;
  message_fa: string;
  featured_photo: string;
  scroll_button_en: string;
  scroll_button_fa: string;
}

export default function Hero({ data }: { data: HeroData }) {
  const { language, isRTL, t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">

      {/* Soft ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #FDE8E8 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25 animate-float"
          style={{ background: 'radial-gradient(circle, #EDE7F6 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 animate-float-reverse"
          style={{ background: 'radial-gradient(circle, #FFF4EC 0%, transparent 70%)' }}
        />
      </div>

      <div
        className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center"
        style={{ zIndex: 2 }}
      >
        {/* Featured Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          {/* Outer decorative rings */}
          <div
            className="absolute -inset-6 rounded-full border border-blush-200 opacity-50 animate-spin-slow"
            style={{ borderStyle: 'dashed' }}
          />
          <div className="absolute -inset-3 rounded-full border border-lavender-200 opacity-40" />

          {/* Photo circle */}
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-glow-pink">
            {!imgError ? (
              <Image
                src={data.featured_photo}
                alt="Featured memory"
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                priority
                sizes="(max-width: 768px) 176px, 240px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blush-100 to-lavender-100">
                <span
                  className="text-6xl md:text-7xl"
                  role="img"
                  aria-label="flowers"
                >
                  💐
                </span>
              </div>
            )}
          </div>

          {/* Sparkle accents */}
          <div className="absolute -top-1 -right-1 text-gold-300 text-lg animate-twinkle">✦</div>
          <div className="absolute -bottom-2 -left-1 text-blush-300 text-sm animate-twinkle" style={{ animationDelay: '1s' }}>✿</div>
        </motion.div>

        {/* English title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-playfair text-5xl md:text-7xl font-bold text-petal-800 leading-tight mb-2 text-shadow-soft"
        >
          {data.title_en}
        </motion.h1>

        {/* Persian title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-persian text-3xl md:text-5xl font-bold text-blush-400 leading-tight mb-8"
          dir="rtl"
        >
          {data.title_fa}
        </motion.h1>

        {/* Floral divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4 mb-7"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blush-300" />
          <span className="text-gold-300 text-2xl">✿</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blush-300" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className={`text-xl md:text-2xl text-petal-500 mb-5 max-w-xl ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t(data.subtitle_en, data.subtitle_fa)}
        </motion.p>

        {/* Main message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className={`text-base md:text-lg text-petal-600 mb-12 max-w-lg leading-relaxed font-light ${isRTL ? 'font-persian' : 'font-poppins'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t(data.message_en, data.message_fa)}
        </motion.p>

        {/* Scroll CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          onClick={scrollToGallery}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`group inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-blush-200 text-petal-700 px-8 py-4 rounded-full shadow-soft hover:shadow-card hover:bg-white transition-all duration-400 ${isRTL ? 'font-persian flex-row-reverse' : 'font-poppins'}`}
        >
          <span className="text-sm font-medium tracking-wide">
            {t(data.scroll_button_en, data.scroll_button_fa)}
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-blush-400 text-base"
            style={isRTL ? { transform: 'rotate(180deg)' } : {}}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
