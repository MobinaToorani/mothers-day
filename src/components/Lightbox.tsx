'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface Photo {
  id: number;
  image: string;
  caption_en: string;
  caption_fa: string;
}

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  const { isRTL, t } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (photo) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [photo]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-petal-900/80 backdrop-blur-md" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Photo frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={photo.image}
                alt={t(photo.caption_en, photo.caption_fa)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Caption */}
            <div className="mt-5 text-center">
              <p
                className={`text-white/90 text-lg ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t(photo.caption_en, photo.caption_fa)}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={onPrev}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-all duration-200 hover:scale-110 text-sm"
                aria-label="Close"
              >
                ✕
              </button>
              <button
                onClick={onNext}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
