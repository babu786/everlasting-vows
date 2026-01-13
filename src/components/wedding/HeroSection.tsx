import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/50 to-ivory/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Ornamental Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-gold text-lg md:text-xl tracking-[0.3em] uppercase font-body font-light">
            Wedding Invitation
          </span>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-burgundy mb-2">
            Arjun
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="font-display text-3xl md:text-4xl text-gold italic">&</span>
            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-burgundy">
            Priya
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl md:text-2xl text-burgundy-light italic mt-8 mb-10"
        >
          "Two souls, one journey"
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block"
        >
          <div className="bg-burgundy/90 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-lg shadow-elegant">
            <p className="text-gold-light font-body text-sm tracking-widest uppercase mb-2">
              Save the Date
            </p>
            <p className="font-display text-3xl md:text-4xl text-ivory font-semibold">
              15th February, 2026
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-burgundy/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-burgundy/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
