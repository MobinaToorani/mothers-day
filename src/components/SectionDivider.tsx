'use client';

interface SectionDividerProps {
  variant?: 'flowers' | 'stars' | 'hearts';
}

export default function SectionDivider({ variant = 'flowers' }: SectionDividerProps) {
  const center =
    variant === 'hearts'
      ? '♥'
      : variant === 'stars'
      ? '✦'
      : '✿';

  return (
    <div className="flex items-center justify-center py-10 px-6 gap-4 select-none">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent max-w-xs" />
      <div className="flex items-center gap-3 text-blush-300">
        <span className="text-sm opacity-60">·</span>
        <span className="text-lg text-gold-300 animate-pulse-soft">{center}</span>
        <span className="text-sm opacity-60">·</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blush-200 to-transparent max-w-xs" />
    </div>
  );
}
