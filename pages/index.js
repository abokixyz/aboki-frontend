// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBySection from '@/components/TrustedBySection';
import DeveloperCentricSection from '@/components/DeveloperCentricSection';

export default function Home() {
  return (
    <div className="bg-white text-white min-h-screen">
      <Header />
      <Hero />
      <TrustedBySection/>
      <DeveloperCentricSection/>
    </div>
  );
}