import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import { useCart } from './context/CartContext';
import LanguageSelector from './components/LanguageSelector';
import DeliveryOption from './components/DeliveryOption';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';

function AppContent() {
  const { language } = useLanguage();
  const { deliveryType, setDeliveryType } = useCart();

  if (!deliveryType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm">
          <LanguageSelector />
          <DeliveryOption onSelect={setDeliveryType} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Menu />
      </main>
      <Cart />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-amber-50 font-restaurant">
            <AppContent />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;