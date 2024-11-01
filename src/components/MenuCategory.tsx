import React from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../data/menuData';
import { Plus } from 'lucide-react';

interface MenuCategoryProps {
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ items }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <span className="text-orange-600 font-bold text-lg ml-4">{item.price} DH</span>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
            >
              <Plus size={20} className="group-hover:scale-110 transition-transform" />
              <span>Ajouter au panier</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;