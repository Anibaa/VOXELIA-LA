import { motion, useScroll } from 'framer-motion';
import { COLORS, BLUR } from '@/constants/design-system';
import { useEffect, useState } from 'react';

const SHAPE_VARIANTS = {
  circle: "rounded-full",
  square: "rounded-lg rotate-45",
  triangle: "clip-path-triangle",
} as const;

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />

      {/* Gradient orbs */}
      <div 
        className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30 mix-blend-multiply" 
        style={{ 
          background: `radial-gradient(circle, ${COLORS.gradients.primary.start}, ${COLORS.gradients.secondary.end})`
        }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full blur-3xl opacity-30 mix-blend-multiply"
        style={{ 
          background: `radial-gradient(circle, ${COLORS.gradients.secondary.start}, ${COLORS.gradients.accent.end})`
        }} 
      />

      {/* Animated shapes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const shapeType = Object.keys(SHAPE_VARIANTS)[i % 3] as keyof typeof SHAPE_VARIANTS;
        const color = i % 3 === 0 
          ? COLORS.gradients.primary.start 
          : i % 3 === 1 
            ? COLORS.gradients.secondary.start 
            : COLORS.gradients.accent.start;
        
        const randomX = () => Math.random() * dimensions.width;
        const randomY = () => Math.random() * dimensions.height;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${SHAPE_VARIANTS[shapeType]} mix-blend-multiply`}
            style={{
              background: color,
              width: Math.random() * 60 + 40 + 'px',
              height: Math.random() * 60 + 40 + 'px',
              opacity: 0.07,
              filter: `blur(${Math.random() * 2}px)`,
              x: randomX(),
              y: randomY(),
            }}
            animate={{
              x: [randomX(), randomX(), randomX()],
              y: [randomY(), randomY(), randomY()],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
          />
        );
      })}

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backdropFilter: BLUR.xl,
          background: 'linear-gradient(45deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)'
        }} 
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(${COLORS.text.primary} 1px, transparent 1px), 
                           linear-gradient(90deg, ${COLORS.text.primary} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
} 