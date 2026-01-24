import React from 'react';
import { Navigation } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { About } from '@/widgets/about-section';
import { StorySection } from '@/widgets/story-section';
import { ChefSection } from '@/widgets/chef-section';
import { MenuSection } from '@/widgets/menu-section';
import { CollaborationSection } from '@/widgets/collaboration-section';
import { ReservationCTA } from '@/widgets/reservation-cta';
import { Footer } from '@/widgets/footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-serif">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <StorySection />
        <ChefSection />
        <MenuSection />
        <CollaborationSection />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
