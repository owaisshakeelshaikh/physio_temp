import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const videoTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    review: 'After my knee surgery, the team at Healex helped me walk again in just 8 weeks. Their dedication and expertise is truly remarkable.',
    rating: 5,
    condition: 'Knee Surgery Recovery',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    review: 'I suffered from chronic back pain for 5 years. Dr. Arjun and his team gave me my life back. I can now play with my kids pain-free!',
    rating: 5,
    condition: 'Chronic Back Pain',
  },
  {
    id: 3,
    name: 'Anand Patel',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    review: 'As a cricket player, shoulder injuries are common. Healex not only treated my rotator cuff but also improved my overall performance.',
    rating: 5,
    condition: 'Sports Injury',
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
};

const VideoTestimonials: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-white dark:bg-darkBg ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${sectionVisible ? 'animate-fadeInDown' : ''}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-primary mr-4"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Patient Stories</span>
            <div className="w-12 h-0.5 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            Video Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear directly from our patients about their recovery journeys
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-darkBorder group ${
                sectionVisible ? `animate-fadeInUp animate-stagger-${index + 1}` : ''
              }`}
            >
              {/* Video thumbnail */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={testimonial.videoThumbnail}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.condition}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
