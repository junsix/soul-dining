import React, { useState } from 'react';
import { MENUS } from '../constants';
import { MenuType } from '../types';
import { Utensils, Moon } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>(MenuType.DINNER);

  const currentMenu = MENUS.find(m => m.type === activeMenu) || MENUS[1];

  return (
    <section id="menu" className="py-24 bg-stone-100 relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">Seasonal Tasting Menu</p>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">The Course</h2>
        </div>

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
        <div className="bg-white p-8 md:p-12 shadow-xl shadow-stone-200/50 relative overflow-hidden">
          {/* Aesthetic Border Frame */}
          <div className="absolute inset-2 border border-stone-100 pointer-events-none"></div>
          
          <div className="text-center mb-12 pb-8 border-b border-stone-100">
             <h3 className="text-3xl font-serif text-stone-800 mb-2">{currentMenu.title}</h3>
             <p className="text-xl text-stone-500 font-light italic">{currentMenu.price}</p>
          </div>

          <div className="space-y-12 relative z-10">
            {currentMenu.courses.map((dish, index) => (
              <div key={`${dish.id}-${index}`} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                  <h4 className="text-xl font-serif font-medium text-stone-800 group-hover:text-stone-600 transition-colors">
                    {dish.name}
                  </h4>
                  <span className="hidden md:block h-[1px] flex-grow bg-stone-200 mx-6 relative top-[-6px]"></span>
                  <span className="text-xs text-stone-400 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                
                <div className="md:pl-4 md:border-l-2 md:border-stone-100 md:ml-2">
                  <p className="text-stone-600 text-sm leading-relaxed max-w-2xl mb-2">
                    {dish.description}
                  </p>
                  {dish.note && (
                    <p className="text-stone-400 text-xs italic mt-2">
                      * Guide: {dish.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xs text-stone-400 uppercase tracking-widest">
              * Menu items are subject to change based on seasonal availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;