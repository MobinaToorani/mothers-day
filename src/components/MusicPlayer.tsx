'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audio.volume = 0.35;

    audio.addEventListener('canplaythrough', () => setAvailable(true));
    audio.addEventListener('error', () => setAvailable(false));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setAvailable(false));
      setPlaying(true);
    }
  };

  if (!available) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.4 }}
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          className="w-12 h-12 rounded-full glass-card shadow-soft flex items-center justify-center text-petal-400 text-lg cursor-default"
          aria-label="No music file found"
        >
          🎵
        </motion.button>

        <AnimatePresence>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              className="absolute bottom-14 right-0 bg-white rounded-xl shadow-card p-3 w-52 text-xs text-petal-500 font-poppins leading-relaxed border border-blush-100"
            >
              Add a <code className="bg-cream-200 px-1 rounded">background.mp3</code> to{' '}
              <code className="bg-cream-200 px-1 rounded">/public/music/</code> to enable music.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4, type: 'spring' }}
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 rounded-full glass-card shadow-soft flex items-center justify-center text-petal-600 text-lg"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-blush-300"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <span>{playing ? '⏸' : '🎵'}</span>
      </motion.button>
    </div>
  );
}
