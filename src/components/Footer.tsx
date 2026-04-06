import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
export function Footer() {
  return <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Contact Heading */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="h-0.5 bg-white flex-1 max-w-[200px]"></div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-widest uppercase">
            Contact
          </h2>
          <div className="h-0.5 bg-white flex-1 max-w-[200px]"></div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="flex items-center gap-3 text-lg">
            <MapPin className="w-6 h-6" />
            <span>Jl. Pahlawan No.72, Kota Madiun, 63121</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Phone className="w-6 h-6" />
            <span>082315273689</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Clock className="w-6 h-6" />
            <span>08.00—20.45</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base underline underline-offset-4 decoration-white/50 hover:decoration-white">
          <a href="#home" className="hover:text-brand-red transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-brand-red transition-colors">
            About
          </a>
          
          <a href="#contact" className="hover:text-brand-red transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
            <Phone className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </a>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm">Stay connected with us</p>
          <p className="text-xs text-white/60">
            © 2026 MIRACO Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
}