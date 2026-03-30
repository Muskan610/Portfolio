import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Section from '../shared/Section';
import MagneticButton from '../shared/MagneticButton';
import links from '../../config/links';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="contact" background="cream" className="relative">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Let's Work Together
        </h2>
        <p
          className={`text-xl text-gray-600 mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Have a project in mind? I'd love to hear about it.
        </p>

        {/* Email Link */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <MagneticButton onClick={() => window.location.href = `mailto:${links.contact.email}`}>
            {links.contact.email}
          </MagneticButton>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href={links.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-sage-600 hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label={links.social.linkedin.label}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© 2026 Designer Portfolio. All rights reserved.</p>
      </div>
    </Section>
  );
};

export default Contact;
