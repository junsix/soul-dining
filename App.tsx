import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ChefSection from './components/ChefSection';
import MenuSection from './components/MenuSection';
import ReservationCTA from './components/ReservationCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-serif">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <ChefSection />
        <MenuSection />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;