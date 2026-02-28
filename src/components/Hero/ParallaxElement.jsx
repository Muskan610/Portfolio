import { memo } from 'react';
import PropTypes from 'prop-types';
import { useParallax } from '../../hooks/useParallax';

const ParallaxElement = ({
  strength = 20,
  children,
  className = '',
  ...props
}) => {
  const offset = useParallax(strength);

  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ParallaxElement.propTypes = {
  strength: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default memo(ParallaxElement);
