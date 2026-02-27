import { useEffect, useRef, useState } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    if (hasTouch) return; // Skip mouse tracking on touch devices

    const updateMousePosition = (e) => {
      // Cancel previous frame if exists
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Schedule update for next frame
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return isTouchDevice ? null : mousePosition;
};
