import { motion } from "framer-motion";

const FloatingElements = () => {
  // Flower petals configuration
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 10 + Math.random() * 15,
  }));

  // Diyas configuration
  const diyas = [
    { id: 1, left: "5%", top: "20%", delay: 0 },
    { id: 2, right: "8%", top: "40%", delay: 1.5 },
    { id: 3, left: "10%", bottom: "30%", delay: 0.8 },
    { id: 4, right: "5%", bottom: "20%", delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Flower Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-rose opacity-60"
          style={{
            left: petal.left,
            fontSize: petal.size,
          }}
          initial={{ top: "-5%", rotate: 0 }}
          animate={{
            top: "105%",
            rotate: 360,
            x: [0, 30, -30, 0],
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
            {/* Diya glow effect */}
            <div className="absolute inset-0 bg-gold/40 rounded-full blur-xl w-8 h-8 -translate-x-1/2 -translate-y-1/2" />
            <span className="text-2xl md:text-3xl drop-shadow-lg">🪔</span>
          </div>
        </motion.div>
      ))}

      {/* Corner Mandala Patterns */}
      <motion.div
        className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx="50"
              cy="15"
              r="3"
              fill="currentColor"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-burgundy fill-current">
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
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
