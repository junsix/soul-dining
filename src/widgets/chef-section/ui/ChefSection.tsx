import React from 'react';
import { Award, Star } from 'lucide-react';
import { IMAGES } from '@/shared/config';
import { SectionHeader, Card } from '@/shared/ui';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const achievements: Achievement[] = [
  {
    icon: <Star size={18} aria-hidden="true" />,
    title: '미슐랭 가이드 1스타',
    description: '소울 레스토랑 (2023~)'
  },
  {
    icon: <Award size={18} aria-hidden="true" />,
    title: 'La Liste Top 1000',
    description: '2025 세계 최고의 레스토랑'
  },
  {
    icon: <Award size={18} aria-hidden="true" />,
    title: '블루리본 3개'
  }
];

const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-16 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader subtitle="Owner Chefs" title="두 셰프의 이야기" />

        {/* Two Chefs Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
          {/* Chef Kim Hee-eun */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
              <img
                src={IMAGES.chefs.kimHeeeun}
                alt="김희은 셰프"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-stone-900">김희은</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Kim Hee-eun</p>
              <p className="text-stone-600 leading-relaxed font-light">
                예술가 집안에서 도예를 공부하던 중, 아버지의 반대를 무릅쓰고
                요리의 길을 택했습니다.
                섬세한 감각으로 요리의 디테일을 완성합니다.
              </p>
            </div>
          </div>

          {/* Chef Yoon Dae-hyun */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
              <img
                src={IMAGES.chefs.yoonDaehyun}
                alt="윤대현 셰프"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-stone-900">윤대현</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Yoon Dae-hyun</p>
              <p className="text-stone-600 leading-relaxed font-light">
                "세계 최고와 동네 식당의 차이는
                기술이 아니라 태도"라는 깨달음으로 요리의 구조를 설계합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 space-y-6 md:space-y-8">
            <div className="w-16 h-[1px] bg-stone-300 mx-auto"></div>
            <blockquote className="text-xl md:text-3xl font-serif text-stone-800 leading-relaxed px-2">
              "우리는 각자 10가지 색을 가지고 있었는데,
              <br className="hidden md:block" />
              섞이니 20가지가 아닌 무한대가 되었습니다."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-6 md:p-8 space-y-3 md:space-y-4">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase">Attitude</p>
              <h4 className="text-xl font-serif text-stone-900">기술보다 태도</h4>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                세계 최고의 레스토랑과 동네 식당의 차이는 기술이 아니라 태도입니다.
                재료 하나, 손님 한 분을 대하는 마음가짐이 요리의 격을 결정합니다.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 space-y-3 md:space-y-4">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase">Obsession</p>
              <h4 className="text-xl font-serif text-stone-900">재료에 대한 집착</h4>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                미역 50여 종을 맛보고, 전국 각지의 생산자를 직접 찾아갑니다.
                발효 과정을 연구하고, 제철의 맛을 이해할 때까지 멈추지 않습니다.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 space-y-3 md:space-y-4">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase">Harmony</p>
              <h4 className="text-xl font-serif text-stone-900">구조와 디테일의 조화</h4>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                요리의 큰 그림을 설계하는 윤대현 셰프와 섬세한 감각으로 완성하는 김희은 셰프.
                서로 다른 강점이 보완하며 컨템포러리 한식의 새로운 장을 엽니다.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <Card>
          <h3 className="text-2xl font-serif text-stone-900 mb-10 text-center">
            Awards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-stone-100 rounded-full group-hover:bg-stone-800 transition-colors">
                  <span className="text-stone-600 group-hover:text-white transition-colors">
                    {achievement.icon}
                  </span>
                </div>
                <h4 className="text-base font-serif text-stone-800 mb-1">
                  {achievement.title}
                </h4>
                {achievement.description && (
                  <p className="text-sm text-stone-500 font-light">
                    {achievement.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ChefSection;
