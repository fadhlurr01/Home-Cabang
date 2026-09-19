import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) {
        const scrolled = (window.scrollY / h) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scrollProgress"
      style={{
        width: `${progress}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        zIndex: 101,
        background: 'linear-gradient(90deg, var(--branch-teal-500), var(--branch-teal-700))',
        transition: 'width 0.1s ease-out'
      }}
    />
  );
}

