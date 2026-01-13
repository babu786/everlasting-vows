import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { PaisleyPattern, GoldParticles } from "./AnimatedPatterns";
import { SplitText } from "./TextAnimations";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Multi-layer parallax speeds
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yMidLayer = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Background Image (slowest) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: yBackground,
          opacity
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/50 to-ivory/90" />
      </motion.div>

      {/* Layer 2: Paisley Patterns (medium speed) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none text-gold"
        style={{ y: yMidLayer }}
      >
        <PaisleyPattern className="w-40 h-40 top-10 left-10" opacity={0.08} />
        <PaisleyPattern className="w-32 h-32 top-20 right-20 rotate-45" opacity={0.06} />
        <PaisleyPattern className="w-36 h-36 bottom-40 left-20 -rotate-30" opacity={0.07} />
        <PaisleyPattern className="w-28 h-28 bottom-20 right-10 rotate-90" opacity={0.05} />
      </motion.div>

      {/* Layer 3: Gold Particles (fastest) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: yForeground }}
      >
        <GoldParticles count={20} />
      </motion.div>

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

        {/* Names with SplitText animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-burgundy mb-2">
            <SplitText text="Tanishk" staggerDelay={0.05} />
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <motion.span 
              className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.span 
              className="font-display text-3xl md:text-4xl text-gold italic"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
            >
              &
            </motion.span>
            <motion.span 
              className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-burgundy">
            <SplitText text="Ginni" staggerDelay={0.05} />
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-display text-xl md:text-2xl text-burgundy-light italic mt-8 mb-10"
        >
          "Two souls, one journey"
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="inline-block"
        >
          <div className="bg-burgundy/90 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-lg shadow-elegant">
            <p className="text-gold-light font-body text-sm tracking-widest uppercase mb-2">
              Save the Date
            </p>
            <p className="font-display text-3xl md:text-4xl text-ivory font-semibold">
              23rd January, 2026
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
