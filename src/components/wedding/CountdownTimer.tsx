import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-01-23T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", labelHi: "दिन", value: timeLeft.days },
    { label: "Hours", labelHi: "घंटे", value: timeLeft.hours },
    { label: "Minutes", labelHi: "मिनट", value: timeLeft.minutes },
    { label: "Seconds", labelHi: "सेकंड", value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-ivory to-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Counting Down To
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-burgundy mt-2 font-semibold">
            Our Special Day
          </h3>
        </motion.div>

        {/* Countdown Boxes */}
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background/80 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-3 md:p-6 text-center shadow-elegant">
                {/* Number */}
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-display text-3xl md:text-5xl lg:text-6xl text-burgundy font-bold"
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.div>
                
                {/* Label */}
                <p className="text-muted-foreground font-body text-xs md:text-sm mt-2 tracking-wide uppercase">
                  {unit.label}
                </p>
                <p className="text-gold text-xs font-body hidden md:block">
                  {unit.labelHi}
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-gold/50 rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-gold/50 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-gold/50 rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-gold/50 rounded-br-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
