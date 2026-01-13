import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  {
    date: "2020",
    titleEn: "How We Met",
    titleHi: "कैसे मिले",
    description: "Our paths crossed for the first time, and little did we know that this meeting would change our lives forever.",
    descriptionHi: "पहली बार हमारी राहें मिलीं, और हमें पता नहीं था कि यह मुलाकात हमारी जिंदगी बदल देगी।",
    icon: "💫",
  },
  {
    date: "2021",
    titleEn: "First Date",
    titleHi: "पहली डेट",
    description: "A simple coffee turned into hours of conversation, laughter, and the beginning of something beautiful.",
    descriptionHi: "एक साधारण कॉफी घंटों की बातचीत, हंसी और कुछ खूबसूरत की शुरुआत में बदल गई।",
    icon: "☕",
  },
  {
    date: "2023",
    titleEn: "The Proposal",
    titleHi: "सगाई का प्रस्ताव",
    description: "Under a starlit sky, the question was asked and the answer was yes! A moment we'll cherish forever.",
    descriptionHi: "तारों भरे आसमान के नीचे, सवाल पूछा गया और जवाब हां था! एक पल जो हमेशा याद रहेगा।",
    icon: "💍",
  },
  {
    date: "2024",
    titleEn: "Engagement",
    titleHi: "सगाई",
    description: "Surrounded by family and friends, we celebrated our love and commitment to each other.",
    descriptionHi: "परिवार और दोस्तों के बीच, हमने अपने प्यार और प्रतिबद्धता का जश्न मनाया।",
    icon: "🎊",
  },
  {
    date: "23 Jan 2026",
    titleEn: "Wedding Day",
    titleHi: "विवाह का दिन",
    description: "The day we officially begin our forever journey together as husband and wife.",
    descriptionHi: "वह दिन जब हम पति-पत्नी के रूप में अपनी शाश्वत यात्रा शुरू करेंगे।",
    icon: "💒",
  },
];

const LoveStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-ivory relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-rose rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Our Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy mt-2 font-semibold">
            Love Story
          </h2>
          <p className="text-burgundy-light font-display text-lg mt-2 italic">
            हमारी प्रेम कहानी
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-burgundy/30 to-gold/50 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-burgundy/30 to-gold/50 md:hidden" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 
                  ? "md:flex-row" 
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-gold/20 shadow-elegant"
                >
                  {/* Date Badge */}
                  <div className={`inline-flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="bg-burgundy/10 text-burgundy px-3 py-1 rounded-full text-sm font-body font-medium">
                      {milestone.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-burgundy font-semibold mb-1">
                    {milestone.titleEn}
                  </h3>
                  <p className="text-gold text-sm font-body mb-3">
                    {milestone.titleHi}
                  </p>
                  
                  {/* Description */}
                  <p className="text-foreground/70 font-body text-sm leading-relaxed mb-2">
                    {milestone.description}
                  </p>
                  <p className="text-foreground/60 font-body text-xs italic">
                    {milestone.descriptionHi}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center border-4 border-cream shadow-lg"
                >
                  <Heart className="w-4 h-4 text-ivory fill-ivory" />
                </motion.div>
              </div>

              {/* Spacer for alternating layout on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-3xl">💑</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-display text-burgundy-light italic text-lg mt-4">
            "And they lived happily ever after..."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStorySection;
