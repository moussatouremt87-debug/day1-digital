import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  return (
    <main className="bg-charcoal-900 min-h-screen">
      <Navbar />
      <Hero />
      <WaveDivider color="#1E293B" />
      <Services />
      <WaveDivider color="#0F172A" flip />
      <Portfolio />
      <WaveDivider color="#1E293B" />
      <Comparison />
      <WaveDivider color="#0F172A" flip />
      <Pricing />
      <WaveDivider color="#1E293B" />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
