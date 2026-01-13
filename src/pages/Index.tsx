import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventsSection from "@/components/wedding/EventsSection";
import BlessingsSection from "@/components/wedding/BlessingsSection";
import VenueSection from "@/components/wedding/VenueSection";
import ClosingSection from "@/components/wedding/ClosingSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CoupleSection />
      <EventsSection />
      <BlessingsSection />
      <VenueSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
