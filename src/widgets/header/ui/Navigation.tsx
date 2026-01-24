import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/shared/lib';
import { IMAGES } from '@/shared/config';

interface NavLink {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const isScrolled = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chef', href: '#chef' },
    { name: 'Reserve', href: '#reservation' },
  ];

  return (
    <nav
      aria-label="메인 네비게이션"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-stone-50/95 backdrop-blur-sm border-stone-200 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center relative z-[70]">
        {/* Mobile: Hamburger (left) */}
        <button
          className="md:hidden text-stone-800 p-2 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Logo - Mobile: center, Desktop: left */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <a href="#">
            <img
              src={IMAGES.logo}
              alt="Soul Dining"
              className="h-10 md:h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center flex-shrink-0 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-stone-800' : 'text-stone-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile: Empty space for balance */}
        <div className="md:hidden w-[44px] flex-shrink-0"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
          className="fixed inset-0 w-full h-full bg-stone-50 z-[60] flex flex-col justify-center items-center space-y-8 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-stone-900 py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
