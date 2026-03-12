import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BodyArea {
  id: string;
  label: string;
  x: number;
  y: number;
  treatments: string[];
  description: string;
}

const bodyAreas: BodyArea[] = [
  {
    id: 'neck',
    label: 'Neck',
    x: 50,
    y: 12,
    treatments: ['Cervical Mobilization', 'Postural Correction', 'Dry Needling', 'Neck Strengthening Exercises'],
    description: 'Neck pain can result from poor posture, whiplash, or degenerative conditions. Our targeted treatments relieve stiffness and restore range of motion.',
  },
  {
    id: 'shoulder',
    label: 'Shoulder',
    x: 32,
    y: 22,
    treatments: ['Rotator Cuff Rehab', 'Frozen Shoulder Therapy', 'Manual Therapy', 'Shoulder Stabilization'],
    description: 'Shoulder injuries like rotator cuff tears, frozen shoulder, and impingement respond well to our specialized rehabilitation programs.',
  },
  {
    id: 'back',
    label: 'Back',
    x: 50,
    y: 40,
    treatments: ['Spinal Mobilization', 'Core Strengthening', 'McKenzie Method', 'Disc Rehabilitation'],
    description: 'Back pain is one of the most common conditions we treat. Our evidence-based approach addresses both acute and chronic back issues.',
  },
  {
    id: 'knee',
    label: 'Knee',
    x: 38,
    y: 70,
    treatments: ['ACL Rehabilitation', 'Meniscus Repair Rehab', 'Patellofemoral Therapy', 'Knee Strengthening'],
    description: 'From sports injuries to arthritis, our knee rehabilitation programs restore function and reduce pain through targeted exercises.',
  },
  {
    id: 'leg',
    label: 'Leg',
    x: 60,
    y: 82,
    treatments: ['Calf Strain Recovery', 'Shin Splint Treatment', 'Ankle Rehabilitation', 'Gait Training'],
    description: 'Leg pain and injuries benefit from our comprehensive lower limb rehabilitation, combining manual therapy with progressive exercises.',
  },
];

const PainSelector: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<BodyArea | null>(null);
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-softBg dark:bg-gray-900 ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${sectionVisible ? 'animate-fadeInDown' : ''}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-primary mr-4"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Interactive Tool</span>
            <div className="w-12 h-0.5 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            Where Does It Hurt?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click on the body area that's causing you pain to discover our specialized treatments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Body diagram */}
          <div className={`relative flex justify-center ${sectionVisible ? 'animate-fadeInLeft' : ''}`}>
            <div className="relative w-64 md:w-80">
              {/* SVG Body silhouette */}
              <svg viewBox="0 0 100 120" className="w-full text-gray-300 dark:text-gray-600">
                {/* Head */}
                <circle cx="50" cy="8" r="7" fill="currentColor" stroke="none" />
                {/* Neck */}
                <rect x="47" y="15" width="6" height="5" rx="1" fill="currentColor" />
                {/* Torso */}
                <path d="M35 20 Q35 18 40 18 L60 18 Q65 18 65 20 L68 50 Q68 55 62 55 L38 55 Q32 55 32 50 Z" fill="currentColor" />
                {/* Left arm */}
                <path d="M35 20 L25 22 L20 40 L18 55 L22 55 L26 42 L32 25" fill="currentColor" />
                {/* Right arm */}
                <path d="M65 20 L75 22 L80 40 L82 55 L78 55 L74 42 L68 25" fill="currentColor" />
                {/* Left leg */}
                <path d="M38 55 L36 75 L34 95 L32 110 L40 110 L40 95 L42 75 L44 55" fill="currentColor" />
                {/* Right leg */}
                <path d="M56 55 L58 75 L60 95 L62 110 L54 110 L54 95 L52 75 L50 55" fill="currentColor" />
              </svg>

              {/* Clickable hotspots */}
              {bodyAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10`}
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                  aria-label={`Select ${area.label} area`}
                >
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedArea?.id === area.id
                        ? 'bg-primary text-white scale-125 shadow-lg shadow-primary/40'
                        : 'bg-white dark:bg-darkCard text-primary shadow-md hover:bg-primary hover:text-white hover:scale-110'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-full ${selectedArea?.id === area.id ? 'animate-ping bg-primary/30' : ''}`}></div>
                    <span className="relative text-xs font-bold">{area.label.charAt(0)}</span>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {area.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Treatment info panel */}
          <div className={`${sectionVisible ? 'animate-fadeInRight' : ''}`}>
            {selectedArea ? (
              <div className="bg-white dark:bg-darkCard rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-darkBorder transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                      {selectedArea.label} Pain Treatment
                    </h3>
                    <p className="text-primary font-medium text-sm">Specialized therapy available</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedArea.description}
                </p>

                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Recommended Treatments
                </h4>
                <div className="space-y-3 mb-8">
                  {selectedArea.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-softBg dark:bg-gray-800 rounded-lg p-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{treatment}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book {selectedArea.label} Treatment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="bg-white dark:bg-darkCard rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-darkBorder text-center">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Select a Pain Area
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Click on any highlighted point on the body diagram to see available treatments for that area
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSelector;
