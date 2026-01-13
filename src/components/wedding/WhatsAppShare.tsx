import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppShare = () => {
  const handleShare = () => {
    const message = encodeURIComponent(
      `💒 शुभ विवाह का निमंत्रण 💒\n\n` +
      `✨ Tanishk & Ginni ✨\n\n` +
      `📅 23 जनवरी 2026\n\n` +
      `आप सादर आमंत्रित हैं!\n\n` +
      `🔗 ${window.location.href}`
    );
    
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleShare}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Share on WhatsApp"
    >
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      
      {/* WhatsApp Icon */}
      <MessageCircle className="w-6 h-6 relative z-10" fill="currentColor" />
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
      >
        Share on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground" />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppShare;
