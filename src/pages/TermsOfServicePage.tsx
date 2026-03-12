import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';

const TermsOfServicePage: React.FC = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg">
      <SEOHead title="Terms of Service" description="Terms and conditions for using RestoreFlex Physiotherapy services." />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-teal-100">Terms and conditions for using our services</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using RestoreFlex Physiotherapy services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Medical Services</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  RestoreFlex Physiotherapy provides professional physiotherapy and rehabilitation services. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Initial assessment and diagnosis</li>
                  <li>Personalized treatment plans</li>
                  <li>Manual therapy and exercise prescription</li>
                  <li>Rehabilitation programs</li>
                  <li>Preventive care and education</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Patient Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Provide accurate and complete medical history</li>
                <li>Follow prescribed treatment plans</li>
                <li>Attend scheduled appointments or provide timely cancellation</li>
                <li>Inform us of any changes in your health condition</li>
                <li>Pay for services as per agreed terms</li>
                <li>Treat staff and other patients with respect</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Appointment Policy</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Cancellations</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We require at least 24 hours notice for appointment cancellations. Late cancellations or no-shows 
                  may be subject to a cancellation fee.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Late Arrivals</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you arrive more than 15 minutes late, we may need to reschedule your appointment to ensure 
                  adequate treatment time.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Payment and Insurance</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Payment is due at the time of service unless other arrangements have been made</li>
                <li>We accept various insurance plans; please verify your coverage before your visit</li>
                <li>You are responsible for any co-pays, deductibles, or non-covered services</li>
                <li>Unpaid balances may be subject to collection procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Medical Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The information provided on our website and during consultations is for educational purposes only 
                and should not be considered as medical advice. Always consult with a qualified healthcare provider 
                for medical concerns.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In case of emergency, call 911 or visit your nearest emergency department immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                RestoreFlex Physiotherapy shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our services, including but not limited to damages for 
                loss of profits, data, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to refuse service to anyone for any reason, including but not limited to 
                violation of these terms, disruptive behavior, or failure to follow treatment recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting on our website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> info@RestoreFlex.com</p>
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

export default TermsOfServicePage;
