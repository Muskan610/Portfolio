import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from './useMousePosition';

export const useParallax = (strength = 20) => {
  const mousePosition = useMousePosition();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cachedDimensions = useRef({ centerX: 0, centerY: 0 });

  // Cache window dimensions and update on resize
  useEffect(() => {
    const updateDimensions = () => {
      cachedDimensions.current = {
        centerX: window.innerWidth / 2,
        centerY: window.innerHeight / 2,
      };
    };

    // Initial calculation
    updateDimensions();

    // Update on resize
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!mousePosition) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const { centerX, centerY } = cachedDimensions.current;

    const offsetX = ((mousePosition.x - centerX) / centerX) * strength;
    const offsetY = ((mousePosition.y - centerY) / centerY) * strength;

    setOffset({ x: offsetX, y: offsetY });
  }, [mousePosition, strength]);

  return offset;
};
