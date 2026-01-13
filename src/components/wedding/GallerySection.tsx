import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

// Placeholder images - replace with your actual engagement/pre-wedding photos
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    alt: "Couple moment 1",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop",
    alt: "Couple moment 2",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
    alt: "Couple moment 3",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop",
    alt: "Couple moment 4",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
    alt: "Couple moment 5",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    alt: "Couple moment 6",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Memories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mt-4 font-semibold">
            Our Gallery
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="px-4 text-gold text-2xl">❧</span>
          </div>
          <p className="text-muted-foreground font-body text-sm mt-4 max-w-md mx-auto">
            Precious moments from our journey together
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 1 || index === 3 ? "row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-12 h-12 bg-ivory/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Camera className="w-5 h-5 text-burgundy" />
                </motion.div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Note for customization */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground/60 font-body text-xs mt-8 italic"
        >
          Upload your engagement photos to personalize this gallery
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-burgundy/95 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-ivory/20 transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6 text-ivory" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-ivory/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-ivory" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-ivory/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-ivory" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-ivory/10 px-4 py-2 rounded-full">
              <span className="text-ivory font-body text-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
