import React from 'react';
import { Music2, Instagram, Youtube, Facebook, Linkedin, Heart } from 'lucide-react';

export default function Footer({ onOpenRegister, onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (e, platformName) => {
    // Open dummy placeholder profile in new tab with user notice
    console.log(`Opening dummy ${platformName} profile placeholder.`);
  };

  return (
    <footer className="maroon-gradient-bg text-cream-100 border-t border-gold-500/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gold-500/20">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-400 text-maroon-950 flex items-center justify-center shadow-md font-bold">
                <Music2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-gold-400 block leading-none">
                  LEELA NARAYAN
                </span>
                <span className="text-[10px] tracking-widest uppercase text-cream-200 block mt-1">
                  Carnatic Vocalist • Music Educator • Performer • Anchor
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Founder of <strong>Leela Narayan School of Performing Arts (LNSOPA)</strong>. Empowering learners through Carnatic vocal music, Devaranamas, Bhajans, Light music, and stage performance training in Bengaluru & online globally.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold border border-gold-400/30">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-gold-400 text-base uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-300">
              <li><a href="/" className="hover:text-gold-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-gold-400 transition">About Leela</a></li>
              <li><a href="/teacher" className="hover:text-gold-400 transition">My Teacher</a></li>
              <li><a href="/classes" className="hover:text-gold-400 transition">Music Classes</a></li>
              <li><a href="/achievements" className="hover:text-gold-400 transition">Achievements</a></li>
              <li><a href="/events" className="hover:text-gold-400 transition">Events</a></li>
              <li><a href="/gallery" className="hover:text-gold-400 transition">Gallery</a></li>
              <li><a href="/testimonials" className="hover:text-gold-400 transition">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-gold-400 transition">Contact Us</a></li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-gold-400 transition text-gold-400/80">Admin Panel</button>
              </li>
            </ul>
          </div>

          {/* Social Links & CTA */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-gold-400 text-base uppercase tracking-wider">
              Connect With Leela
            </h4>
            <p className="text-xs text-stone-300">
              Follow official channels for live recitals, music tutorials & student performances.
            </p>

            {/* Dummy Social Media Handles */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/leelanarayan.official"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram (Dummy Profile)"
                title="Leela Narayan Official Instagram"
                onClick={(e) => handleSocialClick(e, 'Instagram')}
                className="w-9 h-9 rounded-full bg-white/10 text-gold-400 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/@leelanarayanmusic"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube (Dummy Channel)"
                title="Leela Narayan Official YouTube"
                onClick={(e) => handleSocialClick(e, 'YouTube')}
                className="w-9 h-9 rounded-full bg-white/10 text-gold-400 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com/leelanarayanmusic"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook (Dummy Page)"
                title="Leela Narayan Official Facebook"
                onClick={(e) => handleSocialClick(e, 'Facebook')}
                className="w-9 h-9 rounded-full bg-white/10 text-gold-400 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/leelanarayan"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn (Dummy Profile)"
                title="Leela Narayan Official LinkedIn"
                onClick={(e) => handleSocialClick(e, 'LinkedIn')}
                className="w-9 h-9 rounded-full bg-white/10 text-gold-400 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full py-2.5 rounded-full bg-gold-400 text-maroon-950 font-bold text-xs hover:bg-gold-500 transition shadow"
              >
                Join Music Classes
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            © {currentYear} Leela Narayan. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Crafted with devotion & elegance for</span>
            <Heart className="w-3.5 h-3.5 text-coral-400 fill-current inline" />
            <span className="text-gold-400 font-semibold">Carnatic Music</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
