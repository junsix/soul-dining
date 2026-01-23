import React from 'react';
import { IMAGES } from '@/shared/config';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="소울 다이닝의 정갈한 한식 파인다이닝 테이블"
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-stone-50 space-y-6 max-w-4xl px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase opacity-90">
            Korean Contemporary
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-wide leading-tight">
            <span className="block mb-2">SOUL</span>
            <span className="block italic font-serif">DINING</span>
          </h1>
        </div>

        <div className="w-16 h-[1px] bg-stone-50/50 mx-auto my-8"></div>

        <p className="font-serif text-lg md:text-xl font-light text-stone-200 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
          동양의 미와 한국의 맛<br/>
          그 깊이를 담아낸 다이닝
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70"
        aria-hidden="true"
      >
        <div className="w-[1px] h-16 bg-stone-50 mx-auto"></div>
        <span className="block text-[10px] tracking-widest text-stone-50 mt-2 uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
