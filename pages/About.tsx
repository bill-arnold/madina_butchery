
import React from 'react';
import { BRAND_NAME, LOCATION, Logo } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-rose-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <Logo className="h-24 w-24 mx-auto mb-10 brightness-200" />
          <h1 className="text-5xl md:text-8xl font-black brand-font mb-8">kula Nyama, Beba Chuma.</h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto font-medium">
            At {BRAND_NAME}, we believe that physical strength and spiritual purity go hand-in-hand.
            We provide the high-quality Halal fuel needed for a powerful life.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-rose-600 font-black uppercase tracking-widest text-xs block mb-4">Our Roots</span>
            <h2 className="text-4xl font-black text-rose-900 brand-font mb-8">From South C, For South C.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in the heart of {LOCATION}, {BRAND_NAME} was established to fill a gap in the local market:
              a butchery that combines traditional Halal values with modern hygiene and customer service.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just sell meat. We foster health. By sourcing only from farmers who prioritize
              natural feed and ethical treatment, we ensure every bite you take is packed with the nutrients
              nature intended.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-600/10 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=800"
              alt="Butchery Process"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-rose-900 brand-font mb-4">The 4 Pillars of Madina</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Zabihah Purity", desc: "Every animal is slaughtered individually by hand while reciting the Tasmiya." },
              { title: "Cold Chain Logistics", desc: "Our meat never touches warm air. It goes from slaughter to cooler to your kitchen." },
              { title: "Ethical Sourcing", desc: "We support small Kenyan pastoralists who raise animals naturally." },
              { title: "Transparent Weights", desc: "What you pay for is what you get. No excess fat, no hidden water weight." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:translate-y-[-8px] transition-all">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-black">{i + 1}</div>
                <h4 className="font-bold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
