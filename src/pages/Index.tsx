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
import RangoliDivider from "@/components/wedding/RangoliDivider";
import MarigoldGarland from "@/components/wedding/MarigoldGarland";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <FloatingElements />
      <WhatsAppShare />
      <BackgroundMusic />
      <HeroSection />
      <CountdownTimer />
      
      <MarigoldGarland />
      <CoupleSection />
      <RangoliDivider variant="gold" />
      
      <EventsSection />
      <RangoliDivider variant="burgundy" />
      
      <BlessingsSection />
      <RangoliDivider variant="gold" />
      
      <VenueSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
