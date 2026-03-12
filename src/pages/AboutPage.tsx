import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isIntersecting: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isIntersecting: valuesVisible } = useScrollAnimation();
  const { ref: timelineRef, isIntersecting: timelineVisible } = useScrollAnimation();
  const { ref: statsRef, isIntersecting: statsVisible } = useScrollAnimation();

  const milestones = [
    { year: "2009", title: "Healex Founded", description: "Started with a small clinic and a big vision" },
    { year: "2014", title: "Expanded to 3 Locations", description: "Grew to serve more communities across the city" },
    { year: "2018", title: "Award-Winning Care", description: "Received Excellence in Healthcare Award" },
    { year: "2021", title: "Digital Integration", description: "Launched telehealth services and digital patient portal" },
    { year: "2024", title: "15 Years of Excellence", description: "Served over 10,000 patients with 99% satisfaction rate" }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen dark:bg-darkBg">
      <SEOHead title="About Us" description="Learn about Healex Physiotherapy - over 15 years of dedicated physiotherapy care, transforming lives through expert treatment and compassionate healing." />
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`relative bg-gradient-to-br from-primary to-primary/90 py-24 ${heroVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-white font-poppins mb-6 ${heroVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            About Healex Physiotherapy
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto ${heroVisible ? 'animate-fadeInUp animate-stagger-2' : ''}`}>
            For over 15 years, we've been dedicated to transforming lives through expert physiotherapy care and compassionate healing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className={`py-24 bg-white dark:bg-darkBg ${storyVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`storyVisible ? 'animate-fadeInLeft animate-stagger-1' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Clinic"
                className="rounded-2xl shadow-2xl w-full hover-lift"
              />
            </div>
            <div className={`space-y-6 ${storyVisible ? 'animate-fadeInRight animate-stagger-2' : ''}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2009 by Dr. Sarah Johnson, Healex Physiotherapy began as a small clinic with a simple mission: to provide exceptional, personalized care that helps patients reclaim their quality of life.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we've grown into a multi-location practice serving thousands of patients each year, but our core values remain the same: compassion, excellence, and a commitment to helping every patient achieve their optimal health.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className={`bg-softBg dark:bg-darkCard rounded-xl p-6 ${storyVisible ? 'animate-fadeInUp animate-stagger-3' : ''}`}>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years of Excellence</div>
                </div>
                <div className={`bg-softBg dark:bg-darkCard rounded-xl p-6 ${storyVisible ? 'animate-fadeInUp animate-stagger-4' : ''}`}>
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-gray-600 dark:text-gray-400">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={valuesRef} className={`py-24 bg-softBg dark:bg-gray-900 ${valuesVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${valuesVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤍",
                title: "Patient-Centered Care",
                description: "Every treatment plan is tailored to your unique needs, goals, and lifestyle."
              },
              {
                icon: "✅",
                title: "Excellence in Treatment",
                description: "We use evidence-based techniques and state-of-the-art equipment for optimal results."
              },
              {
                icon: "📚",
                title: "Continuous Learning",
                description: "Our team stays updated with the latest advancements in physiotherapy science."
              },
              {
                icon: "👥",
                title: "Community Focus",
                description: "We're committed to improving health and wellness in our local community."
              },
              {
                icon: "⚡",
                title: "Innovation",
                description: "We embrace new technologies and techniques to enhance patient outcomes."
              },
              {
                icon: "🤍",
                title: "Compassion",
                description: "We treat every patient with empathy, respect, and genuine care."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-darkCard rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent dark:border-darkBorder ${
                  valuesVisible ? `animate-fadeInUp animate-stagger-${index + 2}` : ''
                } hover-lift`}
              >
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mb-6">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className={`py-24 bg-white dark:bg-darkBg ${timelineVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${timelineVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              15 years of growth, innovation, and patient success stories
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2"></div>
                <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                  <div className="w-4 h-4 bg-white dark:bg-darkBg rounded-full"></div>
                </div>
                <div className={`w-1/2 px-8 ${timelineVisible ? `animate-fadeIn${index % 2 === 0 ? 'Left' : 'Right'} animate-stagger-${index + 2}` : ''}`}>
                  <div className="bg-softBg dark:bg-darkCard rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-transparent dark:border-darkBorder">
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className={`py-24 bg-primary ${statsVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${statsVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-4">
              Our Impact by the Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Patients Treated" },
              { number: "99%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
              { number: "4.9★", label: "Patient Rating" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${statsVisible ? `animate-fadeInUp animate-stagger-${index + 2}` : ''}`}
              >
                <div className={`text-4xl lg:text-5xl font-bold text-white mb-2 ${statsVisible ? 'animate-pulse' : ''}`}>{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default AboutPage;
