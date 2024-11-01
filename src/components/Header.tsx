import React from 'react';
import { MapPin, Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { toggleCart, itemCount } = useCart();

  const handleCallClick = () => {
    window.location.href = 'tel:+212611114639';
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/BaoXjhE', '_blank');
  };

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-bold text-orange-600">DJOCO</div>
          
          <nav className="flex gap-3">
            <button
              onClick={handleMapClick}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MapPin size={20} />
              <span className="hidden md:inline">Notre Location</span>
            </button>
            
            <button
              onClick={handleCallClick}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone size={20} />
              <span className="hidden md:inline">Appelez-nous</span>
            </button>
            
            <button
              onClick={toggleCart}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="hidden md:inline">Panier</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;