import { motion } from "framer-motion";

// Paisley SVG Pattern
export const PaisleyPattern = ({ className = "", opacity = 0.03 }: { className?: string; opacity?: number }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    style={{ opacity }}
    animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M100 20C60 20 30 60 30 100C30 140 60 180 100 180C140 180 170 140 170 100C170 60 140 20 100 20ZM100 40C130 40 150 70 150 100C150 130 130 160 100 160C70 160 50 130 50 100C50 70 70 40 100 40Z"
      fill="currentColor"
    />
    <path
      d="M100 50C80 50 65 70 65 95C65 120 80 140 100 150C120 140 135 120 135 95C135 70 120 50 100 50Z"
      fill="currentColor"
    />
    <circle cx="100" cy="90" r="15" fill="currentColor" />
    <path
      d="M70 60C50 80 50 120 70 140"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M130 60C150 80 150 120 130 140"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </motion.svg>
);

// Large Rotating Mandala for backgrounds
export const LargeMandala = ({ className = "", opacity = 0.04 }: { className?: string; opacity?: number }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    style={{ opacity }}
    animate={{ rotate: 360, scale: [1, 1.02, 1] }}
    transition={{ 
      rotate: { duration: 120, repeat: Infinity, ease: "linear" },
      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    {/* Outer ring */}
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" />
    <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.5" />
    
    {/* Petals - 16 directions */}
    {Array.from({ length: 16 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
        <ellipse cx="200" cy="50" rx="15" ry="40" fill="currentColor" fillOpacity="0.3" />
        <ellipse cx="200" cy="70" rx="8" ry="20" fill="currentColor" fillOpacity="0.5" />
      </g>
    ))}
    
    {/* Inner circles */}
    <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
    <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" />
    
    {/* Inner petals - 8 directions */}
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 200 200)`}>
        <ellipse cx="200" cy="120" rx="10" ry="25" fill="currentColor" fillOpacity="0.4" />
        <path d="M195 140 L200 160 L205 140" fill="currentColor" fillOpacity="0.3" />
      </g>
    ))}
    
    {/* Center */}
    <circle cx="200" cy="200" r="40" fill="currentColor" fillOpacity="0.2" />
    <circle cx="200" cy="200" r="25" fill="currentColor" fillOpacity="0.3" />
    <circle cx="200" cy="200" r="10" fill="currentColor" fillOpacity="0.5" />
  </motion.svg>
);

// Henna/Mehndi Pattern
export const HennaPattern = ({ className = "", opacity = 0.04 }: { className?: string; opacity?: number }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    viewBox="0 0 300 300"
    fill="none"
    style={{ opacity }}
    animate={{ opacity: [opacity, opacity * 1.5, opacity] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* Main vine */}
    <path
      d="M150 280 C150 240, 100 220, 100 180 C100 140, 150 120, 150 80 C150 40, 100 20, 100 20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Leaves */}
    <path d="M100 180 C80 170, 60 180, 50 200 C60 190, 80 190, 100 180" fill="currentColor" />
    <path d="M150 80 C170 70, 190 80, 200 100 C190 90, 170 90, 150 80" fill="currentColor" />
    <path d="M100 180 C120 170, 140 180, 150 200 C140 190, 120 190, 100 180" fill="currentColor" />
    {/* Dots */}
    <circle cx="50" cy="200" r="5" fill="currentColor" />
    <circle cx="200" cy="100" r="5" fill="currentColor" />
    <circle cx="150" cy="200" r="5" fill="currentColor" />
    {/* Spirals */}
    <path d="M70 150 C60 150, 55 145, 55 135 C55 125, 65 120, 75 125" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M180 130 C190 130, 195 135, 195 145 C195 155, 185 160, 175 155" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </motion.svg>
);

// Floating Gold Particles
export const GoldParticles = ({ count = 15 }: { count?: number }) => {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// Animated Diya (for Blessings section)
export const AnimatedDiya = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ 
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6]
    }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gold/40 rounded-full blur-xl"
        style={{ width: 60, height: 60, marginLeft: -10, marginTop: -20 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Flame */}
      <motion.div
        className="w-4 h-8 bg-gradient-to-t from-gold via-yellow-400 to-orange-300 rounded-full mx-auto"
        animate={{ scaleY: [1, 1.2, 1], scaleX: [1, 0.9, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Base */}
      <div className="w-10 h-3 bg-gradient-to-b from-gold to-gold-dark rounded-full mx-auto -mt-1" />
    </div>
  </motion.div>
);
