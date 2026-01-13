import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ============ TYPEWRITER TEXT ============
interface TypewriterTextProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
  className?: string;
  delay?: number;
}

export const TypewriterText = ({
  text,
  speed = 50,
  showCursor = true,
  className = "",
  delay = 0,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursorBlink, setShowCursorBlink] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Start cursor blinking after text is complete
          const blinkInterval = setInterval(() => {
            setShowCursorBlink((prev) => !prev);
          }, 500);
          return () => clearInterval(blinkInterval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-current ml-1 transition-opacity ${
            showCursorBlink ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
};

// ============ WORD BY WORD TEXT ============
interface WordByWordTextProps {
  text: string;
  staggerDelay?: number;
  className?: string;
  wordClassName?: string;
}

export const WordByWordText = ({
  text,
  staggerDelay = 0.08,
  className = "",
  wordClassName = "",
}: WordByWordTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block ${wordClassName}`}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
};

// ============ SPLIT TEXT (Letter by Letter) ============
interface SplitTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const SplitText = ({
  text,
  className = "",
  letterClassName = "",
  staggerDelay = 0.03,
  as: Component = "span",
}: SplitTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionComponent = motion[Component] as typeof motion.span;

  return (
    <MotionComponent
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: "1000px" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block ${letterClassName}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

// ============ CURSIVE DRAW TEXT ============
interface CursiveDrawTextProps {
  text: string;
  className?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
}

export const CursiveDrawText = ({
  text,
  className = "",
  fontSize = 72,
  duration = 2,
  delay = 0,
}: CursiveDrawTextProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Calculate width based on text length
  const estimatedWidth = text.length * fontSize * 0.6;
  const height = fontSize * 1.4;

  return (
    <motion.svg
      ref={ref}
      viewBox={`0 0 ${estimatedWidth} ${height}`}
      className={className}
      style={{ width: estimatedWidth, height }}
    >
      <defs>
        <linearGradient id="cursiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--gold))" />
          <stop offset="50%" stopColor="hsl(var(--gold-light))" />
          <stop offset="100%" stopColor="hsl(var(--gold))" />
        </linearGradient>
      </defs>
      
      {/* Background text (filled) */}
      <motion.text
        x="50%"
        y="70%"
        textAnchor="middle"
        fill="url(#cursiveGradient)"
        fontSize={fontSize}
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + duration }}
      >
        {text}
      </motion.text>

      {/* Stroke text (for drawing effect) */}
      <motion.text
        x="50%"
        y="70%"
        textAnchor="middle"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        fontSize={fontSize}
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={
          isInView
            ? { strokeDashoffset: 0 }
            : { strokeDashoffset: 1000 }
        }
        transition={{ duration, delay, ease: "easeOut" }}
        style={{
          filter: "drop-shadow(0 0 4px hsl(var(--gold) / 0.5))",
        }}
      >
        {text}
      </motion.text>
    </motion.svg>
  );
};

// ============ ANIMATED QUOTE ============
interface AnimatedQuoteProps {
  text: string;
  className?: string;
  speed?: number;
}

export const AnimatedQuote = ({
  text,
  className = "",
  speed = 40,
}: AnimatedQuoteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <div ref={ref} className="relative">
      {/* Animated opening quote */}
      <motion.span
        className="absolute -top-8 left-0 text-6xl text-gold/40 font-display"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
      >
        "
      </motion.span>
      
      <blockquote className={className}>
        {displayedText}
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-gold ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </blockquote>
      
      {/* Animated closing quote */}
      <motion.span
        className="absolute -bottom-4 right-0 text-6xl text-gold/40 font-display"
        initial={{ opacity: 0, x: 20 }}
        animate={
          displayedText.length === text.length
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 20 }
        }
        transition={{ duration: 0.6 }}
      >
        "
      </motion.span>
    </div>
  );
};
