import PropTypes from 'prop-types';

const Section = ({
  id,
  children,
  className = '',
  background = 'default',
  ...props
}) => {
  const backgrounds = {
    default: 'bg-white',
    cream: 'bg-cream',
    light: 'bg-primary-50',
    sage: 'bg-sage-100',
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-20 md:py-28 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.oneOf(['default', 'cream', 'light', 'sage']),
};

export default Section;
