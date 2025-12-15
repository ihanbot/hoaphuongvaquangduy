import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Venue from './components/Venue';
import Timeline from './components/Timeline';
import Accommodation from './components/Accommodation';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    // The main wrapper restricts width to emulate a luxury mobile card/invitation
    <div className="min-h-screen bg-[#e6e2dd] py-0 md:py-10">
      <div className="max-w-[480px] mx-auto bg-sand shadow-2xl overflow-hidden min-h-screen relative">
        <Hero />
        <Intro />
        <Venue />
        <Timeline />
        <Accommodation />
        <RSVP />
        <Footer />
        
        {/* Designer's Note included in code structure as requested, visible only in code or if uncommented */}
        {/* 
          Designer's Note:
          1. Visual Flow: Hero -> Emotion -> Logic -> Action. We start with the couple (Hero), move to the emotional ask (Intro), then the logistics (Venue/Timeline), and finally the call to action (RSVP).
          2. Hierarchy: Names and Dates are largest. Section titles use Serif for elegance. Body text is Sans for readability on mobile.
          3. Mobile & Sharing: Restricting max-width to 480px ensures the design looks perfect on phones (primary device) and maintains the "card" aesthetic on desktop, avoiding stretched layouts.
        */}
      </div>
    </div>
  );
}

export default App;