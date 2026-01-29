
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { MeatCategory } from '../types';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<MeatCategory | 'All'>('All');

  const categories = ['All', ...Object.values(MeatCategory)];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <header className="bg-rose-900 py-24 text-center px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 brand-font leading-tight">
            Our Premium Meats
          </h1>
          <p className="text-rose-100 text-xl max-w-2xl mx-auto font-medium">
            Daily fresh arrivals from vetted farms. 100% Halal and hygienically handled for the South C community.
          </p>
        </div>
      </header>

      {/* Category Pills */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar py-4">
          <div className="flex space-x-3 min-w-max justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur text-rose-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <Link 
                    to="/order" 
                    state={{ preselectCategory: product.category, preselectCut: product.name }}
                    className="flex items-center justify-center w-full bg-rose-600 text-white py-4 rounded-xl font-black hover:bg-rose-900 transition-colors shadow-lg shadow-rose-100 group-hover:translate-y-[-2px]"
                  >
                    Select to Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
