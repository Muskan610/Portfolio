import { useState, useEffect, useRef } from 'react';
import MagneticButton from '../shared/MagneticButton';
import profilePhoto from '../../assets/images/dp.jpeg';

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={contentRef} className="relative z-10 px-4 w-full max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold mb-4 block">
            About Me
          </span>
          <h2 className="font-display mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 animate-pulse-shadow">
              Muskan Bhat
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            I'm a designer <span className="text-xl md:text-2xl font-display font-semibold text-sage-600">passionate</span> about creating elegant, user-centered
            digital experiences that blend aesthetics with functionality.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            With a <span className="text-lg md:text-xl font-bold text-gray-800">keen eye for detail</span> and a love for beautiful design, I help
            brands tell their unique stories through thoughtful visual
            communication.
          </p>

          {/* Stats */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br from-sage-400 to-sage-500 bg-clip-text text-transparent mb-4 leading-tight pb-2">
                4+
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
          </div>

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

        {/* Profile Photo */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-200 to-sage-200">
              <img
                src={profilePhoto}
                alt="Profile Photo"
                className="w-full h-full object-cover"
                onError={() => {
                  console.error('Image failed to load');
                  setImageError(true);
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
