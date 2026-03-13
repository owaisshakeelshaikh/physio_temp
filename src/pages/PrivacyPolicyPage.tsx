import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg">
      <SEOHead title="Privacy Policy" description="Healex Physiotherapy privacy policy - learn how we collect, use, and protect your personal information." />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-teal-100">Your privacy is important to us</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 border border-transparent dark:border-darkBorder">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At Healex Physiotherapy, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Name and contact details</li>
                    <li>Medical history and health information</li>
                    <li>Appointment schedules</li>
                    <li>Insurance information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>To provide physiotherapy services</li>
                <li>To schedule and manage appointments</li>
                <li>To communicate with you about your treatment</li>
                <li>To process payments and insurance claims</li>
                <li>To improve our services and website functionality</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Protection</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. All medical records are stored securely and access is restricted 
                to authorized personnel only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Obtain a copy of your medical records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as required by law or necessary to provide our services (e.g., insurance companies, healthcare providers).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> privacy@healex.com</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> 123 Health Street, Medical District, City, State 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;
