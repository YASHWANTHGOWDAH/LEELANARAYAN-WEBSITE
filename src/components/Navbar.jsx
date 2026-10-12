import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Music2, UserPlus, Settings } from 'lucide-react';

export default function Navbar({ onOpenRegister, onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Leela' },
    { path: '/teacher', label: 'My Teacher' },
    { path: '/classes', label: 'Music Classes' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md border-b border-gold-500/20 py-3'
          : 'bg-gradient-to-b from-maroon-950/90 via-maroon-950/70 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full maroon-gradient-bg border border-gold-400 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition">
              <Music2 className="w-5 h-5" />
            </div>
            <div>
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wider block leading-none ${isScrolled ? 'text-maroon-900' : 'text-cream-50'}`}>
                LEELA NARAYAN
              </span>
              <span className={`text-[10px] sm:text-xs font-sans tracking-widest uppercase block mt-1 ${isScrolled ? 'text-gold-700' : 'text-gold-400'}`}>
                Carnatic Vocalist & Educator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                    isScrolled
                      ? isActive
                        ? 'text-maroon-900 bg-gold-400/30 font-bold'
                        : 'text-stone-700 hover:text-maroon-900 hover:bg-cream-200/50'
                      : isActive
                      ? 'text-gold-400 bg-white/20 font-bold'
                      : 'text-cream-100 hover:text-gold-400 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              title="Admin Editor"
              className={`p-2 rounded-full transition ${
                isScrolled ? 'text-stone-500 hover:text-maroon-800 hover:bg-stone-200/50' : 'text-stone-300 hover:text-gold-400 hover:bg-white/10'
              }`}
            >
              <Settings className="w-4 h-4" />
            </button>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-full maroon-gradient-bg text-gold-400 border border-gold-500/50 hover:border-gold-400 font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join a Class</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/register"
              className="px-3.5 py-1.5 rounded-full maroon-gradient-bg text-gold-400 text-xs font-semibold border border-gold-400/40"
            >
              Join Class
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`p-2 rounded-lg ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-xl border-b border-gold-500/30 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-maroon-800 text-gold-400 font-bold'
                      : 'text-stone-700 hover:bg-cream-200/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-stone-200/60 flex flex-col gap-2">
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl maroon-gradient-bg text-gold-400 font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Join a Class Now</span>
              </Link>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="w-full py-2 text-stone-500 hover:text-stone-800 text-xs font-medium text-center flex items-center justify-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Admin & Content Editor</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
