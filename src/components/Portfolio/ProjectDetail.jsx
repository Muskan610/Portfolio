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

  const hasResearch = project.research;

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
          {project.subtitle && (
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-700 mb-6">
              {project.subtitle}
            </h2>
          )}
          <p className="text-base md:text-lg text-gray-600 max-w-5xl">
            {project.description}
          </p>
        </div>

        {hasResearch ? (
          <>
            {/* Project Details Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  Timeline
                </h3>
                <p className="text-gray-600">{project.research.timeline}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  Role
                </h3>
                <p className="text-gray-600">{project.research.role}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  Client
                </h3>
                <p className="text-gray-600">{project.research.institution}</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none">
                {project.research.introduction.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Figures/Visualizations */}
            {project.research.figures && project.research.figures.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                  Research Visualizations
                </h2>
                <div className="space-y-12">
                  {project.research.figures.map((figure) => (
                    <div key={figure.id} className="bg-white p-8 rounded-2xl shadow-sm">
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                        {figure.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{figure.description}</p>
                      <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
                        <img
                          src={figure.image}
                          alt={figure.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Research Methodology */}
            <div className="mb-16 bg-gradient-to-br from-sage-50 to-primary-50 p-8 md:p-12 rounded-2xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Research Methodology
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {project.research.methodology.approach}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-display font-bold text-gray-900 mb-2">Participants</h4>
                  <p className="text-gray-600">{project.research.methodology.participants}</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-display font-bold text-gray-900 mb-2">Period</h4>
                  <p className="text-gray-600">{project.research.methodology.period}</p>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <h4 className="font-display font-bold text-gray-900 mb-3">Methods Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.research.methodology.methods.map((method, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm font-medium"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                Key Insights & Design Implications
              </h2>
              <div className="space-y-6">
                {project.research.keyInsights.map((insight, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="font-display font-bold text-lg text-gray-900 mb-2">
                      {insight.insight}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Implication:</span> {insight.implication}
                    </p>
                    <p className="text-sage-700">
                      <span className="font-semibold">Feature:</span> {insight.feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Usability Testing */}
            {project.research.usabilityTesting && (
              <div className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Usability Testing
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {project.research.usabilityTesting.summary}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      What Worked Well
                    </h3>
                    <ul className="space-y-2">
                      {project.research.usabilityTesting.positives.map((positive, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>{positive}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-sage-700 mb-4">
                      Feedback & Improvements
                    </h3>
                    <ul className="space-y-2">
                      {project.research.usabilityTesting.feedback.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-sage-600 mr-2 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Participant Quotes */}
            {project.research.quotes && project.research.quotes.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                  Voices from the Research
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.research.quotes.map((quote, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-accent"
                    >
                      <p className="text-gray-700 italic leading-relaxed">
                        {quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Generic project layout for non-research projects */}
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
          </>
        )}
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
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetail;
