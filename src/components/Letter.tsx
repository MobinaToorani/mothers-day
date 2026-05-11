'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '@/context/LanguageContext';

interface LetterProps {
  letterEn: string;
  letterFa: string;
}

export default function Letter({ letterEn, letterFa }: LetterProps) {
  const { isRTL, t } = useLanguage();
  const content = isRTL ? letterFa : letterEn;

  return (
    <section
      id="letter"
      className="relative py-20 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #FDE8E8 0%, #FAF7F2 40%, #F0EBF8 100%)',
        zIndex: 2,
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, #F5C5C5 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, #D4C5E2 0%, transparent 40%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="font-dancing text-gold-300 text-2xl mb-2 tracking-wide">with all my heart</p>
          <h2
            className={`font-playfair text-4xl md:text-5xl font-bold text-petal-800 mb-3 ${isRTL ? 'font-persian' : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('A Letter to Mom', 'نامه‌ای برای مامان')}
          </h2>
          <p
            className={`text-petal-500 text-lg ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('Words from the deepest corner of my heart', 'کلماتی از عمیق‌ترین گوشه‌ی قلبم')}
          </p>
        </div>

        {/* Letter card */}
        <div className="relative">
          {/* Shimmer glow */}
          <div
            className="absolute -inset-px rounded-3xl opacity-50 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(245,197,197,0.4) 0%, rgba(212,197,226,0.4) 50%, rgba(201,169,110,0.2) 100%)',
              filter: 'blur(8px)',
            }}
          />

          <motion.div
            className="relative paper-texture rounded-3xl shadow-letter border border-blush-100 overflow-hidden"
            style={{ zIndex: 1 }}
          >
            {/* Top decorative border */}
            <div
              className="h-2 w-full"
              style={{
                background: 'linear-gradient(to right, #F5C5C5, #D4C5E2, #C9A96E, #D4C5E2, #F5C5C5)',
              }}
            />

            {/* Decorative corner element */}
            <div className="absolute top-6 left-6 text-blush-200 text-4xl opacity-50 select-none">✿</div>
            <div className="absolute top-6 right-6 text-lavender-200 text-4xl opacity-50 select-none">✿</div>

            {/* Letter content */}
            <div className="px-8 md:px-16 py-12 md:py-16">
              <div
                className={`
                  ${isRTL ? 'letter-body-rtl font-persian text-right' : 'letter-body'}
                  prose prose-lg max-w-none
                `}
                dir={isRTL ? 'rtl' : 'ltr'}
                style={{
                  color: '#5C2820',
                  lineHeight: '2',
                  fontSize: isRTL ? '1.05rem' : '1.075rem',
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p
                        className={`mb-6 leading-8 ${isRTL ? 'font-persian text-right' : 'font-cormorant text-left'}`}
                        style={{ color: '#5C2820' }}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      >
                        {children}
                      </p>
                    ),
                    em: ({ children }) => (
                      <em
                        className={isRTL ? 'font-persian not-italic text-blush-500' : 'font-cormorant italic text-blush-500'}
                      >
                        {children}
                      </em>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-petal-700">{children}</strong>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Bottom decorative border */}
            <div className="flex items-center justify-center pb-8 gap-3 text-gold-300">
              <span className="text-sm">✦</span>
              <span className="text-lg">✿</span>
              <span className="text-sm">✦</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
