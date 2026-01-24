import React, { useState } from 'react';
import { Utensils, Moon } from 'lucide-react';
import { MenuType } from '@/shared/types';
import { SectionHeader, Card } from '@/shared/ui';
import { MENUS } from '@/entities/menu';

const MenuSection: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>(MenuType.DINNER);

  const currentMenu = MENUS.find(m => m.type === activeMenu) || MENUS[1];

  return (
    <section id="menu" className="py-24 bg-stone-100 relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader subtitle="Seasonal Tasting Menu" title="The Course" />

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-stone-200 p-1 rounded-full">
            <button
              onClick={() => setActiveMenu(MenuType.LUNCH)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeMenu === MenuType.LUNCH
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <Utensils size={16} /> LUNCH
            </button>
            <button
              onClick={() => setActiveMenu(MenuType.DINNER)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeMenu === MenuType.DINNER
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <Moon size={16} /> DINNER
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <Card>
          <div className="text-center mb-12 pb-8 border-b border-stone-100">
             <h3 className="text-3xl font-serif text-stone-800 mb-2">{currentMenu.title}</h3>
             <p className="text-xl text-stone-500 font-light italic">{currentMenu.price}</p>
          </div>

          <div className="space-y-0">
            {currentMenu.courses.map((dish, index) => (
              <div key={`${dish.id}-${index}`} className="flex items-center gap-4 py-3 border-b border-stone-100 last:border-0">
                <span className="text-xs text-stone-400 font-mono w-6">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-lg font-serif text-stone-800">
                  {dish.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-stone-400 uppercase tracking-widest">
              * Menu items are subject to change based on seasonal availability.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MenuSection;
