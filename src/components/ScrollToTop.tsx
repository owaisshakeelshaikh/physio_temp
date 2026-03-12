import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollToTop}
        className={`absolute -top-8 right-12 transition-all duration-300 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <div className="relative group">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-primary to-primary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:-translate-y-1 border-4 border-white">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Back to top
              <div className="absolute top-full right-3 -mt-1">
                <div className="border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
