import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
    <div className="min-h-screen dark:bg-darkBg">
      <SEOHead title="Contact" description="Get in touch with Healex Physiotherapy. Book your appointment, call us, or visit our clinic for expert physiotherapy care." />
      <Navbar />
      <Contact />
      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default ContactPage;
