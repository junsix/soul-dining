import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/shared/lib';
import { LINKS } from '@/shared/config';

interface NavLink {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const isScrolled = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Chef', href: '#chef' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#footer' },
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
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
          <a href="#" className={`text-2xl tracking-widest font-display font-bold ${
            isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-stone-900 md:text-stone-50'
          } transition-colors duration-300`}>
            SOUL DINING
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
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
          <a
            href={LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 border text-sm uppercase tracking-widest transition-all ${
               isScrolled
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-stone-900"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
