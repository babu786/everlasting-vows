import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/90 backdrop-blur-md border border-gold/40 shadow-elegant hover:shadow-glow transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
    >
      <div className="relative w-7 h-7">
        <AnimatePresence mode="wait">
          {isDark ? (
            // Moon with stars
            <motion.div
              key="moon"
              className="absolute inset-0"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Stars around moon */}
              <motion.div
                className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gold rounded-full"
                animate={{ 
                  opacity: [0.4, 1, 0.4], 
                  scale: [0.8, 1.2, 0.8] 
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute top-0 -left-1 w-1 h-1 bg-gold-light rounded-full"
                animate={{ 
                  opacity: [0.3, 1, 0.3], 
                  scale: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 right-0 w-1 h-1 bg-gold rounded-full"
                animate={{ 
                  opacity: [0.5, 1, 0.5], 
                  scale: [0.7, 1.1, 0.7] 
                }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
              />
              
              {/* Moon */}
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-gold fill-current"
              >
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </motion.div>
          ) : (
            // Sun with rays
            <motion.div
              key="sun"
              className="absolute inset-0"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Animated rays */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-2 bg-gold rounded-full left-1/2 -translate-x-1/2"
                    style={{
                      top: "-4px",
                      transformOrigin: "center 18px",
                      transform: `translateX(-50%) rotate(${i * 45}deg)`,
                    }}
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                      scaleY: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Sun center */}
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-gold fill-current relative z-10"
              >
                <circle cx="12" cy="12" r="5" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
