import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Using a royalty-free wedding music URL
const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/02/23/audio_ea70ad08e3.mp3?filename=indian-cinematic-18503.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedPlay = useRef(false);

  const startPlayback = () => {
    if (audioRef.current && !hasAttemptedPlay.current) {
      hasAttemptedPlay.current = true;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem("wedding-music-muted", "false");
      }).catch(() => {
        hasAttemptedPlay.current = false; // Allow retry on interaction
      });
    }
  };

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    audioRef.current.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Attempt auto-play when loaded
  useEffect(() => {
    if (isLoaded) {
      const wasMuted = localStorage.getItem("wedding-music-muted") === "true";
      if (!wasMuted) {
        startPlayback();
      }
    }
  }, [isLoaded]);

  // Fallback: Play on first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      const wasMuted = localStorage.getItem("wedding-music-muted") === "true";
      if (!wasMuted && isLoaded && !isPlaying) {
        startPlayback();
      }
    };

    const events = ['click', 'scroll', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [isLoaded, isPlaying]);

  const handleToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem("wedding-music-muted", "true");
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          localStorage.setItem("wedding-music-muted", "false");
        }).catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-burgundy/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant hover:bg-burgundy transition-colors group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Volume2 className="w-6 h-6 text-gold" />
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <VolumeX className="w-6 h-6 text-gold/70" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse animation when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default BackgroundMusic;
