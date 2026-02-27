import { useState, useEffect } from 'react';
import { useMousePosition } from './useMousePosition';

export const useParallax = (strength = 20) => {
  const mousePosition = useMousePosition();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mousePosition) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    // Calculate offset based on mouse position relative to center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = ((mousePosition.x - centerX) / centerX) * strength;
    const offsetY = ((mousePosition.y - centerY) / centerY) * strength;

    setOffset({ x: offsetX, y: offsetY });
  }, [mousePosition, strength]);

  return offset;
};
