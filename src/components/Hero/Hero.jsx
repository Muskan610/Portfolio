import { useRef } from 'react';
import ParallaxElement from './ParallaxElement';
import HeroContent from './HeroContent';
import SpotlightCursor from './SpotlightCursor';

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-ivory to-white"
    >
      {/* Spotlight effect */}
      <SpotlightCursor heroRef={heroRef} />

      {/* Parallax floating elements */}

      {/* Large soft pink circle - background */}
      <ParallaxElement
        strength={10}
        className="top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-full h-full rounded-full bg-primary-200 opacity-30 blur-3xl" />
      </ParallaxElement>

      {/* Medium coral circle - mid layer */}
      <ParallaxElement
        strength={20}
        className="top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 translate-x-1/2"
      >
        <div className="w-full h-full rounded-full bg-primary-400 opacity-25 blur-2xl" />
      </ParallaxElement>

      {/* Sage green circle - mid layer */}
      <ParallaxElement
        strength={15}
        className="bottom-1/3 left-1/3 w-56 h-56 md:w-80 md:h-80 -translate-x-1/2"
      >
        <div className="w-full h-full rounded-full bg-sage-300 opacity-35 blur-2xl" />
      </ParallaxElement>

      {/* Small accent circle - foreground */}
      <ParallaxElement
        strength={30}
        className="top-2/3 right-1/3 w-32 h-32 md:w-48 md:h-48"
      >
        <div className="w-full h-full rounded-full bg-accent opacity-20 blur-xl" />
      </ParallaxElement>

      {/* Soft rounded rectangle - background */}
      <ParallaxElement
        strength={12}
        className="bottom-1/4 right-1/4 w-40 h-40 md:w-64 md:h-64"
      >
        <div className="w-full h-full rounded-3xl bg-primary-300 opacity-25 blur-2xl rotate-45" />
      </ParallaxElement>

      {/* Hero Content */}
      <HeroContent />

      {/* Bottom gradient transition to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 1) 100%)'
        }}
      />
    </section>
  );
};

export default Hero;
