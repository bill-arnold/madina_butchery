
import React from 'react';

const LegalPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-white min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-black text-rose-900 brand-font mb-12">{title}</h1>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Commitment to Quality</h2>
            <p>At Madina Butchery, we are committed to providing only the freshest Halal-certified meat. If you are unsatisfied with the quality of your order upon delivery, please notify us immediately for a replacement or resolution.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Delivery Policy</h2>
            <p>We deliver within Nairobi South C and its immediate environs. Delivery times are estimates and may vary due to traffic or weather conditions. We strive to deliver within 60-90 minutes of order confirmation.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Privacy and Data</h2>
            <p>We value your privacy. The information collected during the ordering process (name, phone, location) is used solely for the purpose of fulfilling your order and providing customer support. We do not sell your data to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Halal Compliance</h2>
            <p>All products sold are guaranteed Halal. We maintain strict separation between products and follow rigorous cleaning protocols in our South C facility.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
