
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Meat', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="h-9 w-9 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-rose-900 tracking-tight">{BRAND_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path) ? 'text-rose-600' : 'text-slate-600 hover:text-rose-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-rose-200 transition-all hover:-translate-y-0.5"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-rose-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-slate-700 hover:text-rose-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-rose-600 text-white py-3 rounded-xl font-bold shadow-md shadow-rose-100"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
