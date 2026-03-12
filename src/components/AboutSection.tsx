import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className={`relative py-24 bg-white dark:bg-darkBg overflow-hidden ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rounded-full animate-float animate-stagger-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-accent/5 rounded-full animate-float animate-stagger-3"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/3 animate-pulse">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-1/3 animate-pulse animate-stagger-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className={`relative ${sectionVisible ? 'animate-slideInLeft' : ''}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Physiotherapy Clinic.jpg"
                  alt="Physiotherapy Clinic"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-darkCard">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Therapy Session"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Shape */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              
              {/* Experience Badge */}
              <div className={`absolute top-8 -right-8 bg-white dark:bg-darkCard rounded-2xl p-6 shadow-xl hover-lift ${
                sectionVisible ? 'animate-bounce animate-stagger-2' : ''
              }`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <h3 className={`text-3xl font-bold text-gray-900 dark:text-white ${sectionVisible ? 'animate-pulse' : ''}`}>15</h3>
                      <span className="text-xl font-bold text-primary ml-1">+</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`${sectionVisible ? 'animate-slideInRight' : ''}`}>
            {/* Section Title */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-0.5 bg-primary mr-4"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">About Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-6">
                Welcome to Healex Physiotherapy Clinic
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Dr. Sarah Johnson and our team of expert physiotherapists are dedicated to optimizing your health and well-being. Our clinic combines evidence-based treatment techniques with compassionate care to help you achieve your recovery goals.
            </p>

            {/* Feature Points */}
            <ul className="space-y-6 mb-8">
              <li className={`flex items-start space-x-4 ${sectionVisible ? 'animate-fadeInUp animate-stagger-1' : ''}`}>
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trusted Clinic</h5>
                  <p className="text-gray-600 dark:text-gray-300">5 stars Google rating, 1000+ client reviews with 99% satisfaction rate.</p>
                </div>
              </li>
              
              <li className={`flex items-start space-x-4 ${sectionVisible ? 'animate-fadeInUp animate-stagger-2' : ''}`}>
                <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Therapists</h5>
                  <p className="text-gray-600 dark:text-gray-300">Driven by passion, fueled by expertise and years of specialized training.</p>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/about" 
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow flex items-center"
              >
                About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
