import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const idCounter = useRef(0);
  const throttleRef = useRef(false);

  const isDark = theme === "dark";

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle to ~60fps
    if (throttleRef.current) return;
    throttleRef.current = true;
    
    requestAnimationFrame(() => {
      const newPoint: TrailPoint = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => {
        const updated = [...prev, newPoint];
        // Limit trail length
        if (updated.length > 12) {
          return updated.slice(-12);
        }
        return updated;
      });

      throttleRef.current = false;
    });
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, handleMouseMove]);

  // Cleanup old points
  useEffect(() => {
    if (trail.length === 0) return;

    const cleanup = setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 150);

    return () => clearTimeout(cleanup);
  }, [trail]);

  // Don't render on mobile
  if (isMobile) return null;

  // Color based on theme - silver starlight in dark mode, gold in light mode
  const glowHsl = isDark 
    ? "220, 25%, 85%" 
    : "42, 75%, 55%";

  return (
    <div className="fixed inset-0 pointer-events-none z-[99]">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ 
              opacity: 0.8, 
              scale: 1,
              width: 8 - index * 0.3,
              height: 8 - index * 0.3,
            }}
            animate={{ 
              opacity: 0, 
              scale: 0.3,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0 
            }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut" 
            }}
          >
            {/* Inner glow */}
            <div 
              className={`w-full h-full rounded-full ${isDark ? 'bg-starlight' : 'bg-gold'}`}
              style={{
                boxShadow: `
                  0 0 ${4 + index}px hsl(${glowHsl}),
                  0 0 ${8 + index * 2}px hsla(${glowHsl}, 0.6),
                  0 0 ${12 + index * 3}px hsla(${glowHsl}, 0.3)
                `,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Subtle sparkle particles at cursor position */}
      <AnimatePresence>
        {trail.length > 0 && trail.slice(-3).map((point) => (
          <motion.div
            key={`sparkle-${point.id}`}
            className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-gold-light' : 'bg-gold-light'}`}
            style={{
              left: point.x + (Math.random() - 0.5) * 20,
              top: point.y + (Math.random() - 0.5) * 20,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: -10 - Math.random() * 10,
              x: (Math.random() - 0.5) * 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
