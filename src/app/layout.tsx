import type { Metadata } from 'next';
import {
  Playfair_Display,
  Cormorant_Garamond,
  Poppins,
  Dancing_Script,
  Vazirmatn,
} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Happy Mother's Day | روز مادر مبارک",
  description: 'A heartfelt tribute to the most wonderful mother in the world.',
  openGraph: {
    title: "Happy Mother's Day",
    description: 'A heartfelt tribute in English and Persian.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${playfair.variable}
        ${cormorant.variable}
        ${poppins.variable}
        ${dancing.variable}
        ${vazirmatn.variable}
      `}
    >
      <body className="font-poppins bg-cream-100 text-petal-700 antialiased">
        {children}
      </body>
    </html>
  );
}
