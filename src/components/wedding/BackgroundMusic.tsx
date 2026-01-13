import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

// Using a royalty-free wedding music URL
// You can replace this with your own music file URL
const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/02/23/audio_ea70ad08e3.mp3?filename=indian-cinematic-18503.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    audioRef.current.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    // Check if user previously muted
    const wasMuted = localStorage.getItem("wedding-music-muted") === "true";
    if (wasMuted) {
      setShowPrompt(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
        localStorage.setItem("wedding-music-muted", "false");
      }).catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

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

  const handleDismissPrompt = () => {
    setShowPrompt(false);
    localStorage.setItem("wedding-music-muted", "true");
  };

  return (
    <>
      {/* Initial Play Prompt */}
      <AnimatePresence>
        {showPrompt && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-burgundy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ivory rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Music className="w-8 h-8 text-gold" />
              </motion.div>
              
              <h3 className="font-display text-2xl text-burgundy font-semibold mb-3">
                Welcome to Our Wedding
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-6">
                Would you like to enjoy our invitation with beautiful background music?
              </p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handlePlay}
                  className="px-6 py-3 bg-burgundy text-ivory font-body text-sm rounded-lg hover:bg-burgundy/90 transition-colors shadow-lg"
                >
                  Play Music
                </button>
                <button
                  onClick={handleDismissPrompt}
                  className="px-6 py-3 bg-cream text-burgundy font-body text-sm rounded-lg hover:bg-cream/80 transition-colors"
                >
                  No, Thanks
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mute/Unmute Button */}
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
    </>
  );
};

export default BackgroundMusic;
