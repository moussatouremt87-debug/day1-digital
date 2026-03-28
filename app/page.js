import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-charcoal-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Comparison />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
