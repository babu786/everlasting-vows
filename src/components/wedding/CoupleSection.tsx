import { motion } from "framer-motion";
import groomImage from "@/assets/groom.jpg";
import brideImage from "@/assets/bride.jpg";

const CoupleSection = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose/30 rounded-full blur-3xl" />

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
            The Couple
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            Meet Us
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              <div className="image-frame w-64 h-80 md:w-72 md:h-96 mx-auto">
                <img
                  src={groomImage}
                  alt="The Groom"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corners */}
              <div className="ornament-corner top-left -top-3 -left-3" />
              <div className="ornament-corner top-right -top-3 -right-3" />
              <div className="ornament-corner bottom-left -bottom-3 -left-3" />
              <div className="ornament-corner bottom-right -bottom-3 -right-3" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-burgundy font-semibold mb-2">
              Arjun Sharma
            </h3>
            <p className="text-muted-foreground font-body text-sm tracking-wide mb-4">
              Son of Mr. Rajesh & Mrs. Sunita Sharma
            </p>
            <p className="text-foreground/80 font-body text-sm max-w-sm mx-auto leading-relaxed">
              A software engineer with a passion for music and travel. 
              He believes in the beauty of traditional values and the 
              strength of family bonds.
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              <div className="image-frame w-64 h-80 md:w-72 md:h-96 mx-auto">
                <img
                  src={brideImage}
                  alt="The Bride"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corners */}
              <div className="ornament-corner top-left -top-3 -left-3" />
              <div className="ornament-corner top-right -top-3 -right-3" />
              <div className="ornament-corner bottom-left -bottom-3 -left-3" />
              <div className="ornament-corner bottom-right -bottom-3 -right-3" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-burgundy font-semibold mb-2">
              Priya Kapoor
            </h3>
            <p className="text-muted-foreground font-body text-sm tracking-wide mb-4">
              Daughter of Mr. Vikram & Mrs. Meera Kapoor
            </p>
            <p className="text-foreground/80 font-body text-sm max-w-sm mx-auto leading-relaxed">
              A doctor by profession with a heart full of compassion. 
              She cherishes traditions and dreams of building a loving 
              home filled with laughter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
