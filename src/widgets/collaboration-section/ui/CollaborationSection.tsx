import React from 'react';
import { SectionHeader } from '@/shared/ui';

const CollaborationSection: React.FC = () => {
  const placeholders = Array(4).fill(null);

  return (
    <section id="collaboration" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Partnership" title="Collaboration" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="aspect-video bg-stone-100 flex items-center justify-center border border-stone-200"
            >
              <span className="text-stone-400 text-sm tracking-widest uppercase">
                Brand Logo
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-500 mt-12 text-sm font-light">
          소울 다이닝과 함께하는 브랜드들
        </p>
      </div>
    </section>
  );
};

export default CollaborationSection;
