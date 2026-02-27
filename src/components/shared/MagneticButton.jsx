import PropTypes from 'prop-types';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

const MagneticButton = ({
  children,
  onClick,
  className = '',
  strength = 0.3,
  ...props
}) => {
  const { ref, position } = useMagneticEffect(strength);

  return (
    <div
      ref={ref}
      className="inline-block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <button
        onClick={onClick}
        className={`px-10 py-5 bg-sage-600 hover:bg-sage-700 text-white text-xl font-semibold rounded-full transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  strength: PropTypes.number,
};

export default MagneticButton;
