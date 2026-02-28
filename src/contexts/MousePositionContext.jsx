import { createContext, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const MousePositionContext = createContext(null);

export const MousePositionProvider = ({ children }) => {
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

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <MousePositionContext.Provider value={{ mousePosition, isTouchDevice }}>
      {children}
    </MousePositionContext.Provider>
  );
};

MousePositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMousePosition = () => {
  const context = useContext(MousePositionContext);
  if (!context) {
    throw new Error('useMousePosition must be used within MousePositionProvider');
  }
  return context.isTouchDevice ? null : context.mousePosition;
};

export const useMouseContext = () => {
  const context = useContext(MousePositionContext);
  if (!context) {
    throw new Error('useMouseContext must be used within MousePositionProvider');
  }
  return context;
};
