import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GoogleMap: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  const phoneNumber = '+1234567890';
  const whatsappMessage = encodeURIComponent('Hi! I would like to book a consultation at RestoreFlex Physiotherapy.');
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=RestoreFlex+Physiotherapy+Clinic';

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-softBg dark:bg-gray-900 ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 ${sectionVisible ? 'animate-fadeInDown' : ''}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-primary mr-4"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Find Us</span>
            <div className="w-12 h-0.5 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conveniently located in the Medical District with easy parking and accessibility
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className={`lg:col-span-2 ${sectionVisible ? 'animate-fadeInLeft' : ''}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-darkBorder h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459393!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RestoreFlex Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Action buttons & info */}
          <div className={`space-y-4 ${sectionVisible ? 'animate-fadeInRight' : ''}`}>
            {/* Address card */}
            <div className="bg-white dark:bg-darkCard rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-darkBorder">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">123 Health Street, Medical District, City, State 12345</p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-white dark:bg-darkCard rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-darkBorder">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Working Hours</h4>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between"><span>Mon-Fri</span><span className="font-medium">8AM - 8PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="font-medium">9AM - 6PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-medium">10AM - 4PM</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Get Directions</span>
            </a>

            {/* Call Clinic */}
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center space-x-3 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Clinic</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
