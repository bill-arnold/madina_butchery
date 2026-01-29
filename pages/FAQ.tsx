
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is your meat strictly Halal?",
      a: "Absolutely. We are owned and operated by Muslims. Every animal is slaughtered according to Sharia principles by a qualified Muslim butcher, ensuring the meat is Tayyib (wholesome and clean)."
    },
    {
      q: "Do you deliver to South C and surrounding areas?",
      a: "Yes, we prioritize South C, South B, Lang'ata, and Nairobi West. We offer fast delivery to ensure your meat arrives cold and fresh."
    },
    {
      q: "Can I request specific cuts or mince?",
      a: "Yes! Our master butchers can prepare your meat exactly as you like: Keema (mince), Karanga (cubes), Steaks, or Stir-fry strips. Just specify in the order form."
    },
    {
      q: "What are your operating hours?",
      a: "We are open Monday to Sunday, from 7:00 AM to 8:30 PM. Orders placed late in the evening are delivered early the next morning."
    },
    {
      q: "Do you handle bulk orders for weddings or aqiqah?",
      a: "We specialize in bulk orders. We can provide whole goats or large quantities of beef for events. Contact us via WhatsApp for wholesale pricing."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-rose-900 brand-font text-center mb-16">Questions? We have answers.</h1>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-rose-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start">
                <span className="text-rose-600 mr-4 font-black">Q.</span>
                {faq.q}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
