import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const VenueSection = () => {
  // Example coordinates for a venue in Delhi
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0714545621397!2d77.20896631508125!3d28.63285018241876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin";

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />

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
            Location
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            Wedding Venue
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="card-elegant p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-burgundy font-semibold mb-2">
                    The Grand Mahal
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Premium Banquet & Convention Center
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-foreground/80 font-body mb-8">
                <p className="text-sm leading-relaxed">
                  123, Ceremonial Avenue,<br />
                  Near Central Park,<br />
                  Connaught Place,<br />
                  New Delhi - 110001
                </p>
                <p className="text-sm">
                  <span className="text-burgundy font-medium">Landmark:</span> Opposite Metro Station Gate No. 5
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-burgundy text-ivory px-6 py-3 rounded-lg font-body text-sm tracking-wide hover:bg-burgundy-light transition-colors shadow-elegant"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="image-frame aspect-[4/3] overflow-hidden">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
                className="absolute inset-0"
              />
            </div>
            {/* Decorative corners */}
            <div className="ornament-corner top-left -top-3 -left-3" />
            <div className="ornament-corner top-right -top-3 -right-3" />
            <div className="ornament-corner bottom-left -bottom-3 -left-3" />
            <div className="ornament-corner bottom-right -bottom-3 -right-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
