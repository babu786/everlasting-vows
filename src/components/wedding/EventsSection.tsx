import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

const events = [
  {
    name: "श्री गणेश पूजन",
    subtitle: "(पीला चावल)",
    date: "शनिवार, 17 जनवरी 2026",
    description: "शुभ विवाह समारोह की शुरुआत गणेश पूजन के साथ",
  },
  {
    name: "बान सगड़ी, बाठ, लगन टीका",
    subtitle: "प्रतिबोज एवं महिला संगीत",
    date: "बुधवार, 21 जनवरी 2026",
    description: "परंपरागत रस्मों और संगीत की मनोहर शाम",
  },
  {
    name: "चक एवं हल्दी",
    subtitle: "",
    date: "गुरुवार, 22 जनवरी 2026",
    description: "हल्दी की रस्म के साथ मंगलमय तैयारियां",
  },
  {
    name: "निकासी",
    subtitle: "",
    date: "शुक्रवार, 23 जनवरी 2026",
    description: "शुभ विवाह का पवित्र मुहूर्त",
  },
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

      <div className="max-w-4xl mx-auto relative">
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
            विवाह समारोह
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 md:-translate-x-1/2" />

          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-burgundy rounded-full flex items-center justify-center shadow-elegant z-10">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}
              >
                <div className="card-elegant p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-burgundy font-semibold mb-1">
                    {event.name}
                  </h3>
                  {event.subtitle && (
                    <p className="text-burgundy/70 font-body text-sm mb-3">
                      {event.subtitle}
                    </p>
                  )}
                  
                  <div className={`flex flex-wrap gap-4 mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 font-body text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
