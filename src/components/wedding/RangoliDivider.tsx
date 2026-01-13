import { motion } from "framer-motion";

interface RangoliDividerProps {
  variant?: "gold" | "burgundy";
}

const RangoliDivider = ({ variant = "gold" }: RangoliDividerProps) => {
  const colorClass = variant === "gold" ? "text-gold" : "text-burgundy";
  const lineColor = variant === "gold" ? "hsl(var(--gold))" : "hsl(var(--burgundy))";
  
  return (
    <div className="relative py-8 overflow-hidden">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left decorative line with draw effect */}
        <motion.div 
          className="h-px w-16 md:w-32 origin-right"
          style={{
            background: `linear-gradient(to right, transparent, ${lineColor}50, ${lineColor})`
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        
        {/* Central Rangoli Pattern */}
        <motion.svg
          viewBox="0 0 120 120"
          className={`w-20 h-20 md:w-28 md:h-28 mx-4 ${colorClass}`}
          initial={{ rotate: -180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Outer lotus petals */}
          {[...Array(8)].map((_, i) => (
            <motion.ellipse
              key={`outer-petal-${i}`}
              cx="60"
              cy="20"
              rx="8"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              transform={`rotate(${i * 45} 60 60)`}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            />
          ))}
          
          {/* Inner lotus petals */}
          {[...Array(8)].map((_, i) => (
            <motion.ellipse
              key={`inner-petal-${i}`}
              cx="60"
              cy="35"
              rx="5"
              ry="12"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 45 + 22.5} 60 60)`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + 0.05 * i }}
            />
          ))}
          
          {/* Concentric circles */}
          <motion.circle
            cx="60"
            cy="60"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          
          {/* Central flower */}
          <motion.circle
            cx="60"
            cy="60"
            r="8"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          
          {/* Bindis (dots) around */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`bindi-${i}`}
              cx="60"
              cy="15"
              r="3"
              fill="currentColor"
              transform={`rotate(${i * 45} 60 60)`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.9 + 0.05 * i }}
            />
          ))}
          
          {/* Paisley hints */}
          {[...Array(4)].map((_, i) => (
            <motion.path
              key={`paisley-${i}`}
              d="M60 5 Q55 10 58 15 Q62 12 60 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 90} 60 60)`}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 + 0.1 * i }}
            />
          ))}
        </motion.svg>
        
        {/* Right decorative line with draw effect */}
        <motion.div 
          className="h-px w-16 md:w-32 origin-left"
          style={{
            background: `linear-gradient(to left, transparent, ${lineColor}50, ${lineColor})`
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default RangoliDivider;
