import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PageLoader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadResources = async () => {
      // Simulate progressive loading
      const incrementProgress = (amount) => {
        if (mounted) {
          setProgress(prev => Math.min(prev + amount, 95));
        }
      };

      // Initial load
      incrementProgress(10);

      // Wait for DOM ready
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve, { once: true });
        });
      }
      incrementProgress(20);

      // Wait for fonts
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise(resolve => setTimeout(resolve, 1000)) // Timeout after 1s
        ]);
      } catch (e) {
        // Font loading failed, continue anyway
      }
      incrementProgress(20);

      // Preload critical images
      const criticalImages = [
        '/Portfolio/images/portfolio/main_banner.png',
        '/Portfolio/images/portfolio/colour_pallette.png',
      ];

      const imagePromises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Continue even if image fails
          img.src = src;
          // Set a timeout to prevent hanging
          setTimeout(resolve, 2000);
        });
      });

      await Promise.race([
        Promise.all(imagePromises),
        new Promise(resolve => setTimeout(resolve, 2500)) // Max wait 2.5s
      ]);
      incrementProgress(20);

      // Wait for window load (all resources)
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }
      incrementProgress(25);

      // Allow browser to paint and settle
      await new Promise(resolve => setTimeout(resolve, 300));

      if (mounted) {
        setProgress(100);

        // Small delay before starting fade out
        await new Promise(resolve => setTimeout(resolve, 100));

        setIsComplete(true);

        // Wait for fade out animation
        setTimeout(() => {
          if (mounted) {
            onLoadComplete();
          }
        }, 700);
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-sage-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-sm text-gray-600 font-medium">
        {progress < 30 ? 'Loading...' : progress < 70 ? 'Preparing experience...' : 'Almost there...'}
      </p>
    </div>
  );
};

PageLoader.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default PageLoader;
