import React from 'react';
import { SectionHeader } from '@/shared/ui';
import { STORY_CONTENT, IMAGES } from '@/shared/config';

const StorySection: React.FC = () => {
  const stories = [
    {
      key: 'jang',
      ...STORY_CONTENT.jang,
      image: IMAGES.story.jang,
    },
    {
      key: 'ingredients',
      ...STORY_CONTENT.ingredients,
      image: IMAGES.story.ingredients,
    },
    {
      key: 'ceramics',
      ...STORY_CONTENT.ceramics,
      image: IMAGES.story.ceramics,
    },
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Our Philosophy"
          title="Soil to Soul"
          variant="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stories.map((story) => (
            <div
              key={story.key}
              className="group relative bg-stone-800 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-xs tracking-[0.2em] text-stone-400 uppercase">
                  {story.subtitle}
                </p>
                <h3 className="text-xl font-serif text-stone-100">
                  {story.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed font-light">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
