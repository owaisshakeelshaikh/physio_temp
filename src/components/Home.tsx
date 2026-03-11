import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import Blog from './Blog';
import CTA from './CTA';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
