
import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SLOGAN, LOCATION, PHONE_NUMBER, Logo } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-10 brightness-110" />
              <span className="text-2xl font-bold text-white tracking-tight">{BRAND_NAME}</span>
            </Link>
            <p className="text-sm font-medium italic text-orange-400">"{SLOGAN}"</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Nairobi's most trusted Halal butchery. We provide high-quality meat for health, strength, and ethical living.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-orange-400 transition-colors">Our Meat Products</Link></li>
              <li><Link to="/order" className="hover:text-orange-400 transition-colors">Place Order</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Halal Certification</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">Ordering FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:info@madinabutchery.co.ke" className="hover:text-orange-400 transition-colors">info@madinabutchery.co.ke</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Location</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {LOCATION}
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          <p>© {currentYear} {BRAND_NAME}. All Rights Reserved. Halal Certified & Proudly Kenyan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
