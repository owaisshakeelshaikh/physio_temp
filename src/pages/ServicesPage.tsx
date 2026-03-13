import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const { ref: heroRef, isIntersecting: heroVisible } = useScrollAnimation();
  const { ref: processRef, isIntersecting: processVisible } = useScrollAnimation();
  const { ref: insuranceRef, isIntersecting: insuranceVisible } = useScrollAnimation();
  const { ref: ctaRef, isIntersecting: ctaVisible } = useScrollAnimation();

  const handleBookService = (service: typeof services[0]) => {
    const serviceData = {
      title: service.title,
      price: service.price,
      duration: service.duration
    };
    navigate(`/contact?service=${encodeURIComponent(service.title)}&price=${encodeURIComponent(service.price)}&duration=${encodeURIComponent(service.duration)}`);
  };

  const services = [
    {
      id: 1,
      title: "Sports Injury Rehabilitation",
      category: "sports",
      description: "Comprehensive rehabilitation for athletes of all levels, from weekend warriors to professional competitors.",
      icon: "🏃‍♂️",
      price: "$120/session",
      duration: "60 minutes",
      features: ["Injury assessment", "Custom rehab programs", "Performance optimization", "Return-to-sport training"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Orthopedic Physiotherapy",
      category: "orthopedic",
      description: "Specialized treatment for musculoskeletal conditions, post-surgical recovery, and joint problems.",
      icon: "🦴",
      price: "$110/session",
      duration: "45-60 minutes",
      features: ["Joint mobilization", "Manual therapy", "Post-op rehab", "Pain management"],
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Neurological Physiotherapy",
      category: "neurological",
      description: "Advanced therapy for stroke recovery, spinal cord injuries, and neurological disorders.",
      icon: "🧠",
      price: "$130/session",
      duration: "60 minutes",
      features: ["Neuro-rehab techniques", "Balance training", "Functional restoration", "Gait training"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Pediatric Physiotherapy",
      category: "pediatric",
      description: "Gentle, child-friendly therapy for developmental delays, injuries, and congenital conditions.",
      icon: "👶",
      price: "$100/session",
      duration: "45 minutes",
      features: ["Developmental assessment", "Play-based therapy", "Parent education", "School consultation"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Geriatric Physiotherapy",
      category: "geriatric",
      description: "Specialized care for seniors focusing on mobility, balance, and age-related conditions.",
      icon: "👴",
      price: "$95/session",
      duration: "45-60 minutes",
      features: ["Fall prevention", "Mobility enhancement", "Arthritis management", "Home safety assessment"],
      image: "https://images.unsplash.com/photo-1583212292454-1fe6779e38ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Chronic Pain Management",
      category: "pain",
      description: "Evidence-based approaches to manage and reduce chronic pain conditions.",
      icon: "💊",
      price: "$115/session",
      duration: "60 minutes",
      features: ["Pain education", "Manual therapy", "Exercise prescription", "Lifestyle counseling"],
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Women's Health Physiotherapy",
      category: "womens",
      description: "Specialized care for women's health issues including prenatal and postpartum conditions.",
      icon: "♀️",
      price: "$120/session",
      duration: "60 minutes",
      features: ["Pelvic floor rehab", "Prenatal care", "Postpartum recovery", "Osteoporosis management"],
      image: "https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Workplace Injury Rehabilitation",
      category: "workplace",
      description: "Return-to-work programs and ergonomic assessments for workplace injuries.",
      icon: "💼",
      price: "$110/session",
      duration: "60 minutes",
      features: ["Ergonomic assessment", "Work conditioning", "Injury prevention", "Return-to-work planning"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🏥' },
    { id: 'sports', name: 'Sports', icon: '🏃‍♂️' },
    { id: 'orthopedic', name: 'Orthopedic', icon: '🦴' },
    { id: 'neurological', name: 'Neurological', icon: '🧠' },
    { id: 'pediatric', name: 'Pediatric', icon: '👶' },
    { id: 'geriatric', name: 'Geriatric', icon: '👴' },
    { id: 'pain', name: 'Pain Management', icon: '💊' },
    { id: 'womens', name: "Women's Health", icon: '♀️' },
    { id: 'workplace', name: 'Workplace', icon: '💼' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <PageTransition>
    <div className="min-h-screen dark:bg-darkBg">
      <SEOHead title="Services" description="Explore our comprehensive physiotherapy services including sports rehabilitation, orthopedic therapy, neurological rehab, and more." />
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`relative bg-gradient-to-br from-primary to-primary/90 py-24 ${heroVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-white font-poppins mb-6 ${heroVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            Our Services
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto ${heroVisible ? 'animate-fadeInUp animate-stagger-2' : ''}`}>
            Comprehensive physiotherapy services tailored to your specific needs and goals
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white dark:bg-darkBg border-b dark:border-darkBorder">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-wrap justify-center gap-4 ${heroVisible ? 'animate-fadeInUp animate-stagger-3' : ''}`}>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-darkCard text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${heroVisible ? `animate-scaleUp animate-stagger-${index + 4}` : ''} hover-scale`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-softBg dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-transparent dark:border-darkBorder ${
                  heroVisible ? `animate-fadeInUp animate-stagger-${index + 1}` : ''
                } hover-lift`}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-800">{service.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleBookService(service)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover-lift animate-glow text-center block"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section ref={processRef} className={`py-24 bg-white dark:bg-darkBg ${processVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${processVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to ensure optimal recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Assessment", description: "Comprehensive evaluation of your condition and goals" },
              { step: 2, title: "Personalized Plan", description: "Custom treatment plan tailored to your specific needs" },
              { step: 3, title: "Active Treatment", description: "Regular sessions with progressive therapy techniques" },
              { step: 4, title: "Progress Review", description: "Ongoing assessment and plan adjustments" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center ${processVisible ? `animate-fadeInUp animate-stagger-${index + 2}` : ''}`}
              >
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center hover-scale">
                  <span className="text-3xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Pricing */}
      <section ref={insuranceRef} className={`py-24 bg-softBg dark:bg-gray-900 ${insuranceVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`${insuranceVisible ? 'animate-fadeInLeft animate-stagger-1' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins mb-6">
                Insurance Coverage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We work with most major insurance providers to make your treatment affordable and accessible.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Blue Cross Blue Shield",
                  "Aetna",
                  "United Healthcare",
                  "Cigna",
                  "Medicare",
                  "Medicaid",
                  "Humana",
                  "Kaiser Permanente"
                ].map((insurance, index) => (
                  <div 
                    key={index} 
                    className={`bg-white dark:bg-darkCard rounded-lg p-4 flex items-center ${
                      insuranceVisible ? `animate-fadeInUp animate-stagger-${index + 2}` : ''
                    } hover-lift`}
                  >
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">{insurance}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${insuranceVisible ? 'animate-fadeInRight animate-stagger-2' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins mb-6">
                Flexible Payment Options
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We offer various payment options to fit your budget and financial situation.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Package Deals", desc: "Save 20% with our 10-session packages" },
                  { title: "Payment Plans", desc: "Monthly payment options available" },
                  { title: "HSA/FSA Accepted", desc: "Use your health savings accounts" }
                ].map((option, index) => (
                  <div 
                    key={index} 
                    className={`bg-white dark:bg-darkCard rounded-lg p-6 ${
                      insuranceVisible ? `animate-fadeInUp animate-stagger-${index + 3}` : ''
                    } hover-lift`}
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{option.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className={`py-24 bg-primary ${ctaVisible ? 'animate-fadeIn' : 'scroll-animate'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-3xl lg:text-4xl font-bold text-white font-poppins mb-6 ${ctaVisible ? 'animate-fadeInDown animate-stagger-1' : ''}`}>
            Ready to Start Your Recovery Journey?
          </h2>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto mb-8 ${ctaVisible ? 'animate-fadeInUp animate-stagger-2' : ''}`}>
            Book a consultation today and take the first step towards a pain-free life
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaVisible ? 'animate-fadeInUp animate-stagger-3' : ''}`}>
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift animate-glow"
            >
              Book Consultation
            </Link>
            <a 
              href="tel:555-123-4567" 
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 font-semibold text-lg hover-scale hover-rotate"
            >
              Call Us: (555) 123-4567
            </a>
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

export default ServicesPage;
