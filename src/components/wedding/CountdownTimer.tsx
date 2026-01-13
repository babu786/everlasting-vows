import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEDDING_DATE = new Date("2026-01-23T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Flip Card Component for individual digits
const FlipCard = ({ digit }: { digit: string }) => {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit && !isFlipping) {
      setIsFlipping(true);
      
      const timer = setTimeout(() => {
        setPrevDigit(digit);
        setIsFlipping(false);
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit, isFlipping]);

  return (
    <div className="relative w-8 md:w-14 lg:w-16" style={{ perspective: "400px" }}>
      <div className="relative w-full h-16 md:h-24 lg:h-28">
        {/* Top Half (Static) - Shows current digit */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-burgundy rounded-t-lg overflow-hidden border-b border-burgundy-light/20 shadow-lg">
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            <span className="font-display text-3xl md:text-5xl lg:text-6xl text-ivory font-bold leading-none translate-y-1/2">
              {digit}
            </span>
          </div>
        </div>

        {/* Bottom Half (Static) - Shows current digit */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-burgundy/90 rounded-b-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-start justify-center pt-0">
            <span className="font-display text-3xl md:text-5xl lg:text-6xl text-ivory font-bold leading-none -translate-y-1/2">
              {digit}
            </span>
          </div>
        </div>

        {/* Flip Animation */}
        <AnimatePresence mode="wait">
          {isFlipping && (
            <>
              {/* Top flipping down - shows OLD digit */}
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2 bg-burgundy rounded-t-lg overflow-hidden origin-bottom z-20 shadow-lg"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -90 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
              >
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <span className="font-display text-3xl md:text-5xl lg:text-6xl text-ivory font-bold leading-none translate-y-1/2">
                    {prevDigit}
                  </span>
                </div>
              </motion.div>

              {/* Bottom flipping up - reveals NEW digit */}
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-burgundy/90 rounded-b-lg overflow-hidden origin-top z-20 shadow-lg"
                initial={{ rotateX: 90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
              >
                <div className="absolute inset-0 flex items-start justify-center pt-0">
                  <span className="font-display text-3xl md:text-5xl lg:text-6xl text-ivory font-bold leading-none -translate-y-1/2">
                    {digit}
                  </span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Center line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-burgundy-light/30 z-10" />
        
        {/* Side notches */}
        <div className="absolute left-0 top-1/2 w-1 h-2 bg-cream rounded-r -translate-y-1/2" />
        <div className="absolute right-0 top-1/2 w-1 h-2 bg-cream rounded-l -translate-y-1/2" />
      </div>
    </div>
  );
};

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
    <section className="py-12 md:py-20 bg-gradient-to-b from-ivory to-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Counting Down To
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-burgundy mt-2 font-semibold">
            Our Special Day
          </h3>
        </motion.div>

        {/* Flip Clock Countdown */}
        <div className="grid grid-cols-4 gap-2 md:gap-6 lg:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Flip Cards Container */}
              <div className="flex justify-center gap-1 md:gap-2 mb-3">
                <FlipCard digit={String(unit.value).padStart(2, "0")[0]} />
                <FlipCard digit={String(unit.value).padStart(2, "0")[1]} />
              </div>
              
              {/* Label */}
              <p className="text-burgundy font-body text-xs md:text-sm tracking-wide uppercase font-medium">
                {unit.label}
              </p>
              <p className="text-gold text-xs font-body">
                {unit.labelHi}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
