import { useState, useEffect, useRef } from 'react';
import { useMouseContext } from '../contexts/MousePositionContext';

export const useHeroMousePosition = (heroRef) => {
  const [position, setPosition] = useState(null);
  const { mousePosition, isTouchDevice } = useMouseContext();
  const isHovering = useRef(false);
  const cachedRect = useRef(null);
  const [rectVersion, setRectVersion] = useState(0);

  // Cache rect on mount and update on resize/scroll
  useEffect(() => {
    if (isTouchDevice || !heroRef.current) return;

    const updateRect = () => {
      if (heroRef.current) {
        cachedRect.current = heroRef.current.getBoundingClientRect();
        // Trigger recalculation by updating version
        setRectVersion(v => v + 1);
      }
    };

    // Initial calculation
    updateRect();

    // Update on resize and scroll
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [heroRef, isTouchDevice]);

  // Handle mouse enter/leave
  useEffect(() => {
    if (isTouchDevice || !heroRef.current) return;

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      setPosition(null);
    };

    const hero = heroRef.current;
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [heroRef, isTouchDevice]);

  // Update position when mouse moves or rect changes
  useEffect(() => {
    if (isTouchDevice || !mousePosition || !isHovering.current || !cachedRect.current) {
      return;
    }

    const x = mousePosition.x - cachedRect.current.left;
    const y = mousePosition.y - cachedRect.current.top;

    setPosition({ x, y });
  }, [mousePosition, isTouchDevice, rectVersion]);

  return position;
};
