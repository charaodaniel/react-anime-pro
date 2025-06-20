import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SponsorSection from './components/SponsorSection';
import ContentSection from './components/ContentSection/ContentSection';
import LiveSection from './components/LiveSection';
import SocialButtons from './components/SocialButtons';
import MobileSocialBar from './components/MobileSocialBar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the title
    document.title = "React Anime Pro | Patrocine seus animes favoritos";
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <HeroSection />
      <SocialButtons />
      <MobileSocialBar />
      <SponsorSection />
      <ContentSection />
      <LiveSection />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;