import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = ['Home', 'About', 'Service', 'Store', 'Testimonial', 'Contact'];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logomiraco.png" alt="MIRACO Logo" className="h-10 w-auto object-contain" />
            <span className="text-white font-display font-bold text-2xl tracking-wider">
              MIRACO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-white hover:text-brand-red transition-colors text-sm font-medium uppercase tracking-wide relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-brand-red transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && <div className="md:hidden bg-brand-dark absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-white hover:text-brand-red hover:bg-white/5 px-3 py-3 rounded-md text-base font-medium uppercase tracking-wide">
                {link}
              </a>)}
          </div>
        </div>}
    </nav>;
}