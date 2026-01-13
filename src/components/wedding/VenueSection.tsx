import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Sparkles } from "lucide-react";
import { HennaPattern } from "./AnimatedPatterns";
import TiltCard from "./TiltCard";

const venues = [
  {
    name: "श्याम वाटिका",
    subtitle: "पारिवारिक कार्यक्रम स्थल",
    address: "माताजी के मंदिर के पास, फूलबाग, जयपुर",
    events: ["गणेश पूजन", "भात", "लगन टीका", "प्रतिबोज", "महिला संगीत", "चाक", "हल्दी"],
    dates: "17, 21-22 जनवरी 2026",
    mapLink: "https://maps.app.goo.gl/pU7wiEuiTCpvaoTR6",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d75.7582537!3d26.9662306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU3JzU4LjQiTiA3NcKwNDUnMjkuNyJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
  },
  {
    name: "सांगानेर महल गार्डन",
    subtitle: "विवाह समारोह स्थल",
    address: "सांगानेर, जयपुर",
    events: ["निकासी", "पाणिग्रहण संस्कार"],
    dates: "23 जनवरी 2026",
    mapLink: "https://maps.google.com/?q=Sanganer+Jaipur",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d75.7871!3d26.8234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b123456789%3A0xabcdef123456789!2sSanganer%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
  }
];

const VenueSection = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Henna Pattern Background */}
      <div className="absolute inset-0 pointer-events-none text-gold overflow-hidden">
        <HennaPattern className="w-80 h-80 -bottom-20 -right-20" opacity={0.05} />
        <HennaPattern className="w-64 h-64 -top-10 -left-16 rotate-180" opacity={0.04} />
      </div>

      {/* Decorative elements with pulsing */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

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
            समारोह स्थल
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            स्थान विवरण
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Venues Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TiltCard className="card-elegant overflow-hidden h-full">
                {/* Map */}
                <div className="relative aspect-video">
                  <iframe
                    src={venue.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${venue.name} Location`}
                    className="absolute inset-0"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Venue Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-burgundy font-semibold">
                        {venue.name}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {venue.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">
                    {venue.address}
                  </p>

                  {/* Date Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-sm text-burgundy font-medium">{venue.dates}</span>
                  </div>

                  {/* Events at this venue */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      आयोजन
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {venue.events.map((event) => (
                        <span
                          key={event}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-burgundy text-xs font-body rounded-full border border-gold/20"
                        >
                          <Sparkles className="w-3 h-3 text-gold" />
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Directions Button */}
                  <a
                    href={venue.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-burgundy text-ivory px-6 py-3 rounded-lg font-body text-sm tracking-wide hover:bg-burgundy-light transition-colors shadow-elegant w-full justify-center"
                  >
                    <Navigation className="w-4 h-4" />
                    दिशा-निर्देश प्राप्त करें
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
