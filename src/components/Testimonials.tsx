import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The team at Healex helped me recover from my knee surgery faster than I expected. Their personalized approach and expertise made all the difference in my rehabilitation journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "I've been dealing with chronic back pain for years. After just a few sessions at Healex, I'm finally pain-free and able to enjoy my active lifestyle again. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "The physiotherapists here are truly amazing. They took the time to understand my specific needs and created a treatment plan that worked perfectly for me. Thank you, Healex team!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 animate-pulse' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-24 bg-primary ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative animate-fadeInLeft animate-stagger-1">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Physiotherapist consulting patient"
              className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover hover-scale"
            />
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce animate-stagger-2">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Expert Care</span>
              </div>
            </div>
          </div>

          {/* Right Testimonial Content */}
          <div className="space-y-8 animate-fadeInRight animate-stagger-2">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-4">
                What Our Patients Say
              </h2>
              <p className="text-white/80 text-lg">
                Real stories from real patients who have transformed their lives with our help
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift animate-scale">
              {/* Rating */}
              <div className="flex mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover hover-scale"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-gray-600">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover-scale hover-rotate"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover-scale hover-rotate"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white w-8 animate-pulse'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
