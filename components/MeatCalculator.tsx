
import React, { useState } from 'react';

const MeatCalculator: React.FC = () => {
  const [people, setPeople] = useState(4);
  const [mealType, setMealType] = useState('normal'); // 'normal' or 'feast'

  const calculateKg = () => {
    const basePerPerson = mealType === 'feast' ? 0.4 : 0.25;
    return (people * basePerPerson).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Number of People</label>
        <div className="flex items-center space-x-4">
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={people} 
            onChange={(e) => setPeople(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
          />
          <span className="font-bold text-xl text-rose-900 w-12">{people}</span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Occasion Type</label>
        <div className="flex space-x-2">
          <button 
            onClick={() => setMealType('normal')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${
              mealType === 'normal' 
              ? 'bg-rose-50 border-rose-600 text-rose-900 shadow-sm' 
              : 'border-slate-100 text-slate-500 hover:border-slate-200'
            }`}
          >
            Daily Family Meal
          </button>
          <button 
            onClick={() => setMealType('feast')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${
              mealType === 'feast' 
              ? 'bg-rose-50 border-rose-600 text-rose-900 shadow-sm' 
              : 'border-slate-100 text-slate-500 hover:border-slate-200'
            }`}
          >
            Big Feast / BBQ
          </button>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
        <span className="block text-xs font-black uppercase tracking-widest text-orange-600 mb-1">Recommended Order</span>
        <div className="text-4xl font-black text-rose-900 brand-font">
          {calculateKg()} <span className="text-lg">KG</span>
        </div>
      </div>
    </div>
  );
};

export default MeatCalculator;
