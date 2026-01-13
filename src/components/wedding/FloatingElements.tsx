import { motion } from "framer-motion";

const FloatingElements = () => {
  // Cherry blossom petals - increased count for more visual impact
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    size: 12 + Math.random() * 10,
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
      {/* Floating Cherry Blossom Petals */}
      {petals.map((petal) => (
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

      {/* Glowing Diyas */}
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
            {/* Diya glow effect - enhanced */}
            <motion.div 
              className="absolute inset-0 bg-gold/40 rounded-full blur-xl w-10 h-10 -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-2xl md:text-3xl drop-shadow-lg">🪔</span>
          </div>
        </motion.div>
      ))}

      {/* Enhanced Corner Mandala - Top Left with scaling */}
      <motion.div
        className="absolute top-4 left-4 w-20 h-20 md:w-28 md:h-28 opacity-25"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* 16 radial lines for more detail */}
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
          {/* Outer dots */}
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
          {/* Inner dots */}
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
          {/* Petal shapes */}
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

      {/* Enhanced Corner Mandala - Bottom Right with scaling */}
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 md:w-28 md:h-28 opacity-25"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-burgundy fill-current">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Overlapping ellipses for intricate pattern */}
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
          {/* Center flower */}
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

      {/* Additional small mandala - Top Right */}
      <motion.div
        className="absolute top-20 right-8 w-12 h-12 md:w-16 md:h-16 opacity-15 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
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

      {/* Additional small mandala - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-8 w-12 h-12 md:w-16 md:h-16 opacity-15 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-burgundy fill-current">
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
    </div>
  );
};

export default FloatingElements;
