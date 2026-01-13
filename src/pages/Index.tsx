import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventsSection from "@/components/wedding/EventsSection";
import BlessingsSection from "@/components/wedding/BlessingsSection";

import VenueSection from "@/components/wedding/VenueSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import BackgroundMusic from "@/components/wedding/BackgroundMusic";
import FloatingElements from "@/components/wedding/FloatingElements";

import WhatsAppShare from "@/components/wedding/WhatsAppShare";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <FloatingElements />
      <WhatsAppShare />
      <BackgroundMusic />
      <HeroSection />
      <CountdownTimer />
      <CoupleSection />
      
      <EventsSection />
      <BlessingsSection />
      
      <VenueSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
