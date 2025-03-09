import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import DataAnalysis from '@/components/sections/DataAnalysis';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <DataAnalysis />
      </main>
      <Footer />
    </div>
  );
}
