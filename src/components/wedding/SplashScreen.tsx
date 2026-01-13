import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Gold particles that converge toward center
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    startX: Math.random() * 400 - 200,
    startY: Math.random() * 400 - 200,
    delay: 0.8 + Math.random() * 0.8,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-burgundy flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Decorative pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="splashPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="2" fill="white" />
                  <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#splashPattern)" />
            </svg>
          </div>

          {/* Gold particles converging */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-gold"
              style={{
                boxShadow: "0 0 10px hsl(var(--gold)), 0 0 20px hsl(var(--gold) / 0.5)",
              }}
              initial={{
                x: particle.startX,
                y: particle.startY,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Central monogram container */}
          <div className="relative flex flex-col items-center">
            {/* Animated T & G Monogram */}
            <motion.svg
              viewBox="0 0 300 120"
              className="w-80 md:w-96 h-32 md:h-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Letter T - Drawing animation */}
              <motion.path
                d="M30 20 L90 20 M60 20 L60 100"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 8px hsl(var(--gold) / 0.6))",
                }}
              />

              {/* Ampersand & - Fade and scale */}
              <motion.text
                x="150"
                y="75"
                textAnchor="middle"
                fill="hsl(var(--gold-light))"
                fontSize="48"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
              >
                &
              </motion.text>

              {/* Letter G - Drawing animation */}
              <motion.path
                d="M270 40 C230 10 200 30 200 60 C200 90 230 110 260 100 C280 95 280 70 260 70 L240 70"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 8px hsl(var(--gold) / 0.6))",
                }}
              />
            </motion.svg>

            {/* Couple names */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <p className="font-display text-3xl md:text-4xl text-gold tracking-wide">
                Tanishk & Ginni
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="mt-4 flex items-center gap-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-lg">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Loading indicator */}
            <motion.p
              className="mt-8 text-ivory/60 text-sm tracking-[0.3em] uppercase font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.5, 1] }}
              transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
            >
              Welcome
            </motion.p>
          </div>

          {/* Pulsing glow ring */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full border border-gold/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full border border-gold/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
