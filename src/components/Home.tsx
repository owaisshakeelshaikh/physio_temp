import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import TreatmentProcess from './TreatmentProcess';
import PainSelector from './PainSelector';
import Testimonials from './Testimonials';
import VideoTestimonials from './VideoTestimonials';
import AppointmentBooking from './AppointmentBooking';
import Blog from './Blog';
import InstagramReels from './InstagramReels';
import GoogleMap from './GoogleMap';
import CTA from './CTA';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import SEOHead from './SEOHead';
import PageTransition from './PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen dark:bg-darkBg">
        <SEOHead
          title="Home"
          description="Healex Physiotherapy Clinic offers expert physiotherapy services including sports rehabilitation, chronic pain management, and more. Book your appointment today."
        />
        <Navbar />
        <Hero />
        <AboutSection />
        <TreatmentProcess />
        <PainSelector />
        <Testimonials />
        <VideoTestimonials />
        <AppointmentBooking />
        <Blog />
        <InstagramReels />
        <GoogleMap />
        <CTA />
        <ScrollToTop />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Home;
