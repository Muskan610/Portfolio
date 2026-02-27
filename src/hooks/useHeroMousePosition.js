import { useState, useEffect, useRef } from 'react';

export const useHeroMousePosition = (heroRef) => {
  const [position, setPosition] = useState(null);
  const rafId = useRef(null);
  const isHovering = useRef(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Touch device check - disable on mobile
    const hasTouch = 'ontouchstart' in window;
    if (hasTouch) return;

    const updatePosition = () => {
      if (!heroRef.current || !isHovering.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = lastMousePosition.current.x - rect.left;
      const y = lastMousePosition.current.y - rect.top;

      // Use requestAnimationFrame for smooth 60fps updates
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x, y });
      });
    };

    const handleMouseMove = (e) => {
      lastMousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
      updatePosition();
    };

    const handleScroll = () => {
      // Update position on scroll to keep spotlight aligned
      updatePosition();
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      setPosition(null);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mouseenter', handleMouseEnter);
      hero.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mouseenter', handleMouseEnter);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [heroRef]);

  return position;
};
