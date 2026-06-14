import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = { title: 'About PetWago — Premium Pet Food & Supplies' };

function StoryRow({
  title,
  paragraphs,
  bullets,
  image,
  imageAlt,
  imageLeft = false,
  bg = 'white',
}: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  bg?: 'white' | 'gray';
}) {
  const bgClass = bg === 'gray' ? 'bg-cream' : 'bg-white';

  const textBlock = (
    <div>
      <h3 className="font-serif text-2xl font-bold text-charcoal mb-4 leading-tight">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-muted leading-relaxed mb-3 text-sm">{p}</p>
      ))}
      {bullets && (
        <ul className="mt-1 space-y-2 marker:text-terracotta">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-terracotta font-bold mt-0.5 flex-shrink-0">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative h-72 lg:h-96 rounded-sm overflow-hidden border border-border">
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );

  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imageLeft ? imageBlock : textBlock}
          {imageLeft ? textBlock : imageBlock}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-5">
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} dark />
          </div>
          <div className="grid lg:grid-cols-2 min-h-[420px] items-center gap-8 py-10 lg:py-0">

            {/* LEFT — text */}
            <div className="py-4 lg:py-12">
              <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream leading-tight mb-5 border-b-2 border-terracotta/40 pb-5 inline-block">
                About PetWago
              </h1>
              <p className="text-cream/60 text-base leading-relaxed mb-6 max-w-lg">
                Our premium recipes are always purposefully crafted with real ingredients.
                We know it&apos;s not just food in that bowl — it&apos;s love. And that&apos;s why
                it has to be the best.
              </p>
              <Link
                href="/dog/food"
                className="inline-block bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-7 py-3 rounded-sm text-sm transition-colors duration-200"
              >
                Shop Premium Food
              </Link>
            </div>

            {/* RIGHT — image */}
            <div className="relative h-[320px] lg:h-[420px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=700&fit=crop"
                alt="Happy dog"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 1: Mission — text LEFT, image RIGHT ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2">Our Mission</p>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-4 leading-tight">
                Committed to Quality Nutrition for Over 10 Years
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                When you&apos;re committed to the wellbeing of your pet, no food could ever be too natural,
                nutritious, or delicious. Believe us, we get it. That&apos;s how we got our start.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                PetWago was born from a passion for real pet nutrition. We curate only the best
                premium pet food brands — ones that share our commitment to real ingredients,
                transparent sourcing, and scientifically-backed nutrition.
              </p>
              <p className="text-muted leading-relaxed">
                We&apos;ve grown quite a bit since then — but we still hold true to the vision and
                beliefs that started it all. At PetWago, we work hard to help every pet live the
                healthiest, happiest life possible.
              </p>
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop"
                alt="Person feeding dog"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Guarantee — image LEFT, text RIGHT ── */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-sm overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=600&fit=crop"
                alt="Happy dog eating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-charcoal rounded-sm flex items-center justify-center border-4 border-cream">
                <div className="text-center px-1">
                  <p className="text-terracotta text-[8px] font-bold uppercase leading-tight">100%</p>
                  <p className="text-cream text-[7px] font-bold uppercase leading-tight">Satisfaction</p>
                  <p className="text-cream text-[7px] font-bold uppercase leading-tight">Guarantee</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2">Our Promise</p>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-4 leading-tight">
                The PetWago 100%<br />Satisfaction Guarantee
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                At PetWago, we promise your pet will not only love the taste of our food — they&apos;ll
                be happy and healthy as well. That&apos;s why if you (or your pet) are not 100%
                absolutely, totally, completely satisfied, return it for your money back.
              </p>
              <p className="text-muted leading-relaxed">
                We don&apos;t just stock the best food ever. We stand behind it with our full
                30-day hassle-free return policy.
              </p>
              <Link href="/refund-policy" className="inline-block mt-6 text-sage hover:text-sage-dark font-semibold text-sm hover:underline">
                Read our Return Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROMISE HEADER ── */}
      <section className="bg-white py-16 text-center border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3">What We Stand For</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
            Our 5 Star Promise for Premium Pet Food
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            PetWago is committed to working hard to improve the lives of pets and their parents by
            delivering complete and balanced nutrition for all dog and cat life stages.
          </p>
        </div>
      </section>

      {/* ── PROMISE ROWS ── */}
      <StoryRow
        title="Real Whole Nutrition"
        paragraphs={[
          'We promise that MMPetMart prioritizes real whole nutrition. We believe that worthwhile pet food includes balanced nutrition — so we blend together the ideal balance of ingredients, vitamins, minerals, nutrients, and flavors that your pet will love to eat and you will feel confident in feeding.',
        ]}
        image="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&h=600&fit=crop"
        imageAlt="Real nutrition"
        imageLeft={false}
        bg="white"
      />

      <StoryRow
        title="Recognizable Ingredients"
        paragraphs={[
          'We promise to always use recognizable ingredients, including the best possible blend of real meats, fruits, and veggies that we meticulously choose ourselves.',
          'We maintain the highest commitment to both freshness and safety, ensuring our ingredients never include artificial preservatives, additives, or sweeteners.',
        ]}
        image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop"
        imageAlt="Real ingredients"
        imageLeft={true}
        bg="gray"
      />

      <StoryRow
        title="Health That Matters"
        paragraphs={[
          "We promise to expertly tailor our recipes to support whole health, because it's your pet's health that matters most. We include:",
        ]}
        bullets={[
          'High levels of Omega-6 and Omega-3 Fatty Acids for healthy skin and coats.',
          'High levels of Glucosamine and Chondroitin to support healthy hips and joints.',
          'High quality proteins to support lean muscle mass and balanced nutrition in every recipe.',
        ]}
        image="https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop"
        imageAlt="Pet health"
        imageLeft={false}
        bg="white"
      />

      <StoryRow
        title="Crafted with Care"
        paragraphs={[
          'We promise to always craft our recipes with the same care and love as our founders.',
          "Our team spends time carefully conceiving and crafting each premium recipe to ensure we're producing the most authentic, delicious, and high-quality food for your pet.",
        ]}
        image="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop"
        imageAlt="Crafted with care"
        imageLeft={true}
        bg="gray"
      />

      <StoryRow
        title="PetWago Gives Back"
        paragraphs={[
          'We promise to always give back.',
          'Pets are an essential piece of our lives. They bring so much comfort, joy, and purpose to our families and communities. We support local and national organizations that share our passion for pets.',
        ]}
        image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop"
        imageAlt="Community"
        imageLeft={false}
        bg="white"
      />

      {/* ── BOTTOM CTA ── */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-3">Ready to Spoil Your Pet?</h2>
          <p className="text-cream/50 mb-8">Explore our full range of premium pet food and supplies.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/dog/food"
              className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors duration-200"
            >
              Shop Dog Food
            </Link>
            <Link
              href="/cat/food"
              className="bg-cream/10 hover:bg-cream/20 text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors border border-cream/20"
            >
              Shop Cat Food
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
