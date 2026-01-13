import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ClosingSection = () => {
  // Heart configurations with varied sizes and positions
  const hearts = [
    { left: "8%", top: "15%", size: "w-6 h-6", delay: 0 },
    { left: "22%", top: "35%", size: "w-10 h-10", delay: 0.5 },
    { left: "35%", top: "20%", size: "w-8 h-8", delay: 1 },
    { left: "50%", top: "45%", size: "w-7 h-7", delay: 1.5 },
    { left: "65%", top: "25%", size: "w-12 h-12", delay: 2 },
    { left: "78%", top: "40%", size: "w-9 h-9", delay: 2.5 },
    { left: "88%", top: "18%", size: "w-6 h-6", delay: 3 },
    { left: "15%", top: "60%", size: "w-8 h-8", delay: 0.8 },
    { left: "75%", top: "65%", size: "w-10 h-10", delay: 1.8 },
    { left: "45%", top: "70%", size: "w-7 h-7", delay: 2.2 },
  ];

  return (
    <section className="section-padding bg-burgundy relative overflow-hidden">
      {/* Circle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circlePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="25" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="18" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className={`absolute text-gold/25 ${heart.size}`}
            style={{
              left: heart.left,
              top: heart.top,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-full h-full fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-body">
            With Gratitude
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mt-4 font-semibold">
            Thank You
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6 mb-10">
            <span className="px-4 text-gold-light text-2xl">❧</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="font-display text-xl md:text-2xl text-ivory/90 italic leading-relaxed">
            We are truly blessed to have you in our lives. Your presence at our 
            wedding would be the greatest gift we could receive.
          </p>
          
          <p className="text-ivory/70 font-body text-sm leading-relaxed max-w-xl mx-auto">
            With heartfelt gratitude, we invite you to be a part of our special day 
            as we embark on this beautiful journey together. Your love and blessings 
            mean the world to us.
          </p>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gold/20"
        >
          <p className="font-display text-3xl md:text-4xl text-gold">
            Tanishk & Ginni
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold/40" />
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <span className="w-12 h-px bg-gold/40" />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-ivory/40 font-body text-xs tracking-wide"
        >
          Made with love • January 2026
        </motion.p>
      </div>
    </section>
  );
};

export default ClosingSection;
