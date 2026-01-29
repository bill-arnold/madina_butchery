
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MeatCategory, OrderFormData } from '../types';
import { PREPARATIONS, BRAND_NAME, PHONE_NUMBER } from '../constants';

const OrderForm: React.FC = () => {
  const location = useLocation();
  const preselects = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>({
    category: preselects.preselectCategory || '',
    cut: preselects.preselectCut || '',
    weight: 1,
    preparation: '',
    name: '',
    phone: '',
    location: '',
    notes: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'weight' ? parseFloat(value) : value }));
  };

  const handleCategorySelect = (cat: MeatCategory) => {
    setFormData(prev => ({ ...prev, category: cat }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `ORDER REQUEST - ${BRAND_NAME}
---
Product: ${formData.category} - ${formData.cut}
Weight: ${formData.weight} KG
Preparation: ${formData.preparation}
Customer: ${formData.name}
Phone: ${formData.phone}
Delivery Location: ${formData.location}
Notes: ${formData.notes}
---
Please confirm my order.`;

    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setStep(4);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Tracker */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-12 px-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-200 text-slate-400'
                }`}>
                  {s}
                </div>
                <span className={`text-[10px] mt-2 font-black uppercase tracking-widest ${
                  step >= s ? 'text-rose-900' : 'text-slate-400'
                }`}>
                  {s === 1 ? 'Selection' : s === 2 ? 'Details' : 'Contact'}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 overflow-hidden">
          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-500">
              <h2 className="text-3xl font-black text-rose-900 brand-font">What are we cutting today?</h2>
              
              <div className="space-y-6">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Step 1: Pick Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.values(MeatCategory).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`p-4 rounded-2xl border-2 text-center transition-all ${
                        formData.category === cat 
                        ? 'border-rose-600 bg-rose-50 text-rose-900 shadow-sm' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                      }`}
                    >
                      <span className="block font-bold">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {formData.category && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Step 2: Weight & Processing</label>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Weight (KG)</label>
                      <div className="flex items-center space-x-4 bg-slate-50 rounded-xl p-2 border border-slate-200">
                        <button 
                          onClick={() => setFormData(p => ({ ...p, weight: Math.max(0.5, p.weight - 0.5) }))}
                          className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-xl hover:bg-slate-50"
                        >-</button>
                        <input 
                          type="number" 
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          className="w-full text-center bg-transparent font-bold text-xl outline-none"
                        />
                        <button 
                          onClick={() => setFormData(p => ({ ...p, weight: p.weight + 0.5 }))}
                          className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-xl hover:bg-slate-50"
                        >+</button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">How should we prep it?</label>
                      <select 
                        name="preparation"
                        value={formData.preparation}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-rose-600/20"
                      >
                        <option value="">Choose preparation...</option>
                        {PREPARATIONS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <button 
                disabled={!formData.category || !formData.preparation}
                onClick={nextStep}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-rose-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                Next: Your Details
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-500">
              <h2 className="text-3xl font-black text-rose-900 brand-font">Where should we deliver?</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Delivery Location (Nairobi South C & Environs)</label>
                  <input 
                    type="text"
                    name="location"
                    placeholder="Apartment name, Road, or Landmark..."
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 font-medium outline-none focus:ring-2 focus:ring-rose-600/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Special Instructions</label>
                  <textarea 
                    name="notes"
                    placeholder="e.g. Wrap in separate 1KG bags, deliver after 2 PM..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 font-medium outline-none focus:ring-2 focus:ring-rose-600/20"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 py-5 rounded-2xl font-bold border-2 border-slate-100 text-slate-500">Back</button>
                <button 
                  disabled={!formData.location}
                  onClick={nextStep}
                  className="flex-[2] bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-rose-900 transition-all disabled:opacity-50 shadow-xl"
                >
                  Next: Finish Order
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-500">
              <h2 className="text-3xl font-black text-rose-900 brand-font">Almost there!</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 font-medium outline-none focus:ring-2 focus:ring-rose-600/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    placeholder="07XX XXX XXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 font-medium outline-none focus:ring-2 focus:ring-rose-600/20"
                  />
                </div>
              </div>

              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h4 className="font-bold text-rose-900 mb-3 uppercase tracking-widest text-xs">Order Summary</h4>
                <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                  <span>{formData.category} - {formData.preparation}</span>
                  <span>{formData.weight} KG</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 py-5 rounded-2xl font-bold border-2 border-slate-100 text-slate-500">Back</button>
                <button 
                  disabled={!formData.name || !formData.phone}
                  onClick={handleSubmit}
                  className="flex-[2] bg-rose-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-rose-700 transition-all disabled:opacity-50 shadow-xl shadow-rose-200"
                >
                  Confirm & Send WhatsApp
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12 space-y-8 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-black text-rose-900 brand-font">Order Sending...</h2>
              <p className="text-xl text-slate-600 max-w-md mx-auto">
                We've redirected you to WhatsApp. Please hit "Send" on the message to finalize your order with our butcher team!
              </p>
              <div className="pt-8">
                 <button onClick={() => setStep(1)} className="text-rose-600 font-bold hover:underline">Start New Order</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
