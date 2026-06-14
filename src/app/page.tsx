import SplitHero from '@/components/home/SplitHero';
import TrustBadges from '@/components/home/TrustBadges';
import ShopByCategoryStrip from '@/components/home/ShopByCategoryStrip';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyPetWago from '@/components/home/WhyPetWago';
import FeaturedCollectionBanner from '@/components/home/FeaturedCollectionBanner';
import Testimonials from '@/components/home/Testimonials';
import NewsletterBand from '@/components/home/NewsletterBand';

export default function HomePage() {
  return (
    <main>
      <SplitHero />
      <TrustBadges />
      <ShopByCategoryStrip />
      <FeaturedProducts />
      <WhyPetWago />
      <FeaturedCollectionBanner />
      <Testimonials />
      <NewsletterBand />
    </main>
  );
}
