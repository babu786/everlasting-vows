import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, PartyPopper } from "lucide-react";

const eventDays = [
  {
    date: "शनिवार, 17 जनवरी 2026",
    venue: "श्याम वाटिका",
    events: [
      { name: "श्री गणेश पूजन (पीला चावल)", time: "प्रातः 8.30 बजे" }
    ]
  },
  {
    date: "बुधवार, 21 जनवरी 2026",
    venue: "श्याम वाटिका",
    events: [
      { name: "भात", time: "प्रातः 8.15 बजे" },
      { name: "लगन टीका", time: "प्रातः 10.00 बजे" },
      { name: "प्रतिबोज", time: "दोपहर 12.15 बजे" },
      { name: "महिला संगीत", time: "सायं 6.00 बजे" }
    ]
  },
  {
    date: "गुरुवार, 22 जनवरी 2026",
    venue: "श्याम वाटिका",
    events: [
      { name: "चाक", time: "प्रातः 10.00 बजे" },
      { name: "हल्दी", time: "दोपहर 1.15 बजे" }
    ]
  },
  {
    date: "शुक्रवार, 23 जनवरी 2026",
    venue: "सांगानेर महल गार्डन",
    events: [
      { name: "निकासी", time: "सायं 4.30 बजे" },
      { name: "पाणिग्रहण संस्कार", time: "रात्रि शुभ लग्नानुसार" }
    ]
  }
];

const EventsSection = () => {
  return (
    <section className="section-padding bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            शुभ मुहूर्त
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            वैवाहिक कार्यक्रम
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Vertical Timeline - Centered with Alternating Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Centered (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold/20 via-gold/60 to-gold/20" />
          
          {/* Timeline Line - Left aligned for mobile */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold/20 via-gold/60 to-gold/20" />

          {/* Event Days */}
          <div className="space-y-6 md:space-y-8">
            {eventDays.map((day, dayIndex) => {
              const isLeft = dayIndex % 2 === 0;
              
              return (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
                  className={`relative pl-12 md:pl-0 md:flex ${isLeft ? 'md:justify-start md:pr-[52%]' : 'md:justify-end md:pl-[52%]'}`}
                >
                  {/* Timeline Node - Mobile (left aligned) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: dayIndex * 0.1 + 0.2 }}
                    className="md:hidden absolute left-3 top-5 w-4 h-4 rounded-full bg-gold border-2 border-burgundy shadow-[0_0_10px_rgba(184,134,11,0.4)] z-10"
                  >
                    <div className="absolute inset-1 rounded-full bg-burgundy" />
                  </motion.div>

                  {/* Timeline Node - Desktop (centered) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: dayIndex * 0.1 + 0.2 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-5 h-5 rounded-full bg-gold border-2 border-burgundy shadow-[0_0_12px_rgba(184,134,11,0.5)] z-10 items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-burgundy" />
                  </motion.div>

                  {/* Connector Line - Desktop only */}
                  <div 
                    className={`hidden md:block absolute top-7 w-6 h-0.5 bg-gold/40 ${
                      isLeft ? 'right-[48%]' : 'left-[48%]'
                    }`}
                  />

                  {/* Card */}
                  <div className="card-elegant p-4 md:p-5 w-full">
                    {/* Date Header */}
                    <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-gold/15">
                      <div className="w-9 h-9 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 text-burgundy" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg md:text-xl text-burgundy font-semibold leading-tight">
                          {day.date}
                        </h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
                          <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                          <span className="truncate">{day.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Events List */}
                    <div className="space-y-2.5">
                      {day.events.map((event, eventIndex) => (
                        <motion.div
                          key={event.name}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: dayIndex * 0.1 + eventIndex * 0.05 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 group-hover:scale-150 transition-transform" />
                          <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
                            <h4 className="font-display text-base text-foreground font-medium truncate">
                              {event.name}
                            </h4>
                            <div className="flex items-center gap-1 text-gold text-sm flex-shrink-0">
                              <Clock className="w-3 h-3" />
                              <span className="font-body">{event.time}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Baraat Route Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-r from-burgundy/5 via-burgundy/10 to-burgundy/5 rounded-2xl p-6 md:p-8 border border-gold/30">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <PartyPopper className="w-6 h-6 text-burgundy" />
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl text-burgundy font-semibold mb-3">
                  बारात निकासी
                </h4>
                <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed">
                  बारात <span className="text-burgundy font-medium">शुक्रवार, 23 जनवरी 2026</span> को 
                  <span className="text-gold font-medium"> सायं 5.15 बजे</span> विवाह स्थल से रवाना होकर 
                  <span className="text-burgundy font-medium"> हाथोज मोड़, सिरसी रोड</span> से सजकर 
                  <span className="text-burgundy font-medium"> सांगानेर महल गार्डन</span> के लिए प्रस्थान करेगी।
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
