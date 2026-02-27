import { useHeroMousePosition } from '../../hooks/useHeroMousePosition';

const SpotlightCursor = ({ heroRef }) => {
  const mousePosition = useHeroMousePosition(heroRef);

  if (!mousePosition) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-5"
      style={{
        background: `radial-gradient(
          circle 300px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 182, 182, 0.35) 15%,
          rgba(255, 182, 182, 0.2) 35%,
          rgba(255, 182, 182, 0.1) 50%,
          transparent 80%
        )`,
        transition: 'background 0.1s ease-out',
      }}
    />
  );
};

export default SpotlightCursor;
