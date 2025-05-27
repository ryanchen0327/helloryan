import React, { useEffect, useRef, useMemo, useState } from 'react';

const STAR_COUNT = 40;
const STAR_SIZE = 6;
const ATTRACTION_RADIUS = 120;
const ATTRACTION_STRENGTH = 0.12;

// Only light, pastel, or vibrant (not dark) colors
const STAR_COLORS_DARK = [
  '#FF69B4', '#00E1FF', '#B388FF', '#FF5E62', '#7CFC00', '#FF6EC7', '#00FFFB', '#00FFB3', '#36cfff', '#b4aaff', '#FFD700', '#FFB347', '#FF8C00', '#FFF700', '#FFB6C1',
];
const STAR_COLORS_LIGHT = [
  '#f1f1f1', '#e5e5e5', '#e0e0e0', '#ededed', '#f5f5f5', '#f8f9fa', '#e9ecef', '#f3f4f6'
];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const getInitialDarkMode = () => {
  if (typeof window !== 'undefined') {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme) return theme === 'dark';
    
    const userPref = localStorage.getItem('theme');
    if (userPref === 'light') return false;
    if (userPref === 'dark') return true;
    return true; // Default to dark
  }
  return true;
};

function isTouchDevice() {
  if (typeof window !== 'undefined') {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  return false;
}

const CursorTracer = () => {
  const [isTouch, setIsTouch] = useState(isTouchDevice());
  useEffect(() => {
    const check = () => setIsTouch(isTouchDevice());
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  if (isTouch) return null;

  const starsRef = useRef([]);
  const [isDark, setIsDark] = useState(getInitialDarkMode);
  const colorMap = useMemo(() =>
    Array.from({ length: STAR_COUNT }, (_, i) =>
      isDark
        ? STAR_COLORS_DARK[Math.floor(Math.random() * STAR_COLORS_DARK.length)]
        : STAR_COLORS_LIGHT[Math.floor(Math.random() * STAR_COLORS_LIGHT.length)]
    ), [isDark]
  );
  const starSizes = useMemo(() => Array.from({ length: STAR_COUNT }, () => STAR_SIZE + randomBetween(-2, 2)), []);
  const positions = useRef(
    Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      vx: 0,
      vy: 0,
    }))
  );
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId;
    const animate = () => {
      positions.current.forEach((star, i) => {
        const dx = mouse.current.x - star.x;
        const dy = mouse.current.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < ATTRACTION_RADIUS) {
          star.vx += (dx / dist) * ATTRACTION_STRENGTH * (1 - dist / ATTRACTION_RADIUS);
          star.vy += (dy / dist) * ATTRACTION_STRENGTH * (1 - dist / ATTRACTION_RADIUS);
        } else {
          star.vx *= 0.96;
          star.vy *= 0.96;
        }
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = 0;
        if (star.x > window.innerWidth) star.x = window.innerWidth;
        if (star.y < 0) star.y = 0;
        if (star.y > window.innerHeight) star.y = window.innerHeight;
        const ref = starsRef.current[i];
        if (ref) {
          ref.style.left = `${star.x}px`;
          ref.style.top = `${star.y}px`;
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Listen for theme changes on the document element
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 2147483647,
      }}
    >
      {Array.from({ length: STAR_COUNT }).map((_, i) => {
        const color = colorMap[i];
        const size = starSizes[i];
        return (
          <div
            key={i}
            ref={el => starsRef.current[i] = el}
            className="star-effect"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: color,
              opacity: 0.85,
              outline: 'none',
              boxShadow: `0 0 8px 2px ${color}, 0 0 20px 4px #fff7`,
              pointerEvents: 'none',
              zIndex: 2147483647,
              transition: 'opacity 0.5s',
              animation: `starTwinkle 2.5s ease-in-out infinite alternate`,
              mixBlendMode: 'screen',
            }}
          />
        );
      })}
      <style>{`
        @keyframes starTwinkle {
          0% { opacity: 0.5; filter: blur(0.5px); }
          50% { opacity: 0.9; filter: blur(1.5px); }
          100% { opacity: 0.5; filter: blur(0.5px); }
        }
      `}</style>
    </div>
  );
};

export default CursorTracer; 