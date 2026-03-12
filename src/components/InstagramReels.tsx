import React, { useState } from 'react';

const InstagramReels: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample Instagram Reels data - replace with actual Instagram data
  // Latest reels should be at the beginning (highest ID = newest)
  const allReels = [
    {
      id: 7,
      thumbnail: 'https://picsum.photos/seed/reel7/300/500.jpg',
      title: 'Neck Pain Relief',
      description: 'Gentle exercises for neck tension',
      views: '4.5K',
      likes: '312',
      embedUrl: 'https://www.instagram.com/reel/C sample7',
      createdAt: new Date('2024-03-12')
    },
    {
      id: 6,
      thumbnail: 'https://picsum.photos/seed/reel6/300/500.jpg',
      title: 'Shoulder Mobility',
      description: 'Improve shoulder range of motion',
      views: '3.1K',
      likes: '198',
      embedUrl: 'https://www.instagram.com/reel/C sample6',
      createdAt: new Date('2024-03-11')
    },
    {
      id: 5,
      thumbnail: 'https://picsum.photos/seed/reel5/300/500.jpg',
      title: 'Recovery Tips',
      description: 'Speed up your recovery after injury',
      views: '6.7K',
      likes: '445',
      embedUrl: 'https://www.instagram.com/reel/C sample5',
      createdAt: new Date('2024-03-10')
    },
    {
      id: 4,
      thumbnail: 'https://picsum.photos/seed/reel4/300/500.jpg',
      title: 'Knee Strengthening',
      description: 'Build stronger knees with these exercises',
      views: '4.2K',
      likes: '267',
      embedUrl: 'https://www.instagram.com/reel/C sample4',
      createdAt: new Date('2024-03-09')
    },
    {
      id: 3,
      thumbnail: 'https://picsum.photos/seed/reel3/300/500.jpg',
      title: 'Posture Correction',
      description: 'Simple tips to improve your posture at work',
      views: '3.8K',
      likes: '289',
      embedUrl: 'https://www.instagram.com/reel/C sample3',
      createdAt: new Date('2024-03-08')
    },
    {
      id: 2,
      thumbnail: 'https://picsum.photos/seed/reel2/300/500.jpg',
      title: 'Back Pain Relief',
      description: 'Effective exercises for lower back pain',
      views: '5.1K',
      likes: '342',
      embedUrl: 'https://www.instagram.com/reel/C sample2',
      createdAt: new Date('2024-03-07')
    },
    {
      id: 1,
      thumbnail: 'https://picsum.photos/seed/reel1/300/500.jpg',
      title: 'Quick Stretch Routine',
      description: '5-minute daily stretches for better flexibility',
      views: '2.3K',
      likes: '156',
      embedUrl: 'https://www.instagram.com/reel/C sample1',
      createdAt: new Date('2024-03-06')
    }
  ];

  // Sort reels by date (newest first) - this ensures latest reels always come first
  const sortedReels = [...allReels].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const itemsPerPage = 4;
  const totalPages = Math.ceil(sortedReels.length / itemsPerPage);

  // Get current page reels
  const getCurrentPageReels = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageReels = sortedReels.slice(startIndex, endIndex);
    
    // For page 2, show only 3 reels (the "More Reels" card will be the 4th)
    if (currentPage === 2) {
      return pageReels.slice(0, 3);
    }
    
    return pageReels;
  };

  const currentReels = getCurrentPageReels();
  const showMoreReelsCard = currentPage === 2;

  // Check if a reel is new (created within last 3 days)
  const isNewReel = (createdAt: Date) => {
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    return createdAt > threeDaysAgo;
  };

  const handleReelClick = (embedUrl: string) => {
    window.open(embedUrl, '_blank');
  };

  const handleMoreReelsClick = () => {
    window.open('https://www.instagram.com/healexphysio', '_blank');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-20 bg-softBg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Follow Our <span className="text-primary">Instagram Reels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick tips, exercise demonstrations, and behind-the-scenes content from our physiotherapy experts. 
            Follow us for daily health and wellness inspiration!
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <a 
              href="https://www.instagram.com/healexphysio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              @healexphysio
            </a>
            <span className="text-gray-500">for more content</span>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentReels.map((reel) => (
            <div 
              key={reel.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleReelClick(reel.embedUrl)}
            >
              {/* Reel Thumbnail */}
              <div className="relative aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Instagram Reels Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-primary to-primary/90 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Reels
                  </div>
                </div>

                {/* NEW Badge for recent reels */}
                {isNewReel(reel.createdAt) && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      NEW
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between text-white text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                        {reel.views}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reel Info */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {reel.title}
                </h3>
                <p className="text-gray-600 text-xs mt-1 line-clamp-2">{reel.description}</p>
              </div>
            </div>
          ))}

          {/* More Reels Card (only on page 2) */}
          {showMoreReelsCard && (
            <div 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={handleMoreReelsClick}
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center text-white">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Instagram Icon */}
                <div className="relative z-10">
                  <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold mb-2">More Reels</h3>
                  <p className="text-sm text-white/90 mb-4">View all content on Instagram</p>
                  <div className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">
                    <span className="mr-2">View on Instagram</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex space-x-2">
            {[1, 2].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow us on Instagram for daily exercise tips, recovery techniques, and exclusive content 
              to help you maintain optimal health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/healexphysio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
                Follow @healexphysio
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
