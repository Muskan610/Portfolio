import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Section from '../shared/Section';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from '../../data/portfolio';

// Lazy load ProjectDetail component
const ProjectDetail = lazy(() => import('./ProjectDetail'));

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // Consolidated scroll and popstate effect
  useEffect(() => {
    // Prevent scroll when loading and compensate for scrollbar
    if (showLoading || selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
    }

    // Handle browser back button
    const handlePopState = () => {
      setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showLoading, selectedProject]);

  // Open project and push history state
  const handleOpenProject = useCallback((project) => {
    // Immediately show loading screen with full opacity
    setShowLoading(true);
    setIsLoading(true);

    // Start showing project while loading screen still visible
    setTimeout(() => {
      setSelectedProject(project);
      window.history.pushState({ modal: true }, '', `#project-${project.id}`);
    }, 800);

    // Begin fading out spinner
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Fade out loading screen after project is mounted and visible
    setTimeout(() => {
      setShowLoading(false);
    }, 1700);
  }, []);

  // Close project and handle history
  const handleCloseProject = useCallback(() => {
    if (window.location.hash.startsWith('#project-')) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  }, []);

  return (
    <>
      <Section id="portfolio" background="default" className="relative">
        {/* Bottom gradient transition to cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none -mb-32"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(250, 245, 240, 0.1) 20%, rgba(250, 245, 240, 0.3) 40%, rgba(250, 245, 240, 0.5) 60%, rgba(250, 245, 240, 0.7) 80%, rgba(250, 245, 240, 1) 100%)'
          }}
        />

        <div ref={ref} className="text-center mb-16">
          <span
            className={`text-xs md:text-sm uppercase tracking-widest text-accent font-semibold mb-4 block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Selected Work
          </span>
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-gray-900 via-accent to-sage-500 bg-clip-text text-transparent bg-200% animate-gradient-shift mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Portfolio
          </h2>
          <p
            className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A collection of <span className="text-xl md:text-2xl font-display font-semibold text-accent">recent projects</span> showcasing my design expertise
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <PortfolioCard {...item} onClick={() => handleOpenProject(item)} />
            </div>
          ))}
        </div>
      </Section>

      {/* Loading Overlay */}
      {showLoading && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-500 ease-in-out ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: isLoading
              ? 'rgba(250, 245, 240, 0.98)'
              : 'rgba(250, 245, 240, 0)',
            willChange: 'opacity, background',
            transition: 'opacity 0.5s ease-in-out, background 0.5s ease-in-out'
          }}
        >
          <div
            className={`text-center transition-all duration-500 ease-in-out ${
              isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ willChange: 'opacity, transform' }}
          >
            {/* Spinner */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-sage-200 rounded-full"></div>
              <div
                className="absolute inset-0 border-4 border-sage-600 rounded-full border-t-transparent"
                style={{
                  animation: 'spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  willChange: 'transform'
                }}
              ></div>
            </div>
            {/* Loading Text */}
            <p
              className="text-2xl font-display font-semibold text-sage-700"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                willChange: 'opacity'
              }}
            >
              Loading Project...
            </p>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <Suspense fallback={<div className="fixed inset-0 bg-cream" />}>
          <ProjectDetail
            project={selectedProject}
            onClose={handleCloseProject}
          />
        </Suspense>
      )}
    </>
  );
};

export default Portfolio;
