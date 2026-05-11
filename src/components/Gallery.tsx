'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Lightbox from './Lightbox';

interface Photo {
  id: number;
  image: string;
  caption_en: string;
  caption_fa: string;
}

const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1, -2, 2.5, -1, 3, -3, 1.5];

export default function Gallery({ photos }: { photos: Photo[] }) {
  const { isRTL, t } = useLanguage();
  const [selected, setSelected] = useState<Photo | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());

  const currentIndex = selected ? photos.findIndex((p) => p.id === selected.id) : -1;

  const goPrev = () => {
    if (currentIndex > 0) setSelected(photos[currentIndex - 1]);
    else setSelected(photos[photos.length - 1]);
  };

  const goNext = () => {
    if (currentIndex < photos.length - 1) setSelected(photos[currentIndex + 1]);
    else setSelected(photos[0]);
  };

  return (
    <>
      <section id="gallery" className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-cream-100 to-blush-50" style={{ zIndex: 2 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-dancing text-gold-300 text-2xl mb-2 tracking-wide">our story</p>
          <h2
            className={`font-playfair text-4xl md:text-5xl font-bold text-petal-800 mb-3 ${isRTL ? 'font-persian' : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('A Gallery of Memories', 'گالری خاطرات')}
          </h2>
          <p
            className={`text-petal-500 text-lg max-w-md mx-auto ${isRTL ? 'font-persian' : 'font-cormorant italic'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t(
              'Every photo holds a piece of my heart',
              'هر عکس تکه‌ای از قلبم را در خود دارد'
            )}
          </p>
        </motion.div>

        {/* Polaroid grid */}
        <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, i) => {
            const rotation = ROTATIONS[i % ROTATIONS.length];
            const hasError = imgErrors.has(photo.id);

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 40, rotate: rotation - 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
                className="break-inside-avoid mb-6"
              >
                <button
                  onClick={() => setSelected(photo)}
                  className="polaroid-card w-full text-left cursor-pointer group"
                  style={{ transform: `rotate(${rotation}deg)` }}
                  aria-label={t(photo.caption_en, photo.caption_fa)}
                >
                  {/* Photo area */}
                  <div className="relative w-full aspect-[4/3] bg-blush-50 overflow-hidden">
                    {!hasError ? (
                      <Image
                        src={photo.image}
                        alt={t(photo.caption_en, photo.caption_fa)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() =>
                          setImgErrors((prev) => new Set(prev).add(photo.id))
                        }
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blush-50 to-lavender-50">
                        <span className="text-4xl">📷</span>
                        <span className="text-xs text-petal-400 font-poppins px-3 text-center">
                          Add your photo to /public/photos/
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Polaroid caption area */}
                  <div className="pt-3 pb-1 px-1">
                    <p
                      className={`text-xs text-petal-500 text-center leading-snug ${isRTL ? 'font-persian' : 'font-dancing text-sm'}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      {t(photo.caption_en, photo.caption_fa)}
                    </p>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Lightbox
        photo={selected}
        onClose={() => setSelected(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}
