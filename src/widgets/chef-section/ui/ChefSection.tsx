import React from 'react';
import { Award, BookOpen, Utensils, Star } from 'lucide-react';
import { IMAGES } from '@/shared/config';
import { SectionHeader, Card } from '@/shared/ui';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Star size={18} aria-hidden="true" />,
    title: '미슐랭 가이드 1스타',
    description: '소울 레스토랑'
  },
  {
    icon: <Award size={18} aria-hidden="true" />,
    title: '미슐랭 빕 구르망',
    description: '에그앤플라워'
  },
  {
    icon: <Award size={18} aria-hidden="true" />,
    title: '라 리스트 Top 1000',
    description: '세계 최고의 레스토랑 선정'
  },
  {
    icon: <Award size={18} aria-hidden="true" />,
    title: 'WACS 세계요리경연대회',
    description: '금메달 수상'
  }
];

const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader subtitle="Our Chef" title="김희은 셰프" />

        {/* Chef Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Chef Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={IMAGES.chef}
                alt="김희은 셰프의 프로필 사진"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-stone-300 -z-10 hidden md:block"></div>
          </div>

          {/* Chef Bio */}
          <div className="space-y-8 lg:pt-12">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900">
                예술에서 요리로, 새로운 길을 열다
              </h3>
              <div className="w-12 h-1 bg-stone-800"></div>
            </div>

            <div className="space-y-6 text-stone-600 leading-loose font-light">
              <p>
                예술가 집안에서 태어나 도예를 공부하던 김희은 셰프는
                할머니로부터 물려받은 요리에 대한 재능을 발견하고
                새로운 길을 걷기 시작했습니다.
              </p>
              <p>
                국제호텔직업전문학교와 세종대학교 관광대학원에서
                요리의 기초부터 깊이까지 탐구하며,
                WACS 세계요리경연대회에서 금메달을 수상하며
                실력을 인정받았습니다.
              </p>
              <p>
                현재 미슐랭 1스타 한식 파인다이닝 '소울'과
                빕 구르망 '에그앤플라워'를 운영하며
                한국 요리의 새로운 가능성을 보여주고 있습니다.
              </p>
            </div>

            {/* Philosophy Icons */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-stone-200 rounded-full">
                  <Utensils size={20} className="text-stone-700" aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Tradition</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-stone-200 rounded-full">
                  <BookOpen size={20} className="text-stone-700" aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Innovation</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-stone-200 rounded-full">
                  <Award size={20} className="text-stone-700" aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <Card>
          <h3 className="text-2xl font-serif text-stone-900 mb-10 text-center">
            Awards & Recognition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-sm text-stone-500 font-light">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ChefSection;
