import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: contentRef, isIntersecting: contentVisible } = useScrollAnimation();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-softBg to-white">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animate-stagger-2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 ${contentVisible ? 'animate-fadeInLeft' : 'scroll-animate'}`}
          >
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide animate-pulse">
                Feel Better. Move Freely. Live Fully
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight">
              Transforming Pain Into Strength One Step at a Time
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg">
              Our expert physiotherapists provide personalized treatment plans to help you recover from injuries, manage chronic pain, and achieve optimal physical function.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Price Badge */}
            <div className="inline-flex items-center bg-accent/20 px-6 py-3 rounded-full border border-accent/30 hover-scale">
              <span className="text-accent font-semibold">First Consultation - $50</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="animate-fadeInUp animate-stagger-3">
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-gray-600">Specialized Treatments</p>
              </div>
              <div className="animate-fadeInUp animate-stagger-4">
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInRight">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 lg:h-[500px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Physiotherapy Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Patient Avatars */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Patient"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="absolute top-8 -right-8 bg-white rounded-full p-2 shadow-lg animate-float animate-stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Patient"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg animate-float animate-stagger-2">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Patient"
                className="w-12 h-12 rounded-full"
              />
            </div>

            {/* Treatment Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg hover-lift animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">10+ Specialized Treatments</h4>
                  <p className="text-sm text-gray-600">Custom care plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
