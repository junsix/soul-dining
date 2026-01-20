import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/600/800?random=201"
            alt="셰프가 정성스럽게 요리를 플레이팅하는 모습"
            loading="lazy"
            className="w-full h-[300px] object-cover rounded-sm md:translate-y-12"
          />
          <img
            src="https://picsum.photos/600/800?random=202"
            alt="소울 다이닝의 우아한 인테리어"
            loading="lazy"
            className="w-full h-[300px] object-cover rounded-sm"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              이야기가 있는<br/>
              <span className="italic text-stone-600">한국의 맛</span>
            </h2>
            <div className="w-12 h-1 bg-stone-800"></div>
          </div>
          
          <div className="space-y-6 text-stone-600 leading-loose font-light">
            <p>
              소울 다이닝은 'Soul'이라는 단어가 가진 영혼의 울림과 
              한국의 식문화인 '소울푸드'를 현대적으로 재해석합니다.
            </p>
            <p>
              우리의 식탁은 단순한 식사가 아닌, 계절의 흐름과 
              땅의 기운을 담은 하나의 작품입니다. 
              김희은 셰프의 섬세한 터치로 완성되는 
              다채로운 한식의 세계로 여러분을 초대합니다.
            </p>
          </div>

          <div className="pt-4">
             <span className="inline-block border-b border-stone-800 pb-1 text-sm tracking-widest uppercase cursor-pointer hover:text-stone-500 hover:border-stone-500 transition-colors">
               Read Our Story
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;