
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added Logo to the imported constants to resolve "Cannot find name 'Logo'" error
import { SLOGAN, BRAND_NAME, LOCATION, PRODUCTS, Logo } from '../constants';
import MeatCalculator from '../components/MeatCalculator';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Beef" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center space-x-2 bg-orange-600/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>Halal Certified • Nairobi South C</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight brand-font">
            {SLOGAN.split(',').map((part, i) => (
              <span key={i} className="block">{part.trim()}</span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 font-medium max-w-2xl mx-auto">
            Experience the gold standard of fresh meat. Ethical sourcing, precise cuts, and unmatched energy for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/order" className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-full text-lg font-extrabold shadow-2xl transition-all transform hover:-translate-y-1">
              Order Fresh Meat Now
            </Link>
            <Link to="/products" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all">
              View Our Selection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="bg-rose-50 p-2 rounded-lg text-rose-600 font-bold">100%</div>
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Halal Slaughtered</span>
          </div>
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="bg-orange-50 p-2 rounded-lg text-orange-600 font-bold">Daily</div>
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Fresh Arrivals</span>
          </div>
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-900 font-bold">South C</div>
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Local Trusted</span>
          </div>
        </div>
      </section>

      {/* Interactive Mesh Gradient Section */}
      <section className="relative py-24 animate-mesh overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center text-white">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 brand-font leading-tight">
              Eat Strong,<br/>Live Better.
            </h2>
            <p className="text-xl text-rose-50/90 mb-8 leading-relaxed">
              We believe meat is more than food—it's the fuel for your ambition. Our cuts are high in protein, iron, and vitality nutrients.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="block text-3xl font-bold mb-1">26g</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Protein per 100g</span>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="block text-3xl font-bold mb-1">Zero</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Preservatives</span>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-3xl text-slate-900 shadow-2xl transform hover:rotate-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4 text-rose-900">Meat Planning Tool</h3>
            <p className="text-slate-600 mb-6 text-sm">Need help deciding how much to order for your family or event? Use our quick calculator.</p>
            <MeatCalculator />
          </div>
        </div>
      </section>

      {/* Popular Products Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-rose-900 brand-font">Best Sellers</h2>
              <p className="text-slate-500 mt-2">Nairobi's favorite cuts of the week.</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-rose-600 font-bold hover:underline">
              See All Products
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.popular).map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Fresh Daily
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-rose-600 text-xs font-black uppercase tracking-widest block mb-2">{product.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.description}</p>
                  <Link to="/order" className="inline-block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-rose-900 transition-colors">
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Halal Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block p-4 rounded-full bg-rose-50 mb-8">
            <Logo className="h-16 w-16" />
          </div>
          <h2 className="text-4xl font-black mb-8 brand-font text-rose-900">Our Halal Covenant</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Every animal is slaughtered according to the strict principles of Sharia. 
            We ensure minimal pain, maximum hygiene, and ethical sourcing from small-scale farmers who treat their animals with dignity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-rose-600 mb-4 flex justify-center">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">100% Certified</h4>
              <p className="text-sm text-slate-500">Regularly audited by local Halal authorities.</p>
            </div>
            <div className="p-6">
              <div className="text-rose-600 mb-4 flex justify-center">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Clean Handling</h4>
              <p className="text-sm text-slate-500">Stainless steel environments and cold-chain delivery.</p>
            </div>
            <div className="p-6">
              <div className="text-rose-600 mb-4 flex justify-center">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Community Driven</h4>
              <p className="text-sm text-slate-500">Owned and operated by the South C community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
