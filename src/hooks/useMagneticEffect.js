import { useRef, useState, useEffect } from 'react';

export const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return; // Skip magnetic effect on touch devices

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Activation radius
      const activationRadius = 150;

      // Apply magnetic effect within radius
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (distance < activationRadius) {
          const pull = 1 - distance / activationRadius;
          setPosition({
            x: distanceX * strength * pull,
            y: distanceY * strength * pull,
          });
        } else {
          setPosition({ x: 0, y: 0 });
        }
      });
    };

    const handleMouseLeave = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: 0, y: 0 });
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [strength]);

  return { ref, position };
};
