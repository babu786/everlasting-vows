import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventsSection from "@/components/wedding/EventsSection";
import BlessingsSection from "@/components/wedding/BlessingsSection";
import GallerySection from "@/components/wedding/GallerySection";
import VenueSection from "@/components/wedding/VenueSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import BackgroundMusic from "@/components/wedding/BackgroundMusic";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <BackgroundMusic />
      <HeroSection />
      <CountdownTimer />
      <CoupleSection />
      <EventsSection />
      <BlessingsSection />
      <GallerySection />
      <VenueSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
