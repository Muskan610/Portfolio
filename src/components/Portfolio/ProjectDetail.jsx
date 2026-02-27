import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProjectDetail = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Fade in animation
  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll when modal is open and compensate for scrollbar
  useEffect(() => {
    // Get scrollbar width before hiding it
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Save original overflow and padding
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Hide scroll and add padding to prevent shift
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  // Handle close with fade-out animation
  const handleClose = () => {
    setIsClosing(true);
    // Wait for fade-out animation to complete before actually closing
    setTimeout(() => {
      onClose();
    }, 700); // Match the duration-700 class
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream transition-opacity duration-700 ease-out ${
        isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'opacity' }}
    >
      {/* Back Button */}
      <button
        type="button"
        onClick={handleClose}
        className="fixed top-8 left-8 z-[100] px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 flex items-center gap-2 pointer-events-auto"
        aria-label="Go back to Portfolio"
        style={{ cursor: 'pointer' }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Go back to Portfolio</span>
      </button>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-gray-900 via-accent to-sage-500 bg-clip-text text-transparent mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
              Timeline
            </h3>
            <p className="text-gray-600">3-4 weeks</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
              Role
            </h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
              Year
            </h3>
            <p className="text-gray-600">2026</p>
          </div>
        </div>

        {/* About the Project */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            About the Project
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              This project involved creating a comprehensive design solution that balanced aesthetic appeal with functional requirements. The challenge was to develop a visual identity that would resonate with the target audience while maintaining brand consistency.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Through careful research and iterative design processes, we crafted a unique approach that highlighted the brand's core values. The final deliverables included a complete visual system with typography, color palettes, and design guidelines.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result is a cohesive design language that elevates the brand presence and creates memorable user experiences across all touchpoints.
            </p>
          </div>
        </div>

        {/* Mock Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="aspect-square bg-gradient-to-br from-primary-200 to-sage-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-display text-lg">Additional Image 1</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-sage-200 to-primary-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 font-display text-lg">Additional Image 2</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's create something amazing
          </p>
          <button
            onClick={() => {
              handleClose();
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 700);
            }}
            className="px-10 py-5 bg-sage-600 text-white text-xl font-semibold rounded-full transition-all duration-300 hover:bg-sage-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetail;
