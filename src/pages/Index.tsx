import { useState } from "react";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventsSection from "@/components/wedding/EventsSection";
import BlessingsSection from "@/components/wedding/BlessingsSection";
import VenueSection from "@/components/wedding/VenueSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import BackgroundMusic from "@/components/wedding/BackgroundMusic";
import FloatingElements from "@/components/wedding/FloatingElements";
import SplashScreen from "@/components/wedding/SplashScreen";
import CursorTrail from "@/components/wedding/CursorTrail";
import WaveTransition from "@/components/wedding/WaveTransition";

import RangoliDivider from "@/components/wedding/RangoliDivider";
import MarigoldGarland from "@/components/wedding/MarigoldGarland";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Splash Screen */}
      {!showContent && <SplashScreen onComplete={() => setShowContent(true)} />}
      
      {/* Cursor Trail Effect (Desktop only) */}
      {showContent && <CursorTrail />}

      <main className={`overflow-hidden transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
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
        <WaveTransition 
          fromColor="hsl(var(--burgundy))" 
          toColor="hsl(var(--ivory))" 
          variant="wave"
          flip
        />
        
        <VenueSection />
        <ClosingSection />
      </main>
    </>
  );
};

export default Index;
