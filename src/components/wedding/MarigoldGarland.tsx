import { motion } from "framer-motion";

const MarigoldGarland = () => {
  // Create garland elements - alternating marigolds and leaves
  const garlandItems = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    type: i % 2 === 0 ? "flower" : "leaf",
    delay: i * 0.05,
  }));

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Main garland container with draping curve */}
      <motion.div
        className="flex justify-center items-end"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 400 60"
          className="w-full max-w-3xl h-12 md:h-16"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Hanging string */}
          <motion.path
            d="M0 5 Q100 50 200 40 Q300 30 400 5"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          
          {/* Marigold flowers and leaves along the path */}
          {garlandItems.map((item, index) => {
            const x = (index / (garlandItems.length - 1)) * 380 + 10;
            const y = 5 + Math.sin((index / garlandItems.length) * Math.PI) * 35;
            
            if (item.type === "flower") {
              return (
                <motion.g
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: item.delay + 0.5 }}
                >
                  {/* Marigold flower - layered circles */}
                  <circle cx={x} cy={y} r="8" fill="#FF8C00" />
                  <circle cx={x} cy={y} r="5" fill="#FFA500" />
                  <circle cx={x} cy={y} r="2.5" fill="#FFD700" />
                  {/* Petal details */}
                  {[...Array(6)].map((_, j) => (
                    <circle
                      key={j}
                      cx={x + Math.cos((j * 60 * Math.PI) / 180) * 6}
                      cy={y + Math.sin((j * 60 * Math.PI) / 180) * 6}
                      r="3"
                      fill="#FF8C00"
                    />
                  ))}
                </motion.g>
              );
            } else {
              return (
                <motion.g
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: item.delay + 0.5 }}
                >
                  {/* Mango leaf */}
                  <ellipse
                    cx={x}
                    cy={y}
                    rx="4"
                    ry="7"
                    fill="#228B22"
                    transform={`rotate(${index % 2 === 0 ? 15 : -15} ${x} ${y})`}
                  />
                  <line
                    x1={x}
                    y1={y - 6}
                    x2={x}
                    y2={y + 6}
                    stroke="#1a6b1a"
                    strokeWidth="0.5"
                  />
                </motion.g>
              );
            }
          })}
        </svg>
      </motion.div>
      
      {/* Subtle animation for swaying effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 3, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MarigoldGarland;
