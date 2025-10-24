import { Hero } from '@/components/hero';
import { BookPreview } from '@/components/book-preview';
import { Benefits } from '@/components/benefits';
import { Testimonials } from '@/components/testimonials';
import { AuthorBio } from '@/components/author-bio';
import { FAQ } from '@/components/faq';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <BookPreview />
      <Benefits />
      <Testimonials />
      <AuthorBio />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
