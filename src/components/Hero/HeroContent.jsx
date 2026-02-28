import { useState, useEffect, useRef } from 'react';
import MagneticButton from '../shared/MagneticButton';

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);

    // IntersectionObserver to pause animations when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={contentRef} className="relative z-10 text-center px-4">
      {/* Title with stagger animation and creative typography */}
      <h1 className="font-display mb-6 overflow-visible py-6 pb-8">
        <span
          className={`block text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '100ms',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          Premium Design
        </span>
        <span
          className={`block text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-pink-500 via-accent to-primary-500 bg-clip-text text-transparent bg-200% ${isInView ? 'animate-gradient-shift' : ''} transition-all duration-1000 leading-tight ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms',
            filter: 'drop-shadow(0 4px 12px rgba(255, 182, 182, 0.4))',
            lineHeight: '1.2',
            paddingBottom: '0.2em'
          }}
        >
          Experiences
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-xl md:text-2xl text-gray-800 mb-10 max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '400ms',
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        Crafting beautiful digital experiences with attention to detail
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <MagneticButton onClick={() => scrollToSection('portfolio')}>
          View My Work
        </MagneticButton>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-10 py-5 bg-transparent border-2 border-sage-600 text-sage-700 text-xl font-semibold rounded-full transition-all duration-300 hover:bg-sage-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
