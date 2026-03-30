import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import Card from '../shared/Card';

const PortfolioCard = ({ title, category, description, image, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-contain p-6 transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6">
          <span className="text-accent text-xs sm:text-sm font-semibold mb-2">
            {category}
          </span>
          <h3 className="text-white text-lg sm:text-xl font-display font-semibold mb-2">
            {title}
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm mb-3">{description}</p>
        </div>
      </div>
    </Card>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default memo(PortfolioCard);
