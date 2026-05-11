'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  emoji: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
}

const EMOJIS = [
  { emoji: '♥', color: '#F5C5C5' },
  { emoji: '✿', color: '#D4C5E2' },
  { emoji: '✦', color: '#C9A96E' },
  { emoji: '❀', color: '#EDA8A8' },
  { emoji: '·', color: '#C9A96E' },
  { emoji: '✾', color: '#D4C5E2' },
  { emoji: '♡', color: '#F5C5C5' },
];

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const items = Array.from({ length: 22 }, (_, i) => {
      const source = EMOJIS[i % EMOJIS.length];
      return {
        id: i,
        x: Math.random() * 100,
        emoji: source.emoji,
        color: source.color,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 14,
        opacity: 0.18 + Math.random() * 0.45,
      };
    });
    setParticles(items);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle select-none"
          style={{
            left: `${p.x}%`,
            bottom: '-60px',
            fontSize: `${p.size}px`,
            color: p.color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
