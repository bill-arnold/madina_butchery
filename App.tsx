
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';
import Home from './pages/Home';
import Products from './pages/Products';
import OrderForm from './pages/OrderForm';
import About from './pages/About';
import FAQ from './pages/FAQ';
import LegalPage from './pages/LegalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
            <Route path="/terms" element={<LegalPage title="Terms & Conditions" />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
