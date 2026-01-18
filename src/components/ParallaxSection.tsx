import { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  index: number;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  index,
  speed = 0.3,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const [transform, setTransform] = useState({
    translateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
  });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollY = window.scrollY;

      /* ✅ MOBILE FIX: prevent parallax at page load */
      if (isMobile && scrollY < 50) {
        setTransform({
          translateY: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
        });
        return;
      }

      const windowHeight = window.innerHeight;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate section's position relative to viewport center
      const viewportCenter = scrollY + windowHeight / 2;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const distanceFromCenter = viewportCenter - sectionCenter;

      // Normalize distance
      const normalizedDistance = distanceFromCenter / (windowHeight * 0.8);

      // Reduce effect for small sections
      const isSmallSection = sectionHeight < windowHeight * 0.5;
      const parallaxMultiplier = isSmallSection ? 0.3 : 1;

      const translateY =
        normalizedDistance * speed * 100 * parallaxMultiplier;

const scaleAmount = isMobile
  ? 0.12           // 👈 very small scale on mobile
  : isSmallSection
  ? 0.05
  : 0.12;

const scale = 1 - Math.abs(normalizedDistance) * scaleAmount;

const opacity = isMobile
  ? Math.max(0.85, 1 - Math.abs(normalizedDistance) * 0.25)
  : Math.max(0.7, 1 - Math.abs(normalizedDistance) * 0.5);



      // Z-index overlap
      const zIndex = Math.floor(100 - Math.abs(normalizedDistance) * 70);

      setTransform({
        translateY,
        scale: Math.max(0.95, Math.min(1, scale)),
        opacity: Math.max(0.7, Math.min(1, opacity)),
        zIndex: Math.max(10, Math.min(100, zIndex)),
      });
    };

    let rafId: number;
    const scrollHandler = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${transform.translateY}px) scale(${transform.scale})`,
        opacity: transform.opacity,
        zIndex: transform.zIndex,
        position: 'relative',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </section>
  );
}
