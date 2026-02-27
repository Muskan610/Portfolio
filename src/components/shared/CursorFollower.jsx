import { useMousePosition } from '../../hooks/useMousePosition';

const CursorFollower = () => {
  const mousePosition = useMousePosition();

  // Don't render on touch devices
  if (!mousePosition) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-50 w-3 h-3 rounded-full bg-accent mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Follower ring with delay */}
      <div
        className="pointer-events-none fixed z-50 w-8 h-8 rounded-full border-2 border-accent mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorFollower;
