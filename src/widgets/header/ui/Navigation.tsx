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
    { name: 'Reservation', href: '#reservation' },
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
          className={`md:hidden p-2 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 transition-colors ${
            isScrolled ? 'text-stone-800' : 'text-white'
          }`}
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
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={isMobileMenuOpen}
        aria-label="모바일 메뉴"
        className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white z-[9999] flex flex-col md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center px-6 py-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1"
            aria-label="메뉴 닫기"
          >
            <X size={24} className="text-stone-800" />
          </button>
          <div className="flex-1 flex justify-center pr-8">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={IMAGES.logo} alt="Soul Dining" className="h-10 w-auto" />
            </a>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <nav>
            <a
              href="https://app.catchtable.co.kr/ct/shop/souldining"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-stone-900 text-2xl tracking-wide uppercase font-light"
            >
              Reservations
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-stone-900 text-2xl tracking-wide uppercase font-light hover:text-stone-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="bg-stone-900 py-6 px-8">
          <p className="text-stone-400 text-sm leading-relaxed">
            Korean Contemporary Cuisine in Seoul, Haebangchon
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
