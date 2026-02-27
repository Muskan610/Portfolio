import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Section from '../shared/Section';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="services" background="cream">
      <div ref={ref} className="text-center mb-16">
        <span
          className={`text-sm uppercase tracking-wider text-accent font-semibold mb-4 block transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          What I Do
        </span>
        <h2
          className={`text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Services & Specialties
        </h2>
        <p
          className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Comprehensive design solutions tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
