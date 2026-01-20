import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav
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
            href="#reservation"
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
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} color={isScrolled ? '#292524' : '#292524'} />} 
          {/* Note: Icon color logic simplified for visibility on both dark/light hero images. Using dark for safety if hero is light, or rely on blend mix mode later. For now, solid color. */}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
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