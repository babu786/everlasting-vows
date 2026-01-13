import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const FloatingElements = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  // Cherry blossom petals / Fireflies - increased count for more visual impact
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    size: 12 + Math.random() * 10,
  }));

  // Fireflies for dark mode
  const fireflies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    top: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  // Twinkling stars for dark mode background
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    size: 1 + Math.random() * 2,
  }));

  // Diyas configuration - 4 corners with staggered animations
  const diyas = [
    { id: 1, left: "5%", top: "20%", delay: 0 },
    { id: 2, right: "5%", top: "35%", delay: 1.5 },
    { id: 3, left: "8%", bottom: "35%", delay: 0.8 },
    { id: 4, right: "8%", bottom: "20%", delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Stars - Only in dark mode */}
      {isDark && stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-starlight"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Cherry Blossom Petals - Light mode */}
      {!isDark && petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-rose opacity-70"
          style={{
            left: petal.left,
            fontSize: petal.size,
          }}
          initial={{ top: "-5%", rotate: 0 }}
          animate={{
            top: "105%",
            rotate: 360,
            x: [0, 25, -25, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: petal.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Fireflies - Dark mode */}
      {isDark && fireflies.map((firefly) => (
        <motion.div
          key={`firefly-${firefly.id}`}
          className="absolute"
          style={{
            left: firefly.left,
            top: firefly.top,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 10, -15, 0],
            opacity: [0.3, 1, 0.5, 1, 0.3],
          }}
          transition={{
            duration: firefly.duration,
            delay: firefly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="rounded-full bg-candle-glow"
            style={{
              width: firefly.size,
              height: firefly.size,
              boxShadow: `0 0 ${firefly.size * 3}px hsl(35, 100%, 60%), 0 0 ${firefly.size * 6}px hsl(35, 100%, 60%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Glowing Diyas - Enhanced glow in dark mode */}
      {diyas.map((diya) => (
        <motion.div
          key={diya.id}
          className="absolute"
          style={{
            left: diya.left,
            right: diya.right,
            top: diya.top,
            bottom: diya.bottom,
          }}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: diya.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Diya glow effect - enhanced for dark mode */}
            <motion.div 
              className={`absolute inset-0 rounded-full blur-xl w-10 h-10 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'bg-candle-glow/60' : 'bg-gold/40'}`}
              animate={{ 
                scale: [1, isDark ? 1.8 : 1.4, 1], 
                opacity: isDark ? [0.6, 1, 0.6] : [0.4, 0.7, 0.4] 
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Additional outer glow for dark mode */}
            {isDark && (
              <motion.div 
                className="absolute inset-0 bg-gold/20 rounded-full blur-2xl w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            )}
            <span className="text-2xl md:text-3xl drop-shadow-lg">🪔</span>
          </div>
        </motion.div>
      ))}

      {/* Corner Mandala - Top Left - Silver in dark mode */}
      <motion.div
        className="absolute top-4 left-4 w-20 h-20 md:w-28 md:h-28 opacity-25"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${isDark ? 'text-starlight' : 'text-gold'}`}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 11.25} 50 50)`}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <circle
              key={`outer-${i}`}
              cx="50"
              cy="10"
              r="3"
              fill="currentColor"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`inner-${i}`}
              cx="50"
              cy="25"
              r="2"
              fill="currentColor"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={`petal-${i}`}
              cx="50"
              cy="42"
              rx="5"
              ry="10"
              fill="currentColor"
              fillOpacity="0.3"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Corner Mandala - Bottom Right */}
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 md:w-28 md:h-28 opacity-25"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      >
        <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${isDark ? 'text-gold' : 'text-burgundy'}`}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="40"
              ry="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={`flower-${i}`}
              cx="50"
              cy="35"
              rx="8"
              ry="15"
              fill="currentColor"
              fillOpacity="0.2"
              transform={`rotate(${i * 60} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Small mandala - Top Right */}
      <motion.div
        className="absolute top-20 right-8 w-12 h-12 md:w-16 md:h-16 opacity-15 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${isDark ? 'text-starlight' : 'text-gold'}`}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="10"
              x2="50"
              y2="90"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Small mandala - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-8 w-12 h-12 md:w-16 md:h-16 opacity-15 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${isDark ? 'text-gold' : 'text-burgundy'}`}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="20"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 60} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Moon element for dark mode - top right corner */}
      {isDark && (
        <motion.div
          className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-starlight fill-current">
            <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          {/* Moon glow */}
          <div 
            className="absolute inset-0 rounded-full blur-2xl bg-starlight/20"
            style={{ transform: 'scale(1.5)' }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default FloatingElements;
