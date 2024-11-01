import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Cart from './components/Cart';
import DeliveryOption from './components/DeliveryOption';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';

function AppContent() {
  const { deliveryType, setDeliveryType } = useCart();

  if (!deliveryType) {
    return <DeliveryOption onSelect={setDeliveryType} />;
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
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-amber-50">
          <AppContent />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;