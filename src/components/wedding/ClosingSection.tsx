import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="section-padding bg-burgundy relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/20"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Heart className="w-8 h-8 fill-current" />
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
            Arjun & Priya
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
          Made with love • February 2026
        </motion.p>
      </div>
    </section>
  );
};

export default ClosingSection;
