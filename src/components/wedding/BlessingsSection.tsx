import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import blessingsBg from "@/assets/blessings-bg.jpg";
import { AnimatedDiya } from "./AnimatedPatterns";

const BlessingsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${blessingsBg})`,
          y: yBackground
        }}
      >
        <div className="absolute inset-0 bg-burgundy/85" />
      </motion.div>

      {/* Floating Diyas */}
      <AnimatedDiya className="top-20 left-10 md:left-20" />
      <AnimatedDiya className="top-32 right-16 md:right-32" />
      <AnimatedDiya className="bottom-24 left-1/4 hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-body">
            With Blessings
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mt-4 font-semibold">
            Family Blessings
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6 mb-12">
            <span className="px-4 text-gold-light text-2xl">❧</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Quote with animated quote marks */}
          <div className="relative">
            <motion.span 
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gold/30 font-display"
              animate={{ y: [0, -5, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              "
            </motion.span>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-ivory/95 italic leading-relaxed">
              May your love for each other grow stronger with each passing day. 
              May your home be filled with laughter, warmth, and endless blessings.
            </blockquote>
            <motion.span 
              className="absolute -bottom-4 right-1/4 text-6xl text-gold/30 font-display"
              animate={{ y: [0, -5, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              "
            </motion.span>
          </div>

          <p className="text-gold-light font-body text-sm tracking-wide mt-8">
            — With love from both families
          </p>
        </motion.div>

        {/* Simple Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center items-center gap-3"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2.5 + i * 0.2, 
                repeat: Infinity, 
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="rounded-full bg-gold/70 shadow-[0_0_8px_rgba(184,134,11,0.4)]"
              style={{
                width: i % 2 === 0 ? 8 : 10,
                height: i % 2 === 0 ? 8 : 10,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
