import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import Blog from './Blog';
import InstagramReels from './InstagramReels';
import CTA from './CTA';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
      <Blog />
      <InstagramReels />
      <CTA />
      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
