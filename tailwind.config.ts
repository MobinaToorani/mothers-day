import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          50: '#FFFDF9',
          100: '#FAF7F2',
          200: '#F5EFE4',
          300: '#EDE3D0',
          400: '#DDD0BA',
        },
        blush: {
          DEFAULT: '#F5C5C5',
          50: '#FDF4F4',
          100: '#FAE0E0',
          200: '#F5C5C5',
          300: '#EDA8A8',
          400: '#E08080',
          500: '#C96060',
          600: '#A84848',
        },
        lavender: {
          DEFAULT: '#D4C5E2',
          50: '#F9F5FD',
          100: '#EDE7F6',
          200: '#D4C5E2',
          300: '#B8A0D0',
          400: '#9A7DB8',
          500: '#7A5A9A',
        },
        gold: {
          DEFAULT: '#C9A96E',
          100: '#F5EDD8',
          200: '#E8D5A8',
          300: '#C9A96E',
          400: '#B08A45',
          500: '#8B6A28',
        },
        petal: {
          50: '#FAF0EE',
          100: '#F5E0DC',
          200: '#E8C4BC',
          300: '#D0988C',
          400: '#B87060',
          500: '#9A5048',
          600: '#7A3830',
          700: '#5C2820',
          800: '#401510',
          900: '#280808',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
        persian: ['var(--font-vazirmatn)', 'Tahoma', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'float-reverse': 'floatReverse 11s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'gradient': 'gradientShift 18s ease infinite',
        'spin-slow': 'spin 25s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'rise': 'rise 12s linear infinite',
        'sway': 'sway 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-4deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.25)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.2)' },
          '70%': { transform: 'scale(1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.7)' },
          '50%': { opacity: '0.9', transform: 'scale(1.2)' },
        },
        rise: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-20vh) rotate(720deg)', opacity: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0) rotate(-8deg)' },
          '50%': { transform: 'translateX(12px) rotate(8deg)' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(240, 180, 180, 0.25)',
        'softer': '0 2px 12px rgba(240, 180, 180, 0.15)',
        'glow-pink': '0 0 40px rgba(245, 197, 197, 0.6), 0 0 80px rgba(245, 197, 197, 0.2)',
        'glow-lavender': '0 0 40px rgba(212, 197, 226, 0.6)',
        'glow-gold': '0 0 30px rgba(201, 169, 110, 0.35)',
        'polaroid': '0 6px 20px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.06)',
        'polaroid-hover': '0 16px 40px rgba(0, 0, 0, 0.14), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 36px rgba(200, 140, 140, 0.12)',
        'card-hover': '0 20px 60px rgba(200, 140, 140, 0.22)',
        'letter': '0 4px 60px rgba(200, 140, 140, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5C2820',
            lineHeight: '2',
            p: { marginBottom: '1.5em' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
