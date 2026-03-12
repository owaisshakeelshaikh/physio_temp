import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
