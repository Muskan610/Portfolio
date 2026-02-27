import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-300 rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-accent hover:bg-primary-400 text-white hover:shadow-lg focus:ring-accent',
    secondary: 'bg-sage-400 hover:bg-sage-500 text-white hover:shadow-lg focus:ring-sage-400',
    ghost: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
