import { readJsonFile, readMarkdownFile } from '@/lib/content';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import FloatingParticles from '@/components/FloatingParticles';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Letter from '@/components/Letter';
import Reasons from '@/components/Reasons';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

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

interface Photo {
  id: number;
  image: string;
  caption_en: string;
  caption_fa: string;
}

interface Reason {
  id: number;
  icon: string;
  reason_en: string;
  reason_fa: string;
  description_en: string;
  description_fa: string;
}

interface FooterData {
  closing_en: string;
  closing_fa: string;
  made_by_en: string;
  made_by_fa: string;
  year: string;
}

export default function Home() {
  const heroData = readJsonFile<HeroData>('hero.json');
  const photos = readJsonFile<Photo[]>('photos.json');
  const reasons = readJsonFile<Reason[]>('reasons.json');
  const letterEn = readMarkdownFile('message-en.md');
  const letterFa = readMarkdownFile('message-fa.md');
  const footerData = readJsonFile<FooterData>('footer.json');

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        {/* Fixed UI elements */}
        <LanguageToggle />
        <MusicPlayer />
        <FloatingParticles />

        {/* Main content */}
        <main className="relative" style={{ zIndex: 2 }}>
          <Hero data={heroData} />

          <SectionDivider variant="flowers" />

          <Gallery photos={photos} />

          <SectionDivider variant="hearts" />

          <Letter letterEn={letterEn} letterFa={letterFa} />

          <SectionDivider variant="stars" />

          <Reasons reasons={reasons} />

          <SectionDivider variant="flowers" />

          <Footer data={footerData} />
        </main>
      </div>
    </LanguageProvider>
  );
}
