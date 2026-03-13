import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Stretches for Office Workers",
      excerpt: "Learn simple yet effective stretches to prevent back pain and improve posture during long work hours.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2024",
      category: "Workplace Health"
    },
    {
      id: 2,
      title: "Recovering from Sports Injuries: A Complete Guide",
      excerpt: "Expert tips on how to safely recover from common sports injuries and get back to your game stronger.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 10, 2024",
      category: "Sports Medicine"
    },
    {
      id: 3,
      title: "The Benefits of Physiotherapy for Chronic Pain",
      excerpt: "Discover how physiotherapy can help manage and reduce chronic pain without medication.",
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 5, 2024",
      category: "Pain Management"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className={`py-24 bg-softBg dark:bg-gray-900 ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInDown animate-stagger-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            Health Tips & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest physiotherapy tips, exercises, and wellness advice from our experts
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group hover-lift border border-transparent dark:border-darkBorder ${
                sectionVisible ? `animate-fadeInUp animate-stagger-${index + 1}` : 'scroll-animate'
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 hover-scale"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fadeInUp animate-stagger-4">
          <Link 
            to="/blog" 
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
