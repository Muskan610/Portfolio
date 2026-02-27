import PropTypes from 'prop-types';

const Card = ({
  children,
  hover = true,
  className = '',
  ...props
}) => {
  const hoverEffects = hover
    ? 'hover:-translate-y-2 hover:shadow-xl'
    : '';

  return (
    <div
      className={`bg-white rounded-2xl shadow-md transition-all duration-300 ${hoverEffects} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
