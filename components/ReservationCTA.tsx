import React from 'react';

const ReservationCTA: React.FC = () => {
  return (
    <section id="reservation" className="py-24 bg-stone-800 text-stone-100 text-center px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif">Reserve Your Table</h2>
        <p className="text-stone-400 font-light text-lg">
          Experience the harmony of traditional flavors and modern artistry.
        </p>
        <button className="bg-stone-100 text-stone-900 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors duration-300">
          Make a Reservation
        </button>
      </div>
    </section>
  );
};

export default ReservationCTA;