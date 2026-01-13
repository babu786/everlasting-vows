import { motion } from "framer-motion";
import groomImage from "@/assets/groom.jpg";
import brideImage from "@/assets/bride.jpg";
import TiltCard from "./TiltCard";
import { PaisleyPattern } from "./AnimatedPatterns";

const CoupleSection = () => {
  return (
    <section className="section-padding bg-cream dark:bg-background relative overflow-hidden">
      {/* Animated Paisley Background Pattern */}
      <div className="absolute inset-0 pointer-events-none text-gold overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <PaisleyPattern className="w-64 h-64 -top-20 -left-20 rotate-12" opacity={0.04} />
          <PaisleyPattern className="w-48 h-48 top-1/3 -right-10 -rotate-45" opacity={0.03} />
          <PaisleyPattern className="w-56 h-56 -bottom-10 left-1/4 rotate-30" opacity={0.035} />
        </motion.div>
      </div>

      {/* Decorative blur orbs with pulsing animation */}
      <motion.div 
        className="absolute top-10 left-10 w-48 h-48 bg-gold/8 dark:bg-candle-glow/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-20 right-16 w-56 h-56 bg-gold/6 dark:bg-candle-glow/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 w-40 h-40 bg-gold/10 dark:bg-candle-glow/12 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-0 w-52 h-52 bg-gold/7 dark:bg-candle-glow/9 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.1, 0.07] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-20 left-16 w-44 h-44 bg-gold/8 dark:bg-candle-glow/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-48 h-48 bg-gold/6 dark:bg-candle-glow/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            दूल्हा और दुल्हन
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy dark:text-gold mt-4 font-semibold">
            Welcome
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Couple Cards */}
        <div className="space-y-20 md:space-y-32">
          {/* Groom - First Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="relative md:w-1/2 flex justify-center">
              <TiltCard className="relative inline-block">
                <div className="image-frame w-64 h-80 md:w-80 md:h-[28rem]">
                  <img
                    src={groomImage}
                    alt="The Groom - Tanishk"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative corners */}
                <div className="ornament-corner top-left -top-3 -left-3" />
                <div className="ornament-corner top-right -top-3 -right-3" />
                <div className="ornament-corner bottom-left -bottom-3 -left-3" />
                <div className="ornament-corner bottom-right -bottom-3 -right-3" />
              </TiltCard>
            </div>
            
            <div className="md:w-1/2 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-body">
                  The Groom
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-burgundy dark:text-gold font-semibold mt-2 mb-4">
                  Tanishk
                </h3>
                <div className="w-20 h-px bg-gradient-to-r from-gold/60 to-transparent mx-auto md:mx-0 mb-6" />
                <p className="font-display text-xl md:text-2xl text-burgundy/80 dark:text-gold-light italic mb-4">
                  "आपका स्वागत है"
                </p>
                <p className="text-foreground/80 font-body text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  With immense joy and gratitude, I welcome you to celebrate 
                  the beginning of our beautiful journey together. Your blessings 
                  and presence will make this occasion truly special.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bride - Second Welcome on Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
          >
            <div className="relative md:w-1/2 flex justify-center">
              <TiltCard className="relative inline-block">
                <div className="image-frame w-64 h-80 md:w-80 md:h-[28rem]">
                  <img
                    src={brideImage}
                    alt="The Bride - Ginni"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative corners */}
                <div className="ornament-corner top-left -top-3 -left-3" />
                <div className="ornament-corner top-right -top-3 -right-3" />
                <div className="ornament-corner bottom-left -bottom-3 -left-3" />
                <div className="ornament-corner bottom-right -bottom-3 -right-3" />
              </TiltCard>
            </div>
            
            <div className="md:w-1/2 text-center md:text-right">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-body">
                  The Bride
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-burgundy dark:text-gold font-semibold mt-2 mb-4">
                  Ginni
                </h3>
                <div className="w-20 h-px bg-gradient-to-l from-gold/60 to-transparent mx-auto md:ml-auto md:mr-0 mb-6" />
                <p className="font-display text-xl md:text-2xl text-burgundy/80 dark:text-gold-light italic mb-4">
                  "हृदय से स्वागत है"
                </p>
                <p className="text-foreground/80 font-body text-base leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
                  With a heart full of dreams and eyes filled with hope, 
                  I warmly welcome you to witness the union of our souls. 
                  May your blessings guide us on this sacred path.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
