import { motion } from "framer-motion";
import { Calendar, Clock, PartyPopper } from "lucide-react";

// Sparkle star icon for timeline nodes
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    <circle cx="18" cy="5" r="1" opacity="0.6" />
    <circle cx="6" cy="5" r="1" opacity="0.6" />
    <circle cx="18" cy="15" r="0.8" opacity="0.4" />
    <circle cx="6" cy="15" r="0.8" opacity="0.4" />
  </svg>
);

const eventDays = [
  {
    title: "Shri Ganesh Pujan",
    subtitle: "(Peela Chawal)",
    date: "Saturday, 17 January 2026",
    description: "Shubh wedding ceremonies ki shuruaat Ganesh Pujan ke saath",
    timings: [
      { event: "Ganesh Pujan", time: "8:30 AM" }
    ]
  },
  {
    title: "Baan Sagdi, Baath, Lagan Tika",
    subtitle: "Pratibhoj evam Mahila Sangeet",
    date: "Wednesday, 21 January 2026",
    description: "Traditional rasmon aur sangeet ki manohar shaam",
    timings: [
      { event: "Baath", time: "8:15 AM" },
      { event: "Lagan Tika", time: "10:00 AM" },
      { event: "Pratibhoj", time: "12:15 PM" },
      { event: "Mahila Sangeet", time: "6:00 PM" }
    ]
  },
  {
    title: "Chak evam Haldi",
    subtitle: "(Haldi Ceremony)",
    date: "Thursday, 22 January 2026",
    description: "Haldi ki rasam ke saath mangalmay taiyaariyan",
    timings: [
      { event: "Chak", time: "10:00 AM" },
      { event: "Haldi", time: "1:15 PM" }
    ]
  },
  {
    title: "Vivah",
    subtitle: "(Panigrahana Sanskar)",
    date: "Friday, 23 January 2026",
    description: "Shubh Lagna mein Vivah Sanskar",
    timings: [
      { event: "Nikasi", time: "4:30 PM" },
      { event: "Panigrahana Sanskar", time: "Shubh Lagna" }
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
            Auspicious Occasions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            Wedding Ceremonies
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Vertical Timeline - Centered with Alternating Cards */}
        <div className="relative max-w-5xl mx-auto pb-8">
          {/* Timeline Line - Centered (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/30 via-gold/60 to-gold/30" />
          
          {/* Timeline Line - Left aligned for mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/30 via-gold/60 to-gold/30" />

          {/* Event Days */}
          <div className="space-y-12 md:space-y-16">
            {eventDays.map((day, dayIndex) => {
              const isLeft = dayIndex % 2 === 0;
              
              return (
                <div
                  key={day.date}
                  className="relative"
                >
                  {/* Timeline Node with Sparkle - Desktop (centered) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: dayIndex * 0.1, type: "spring" }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-burgundy items-center justify-center z-10 shadow-lg"
                  >
                    <SparkleIcon className="w-5 h-5 text-gold" />
                  </motion.div>

                  {/* Timeline Node with Sparkle - Mobile (left aligned) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: dayIndex * 0.1, type: "spring" }}
                    className="md:hidden absolute left-3 top-6 w-8 h-8 rounded-full bg-burgundy flex items-center justify-center z-10 shadow-lg -translate-x-1/2"
                  >
                    <SparkleIcon className="w-4 h-4 text-gold" />
                  </motion.div>

                  {/* Horizontal Connector Line - Desktop only */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: dayIndex * 0.1 + 0.2 }}
                    className={`hidden md:block absolute top-10 h-0.5 bg-gold/50 ${
                      isLeft 
                        ? 'right-1/2 w-[80px] origin-right mr-5' 
                        : 'left-1/2 w-[80px] origin-left ml-5'
                    }`}
                  />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: dayIndex * 0.1 + 0.1 }}
                    className={`relative pl-14 md:pl-0 md:w-[45%] ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    {/* Card */}
                    <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border/50 text-left">
                      {/* Event Title */}
                      <h3 className="font-display text-2xl md:text-3xl text-burgundy font-semibold leading-tight">
                        {day.title}
                      </h3>
                      
                      {/* Subtitle */}
                      {day.subtitle && (
                        <p className="text-gold font-body text-sm md:text-base mt-1">
                          {day.subtitle}
                        </p>
                      )}

                      {/* Date with Calendar Icon */}
                      <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="font-body text-sm">{day.date}</span>
                      </div>

                      {/* Timings */}
                      {day.timings && day.timings.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <div className="flex flex-wrap gap-3">
                            {day.timings.map((timing, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center gap-1.5 bg-burgundy/5 px-3 py-1.5 rounded-full"
                              >
                                <Clock className="w-3.5 h-3.5 text-gold" />
                                <span className="text-xs font-body">
                                  <span className="text-foreground/70">{timing.event}:</span>
                                  <span className="text-burgundy font-medium ml-1">{timing.time}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-foreground/70 font-body text-sm mt-4 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
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
                  Baraat Nikasi
                </h4>
                <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed">
                  Baraat <span className="text-burgundy font-medium">Friday, 23 January 2026</span> ko 
                  <span className="text-gold font-medium"> shaam 5:15 baje</span> vivah sthal se rawana hokar 
                  <span className="text-burgundy font-medium"> Hathoj Mod, Sirsi Road</span> se sajkar 
                  <span className="text-burgundy font-medium"> Sanganer Mahal Garden</span> ke liye prasthan karegi.
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
