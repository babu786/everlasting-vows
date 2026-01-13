import { motion } from "framer-motion";
import blessingsBg from "@/assets/blessings-bg.jpg";

const BlessingsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blessingsBg})` }}
      >
        <div className="absolute inset-0 bg-burgundy/85" />
      </div>

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
          {/* Quote */}
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gold/30 font-display">
              "
            </span>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-ivory/95 italic leading-relaxed">
              May your love for each other grow stronger with each passing day. 
              May your home be filled with laughter, warmth, and endless blessings.
            </blockquote>
            <span className="absolute -bottom-4 right-1/4 text-6xl text-gold/30 font-display">
              "
            </span>
          </div>

          <p className="text-gold-light font-body text-sm tracking-wide mt-8">
            — With love from both families
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center gap-4"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="w-2 h-2 rounded-full bg-gold/60"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
