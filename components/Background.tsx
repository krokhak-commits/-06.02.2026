
import React, { useMemo } from 'react';

const Background: React.FC = () => {
  // Generate static twinkling stars once
  const staticStars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  // Generate shooting stars
  const shootingStars = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 50}%`,
      left: `${50 + Math.random() * 50}%`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${Math.random() * 15}s`
    }));
  }, []);

  return (
    <div className="stars-container">
      {/* Background Twinkling Stars */}
      {staticStars.map((star) => (
        <div
          key={`static-${star.id}`}
          className="static-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            '--duration': star.duration,
            animationDelay: star.delay
          } as React.CSSProperties}
        />
      ))}

      {/* Falling Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="shooting-star"
          style={{
            '--top': star.top,
            '--left': star.left,
            '--duration': star.duration,
            '--delay': star.delay
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Background;
