import { motion } from "framer-motion";

interface WaveTransitionProps {
  fromColor?: string;
  toColor?: string;
  variant?: "wave" | "curtain" | "gradient";
  flip?: boolean;
}

const WaveTransition = ({
  fromColor = "transparent",
  toColor = "hsl(var(--burgundy))",
  variant = "wave",
  flip = false,
}: WaveTransitionProps) => {
  if (variant === "wave") {
    return (
      <div className="relative w-full h-24 md:h-32 overflow-hidden">
        <motion.svg
          viewBox="0 0 1440 120"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <defs>
            <linearGradient 
              id={`waveGradient-${flip}`} 
              x1="0%" 
              y1={flip ? "100%" : "0%"} 
              x2="0%" 
              y2={flip ? "0%" : "100%"}
            >
              <stop offset="0%" stopColor={fromColor} />
              <stop offset="100%" stopColor={toColor} />
            </linearGradient>
          </defs>
          
          {/* Animated wave path - flip via transform, not container rotation */}
          <g transform={flip ? "translate(0, 120) scale(1, -1)" : undefined}>
            <motion.path
              d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill={`url(#waveGradient-${flip})`}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            {/* Secondary subtle wave */}
            <motion.path
              d="M0,60 C360,30 720,90 1080,50 C1260,30 1380,70 1440,50 L1440,120 L0,120 Z"
              fill={toColor}
              fillOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            />
          </g>
        </motion.svg>
      </div>
    );
  }

  if (variant === "curtain") {
    return (
      <div className="relative w-full h-32 md:h-40 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-1/2 h-full origin-left"
          style={{ backgroundColor: toColor }}
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute right-0 top-0 w-1/2 h-full origin-right"
          style={{ backgroundColor: toColor }}
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Reveal line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>
    );
  }

  // Gradient dissolve
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Decorative line */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
        <span className="text-gold text-sm">✦</span>
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
      </motion.div>
    </div>
  );
};

export default WaveTransition;
