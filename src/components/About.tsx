import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-12 items-center ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
        >
          {/* Left Image */}
          <div className="relative animate-fadeInLeft animate-stagger-1">
            <div className="rounded-2xl overflow-hidden shadow-xl hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Physiotherapy Treatment"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-lg animate-bounce animate-stagger-2">
              <div className="text-white">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeInRight animate-stagger-2">
            {/* Card with content */}
            <div className="bg-softBg rounded-2xl p-8 shadow-lg hover-lift">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Your Journey to Stronger Healthier Body Start Here
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                At Healex Physiotherapy, we believe in a holistic approach to healing. Our team of experienced physiotherapists combines cutting-edge techniques with compassionate care to help you achieve your health goals.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Whether you're recovering from an injury, managing chronic pain, or looking to improve your physical performance, we're here to support you every step of the way.
              </p>

              <Link to="/about" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow">
                Learn More About Us
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center animate-fadeInUp animate-stagger-3">
                <div className="text-4xl font-bold text-primary mb-2">1500+</div>
                <div className="text-gray-600 font-medium">Patients Treated</div>
                <div className="text-sm text-gray-500 mt-1">Successfully recovered</div>
              </div>
              <div className="text-center animate-fadeInUp animate-stagger-4">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-gray-600 font-medium">Recovery Success Rate</div>
                <div className="text-sm text-gray-500 mt-1">Patient satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
