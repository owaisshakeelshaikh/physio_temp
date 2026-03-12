import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Stretches for Office Workers",
      excerpt: "Learn simple yet effective stretches to prevent back pain and improve posture during long work hours.",
      content: "Sitting at a desk all day can take a toll on your body. These five essential stretches can help alleviate pain and improve your overall well-being...",
      category: "workplace",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["stretching", "workplace", "prevention"],
      featured: true
    },
    {
      id: 2,
      title: "Recovering from Sports Injuries: A Complete Guide",
      excerpt: "Expert tips on how to safely recover from common sports injuries and get back to your game stronger.",
      content: "Sports injuries can be devastating, but with the right approach to recovery, you can come back stronger than ever...",
      category: "sports",
      author: "Dr. Michael Chen",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["sports", "recovery", "injury"],
      featured: true
    },
    {
      id: 3,
      title: "The Benefits of Physiotherapy for Chronic Pain",
      excerpt: "Discover how physiotherapy can help manage and reduce chronic pain without medication.",
      content: "Chronic pain affects millions of people worldwide. Physiotherapy offers a drug-free approach to pain management...",
      category: "pain-management",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["chronic pain", "treatment", "wellness"],
      featured: false
    },
    {
      id: 4,
      title: "Post-Surgery Rehabilitation: What to Expect",
      excerpt: "A comprehensive guide to post-surgical rehabilitation and recovery timeline.",
      content: "Recovering from surgery requires a structured approach to rehabilitation. Here's what you need to know...",
      category: "rehabilitation",
      author: "Dr. James Wilson",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["surgery", "rehabilitation", "recovery"],
      featured: false
    },
    {
      id: 5,
      title: "Pediatric Physiotherapy: Helping Children Thrive",
      excerpt: "How physiotherapy can help children with developmental delays and injuries reach their full potential.",
      content: "Children have unique physiotherapy needs that require specialized approaches and techniques...",
      category: "pediatric",
      author: "Dr. Emily Rodriguez",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["pediatric", "children", "development"],
      featured: false
    },
    {
      id: 6,
      title: "The Role of Physiotherapy in Elderly Care",
      excerpt: "Improving mobility and quality of life for seniors through targeted physiotherapy interventions.",
      content: "As we age, maintaining mobility and independence becomes increasingly important for quality of life...",
      category: "geriatric",
      author: "Dr. Sarah Johnson",
      date: "February 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6779e38ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["elderly", "mobility", "aging"],
      featured: false
    },
    {
      id: 7,
      title: "Neurological Conditions: How Physiotherapy Helps",
      excerpt: "Understanding the role of physiotherapy in managing neurological conditions like stroke and Parkinson's.",
      content: "Neurological conditions present unique challenges that require specialized physiotherapy approaches...",
      category: "neurological",
      author: "Dr. Michael Chen",
      date: "February 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["neurological", "stroke", "parkinsons"],
      featured: false
    },
    {
      id: 8,
      title: "Women's Health: Pelvic Floor Physiotherapy",
      excerpt: "Breaking the stigma around pelvic health and how physiotherapy can make a difference.",
      content: "Pelvic floor physiotherapy is a specialized field that addresses issues many women face but rarely discuss...",
      category: "womens-health",
      author: "Dr. Sarah Johnson",
      date: "February 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["womens health", "pelvic floor", "specialized"],
      featured: false
    },
    {
      id: 9,
      title: "Technology in Modern Physiotherapy",
      excerpt: "How cutting-edge technology is revolutionizing physiotherapy treatment and outcomes.",
      content: "From virtual reality to advanced monitoring systems, technology is transforming how we approach physiotherapy...",
      category: "technology",
      author: "Dr. James Wilson",
      date: "January 30, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["technology", "innovation", "modern treatment"],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'workplace', name: 'Workplace Health', count: 1 },
    { id: 'sports', name: 'Sports', count: 1 },
    { id: 'pain-management', name: 'Pain Management', count: 1 },
    { id: 'rehabilitation', name: 'Rehabilitation', count: 1 },
    { id: 'pediatric', name: 'Pediatric', count: 1 },
    { id: 'geriatric', name: 'Geriatric', count: 1 },
    { id: 'neurological', name: 'Neurological', count: 1 },
    { id: 'womens-health', name: "Women's Health", count: 1 },
    { id: 'technology', name: 'Technology', count: 1 }
  ];

  const popularTags = [
    "stretching", "workplace", "sports", "recovery", "chronic pain", 
    "rehabilitation", "pediatric", "elderly", "neurological", "technology"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-poppins mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert insights, tips, and stories to help you on your journey to better health
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <Link to="/blog" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
              Search
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className={`text-sm ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-xl p-6 text-white">
              <h3 className="font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-white/90 mb-4 text-sm">
                Get the latest health tips and articles delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 mb-4"
              />
              <button className="w-full bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {selectedCategory === 'all' && !searchTerm && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Link 
                to="/blog" 
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                Load More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
