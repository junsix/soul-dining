import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { LINKS, RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-3xl font-display text-stone-100 tracking-wider">SOUL DINING</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            A culinary journey through the soul of Korea, reimagined for the modern palate.
          </p>
          <div className="flex space-x-4 pt-4">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램"
              className="hover:text-stone-100 transition-colors"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${RESTAURANT_INFO.email}`}
              aria-label="이메일 문의"
              className="hover:text-stone-100 transition-colors"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-stone-100 font-serif text-lg">Contact & Location</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" />
              <span>{RESTAURANT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" aria-hidden="true" />
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-stone-100 transition-colors">
                {RESTAURANT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" aria-hidden="true" />
              <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-stone-100 transition-colors">
                {RESTAURANT_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h3 className="text-stone-100 font-serif text-lg">Opening Hours</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-stone-500 text-xs uppercase mb-1">Lunch</span>
              <p>{RESTAURANT_INFO.hours.lunch}</p>
              <p className="text-xs text-stone-500 mt-1">L.O {RESTAURANT_INFO.hours.lastOrder.lunch}</p>
            </div>
            <div>
              <span className="block text-stone-500 text-xs uppercase mb-1">Dinner</span>
              <p>{RESTAURANT_INFO.hours.dinner}</p>
              <p className="text-xs text-stone-500 mt-1">L.O {RESTAURANT_INFO.hours.lastOrder.dinner}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-stone-800">
            <p className="text-xs text-stone-500">{RESTAURANT_INFO.closedDaysEn}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
        &copy; {new Date().getFullYear()} Soul Dining. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
