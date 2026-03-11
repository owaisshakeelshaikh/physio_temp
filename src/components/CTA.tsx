import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className={`py-24 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden ${
        sectionVisible ? 'animate-fadeIn' : 'scroll-animate'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animate-stagger-1"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins animate-gradient bg-gradient-to-r from-white to-accent bg-clip-text text-transparent animate-fadeInDown animate-stagger-1">
            Ready To Take The First Step Toward A Pain-Free Life?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp animate-stagger-2">
            Book your appointment today and let our expert physiotherapists help you achieve your health goals. Your journey to recovery starts here.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animate-stagger-3">
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow"
            >
              Book An Appointment
            </Link>
            
            <a 
              href="tel:555-123-4567" 
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 font-semibold text-lg hover-scale hover-rotate"
            >
              Call Us: (555) 123-4567
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center animate-fadeInUp animate-stagger-4">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">24/7</div>
              <div className="text-white/80 text-sm">Emergency Support</div>
            </div>
            <div className="text-center animate-fadeInUp animate-stagger-5">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center animate-fadeInUp animate-stagger-6">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">99%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div className="text-center animate-fadeInUp animate-stagger-7">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">1500+</div>
              <div className="text-white/80 text-sm">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
