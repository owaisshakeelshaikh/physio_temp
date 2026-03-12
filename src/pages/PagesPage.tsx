import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PagesPage: React.FC = () => {
  const pages = [
    {
      title: "Patient Resources",
      description: "Helpful guides, forms, and educational materials for our patients",
      icon: "📚",
      link: "/resources",
      color: "bg-blue-500"
    },
    {
      title: "Our Team",
      description: "Meet our expert physiotherapists and support staff",
      icon: "👥",
      link: "/team",
      color: "bg-green-500"
    },
    {
      title: "Facilities & Equipment",
      description: "Tour our state-of-the-art facilities and advanced equipment",
      icon: "🏥",
      link: "/facilities",
      color: "bg-purple-500"
    },
    {
      title: "Patient Testimonials",
      description: "Read success stories from our satisfied patients",
      icon: "⭐",
      link: "/testimonials",
      color: "bg-yellow-500"
    },
    {
      title: "FAQ",
      description: "Frequently asked questions about physiotherapy and our services",
      icon: "❓",
      link: "/faq",
      color: "bg-red-500"
    },
    {
      title: "Career Opportunities",
      description: "Join our team and help make a difference in patients' lives",
      icon: "💼",
      link: "/careers",
      color: "bg-indigo-500"
    },
    {
      title: "Research & Education",
      description: "Learn about our research contributions and educational programs",
      icon: "🔬",
      link: "/research",
      color: "bg-pink-500"
    },
    {
      title: "Community Outreach",
      description: "Our involvement in community health and wellness initiatives",
      icon: "🌍",
      link: "/community",
      color: "bg-teal-500"
    }
  ];

  const quickLinks = [
    { title: "New Patient Forms", description: "Download and complete forms before your first visit" },
    { title: "Insurance Information", description: "Learn about accepted insurance plans and billing" },
    { title: "Telehealth Services", description: "Virtual physiotherapy sessions from the comfort of home" },
    { title: "Patient Portal", description: "Access your records, schedule appointments, and more" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-poppins mb-6">
            Pages & Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive collection of resources, information, and services
          </p>
        </div>
      </section>

      {/* Main Pages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-4">
              Explore Our Pages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything RestoreFlex has to offer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pages.map((page, index) => (
              <div key={index} className="group">
                <div className={`${page.color} rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}>
                  <div className="text-5xl mb-4">{page.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{page.title}</h3>
                  <p className="text-white/90 mb-4">{page.description}</p>
                  <div className="flex items-center text-white font-medium">
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-softBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-4">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Frequently accessed resources and information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-6">
                Featured Resources
              </h2>
              
              <div className="space-y-6">
                <div className="bg-softBg rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Physiotherapy Guide</h3>
                      <p className="text-gray-600 mb-3">Complete guide to understanding physiotherapy treatments and benefits</p>
                      <span className="text-primary font-medium">Read More →</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-softBg rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Recovery Exercises</h3>
                      <p className="text-gray-600 mb-3">Step-by-step exercise routines for home recovery</p>
                      <span className="text-primary font-medium">View Exercises →</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-softBg rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Prevention Tips</h3>
                      <p className="text-gray-600 mb-3">Expert advice on preventing injuries and maintaining health</p>
                      <span className="text-primary font-medium">Learn More →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-6">
                Need Help?
              </h2>
              
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-white/90 mb-6">
                  Our friendly staff is here to help you find the information you need or answer any questions you may have.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>(555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>info@RestoreFlex.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Mon-Fri: 8AM-8PM</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium mt-6">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-softBg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-4">
              Download Our App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage appointments, access exercises, and track your progress on the go
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
            
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download for Android
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PagesPage;
