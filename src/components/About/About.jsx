import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Section from '../shared/Section';
import profilePhoto from '../../assets/images/dp.jpeg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [imageError, setImageError] = useState(false);

  return (
    <Section id="about" background="cream" className="relative">
      {/* Top gradient transition from white */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none -mt-24"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(250, 245, 240, 0.6) 50%, rgba(250, 245, 240, 0.3) 75%, transparent 100%)'
        }}
      />

      {/* Bottom gradient transition to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none -mb-24"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(250, 245, 240, 0.3) 25%, rgba(250, 245, 240, 0.6) 50%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 1) 100%)'
        }}
      />

      <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mb-2">
              Creating
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 animate-pulse-shadow">
              Digital Magic
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            I'm a designer <span className="text-xl md:text-2xl font-display font-semibold text-accent">passionate</span> about creating elegant, user-centered
            digital experiences that blend aesthetics with functionality.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            With a <span className="text-lg md:text-xl font-bold text-gray-800">keen eye for detail</span> and a love for beautiful design, I help
            brands tell their unique stories through thoughtful visual
            communication.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br from-accent to-primary-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br from-sage-400 to-sage-500 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
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
    </Section>
  );
};

export default About;
