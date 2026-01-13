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
            {/* Animated T & G Monogram - Elegant Script Style */}
            <motion.svg
              viewBox="0 0 420 200"
              className="w-80 md:w-[420px] h-40 md:h-52"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative top flourish */}
              <motion.path
                d="M100,25 C130,15 180,18 210,28 C240,18 290,15 320,25"
                fill="none"
                stroke="hsl(var(--gold-light))"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              />

              {/* Cursive T with elegant flourishes */}
              <motion.path
                d="M70,50 C85,42 115,42 130,50 C135,53 132,60 128,65 
                   Q125,70 120,75 L100,130 Q95,145 85,148 
                   C78,150 72,145 75,138 Q78,132 85,128 
                   C90,125 95,130 92,138 Q88,150 70,155"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--gold))) drop-shadow(0 0 10px hsl(var(--gold) / 0.4))",
                }}
              />

              {/* T crossbar flourish */}
              <motion.path
                d="M55,55 C60,48 75,45 100,48 C125,51 145,48 150,55"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--gold) / 0.6))",
                }}
              />

              {/* Elegant calligraphic ampersand */}
              <motion.path
                d="M190,55 C175,45 168,60 178,72 C188,84 200,88 195,105 
                   C190,122 170,125 165,110 C160,95 175,85 190,90 
                   C205,95 215,110 230,105 C240,100 235,85 225,80"
                fill="none"
                stroke="hsl(var(--gold-light))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--gold) / 0.5))",
                }}
              />

              {/* Cursive G with flowing loop */}
              <motion.path
                d="M320,45 C360,35 380,55 375,85 C370,115 340,135 310,125 
                   C290,118 285,100 300,90 L330,90 C340,90 345,100 340,115 
                   L325,155 C320,168 305,172 295,165 C285,158 290,145 302,145"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--gold))) drop-shadow(0 0 10px hsl(var(--gold) / 0.4))",
                }}
              />

              {/* G decorative tail flourish */}
              <motion.path
                d="M302,145 C315,148 330,145 345,135 C355,128 365,130 360,142 
                   C355,155 340,165 320,168"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--gold) / 0.5))",
                }}
              />

              {/* Bottom connecting flourish */}
              <motion.path
                d="M75,160 C110,175 160,178 210,170 C260,178 310,175 345,160"
                fill="none"
                stroke="hsl(var(--gold-light))"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              />

              {/* Center decorative dot */}
              <motion.circle
                cx="210"
                cy="170"
                r="3"
                fill="hsl(var(--gold))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--gold)))",
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
