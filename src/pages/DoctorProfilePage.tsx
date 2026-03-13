import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const doctor = {
  name: 'Dr. Arjun Mehta',
  slug: 'dr-arjun-mehta',
  title: 'Senior Physiotherapist & Clinic Director',
  photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  experience: '15+ Years',
  patients: '10,000+',
  rating: '4.9',
  bio: 'Dr. Arjun Mehta is a highly skilled physiotherapist with over 15 years of clinical experience. He founded Healex Physiotherapy with a vision to provide world-class, evidence-based physiotherapy care that transforms lives. His approach combines cutting-edge techniques with compassionate patient care.',
  education: [
    { degree: 'Doctor of Physical Therapy (DPT)', institution: 'Johns Hopkins University', year: '2009' },
    { degree: 'Master of Science in Sports Medicine', institution: 'Stanford University', year: '2006' },
    { degree: 'Bachelor of Physiotherapy (BPT)', institution: 'AIIMS Delhi', year: '2004' },
  ],
  certifications: [
    'Board Certified Orthopedic Clinical Specialist (OCS)',
    'Certified Sports Clinical Specialist (SCS)',
    'McKenzie Method Certified (MDT)',
    'Dry Needling Certification (DN)',
    'Advanced Manual Therapy Certification',
  ],
  specializations: [
    'Sports Injury Rehabilitation',
    'Orthopedic Physiotherapy',
    'Spinal Rehabilitation',
    'Post-Surgical Recovery',
    'Chronic Pain Management',
    'Performance Enhancement',
  ],
  testimonials: [
    {
      name: 'Vikram Singh',
      text: 'Dr. Mehta is exceptional. After my ACL surgery, he had me back on the cricket pitch in 6 months. His knowledge and dedication are unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Meera Joshi',
      text: 'I had been suffering from chronic neck pain for years. Dr. Mehta diagnosed the root cause in my first visit and created a treatment plan that changed my life.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Suresh Reddy',
      text: 'Professional, caring, and incredibly knowledgeable. Dr. Mehta helped my 70-year-old mother regain mobility after her hip replacement. Truly grateful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ],
};

const DoctorProfilePage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroVisible } = useScrollAnimation();
  const { ref: eduRef, isIntersecting: eduVisible } = useScrollAnimation();
  const { ref: testimonialRef, isIntersecting: testimonialVisible } = useScrollAnimation();

  return (
    <PageTransition>
      <div className="min-h-screen dark:bg-darkBg">
        <SEOHead
          title={doctor.name}
          description={`${doctor.name} - ${doctor.title} at Healex Physiotherapy. ${doctor.experience} experience, ${doctor.patients} patients treated.`}
          ogUrl={`https://healex.com/doctor/${doctor.slug}`}
        />
        <Navbar />

        {/* Hero */}
        <section ref={heroRef} className={`relative bg-gradient-to-br from-primary to-primary/90 py-20 ${heroVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${heroVisible ? 'animate-fadeInLeft' : ''}`}>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wide mb-2">Meet Our Expert</div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-poppins mb-4">{doctor.name}</h1>
                <p className="text-xl text-white/90 mb-6">{doctor.title}</p>
                <p className="text-white/80 mb-8 leading-relaxed">{doctor.bio}</p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{doctor.experience}</div>
                    <div className="text-white/70 text-xs">Experience</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{doctor.patients}</div>
                    <div className="text-white/70 text-xs">Patients</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{doctor.rating}</div>
                    <div className="text-white/70 text-xs">Rating</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book with {doctor.name.split(' ')[1]}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className={`${heroVisible ? 'animate-fadeInRight' : ''}`}>
                <div className="relative">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-darkCard rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">{doctor.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">({doctor.patients} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education, Certifications, Specializations */}
        <section ref={eduRef} className={`py-24 bg-white dark:bg-darkBg ${eduVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Education */}
              <div className={`${eduVisible ? 'animate-fadeInUp animate-stagger-1' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-6 flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  Education
                </h3>
                <div className="space-y-4">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="bg-softBg dark:bg-darkCard rounded-xl p-4 border border-gray-100 dark:border-darkBorder hover-lift">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{edu.degree}</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">{edu.institution}</div>
                      <div className="text-primary text-xs font-medium mt-1">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className={`${eduVisible ? 'animate-fadeInUp animate-stagger-2' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-6 flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {doctor.certifications.map((cert, i) => (
                    <div key={i} className="flex items-start space-x-3 bg-softBg dark:bg-darkCard rounded-xl p-3 border border-gray-100 dark:border-darkBorder">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className={`${eduVisible ? 'animate-fadeInUp animate-stagger-3' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-6 flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section ref={testimonialRef} className={`py-24 bg-softBg dark:bg-gray-900 ${testimonialVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 ${testimonialVisible ? 'animate-fadeInDown' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
                What Patients Say About {doctor.name.split(' ')[1]}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {doctor.testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`bg-white dark:bg-darkCard rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-darkBorder hover-lift ${
                    testimonialVisible ? `animate-fadeInUp animate-stagger-${i + 1}` : ''
                  }`}
                >
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }, (_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">"{t.text}"</p>
                  <div className="flex items-center">
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Verified Patient</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScrollToTop />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default DoctorProfilePage;
