import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventsSection from "@/components/wedding/EventsSection";
import BlessingsSection from "@/components/wedding/BlessingsSection";
import VenueSection from "@/components/wedding/VenueSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import BackgroundMusic from "@/components/wedding/BackgroundMusic";
import FloatingElements from "@/components/wedding/FloatingElements";
import CursorTrail from "@/components/wedding/CursorTrail";
import WaveTransition from "@/components/wedding/WaveTransition";
import RangoliDivider from "@/components/wedding/RangoliDivider";
import MarigoldGarland from "@/components/wedding/MarigoldGarland";

const Index = () => {
  return (
    <>
      <CursorTrail />
      <main className="overflow-hidden">
        <FloatingElements />
        <BackgroundMusic />
        <HeroSection />
        <CountdownTimer />
        
        <MarigoldGarland />
        <CoupleSection />
        <RangoliDivider variant="gold" />
        
        <EventsSection />
        <WaveTransition 
          fromColor="hsl(var(--ivory))" 
          toColor="hsl(var(--burgundy))" 
          variant="wave" 
        />
        
        <BlessingsSection />
        <div className="-mt-1 -mb-1">
          <WaveTransition 
            fromColor="hsl(var(--burgundy))" 
            toColor="hsl(var(--ivory))" 
            variant="wave"
            flip
          />
        </div>
        
        <VenueSection />
        <ClosingSection />
      </main>
    </>
  );
};

export default Index;
