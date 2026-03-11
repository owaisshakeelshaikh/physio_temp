import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
